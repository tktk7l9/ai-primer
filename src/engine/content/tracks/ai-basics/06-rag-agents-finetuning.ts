import type { Lesson } from "@/engine/content/types";

export const ragAgentsFinetuning: Lesson = {
  id: "ai-basics-06",
  slug: "rag-agents-finetuning",
  title: {
    ja: "RAG・エージェント・ファインチューニング",
    en: "RAG, Agents, and Fine-Tuning",
  },
  summary: {
    ja: "LLMを「賢く」する3つの代表的な拡張手法の違いを整理する。",
    en: "Three common ways to extend an LLM beyond its base training — and how they differ.",
  },
  body: {
    ja: `## LLM単体の限界を補う3つの手法

事前学習だけのLLMには「学習データより新しい情報を知らない」「モデル自身は外部で行動できない」といった限界があります。これを補う代表的な手法が次の3つです。

### RAG（検索拡張生成）
質問に答える前に、外部のデータベースや文書から関連情報を**検索**し、その内容を踏まえて**生成**する2段階の仕組みです。モデル自体の重みは変えず、参照する情報を後から差し替えられるため、社内文書や最新情報への対応に向いています。

### AIエージェント
検索・API呼び出し・コード実行などの**ツール**を使い、与えられた目標を達成するためにタスクを分解し自律的に実行し続けるシステムです。都度指示が必要な「アシスタント」と異なり、エージェントは初期の指示のあと自分で計画を立てて動きます。

### ファインチューニング
事前学習済みモデルを、特定用途のデータで**追加学習**させ、モデル自身の重みを調整する手法です。話し方や出力形式を特定の型に合わせたい場合に向きますが、RAGと違い「知識」そのものの更新には向きません（学習データを作り直す必要があるため）。

| 手法 | 変えるもの | 得意なこと |
|---|---|---|
| RAG | 参照する外部情報 | 最新情報・社内文書への対応 |
| エージェント | 実行するツールと手順 | 複数ステップの自律タスク遂行 |
| ファインチューニング | モデルの重み | 話し方・出力形式の調整 |`,
    en: `## Three ways to extend a base LLM

A plain pre-trained LLM has limits: it doesn't know anything newer than its training data, and it can't act in the outside world on its own. Three common techniques address this:

### RAG (Retrieval-Augmented Generation)
Before answering, the system **retrieves** relevant content from an external database or documents, then **generates** a response grounded in that content. The model's weights don't change — you can swap out what it references, which makes RAG well-suited to internal documents or fast-changing information.

### AI agents
A system that uses tools — search, API calls, running code — to break a goal into subtasks and carry them out autonomously. Unlike an assistant that needs ongoing direction, an agent plans its own steps after an initial prompt.

### Fine-tuning
Further training a pre-trained model on specialized data, adjusting the model's own weights. It's well suited to shaping tone or output format, but — unlike RAG — it isn't a good fit for keeping knowledge current, since that requires rebuilding the training data.

| Technique | What it changes | Best for |
|---|---|---|
| RAG | The external content referenced | Current information, internal docs |
| Agents | The tools and steps executed | Autonomous multi-step tasks |
| Fine-tuning | The model's own weights | Tone and output-format shaping |`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "モデルの重みを変えずに最新の外部情報を回答に反映させる手法は？",
        en: "Which technique reflects up-to-date external information without changing the model's weights?",
      },
      choices: [
        { ja: "RAG（検索拡張生成）", en: "RAG (retrieval-augmented generation)" },
        { ja: "ファインチューニング", en: "Fine-tuning" },
        { ja: "事前学習のやり直し", en: "Redoing pre-training from scratch" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "RAGは参照する情報を検索で差し替える方式なので、モデル自体を再学習せずに最新情報へ対応できます。",
        en: "RAG swaps in retrieved content at answer time, so it can reflect new information without retraining the model.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "AIエージェントは、都度の指示なしに自分でタスクを分解して実行し続けられる。",
        en: "An AI agent can keep working on a task by planning its own steps, without needing direction at every turn.",
      },
      answer: true,
      explanation: {
        ja: "これが、都度の指示が必要な「アシスタント」とエージェントの違いです。",
        en: "This is the key distinction from an \"assistant,\" which needs ongoing user direction.",
      },
    },
  ],
  sources: [
    {
      label: "Google Cloud: What is Retrieval-Augmented Generation (RAG)?",
      url: "https://cloud.google.com/use-cases/retrieval-augmented-generation",
    },
    { label: "IBM: What Are AI Agents?", url: "https://www.ibm.com/think/topics/ai-agents" },
  ],
  lastVerified: "2026-07-15",
  glossaryRefs: ["rag", "agent", "fine-tuning"],
};
