// The single definition of the public URL. canonical / metadataBase / sitemap / robots / JSON-LD
// all refer to it.
//
// Moved from Vercel to Cloudflare Workers on 2026-09-13. Before that BASE_URL was
// duplicated in 4 files and robots.ts hard-coded the sitemap URL, so every URL change risked
// missing one and leaving canonical and sitemap out of sync. It is consolidated in one place.
// site.test.ts blocks reverting to the old Vercel domain and trailing slashes.
export const SITE_URL = "https://ai-primer.saitotakuya0719.workers.dev";

// Sister app (breaking AI news). It has also moved to Workers, and
// the old Vercel domain version is a broken link because its Vercel project was deleted.
export const NEWS_APP_URL = "https://ai-news-feed-app.saitotakuya0719.workers.dev";
