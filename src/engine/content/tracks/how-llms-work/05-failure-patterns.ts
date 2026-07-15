import type { Lesson } from "@/engine/content/types";

export const failurePatterns: Lesson = {
  id: "how-llms-work-05",
  slug: "failure-patterns",
  title: {
    ja: "よくある失敗パターン — 知識のカットオフ・計算・最新情報",
    en: "Common Failure Patterns: Knowledge Cutoffs, Arithmetic, and Fresh Facts",
  },
  summary: {
    ja: "LLMの仕組みを知ると、どこで間違えやすいかが予測できるようになる。",
    en: "Understanding how an LLM works also tells you where it's likely to fail.",
  },
  body: {
    ja: `## 仕組みから逆算すると見えてくる弱点

これまでのレッスンで見た「次のトークン予測」という仕組みからは、LLMが苦手とするパターンが見えてきます。

### 知識のカットオフ
モデルは特定の時点までの学習データを使って訓練されます。訓練後に起きた出来事（新製品・最新のニュースなど）は、外部情報を検索して与えない限りモデルは知りません。「最新情報」を尋ねる際は、この点を意識する必要があります（AI基礎トラックの RAG のレッスン参照）。

### 桁の大きい計算
LLMはトークン列のパターンを学習しており、電卓のように厳密な演算をする回路を内蔵しているわけではありません。桁数の多い掛け算などは間違えやすく、正確な計算にはコード実行など外部ツールとの連携が有効です。

### もっともらしい断定（ハルシネーション）
「わからない」より「それらしい答えを作る」方が学習データ中で自然に見える場合、誤った内容を自信ありげに述べることがあります（AI基礎トラックのハルシネーションのレッスン参照）。

**まとめ**: これらは「モデルが壊れている」のではなく、次トークン予測という設計そのものに由来する特性です。用途に応じて外部ツール・検索・人間の確認を組み合わせることが実践上の対策になります。`,
    en: `## Weaknesses you can predict from the mechanism

The "predict the next token" mechanism from earlier lessons also explains where LLMs tend to fail.

### Knowledge cutoffs
A model is trained on data up to some point in time. Anything that happened after training — a new product, recent news — is unknown to the model unless external information is supplied (see the RAG lesson in the AI Fundamentals track).

### Large arithmetic
LLMs learn patterns over token sequences; they don't have a built-in circuit for exact computation the way a calculator does. Multi-digit multiplication is a common failure point — pairing the model with an external tool like code execution is the practical fix.

### Confident, plausible claims (hallucination)
When "invent a plausible-sounding answer" looks more natural in the training data than "say I don't know," a model can state something false with full confidence (see the Hallucination lesson in the AI Fundamentals track).

**Takeaway**: these aren't signs the model is "broken" — they follow directly from the next-token-prediction design itself. Pairing the model with external tools, retrieval, and human verification is the practical mitigation.`,
  },
  quiz: [
    {
      kind: "multi",
      prompt: {
        ja: "LLMの仕組みに由来する典型的な弱点として正しいものをすべて選べ。",
        en: "Select all the weaknesses that follow from how LLMs work.",
      },
      choices: [
        { ja: "訓練後に起きた出来事を知らない（知識のカットオフ）", en: "Not knowing events after training (knowledge cutoff)" },
        { ja: "桁の大きい計算を間違えやすい", en: "Struggling with large arithmetic" },
        { ja: "画面の色を認識できない", en: "Being unable to perceive screen colors" },
      ],
      correctIndexes: [0, 1],
      explanation: {
        ja: "知識のカットオフと計算の弱さは、次トークン予測という設計から直接説明できる特性です。「画面の色」は無関係な選択肢です。",
        en: "Knowledge cutoffs and weak arithmetic follow directly from next-token prediction. The screen-color option is a distractor.",
      },
    },
  ],
  sources: [
    { label: "IBM: What Are AI Hallucinations?", url: "https://www.ibm.com/think/topics/ai-hallucinations" },
  ],
  lastVerified: "2026-07-15",
  glossaryRefs: ["hallucination", "rag"],
};
