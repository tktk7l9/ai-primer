import type { Localized } from "@/i18n/config";
import type { QuizSpec } from "@/engine/quiz/spec";

/** A source (same shape as chronoscroll's EventSource). */
export interface Source {
  label: string;
  url: string;
}

export const TRACK_IDS = [
  "ai-basics",
  "history",
  "how-llms-work",
  "chat-ais",
  "prompting",
  "ai-agents",
  "coding-ai",
  "generative-media",
  "understanding-ai",
  "ai-at-work",
  "ai-in-daily-life",
  "creating-with-ai",
  "ai-and-society",
  "society",
] as const;

export type TrackId = (typeof TRACK_IDS)[number];

export interface Lesson {
  /** In the form "ai-basics-01". Unique across all lessons. */
  id: string;
  /** URL segment (in the form "what-is-ai"; unique within the track). */
  slug: string;
  title: Localized<string>;
  summary: Localized<string>;
  /** Markdown. Do not write volatile facts (model names, pricing); link to models instead. */
  body: Localized<string>;
  quiz: readonly QuizSpec[];
  /** Sources. At least one (enforced by content.test.ts). */
  sources: readonly Source[];
  /** Date the content was last fact-checked ("yyyy-mm-dd"). */
  lastVerified: string;
  /** References to term ids in glossary.ts. */
  glossaryRefs?: readonly string[];
}

export interface Track {
  id: TrackId;
  emoji: string;
  title: Localized<string>;
  summary: Localized<string>;
  lessons: readonly Lesson[];
}
