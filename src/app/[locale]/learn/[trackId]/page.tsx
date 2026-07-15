import { notFound } from "next/navigation";
import Link from "next/link";
import { TRACKS, trackById } from "@/engine/content";
import { type Locale, isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { LessonTick } from "@/components/progress";
import type { Metadata } from "next";

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
  const locale = rawLocale as Locale;
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
  const locale = rawLocale as Locale;
  const track = trackById(trackId);
  if (!track) notFound();
  const dict = await getDictionary(locale);

  return (
    <>
      <div className="page-title">
        <span className="specimen-tag">{track.emoji} Track</span>
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
                <span className="lesson-summary">{lesson.summary[locale]}</span>
              </span>
              <LessonTick lessonId={lesson.id} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
