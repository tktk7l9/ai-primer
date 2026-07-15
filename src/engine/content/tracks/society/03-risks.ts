import type { Lesson } from "@/engine/content/types";

export const risks: Lesson = {
  id: "society-03",
  slug: "risks",
  title: {
    ja: "リスク — 誤情報・バイアス・プライバシー",
    en: "Risks: Misinformation, Bias, and Privacy",
  },
  summary: {
    ja: "AIの便利さの裏側にある、社会的な課題を知っておく。",
    en: "The social challenges behind AI's convenience.",
  },
  body: {
    ja: `## 便利さの裏にある3つの課題

### 誤情報・偽情報
ハルシネーション（AI基礎トラック参照）による**意図しない誤情報**に加え、AIを悪用して偽のニュースやプロパガンダを**意図的に**大量生成するリスクもあります。おすすめ・レコメンドの仕組みが偏った情報を増幅し、世論の分断につながる懸念も指摘されています。

### バイアス（偏り）
AIは学習データに含まれる偏りをそのまま引き継ぐことがあります。偏ったデータで訓練されたモデルは、不公平・差別的な結果を生む可能性があり、判断の過程が見えにくい「ブラックボックス」的な性質が、こうした偏りの発見を難しくしています。

### プライバシー
AIの学習には大量のデータが必要で、そこに個人を特定できる情報が含まれていた場合、データ漏えいが法的・倫理的な問題につながる可能性があります。また、セキュリティ対策が不十分なAIシステムが、学習データの一部や個人情報をうっかり出力してしまうリスクも指摘されています。

### なぜ知っておく必要があるか
医療・司法・金融など、人の人生に大きく影響する意思決定にAIが使われる場面が増えており、こうした場面での誤りや偏りは見つけにくく、影響も大きくなりがちです。利用者としては、AIの回答を無条件に信頼せず、特に重要な判断の場面では検証・人間による確認を挟む姿勢が欠かせません。`,
    en: `## Three challenges behind the convenience

### Misinformation and disinformation
Beyond unintentional inaccuracies from hallucination (see the AI Fundamentals track), there's also the risk of AI being deliberately misused to mass-produce fake news or propaganda. Recommendation systems can amplify biased information, raising concerns about deepening social polarization.

### Bias
AI can inherit biases present in its training data. A model trained on biased data can produce unfair or discriminatory outcomes, and the "black box" nature of many AI systems — where the decision process is hard to see — makes such biases difficult to detect.

### Privacy
Training AI requires large amounts of data, and when that data includes personally identifiable information, a breach can create legal and ethical harm. Poorly secured AI systems have also been noted to risk leaking fragments of training data or personal details in their outputs.

### Why this matters
AI is increasingly used in decisions that significantly affect people's lives — healthcare, criminal justice, finance — where errors or bias can be hard to catch and carry serious consequences. As a user, the key habit is not trusting AI output unconditionally, and building in verification and human review especially for decisions that matter.`,
  },
  quiz: [
    {
      kind: "multi",
      prompt: {
        ja: "AI利用に伴うリスクとして正しいものをすべて選べ。",
        en: "Select all the risks associated with using AI.",
      },
      choices: [
        { ja: "学習データの偏りが不公平な結果につながること", en: "Training-data bias leading to unfair outcomes" },
        { ja: "個人を特定できる情報の漏えいリスク", en: "The risk of leaking personally identifiable information" },
        { ja: "AIは常に完全に中立な判断を行うこと", en: "AI always making perfectly neutral judgments" },
      ],
      correctIndexes: [0, 1],
      explanation: {
        ja: "バイアスとプライバシー漏えいは実際のリスクです。「常に完全に中立」というのは誤りで、むしろ偏りを引き継ぐ可能性があります。",
        en: "Bias and privacy leakage are real risks. \"Always perfectly neutral\" is false — models can inherit bias instead.",
      },
    },
  ],
  sources: [
    { label: "Witness AI: AI Risks Explained", url: "https://witness.ai/blog/ai-risks/" },
  ],
  lastVerified: "2026-07-15",
  glossaryRefs: ["hallucination"],
};
