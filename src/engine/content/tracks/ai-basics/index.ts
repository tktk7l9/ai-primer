import type { Track } from "@/engine/content/types";
import { whatIsAi } from "./01-what-is-ai";
import { whatIsLlm } from "./02-what-is-llm";

export const aiBasicsTrack: Track = {
  id: "ai-basics",
  emoji: "🧭",
  title: {
    ja: "AIの基礎とキーワード",
    en: "AI Fundamentals & Key Terms",
  },
  summary: {
    ja: "LLM・トークン・ハルシネーション——ニュースや会話に出てくる用語を土台から。",
    en: "LLMs, tokens, hallucinations — the vocabulary you meet in every AI conversation.",
  },
  lessons: [whatIsAi, whatIsLlm],
};
