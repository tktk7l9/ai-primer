import type { Track } from "@/engine/content/types";
import { languagesAndData } from "./01-languages-and-data";
import { tokensAndJapanese } from "./02-tokens-and-japanese";
import { measuringJapaneseAbility } from "./03-measuring-japanese-ability";
import { japaneseLlmProjects } from "./04-japanese-llm-projects";
import { cultureAndBias } from "./05-culture-and-bias";
import { usingAiInJapanese } from "./06-using-ai-in-japanese";

export const aiAndJapaneseTrack: Track = {
  id: "ai-and-japanese",
  emoji: "🗾",
  title: {
    ja: "日本語とAI",
    en: "AI and the Japanese Language",
  },
  summary: {
    ja: "日本語でAIを使う人のための基礎。学習データの中の日本語の量、同じ内容でもトークンが多くなる理由、日本語の力の測り方、日本で進むLLM開発、文化の偏り、そして言語と文体の指定や「やさしい日本語」など、日本語で上手に使うコツ。",
    en: "Basics for anyone using AI in Japanese: how much Japanese is in training data, why the same content takes more tokens, how Japanese ability is measured, LLM development in Japan, cultural bias, and tips for using AI well in Japanese, from stating the language and style to plain Japanese.",
  },
  // From why languages differ (data, then tokens), through how that is measured and who is building for Japanese,
  // to cultural bias, closing with practical habits that tie the track together.
  lessons: [languagesAndData, tokensAndJapanese, measuringJapaneseAbility, japaneseLlmProjects, cultureAndBias, usingAiInJapanese],
};
