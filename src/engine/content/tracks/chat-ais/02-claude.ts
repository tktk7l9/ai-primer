import type { Lesson } from "@/engine/content/types";

export const claudeLesson: Lesson = {
  id: "chat-ais-02",
  slug: "claude",
  title: {
    ja: "Claude（Anthropic）",
    en: "Claude (Anthropic)",
  },
  summary: {
    ja: "「安全なAI」を掲げるAnthropicが開発するチャットAI。",
    en: "The chat AI built by Anthropic, a lab centered on AI safety.",
  },
  body: {
    ja: `## 開発元: Anthropic

**Claude** は **Anthropic** が開発するチャットAIです。AnthropicはAIの安全性研究（AI safety）を重視する姿勢を掲げるAI研究企業として知られています。

### モデルの階層構造
Anthropicは長らく、用途に応じて複数の「サイズ」のモデルを並行して提供する構成を取ってきました（名称やラインアップは時期によって変わります）:
- **最上位モデル**: 最も高度で複雑なタスク向け。
- **バランス型モデル**: 速度と性能のバランスを取った、日常利用に向くモデル。
- **軽量・高速モデル**: 応答速度とコストを優先するモデル。

### 特徴・位置づけ
- 長文の文書やコードベースを扱える大きなコンテキストウィンドウ（AI基礎トラック参照）。
- コーディング支援・エージェント的なタスク実行（ツールを使った自律的な作業）に力を入れている。
- 対話の安全性・有用性・正直さを重視する設計方針を公言している。

具体的なモデル名は更新が速いため、[モデルカタログ](/models) にまとめています。最新情報は Anthropic の公式サイトで確認してください。`,
    en: `## Made by: Anthropic

**Claude** is the chat AI built by **Anthropic**, an AI research company known for centering its work on AI safety.

### A tiered model lineup
Anthropic has long offered several model "sizes" in parallel for different needs (exact names and lineup change over time):
- **Top-tier models**: for the most demanding, complex tasks.
- **Balanced models**: tuned for a mix of speed and capability, suited to everyday use.
- **Lightweight, fast models**: prioritizing response speed and cost.

### Positioning
- Large context windows (see the AI Fundamentals track) suited to long documents and codebases.
- Strong emphasis on coding assistance and agentic task execution — autonomous work using tools.
- A stated design philosophy centered on being helpful, honest, and safe.

Specific model names change quickly — see the [model catalog](/models) for current details, and check Anthropic's official site for the latest lineup.`,
  },
  quiz: [
    {
      kind: "boolean",
      prompt: {
        ja: "Anthropicは、AIの安全性研究を重視する姿勢を掲げる企業として知られている。",
        en: "Anthropic is known as a company that centers its work on AI safety research.",
      },
      answer: true,
      explanation: {
        ja: "Anthropicは安全性研究（AI safety）を重視する企業として位置づけられています。",
        en: "Anthropic positions itself as a company centered on AI safety.",
      },
    },
  ],
  sources: [
    { label: "Anthropic: Models overview", url: "https://platform.claude.com/docs/en/about-claude/models/overview" },
  ],
  lastVerified: "2026-07-15",
};
