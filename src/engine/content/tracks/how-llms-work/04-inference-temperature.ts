import type { Lesson } from "@/engine/content/types";

export const inferenceTemperature: Lesson = {
  id: "how-llms-work-04",
  slug: "inference-temperature",
  title: {
    ja: "推論とtemperature — 出力のばらつきを調整する",
    en: "Inference and Temperature: Tuning How Predictable the Output Is",
  },
  summary: {
    ja: "同じ質問でも答えが毎回変わる理由と、その度合いを決めるパラメータ。",
    en: "Why the same question can get a different answer each time — and the parameter that controls it.",
  },
  body: {
    ja: `## 次のトークンは「確率のくじ引き」で選ばれる

モデルが実際に回答を生成する段階を**推論（Inference）**と呼びます。モデルは次に来る可能性のあるトークンそれぞれに確率を割り当て、そこから1つを選んで出力します。この「選び方」を調整するのが **temperature（温度）** などのパラメータです。

- **temperature を低く**（0に近く）すると、確率の高いトークンが選ばれやすくなり、出力は一貫性があり予測しやすくなります（事実確認や要約向き）。
- **temperature を高く**すると、確率の低いトークンも選ばれやすくなり、出力の多様性・意外性が増します（ブレインストーミング向き）が、一貫性は下がります。

もう一つよく使われるのが **top-p（nucleus sampling）** です。例えば top-p = 0.9 なら、累積確率が90%に達するまでの上位トークン群だけから選び、それ以外を除外します。一般に temperature と top-p は同時に大きく動かさず、どちらか一方を調整するのが基本とされています。`,
    en: `## The next token is chosen from a probability lottery

The stage where a model actually generates a response is called **inference**. The model assigns a probability to each candidate next token, then samples one. Parameters like **temperature** control how that sampling behaves.

- **Lower temperature** (closer to 0) favors high-probability tokens, producing more consistent, predictable output — good for fact-checking or summarizing.
- **Higher temperature** gives lower-probability tokens a better chance, increasing variety and surprise — good for brainstorming — at the cost of consistency.

Another common control is **top-p (nucleus sampling)**. A top-p of 0.9, for example, restricts sampling to the smallest set of top tokens whose cumulative probability reaches 90%, excluding the rest. The general guidance is to adjust temperature or top-p, but not both at once.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "temperatureを高くすると、出力はどうなる傾向がある？",
        en: "What happens to output when you raise the temperature?",
      },
      choices: [
        { ja: "多様で意外性のある出力になりやすいが、一貫性は下がる", en: "More varied and surprising, but less consistent" },
        { ja: "常に同じ出力が保証されるようになる", en: "The same output is guaranteed every time" },
        { ja: "モデルのパラメータ数が増える", en: "The model's parameter count increases" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "temperatureを上げると確率分布が平坦化し、低確率のトークンも選ばれやすくなるため多様性が増します。",
        en: "Raising temperature flattens the probability distribution, giving lower-probability tokens a better chance and increasing variety.",
      },
    },
  ],
  sources: [
    { label: "IBM: What is LLM Temperature?", url: "https://www.ibm.com/think/topics/llm-temperature" },
    { label: "Prompt Engineering Guide: LLM Settings", url: "https://www.promptingguide.ai/introduction/settings" },
  ],
  lastVerified: "2026-07-15",
};
