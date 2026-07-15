import type { Lesson } from "@/engine/content/types";

export const basicStructure: Lesson = {
  id: "prompting-01",
  slug: "basic-structure",
  title: {
    ja: "プロンプトの基本構造 — 役割・文脈・形式",
    en: "The Basic Prompt Structure: Role, Context, Format",
  },
  summary: {
    ja: "曖昧な指示を具体的にするだけで、回答の質は大きく変わる。",
    en: "Making an instruction concrete — instead of vague — changes the quality of the answer dramatically.",
  },
  body: {
    ja: `## 「良い質問」には型がある

AIへの指示（**プロンプト**）は、次の要素を意識して書くと具体性が上がり、狙った回答を引き出しやすくなります。

- **役割**: 「あなたは〇〇の専門家として」など、どんな立場で答えてほしいかを伝える。
- **文脈（コンテキスト）**: 前提となる状況・制約・すでに知っている情報を共有する。
- **タスク**: 何をしてほしいのか、動詞で明確に（要約する・比較する・箇条書きにする等）。
- **出力形式**: 表・箇条書き・文字数・言語など、欲しい形を指定する。

**曖昧な例**: 「AIについて教えて」
**具体的な例**: 「AIに詳しくない中学生向けに、機械学習と深層学習の違いを300字程度で、たとえ話を1つ使って説明して」

具体性を上げるほど、AIが「何を、誰に、どんな形で」答えるべきかの手がかりが増え、的外れな回答が減ります。`,
    en: `## Good prompts follow a shape

Writing an instruction (a **prompt**) with these elements in mind makes it more concrete and easier for the AI to hit what you actually want:

- **Role**: "As an expert in X…" — tell it what stance to answer from.
- **Context**: share the situation, constraints, and anything you already know.
- **Task**: state clearly, with a verb, what you want done (summarize, compare, list).
- **Format**: specify the shape you want — a table, bullet points, a word count, a language.

**Vague**: "Tell me about AI."
**Concrete**: "Explain the difference between machine learning and deep learning to a middle schooler with no AI background, in about 150 words, using one analogy."

The more concrete the prompt, the more clues the AI has about what to answer, for whom, and in what shape — which cuts down on off-target answers.`,
  },
  quiz: [
    {
      kind: "multi",
      prompt: {
        ja: "具体的なプロンプトに含めるとよい要素を選べ。",
        en: "Which elements are worth including in a concrete prompt?",
      },
      choices: [
        { ja: "役割（どんな立場で答えてほしいか）", en: "Role (what stance to answer from)" },
        { ja: "出力形式（表・箇条書きなど）", en: "Output format (table, bullet points, etc.)" },
        { ja: "AIモデルの内部パラメータ数", en: "The AI model's internal parameter count" },
      ],
      correctIndexes: [0, 1],
      explanation: {
        ja: "役割・文脈・タスク・出力形式を明示すると、狙った回答を引き出しやすくなります。モデルのパラメータ数はプロンプトに書く情報ではありません。",
        en: "Role, context, task, and format all help steer the answer. The model's parameter count isn't something you'd put in a prompt.",
      },
    },
  ],
  sources: [
    { label: "Prompt Engineering Guide", url: "https://www.promptingguide.ai/" },
  ],
  lastVerified: "2026-07-15",
};
