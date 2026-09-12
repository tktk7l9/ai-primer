// 公開URLの唯一の定義。canonical / metadataBase / sitemap / robots / JSON-LD が
// すべてここを参照する。
//
// 2026-09-13 に Vercel から Cloudflare Workers へ移行した。移行前は BASE_URL が
// 4ファイルに重複し robots.ts が sitemap URL を直書きしていたため、URL を変えるたびに
// どれかを取りこぼして canonical と sitemap が食い違う危険があった。1箇所に集約してある。
// site.test.ts が旧Vercelドメインへの差し戻しと末尾スラッシュを止める。
export const SITE_URL = "https://ai-primer.saitotakuya0719.workers.dev";

// 姉妹アプリ（速報系のAIニュース）。こちらも Workers へ移行済みで、
// 旧Vercelドメイン版は Vercel プロジェクトごと削除されているためリンク切れになる。
export const NEWS_APP_URL = "https://ai-news-feed-app.saitotakuya0719.workers.dev";
