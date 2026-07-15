import type { Lesson } from "@/engine/content/types";

export const commonMistakes: Lesson = {
  id: "prompting-05",
  slug: "common-mistakes",
  title: {
    ja: "よくある失敗と対策",
    en: "Common Mistakes and How to Avoid Them",
  },
  summary: {
    ja: "プロンプトのつまずきポイントを、これまでのレッスンの知識で振り返る。",
    en: "Reviewing common prompting pitfalls through what earlier lessons already taught.",
  },
  body: {
    ja: `## つまずきやすいポイント集

これまでのレッスンで学んだ内容を踏まえ、よくある失敗パターンを整理します。

### 1. 曖昧すぎる指示
「いい感じにまとめて」のような指示は、AIにとって「何を」「誰向けに」「どんな形で」が分からず、的外れな回答になりがちです（レッスン1参照）。→ 役割・文脈・形式を具体化する。

### 2. 事実確認をAI任せにする
もっともらしい断定でも、ハルシネーション（AI基礎トラック参照）の可能性があります。→ 重要な事実・数値・引用は出典を自分で確認する。

### 3. 1つの会話に無関係なタスクを詰め込む
コンテキストウィンドウが圧迫され、古い指示が押し出されたり、無関係な文脈が回答の質を下げたりします（レッスン4参照）。→ 話題ごとに会話を分ける。

### 4. 複雑なタスクをいきなり一発で解かせようとする
計算や多段階の論理では、途中経過を出させた方が精度が上がることがあります（レッスン3参照）。→ 「段階を踏んで」と明示する、または小さく分解して依頼する。

### 5. 最初の回答で諦める
一往復で完璧な答えを求めず、具体的なフィードバックを重ねて磨き込む方が現実的です（レッスン4参照）。

**まとめ**: プロンプトの工夫は、AIの仕組み（次トークン予測・コンテキストウィンドウ・ハルシネーションのリスク）を踏まえると、なぜ効くのかが見えてきます。`,
    en: `## A round-up of common pitfalls

Drawing on everything covered so far, here's a summary of common prompting mistakes.

### 1. Instructions that are too vague
"Summarize this nicely" gives the AI no clue about what, for whom, or in what shape (see Lesson 1). → Make role, context, and format concrete.

### 2. Outsourcing fact-checking to the AI
Even confident-sounding claims can be hallucinations (see the AI Fundamentals track). → Verify important facts, numbers, and citations against real sources yourself.

### 3. Packing unrelated tasks into one conversation
This crowds the context window, pushing out earlier instructions or letting irrelevant context drag down answer quality (see Lesson 4). → Split conversations by topic.

### 4. Asking for a complex task to be solved in one leap
For arithmetic or multi-step logic, surfacing intermediate steps tends to improve accuracy (see Lesson 3). → Ask it to reason step by step, or break the task into smaller pieces.

### 5. Giving up after the first answer
Rather than expecting a perfect answer in one round, refining through specific feedback is the more realistic approach (see Lesson 4).

**Takeaway**: once you understand how an AI actually works — next-token prediction, the context window, hallucination risk — it becomes clear why these prompting tricks work in the first place.`,
  },
  quiz: [
    {
      kind: "multi",
      prompt: {
        ja: "プロンプトのよくある失敗として正しいものをすべて選べ。",
        en: "Select all the common prompting mistakes.",
      },
      choices: [
        { ja: "重要な事実確認をAIの回答だけに頼る", en: "Relying only on the AI's answer for important fact-checking" },
        { ja: "無関係な複数のタスクを1つの会話に詰め込む", en: "Packing several unrelated tasks into one conversation" },
        { ja: "役割・文脈・出力形式を具体的に指定する", en: "Specifying role, context, and output format concretely" },
      ],
      correctIndexes: [0, 1],
      explanation: {
        ja: "事実確認をAI任せにすることと無関係なタスクの詰め込みは失敗パターンです。具体的な指定はむしろ推奨される良い習慣です。",
        en: "Outsourcing fact-checking and packing in unrelated tasks are pitfalls. Specifying role/context/format concretely is actually a recommended good habit.",
      },
    },
  ],
  sources: [
    { label: "IBM: What Are AI Hallucinations?", url: "https://www.ibm.com/think/topics/ai-hallucinations" },
  ],
  lastVerified: "2026-07-15",
  glossaryRefs: ["hallucination", "context-window"],
};
