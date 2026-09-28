// Freshness check run by the monthly freshness-report.yml.
// (1) Sends HEAD requests (falling back to GET on 405/501/errors) to the deduplicated list of all sources[].url to find dead links.
// (2) Lists lessons/models/timeline entries whose lastVerified is older than STALE_AFTER_DAYS.
// Prints the result as a Markdown report to stdout (the calling GitHub Actions workflow turns it into an Issue).
//
// Automation stops here. Actual updates to lesson bodies and the catalog are done by a human + a Claude Code session
// (see docs/refresh-runbook.md). No empty draft PRs are created.

import { ALL_LESSONS } from "../src/engine/content";
import { GLOSSARY } from "../src/engine/content/glossary";
import { MODELS } from "../src/engine/content/models";
import { TIMELINE } from "../src/engine/content/timeline";
import { isStale, STALE_AFTER_DAYS } from "../src/engine/freshness/staleness";
import type { Source } from "../src/engine/content/types";

const TIMEOUT_MS = 10_000;
const CONCURRENCY = 8;
// Send a UA close to a real browser. Many sites treat HEAD/GET without a UA
// as a bot and return 403, so without it we get a flood of false positives.
const USER_AGENT =
  "Mozilla/5.0 (compatible; ai-primer-freshness-check/1.0; +https://ai-primer.saitotakuya0719.workers.dev)";

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

async function checkUrl(url: string): Promise<{ url: string; ok: boolean; status?: number; error?: string }> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  const headers = { "User-Agent": USER_AGENT };
  try {
    let res = await fetch(url, { method: "HEAD", redirect: "follow", signal: controller.signal, headers });
    if (!res.ok) {
      // Besides HEAD being unsupported (405/501), also retry 403s from UA-based bot detection
      // with GET (some servers reject only HEAD).
      res = await fetch(url, { method: "GET", redirect: "follow", signal: controller.signal, headers });
    }
    return { url, ok: res.ok, status: res.status };
  } catch (error) {
    return { url, ok: false, error: error instanceof Error ? error.message : String(error) };
  } finally {
    clearTimeout(timer);
  }
}

async function checkUrlsWithConcurrency(
  urls: string[],
  concurrency: number,
): Promise<Awaited<ReturnType<typeof checkUrl>>[]> {
  const results: Awaited<ReturnType<typeof checkUrl>>[] = [];
  let cursor = 0;
  async function worker() {
    while (cursor < urls.length) {
      const i = cursor++;
      results[i] = await checkUrl(urls[i]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, urls.length) }, () => worker()));
  return results;
}

async function main() {
  const now = new Date();
  const byUrl = collectSources();
  const urls = [...byUrl.keys()];

  console.error(`[check-freshness] checking ${urls.length} source URLs...`);
  const results = await checkUrlsWithConcurrency(urls, CONCURRENCY);
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
