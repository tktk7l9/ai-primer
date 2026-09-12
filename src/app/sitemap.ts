import type { MetadataRoute } from "next";
import { ALL_LESSONS, TRACKS } from "@/engine/content";
import { locales } from "@/i18n/config";
import { SITE_URL } from "@/engine/site";

function alternates(path: string): Record<string, string> {
  return Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}${path}`]));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${SITE_URL}/${locale}`,
      alternates: { languages: alternates("") },
    });
    for (const track of TRACKS) {
      entries.push({
        url: `${SITE_URL}/${locale}/learn/${track.id}`,
        alternates: { languages: alternates(`/learn/${track.id}`) },
      });
    }
    for (const { track, lesson } of ALL_LESSONS) {
      entries.push({
        url: `${SITE_URL}/${locale}/learn/${track.id}/${lesson.slug}`,
        lastModified: lesson.lastVerified,
        alternates: { languages: alternates(`/learn/${track.id}/${lesson.slug}`) },
      });
    }
    for (const path of ["/models", "/timeline", "/glossary"]) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        alternates: { languages: alternates(path) },
      });
    }
  }

  return entries;
}
