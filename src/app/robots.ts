import type { MetadataRoute } from "next";

/** 学習データ収集・AI要約目的のクローラー。
 *
 *  全ルートが nonce CSP のため force-dynamic であり、CDN キャッシュに一切乗らない
 *  （`Cache-Control: private, no-store`）。1 リクエストがそのまま Vercel の
 *  Fast Origin Transfer として課金されるため、巡回の激しい AI クローラーを素通しにすると
 *  無料枠を短期間で使い切る（2026-08-05 に 10GB 到達）。
 *
 *  検索流入は残したいので Googlebot / Bingbot は通す。
 *  Google-Extended は Gemini の学習利用のみを制御し、検索インデックスには影響しない。 */
const DISALLOWED_AI_CRAWLERS = [
  "AI2Bot",
  "Amazonbot",
  "anthropic-ai",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "ChatGPT-User",
  "Claude-Web",
  "ClaudeBot",
  "cohere-ai",
  "Diffbot",
  "FacebookBot",
  "Google-Extended",
  "GPTBot",
  "ImagesiftBot",
  "Meta-ExternalAgent",
  "meta-externalagent",
  "OAI-SearchBot",
  "omgili",
  "PerplexityBot",
  "Perplexity-User",
  "Timpibot",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...DISALLOWED_AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        disallow: "/",
      })),
    ],
    sitemap: "https://ai-primer-nine.vercel.app/sitemap.xml",
  };
}
