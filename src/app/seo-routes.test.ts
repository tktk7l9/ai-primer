import { describe, expect, it } from "vitest";
import { ALL_LESSONS, TRACKS } from "@/engine/content";
import { SITE_URL } from "@/engine/site";
import robots from "./robots";
import sitemap from "./sitemap";

describe("sitemap", () => {
  const entries = sitemap();
  const urls = entries.map((e) => e.url);

  it("lists every page once in both languages", () => {
    const perLocale = 1 + TRACKS.length + ALL_LESSONS.length + 3;
    expect(entries).toHaveLength(perLocale * 2);
    expect(new Set(urls).size).toBe(urls.length);
    for (const locale of ["ja", "en"]) {
      expect(urls).toContain(`${SITE_URL}/${locale}`);
      expect(urls).toContain(`${SITE_URL}/${locale}/glossary`);
      const { track, lesson } = ALL_LESSONS[0];
      expect(urls).toContain(`${SITE_URL}/${locale}/learn/${track.id}/${lesson.slug}`);
    }
  });

  it("points each page at its counterpart in the other language", () => {
    for (const entry of entries) {
      const path = entry.url.replace(/^.*\/(ja|en)/, "");
      expect(entry.alternates?.languages).toEqual({
        ja: `${SITE_URL}/ja${path}`,
        en: `${SITE_URL}/en${path}`,
      });
    }
  });

  it("dates lesson pages by when their facts were last verified", () => {
    const { track, lesson } = ALL_LESSONS[0];
    const entry = entries.find((e) => e.url === `${SITE_URL}/en/learn/${track.id}/${lesson.slug}`);
    expect(entry?.lastModified).toBe(lesson.lastVerified);
  });
});

describe("robots", () => {
  const { rules, sitemap: sitemapUrl } = robots();
  const list = Array.isArray(rules) ? rules : [rules];

  it("lets search engines crawl everything and advertises the sitemap", () => {
    expect(list[0]).toEqual({ userAgent: "*", allow: "/" });
    expect(sitemapUrl).toBe(`${SITE_URL}/sitemap.xml`);
  });

  it("blocks AI training crawlers but not search crawlers", () => {
    const blocked = list.filter((r) => r.disallow === "/").map((r) => r.userAgent);
    expect(blocked).toEqual(expect.arrayContaining(["GPTBot", "ClaudeBot", "CCBot", "Google-Extended"]));
    expect(blocked).not.toContain("Googlebot");
    expect(blocked).not.toContain("Bingbot");
  });
});
