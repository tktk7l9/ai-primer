import type { Localized } from "@/i18n/config";
import type { Source } from "./types";

export interface GlossaryTerm {
  id: string;
  term: Localized<string>;
  definition: Localized<string>;
  relatedLessonIds: readonly string[];
  sources: readonly Source[];
  lastVerified: string;
}

export const GLOSSARY: readonly GlossaryTerm[] = [
  {
    id: "token",
    term: { ja: "トークン", en: "Token" },
    definition: {
      ja: "LLMが処理する文章の最小単位。単語全体のことも、単語の一部や1文字のこともある。",
      en: "The smallest unit of text an LLM processes — it may be a whole word, part of a word, or even a single character.",
    },
    relatedLessonIds: ["ai-basics-02", "ai-basics-03"],
    sources: [
      {
        label: "OpenAI Help: What are tokens and how to count them?",
        url: "https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them",
      },
      { label: "Anthropic Docs: Glossary", url: "https://platform.claude.com/docs/en/about-claude/glossary" },
    ],
    lastVerified: "2026-10-06",
  },
  {
    id: "context-window",
    term: { ja: "コンテキストウィンドウ", en: "Context window" },
    definition: {
      ja: "LLMが1回のやり取りで同時に処理できるトークンの最大数。",
      en: "The maximum number of tokens an LLM can process in a single interaction.",
    },
    relatedLessonIds: ["ai-basics-03", "ai-agents-03"],
    sources: [{ label: "IBM: What is a context window?", url: "https://www.ibm.com/think/topics/context-window" }],
    lastVerified: "2026-10-06",
  },
  {
    id: "hallucination",
    term: { ja: "ハルシネーション", en: "Hallucination" },
    definition: {
      ja: "AIがもっともらしいが事実に基づかない内容を生成してしまう現象。",
      en: "When an AI generates plausible-sounding but factually incorrect or fabricated content.",
    },
    relatedLessonIds: ["ai-basics-04"],
    sources: [{ label: "IBM: What Are AI Hallucinations?", url: "https://www.ibm.com/think/topics/ai-hallucinations" }],
    lastVerified: "2026-10-06",
  },
  {
    id: "multimodal",
    term: { ja: "マルチモーダル", en: "Multimodal" },
    definition: {
      ja: "テキスト・画像・音声など複数種のデータを1つのモデルで処理・関連づけられること。",
      en: "The ability of a single model to process and relate multiple data types — text, images, audio, and more.",
    },
    relatedLessonIds: ["ai-basics-05"],
    sources: [{ label: "IBM: What is Multimodal AI?", url: "https://www.ibm.com/think/topics/multimodal-ai" }],
    lastVerified: "2026-10-06",
  },
  {
    id: "rag",
    term: { ja: "RAG（検索拡張生成）", en: "RAG (Retrieval-Augmented Generation)" },
    definition: {
      ja: "外部情報を検索してから、その内容を踏まえて回答を生成する手法。",
      en: "A technique that retrieves external information before generating an answer grounded in it.",
    },
    relatedLessonIds: ["ai-basics-04", "ai-basics-06"],
    sources: [
      {
        label: "Google Cloud: What is Retrieval-Augmented Generation (RAG)?",
        url: "https://cloud.google.com/use-cases/retrieval-augmented-generation",
      },
    ],
    lastVerified: "2026-10-06",
  },
  {
    id: "agent",
    term: { ja: "AIエージェント", en: "AI agent" },
    definition: {
      ja: "ツールを使い、目標達成のためのタスクを自律的に計画・実行するシステム。",
      en: "A system that uses tools to autonomously plan and execute tasks toward a goal.",
    },
    relatedLessonIds: ["ai-basics-06", "ai-agents-01"],
    sources: [{ label: "IBM: What Are AI Agents?", url: "https://www.ibm.com/think/topics/ai-agents" }],
    lastVerified: "2026-10-06",
  },
  {
    id: "fine-tuning",
    term: { ja: "ファインチューニング", en: "Fine-tuning" },
    definition: {
      ja: "事前学習済みモデルを特定用途のデータで追加学習し、重みを調整する手法。",
      en: "Further training a pre-trained model on specialized data to adjust its own weights.",
    },
    relatedLessonIds: ["ai-basics-06", "chat-ais-06"],
    sources: [{ label: "IBM: What is fine-tuning?", url: "https://www.ibm.com/think/topics/fine-tuning" }],
    lastVerified: "2026-10-06",
  },
  {
    id: "llm",
    term: { ja: "LLM（大規模言語モデル）", en: "LLM (Large Language Model)" },
    definition: {
      ja: "大量のテキストで訓練され、次に来るトークンを予測することで文章を生成するニューラルネットワーク。",
      en: "A neural network trained on vast amounts of text that generates language by predicting the next token.",
    },
    relatedLessonIds: ["ai-basics-02", "how-llms-work-02"],
    sources: [{ label: "Wikipedia: Large language model", url: "https://en.wikipedia.org/wiki/Large_language_model" }],
    lastVerified: "2026-10-06",
  },
  {
    id: "transformer",
    term: { ja: "Transformer", en: "Transformer" },
    definition: {
      ja: "Attention機構だけで系列データを処理するアーキテクチャ。現在の主要LLMの共通基盤。",
      en: "An architecture that processes sequences using attention alone — the common foundation of nearly every major LLM today.",
    },
    relatedLessonIds: ["history-04", "how-llms-work-01"],
    sources: [{ label: "Wikipedia: Attention Is All You Need", url: "https://en.wikipedia.org/wiki/Attention_Is_All_You_Need" }],
    lastVerified: "2026-10-06",
  },
  {
    id: "attention",
    term: { ja: "Attention（注意機構）", en: "Attention" },
    definition: {
      ja: "文章内のある単語を処理する際、他のどの単語と強く関連づけるべきかをモデル自身が計算する仕組み。",
      en: "The mechanism by which a model computes how strongly each word should relate to every other word in the text.",
    },
    relatedLessonIds: ["how-llms-work-01"],
    sources: [{ label: "Wikipedia: Attention Is All You Need", url: "https://en.wikipedia.org/wiki/Attention_Is_All_You_Need" }],
    lastVerified: "2026-10-06",
  },
  {
    id: "rlhf",
    term: { ja: "RLHF（人間のフィードバックによる強化学習）", en: "RLHF (Reinforcement Learning from Human Feedback)" },
    definition: {
      ja: "人間による回答の順位づけから報酬モデルを学習し、それを使ってモデル自体を調整する手法。",
      en: "A technique that trains a reward model from human rankings of answers, then uses it to adjust the model itself.",
    },
    relatedLessonIds: ["how-llms-work-03"],
    sources: [{ label: "IBM: What Is RLHF?", url: "https://www.ibm.com/think/topics/rlhf" }],
    lastVerified: "2026-10-06",
  },
  {
    id: "temperature",
    term: { ja: "temperature（温度）", en: "Temperature" },
    definition: {
      ja: "推論時にどれだけ低確率のトークンを選びやすくするかを調整するパラメータ。低いほど一貫性重視、高いほど多様性重視。",
      en: "A sampling parameter controlling how often lower-probability tokens get chosen. Lower favors consistency; higher favors variety.",
    },
    relatedLessonIds: ["how-llms-work-04"],
    sources: [{ label: "IBM: What is LLM Temperature?", url: "https://www.ibm.com/think/topics/llm-temperature" }],
    lastVerified: "2026-10-06",
  },
  {
    id: "few-shot",
    term: { ja: "few-shotプロンプト", en: "Few-shot prompting" },
    definition: {
      ja: "指示文に加えて、入力と望ましい出力の例をいくつか示すプロンプト手法。",
      en: "A prompting technique that pairs an instruction with a few examples of input paired with the desired output.",
    },
    relatedLessonIds: ["prompting-02"],
    sources: [{ label: "Prompt Engineering Guide: Few-Shot Prompting", url: "https://www.promptingguide.ai/techniques/fewshot" }],
    lastVerified: "2026-10-06",
  },
  {
    id: "chain-of-thought",
    term: { ja: "Chain-of-Thought（思考の連鎖）", en: "Chain-of-Thought" },
    definition: {
      ja: "最終的な答えだけでなく、そこに至る中間ステップを順に説明させながら答えさせるプロンプト手法。",
      en: "A prompting technique that has the model lay out intermediate reasoning steps, not just the final answer.",
    },
    relatedLessonIds: ["prompting-03"],
    sources: [{ label: "PromptHub: Chain of Thought Prompting Guide", url: "https://www.prompthub.us/blog/chain-of-thought-prompting-guide" }],
    lastVerified: "2026-10-06",
  },
  {
    id: "diffusion-model",
    term: { ja: "拡散モデル（Diffusion Model）", en: "Diffusion Model" },
    definition: {
      ja: "ランダムノイズから、段階的にノイズを取り除きながら画像などを生成する仕組み。",
      en: "A generative mechanism that starts from random noise and progressively removes it to produce an image or other output.",
    },
    relatedLessonIds: ["generative-media-01"],
    sources: [
      { label: "Britannica: Diffusion model", url: "https://www.britannica.com/technology/diffusion-model" },
      { label: "Wikipedia: Diffusion model", url: "https://en.wikipedia.org/wiki/Diffusion_model" },
    ],
    lastVerified: "2026-10-06",
  },
  {
    id: "ai-winter",
    term: { ja: "AIの冬", en: "AI Winter" },
    definition: {
      ja: "AI研究への資金と関心が大きく落ち込んだ時期。1970年代と1980年代後半に代表的な2回があった。",
      en: "A period of sharply reduced funding and interest in AI research — notably in the 1970s and again in the late 1980s.",
    },
    relatedLessonIds: ["history-02"],
    sources: [{ label: "Wikipedia: AI winter", url: "https://en.wikipedia.org/wiki/AI_winter" }],
    lastVerified: "2026-10-06",
  },
  {
    id: "machine-learning",
    term: { ja: "機械学習（ML）", en: "Machine Learning (ML)" },
    definition: {
      ja: "ルールを手書きせず、データからパターンを学ぶAIの部分集合。",
      en: "A subset of AI that learns patterns from data instead of relying on hand-written rules.",
    },
    relatedLessonIds: ["ai-basics-01"],
    sources: [{ label: "IBM: What is artificial intelligence?", url: "https://www.ibm.com/think/topics/artificial-intelligence" }],
    lastVerified: "2026-10-06",
  },
  {
    id: "deep-learning",
    term: { ja: "深層学習（DL）", en: "Deep Learning (DL)" },
    definition: {
      ja: "多層のニューラルネットワークを使う機械学習の部分集合。現在の主要なAIの基盤技術。",
      en: "A subset of machine learning that uses many-layered neural networks — the foundation of most AI today.",
    },
    relatedLessonIds: ["ai-basics-01", "history-03"],
    sources: [{ label: "IBM: What is artificial intelligence?", url: "https://www.ibm.com/think/topics/artificial-intelligence" }],
    lastVerified: "2026-10-06",
  },
  {
    id: "prompt",
    term: { ja: "プロンプト", en: "Prompt" },
    definition: {
      ja: "AIに対して行う指示文。役割・文脈・タスク・出力形式を具体化するほど狙った回答を引き出しやすい。",
      en: "The instruction given to an AI. The more concrete its role, context, task, and format, the more targeted the answer.",
    },
    relatedLessonIds: ["prompting-01"],
    sources: [{ label: "Prompt Engineering Guide", url: "https://www.promptingguide.ai/" }],
    lastVerified: "2026-10-06",
  },
  {
    id: "expert-system",
    term: { ja: "エキスパートシステム", en: "Expert System" },
    definition: {
      ja: "特定分野の専門知識をルールとして組み込んだAI。1980年代前半に商業的に成功したが、汎用性の限界も明らかになった。",
      en: "AI encoding specialist knowledge as rules, commercially successful in the early 1980s but later shown to have limited generality.",
    },
    relatedLessonIds: ["history-02"],
    sources: [{ label: "Wikipedia: AI winter", url: "https://en.wikipedia.org/wiki/AI_winter" }],
    lastVerified: "2026-10-06",
  },
  {
    id: "human-authorship",
    term: { ja: "人間の創作性要件", en: "Human Authorship Requirement" },
    definition: {
      ja: "米国では著作権保護の対象を「人間によって創作された」ものに限るという法的立場。AI単独生成物は対象外とされる。",
      en: "The US legal stance that copyright protection is limited to works \"created by a human being\" — purely AI-generated output doesn't qualify.",
    },
    relatedLessonIds: ["generative-media-05"],
    sources: [{ label: "U.S. Copyright Office: Copyright and Artificial Intelligence", url: "https://www.copyright.gov/ai/" }],
    lastVerified: "2026-10-06",
  },
  {
    id: "tool-use",
    term: { ja: "ツール使用（function calling）", en: "Tool use (function calling)" },
    definition: {
      ja: "モデルが「このツールをこの引数で呼んでほしい」という構造化された要求を返し、アプリ側が実行して結果を返す仕組み。モデル自身はツールを実行しない。",
      en: "A mechanism where the model returns a structured request to call a tool with given arguments, and the application executes it and returns the result. The model never runs the tool itself.",
    },
    relatedLessonIds: ["ai-agents-01", "ai-agents-02"],
    sources: [
      { label: "Anthropic Docs: Tool use with Claude", url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview" },
    ],
    lastVerified: "2026-10-06",
  },
  {
    id: "mcp",
    term: { ja: "MCP（Model Context Protocol）", en: "MCP (Model Context Protocol)" },
    definition: {
      ja: "AIアプリと外部システム（ツール・データ）の接続方法を統一するオープン規格。2024年11月にAnthropicが公開し、2025年12月にLinux Foundation傘下のAgentic AI Foundationへ寄贈された。",
      en: "An open standard for connecting AI applications to external systems (tools and data). Released by Anthropic in November 2024 and donated to the Agentic AI Foundation under the Linux Foundation in December 2025.",
    },
    relatedLessonIds: ["ai-agents-02", "ai-agents-04"],
    sources: [
      { label: "Model Context Protocol: What is MCP?", url: "https://modelcontextprotocol.io/docs/getting-started/intro" },
      {
        label: "MCP Blog: MCP joins the Agentic AI Foundation",
        url: "https://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/",
      },
    ],
    lastVerified: "2026-10-06",
  },
  {
    id: "context-engineering",
    term: { ja: "コンテキストエンジニアリング", en: "Context engineering" },
    definition: {
      ja: "推論中にコンテキストウィンドウへ入れるトークンの集合を選び、維持するための戦略。目標は「望む結果を最大化する、最小の高信号なトークン集合」。",
      en: "The set of strategies for curating and maintaining the tokens placed in the context window during inference — aiming for the smallest set of high-signal tokens that maximizes the desired outcome.",
    },
    relatedLessonIds: ["ai-agents-03"],
    sources: [
      {
        label: "Anthropic: Effective context engineering for AI agents",
        url: "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents",
      },
    ],
    lastVerified: "2026-10-06",
  },
  {
    id: "prompt-injection",
    term: { ja: "プロンプトインジェクション", en: "Prompt injection" },
    definition: {
      ja: "入力やツールで読み込んだ外部コンテンツに含まれる文によって、LLMの挙動が意図せず変えられてしまう脆弱性。外部のWebページや文書経由のものを「間接型」と呼ぶ。",
      en: "A vulnerability where text in the input, or in external content fetched by a tool, alters an LLM's behavior in unintended ways. Cases via web pages or documents are called \"indirect\" injection.",
    },
    relatedLessonIds: ["ai-agents-04"],
    sources: [{ label: "OWASP: LLM01:2025 Prompt Injection", url: "https://genai.owasp.org/llmrisk/llm01-prompt-injection/" }],
    lastVerified: "2026-10-06",
  },
  {
    id: "open-weight",
    term: { ja: "オープンウェイトモデル", en: "Open-weight model" },
    definition: {
      ja: "学習済みの重み（パラメータ）が配布され、自分の機器で動かせるモデル。学習データやコードまで公開されているとは限らず、OSIの定義では重みだけの公開は「オープンソースAI」に当たらない。",
      en: "A model whose trained weights (parameters) are distributed so you can run it on your own hardware. Training data and code are not necessarily released; under the OSI definition, weights alone do not make it \"open source AI.\"",
    },
    relatedLessonIds: ["chat-ais-06", "society-05"],
    sources: [
      { label: "Open Source Initiative: The Open Source AI Definition 1.0", url: "https://opensource.org/ai/open-source-ai-definition" },
    ],
    lastVerified: "2026-10-06",
  },
  {
    id: "shadow-ai",
    term: { ja: "シャドーAI", en: "Shadow AI" },
    definition: {
      ja: "IT部門の正式な承認や監督なしに、従業員がAIツールを利用すること。情報漏えいや法令違反につながるリスクとして問題視される。",
      en: "Employees using AI tools without the formal approval or oversight of the IT department — flagged as a risk for data leaks and regulatory noncompliance.",
    },
    relatedLessonIds: ["society-05"],
    sources: [{ label: "IBM: What is shadow AI?", url: "https://www.ibm.com/think/topics/shadow-ai" }],
    lastVerified: "2026-10-06",
  },
];
