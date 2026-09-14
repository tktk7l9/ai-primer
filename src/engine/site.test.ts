import { describe, expect, it } from "vitest";
import { NEWS_APP_URL, SITE_URL } from "./site";

describe("SITE_URL", () => {
  it("Workers の公開URLを指している", () => {
    expect(SITE_URL).toBe("https://ai-primer.saitotakuya0719.workers.dev");
  });

  it("vercel.app を含まない", () => {
    // Vercel の Hobby アカウントは 2026-08-11 から停止していて配信されない。
    // ここが vercel.app に戻ると canonical・sitemap・OGP が死んだURLを指す。
    expect(SITE_URL).not.toContain("vercel.app");
  });

  it("末尾スラッシュを持たない", () => {
    // 各所で `${SITE_URL}/${locale}` のように連結するので、末尾スラッシュがあると
    // // になる。
    expect(SITE_URL.endsWith("/")).toBe(false);
  });

  it("https である", () => {
    expect(SITE_URL.startsWith("https://")).toBe(true);
  });
});

describe("NEWS_APP_URL", () => {
  it("姉妹アプリの Workers URL を指している", () => {
    // ai-news-feed-app は Workers へ移行済みで Vercel プロジェクトも削除されている。
    // vercel.app 版はリンク切れ。
    expect(NEWS_APP_URL).toBe("https://ai-news-feed-app.saitotakuya0719.workers.dev");
  });

  it("vercel.app を含まない", () => {
    expect(NEWS_APP_URL).not.toContain("vercel.app");
  });

  it("末尾スラッシュを持たない", () => {
    expect(NEWS_APP_URL.endsWith("/")).toBe(false);
  });
});
