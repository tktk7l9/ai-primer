import type { Lesson, Track, TrackId } from "./types";
import { aiBasicsTrack } from "./tracks/ai-basics";
import { historyTrack } from "./tracks/history";
import { howLlmsWorkTrack } from "./tracks/how-llms-work";
import { chatAisTrack } from "./tracks/chat-ais";
import { promptingTrack } from "./tracks/prompting";
import { codingAiTrack } from "./tracks/coding-ai";

/** 表示順どおりの全トラック。P4 完了時点で 8 本になる。 */
export const TRACKS: readonly Track[] = [
  aiBasicsTrack,
  historyTrack,
  howLlmsWorkTrack,
  chatAisTrack,
  promptingTrack,
  codingAiTrack,
];

export interface LessonRef {
  readonly track: Track;
  readonly lesson: Lesson;
}

/** 学習順（トラック順 × トラック内順）に平坦化した全レッスン。 */
export const ALL_LESSONS: readonly LessonRef[] = TRACKS.flatMap((track) =>
  track.lessons.map((lesson) => ({ track, lesson })),
);

export function trackById(id: string): Track | undefined {
  return TRACKS.find((t) => t.id === id);
}

export function lessonById(id: string): LessonRef | undefined {
  return ALL_LESSONS.find((ref) => ref.lesson.id === id);
}

export function lessonBySlug(trackId: TrackId | string, slug: string): LessonRef | undefined {
  return ALL_LESSONS.find((ref) => ref.track.id === trackId && ref.lesson.slug === slug);
}

/** 学習順で次のレッスン（トラック境界をまたぐ）。最後なら null。 */
export function nextLesson(lessonId: string): LessonRef | null {
  const i = ALL_LESSONS.findIndex((ref) => ref.lesson.id === lessonId);
  if (i < 0 || i + 1 >= ALL_LESSONS.length) return null;
  return ALL_LESSONS[i + 1];
}

/** 学習順で前のレッスン。最初なら null。 */
export function prevLesson(lessonId: string): LessonRef | null {
  const i = ALL_LESSONS.findIndex((ref) => ref.lesson.id === lessonId);
  if (i <= 0) return null;
  return ALL_LESSONS[i - 1];
}
