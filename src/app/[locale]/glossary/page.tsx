import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { GLOSSARY } from "@/engine/content/glossary";
import { lessonById } from "@/engine/content";
import { type Locale, isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

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

  return (
    <div className="narrow-page">
      <div className="page-title">
        <h1>{dict.glossary.title}</h1>
        <p className="lead">{dict.glossary.lead}</p>
      </div>
      <dl className="glossary-list">
        {sorted.map((g) => (
          <div key={g.id} className="glossary-item">
            <dt>{g.term[locale]}</dt>
            <dd>{g.definition[locale]}</dd>
            {g.relatedLessonIds.length > 0 && (
              <div className="glossary-related">
                <span>{dict.glossary.relatedLessons}:</span>
                {g.relatedLessonIds.map((id) => {
                  const ref = lessonById(id);
                  if (!ref) return null;
                  return (
                    <Link key={id} href={`/${locale}/learn/${ref.track.id}/${ref.lesson.slug}`}>
                      {ref.lesson.title[locale]}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </dl>
    </div>
  );
}
