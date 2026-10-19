// Politeness rules for the monthly link check (scripts/check-freshness.ts):
// - requests to the same host run one at a time, and each starts at least MIN_GAP_MS after the previous one
//   to that host has finished;
// - redirects are followed hop by hop through the same per-host queue, so a hop never skips the gap;
// - different hosts proceed in parallel, up to the caller's concurrency limit.

import { CookieJar } from "./cookies";

/** Minimum pause between two requests to the same host, measured from the end of one to the start of the next. */
export const MIN_GAP_MS = 300;

/** Redirect hops followed before giving up (the Fetch standard's own limit is 20). */
export const MAX_REDIRECTS = 10;

/** Queue key: the hostname, so http/https and different ports of one server share a queue. */
export function hostKey(url: string): string {
  return new URL(url).hostname;
}

export interface Clock {
  now(): number;
  sleep(ms: number): Promise<void>;
}

export const systemClock: Clock = {
  now: () => Date.now(),
  sleep: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
};

/** Serializes tasks per host and leaves at least `minGapMs` between the end of one task and the start of the next. */
export class HostPacer {
  private readonly minGapMs: number;
  private readonly clock: Clock;
  private readonly lastEnd = new Map<string, number>();
  private readonly tails = new Map<string, Promise<unknown>>();

  constructor(minGapMs: number = MIN_GAP_MS, clock: Clock = systemClock) {
    this.minGapMs = minGapMs;
    this.clock = clock;
  }

  run<T>(url: string, task: () => Promise<T>): Promise<T> {
    const host = hostKey(url);
    const previous = this.tails.get(host) ?? Promise.resolve();
    const current = previous.then(async () => {
      const last = this.lastEnd.get(host);
      if (last !== undefined) {
        const wait = last + this.minGapMs - this.clock.now();
        if (wait > 0) await this.clock.sleep(wait);
      }
      try {
        return await task();
      } finally {
        this.lastEnd.set(host, this.clock.now());
      }
    });
    // A failed request must not stall the rest of the host's queue.
    this.tails.set(
      host,
      current.catch(() => undefined),
    );
    return current;
  }
}

/** Groups URLs by host, keeping the first-seen order of hosts and of URLs within each host. */
export function groupByHost(urls: readonly string[]): string[][] {
  const groups = new Map<string, string[]>();
  for (const url of urls) {
    const key = hostKey(url);
    const group = groups.get(key);
    if (group) {
      group.push(url);
    } else {
      groups.set(key, [url]);
    }
  }
  return [...groups.values()];
}

/** Runs `worker` over `items` with at most `concurrency` calls in flight; results keep the input order. */
export async function runPool<T, R>(
  items: readonly T[],
  concurrency: number,
  worker: (item: T) => Promise<R>,
): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let cursor = 0;
  async function lane(): Promise<void> {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await worker(items[index]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, () => lane()));
  return results;
}

export type FetchLike = (url: string, init: RequestInit) => Promise<Response>;

/**
 * Fetches `url` through `pacer`, following redirects manually so that every hop waits its turn in the
 * queue of the host it goes to. `fetchImpl` is called once per hop, when that hop actually starts.
 * Cookies set along the way go back to the same host on later hops, as a browser would (see CookieJar).
 */
export async function pacedFetch(
  url: string,
  init: RequestInit,
  pacer: HostPacer,
  fetchImpl: FetchLike,
  maxRedirects: number = MAX_REDIRECTS,
): Promise<Response> {
  let current = url;
  const jar = new CookieJar();
  for (let hops = 0; ; hops += 1) {
    const target = current;
    const headers = new Headers(init.headers);
    const cookie = jar.headerFor(target);
    if (cookie !== undefined) headers.set("cookie", cookie);
    const res = await pacer.run(target, () => fetchImpl(target, { ...init, headers, redirect: "manual" }));
    jar.store(target, res.headers.getSetCookie());
    const location = res.headers.get("location");
    if (res.status < 300 || res.status > 399 || location === null) return res;
    // Free the connection: the body of a redirect is never read.
    await res.body?.cancel();
    if (hops >= maxRedirects) throw new Error(`more than ${maxRedirects} redirects from ${url}`);
    current = new URL(location, target).toString();
  }
}
