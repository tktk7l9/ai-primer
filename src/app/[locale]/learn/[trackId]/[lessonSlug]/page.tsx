import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { ALL_LESSONS, lessonBySlug, nextLesson, prevLesson } from "@/engine/content";
import { type Locale, isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { LessonBody } from "@/components/lesson-body";
import { LessonSidebar } from "@/components/lesson-sidebar";
import { QuizBlock } from "@/components/quiz/quiz-block";
import { SourcesList } from "@/components/sources-list";
import { FreshnessBadge } from "@/components/freshness-badge";
import { Pager } from "@/components/pager";
import { LessonTick } from "@/components/progress";
import { JsonLd } from "@/components/json-ld";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    ALL_LESSONS.map((ref) => ({ locale, trackId: ref.track.id, lessonSlug: ref.lesson.slug })),
  );
}

async function resolve(params: Promise<{ locale: string; trackId: string; lessonSlug: string }>) {
  const { locale: rawLocale, trackId, lessonSlug } = await params;
  if (!isLocale(rawLocale)) return null;
  const ref = lessonBySlug(trackId, lessonSlug);
  if (!ref) return null;
  return { locale: rawLocale as Locale, ref };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; trackId: string; lessonSlug: string }>;
}): Promise<Metadata> {
  const resolved = await resolve(params);
  if (!resolved) return {};
  const { locale, ref } = resolved;
  const path = `/learn/${ref.track.id}/${ref.lesson.slug}`;
  return {
    title: ref.lesson.title[locale],
    description: ref.lesson.summary[locale],
    alternates: {
      canonical: `/${locale}${path}`,
      languages: { ja: `/ja${path}`, en: `/en${path}` },
    },
  };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ locale: string; trackId: string; lessonSlug: string }>;
}) {
  const resolved = await resolve(params);
  if (!resolved) notFound();
  const { locale, ref } = resolved;
  const { track, lesson } = ref;
  const dict = await getDictionary(locale);
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: lesson.title[locale],
    description: lesson.summary[locale],
    inLanguage: locale,
    dateModified: lesson.lastVerified,
    isPartOf: { "@type": "Course", name: track.title[locale] },
  };

  return (
    <div className="lesson-layout">
      <LessonSidebar track={track} locale={locale} currentLessonId={lesson.id} />
      <article className="lesson-main">
        <JsonLd data={jsonLd} nonce={nonce} />
        <div className="lesson-header">
          <span className="specimen-tag">{track.title[locale]}</span>
          <h1>{lesson.title[locale]}</h1>
          <div className="lesson-meta">
            <FreshnessBadge lastVerified={lesson.lastVerified} locale={locale} dict={dict} />
            <LessonTick lessonId={lesson.id} />
          </div>
        </div>

        <LessonBody markdown={lesson.body[locale]} />

        <QuizBlock lessonId={lesson.id} quiz={lesson.quiz} locale={locale} dict={dict} />

        <SourcesList sources={lesson.sources} dict={dict} />

        <Pager
          prev={prevLesson(lesson.id)}
          next={nextLesson(lesson.id)}
          locale={locale}
          dict={dict}
        />
      </article>
    </div>
  );
}
