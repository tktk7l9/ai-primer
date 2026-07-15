import type { Lesson } from "@/engine/content/types";

export const choosing: Lesson = {
  id: "chat-ais-05",
  slug: "choosing",
  title: {
    ja: "用途別の選び方",
    en: "Choosing by Use Case",
  },
  summary: {
    ja: "「どれが一番良いか」ではなく「今の作業に何が向くか」で選ぶための視点。",
    en: "Not \"which is best,\" but \"what fits this task\" — a practical framework for choosing.",
  },
  body: {
    ja: `## 「最強」より「適材適所」

各社のAIは頻繁にアップデートされ、性能の優劣は数か月単位で入れ替わります。そのため「どれが一番良いか」を追いかけるより、**今の作業に何が向くか**という軸で選ぶ方が実用的です。

### 判断軸の例
- **最新情報へのリアルタイム性が要る** → Grokのように外部の最新情報を参照できるAIや、RAG（AI基礎トラック参照）を使う構成が向く。
- **既存の文書・メール環境に統合したい** → 普段使っているオフィス系サービスと連携するAI（例: Google Workspaceを使っているならGemini）。
- **コーディング支援が中心** → コーディングAIトラックで扱うツール群（Copilot・Claude Code等）を検討。
- **長文書の一括処理・要約** → 大きなコンテキストウィンドウを持つモデルが有利。
- **出典を明示した調べ物** → Perplexityのように参照元を提示する回答エンジンが向く。

### 実践的なコツ
- 無料枠で複数のAIを試し、自分の作業のクセに合うものを見つける。
- 重要な事実確認は、どのAIを使っていても出典を自分で確認する（ハルシネーションのレッスン参照）。
- 具体的なモデル名・料金・機能差は変化が速いため、本サイトの [モデルカタログ](/models) で随時確認する。`,
    en: `## Fit for purpose, not "the best"

Each provider updates frequently, and which one leads on performance shifts every few months. So instead of chasing "which is best," it's more practical to ask **what fits the task in front of you**.

### Questions to guide the choice
- **Need real-time awareness of current events?** → An AI with live access to current information (like Grok) or a RAG-based setup (see the AI Fundamentals track) fits better.
- **Want it integrated into your existing docs/email environment?** → Pick the AI tied to the office suite you already use (e.g., Gemini if you're on Google Workspace).
- **Coding assistance is the main use case?** → Look at the tools covered in the Coding AI track (Copilot, Claude Code, and others).
- **Bulk-processing or summarizing long documents?** → A model with a large context window has the edge.
- **Research where sources matter?** → An answer engine like Perplexity, which cites what it drew on, fits well.

### Practical tips
- Try several AIs on free tiers to find what matches how you work.
- Whichever AI you use, verify important facts against real sources yourself (see the Hallucination lesson).
- Specific model names, pricing, and feature differences change fast — check this site's [model catalog](/models) for current details.`,
  },
  quiz: [
    {
      kind: "boolean",
      prompt: {
        ja: "AI選びは「どれが総合的に最強か」より「今の作業に何が向くか」で考える方が実用的である。",
        en: "It's more practical to choose an AI based on \"what fits the current task\" than \"which is best overall.\"",
      },
      answer: true,
      explanation: {
        ja: "性能の優劣は頻繁に入れ替わるため、用途起点で選ぶ方が実用的です。",
        en: "Since relative performance shifts frequently, choosing by use case is the more durable approach.",
      },
    },
  ],
  sources: [
    { label: "Anthropic: Models overview", url: "https://platform.claude.com/docs/en/about-claude/models/overview" },
  ],
  lastVerified: "2026-07-15",
  glossaryRefs: ["rag", "context-window"],
};
