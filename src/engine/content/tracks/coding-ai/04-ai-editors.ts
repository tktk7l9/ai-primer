import type { Lesson } from "@/engine/content/types";

export const aiEditors: Lesson = {
  id: "coding-ai-04",
  slug: "ai-editors",
  title: {
    ja: "AIエディタ — Cursorなど",
    en: "AI-Native Editors: Cursor and Others",
  },
  summary: {
    ja: "エディタそのものがAIエージェントを中心に設計されたツール群。",
    en: "Editors designed from the ground up around AI agents.",
  },
  body: {
    ja: `## エディタ自体がAI前提で設計されている

**Cursor** は、AIエージェントでソフトウェアを構築することを前提に設計されたコードエディタです。

### 特徴
- 作業を始める前にコードベース全体を自動的に把握し、複数の**サブエージェント**を並行して動かしてコードベースを探索する。
- タスクに応じて、OpenAI・Anthropic・Google・SpaceXAIなど複数の提供元のモデルから選べる。
- 複雑なタスクでは、確認の質問→計画立案→バックグラウンドでの実行、という流れを取る。
- クラウド上で動くエージェントを、ブラウザやスマートフォンから起動できる。
- ブラウザ上のUI要素を選んで書き換え・サイズ変更・移動を指示すると、裏でエージェントがコードを編集する「見たまま編集」の機能も持つ。

**コード補完型（レッスン2）やエージェント型CLI（レッスン3）との違い**は、エディタというアプリケーション全体が「AIエージェントと一緒に作業する」という前提で設計し直されている点です。既存のエディタにAI機能を追加するのではなく、AI活用を軸にゼロから作られています。`,
    en: `## The editor itself is built around AI

**Cursor** is a code editor designed from the ground up for building software with AI agents.

### Features
- Automatically maps out the whole codebase before starting work, running multiple **subagents** in parallel to explore it.
- Lets you choose between models from multiple providers — OpenAI, Anthropic, Google, SpaceXAI — depending on the task.
- For complex tasks, it asks clarifying questions, builds a plan, then executes in the background.
- Cloud agents can be launched from a browser or phone.
- Visual editing: select a UI element in the browser and ask for it to be rewritten, resized, or moved while agents edit the code underneath.

**What sets it apart from completion tools (Lesson 2) or agentic CLIs (Lesson 3)**: the whole editor application is redesigned around working alongside an AI agent, rather than bolting AI features onto an existing editor.`,
  },
  quiz: [
    {
      kind: "boolean",
      prompt: {
        ja: "CursorはOpenAI・Anthropic・Google等、複数の提供元のモデルをタスクに応じて選べる。",
        en: "Cursor lets you choose between models from multiple providers — OpenAI, Anthropic, Google — depending on the task.",
      },
      answer: true,
      explanation: {
        ja: "単一の自社モデルに固定されておらず、複数のモデルから選べる設計です。",
        en: "It's not locked to a single in-house model — you can choose across providers.",
      },
    },
  ],
  sources: [
    { label: "Cursor: Pricing", url: "https://cursor.com/pricing" },
    { label: "Cursor: Product", url: "https://cursor.com/product" },
  ],
  lastVerified: "2026-10-06",
};
