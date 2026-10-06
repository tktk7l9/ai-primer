import type { Lesson } from "@/engine/content/types";

export const mcp: Lesson = {
  id: "ai-agents-02",
  slug: "mcp",
  title: {
    ja: "MCP — AIとツールをつなぐ共通規格",
    en: "MCP: A Common Standard for Connecting AI to Tools",
  },
  summary: {
    ja: "「AIのUSB-C」と呼ばれるModel Context Protocolが、何を統一し、誰が管理しているのか。",
    en: "What the Model Context Protocol — \"USB-C for AI\" — standardizes, and who steers it.",
  },
  body: {
    ja: `## 接続のたびに専用の配線を作らない

前のレッスンのツール使用には、実務上の問題がありました。カレンダー・社内データベース・チャットツール……AIアプリとつなぎたい相手が増えるたびに、**アプリごと・相手ごとに専用の接続を作る**必要があったのです。

**MCP（Model Context Protocol）** は、この接続方法を統一するオープンな規格です。2024年11月にAnthropicが公開し、公式サイトは「AIアプリケーションにとってのUSB-Cポート」にたとえています。USB-Cが機器の接続方法を統一したように、MCPはAIアプリと外部システムの接続方法を統一します。

### 登場人物
- **MCPサーバー**: 外部システム側に置かれ、AIに提供できる**ツール**（実行できる操作）、**リソース**（読める情報）、**プロンプト**（定型のやり方）を公開する。
- **MCPクライアント／ホスト**: ChatGPT・Claude・VS Code・CursorなどのAIアプリ側。サーバーに接続し、モデルがツール使用の要求を出したら、それをサーバーに中継する。

サーバーを一度作れば、対応するどのAIアプリからでも使えます。「一度作って、どこでもつなぐ」のが利点です。

### 誰が管理しているか
2025年12月、AnthropicはMCPを **Agentic AI Foundation（AAIF）** に寄贈しました。AAIFはLinux Foundation傘下の組織で、Anthropic・Block・OpenAIが共同で設立し、Google・Microsoft・AWSなども支援しています。特定の1社ではなく中立的な団体が管理することで、各社が安心して採用できる規格になりました。

### 利用者として知っておくこと
MCPサーバーを「接続する」ことは、**そのサーバーが公開する範囲の情報を読み、操作を実行する権限をAIに与える**ことです。どこの誰が作ったサーバーか、何を読めて何を実行できるかを確認してから接続してください。接続先が増えるほど、次々のレッスンで扱うコンテキストの設計と安全対策が重要になります。`,
    en: `## Stop wiring every connection by hand

Tool use (previous lesson) had a practical problem. Calendars, internal databases, chat tools — every new system an AI app needed to reach meant **building a custom connection for that app and that system**.

**MCP (Model Context Protocol)** is an open standard that unifies those connections. Anthropic released it in November 2024, and the official site likens it to "a USB-C port for AI applications": just as USB-C standardized how devices plug in, MCP standardizes how AI applications connect to external systems.

### The cast
- **MCP servers** sit on the external system's side and expose what the AI may use: **tools** (actions it can run), **resources** (information it can read), and **prompts** (reusable workflows).
- **MCP clients/hosts** are the AI applications — ChatGPT, Claude, VS Code, Cursor, and others. They connect to servers and, when the model asks for a tool call, relay it to the server.

Build a server once and any supporting AI app can use it — "build once, integrate everywhere."

### Who steers it
In December 2025, Anthropic donated MCP to the **Agentic AI Foundation (AAIF)**, a body under the Linux Foundation co-founded by Anthropic, Block, and OpenAI, with backing from Google, Microsoft, AWS, and others. Neutral stewardship, rather than ownership by one vendor, is what makes the standard safe for competitors to adopt.

### What this means for you as a user
Connecting an MCP server **grants the AI permission to read whatever that server exposes and to perform its actions**. Before connecting, check who built the server, what it can read, and what it can execute. The more connections you add, the more the next two lessons — context design and safety — matter.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "MCPが統一するのは何？",
        en: "What does MCP standardize?",
      },
      choices: [
        { ja: "AIアプリと外部システム（ツール・データ）の接続方法", en: "How AI applications connect to external systems (tools and data)" },
        { ja: "LLMの学習データの形式", en: "The format of an LLM's training data" },
        { ja: "チャットAIの料金プラン", en: "Chat AI pricing plans" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "「AIアプリにとってのUSB-C」というたとえの通り、接続方法の共通規格です。",
        en: "As the \"USB-C for AI applications\" analogy suggests, it's a common standard for connections.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "MCPは現在もAnthropic一社が単独で所有・管理している。",
        en: "MCP is still owned and governed solely by Anthropic.",
      },
      answer: false,
      explanation: {
        ja: "2025年12月にLinux Foundation傘下のAgentic AI Foundationへ寄贈され、中立的な団体の管理下にあります。",
        en: "It was donated to the Agentic AI Foundation under the Linux Foundation in December 2025 and is governed neutrally.",
      },
    },
  ],
  sources: [
    { label: "Model Context Protocol: What is MCP?", url: "https://modelcontextprotocol.io/docs/getting-started/intro" },
    { label: "Anthropic: Introducing the Model Context Protocol", url: "https://www.anthropic.com/news/model-context-protocol" },
    {
      label: "MCP Blog: MCP joins the Agentic AI Foundation",
      url: "https://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/",
    },
  ],
  lastVerified: "2026-10-06",
  glossaryRefs: ["mcp", "tool-use", "agent"],
};
