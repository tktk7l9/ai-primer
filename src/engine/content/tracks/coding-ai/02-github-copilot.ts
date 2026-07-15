import type { Lesson } from "@/engine/content/types";

export const githubCopilot: Lesson = {
  id: "coding-ai-02",
  slug: "github-copilot",
  title: {
    ja: "GitHub Copilot",
    en: "GitHub Copilot",
  },
  summary: {
    ja: "エディタ補完から自律的なエージェント機能まで幅広くカバーするツール。",
    en: "A tool spanning from editor autocomplete to autonomous agent features.",
  },
  body: {
    ja: `## 開発元: GitHub（Microsoft）

**GitHub Copilot** は GitHub（Microsoft傘下）が提供するAIコーディング支援ツールです。

### 主な機能
- **コード補完**: 対応エディタでの入力予測。カーソル付近だけでなく、次に編集しそうな箇所を予測する機能もある。
- **チャット**: GitHubのWebサイト・モバイルアプリ・対応エディタ・ターミナルから、コードに関する質問ができる。
- **コマンドライン（CLI）**: ターミナルからCopilotを呼び出し、機能追加やバグ修正を行わせ、プルリクエストを作成させることも可能。
- **プルリクエスト支援**: 変更内容の要約や、レビュアーが注目すべき点をAIが生成。
- **エージェント機能**: リポジトリを調査し実装計画を立て、ブランチ上でコードを変更する自律型の機能も提供。
- **コンテキストの整理**: コード・ドキュメント・仕様などを「Spaces」としてまとめ、特定タスク向けに参照させる仕組みもある。

エディタへの深い統合と、GitHub上のワークフロー（Issue・PR）との親和性が大きな特徴です。`,
    en: `## Made by: GitHub (Microsoft)

**GitHub Copilot** is an AI coding assistant from GitHub, part of Microsoft.

### Key features
- **Code completion**: autocomplete-style suggestions in supported editors, including predicting the location of your next likely edit.
- **Chat**: ask coding questions from the GitHub website, mobile app, supported IDEs, or the terminal.
- **Command line (CLI)**: invoke Copilot from your terminal to add features or fix bugs, and have it open a pull request.
- **Pull request support**: AI-generated summaries of changes and what a reviewer should focus on.
- **Agent capabilities**: an autonomous mode that researches a repository, plans an implementation, and makes changes on a branch.
- **Context organization**: group code, docs, and specs into "Spaces" to ground responses in the right context for a task.

Its deep integration into editors and GitHub's own workflow (issues, pull requests) is a defining strength.`,
  },
  quiz: [
    {
      kind: "boolean",
      prompt: {
        ja: "GitHub Copilotには、リポジトリを調査し実装計画を立てて自律的にコードを変更するエージェント機能がある。",
        en: "GitHub Copilot includes an agentic feature that researches a repository and autonomously implements changes.",
      },
      answer: true,
      explanation: {
        ja: "自律型のエージェント機能が、コード補完やチャットに加えて提供されています。",
        en: "An autonomous agent capability is offered alongside code completion and chat.",
      },
    },
  ],
  sources: [
    { label: "GitHub Docs: GitHub Copilot features", url: "https://docs.github.com/en/copilot/get-started/features" },
  ],
  lastVerified: "2026-07-15",
};
