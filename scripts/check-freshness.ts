// Freshness check run by the monthly freshness-report.yml.
// (1) Sends HEAD requests (falling back to GET when HEAD fails) to the deduplicated list of all sources[].url to find dead links.
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
import { groupByHost, HostPacer, MIN_GAP_MS, pacedFetch, runPool, type FetchLike } from "../src/engine/freshness/pacing";
import { isStale, STALE_AFTER_DAYS } from "../src/engine/freshness/staleness";
import type { Source } from "../src/engine/content/types";

// Per request (each redirect hop counts as one), started when the request actually goes out, not while it waits in a queue.
const TIMEOUT_MS = 10_000;
// Hosts checked at the same time. Requests to any single host never overlap (see HostPacer).
const CONCURRENCY = 8;
// Send a UA close to a real browser: many sites treat HEAD/GET without a UA as a bot and return 403, which would
// flood the report with false positives. The contact is the repository, so site owners can see who is checking.
const USER_AGENT = "Mozilla/5.0 (compatible; ai-primer-freshness-check/1.1; +https://github.com/tktk7l9/ai-primer)";

interface CheckResult {
  url: string;
  ok: boolean;
  status?: number;
  error?: string;
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
  const headers = { "User-Agent": USER_AGENT };
  try {
    let res = await pacedFetch(url, { method: "HEAD", headers }, pacer, timedFetch);
    if (!res.ok) {
      // Besides HEAD being unsupported (405/501), also retry 403s from UA-based bot detection
      // with GET (some servers reject only HEAD). The retry waits its turn in the host's queue too.
      res = await pacedFetch(url, { method: "GET", headers }, pacer, timedFetch);
    }
    // Only the status matters; release the connection instead of downloading the page.
    await res.body?.cancel();
    return { url, ok: res.ok, status: res.status };
  } catch (error) {
    return { url, ok: false, error: error instanceof Error ? error.message : String(error) };
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
  const dead = results.filter((r) => !r.ok);
  const stale = collectStale(now);

  const lines: string[] = [];
  lines.push(`# Freshness report (run on ${now.toISOString().slice(0, 10)})`);
  lines.push("");
  lines.push(`- Source URLs checked: ${urls.length}`);
  lines.push(`- Possibly dead links: ${dead.length}`);
  lines.push(`- Items not verified for over ${STALE_AFTER_DAYS} days: ${stale.length}`);
  lines.push("");

  if (dead.length > 0) {
    lines.push("## Possibly dead links");
    lines.push("");
    for (const d of dead) {
      const labels = byUrl.get(d.url) ?? [];
      lines.push(`- ${d.url} — ${d.status ? `HTTP ${d.status}` : d.error}`);
      for (const label of labels) lines.push(`  - Referenced by: ${label}`);
    }
    lines.push("");
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
    lines.push("No problems found.");
  }

  console.log(lines.join("\n"));

  if (dead.length > 0 || stale.length > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error("[check-freshness] failed while running:", error);
  process.exitCode = 1;
});
