import type { Track } from "@/engine/content/types";
import type { Locale } from "@/i18n/config";
import { LessonTick } from "./progress";

function NavList({
  track,
  locale,
  currentLessonId,
}: {
  track: Track;
  locale: Locale;
  currentLessonId: string;
}) {
  return (
    <nav aria-label="Track outline">
      <div className="aside-track">{track.title[locale]}</div>
      {track.lessons.map((lesson) => (
        <a
          key={lesson.id}
          href={`/${locale}/learn/${track.id}/${lesson.slug}`}
          aria-current={lesson.id === currentLessonId ? "page" : undefined}
        >
          <LessonTick lessonId={lesson.id} />
          {lesson.title[locale]}
        </a>
      ))}
    </nav>
  );
}

export function LessonSidebar({
  track,
  locale,
  currentLessonId,
}: {
  track: Track;
  locale: Locale;
  currentLessonId: string;
}) {
  return (
    <aside className="lesson-aside">
      <NavList track={track} locale={locale} currentLessonId={currentLessonId} />
      <details className="aside-toggle">
        <summary>{track.title[locale]}</summary>
        <NavList track={track} locale={locale} currentLessonId={currentLessonId} />
      </details>
    </aside>
  );
}
