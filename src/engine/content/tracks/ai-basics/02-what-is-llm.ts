import type { Lesson } from "@/engine/content/types";

// ⚠ P3（パイロット執筆）で Web 検索検証つきの本文に置き換える予定のプレースホルダー。
export const whatIsLlm: Lesson = {
  id: "ai-basics-02",
  slug: "what-is-llm",
  title: {
    ja: "LLMとは — トークンとパラメータ",
    en: "What Is an LLM? Tokens and Parameters",
  },
  summary: {
    ja: "大規模言語モデルが文章を「トークン」単位で予測する仕組みの入口。",
    en: "A first look at how large language models predict text token by token.",
  },
  body: {
    ja: `## 文章を細かく刻んで予測する

**大規模言語モデル（LLM）** は、大量のテキストから「次に来る単語の断片（**トークン**）」を予測するよう訓練されたニューラルネットワークです。

- 文章はまず**トークン**という単位に分割されます（日本語では1文字〜数文字程度）。
- モデルの内部にある膨大な調整可能な数値を**パラメータ**と呼びます。`,
    en: `## Predicting text, one small piece at a time

A **large language model (LLM)** is a neural network trained on vast amounts of text to predict the next fragment of a word — a **token**.

- Text is first split into **tokens** (roughly a few characters each).
- The model's enormous set of tunable numbers are its **parameters**.`,
  },
  quiz: [
    {
      kind: "boolean",
      prompt: {
        ja: "LLMは文章を1文字ずつではなく「トークン」という単位で処理する。",
        en: "LLMs process text in units called tokens, not character by character.",
      },
      answer: true,
      explanation: {
        ja: "LLMの入出力はトークン単位です。トークンは単語より短いことも長いこともあります。",
        en: "LLM input and output are token-based; a token can be shorter or longer than a word.",
      },
    },
  ],
  sources: [
    {
      label: "OpenAI Help: What are tokens and how to count them?",
      url: "https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them",
    },
  ],
  lastVerified: "2026-07-15",
};
