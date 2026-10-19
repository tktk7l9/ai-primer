// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  groupByHost,
  hostKey,
  HostPacer,
  MAX_REDIRECTS,
  MIN_GAP_MS,
  pacedFetch,
  runPool,
  type Clock,
  type FetchLike,
} from "./pacing";

describe("hostKey", () => {
  it("keys by hostname, ignoring scheme, port, path and case", () => {
    expect(hostKey("https://Example.COM:8443/a?b=1")).toBe("example.com");
    expect(hostKey("http://example.com/x")).toBe("example.com");
    expect(hostKey("https://docs.example.com/")).toBe("docs.example.com");
  });
});

describe("HostPacer (system clock)", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it("runs requests to one host one at a time, at least MIN_GAP_MS apart", async () => {
    expect(MIN_GAP_MS).toBe(300);
    const pacer = new HostPacer();
    const t0 = Date.now();
    const starts: number[] = [];
    const task = async () => {
      starts.push(Date.now() - t0);
    };
    const done = Promise.all([
      pacer.run("https://a.example/1", task),
      pacer.run("https://a.example/2", task),
      pacer.run("http://A.example:8080/3", task),
    ]);
    await vi.runAllTimersAsync();
    await done;
    expect(starts).toEqual([0, 300, 600]);
  });

  it("measures the gap from the end of a slow request, so requests never overlap", async () => {
    const pacer = new HostPacer();
    const t0 = Date.now();
    const starts: number[] = [];
    let inFlight = 0;
    let peak = 0;
    const slow = async () => {
      starts.push(Date.now() - t0);
      inFlight += 1;
      peak = Math.max(peak, inFlight);
      await new Promise((resolve) => setTimeout(resolve, 500));
      inFlight -= 1;
    };
    const done = Promise.all([pacer.run("https://a.example/1", slow), pacer.run("https://a.example/2", slow)]);
    await vi.runAllTimersAsync();
    await done;
    expect(starts).toEqual([0, 800]);
    expect(peak).toBe(1);
  });

  it("lets different hosts proceed without waiting for each other", async () => {
    const pacer = new HostPacer();
    const t0 = Date.now();
    const log: string[] = [];
    const task = (name: string) => async () => {
      log.push(`${name}@${Date.now() - t0}`);
    };
    const done = Promise.all([
      pacer.run("https://a.example/1", task("a1")),
      pacer.run("https://a.example/2", task("a2")),
      pacer.run("https://b.example/1", task("b1")),
    ]);
    await vi.runAllTimersAsync();
    await done;
    expect(log).toEqual(["a1@0", "b1@0", "a2@300"]);
  });

  it("keeps the queue going after a failed request and still leaves the gap", async () => {
    const pacer = new HostPacer();
    const t0 = Date.now();
    const starts: number[] = [];
    const failing = pacer.run("https://a.example/1", async () => {
      starts.push(Date.now() - t0);
      throw new Error("boom");
    });
    const next = pacer.run("https://a.example/2", async () => {
      starts.push(Date.now() - t0);
      return "ok";
    });
    const failed = expect(failing).rejects.toThrow("boom");
    await vi.runAllTimersAsync();
    await failed;
    await expect(next).resolves.toBe("ok");
    expect(starts).toEqual([0, 300]);
  });

  it("starts at once when the gap has already passed", async () => {
    const pacer = new HostPacer();
    await pacer.run("https://a.example/1", async () => undefined);
    await vi.advanceTimersByTimeAsync(1_000);
    const t1 = Date.now();
    let startedAfter = -1;
    await pacer.run("https://a.example/2", async () => {
      startedAfter = Date.now() - t1;
    });
    expect(startedAfter).toBe(0);
  });
});

describe("HostPacer (custom gap and clock)", () => {
  it("waits for the remaining part of the gap on the given clock", async () => {
    let now = 0;
    const sleeps: number[] = [];
    const clock: Clock = {
      now: () => now,
      sleep: async (ms) => {
        sleeps.push(ms);
        now += ms;
      },
    };
    const pacer = new HostPacer(1_000, clock);
    await Promise.all([
      pacer.run("https://a.example/1", async () => {
        now += 50;
      }),
      pacer.run("https://a.example/2", async () => undefined),
    ]);
    expect(sleeps).toEqual([1_000]);
  });
});

describe("groupByHost", () => {
  it("groups URLs by host in first-seen order", () => {
    expect(
      groupByHost(["https://a.example/1", "https://b.example/1", "https://a.example/2", "http://B.example/2"]),
    ).toEqual([
      ["https://a.example/1", "https://a.example/2"],
      ["https://b.example/1", "http://B.example/2"],
    ]);
    expect(groupByHost([])).toEqual([]);
  });
});

describe("runPool", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it("keeps at most `concurrency` calls in flight and returns results in input order", async () => {
    let inFlight = 0;
    let peak = 0;
    const worker = async (n: number) => {
      inFlight += 1;
      peak = Math.max(peak, inFlight);
      await new Promise((resolve) => setTimeout(resolve, (6 - n) * 10));
      inFlight -= 1;
      return n * 2;
    };
    const done = runPool([1, 2, 3, 4, 5], 2, worker);
    await vi.runAllTimersAsync();
    await expect(done).resolves.toEqual([2, 4, 6, 8, 10]);
    expect(peak).toBe(2);
  });

  it("handles more lanes than items, and an empty list", async () => {
    await expect(runPool([7], 8, async (n) => n)).resolves.toEqual([7]);
    await expect(runPool([], 8, async (n: number) => n)).resolves.toEqual([]);
  });
});

describe("pacedFetch", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  interface Call {
    url: string;
    method?: string;
    redirect?: RequestRedirect;
    at: number;
  }

  function stub(route: (url: string) => Response): { fetchImpl: FetchLike; calls: Call[] } {
    const t0 = Date.now();
    const calls: Call[] = [];
    const fetchImpl: FetchLike = async (url, init) => {
      calls.push({ url, method: init.method, redirect: init.redirect, at: Date.now() - t0 });
      return route(url);
    };
    return { fetchImpl, calls };
  }

  it("follows redirects hop by hop, each hop waiting its turn in its own host's queue", async () => {
    const moved = new Response("moved", { status: 302, headers: { location: "https://b.example/final" } });
    const cancel = vi.spyOn(moved.body as ReadableStream<Uint8Array>, "cancel");
    const { fetchImpl, calls } = stub((url) => {
      if (url === "https://a.example/start") return new Response(null, { status: 301, headers: { location: "/next" } });
      if (url === "https://a.example/next") return moved;
      return new Response("ok", { status: 200 });
    });
    const done = pacedFetch("https://a.example/start", { method: "GET" }, new HostPacer(), fetchImpl);
    await vi.runAllTimersAsync();
    const res = await done;
    expect(res.status).toBe(200);
    expect(calls).toEqual([
      { url: "https://a.example/start", method: "GET", redirect: "manual", at: 0 },
      // Same host: waits the gap after the first hop.
      { url: "https://a.example/next", method: "GET", redirect: "manual", at: 300 },
      // A different host has its own queue, so no extra wait.
      { url: "https://b.example/final", method: "GET", redirect: "manual", at: 300 },
    ]);
    expect(cancel).toHaveBeenCalledOnce();
  });

  it("sends the cookies set on earlier hops back to the same host only, which ends a sign-in round trip", async () => {
    const cookies: Array<string | null> = [];
    const fetchImpl: FetchLike = async (url, init) => {
      cookies.push(new Headers(init.headers).get("cookie"));
      if (url === "https://a.example/page" && cookies.length === 1) {
        return new Response(null, {
          status: 302,
          headers: [
            ["location", "https://b.example/signin"],
            ["set-cookie", "tried=1; Path=/; Secure"],
            ["set-cookie", "lang=ja"],
          ],
        });
      }
      if (url === "https://b.example/signin") {
        return new Response(null, { status: 302, headers: { location: "https://a.example/page", "set-cookie": "b=1" } });
      }
      return new Response("ok", { status: 200 });
    };
    const done = pacedFetch("https://a.example/page", { method: "GET", headers: { "user-agent": "x" } }, new HostPacer(), fetchImpl);
    await vi.runAllTimersAsync();
    await expect(done).resolves.toMatchObject({ status: 200 });
    expect(cookies).toEqual([null, null, "tried=1; lang=ja"]);
  });

  it("returns errors, and redirects without a Location, as they are", async () => {
    const notFound = stub(() => new Response(null, { status: 404 }));
    await expect(pacedFetch("https://a.example/x", { method: "HEAD" }, new HostPacer(), notFound.fetchImpl)).resolves.toMatchObject({
      status: 404,
    });
    expect(notFound.calls).toHaveLength(1);

    const bare = stub(() => new Response(null, { status: 301 }));
    await expect(pacedFetch("https://a.example/y", { method: "HEAD" }, new HostPacer(), bare.fetchImpl)).resolves.toMatchObject({
      status: 301,
    });
    expect(bare.calls).toHaveLength(1);
  });

  it("gives up after the given number of redirects", async () => {
    const loop = stub(() => new Response(null, { status: 301, headers: { location: "/loop" } }));
    const done = pacedFetch("https://a.example/loop", { method: "HEAD" }, new HostPacer(), loop.fetchImpl, 2);
    const failed = expect(done).rejects.toThrow("more than 2 redirects from https://a.example/loop");
    await vi.runAllTimersAsync();
    await failed;
    expect(loop.calls.map((c) => c.at)).toEqual([0, 300, 600]);
  });

  it(`gives up after ${MAX_REDIRECTS} redirects by default`, async () => {
    const loop = stub(() => new Response(null, { status: 308, headers: { location: "/loop" } }));
    const done = pacedFetch("https://a.example/loop", { method: "HEAD" }, new HostPacer(), loop.fetchImpl);
    const failed = expect(done).rejects.toThrow(`more than ${MAX_REDIRECTS} redirects`);
    await vi.runAllTimersAsync();
    await failed;
    expect(loop.calls).toHaveLength(MAX_REDIRECTS + 1);
  });
});
