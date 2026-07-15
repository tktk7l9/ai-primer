import type { Localized } from "@/i18n/config";
import type { Source } from "./types";

export interface GlossaryTerm {
  id: string;
  term: Localized<string>;
  definition: Localized<string>;
  relatedLessonIds: readonly string[];
  sources: readonly Source[];
  lastVerified: string;
}

// P5 で15〜20語程度まで拡充予定。P3時点は ai-basics のレッスンが参照する分のみ。
export const GLOSSARY: readonly GlossaryTerm[] = [
  {
    id: "token",
    term: { ja: "トークン", en: "Token" },
    definition: {
      ja: "LLMが処理する文章の最小単位。単語より短いことも長いこともある。",
      en: "The smallest unit of text an LLM processes — can be shorter or longer than a word.",
    },
    relatedLessonIds: ["ai-basics-02", "ai-basics-03"],
    sources: [
      {
        label: "OpenAI Help: What are tokens and how to count them?",
        url: "https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them",
      },
    ],
    lastVerified: "2026-07-15",
  },
  {
    id: "context-window",
    term: { ja: "コンテキストウィンドウ", en: "Context window" },
    definition: {
      ja: "LLMが1回のやり取りで同時に処理できるトークンの最大数。",
      en: "The maximum number of tokens an LLM can process in a single interaction.",
    },
    relatedLessonIds: ["ai-basics-03"],
    sources: [{ label: "IBM: What is a context window?", url: "https://www.ibm.com/think/topics/context-window" }],
    lastVerified: "2026-07-15",
  },
  {
    id: "hallucination",
    term: { ja: "ハルシネーション", en: "Hallucination" },
    definition: {
      ja: "AIがもっともらしいが事実に基づかない内容を生成してしまう現象。",
      en: "When an AI generates plausible-sounding but factually incorrect or fabricated content.",
    },
    relatedLessonIds: ["ai-basics-04"],
    sources: [{ label: "IBM: What Are AI Hallucinations?", url: "https://www.ibm.com/think/topics/ai-hallucinations" }],
    lastVerified: "2026-07-15",
  },
  {
    id: "multimodal",
    term: { ja: "マルチモーダル", en: "Multimodal" },
    definition: {
      ja: "テキスト・画像・音声など複数種のデータを1つのモデルで処理・関連づけられること。",
      en: "The ability of a single model to process and relate multiple data types — text, images, audio, and more.",
    },
    relatedLessonIds: ["ai-basics-05"],
    sources: [{ label: "IBM: What is Multimodal AI?", url: "https://www.ibm.com/think/topics/multimodal-ai" }],
    lastVerified: "2026-07-15",
  },
  {
    id: "rag",
    term: { ja: "RAG（検索拡張生成）", en: "RAG (Retrieval-Augmented Generation)" },
    definition: {
      ja: "外部情報を検索してから、その内容を踏まえて回答を生成する手法。",
      en: "A technique that retrieves external information before generating an answer grounded in it.",
    },
    relatedLessonIds: ["ai-basics-04", "ai-basics-06"],
    sources: [
      {
        label: "Google Cloud: What is Retrieval-Augmented Generation (RAG)?",
        url: "https://cloud.google.com/use-cases/retrieval-augmented-generation",
      },
    ],
    lastVerified: "2026-07-15",
  },
  {
    id: "agent",
    term: { ja: "AIエージェント", en: "AI agent" },
    definition: {
      ja: "ツールを使い、目標達成のためのタスクを自律的に計画・実行するシステム。",
      en: "A system that uses tools to autonomously plan and execute tasks toward a goal.",
    },
    relatedLessonIds: ["ai-basics-06"],
    sources: [{ label: "IBM: What Are AI Agents?", url: "https://www.ibm.com/think/topics/ai-agents" }],
    lastVerified: "2026-07-15",
  },
  {
    id: "fine-tuning",
    term: { ja: "ファインチューニング", en: "Fine-tuning" },
    definition: {
      ja: "事前学習済みモデルを特定用途のデータで追加学習し、重みを調整する手法。",
      en: "Further training a pre-trained model on specialized data to adjust its own weights.",
    },
    relatedLessonIds: ["ai-basics-06"],
    sources: [
      {
        label: "Google Cloud: What is Retrieval-Augmented Generation (RAG)?",
        url: "https://cloud.google.com/use-cases/retrieval-augmented-generation",
      },
    ],
    lastVerified: "2026-07-15",
  },
];
