import type { Locale } from "@/i18n/config";
import type { Lesson, Track } from "./types";

// Estimates the rough time needed to read a lesson and answer its quiz from the body's
// character/word count and the number of quiz questions. Since it is a guide, not a measurement,
// the display is rounded to "about N min" (under 1 minute counts as 1).
const CHARS_PER_MINUTE_JA = 500;
const WORDS_PER_MINUTE_EN = 220;
const SECONDS_PER_QUESTION = 40;

/** Estimates the time for one lesson (minutes, fractional). */
export function estimateLessonMinutes(lesson: Lesson, locale: Locale): number {
  const text = lesson.body[locale];
  const readingMinutes =
    locale === "ja"
      ? text.length / CHARS_PER_MINUTE_JA
      : text.split(/\s+/).filter(Boolean).length / WORDS_PER_MINUTE_EN;
  const quizMinutes = (lesson.quiz.length * SECONDS_PER_QUESTION) / 60;
  return readingMinutes + quizMinutes;
}

/** Estimates the time for a whole track (sum of all lessons; minutes, fractional). */
export function estimateTrackMinutes(track: Track, locale: Locale): number {
  return track.lessons.reduce((sum, lesson) => sum + estimateLessonMinutes(lesson, locale), 0);
}

/** Rounds and localizes it into a display string (minimum 1 minute). */
export function formatMinutes(minutes: number, locale: Locale): string {
  const rounded = Math.max(1, Math.round(minutes));
  return locale === "ja" ? `約${rounded}分` : `~${rounded} min`;
}
