import type { Lesson } from "@/engine/content/types";

export const iteration: Lesson = {
  id: "prompting-04",
  slug: "iteration",
  title: {
    ja: "反復改善とコンテキスト管理",
    en: "Iterating and Managing Context",
  },
  summary: {
    ja: "一発で完璧な回答を狙うより、対話を重ねて磨き込む方が現実的。",
    en: "Refining through back-and-forth is often more realistic than expecting a perfect answer on the first try.",
  },
  body: {
    ja: `## 一往復で終わらせない

AIとのやり取りは、1回の質問で完璧な答えを引き出そうとするより、**対話を重ねて磨き込む**方が現実的です。

### 反復改善の型
1. まず粗い指示で回答をもらう。
2. 足りない点・ずれている点を具体的に指摘する（「もっと簡潔に」「専門用語を避けて」など）。
3. 望む形に近づくまで繰り返す。

### コンテキスト管理の注意点
会話が長くなると、以前の指示や前提が**コンテキストウィンドウ**（AI基礎トラック参照）から押し出され、AIが「忘れた」ように見えることがあります。

**対策**:
- 話題を変えるときは、新しい会話を始める（無関係な過去のやり取りが今の回答の質を下げることがある）。
- 長い作業では、重要な前提・決定事項を都度要約して再提示する。
- 一つの会話に複数の無関係なタスクを詰め込まない。

**心構え**: 最初の回答が期待通りでなくても、それは「失敗」ではなく指示を磨く材料と捉えると、AIとのやり取りが効率的になります。`,
    en: `## Don't stop after one round

Rather than expecting a perfect answer from a single question, it's more realistic to **refine through back-and-forth** with the AI.

### A pattern for iterating
1. Get a first answer from a rough instruction.
2. Point out specifically what's missing or off ("more concise," "avoid jargon," etc.).
3. Repeat until it's close to what you want.

### Managing context
As a conversation grows long, earlier instructions and assumptions can get pushed out of the **context window** (see the AI Fundamentals track), making the AI seem to "forget."

**What helps**:
- Start a fresh conversation when you switch topics — unrelated earlier exchanges can drag down the quality of current answers.
- On long tasks, periodically re-state the key assumptions and decisions so far.
- Avoid packing several unrelated tasks into one conversation.

**Mindset**: treat a first answer that misses the mark not as a failure, but as material for refining the instruction — that mindset makes working with AI much more efficient.`,
  },
  quiz: [
    {
      kind: "boolean",
      prompt: {
        ja: "会話が長くなると、以前の前提がコンテキストウィンドウから押し出され、AIが「忘れた」ように見えることがある。",
        en: "As a conversation grows, earlier context can get pushed out of the context window, making the AI seem to forget.",
      },
      answer: true,
      explanation: {
        ja: "これはモデルの記憶力の問題ではなく、コンテキストウィンドウという物理的な制約によるものです。",
        en: "This isn't a memory failure — it's the physical limit of the context window.",
      },
    },
  ],
  sources: [
    { label: "IBM: What is a context window?", url: "https://www.ibm.com/think/topics/context-window" },
  ],
  lastVerified: "2026-07-15",
  glossaryRefs: ["context-window"],
};
