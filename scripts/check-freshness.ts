// 月次 freshness-report.yml から実行される鮮度チェック。
// (1) 全 sources[].url の重複排除リストに HEAD リクエスト（405/501/エラー時は GET フォールバック）を送り、死んでいるリンクを検出する。
// (2) lastVerified が STALE_AFTER_DAYS を超えたレッスン/モデル/年表項目を列挙する。
// 結果を Markdown レポートとして stdout に出力する（呼び出し側の GitHub Actions が Issue へ変換する）。
//
// 自動化はここまで。本文・カタログの実際の更新は人間 + Claude Code セッションで行う
// （docs/refresh-runbook.md 参照）。空の draft PR は作らない。

import { ALL_LESSONS } from "../src/engine/content";
import { GLOSSARY } from "../src/engine/content/glossary";
import { MODELS } from "../src/engine/content/models";
import { TIMELINE } from "../src/engine/content/timeline";
import { isStale, STALE_AFTER_DAYS } from "../src/engine/freshness/staleness";
import type { Source } from "../src/engine/content/types";

const TIMEOUT_MS = 10_000;
const CONCURRENCY = 8;
// 実ブラウザに近い UA を付ける。多くのサイトが UA なしの HEAD/GET を
// ボット判定して 403 を返すため、これがないと誤検知が大量発生する。
const USER_AGENT =
  "Mozilla/5.0 (compatible; ai-primer-freshness-check/1.0; +https://ai-primer.vercel.app)";

interface StaleEntry {
  label: string;
  lastVerified: string;
}

function collectSources(): Map<string, string[]> {
  // url -> このURLを参照している項目ラベルのリスト
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
      stale.push({ label: `レッスン: ${track.id}/${lesson.slug}（${lesson.title.ja}）`, lastVerified: lesson.lastVerified });
    }
  }
  for (const m of MODELS) {
    if (isStale(m.lastVerified, now)) {
      stale.push({ label: `モデル: ${m.id}（${m.name}）`, lastVerified: m.lastVerified });
    }
  }
  for (const g of GLOSSARY) {
    if (isStale(g.lastVerified, now)) {
      stale.push({ label: `用語: ${g.id}（${g.term.ja}）`, lastVerified: g.lastVerified });
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
      // HEAD 未対応(405/501)に加え、UA ベースのボット判定による 403 も
      // GET で拾い直す（サーバーによって HEAD だけ弾くことがある）。
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

  console.error(`[check-freshness] ${urls.length} 件の出典URLを確認中...`);
  const results = await checkUrlsWithConcurrency(urls, CONCURRENCY);
  const dead = results.filter((r) => !r.ok);
  const stale = collectStale(now);

  const lines: string[] = [];
  lines.push(`# 鮮度レポート（${now.toISOString().slice(0, 10)} 実行）`);
  lines.push("");
  lines.push(`- 確認した出典URL: ${urls.length}件`);
  lines.push(`- 死んでいる可能性のあるリンク: ${dead.length}件`);
  lines.push(`- ${STALE_AFTER_DAYS}日超で未確認の項目: ${stale.length}件`);
  lines.push("");

  if (dead.length > 0) {
    lines.push("## リンク切れの可能性");
    lines.push("");
    for (const d of dead) {
      const labels = byUrl.get(d.url) ?? [];
      lines.push(`- ${d.url} — ${d.status ? `HTTP ${d.status}` : d.error}`);
      for (const label of labels) lines.push(`  - 参照元: ${label}`);
    }
    lines.push("");
  }

  if (stale.length > 0) {
    lines.push(`## ${STALE_AFTER_DAYS}日超で未確認の項目`);
    lines.push("");
    for (const s of stale) {
      lines.push(`- ${s.label} — 最終確認: ${s.lastVerified}`);
    }
    lines.push("");
  }

  if (dead.length === 0 && stale.length === 0) {
    lines.push("問題は見つかりませんでした。");
  }

  console.log(lines.join("\n"));

  if (dead.length > 0 || stale.length > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error("[check-freshness] 実行中にエラーが発生しました:", error);
  process.exitCode = 1;
});
