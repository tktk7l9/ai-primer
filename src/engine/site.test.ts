import { describe, expect, it } from "vitest";
import { NEWS_APP_URL, SITE_URL } from "./site";

describe("SITE_URL", () => {
  it("Workers の公開URLを指している", () => {
    expect(SITE_URL).toBe("https://ai-primer.saitotakuya0719.workers.dev");
  });

  it("vercel.app を含まない", () => {
    // The Vercel Hobby account has been suspended since 2026-08-11 and serves nothing.
    // If this goes back to vercel.app, canonical, sitemap and OGP point at a dead URL.
    expect(SITE_URL).not.toContain("vercel.app");
  });

  it("末尾スラッシュを持たない", () => {
    // Many places concatenate like `${SITE_URL}/${locale}`, so a trailing slash
    // produces //.
    expect(SITE_URL.endsWith("/")).toBe(false);
  });

  it("https である", () => {
    expect(SITE_URL.startsWith("https://")).toBe(true);
  });
});

describe("NEWS_APP_URL", () => {
  it("姉妹アプリの Workers URL を指している", () => {
    // ai-news-feed-app has moved to Workers and its Vercel project is deleted.
    // The vercel.app version is a broken link.
    expect(NEWS_APP_URL).toBe("https://ai-news-feed-app.saitotakuya0719.workers.dev");
  });

  it("vercel.app を含まない", () => {
    expect(NEWS_APP_URL).not.toContain("vercel.app");
  });

  it("末尾スラッシュを持たない", () => {
    expect(NEWS_APP_URL.endsWith("/")).toBe(false);
  });
});
