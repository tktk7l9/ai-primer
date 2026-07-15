import type { Lesson } from "@/engine/content/types";

export const codingAiOverview: Lesson = {
  id: "coding-ai-01",
  slug: "overview",
  title: {
    ja: "コーディングAIの全体像 — 補完・チャット・エージェント型",
    en: "The Landscape: Completion, Chat, and Agentic Coding AI",
  },
  summary: {
    ja: "「コードを書くAI」にも段階があり、できることの幅が大きく異なる。",
    en: "\"AI that writes code\" spans a spectrum — and each level can do very different things.",
  },
  body: {
    ja: `## 3つの段階で整理する

コーディング支援AIは、できることの範囲でおおまかに3段階に分けられます。

### 1. コード補完型
エディタでコードを書いている最中に、続きを予測して提案するタイプ。人間がハンドルを握ったまま、部分的に自動化するイメージです。

### 2. チャット型
コードに関する質問・相談をチャット形式で行うタイプ。エラーの原因を尋ねたり、実装方針を相談したりできます。

### 3. エージェント型
目標（「このバグを直して」「この機能を実装して」）を与えると、リポジトリを読み込み、実装計画を立て、複数ファイルを編集し、テストを実行し、変更をまとめるところまで**自律的に**行うタイプ。人間は結果をレビュー・承認する立場になります。

同じ製品が複数の段階の機能を併せ持つこともあります（例: エディタ補完とエージェント機能を両方提供するツール）。次のレッスンから、代表的なツールを具体的に見ていきます。`,
    en: `## Three levels

Coding-assistance AI roughly falls into three levels of capability.

### 1. Code completion
Predicts and suggests the next bit of code while you're typing in an editor. You stay in control; it automates a slice of the work.

### 2. Chat
A conversational interface for coding questions — debugging an error, discussing an implementation approach.

### 3. Agentic
Given a goal ("fix this bug," "implement this feature"), it reads the repository, plans an implementation, edits multiple files, runs tests, and wraps up the change — **autonomously**. Your role shifts to reviewing and approving the result.

A single product can offer features at more than one level (many editors now combine completion with agentic capabilities). The next lessons look at specific, representative tools.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "エージェント型コーディングAIの特徴として正しいのは？",
        en: "What characterizes agentic coding AI?",
      },
      choices: [
        {
          ja: "目標を与えると計画立案から実装・テストまで自律的に行う",
          en: "Given a goal, it autonomously plans, implements, and tests",
        },
        { ja: "1文字ずつの入力補完のみを行う", en: "It only offers character-by-character autocomplete" },
        { ja: "人間の確認なしにコードを本番環境へ自動デプロイする", en: "It automatically deploys code to production without human review" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "エージェント型は目標達成までの一連の作業を自律的に行いますが、最終的な承認は人間が行うのが一般的です。",
        en: "Agentic tools autonomously handle the work toward a goal, but a human typically still reviews and approves the result.",
      },
    },
  ],
  sources: [
    { label: "GitHub Docs: What is GitHub Copilot?", url: "https://docs.github.com/en/copilot/get-started/what-is-github-copilot" },
  ],
  lastVerified: "2026-07-15",
};
