// Freshness check run by the monthly freshness-report.yml.
// (1) Sends a browser-like GET to the deduplicated list of all sources[].url and sorts each answer into alive, blocked or
//     dead (src/engine/freshness/link-status.ts). Blocked means the page could not be verified from a script (403 and
//     the like, or a certificate chain missing its intermediate); those links are listed for information and do not
//     count as dead. A timeout or a reset connection is tried once more before it counts.
//     It is polite to the sites it checks: requests to the same host go one at a time, each at least MIN_GAP_MS after
//     the previous one ends, redirects are followed hop by hop through the same per-host queue, and only different
//     hosts run in parallel (src/engine/freshness/pacing.ts).
// (2) Lists lessons/models/timeline entries whose lastVerified is older than STALE_AFTER_DAYS.
// Prints the result as a Markdown report to stdout (the calling GitHub Actions workflow turns it into an Issue).
//
// Automation stops here. Actual updates to lesson bodies and the catalog are done by a human + a Claude Code session
// (see docs/refresh-runbook.md). No empty draft PRs are created.

import { ALL_LESSONS } from "../src/engine/content";
import { GLOSSARY } from "../src/engine/content/glossary";
import { MODELS } from "../src/engine/content/models";
import { TIMELINE } from "../src/engine/content/timeline";
import {
  classifyFetchError,
  classifyResponse,
  isTransientFetchError,
  readBodySample,
  type LinkVerdict,
} from "../src/engine/freshness/link-status";
import { groupByHost, HostPacer, MIN_GAP_MS, pacedFetch, runPool, type FetchLike } from "../src/engine/freshness/pacing";
import { isStale, STALE_AFTER_DAYS } from "../src/engine/freshness/staleness";
import type { Source } from "../src/engine/content/types";

// Per request (each redirect hop counts as one), started when the request actually goes out, not while it waits in a queue.
const TIMEOUT_MS = 10_000;
// Hosts checked at the same time. Requests to any single host never overlap (see HostPacer).
const CONCURRENCY = 8;
// The headers of a real browser. openai.com, britannica.com, midjourney.com and others answer 403 to anything that
// does not look like one, which listed 13 of 60 sources as dead in every monthly report (issue #18). With these, most
// of them answer normally; the rest are reported as blocked rather than dead. The contact of the person running the
// check goes in From (RFC 9110 10.1.2), since the User-Agent no longer carries it.
const BROWSER_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/155.0.0.0 Safari/537.36",
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  "Accept-Language": "ja,en;q=0.8",
  From: "https://github.com/tktk7l9/ai-primer",
};
// The declared-bot identity, tried once more when the browser headers are turned away: a few sites (opensource.org)
// wave a declared bot through but challenge a browser User-Agent that comes without a browser's TLS fingerprint.
const BOT_HEADERS = {
  "User-Agent": "Mozilla/5.0 (compatible; ai-primer-freshness-check/1.2; +https://github.com/tktk7l9/ai-primer)",
};

interface CheckResult {
  url: string;
  verdict: LinkVerdict;
  reason: string;
}

interface StaleEntry {
  label: string;
  lastVerified: string;
}

function collectSources(): Map<string, string[]> {
  // url -> list of labels of the items referencing this URL
  const byUrl = new Map<string, string[]>();
  const add = (label: string, sources: readonly Source[]) => {
    for (const s of sources) {
      const labels = byUrl.get(s.url) ?? [];
      labels.push(label);
      byUrl.set(s.url, labels);
    }
  };
  for (const { lesson } of ALL_LESSONS) add(lesson.title.ja, lesson.sources);
  for (const g of GLOSSARY) add(g.term.ja, g.sources);
  for (const m of MODELS) add(m.name, m.sources);
  for (const e of TIMELINE) add(e.title.ja, e.sources);
  return byUrl;
}

function collectStale(now: Date): StaleEntry[] {
  const stale: StaleEntry[] = [];
  for (const { track, lesson } of ALL_LESSONS) {
    if (isStale(lesson.lastVerified, now)) {
      stale.push({ label: `Lesson: ${track.id}/${lesson.slug} (${lesson.title.ja})`, lastVerified: lesson.lastVerified });
    }
  }
  for (const m of MODELS) {
    if (isStale(m.lastVerified, now)) {
      stale.push({ label: `Model: ${m.id} (${m.name})`, lastVerified: m.lastVerified });
    }
  }
  for (const g of GLOSSARY) {
    if (isStale(g.lastVerified, now)) {
      stale.push({ label: `Term: ${g.id} (${g.term.ja})`, lastVerified: g.lastVerified });
    }
  }
  return stale;
}

// Called by pacedFetch once per hop, at the moment the hop starts, so the timeout covers only the request itself.
const timedFetch: FetchLike = (url, init) => fetch(url, { ...init, signal: AbortSignal.timeout(TIMEOUT_MS) });

async function checkUrl(url: string, pacer: HostPacer): Promise<CheckResult> {
  const asBrowser = await attempt(url, pacer, BROWSER_HEADERS);
  if (asBrowser.verdict !== "blocked") return asBrowser;
  // Turned away as a browser: one more try as a declared bot (it waits its turn in the host's queue too), then give up.
  const asBot = await attempt(url, pacer, BOT_HEADERS);
  return asBot.verdict === "alive" ? asBot : asBrowser;
}

async function attempt(
  url: string,
  pacer: HostPacer,
  headers: Record<string, string>,
  retries = 1,
): Promise<CheckResult> {
  try {
    // GET rather than HEAD: bot protection treats a HEAD as one more sign of a script. The page itself is never
    // downloaded: a good answer releases the connection as soon as the headers are in, and an error page is read only
    // as far as the challenge check needs (its first few kB).
    const res = await pacedFetch(url, { method: "GET", headers }, pacer, timedFetch);
    const sample = res.status >= 400 ? await readBodySample(res) : "";
    if (res.status < 400) await res.body?.cancel();
    const { verdict, reason } = classifyResponse(res.status, res.headers, sample);
    return { url, verdict, reason };
  } catch (error) {
    // A reset connection or a timeout is often a passing hiccup of a slow host (codh.rois.ac.jp failed a different
    // URL on each of three runs): try once more, waiting its turn in the host's queue, before calling it dead.
    if (retries > 0 && isTransientFetchError(error)) return attempt(url, pacer, headers, retries - 1);
    const { verdict, reason } = classifyFetchError(error);
    return { url, verdict, reason };
  }
}

/** Checks every URL, one host per lane, and returns the results in the order of `urls`. */
async function checkUrls(urls: readonly string[]): Promise<CheckResult[]> {
  const pacer = new HostPacer(MIN_GAP_MS);
  const groups = groupByHost(urls);
  console.error(
    `[check-freshness] checking ${urls.length} source URLs on ${groups.length} hosts ` +
      `(${CONCURRENCY} hosts at a time, requests to one host at least ${MIN_GAP_MS} ms apart)...`,
  );
  const perHost = await runPool(groups, CONCURRENCY, async (group) => {
    const results: CheckResult[] = [];
    for (const url of group) results.push(await checkUrl(url, pacer));
    return results;
  });
  const byUrl = new Map(perHost.flat().map((r) => [r.url, r]));
  return urls.flatMap((url) => {
    const result = byUrl.get(url);
    return result ? [result] : [];
  });
}

async function main() {
  const now = new Date();
  const byUrl = collectSources();
  const urls = [...byUrl.keys()];

  const results = await checkUrls(urls);
  const dead = results.filter((r) => r.verdict === "dead");
  const blocked = results.filter((r) => r.verdict === "blocked");
  const stale = collectStale(now);

  const lines: string[] = [];
  lines.push(`# Freshness report (run on ${now.toISOString().slice(0, 10)})`);
  lines.push("");
  lines.push(`- Source URLs checked: ${urls.length}`);
  lines.push(`- Possibly dead links: ${dead.length}`);
  lines.push(`- Could not be checked automatically (bot protection, incomplete certificate chain): ${blocked.length}`);
  lines.push(`- Items not verified for over ${STALE_AFTER_DAYS} days: ${stale.length}`);
  lines.push("");

  if (dead.length > 0) pushLinkSection(lines, "Possibly dead links", dead, byUrl);

  if (blocked.length > 0) {
    pushLinkSection(
      lines,
      "Could not be checked automatically",
      blocked,
      byUrl,
      "These sites turn away clients that are not a real browser, or send a certificate chain without the " +
        "intermediate that browsers fetch themselves. The pages most likely open fine in a browser; " +
        "this list is for information only and is not counted as a problem.",
    );
  }

  if (stale.length > 0) {
    lines.push(`## Items not verified for over ${STALE_AFTER_DAYS} days`);
    lines.push("");
    for (const s of stale) {
      lines.push(`- ${s.label} — last verified: ${s.lastVerified}`);
    }
    lines.push("");
  }

  if (dead.length === 0 && stale.length === 0) {
    lines.push(blocked.length > 0 ? "No problems found (the blocked links above are informational)." : "No problems found.");
  }

  console.log(lines.join("\n"));

  // Blocked links do not count: only real problems make the workflow open or update the Issue.
  if (dead.length > 0 || stale.length > 0) {
    process.exitCode = 1;
  }
}

/** Appends a Markdown section listing `items`, each with the content that references its URL. */
function pushLinkSection(
  lines: string[],
  heading: string,
  items: readonly CheckResult[],
  byUrl: Map<string, string[]>,
  note?: string,
) {
  lines.push(`## ${heading}`);
  lines.push("");
  if (note) {
    lines.push(note);
    lines.push("");
  }
  for (const item of items) {
    lines.push(`- ${item.url} — ${item.reason}`);
    for (const label of byUrl.get(item.url) ?? []) lines.push(`  - Referenced by: ${label}`);
  }
  lines.push("");
}

main().catch((error) => {
  console.error("[check-freshness] failed while running:", error);
  process.exitCode = 1;
});
