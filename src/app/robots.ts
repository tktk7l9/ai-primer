import type { MetadataRoute } from "next";
import { SITE_URL } from "@/engine/site";

/** Crawlers that collect training data or summarize for AI.
 *
 *  Since dropping the nonce CSP on 2026-09-12 every route is served from the CDN cache, so
 *  the original reason ("not cacheable, so every request is billed as is") is gone.
 *  The block stays anyway. Training-data crawlers take whole article bodies, so
 *  transfer volume still occurs even when cached (the 10GB free tier was actually hit on 2026-08-05).
 *  It is kept as a decision separate from cacheability.
 *
 *  Search traffic should stay, so Googlebot / Bingbot are allowed.
 *  Google-Extended only controls use for Gemini training and does not affect the search index. */
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
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
