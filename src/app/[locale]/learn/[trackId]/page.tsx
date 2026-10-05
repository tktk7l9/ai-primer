import { notFound } from "next/navigation";
import Link from "next/link";
import { TRACKS, trackById } from "@/engine/content";
import {
  estimateLessonMinutes,
  estimateTrackMinutes,
  formatMinutes,
} from "@/engine/content/reading-time";
import { isLocale, locales } from "@/i18n/config";
import { LessonTick, NextUpMark } from "@/components/progress";
import type { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import { Breadcrumbs } from "@/components/breadcrumbs";

export function generateStaticParams() {
  return locales.flatMap((locale) => TRACKS.map((track) => ({ locale, trackId: track.id })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; trackId: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, trackId } = await params;
  if (!isLocale(rawLocale)) return {};
  const locale = rawLocale;
  const track = trackById(trackId);
  if (!track) return {};
  return {
    title: track.title[locale],
    description: track.summary[locale],
    alternates: {
      canonical: `/${locale}/learn/${track.id}`,
      languages: { ja: `/ja/learn/${track.id}`, en: `/en/learn/${track.id}` },
    },
  };
}

export default async function TrackPage({
  params,
}: {
  params: Promise<{ locale: string; trackId: string }>;
}) {
  const { locale: rawLocale, trackId } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const track = trackById(trackId);
  if (!track) notFound();
  const duration = formatMinutes(estimateTrackMinutes(track, locale), locale);
  const dict = await getDictionary(locale);
  const lessonIds = track.lessons.map((lesson) => lesson.id);

  return (
    <div className="narrow-page">
      <div className="page-title">
        <Breadcrumbs label={dict.nav.breadcrumb} items={[{ label: dict.nav.home, href: `/${locale}` }]} />
        <span className="specimen-tag">
          {track.emoji} Track · {duration}
        </span>
        <h1>{track.title[locale]}</h1>
        <p className="lead">{track.summary[locale]}</p>
      </div>
      <ul className="lesson-list">
        {track.lessons.map((lesson, i) => (
          <li key={lesson.id}>
            <Link href={`/${locale}/learn/${track.id}/${lesson.slug}`}>
              <span className="lesson-no">{String(i + 1).padStart(2, "0")}</span>
              <span className="lesson-title">
                {lesson.title[locale]}
                <NextUpMark lessonIds={lessonIds} lessonId={lesson.id} label={dict.track.nextUp} />
                <span className="lesson-summary">{lesson.summary[locale]}</span>
                <span className="lesson-minutes">
                  {formatMinutes(estimateLessonMinutes(lesson, locale), locale)}
                </span>
              </span>
              <LessonTick lessonId={lesson.id} doneLabel={dict.lesson.completed} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
