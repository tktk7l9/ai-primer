import type { Lesson } from "@/engine/content/types";

export const contextEngineering: Lesson = {
  id: "ai-agents-03",
  slug: "context-engineering",
  title: {
    ja: "コンテキストエンジニアリング — 「何を読ませるか」の設計",
    en: "Context Engineering: Designing What the Model Sees",
  },
  summary: {
    ja: "プロンプトの書き方の次は、ウィンドウに何を入れ何を外すか。長く動くAIほど効いてくる考え方。",
    en: "Beyond how you phrase a prompt: deciding what goes into the window and what stays out. It matters most for long-running AI.",
  },
  body: {
    ja: `## プロンプト術の「次」

プロンプト術トラックでは、1つの指示文をどう書くかを扱いました。しかしエージェントが何十回もツールを呼びながら動くと、モデルが見ているものは指示文だけではなくなります。システムの指示・ツールの定義・MCPで取り込んだデータ・これまでの会話履歴・ツールの結果……これら**コンテキストウィンドウの中身全体**をどう整えるかが、**コンテキストエンジニアリング**です。

Anthropicは2025年9月の解説で、これを「LLMの推論中に最適なトークンの集合を選び、維持するための戦略の集まり」と定義し、目標を「望む結果の可能性を最大にする、最小の高信号なトークン集合を見つけること」と表現しました。

### なぜ「入れれば入れるほど良い」ではないのか
コンテキストウィンドウが大きくなっても、ウィンドウ内のトークンが増えるほど、モデルがその中の情報を正確に思い出す能力は下がる傾向があります（**context rot**）。人間の作業記憶と同じように、モデルにも限られた「注意の予算」があり、トークンを足すたびに少しずつ消費されるというイメージです。

### 代表的な技法
- **必要になったときに取りに行く**: 最初から全部を読み込ませず、ファイルパスや検索クエリ、リンクといった軽い「目印」だけを持たせ、必要になった時点でツールで読み込む。
- **圧縮（compaction）**: 会話がウィンドウの上限に近づいたら、要点を要約して新しいウィンドウを要約から始める。
- **構造化されたメモ**: 進捗や決定事項をウィンドウの外（ファイルなど）に書き出し、あとで読み返す。
- **サブエージェント**: 大きな調査を別のエージェントに任せ、要約だけを受け取る。親は全体の計画に集中できる。

### 普段のチャット利用に応用すると
- 話題が変わったら新しい会話を始める（古い話題がノイズになる）。
- 関係ある資料だけを渡す。「念のため全部」は精度を下げることがある。
- 長い会話は途中で「ここまでの要点をまとめて」と頼み、要約から仕切り直す。
- 何度も使う前提知識は、プロジェクトの設定ファイルやカスタム指示として一度だけ書いておく。`,
    en: `## What comes after prompting

The Prompting track covered how to write a single instruction. But once an agent runs for dozens of tool calls, the model is looking at far more than your instruction: system instructions, tool definitions, data pulled in through MCP, the conversation so far, tool results. Curating **the entire contents of the context window** is **context engineering**.

In a September 2025 guide, Anthropic defined it as "the set of strategies for curating and maintaining the optimal set of tokens (information) during LLM inference," with the goal of "finding the smallest set of high-signal tokens that maximize the likelihood of some desired outcome."

### Why more isn't better
Even with large context windows, as the number of tokens in the window grows, the model's ability to accurately recall information from it tends to decline — **context rot**. Like a person's working memory, the model has a limited "attention budget," and every token added draws it down a little.

### The main techniques
- **Just-in-time retrieval**: instead of loading everything up front, keep lightweight identifiers — file paths, stored queries, links — and load the data with a tool only when it's needed.
- **Compaction**: when a conversation nears the window limit, summarize it and restart a fresh window from the summary.
- **Structured note-taking**: write progress and decisions to memory outside the window (a file, say) and read them back later.
- **Sub-agents**: hand a large investigation to a separate agent and take back only its summary, so the lead agent can stay focused on the high-level plan.

### Applied to everyday chat
- Start a new conversation when the topic changes; the old topic becomes noise.
- Share only the material that's relevant. "Everything, just in case" can lower accuracy.
- In a long thread, ask for a summary so far and continue from that.
- Write recurring background knowledge once, in a project's instruction file or custom instructions, rather than repeating it.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "「context rot」が指すのは？",
        en: "What does \"context rot\" refer to?",
      },
      choices: [
        {
          ja: "ウィンドウ内のトークンが増えるほど、その中の情報を正確に思い出す能力が下がる傾向",
          en: "The tendency for recall accuracy to drop as the number of tokens in the window grows",
        },
        { ja: "古いモデルほど知識が古くなること", en: "Older models having older knowledge" },
        { ja: "会話を保存すると文字化けすること", en: "Saved conversations becoming garbled" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "だからこそ「最小の高信号なトークン集合」を目指す、というのがコンテキストエンジニアリングの考え方です。",
        en: "This is why context engineering aims for the smallest set of high-signal tokens.",
      },
    },
    {
      kind: "multi",
      prompt: {
        ja: "コンテキストエンジニアリングの技法として挙げられているものをすべて選べ。",
        en: "Select all the techniques described as context engineering.",
      },
      choices: [
        { ja: "必要になった時点でツールで読み込む（just-in-time）", en: "Load data with a tool only when needed (just-in-time)" },
        { ja: "会話を要約して新しいウィンドウを要約から始める（圧縮）", en: "Summarize and restart a fresh window from the summary (compaction)" },
        { ja: "手元の資料をすべて最初に読み込ませる", en: "Load every document you have up front" },
      ],
      correctIndexes: [0, 1],
      explanation: {
        ja: "「全部最初に読み込ませる」はcontext rotを招きやすく、技法としては逆方向です。",
        en: "Loading everything up front invites context rot — it's the opposite of the recommended approach.",
      },
    },
  ],
  sources: [
    {
      label: "Anthropic: Effective context engineering for AI agents",
      url: "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents",
    },
    { label: "IBM: What is a context window?", url: "https://www.ibm.com/think/topics/context-window" },
  ],
  lastVerified: "2026-10-06",
  glossaryRefs: ["context-engineering", "context-window", "agent"],
};
