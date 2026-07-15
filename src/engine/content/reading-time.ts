import type { Locale } from "@/i18n/config";
import type { Lesson, Track } from "./types";

// レッスン本文の文字数/単語数とクイズの設問数から、読了+クイズ回答にかかる
// おおよその所要時間を見積もる。実測ではなく目安であることを踏まえ、
// 表示は「約N分」に丸める（1分未満は1分とする）。
const CHARS_PER_MINUTE_JA = 500;
const WORDS_PER_MINUTE_EN = 220;
const SECONDS_PER_QUESTION = 40;

/** 1レッスンの所要時間（分・小数）を見積もる。 */
export function estimateLessonMinutes(lesson: Lesson, locale: Locale): number {
  const text = lesson.body[locale];
  const readingMinutes =
    locale === "ja"
      ? text.length / CHARS_PER_MINUTE_JA
      : text.split(/\s+/).filter(Boolean).length / WORDS_PER_MINUTE_EN;
  const quizMinutes = (lesson.quiz.length * SECONDS_PER_QUESTION) / 60;
  return readingMinutes + quizMinutes;
}

/** トラック全体（全レッスン合計）の所要時間（分・小数）を見積もる。 */
export function estimateTrackMinutes(track: Track, locale: Locale): number {
  return track.lessons.reduce((sum, lesson) => sum + estimateLessonMinutes(lesson, locale), 0);
}

/** 表示用に丸めてローカライズした文字列にする（最低1分）。 */
export function formatMinutes(minutes: number, locale: Locale): string {
  const rounded = Math.max(1, Math.round(minutes));
  return locale === "ja" ? `約${rounded}分` : `~${rounded} min`;
}
