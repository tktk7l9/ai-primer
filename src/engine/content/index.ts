import type { Lesson, Track, TrackId } from "./types";
import { aiBasicsTrack } from "./tracks/ai-basics";
import { historyTrack } from "./tracks/history";
import { howLlmsWorkTrack } from "./tracks/how-llms-work";
import { chatAisTrack } from "./tracks/chat-ais";
import { promptingTrack } from "./tracks/prompting";
import { aiAgentsTrack } from "./tracks/ai-agents";
import { codingAiTrack } from "./tracks/coding-ai";
import { generativeMediaTrack } from "./tracks/generative-media";
import { understandingAiTrack } from "./tracks/understanding-ai";
import { aiAtWorkTrack } from "./tracks/ai-at-work";
import { aiInDailyLifeTrack } from "./tracks/ai-in-daily-life";
import { creatingWithAiTrack } from "./tracks/creating-with-ai";
import { aiAndSocietyTrack } from "./tracks/ai-and-society";
import { societyTrack } from "./tracks/society";

/** All tracks in display order (14, all complete). */
export const TRACKS: readonly Track[] = [
  aiBasicsTrack,
  historyTrack,
  howLlmsWorkTrack,
  chatAisTrack,
  promptingTrack,
  aiAgentsTrack,
  codingAiTrack,
  generativeMediaTrack,
  // Deeper mechanisms (reasoning, retrieval, diffusion) and how to judge claims (benchmarks, safety reports, health).
  understandingAiTrack,
  // Applies the tool tracks above to everyday tasks; society stays last so its checklist closes the course.
  aiAtWorkTrack,
  // Everyday tasks outside work (money, legal, government procedures, travel, language, device settings).
  aiInDailyLifeTrack,
  // Hobby creation (writing, images, music, video, games, publishing); applies the media and coding tracks.
  creatingWithAiTrack,
  // Society-wide effects (jobs, energy, bias, accessibility, scams, children); also kept before society.
  aiAndSocietyTrack,
  societyTrack,
];

export interface LessonRef {
  readonly track: Track;
  readonly lesson: Lesson;
}

/** All lessons flattened in learning order (track order × order within the track). */
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

/** Next lesson in learning order (crosses track boundaries). null if last. */
export function nextLesson(lessonId: string): LessonRef | null {
  const i = ALL_LESSONS.findIndex((ref) => ref.lesson.id === lessonId);
  if (i < 0 || i + 1 >= ALL_LESSONS.length) return null;
  return ALL_LESSONS[i + 1];
}

/** Previous lesson in learning order. null if first. */
export function prevLesson(lessonId: string): LessonRef | null {
  const i = ALL_LESSONS.findIndex((ref) => ref.lesson.id === lessonId);
  if (i <= 0) return null;
  return ALL_LESSONS[i - 1];
}
