import type { Lesson } from "@/engine/content/types";

export const transformer: Lesson = {
  id: "history-04",
  slug: "transformer-2017",
  title: {
    ja: "Transformer（2017） — 今日のAIの共通基盤",
    en: "The Transformer (2017): Today's Common Foundation",
  },
  summary: {
    ja: "「Attention Is All You Need」という1本の論文が、以後のAIの設計図になった。",
    en: "One paper — \"Attention Is All You Need\" — became the blueprint for nearly every AI model since.",
  },
  body: {
    ja: `## Attentionだけで十分だった

2017年、Google の研究者8名（Ashish Vaswani, Noam Shazeer, Niki Parmar ほか）が発表した論文 **「Attention Is All You Need」** が、**Transformer** というアーキテクチャを提示しました。

それまでの主流だった再帰型ネットワーク（RNN）や畳み込み（CNN）を使わず、**注意機構（Attention）** だけで文章内の離れた単語同士の関係を捉える設計です。これにより:

- 長い文章内の離れた位置にある単語同士の関係を学習しやすくなった。
- 計算を並列化しやすく、学習が大幅に高速化した。
- 翻訳品質が当時の最先端を上回りながら、学習コストは低く抑えられた。

この論文は2026年時点で25万回以上引用され、今世紀で最も引用された論文の一つに数えられています。GPTシリーズやClaude、Geminiなど、現在の主要な大規模言語モデルはいずれもTransformerを基盤としています。`,
    en: `## Attention turned out to be enough

In 2017, eight researchers at Google (Ashish Vaswani, Noam Shazeer, Niki Parmar, and others) published **"Attention Is All You Need,"** introducing the **Transformer** architecture.

Instead of the recurrent (RNN) or convolutional (CNN) networks that had dominated until then, it captured relationships between distant words in a sentence using **attention** alone. This made it possible to:

- Learn relationships between distant words in long text more easily.
- Parallelize computation, dramatically speeding up training.
- Beat the era's state-of-the-art translation quality while cutting training cost.

As of 2026, the paper has been cited more than 250,000 times, ranking among the most-cited scientific papers of the century. The Transformer underlies nearly every major LLM today — the GPT series, Claude, and Gemini among them.`,
  },
  quiz: [
    {
      kind: "boolean",
      prompt: {
        ja: "Transformerは、再帰(RNN)や畳み込み(CNN)を使わずAttention機構だけで系列を処理する設計である。",
        en: "The Transformer processes sequences using attention alone, without recurrence (RNNs) or convolutions (CNNs).",
      },
      answer: true,
      explanation: {
        ja: "これがTransformerの核心的な設計変更で、並列化と長距離依存の学習のしやすさにつながりました。",
        en: "This was the Transformer's core design shift, enabling parallelization and easier learning of long-range dependencies.",
      },
    },
  ],
  sources: [
    {
      label: "Wikipedia: Attention Is All You Need",
      url: "https://en.wikipedia.org/wiki/Attention_Is_All_You_Need",
    },
  ],
  lastVerified: "2026-07-15",
};
