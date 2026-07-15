import Link from "next/link";
import type { LessonRef } from "@/engine/content";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

function lessonHref(locale: Locale, ref: LessonRef): string {
  return `/${locale}/learn/${ref.track.id}/${ref.lesson.slug}`;
}

export function Pager({
  prev,
  next,
  locale,
  dict,
}: {
  prev: LessonRef | null;
  next: LessonRef | null;
  locale: Locale;
  dict: Dictionary;
}) {
  if (!prev && !next) return null;
  return (
    <nav className="pager" aria-label="Lesson pagination">
      {prev ? (
        <Link href={lessonHref(locale, prev)}>
          <span className="pager-label">← {dict.lesson.prev}</span>
          <span>{prev.lesson.title[locale]}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={lessonHref(locale, next)} className="pager-next">
          <span className="pager-label">{dict.lesson.next} →</span>
          <span>{next.lesson.title[locale]}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
