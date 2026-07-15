import type { Lesson } from "@/engine/content/types";

export const stepByStep: Lesson = {
  id: "prompting-03",
  slug: "step-by-step",
  title: {
    ja: "分解と段階的思考（Chain-of-Thought）",
    en: "Breaking It Down: Chain-of-Thought Prompting",
  },
  summary: {
    ja: "「段階を踏んで考えて」の一言が、複雑な問題での精度を上げることがある。",
    en: "Just asking the model to \"think step by step\" can improve accuracy on harder problems.",
  },
  body: {
    ja: `## 一気に答えさせない

**Chain-of-Thought（CoT、思考の連鎖）プロンプティング**とは、AIに最終的な答えだけでなく、そこに至る**中間ステップ**を順に説明させながら答えさせる手法です。

計算問題や複数条件の絡む論理パズルなど、複雑なタスクでは、いきなり結論を求めるより、途中の推論過程を書き出させた方が精度が上がることが知られています。

**シンプルな方法（zero-shot CoT）**: プロンプトの最後に「段階を踏んで考えてください」と一文を加えるだけで、推論タスクの精度が向上することが報告されています。

**もう一つの方法**: 例示（few-shot）と組み合わせ、模範解答の中で推論過程も書いて見せる。

**使い分けの目安**:
- 単純な質問や要約 → 素直に聞くだけで十分なことが多い。
- 計算・多段階の論理・複数条件の比較 → 「段階を踏んで」と明示すると改善しやすい。

大きなタスクを1回で解かせようとせず、途中経過を出させることで、間違いにも気づきやすくなります（人間側の検証もしやすくなる）。`,
    en: `## Don't ask for the answer in one leap

**Chain-of-thought (CoT) prompting** asks an AI to lay out the intermediate reasoning steps that lead to its answer, not just the final answer.

For complex tasks — arithmetic, logic puzzles with several conditions — writing out the reasoning along the way tends to improve accuracy compared to jumping straight to a conclusion.

**The simple version (zero-shot CoT)**: just adding "let's think step by step" to the end of a prompt has been reported to improve accuracy on reasoning tasks.

**Another approach**: combine it with few-shot examples that also show the reasoning process, not just the final answer.

**When to use it**:
- Simple questions or summaries → asking directly is often enough.
- Arithmetic, multi-step logic, comparing several conditions → asking it to reason step by step tends to help.

Rather than asking for a big task solved in one shot, surfacing the intermediate steps also makes mistakes easier to catch — for you as much as for the model.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "Chain-of-Thoughtプロンプティングが特に効果を発揮しやすいのは？",
        en: "Chain-of-thought prompting is especially useful for:",
      },
      choices: [
        { ja: "計算や多段階の論理が絡む複雑なタスク", en: "Complex tasks involving arithmetic or multi-step logic" },
        { ja: "1単語だけの短い挨拶", en: "A one-word greeting" },
        { ja: "画像のピクセル数を数えること", en: "Counting the pixels in an image" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "推論過程を書き出させることは、複雑なタスクで特に精度向上に効果があるとされています。",
        en: "Surfacing the reasoning process is especially effective for complex, multi-step tasks.",
      },
    },
  ],
  sources: [
    {
      label: "PromptHub: Chain of Thought Prompting Guide",
      url: "https://www.prompthub.us/blog/chain-of-thought-prompting-guide",
    },
  ],
  lastVerified: "2026-07-15",
};
