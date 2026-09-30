import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { GLOSSARY } from "@/engine/content/glossary";
import { lessonById } from "@/engine/content";
import { type Locale, isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { GlossaryList, type GlossaryItem } from "@/components/glossary-list";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);
  return {
    title: dict.glossary.title,
    description: dict.glossary.lead,
    alternates: {
      canonical: `/${locale}/glossary`,
      languages: { ja: "/ja/glossary", en: "/en/glossary" },
    },
  };
}

export default async function GlossaryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);
  const sorted = [...GLOSSARY].sort((a, b) => a.term[locale].localeCompare(b.term[locale], locale));
  // Plain data for the client-side filter; lesson refs are resolved here on the server.
  const items: GlossaryItem[] = sorted.map((g) => ({
    id: g.id,
    term: g.term[locale],
    definition: g.definition[locale],
    related: g.relatedLessonIds.flatMap((id) => {
      const ref = lessonById(id);
      return ref
        ? [{ href: `/${locale}/learn/${ref.track.id}/${ref.lesson.slug}`, title: ref.lesson.title[locale] }]
        : [];
    }),
  }));

  return (
    <div className="narrow-page">
      <div className="page-title">
        <h1>{dict.glossary.title}</h1>
        <p className="lead">{dict.glossary.lead}</p>
      </div>
      <GlossaryList
        items={items}
        labels={{
          filter: dict.glossary.filter,
          relatedLessons: dict.glossary.relatedLessons,
          matchCount: dict.glossary.matchCount,
          noMatch: dict.glossary.noMatch,
          clearFilter: dict.glossary.clearFilter,
        }}
      />
    </div>
  );
}
