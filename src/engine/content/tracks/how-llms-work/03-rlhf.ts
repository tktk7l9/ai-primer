import type { Lesson } from "@/engine/content/types";

export const rlhf: Lesson = {
  id: "how-llms-work-03",
  slug: "rlhf",
  title: {
    ja: "RLHF — 人間の評価でモデルを調律する",
    en: "RLHF: Tuning a Model with Human Feedback",
  },
  summary: {
    ja: "「どちらの回答が良いか」という人間の判断を、モデルの学習に組み込む手法。",
    en: "How human judgments of \"which answer is better\" get folded back into model training.",
  },
  body: {
    ja: `## 人間の好みを学習信号にする

**RLHF（人間のフィードバックによる強化学習）**は、人間の評価をモデルの調整に使う手法です。おおまかな流れは次の通りです。

1. モデルに複数の回答候補を生成させる。
2. 人間の評価者が「どちらがより良い回答か」を順位づけする。
3. この順位データから**報酬モデル**を学習させ、「人間が好む回答」を数値で評価できるようにする。
4. 報酬モデルのスコアを手がかりに、強化学習でモデル自体を調整する。

この手法が広く知られるきっかけになったのが、OpenAIが2022年に発表した **InstructGPT** です。指示に従うよう調整されたことで、パラメータ数が少ない1.3BのInstructGPTが、遥かに大きい175BのGPT-3よりも人間の評価者に好まれ、事実誤りや有害な出力も大きく減少したと報告されています。

RLHFによって、モデルは単に「もっともらしい文章」を生成するだけでなく、「人間にとって役立ち、安全で、指示に沿った」回答を優先するようになります。`,
    en: `## Turning human preferences into a training signal

**RLHF (Reinforcement Learning from Human Feedback)** uses human evaluations to steer model tuning. Roughly:

1. The model generates several candidate answers.
2. Human raters rank which answer is better.
3. That ranking data trains a **reward model** that can score "how much would a human prefer this answer."
4. The reward model's scores then guide reinforcement learning to adjust the model itself.

The technique became widely known through OpenAI's 2022 **InstructGPT** paper. After instruction-tuning with RLHF, a much smaller 1.3-billion-parameter InstructGPT was preferred by human raters over the far larger 175-billion-parameter GPT-3 in side-by-side comparisons, and produced markedly fewer factual errors and toxic outputs.

RLHF is what pushes a model beyond "generating plausible text" toward answers that are helpful, safe, and responsive to instructions.`,
  },
  quiz: [
    {
      kind: "order",
      prompt: {
        ja: "RLHFの基本的な流れを順番に並べよ。",
        en: "Put the basic RLHF pipeline in order.",
      },
      items: [
        { ja: "モデルが複数の回答候補を生成する", en: "The model generates several candidate answers" },
        { ja: "人間の評価者が回答を順位づけする", en: "Human raters rank the answers" },
        { ja: "順位データから報酬モデルを学習する", en: "A reward model is trained from the ranking data" },
        { ja: "報酬モデルを使い強化学習でモデルを調整する", en: "Reinforcement learning adjusts the model using the reward model" },
      ],
      explanation: {
        ja: "生成→人間による順位づけ→報酬モデルの学習→強化学習による調整、という流れです。",
        en: "Generate → human ranking → train the reward model → reinforcement-learning adjustment.",
      },
    },
  ],
  sources: [
    { label: "IBM: What Is RLHF?", url: "https://www.ibm.com/think/topics/rlhf" },
    {
      label: "Wikipedia: Reinforcement learning from human feedback",
      url: "https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback",
    },
  ],
  lastVerified: "2026-07-15",
};
