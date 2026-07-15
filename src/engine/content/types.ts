import type { Localized } from "@/i18n/config";
import type { QuizSpec } from "@/engine/quiz/spec";

/** 出典（chronoscroll の EventSource と同形）。 */
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
  "coding-ai",
  "generative-media",
  "society",
] as const;

export type TrackId = (typeof TRACK_IDS)[number];

export interface Lesson {
  /** "ai-basics-01" 形式。全レッスンで一意。 */
  id: string;
  /** URL セグメント（"what-is-ai" 形式。トラック内で一意）。 */
  slug: string;
  title: Localized<string>;
  summary: Localized<string>;
  /** Markdown。揮発性の事実（モデル名・料金）は書かず models へリンクする。 */
  body: Localized<string>;
  quiz: readonly QuizSpec[];
  /** 出典。1件以上（content.test.ts が強制）。 */
  sources: readonly Source[];
  /** 内容を最後に事実確認した日（"yyyy-mm-dd"）。 */
  lastVerified: string;
  /** glossary.ts の用語 id への参照。 */
  glossaryRefs?: readonly string[];
}

export interface Track {
  id: TrackId;
  emoji: string;
  title: Localized<string>;
  summary: Localized<string>;
  lessons: readonly Lesson[];
}
