import type { Lesson } from "@/engine/content/types";

export const pretraining: Lesson = {
  id: "how-llms-work-02",
  slug: "pretraining",
  title: {
    ja: "事前学習 — 「次のトークン」を当て続ける訓練",
    en: "Pre-training: Learning by Guessing the Next Token",
  },
  summary: {
    ja: "LLMの土台は、膨大なテキストで「次に来る一片」を予測し続けた結果できあがる。",
    en: "An LLM's foundation comes from repeatedly predicting the next chunk of text across a huge corpus.",
  },
  body: {
    ja: `## やっていることは単純、規模が桁違い

LLMの**事前学習（Pre-training）**でモデルがやっていることは、原理としては単純です。大量のテキストの一部を見せ、「次に来るトークンは何か」を予測させ、正解との差を使ってパラメータ（内部の数値）を少しずつ調整する——これをひたすら繰り返します。

正解ラベルを人間が用意する必要がない（元のテキストそのものが正解になる）ため、インターネット上の文章や書籍など桁違いの量のデータを使えます。この規模の大きさが、事前学習だけでも文法・事実知識・ある程度の推論パターンをモデルに獲得させる理由です。

ただし事前学習だけでは、モデルは「もっともらしい文章の続きを作る」ことは得意でも、「指示に従う」「対話する」ことには最適化されていません。この後工程として、指示に従うよう調整する **指示チューニング** や、人間の評価を使う **RLHF**（次のレッスン）が加わり、私たちが使うチャットAIになります。`,
    en: `## Simple in principle, vast in scale

What an LLM does during **pre-training** is conceptually simple: show it a chunk of text, ask it to predict the next token, compare that guess to the actual next token, and nudge its parameters slightly toward the correct answer — repeated an enormous number of times.

Because the "correct answer" is just the next piece of the original text, no human needs to label anything — which means training can draw on staggering amounts of text from the web, books, and more. That scale is why pre-training alone gives a model grammar, factual knowledge, and some reasoning patterns.

But pre-training alone optimizes a model to "continue plausible text," not to follow instructions or hold a conversation. The next steps — **instruction tuning** and **RLHF** (next lesson), which uses human evaluation — are what turn a base model into the chat assistant you actually use.`,
  },
  quiz: [
    {
      kind: "boolean",
      prompt: {
        ja: "事前学習の「正解ラベル」は元のテキスト自身から得られるため、人手によるラベル付けを必要としない。",
        en: "Pre-training's \"correct answer\" comes from the original text itself, so it doesn't require human labeling.",
      },
      answer: true,
      explanation: {
        ja: "次に来る実際のトークンが正解になるため、大量のテキストをそのまま学習に使えます。",
        en: "The actual next token in the text serves as the label, which is what allows training on massive amounts of raw text.",
      },
    },
  ],
  sources: [
    {
      label: "IBM: What Is Reinforcement Learning From Human Feedback (RLHF)?",
      url: "https://www.ibm.com/think/topics/rlhf",
    },
  ],
  lastVerified: "2026-07-15",
  glossaryRefs: ["token"],
};
