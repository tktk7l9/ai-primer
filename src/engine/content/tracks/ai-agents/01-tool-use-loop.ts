import type { Lesson } from "@/engine/content/types";

export const toolUseLoop: Lesson = {
  id: "ai-agents-01",
  slug: "tool-use-loop",
  title: {
    ja: "エージェントの仕組み — ツール呼び出しのループ",
    en: "How Agents Work: The Tool-Use Loop",
  },
  summary: {
    ja: "「文章を返す」だけのLLMが、ツールを呼び、結果を見て、次の手を決める——その1往復の中身。",
    en: "How an LLM that only emits text ends up calling tools, reading results, and deciding its next move.",
  },
  body: {
    ja: `## 「文章を返す」から「行動する」へ

LLM単体ができるのは、入力に続く文章を生成することだけです（LLMの仕組みトラック参照）。検索する・ファイルを開く・計算する・メールを送るといった**行動**は、モデルの外側にある**ツール**が担います。モデルとツールをつなぐ仕組みが**ツール使用**（tool use、function callingとも呼ばれる）です。

### 1往復の中身
1. 開発者が、ツールの**名前・説明・受け取る引数の型**をモデルに渡しておく（例: \`get_weather\` は「都市名」を受け取る）。
2. 利用者の依頼を見て、モデルは「このツールをこの引数で呼んでほしい」という**構造化された要求**を返す。ツール自体は実行できないので、要求を出すだけです。
3. アプリ側がツールを実際に実行し、結果をモデルに**返す**。
4. モデルは結果を踏まえて回答するか、さらに別のツールを呼びます。

ポイントは、モデルがツールを呼ぶか直接答えるかを**自分で判断する**ことと、実行そのものはアプリ側（または提供元のサーバー）で行われることです。

### ループが「エージェント」を作る
この往復を、目標が達成されるまで**繰り返す**のがエージェントです。Anthropicは2024年末の解説で、あらかじめ決めた手順でLLMとツールを動かす**ワークフロー**と、LLM自身が手順とツール使用を決めながら進む**エージェント**を区別しました。エージェントは各ステップで、ツールの結果やコードの実行結果といった**環境からのフィードバック**を受け取り、進み具合を判断しながら次の手を決めます。終了条件として「最大何回まで繰り返すか」を設けるのが一般的です。

### 自律性の代償
自分で手順を決められるということは、**コストと時間がかさみ、誤りが連鎖しやすい**ということでもあります。同じ解説は「まず単純な構成から始め、必要なときだけ複雑にする」こと、サンドボックスで十分に試験すること、重要な操作の前に人間の確認を挟むことを勧めています。AIコーディングツールが「このコマンドを実行してよいか」と確認してくるのは、この承認ポイントの一例です。`,
    en: `## From emitting text to taking action

On its own, an LLM does one thing: generate the text that follows its input (see the How LLMs Work track). **Actions** — searching, opening a file, doing arithmetic, sending an email — live outside the model, in **tools**. The mechanism that connects the two is **tool use**, also called function calling.

### Anatomy of one round trip
1. The developer gives the model each tool's **name, description, and the shape of its arguments** (for example, \`get_weather\` takes a city name).
2. Reading the user's request, the model returns a **structured request**: "call this tool with these arguments." It can't run anything itself — it only asks.
3. The application executes the tool and **sends the result back** to the model.
4. The model answers using the result, or asks for another tool call.

Two things matter here: the model **decides for itself** whether to call a tool or answer directly, and execution happens on the application side (or on the provider's servers), not inside the model.

### The loop is what makes it an agent
An agent is this round trip **repeated** until the goal is reached. In a late-2024 guide, Anthropic distinguished **workflows** — where LLMs and tools run along predefined code paths — from **agents**, where the LLM dynamically directs its own process and tool usage. At each step, the agent receives **feedback from the environment**, such as tool results or code execution output, to judge its progress and pick the next move. A stopping condition, like a maximum number of iterations, is the usual safeguard.

### The price of autonomy
Deciding its own steps also means **higher cost, more time, and errors that compound**. The same guide recommends starting simple and adding complexity only when needed, testing thoroughly in a sandbox, and inserting human checkpoints before consequential actions. When an AI coding tool pauses to ask "may I run this command?", that's one of those checkpoints.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "ツール使用で、モデル自身が行うことはどれ？",
        en: "In tool use, which part does the model itself do?",
      },
      choices: [
        {
          ja: "「このツールをこの引数で呼んでほしい」という構造化された要求を返す",
          en: "Return a structured request: \"call this tool with these arguments\"",
        },
        { ja: "ツールのプログラムを自分で実行する", en: "Run the tool's program itself" },
        { ja: "ツールの実行結果を人間に代わって承認する", en: "Approve the tool's result on the human's behalf" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "モデルは呼び出しの要求を返すだけで、実行はアプリ側（または提供元のサーバー）が行います。",
        en: "The model only emits the call request; execution happens on the application side or the provider's servers.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "エージェントは、ツールの結果など環境からのフィードバックを受け取りながら、目標達成までツール呼び出しを繰り返す。",
        en: "An agent repeats tool calls toward a goal while taking in feedback from the environment, such as tool results.",
      },
      answer: true,
      explanation: {
        ja: "この「フィードバックを見て次の手を決めるループ」が、決まった手順で動くワークフローとの違いです。",
        en: "That feedback-driven loop is what separates an agent from a workflow that follows predefined steps.",
      },
    },
  ],
  sources: [
    {
      label: "Anthropic Docs: Tool use with Claude",
      url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview",
    },
    { label: "Anthropic: Building effective agents", url: "https://www.anthropic.com/engineering/building-effective-agents" },
  ],
  lastVerified: "2026-10-06",
  glossaryRefs: ["agent", "tool-use"],
};
