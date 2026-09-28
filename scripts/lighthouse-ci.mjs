#!/usr/bin/env node
// Performance regression guard in CI. Thresholds are set well below production measurements
// (mobile 98-100 / desktop 100) — GitHub Actions shared runners have fluctuating
// throughput, and thresholds close to the measured values fail flakily. On top of that a single run
// can swing by nearly 20 points when runners are busy (measured 94 -> 72 on service-anatomy
// with identical code), so the verdict uses the median of 3 runs.
import { execFileSync } from "node:child_process";
import { readFileSync, unlinkSync } from "node:fs";

const URL = process.argv[2] ?? "http://localhost:3000/ja";
const OUT = "/tmp/lighthouse-ci-report.json";
const THRESHOLDS = { performance: 80, accessibility: 95, "best-practices": 90, seo: 95 };
const RUNS = 3;
// Attempts when one run fails to start (flake mitigation; a real failure fails every attempt)
const ATTEMPTS_PER_RUN = 3;

// Runs one measurement. If lighthouse itself fails to start, execFileSync throws.
function measureOnce() {
  execFileSync(
    "npx",
    [
      "--yes",
      "lighthouse",
      URL,
      "--output=json",
      `--output-path=${OUT}`,
      "--quiet",
      "--chrome-flags=--headless=new --no-sandbox",
    ],
    { stdio: "inherit" },
  );
  const report = JSON.parse(readFileSync(OUT, "utf8"));
  unlinkSync(OUT);
  return Object.fromEntries(
    Object.keys(THRESHOLDS).map((key) => [key, Math.round(report.categories[key].score * 100)]),
  );
}

// Takes one measurement with retries.
//
// **Without this, the median-of-3-runs design is meaningless.** execFileSync
// throws on a non-zero exit, which passes straight through Array.from and fails the whole job, so
// one-off flakes from shared runners (NO_NAVSTART etc., Chrome failing to start)
// turned directly into CI failures. This actually happened on service-anatomy on 2026-09-14,
// and a re-run with zero code changes was confirmed to pass.
//
// A real failure such as the server being down fails every attempt, so nothing is missed.
function measure(runIndex) {
  for (let attempt = 1; attempt <= ATTEMPTS_PER_RUN; attempt += 1) {
    try {
      return measureOnce();
    } catch (err) {
      // A run that dies midway leaves a stale report that the next attempt would read, so delete it.
      try {
        unlinkSync(OUT);
      } catch {
        // Nothing to do if it did not exist
      }
      if (attempt === ATTEMPTS_PER_RUN) throw err;
      const first = String(err.message).split("\n")[0];
      console.warn(`run ${runIndex}: attempt ${attempt}/${ATTEMPTS_PER_RUN} failed, retrying — ${first}`);
    }
  }
}

function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}

const runs = Array.from({ length: RUNS }, (_, i) => {
  const scores = measure(i + 1);
  console.log(`run ${i + 1}/${RUNS}:`, JSON.stringify(scores));
  return scores;
});

let ok = true;
for (const [key, min] of Object.entries(THRESHOLDS)) {
  const score = median(runs.map((run) => run[key]));
  const pass = score >= min;
  if (!pass) ok = false;
  console.log(`${pass ? "PASS" : "FAIL"} ${key}: median ${score} (>= ${min} required)`);
}

if (!ok) {
  console.error("Lighthouse scores fell below the thresholds.");
  process.exit(1);
}
