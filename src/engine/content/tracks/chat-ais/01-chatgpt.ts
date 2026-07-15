import type { Lesson } from "@/engine/content/types";

export const chatgptLesson: Lesson = {
  id: "chat-ais-01",
  slug: "chatgpt",
  title: {
    ja: "ChatGPT（OpenAI）",
    en: "ChatGPT (OpenAI)",
  },
  summary: {
    ja: "最も広く知られたチャットAI。開発元OpenAIの成り立ちと位置づけ。",
    en: "The most widely known chat AI — and the story of the lab behind it.",
  },
  body: {
    ja: `## 開発元: OpenAI

**ChatGPT** は **OpenAI** が開発するチャットAIです。OpenAIは2015年に非営利組織として設立され、「汎用人工知能（AGI）が人類全体の利益になるようにする」ことを使命に掲げています。2025年10月には組織構造を再編し、非営利の **OpenAI Foundation** が、公益法人（Public Benefit Corporation）である **OpenAI Group PBC** を統治する形になりました。

### 特徴・位置づけ
- 2022年11月の一般公開（歴史トラック参照）以降、最も広いユーザー基盤を持つチャットAIの一つ。
- 用途に応じて複数のモデル（高速な応答向け・じっくり推論する向けなど）を使い分けられる設計を採用。
- プラグイン的な拡張やコード実行、画像生成など、対話以外の機能も統合。

具体的なモデル名・料金プランは更新が速いため、本サイトでは個別の版数を追わず [モデルカタログ](/models) にまとめています。最新情報は必ず OpenAI の公式サイトで確認してください。`,
    en: `## Made by: OpenAI

**ChatGPT** is the chat AI built by **OpenAI**. Founded in 2015 as a nonprofit, OpenAI's stated mission is to ensure that artificial general intelligence (AGI) benefits all of humanity. In October 2025, it restructured so that the nonprofit **OpenAI Foundation** governs **OpenAI Group PBC**, a public benefit corporation.

### Positioning
- One of the most widely used chat AIs since its public launch in November 2022 (see the History track).
- Offers multiple models tuned for different needs — fast everyday responses versus deeper step-by-step reasoning.
- Integrates features beyond conversation, including code execution and image generation.

Specific model names and pricing change quickly, so this site doesn't track individual versions in lesson text — see the [model catalog](/models) instead. Always check OpenAI's official site for the current lineup.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "ChatGPTを開発しているのは？",
        en: "Who develops ChatGPT?",
      },
      choices: [
        { ja: "OpenAI", en: "OpenAI" },
        { ja: "Google DeepMind", en: "Google DeepMind" },
        { ja: "xAI", en: "xAI" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "ChatGPTは2015年設立のOpenAIが開発しています。",
        en: "ChatGPT is developed by OpenAI, founded in 2015.",
      },
    },
  ],
  sources: [
    { label: "OpenAI: About", url: "https://openai.com/about/" },
    { label: "OpenAI: Evolving OpenAI's structure", url: "https://openai.com/index/evolving-our-structure/" },
  ],
  lastVerified: "2026-07-15",
};
