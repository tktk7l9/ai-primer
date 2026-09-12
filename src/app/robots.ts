import type { MetadataRoute } from "next";

/** 学習データ収集・AI要約目的のクローラー。
 *
 *  2026-09-12 に nonce CSP をやめて全ルートが CDN キャッシュに乗るようになったので、
 *  「キャッシュに乗らないから1リクエストがそのまま課金される」という当初の理由は消えた。
 *  それでも抑制は残す。学習データ収集目的のクローラーは記事本文を丸ごと持っていくため、
 *  キャッシュに乗っても転送量そのものは発生する（2026-08-05 に無料枠 10GB へ到達した実績がある）。
 *  キャッシュ可否とは別の判断として維持している。
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
