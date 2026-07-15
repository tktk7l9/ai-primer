import type { Lesson } from "@/engine/content/types";

// ⚠ P3（パイロット執筆）で Web 検索検証つきの本文に置き換える予定のプレースホルダー。
export const whatIsAi: Lesson = {
  id: "ai-basics-01",
  slug: "what-is-ai",
  title: {
    ja: "AI・機械学習・深層学習の違い",
    en: "AI vs. Machine Learning vs. Deep Learning",
  },
  summary: {
    ja: "3つの言葉の関係を、包含図で一度で整理する。",
    en: "Sort out how the three terms relate — once and for all.",
  },
  body: {
    ja: `## AIは一番外側の円

**人工知能（AI）** は「人間の知的なふるまいを機械で再現する」試み全体を指す最も広い言葉です。

- **機械学習（ML）** はその部分集合で、ルールを手書きせずデータからパターンを学ぶ手法。
- **深層学習（DL）** はさらにその部分集合で、多層のニューラルネットワークを使う機械学習。

ChatGPT などの大規模言語モデル（LLM）は深層学習の産物です。`,
    en: `## AI is the outermost circle

**Artificial intelligence (AI)** is the broadest term: the whole endeavor of reproducing intelligent behavior in machines.

- **Machine learning (ML)** is a subset of AI: learning patterns from data instead of hand-writing rules.
- **Deep learning (DL)** is a subset of ML that uses many-layered neural networks.

Large language models (LLMs) such as ChatGPT are products of deep learning.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "AI・機械学習・深層学習の包含関係として正しいものは？",
        en: "Which correctly describes how AI, ML and DL contain one another?",
      },
      choices: [
        { ja: "AI ⊃ 機械学習 ⊃ 深層学習", en: "AI ⊃ ML ⊃ DL" },
        { ja: "深層学習 ⊃ 機械学習 ⊃ AI", en: "DL ⊃ ML ⊃ AI" },
        { ja: "3つは無関係な別分野", en: "The three are unrelated fields" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "AIが最も広く、その中に機械学習、さらにその中に深層学習が含まれます。",
        en: "AI is the broadest; ML sits inside it, and DL inside ML.",
      },
    },
  ],
  sources: [
    {
      label: "IBM: What is artificial intelligence?",
      url: "https://www.ibm.com/topics/artificial-intelligence",
    },
  ],
  lastVerified: "2026-07-15",
};
