import { TRACKS, ALL_LESSONS } from "@/engine/content";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { notFound } from "next/navigation";
import { TrackCard } from "@/components/track-card";
import { ProgressMeter } from "@/components/progress";
import { JsonLd } from "@/components/json-ld";
import { ResumeLink } from "@/components/resume-link";
import { NEWS_APP_URL, SITE_URL } from "@/engine/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const dict = await getDictionary(locale);
  const allLessonIds = ALL_LESSONS.map((ref) => ref.lesson.id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: dict.meta.title,
    description: dict.meta.description,
    inLanguage: locale,
    url: `${SITE_URL}/${locale}`,
    hasPart: TRACKS.map((track) => ({
      "@type": "Course",
      name: track.title[locale],
      description: track.summary[locale],
      url: `${SITE_URL}/${locale}/learn/${track.id}`,
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="hero">
        <h1>{dict.home.heroTitle}</h1>
        <p>{dict.home.heroLead}</p>
        <ResumeLink
          lessons={ALL_LESSONS.map((ref) => ({
            id: ref.lesson.id,
            href: `/${locale}/learn/${ref.track.id}/${ref.lesson.slug}`,
            title: ref.lesson.title[locale],
          }))}
          startHref={`/${locale}/learn/${TRACKS[0].id}`}
          dict={dict}
        />
        <div className="overall-progress">
          <span>{dict.home.overallProgress}</span>
          <ProgressMeter lessonIds={allLessonIds} label={dict.home.overallProgress} />
        </div>
      </section>

      <a
        className="news-banner"
        href={NEWS_APP_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        {dict.home.newsBanner} ↗
      </a>

      <div className="track-grid">
        {TRACKS.map((track, i) => (
          <TrackCard key={track.id} track={track} index={i} locale={locale} dict={dict} />
        ))}
      </div>
    </>
  );
}
