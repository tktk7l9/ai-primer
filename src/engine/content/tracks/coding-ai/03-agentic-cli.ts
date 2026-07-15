import type { Lesson } from "@/engine/content/types";

export const agenticCli: Lesson = {
  id: "coding-ai-03",
  slug: "agentic-cli",
  title: {
    ja: "エージェント型CLIツール — Claude Code など",
    en: "Agentic CLI Tools: Claude Code and Others",
  },
  summary: {
    ja: "ターミナルの中で、コードベース全体を理解して作業するAI。",
    en: "AI that works from your terminal, understanding your entire codebase.",
  },
  body: {
    ja: `## ターミナルを起点にした自律型ツール

**Claude Code**（Anthropic）は、コードベースを読み込み・編集し、コマンドを実行し、開発ツールと連携する**エージェント型**のコーディングツールです。

### 特徴
- **コードベース理解**: 手動でファイルを選ばなくても、リポジトリの構造や依存関係を自動的に調べて把握する。
- **横断的なワークフロー統合**: GitHub・GitLabやコマンドラインツールと連携し、Issueを読む・コードを書く・テストを実行する・PRを提出するところまでを一貫して行える。
- **Unix哲学に沿った構成**: ターミナル上で他のツールと組み合わせやすい設計。
- **提供形態**: ターミナル・IDE拡張・デスクトップアプリ・ブラウザなど複数の形で利用できる。

こうしたエージェント型CLIツールは、GitHub Copilotのエージェント機能や、後述するCursorのようなAIエディタとも役割が重なる部分がありますが、**「ターミナル操作を起点に、コードベース全体を横断して作業する」**という位置づけが共通点です。`,
    en: `## Terminal-first, autonomous tools

**Claude Code** (Anthropic) is an **agentic** coding tool that reads and edits a codebase, runs commands, and integrates with development tools.

### Features
- **Codebase understanding**: automatically explores a repository's structure and dependencies rather than requiring you to hand-pick files.
- **End-to-end workflow integration**: connects with GitHub, GitLab, and command-line tools to read issues, write code, run tests, and submit pull requests in one flow.
- **Unix-philosophy composability**: designed to work well alongside other terminal tools.
- **Available surfaces**: terminal, IDE extensions, a desktop app, and the browser.

Agentic CLI tools like this overlap in role with GitHub Copilot's agent mode and AI editors like Cursor (next lesson), but they share a common premise: **working from the terminal, across the whole codebase.**`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "エージェント型CLIツールの位置づけとして最も適切なのは？",
        en: "What best describes the positioning of agentic CLI tools?",
      },
      choices: [
        { ja: "ターミナル操作を起点に、コードベース全体を横断して作業する", en: "Working from the terminal, across the entire codebase" },
        { ja: "画像編集専用のツール", en: "A tool specialized for image editing" },
        { ja: "音声認識のみを行うツール", en: "A tool that only does speech recognition" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "リポジトリ全体を理解し、ターミナルから横断的に作業を進める点が共通の特徴です。",
        en: "Understanding the whole repository and working across it from the terminal is the shared characteristic.",
      },
    },
  ],
  sources: [
    { label: "Claude Code Docs: Overview", url: "https://code.claude.com/docs/en/overview" },
  ],
  lastVerified: "2026-07-15",
};
