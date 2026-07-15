import type { Lesson } from "@/engine/content/types";

export const fewShot: Lesson = {
  id: "prompting-02",
  slug: "few-shot",
  title: {
    ja: "例示（few-shot） — お手本を見せて狙いを伝える",
    en: "Few-Shot Prompting: Showing Examples to Steer the Output",
  },
  summary: {
    ja: "説明するより、望む出力の例を2〜3個見せる方が伝わることがある。",
    en: "Sometimes showing 2–3 examples of the output you want works better than describing it.",
  },
  body: {
    ja: `## 「こういう感じで」を例で示す

**few-shotプロンプト**とは、指示文だけでなく、入力と望ましい出力の**例をいくつか**添えて示す手法です。例が1つもない指示は**zero-shot**と呼ばれます。

例えば商品レビューを「ポジティブ／ネガティブ／中立」に分類してほしいとき、ラベルの付け方や粒度は説明だけでは伝わりにくいことがあります。

\`\`\`
レビュー: 「配送が早くて助かった」→ ポジティブ
レビュー: 「思ったより小さかった」→ ネガティブ
レビュー: 「普通に使えている」→ 中立
レビュー: 「梱包は丁寧だったが到着が遅れた」→ ?
\`\`\`

このように2〜3例を示すことで、期待する出力の**形式**や**粒度**が明確になり、指示文だけでは伝わりにくいニュアンスを補えます。

**ポイント**:
- 例は一貫した形式にする（フォーマットがバラバラだと逆効果）。
- タスクに近い、代表的な例を選ぶ。
- 複雑な推論が必要な場合は、例示だけでは不十分なことがあります（次のレッスンで扱う「段階的思考」と組み合わせると効果的です）。`,
    en: `## Show what you mean with examples

**Few-shot prompting** means pairing your instruction with a few examples of input paired with the output you want. An instruction with zero examples is called **zero-shot**.

Say you want product reviews classified as positive, negative, or neutral. The exact granularity of the labels can be hard to convey through explanation alone.

\`\`\`
Review: "Shipping was fast, really helped." → Positive
Review: "Smaller than I expected." → Negative
Review: "Works fine, nothing special." → Neutral
Review: "Packaging was careful but it arrived late." → ?
\`\`\`

Showing two or three examples like this makes the expected **format** and **granularity** clear — nuances that are hard to convey through instruction text alone.

**Tips**:
- Keep examples consistent in format (inconsistent formatting can backfire).
- Choose examples that are representative of the actual task.
- For tasks that need more complex reasoning, examples alone may not be enough — pairing this with step-by-step reasoning (next lesson) often helps.`,
  },
  quiz: [
    {
      kind: "boolean",
      prompt: {
        ja: "例を1つも示さない指示は「zero-shot」と呼ばれる。",
        en: "An instruction with no examples at all is called \"zero-shot.\"",
      },
      answer: true,
      explanation: {
        ja: "例を示さないものがzero-shot、いくつか示すものがfew-shotです。",
        en: "Zero examples is zero-shot; a handful of examples is few-shot.",
      },
    },
  ],
  sources: [
    { label: "Prompt Engineering Guide: Few-Shot Prompting", url: "https://www.promptingguide.ai/techniques/fewshot" },
  ],
  lastVerified: "2026-07-15",
};
