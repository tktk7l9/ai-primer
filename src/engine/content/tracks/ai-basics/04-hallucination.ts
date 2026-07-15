import type { Lesson } from "@/engine/content/types";

export const hallucination: Lesson = {
  id: "ai-basics-04",
  slug: "hallucination",
  title: {
    ja: "ハルシネーション — 自信満々の間違い",
    en: "Hallucination: Confidently Wrong",
  },
  summary: {
    ja: "AIがもっともらしい嘘を作ってしまう現象と、その見分け方。",
    en: "Why AI sometimes invents plausible-sounding falsehoods — and how to catch it.",
  },
  body: {
    ja: `## もっともらしい、けれど間違っている

**ハルシネーション**とは、AIが事実に基づかない情報や、実際には存在しない内容を、いかにも本当らしく生成してしまう現象です。存在しない論文や書籍を引用したり、誤った日付や数値を断定的に述べたりします。

厄介なのは、ハルシネーションが正しい回答と**同じくらい自然で自信ありげな文体**で出力される点です。2023年には Cambridge Dictionary がこの語のAI分野での意味を辞書に追加し、OpenAI も「不確実な瞬間に事実を作り出す傾向」と説明しています。

**なぜ起きるか**: LLMは次に来る可能性が高いトークンを予測して文章を生成する仕組みであり、「事実かどうかを検証する」機能を内蔵しているわけではありません。学習データの偏りや不足、複雑な質問への過度な一般化などが引き金になります。

**対処のヒント**:
- 固有名詞・数値・引用は、出典を自分で確認する。
- 「わからない」と正直に答えさせるよう質問を工夫する。
- RAG（後述のレッスンで扱う）のように外部の一次情報を参照させる設計は、ハルシネーションを減らす代表的な対策です。`,
    en: `## Fluent, and wrong

**Hallucination** is when an AI generates information that sounds plausible but is factually incorrect, fabricated, or unsupported by any real source — inventing a paper that doesn't exist, or stating a wrong date with total confidence.

What makes it tricky: hallucinated text reads with the **same fluency and confidence** as a correct answer. In 2023 the Cambridge Dictionary added this AI-specific sense to its entry for "hallucinate," and OpenAI has described it as "a tendency to invent facts in moments of uncertainty."

**Why it happens**: an LLM generates text by predicting the most likely next token — it has no built-in fact-checking step. Gaps or biases in training data, and overgeneralizing on complex questions, both contribute.

**What helps**:
- Verify names, numbers, and citations against a real source yourself.
- Prompt the model to say "I don't know" rather than guess.
- Retrieval-augmented generation (RAG, covered in a later lesson) — grounding answers in real retrieved documents — is a standard mitigation.`,
  },
  quiz: [
    {
      kind: "boolean",
      prompt: {
        ja: "ハルシネーションは、正しい回答と見分けがつきにくい自然な文体で出力されることが多い。",
        en: "Hallucinated output is often just as fluent and confident-sounding as a correct answer.",
      },
      answer: true,
      explanation: {
        ja: "そのため、内容の正しさは文体の自然さではなく出典で確認する必要があります。",
        en: "That's why you have to verify claims against sources, not just how natural the writing sounds.",
      },
    },
  ],
  sources: [
    { label: "IBM: What Are AI Hallucinations?", url: "https://www.ibm.com/think/topics/ai-hallucinations" },
    {
      label: "Wikipedia: Hallucination (artificial intelligence)",
      url: "https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)",
    },
  ],
  lastVerified: "2026-07-15",
  glossaryRefs: ["hallucination", "rag"],
};
