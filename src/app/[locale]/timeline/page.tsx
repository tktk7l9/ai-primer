import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TIMELINE } from "@/engine/content/timeline";
import { formatVerified } from "@/engine/freshness/staleness";
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
    title: dict.timeline.title,
    description: dict.timeline.lead,
    alternates: {
      canonical: `/${locale}/timeline`,
      languages: { ja: "/ja/timeline", en: "/en/timeline" },
    },
  };
}

function formatEventDate(event: (typeof TIMELINE)[number], locale: Locale): string {
  if (event.precision === "day") {
    const [y, m, d] = event.date.split("-");
    return locale === "ja" ? `${y}年${Number(m)}月${Number(d)}日` : `${y}-${m}-${d}`;
  }
  if (event.precision === "year") {
    return locale === "ja" ? `${event.date.slice(0, 4)}年` : event.date.slice(0, 4);
  }
  return formatVerified(event.date, locale);
}

export default async function TimelinePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <div className="page-title">
        <h1>{dict.timeline.title}</h1>
        <p className="lead">{dict.timeline.lead}</p>
      </div>
      <ol className="timeline-list">
        {TIMELINE.map((event) => (
          <li key={event.id} className="timeline-item">
            <span className="timeline-date">{formatEventDate(event, locale)}</span>
            <h2>{event.title[locale]}</h2>
            <p>{event.summary[locale]}</p>
          </li>
        ))}
      </ol>
    </>
  );
}
