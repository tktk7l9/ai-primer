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
    relatedLessonIds: ["ai-basics-02", "ai-basics-03", "understanding-ai-01"],
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
    relatedLessonIds: ["ai-basics-03", "ai-agents-03", "understanding-ai-01", "understanding-ai-02"],
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
    relatedLessonIds: ["ai-basics-04", "ai-agents-05", "society-06", "ai-at-work-01", "ai-at-work-02", "ai-and-society-04", "ai-and-society-06", "understanding-ai-02", "understanding-ai-06", "ai-in-daily-life-01", "ai-in-daily-life-02", "ai-in-daily-life-03", "ai-in-daily-life-04", "ai-in-daily-life-05"],
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
    relatedLessonIds: ["ai-basics-05", "chat-ais-07", "ai-and-society-04"],
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
    relatedLessonIds: ["ai-basics-04", "ai-basics-06", "understanding-ai-02"],
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
    relatedLessonIds: ["ai-basics-06", "ai-agents-01", "ai-agents-05", "ai-at-work-06", "ai-and-society-02"],
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
    relatedLessonIds: ["ai-basics-02", "how-llms-work-02", "ai-at-work-03", "understanding-ai-06"],
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
    relatedLessonIds: ["how-llms-work-01", "understanding-ai-03"],
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
    relatedLessonIds: ["how-llms-work-03", "ai-and-society-03", "understanding-ai-05"],
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
    relatedLessonIds: ["how-llms-work-04", "ai-at-work-04"],
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
    relatedLessonIds: ["prompting-02", "understanding-ai-04"],
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
    relatedLessonIds: ["prompting-03", "understanding-ai-01"],
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
    relatedLessonIds: ["generative-media-01", "understanding-ai-03"],
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
    relatedLessonIds: ["prompting-01", "ai-at-work-02"],
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
    relatedLessonIds: ["ai-agents-02", "ai-agents-04", "ai-at-work-06"],
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
    relatedLessonIds: ["ai-agents-04", "ai-at-work-04", "ai-at-work-06", "understanding-ai-02"],
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
    relatedLessonIds: ["chat-ais-06", "society-05", "understanding-ai-04", "ai-in-daily-life-06"],
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
    relatedLessonIds: ["society-05", "ai-at-work-01"],
    sources: [{ label: "IBM: What is shadow AI?", url: "https://www.ibm.com/think/topics/shadow-ai" }],
    lastVerified: "2026-10-06",
  },
  {
    id: "speech-to-speech",
    term: { ja: "音声対音声（speech-to-speech）", en: "Speech-to-speech" },
    definition: {
      ja: "音声をいったん文字に起こさず、1つのモデルが音声を直接扱って音声で答える方式。文字起こし→文章生成→読み上げのリレーより応答が速く、声の調子などの情報も失われにくい。",
      en: "An approach in which a single model works directly with audio and answers in speech, without transcribing it first. Compared with a transcribe → generate text → read aloud relay, it responds faster and keeps information such as tone of voice.",
    },
    relatedLessonIds: ["chat-ais-07"],
    sources: [
      { label: "OpenAI Docs: Getting started with the Realtime API", url: "https://developers.openai.com/api/docs/guides/realtime" },
      { label: "OpenAI: Hello GPT-4o", url: "https://openai.com/index/hello-gpt-4o/" },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "article-30-4",
    term: { ja: "著作権法第30条の4（非享受目的の利用）", en: "Article 30-4 of Japan's Copyright Act (non-enjoyment use)" },
    definition: {
      ja: "著作物に表現された思想・感情の享受を目的としない利用（AI学習のための情報解析など）を、必要と認められる限度で著作権者の許諾なく認める日本の規定。享受目的が併存する場合や、著作権者の利益を不当に害することとなる場合は対象外。",
      en: "A Japanese provision allowing uses not aimed at enjoying the thoughts or sentiments expressed in a work — such as data analysis for AI training — without the copyright holder's permission, to the extent necessary. It does not apply when an enjoyment purpose coexists or when the use would unreasonably prejudice the copyright holder's interests.",
    },
    relatedLessonIds: ["generative-media-06"],
    sources: [
      {
        label: "e-Gov法令検索: 著作権法 第30条の4",
        url: "https://laws.e-gov.go.jp/law/345AC0000000048#Mp-Ch_2-Se_3-Ss_5-At_30_4",
      },
      {
        label: "文化庁: AIと著作権に関する考え方について（2024年3月15日）",
        url: "https://www.bunka.go.jp/seisaku/bunkashingikai/chosakuken/pdf/94037901_01.pdf",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "similarity-and-dependence",
    term: { ja: "類似性と依拠性", en: "Similarity and dependence" },
    definition: {
      ja: "著作権侵害の判断に使われる2つの要件。既存の著作物と創作的表現が共通していること（類似性）と、既存の著作物をもとに作られたこと（依拠性）。日本では、AI生成物の利用もAIを使わない創作と同じ基準で判断されるとされる。",
      en: "The two requirements used to judge copyright infringement: sharing creative expression with an existing work (similarity) and being created based on that work (dependence). In Japan, the use of AI-generated material is judged by the same test as work made without AI.",
    },
    relatedLessonIds: ["generative-media-06", "ai-at-work-05"],
    sources: [
      {
        label: "文化庁: AIと著作権に関する考え方について（2024年3月15日）",
        url: "https://www.bunka.go.jp/seisaku/bunkashingikai/chosakuken/pdf/94037901_01.pdf",
      },
      {
        label: "Agency for Cultural Affairs: General Understanding on AI and Copyright in Japan — Overview",
        url: "https://www.bunka.go.jp/english/policy/copyright/pdf/94055801_01.pdf",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "deepfake",
    term: { ja: "ディープフェイク", en: "Deepfake" },
    definition: {
      ja: "実在する人物・物・場所・出来事などに似せてAIで生成・加工した画像・音声・動画で、本物や真実であるかのように誤って見えるもの（EU AI Actの定義による）。",
      en: "AI-generated or manipulated image, audio, or video content that resembles existing persons, objects, places, entities, or events and would falsely appear to a person to be authentic or truthful (the EU AI Act's definition).",
    },
    relatedLessonIds: ["generative-media-07", "society-07", "ai-at-work-05", "ai-and-society-05"],
    sources: [
      { label: "AI Act Service Desk: Article 3 (Definitions)", url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-3" },
      {
        label: "総務省: 令和6年版 情報通信白書（ディープフェイク）",
        url: "https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/r06/html/nd141210.html",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "content-credentials",
    term: { ja: "コンテンツクレデンシャル（C2PA）", en: "Content Credentials (C2PA)" },
    definition: {
      ja: "業界団体C2PAの標準で、画像・動画・音声などの来歴（誰が・どのツールで作り・どう編集したか）を、暗号で結びつけた記録としてファイルに付ける仕組み。来歴を示すもので、内容が真実かどうかを保証するものではない。",
      en: "A standard from the C2PA coalition that attaches a cryptographically bound record of provenance — who made the content, with what tool, and how it was edited — to images, video, audio, and other files. It shows origin and history, not whether the content is true.",
    },
    relatedLessonIds: ["generative-media-07", "ai-at-work-05"],
    sources: [
      { label: "C2PA: Content Credentials Explainer", url: "https://spec.c2pa.org/specifications/specifications/2.4/explainer/Explainer.html" },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "digital-watermark",
    term: { ja: "電子透かし（AI生成物の透かし）", en: "Digital watermark (for AI-generated content)" },
    definition: {
      ja: "AIが生成したコンテンツに、利用者には見えない形で埋め込む識別用の信号。GoogleのSynthIDなど。検出できるのはその透かしを埋め込むツールで作られたものに限られ、加工を重ねると検出できなくなることもある。",
      en: "An identifying signal embedded in AI-generated content in a way users cannot see, such as Google's SynthID. Detection only works for content made with tools that embed that watermark, and repeated alteration can make it undetectable.",
    },
    relatedLessonIds: ["generative-media-07"],
    sources: [
      { label: "Google DeepMind: SynthID", url: "https://deepmind.google/models/synthid/" },
      {
        label: "Gemini Apps Help: Verify AI-generated images, videos, and audio",
        url: "https://support.google.com/gemini/answer/16722517?hl=en",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "grounding",
    term: { ja: "グラウンディング", en: "Grounding" },
    definition: {
      ja: "AIの回答を、検索結果や指定した文書など外部の情報源に根拠づけること。回答のどの部分がどの情報源に基づくかを示す引用情報が、回答と一緒に返されることが多い。",
      en: "Tying an AI's answer to external sources such as search results or supplied documents, often returned together with citation data showing which part of the answer rests on which source.",
    },
    relatedLessonIds: ["ai-agents-05", "ai-in-daily-life-04"],
    sources: [
      { label: "Google AI for Developers: Grounding with Google Search", url: "https://ai.google.dev/gemini-api/docs/google-search" },
      { label: "Anthropic Docs: Web search tool", url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool" },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "deep-research",
    term: { ja: "ディープリサーチ", en: "Deep research" },
    definition: {
      ja: "AIが調査の計画を立て、検索と読み込みを数分から数十分かけて繰り返し、出典つきのレポートにまとめる機能。調べ物に特化したエージェントの一種。",
      en: "A feature in which the AI plans a research task, searches and reads repeatedly over several minutes or longer, and compiles a report with citations — a kind of agent specialized for research.",
    },
    relatedLessonIds: ["ai-agents-05"],
    sources: [
      { label: "OpenAI: Introducing deep research", url: "https://openai.com/index/introducing-deep-research/" },
      {
        label: "Google: Try Deep Research and our new experimental model in Gemini, your AI assistant",
        url: "https://blog.google/products-and-platforms/products/gemini/google-gemini-deep-research/",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "retrieval-practice",
    term: { ja: "想起練習（テスト効果）", en: "Retrieval practice (testing effect)" },
    definition: {
      ja: "学んだ内容を思い出す練習（小テストなど）をすると、読み返すだけより長く記憶に残りやすいという現象。直後のテストでは読み返しの方が成績がよくても、時間をおいたテストでは想起練習の方がはるかによく覚えていたことが実験で示されている。",
      en: "The finding that practicing recall — for example with quizzes — makes material stick longer than rereading it. In experiments, rereading did better on an immediate test, but prior testing produced substantially greater retention on delayed tests.",
    },
    relatedLessonIds: ["society-06"],
    sources: [
      {
        label: "Roediger & Karpicke (2006): Test-enhanced learning (Psychological Science)",
        url: "https://profiles.wustl.edu/en/publications/test-enhanced-learning-taking-memory-tests-improves-long-term-ret/",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "ai-promotion-act",
    term: { ja: "AI法（AI推進法）", en: "Japan's AI Act (AI Promotion Act)" },
    definition: {
      ja: "「人工知能関連技術の研究開発及び活用の推進に関する法律」の略称。2025年9月1日に全面施行。AIの研究開発と活用の推進を目的とし、人工知能戦略本部の設置や人工知能基本計画の策定を定める。罰則の規定はない。",
      en: "Short name for Japan's Act on Promotion of Research and Development, and Utilization of AI-related Technology, fully in effect since September 1, 2025. Aimed at promoting AI research, development, and use, it establishes an AI strategy headquarters and a national AI Basic Plan. It contains no penalty provisions.",
    },
    relatedLessonIds: ["society-07"],
    sources: [
      {
        label: "e-Gov法令検索: 人工知能関連技術の研究開発及び活用の推進に関する法律（AI法）",
        url: "https://laws.e-gov.go.jp/law/507AC0000000053",
      },
      { label: "内閣府: AI法", url: "https://www8.cao.go.jp/cstp/ai/ai_act/ai_act.html" },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "ai-guidelines-for-business",
    term: { ja: "AI事業者ガイドライン", en: "AI Guidelines for Business" },
    definition: {
      ja: "総務省と経済産業省が、事業活動でAIに関わるAI開発者・AI提供者・AI利用者向けにまとめた指針。法的拘束力のないソフトローで、2024年4月の第1.0版以降、改訂が続いている（2026年3月に第1.2版）。",
      en: "Guidelines from Japan's Ministry of Internal Affairs and Communications and Ministry of Economy, Trade and Industry for AI developers, AI providers, and AI business users. They are non-binding soft law, revised repeatedly since version 1.0 in April 2024 (version 1.2 in March 2026).",
    },
    relatedLessonIds: ["society-07"],
    sources: [
      { label: "総務省: AI事業者ガイドライン", url: "https://www.soumu.go.jp/main_sosiki/kenkyu/ai_network/02ryutsu20_04000019.html" },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "eu-ai-act",
    term: { ja: "EU AI Act（AI規則）", en: "EU AI Act" },
    definition: {
      ja: "EUの包括的なAI規制。AIをリスクの大きさで分け、禁止・厳しい義務・透明性の義務などを段階的に適用する。2024年8月1日に発効し、2026年8月2日に本格適用（高リスクAIの義務は改正により2027年12月以降に延期）。",
      en: "The EU's comprehensive AI regulation. It sorts AI by level of risk and phases in prohibitions, strict obligations, and transparency duties. It entered into force on August 1, 2024 and became broadly applicable on August 2, 2026, with high-risk obligations postponed by amendment to December 2027 and later.",
    },
    relatedLessonIds: ["society-07"],
    sources: [
      { label: "European Commission: AI Act", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "speech-recognition",
    term: { ja: "音声認識（文字起こし）", en: "Speech recognition (speech-to-text)" },
    definition: {
      ja: "人の話し声を、プログラムで文字に変換する技術。自動音声認識（ASR）とも呼ぶ。会議の文字起こしや音声入力に使われる。聞き違いのほか、元の音声にない語句や文を作ってしまう例も報告されている。",
      en: "Technology that lets a program turn human speech into written text, also called automatic speech recognition (ASR). It powers meeting transcripts and voice input. Besides mishearing, it has been found to produce whole phrases or sentences that were never in the audio.",
    },
    relatedLessonIds: ["ai-at-work-01", "chat-ais-07", "ai-and-society-04"],
    sources: [
      { label: "IBM: What Is Speech Recognition?", url: "https://www.ibm.com/think/topics/speech-recognition" },
      {
        label: "Koenecke et al.: Careless Whisper: Speech-to-Text Hallucination Harms (ACM FAccT 2024)",
        url: "https://arxiv.org/abs/2402.08021",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "localization",
    term: { ja: "ローカライズ（ローカリゼーション）", en: "Localization" },
    definition: {
      ja: "製品・アプリケーション・文書の内容を、特定の対象市場（ロケール）の言語・文化・その他の要件に合わせて作り変えること。翻訳だけでなく、数字や日付・時刻の書式、通貨、法的な要件の違いなども対象になる。",
      en: "Adapting a product, application, or document content to meet the language, cultural, and other requirements of a specific target market (a locale). Beyond translation, it covers number, date, and time formats, currency, differing legal requirements, and more.",
    },
    relatedLessonIds: ["ai-at-work-03"],
    sources: [{ label: "W3C: Localization vs. Internationalization", url: "https://www.w3.org/International/questions/qa-i18n" }],
    lastVerified: "2026-10-07",
  },
  {
    id: "post-editing",
    term: { ja: "ポストエディット", en: "Post-editing" },
    definition: {
      ja: "機械翻訳（生成AIによる翻訳を含む）の出力を、人が確認して修正すること。専門の翻訳者による翻訳と同等の品質を目指す「フルポストエディット」と、スピードを重視して作業の一部を省いたり簡略化したりする「ライトポストエディット」に分けられることがある。",
      en: "Having a person check and correct the output of machine translation, including translation by generative AI. It is sometimes divided into \"full post-editing,\" which aims for quality equal to a professional translator's, and \"light post-editing,\" which puts speed first by skipping or simplifying some of that work.",
    },
    relatedLessonIds: ["ai-at-work-03", "ai-in-daily-life-05"],
    sources: [
      { label: "AAMT（アジア太平洋機械翻訳協会）: 機械翻訳ポストエディットガイドライン", url: "https://aamt.info/act/posteditguideline" },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "back-translation",
    term: { ja: "逆翻訳（バックトランスレーション）", en: "Back-translation" },
    definition: {
      ja: "翻訳した文章を元の言語に訳し戻し、元の文と比べて訳の問題を探す確認方法。問題を見つけられる一方で、誤った警告が少なくなく、多くの問題が隠れたまま残ることも指摘されている。",
      en: "A check in which a translation is translated back into the original language and compared with the original to find problems. It can uncover problems, but it has been found to raise quite a number of false alarms and to leave many problems hidden.",
    },
    relatedLessonIds: ["ai-at-work-03"],
    sources: [
      {
        label: "Behr (2017): Assessing the use of back translation: the shortcomings of back translation as a quality testing method",
        url: "https://www.ssoar.info/ssoar/handle/document/74190",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "code-execution",
    term: { ja: "コード実行（サンドボックス）", en: "Code execution (sandbox)" },
    definition: {
      ja: "AIが書いたプログラムを、隔離された環境（サンドボックス）で実際に動かし、その結果を回答に使う機能。データの集計やグラフ作成で、数字をモデルの推測ではなく計算の結果に基づかせられる。ただし、使うデータや処理の手順を誤れば結果も誤る。",
      en: "A feature in which the AI actually runs the code it writes in an isolated environment (a sandbox) and uses the result in its answer. For totals and charts, the numbers then come from computation rather than the model's guesswork — though if it uses the wrong data or steps, the result is still wrong.",
    },
    relatedLessonIds: ["ai-at-work-04", "how-llms-work-05"],
    sources: [
      {
        label: "Anthropic Docs: Code execution tool",
        url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/code-execution-tool",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "human-in-the-loop",
    term: { ja: "ヒューマン・イン・ザ・ループ（HITL）", en: "Human-in-the-loop (HITL)" },
    definition: {
      ja: "自動化されたシステムの動作・監督・意思決定に、人が能動的に関わる仕組み。AIエージェントの安全対策としては、影響の大きい操作の前に人の承認を求める形で使われる。",
      en: "A system or process in which a human actively participates in the operation, supervision, or decision-making of an automated system. As a safeguard for AI agents, it takes the form of requiring a person to approve high-impact actions before they are taken.",
    },
    relatedLessonIds: ["ai-at-work-06", "ai-agents-01", "ai-agents-04"],
    sources: [
      { label: "IBM: What Is Human In The Loop (HITL)?", url: "https://www.ibm.com/think/topics/human-in-the-loop" },
      { label: "OWASP: LLM06:2025 Excessive Agency", url: "https://genai.owasp.org/llmrisk/llm062025-excessive-agency/" },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "excessive-agency",
    term: { ja: "過剰なエージェンシー", en: "Excessive agency" },
    definition: {
      ja: "LLMの出力が想定外・曖昧・操作されたものだったときに、有害な操作が実行されてしまう脆弱性。OWASPの「LLMアプリケーション向けTop 10（2025年版）」のLLM06。根本原因は、機能・権限・自律性のいずれか（または複数）が大きすぎること。",
      en: "The vulnerability that enables damaging actions to be performed in response to unexpected, ambiguous, or manipulated outputs from an LLM — LLM06 in OWASP's Top 10 for LLM Applications (2025). Its root cause is typically one or more of excessive functionality, excessive permissions, and excessive autonomy.",
    },
    relatedLessonIds: ["ai-at-work-06", "ai-agents-04"],
    sources: [{ label: "OWASP: LLM06:2025 Excessive Agency", url: "https://genai.owasp.org/llmrisk/llm062025-excessive-agency/" }],
    lastVerified: "2026-10-07",
  },
  {
    id: "approval-fatigue",
    term: { ja: "承認疲れ", en: "Approval fatigue" },
    definition: {
      ja: "確認や承認を求められる回数が多すぎて、人が承認する内容に注意を払わなくなること。AIコーディングツールが操作の前に出す確認画面などで問題として指摘されている。",
      en: "When people are asked to confirm or approve so often that they stop paying close attention to what they're approving — flagged, for example, with the permission prompts AI coding tools show before taking actions.",
    },
    relatedLessonIds: ["ai-at-work-06", "ai-agents-01"],
    sources: [
      {
        label: "Anthropic Engineering: How we built Claude Code auto mode: a safer way to skip permissions",
        url: "https://www.anthropic.com/engineering/claude-code-auto-mode",
      },
      {
        label: "Anthropic Engineering: Beyond permission prompts: making Claude Code more secure and autonomous",
        url: "https://www.anthropic.com/engineering/claude-code-sandboxing",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "right-of-publicity",
    term: { ja: "パブリシティ権", en: "Right of publicity" },
    definition: {
      ja: "人の氏名や肖像などが持つ、商品の販売などを促す力（顧客吸引力）を排他的に利用する権利。日本では2012年の最高裁判決（ピンク・レディー事件）が、肖像などを商品の広告に使うなど、専らその顧客吸引力の利用を目的とする無断使用は違法になるとした。2026年8月の法務省の検討会の報告書は、人の声も保護の対象に含まれるとし、生成AIによる侵害についての解釈の指針を示している。",
      en: "The exclusive right to exploit the power of a person's name, likeness, and the like to attract customers. In Japan, a 2012 Supreme Court ruling (the Pink Lady case) held that unauthorized use is unlawful when its sole purpose is to exploit that power — for example, using someone's likeness to advertise a product. An August 2026 report by a Ministry of Justice study group says a person's voice is protected too, and sets out interpretive guidelines for infringement by generative AI.",
    },
    relatedLessonIds: ["ai-at-work-05"],
    sources: [
      {
        label: "法務省: 肖像、声等の無断利用による民事責任の在り方に関する検討会",
        url: "https://www.moj.go.jp/MINJI/minji07_00400.html",
      },
      {
        label: "法務省: 取りまとめ報告書―生成AIによるパブリシティ権侵害等に関する解釈指針―【概要資料】（2026年8月）",
        url: "https://www.moj.go.jp/content/001468506.pdf",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "ai-exposure",
    term: { ja: "AI曝露度", en: "AI exposure" },
    definition: {
      ja: "仕事の内容や個人のスキルが、AIによって代替または補完されうる度合いを示す指標。曝露度が高いことは、その仕事の多くの作業にAIが関われることを意味し、その仕事がなくなることを意味しない。ILOは、曝露の数字は潜在的なものであって、実際に失われた仕事ではないと強調している。",
      en: "A measure of how far the content of a job or a person's skills could be substituted or complemented by AI. High exposure means AI could touch many of a job's tasks — not that the job will disappear. The ILO stresses that exposure figures reflect potential exposure, not actual job losses.",
    },
    relatedLessonIds: ["ai-and-society-01"],
    sources: [
      {
        label: "厚生労働省: 令和8年版 労働経済の分析 第Ⅱ部第2章（2026-09-29）",
        url: "https://www.mhlw.go.jp/wp/hakusyo/roudou/26/dl/26-1-2-2.pdf",
      },
      {
        label: "ILO: One in four jobs at risk of being transformed by GenAI, new ILO–NASK Global Index shows (2025-05-20)",
        url: "https://www.ilo.org/resource/news/one-four-jobs-risk-being-transformed-genai-new-ilo%E2%80%93nask-global-index-shows",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "augmentation-and-automation",
    term: { ja: "補完と代替（オーグメンテーションとオートメーション）", en: "Augmentation and automation" },
    definition: {
      ja: "AIが仕事に与える影響の2つの型。代替（オートメーション）は、AIが人の作業を代わりに行うこと。補完（オーグメンテーション）は、職業の中の一部の作業を自動化しつつ、人がほかの仕事に時間を回せるようにすること。ILOは2023年の分析で、生成AIの影響は職業を丸ごと自動化するより、補完が中心になりそうだとした。",
      en: "Two ways AI can affect work. Automation means AI performs tasks in place of people; augmentation means automating some tasks within an occupation while leaving time for other duties. In a 2023 analysis, the ILO concluded that generative AI's main impact is likely to be augmenting work rather than fully automating occupations.",
    },
    relatedLessonIds: ["ai-and-society-01"],
    sources: [
      {
        label: "ILO Working Paper 96: Generative AI and Jobs: A global analysis of potential effects on job quantity and quality (2023)",
        url: "https://www.ilo.org/sites/default/files/wcmsp5/groups/public/@dgreports/@inst/documents/publication/wcms_890761.pdf",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "inference",
    term: { ja: "推論（インファレンス）", en: "Inference" },
    definition: {
      ja: "学習を終えたAIモデルを使って、予測をしたり文章や画像を生成したりすること。モデルを作る「学習（トレーニング）」と区別される。AIの電力や水の数字を読むときは、推論と学習のどちらを数えたものかが重要になる。",
      en: "Using a trained AI model to make predictions or generate text or images, as distinct from training, which builds the model. When reading figures for AI's electricity or water use, it matters whether they count inference, training, or both.",
    },
    relatedLessonIds: ["how-llms-work-04", "ai-and-society-02", "understanding-ai-01", "ai-in-daily-life-06"],
    sources: [
      {
        label: "Google Cloud Blog: How much energy does Google's AI use? We did the math (2025-08)",
        url: "https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "pue",
    term: { ja: "PUE（電力使用効率）", en: "PUE (power usage effectiveness)" },
    definition: {
      ja: "データセンターの電力効率を表す業界標準の比率。冷却や配電など計算以外に使う電力を、IT機器を動かす電力と比べる。PUEが2.0なら、IT機器が使う1ワットごとに、冷却と配電に1ワットを追加で使っている。1.0に近いほど、電力のほとんどが計算に使われている。",
      en: "A standard industry ratio for data-centre efficiency that compares the non-computing overhead energy — for cooling, power distribution, and the like — with the energy used to power IT equipment. A PUE of 2.0 means one extra watt goes to cooling and power distribution for every watt of IT power; the closer to 1.0, the more of the energy goes to computing.",
    },
    relatedLessonIds: ["ai-and-society-02"],
    sources: [{ label: "Google Data Centers: Efficiency", url: "https://datacenters.google/efficiency/" }],
    lastVerified: "2026-10-07",
  },
  {
    id: "water-withdrawal-and-consumption",
    term: { ja: "取水量と消費量（水）", en: "Water withdrawal and consumption" },
    definition: {
      ja: "水の使用量の2つの数え方。取水量は、川や地下水などから取り出した水の量で、一時的に使って戻す分も含む。消費量は、取水量から排水量を引いた量で、蒸発などで元の水環境に戻らない分。AIの水の数字は、データセンターの冷却に使う水か、発電所で使われる水かによっても大きく変わる。",
      en: "Two ways to count water use. Withdrawal is freshwater taken from surface or ground sources, including water used temporarily and returned; consumption is withdrawal minus discharge — water that evaporates or otherwise leaves the immediate water environment. Figures for AI's water use also vary greatly depending on whether they count on-site cooling water at data centres or off-site water used to generate electricity.",
    },
    relatedLessonIds: ["ai-and-society-02"],
    sources: [
      {
        label: "Li et al.: Making AI Less \"Thirsty\": Uncovering and Addressing the Secret Water Footprint of AI Models (arXiv)",
        url: "https://arxiv.org/abs/2304.03271",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "algorithmic-bias",
    term: { ja: "AIのバイアス（アルゴリズムのバイアス）", en: "AI bias (algorithmic bias)" },
    definition: {
      ja: "AIシステムの判断や出力に生じる系統的な偏り。NISTは、データが対象の集団を代表していないことなどによる統計的・計算上のバイアスだけでなく、組織の手続きや慣行に由来するシステム的なバイアスと、人の考え方の偏りである人間のバイアスがあるとし、AIシステムのバイアスのリスクをゼロにはできないとしている。",
      en: "Systematic skew in an AI system's decisions or outputs. NIST describes not only statistical and computational bias, such as data that doesn't represent the population, but also systemic bias rooted in institutions' procedures and practices and human bias in people's thinking — and states that it is not possible to achieve zero risk of bias in an AI system.",
    },
    relatedLessonIds: ["ai-and-society-03", "society-03"],
    sources: [
      {
        label: "NIST SP 1270: Towards a Standard for Identifying and Managing Bias in Artificial Intelligence (2022)",
        url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1270.pdf",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "false-positive",
    term: { ja: "偽陽性（誤一致）", en: "False positive" },
    definition: {
      ja: "本来は当てはまらないものを、当てはまると誤って判定すること。顔認識では、別人の2枚の写真を同一人物と判定する誤りを指す。逆に、同一人物の写真を一致と判定できない誤りは偽陰性と呼ぶ。どちらの誤りが、どの場面で起きるかによって、結果の重さは大きく変わる。",
      en: "Wrongly judging something to be a match when it isn't. In face recognition, it means wrongly judging photos of two different people to show the same person; the opposite error — failing to match two photos of the same person — is a false negative. Which error happens, and where, makes a big difference to the consequences.",
    },
    relatedLessonIds: ["ai-and-society-03", "generative-media-07"],
    sources: [
      {
        label: "NIST: NIST Study Evaluates Effects of Race, Age, Sex on Face Recognition Software (2019-12-19)",
        url: "https://www.nist.gov/news-events/news/2019/12/nist-study-evaluates-effects-race-age-sex-face-recognition-software",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "proxy-variable",
    term: { ja: "代理変数（プロキシ）", en: "Proxy (variable)" },
    definition: {
      ja: "直接は観察・測定しにくい変数の代わりに使う変数。AIでは、本当に知りたいもの（例: 病気の重さ）の代わりに測りやすいもの（例: 医療費）を予測させると、社会の不平等がそのまま結果に入り込むことがある。",
      en: "A variable that stands in for another variable that usually can't be directly observed or measured. In AI, predicting something easy to measure (such as health care costs) in place of what you actually care about (such as how sick someone is) can carry existing inequalities straight into the results.",
    },
    relatedLessonIds: ["ai-and-society-03"],
    sources: [
      {
        label: "NIST SP 1270: Towards a Standard for Identifying and Managing Bias in Artificial Intelligence (2022)",
        url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1270.pdf",
      },
      {
        label: "Obermeyer et al.: Dissecting racial bias in an algorithm used to manage the health of populations (Science, 2019)",
        url: "https://escholarship.org/content/qt6h92v832/qt6h92v832.pdf",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "screen-reader",
    term: { ja: "スクリーンリーダー", en: "Screen reader" },
    definition: {
      ja: "パソコンやWebブラウザの画面の内容を処理して、音声の読み上げや点字に変換するソフトウェア。目の見えない人・見えにくい人の多くが使う。画像の内容は、代替テキストなどの説明がなければ伝わらない。",
      en: "Software that processes content on the desktop and in web browsers and converts it to text-to-speech and braille, used by many blind and low-vision people. What an image shows doesn't come through unless there is a description such as alt text.",
    },
    relatedLessonIds: ["ai-and-society-04"],
    sources: [
      {
        label: "W3C WAI: Tools and Techniques — Perception",
        url: "https://www.w3.org/WAI/people-use-web/tools-techniques/perception/",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "alt-text",
    term: { ja: "代替テキスト", en: "Alt text (text alternative)" },
    definition: {
      ja: "画像が伝える情報や機能を、文字で表したもの。スクリーンリーダーで読み上げられる。W3Cは、どう書くかは画像の使われ方・文脈・内容によって変わるため、作り手が決める必要があるとしている。",
      en: "Text that conveys the information or function an image represents; screen readers read it out. The W3C says the text alternative needs to be determined by the author, because it depends on the image's usage, context, and content.",
    },
    relatedLessonIds: ["ai-and-society-04"],
    sources: [{ label: "W3C WAI: Images Tutorial", url: "https://www.w3.org/WAI/tutorials/images/" }],
    lastVerified: "2026-10-07",
  },
  {
    id: "aac",
    term: { ja: "AAC（拡大・代替コミュニケーション）", en: "AAC (augmentative and alternative communication)" },
    definition: {
      ja: "話すことや言葉の理解の障害を補ったり、その代わりになったりするコミュニケーションの方法。手話やジェスチャー、文字盤、音声を出す機器などを含み、今ある発話を補う場合（拡大）と、発話の代わりに使う場合（代替）がある。打った文字を読み上げる機能や合成音声も、その手段になる。",
      en: "Ways of supplementing or compensating for impairments in producing or understanding speech and language — including manual signs, gestures, letter boards, and speech-generating devices. It is augmentative when it supplements existing speech and alternative when used in place of speech that is absent or not functional. Features that speak typed text and synthetic voices are among its tools.",
    },
    relatedLessonIds: ["ai-and-society-04"],
    sources: [
      {
        label: "ASHA: Augmentative and Alternative Communication (Practice Portal)",
        url: "https://www.asha.org/practice-portal/professional-issues/augmentative-and-alternative-communication/",
      },
      {
        label: "Apple Newsroom: Apple introduces new features for cognitive accessibility, along with Live Speech, Personal Voice, and Point and Speak in Magnifier (2023-05-16)",
        url: "https://www.apple.com/newsroom/2023/05/apple-previews-live-speech-personal-voice-and-more-new-accessibility-features/",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "special-fraud",
    term: { ja: "特殊詐欺", en: "Special fraud (tokushu sagi)" },
    definition: {
      ja: "警察庁の統計で使われる用語。被害者に電話をかけるなどして対面しないまま信頼させ、指定した口座への振込みなどの方法で現金などをだまし取る犯罪の総称。2026年からは、SNSなどを通じて関係を深めて信用させる手口（SNS型投資・ロマンス詐欺）も含めて数えている。",
      en: "A term used in the statistics of Japan's National Police Agency for crimes that win victims' trust without meeting them — for example by phone — and cheat them out of money, such as by having them transfer funds to a designated account. From 2026, the NPA also counts schemes that build trust or a relationship through social media and the like (social-media investment and romance scams) under this term.",
    },
    relatedLessonIds: ["ai-and-society-05", "ai-in-daily-life-01"],
    sources: [
      {
        label: "警察庁: 令和7年における特殊詐欺及びSNS型投資・ロマンス詐欺の認知・検挙状況等について（確定値）",
        url: "https://www.npa.go.jp/bureau/criminal/souni/tokusyusagi/hurikomesagi_toukei2025.pdf",
      },
      {
        label: "警察庁: 令和8年上半期における特殊詐欺の認知・検挙状況等について（暫定値）",
        url: "https://www.npa.go.jp/bureau/criminal/souni/tokusyusagi/hurikomesagi_toukei2026.pdf",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "voice-cloning",
    term: { ja: "音声クローン", en: "Voice cloning" },
    definition: {
      ja: "AIで、特定の人の声をまねた音声を作ること。FBIは、知っている人からの本物の電話や音声メッセージと、AIで作った音声クローンは、ほとんど区別がつかないほど似ることがあると注意を呼びかけている。",
      en: "Using AI to produce audio that imitates a specific person's voice. The FBI warns that a legitimate call or voice message from someone you know and an AI-generated voice clone can sound nearly identical.",
    },
    relatedLessonIds: ["ai-and-society-05", "generative-media-07", "ai-in-daily-life-01"],
    sources: [
      {
        label: "FBI IC3: Senior US Officials Impersonated in Malicious Messaging Campaign (2025-05-15)",
        url: "https://www.ic3.gov/PSA/2025/PSA250515",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "parental-controls",
    term: { ja: "ペアレンタルコントロール", en: "Parental controls" },
    definition: {
      ja: "子どもの安全のために、保護者がネットの利用環境を整えること。代表はフィルタリングで、利用時間の設定なども含む。チャットAIでは、保護者が子どものアカウントと連携して一部の設定を管理し、限られた場面で安全に関する通知を受け取れる機能が提供されている。",
      en: "Steps parents take to set up a safe online environment for children — filtering is the typical example, along with settings such as time limits. For chat AI, some services let a parent link to a teen's account, manage selected settings, and receive safety notifications in limited situations.",
    },
    relatedLessonIds: ["ai-and-society-06"],
    sources: [
      {
        label: "総務省: 知っていますか？「ペアレンタルコントロール」（インターネットトラブル事例集）",
        url: "https://www.soumu.go.jp/use_the_internet_wisely/trouble/reference/reference04.html",
      },
      {
        label: "OpenAI Help: Managing parental controls in ChatGPT",
        url: "https://help.openai.com/en/articles/12315553-managing-parental-controls-in-chatgpt",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "reasoning-model",
    term: { ja: "推論モデル", en: "Reasoning model" },
    definition: {
      ja: "答える前に、内部で推論トークンを生成して考えるように作られたLLM。問題を分解し、いくつかのやり方を比べてから答えるため、複雑な問題解決・コーディング・何段階もの作業に強い。考えた分のトークンも出力トークンとして課金され、待ち時間も延びる。ここでの「推論」はreasoning（考えること）の訳で、学習済みのモデルで出力を作る「推論（インファレンス）」とは別の意味。",
      en: "An LLM built to think before answering by generating internal reasoning tokens — breaking the problem down and weighing several approaches — which makes it stronger at complex problem solving, coding, and multi-step tasks. The thinking tokens are billed as output tokens and add waiting time. (In Japanese, both this \"reasoning\" and \"inference\" — producing output with a trained model — are often translated as 推論.)",
    },
    relatedLessonIds: ["understanding-ai-01"],
    sources: [{ label: "OpenAI API Docs: Reasoning models", url: "https://developers.openai.com/api/docs/guides/reasoning" }],
    lastVerified: "2026-10-07",
  },
  {
    id: "test-time-compute",
    term: { ja: "テスト時計算（test-time compute）", en: "Test-time compute" },
    definition: {
      ja: "学習を終えたモデルが、答えを出す段階で使う計算。答える前に長く考えさせて逐次的に増やす方法と、いくつかの答えを別々に考えさせて多数決などで選ぶ、並列に増やす方法がある。Anthropicは、思考に使えるトークンを増やすと数学の問題の正答率が対数的に上がったと報告している。",
      en: "The computation a trained model spends at the moment of answering. It can be increased serially, by letting the model think longer before answering, or in parallel, by sampling several independent attempts and picking one, for example by majority vote. Anthropic reported that accuracy on math questions rose logarithmically with the number of thinking tokens allowed.",
    },
    relatedLessonIds: ["understanding-ai-01"],
    sources: [
      { label: "Anthropic: Claude's extended thinking (2025-02-24)", url: "https://www.anthropic.com/news/visible-extended-thinking" },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "embedding",
    term: { ja: "埋め込み（エンベディング）", en: "Embedding" },
    definition: {
      ja: "文章などを、意味をとらえた数字の並び（ベクトル）に変えたもの。2つのベクトルの距離が関連の強さを表し、距離が小さいほど関連が強い。検索・分類・クラスタリング・おすすめなどに使われ、RAGでは質問と意味の近い資料の断片を探すのに使う。",
      en: "A list of numbers (a vector) that captures the meaning of a piece of text or other data. The distance between two vectors measures how related they are: the smaller the distance, the more related. Embeddings are used for search, classification, clustering, and recommendations; in RAG, they are how the passages closest in meaning to a question are found.",
    },
    relatedLessonIds: ["understanding-ai-02"],
    sources: [
      { label: "OpenAI Docs: Vector embeddings", url: "https://developers.openai.com/api/docs/guides/embeddings" },
      { label: "Google AI for Developers: Embeddings", url: "https://ai.google.dev/gemini-api/docs/embeddings" },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "vector-search",
    term: { ja: "ベクトル検索", en: "Vector search" },
    definition: {
      ja: "質問と資料をそれぞれ埋め込みに変え、質問のベクトルに近い資料を探す検索。言い換えに強い一方、型番やエラーコードのような文字どおりの一致は取りこぼすことがあり、単語の一致で探すキーワード検索（BM25など）と組み合わせる方法（ハイブリッド検索）もある。資料が多いときは、近似的な方法で速く探すことがある。",
      en: "Search that turns both the question and the documents into embeddings and finds the documents whose vectors are closest to the question's. It handles paraphrases well but can miss exact matches such as model numbers or error codes, so it can be combined with keyword search such as BM25 (hybrid search). With very many documents, approximate methods may be used to search faster.",
    },
    relatedLessonIds: ["understanding-ai-02"],
    sources: [
      {
        label: "Anthropic: Contextual Retrieval in AI Systems (2024-09-19)",
        url: "https://www.anthropic.com/engineering/contextual-retrieval",
      },
      {
        label: "Lewis et al.: Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (NeurIPS 2020)",
        url: "https://arxiv.org/abs/2005.11401",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "text-encoder",
    term: { ja: "テキストエンコーダ", en: "Text encoder" },
    definition: {
      ja: "画像生成AIなどで、プロンプトの文章を、生成するモデルが参照できる数字の並びに変える部分。Stable Diffusionの系統はCLIP系のエンコーダを使ってきた。GoogleのImagenの論文（2022年）は、テキストエンコーダとして使う言語モデル（T5）を大きくするほうが、画像の拡散モデルを大きくするより、画質と文章との一致の両方を大きく改善したと報告している。",
      en: "In image generators and similar systems, the component that turns the prompt into a list of numbers the generating model can consult. The Stable Diffusion family has used encoders from the CLIP family. Google's Imagen paper (2022) reported that making the language model used as the text encoder (T5) larger improved both image fidelity and image-text alignment much more than making the image diffusion model larger.",
    },
    relatedLessonIds: ["understanding-ai-03"],
    sources: [
      {
        label: "Saharia et al. (Google Research): Photorealistic Text-to-Image Diffusion Models with Deep Language Understanding (Imagen, arXiv 2022)",
        url: "https://arxiv.org/abs/2205.11487",
      },
      {
        label: "Podell et al.: SDXL: Improving Latent Diffusion Models for High-Resolution Image Synthesis (arXiv, 2023)",
        url: "https://arxiv.org/abs/2307.01952",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "latent-diffusion",
    term: { ja: "潜在拡散モデル", en: "Latent diffusion model" },
    definition: {
      ja: "画像をオートエンコーダで小さな潜在表現に圧縮し、その中でノイズを取り除いてから画像に戻す拡散モデル。画素のまま扱う拡散モデルより計算を大きく減らせる。2021年12月に公開された論文（CVPR 2022）が、文章などの条件をクロスアテンションで取り込む仕組みとあわせて示した。SDXLなどStable Diffusionの系統がこの方式を使う。",
      en: "A diffusion model that compresses an image into a small latent representation with an autoencoder, removes noise there, and then turns it back into an image, cutting computation substantially compared with diffusion models that work directly on pixels. A paper released in December 2021 (CVPR 2022) introduced it together with cross-attention for conditioning on inputs such as text. Stable Diffusion models such as SDXL use this approach.",
    },
    relatedLessonIds: ["understanding-ai-03"],
    sources: [
      {
        label: "Rombach et al.: High-Resolution Image Synthesis with Latent Diffusion Models (CVPR 2022)",
        url: "https://arxiv.org/abs/2112.10752",
      },
      {
        label: "Podell et al.: SDXL: Improving Latent Diffusion Models for High-Resolution Image Synthesis (arXiv, 2023)",
        url: "https://arxiv.org/abs/2307.01952",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "classifier-free-guidance",
    term: { ja: "分類器なしガイダンス", en: "Classifier-free guidance" },
    definition: {
      ja: "拡散モデルで、条件（文章など）を与えた予測と与えない予測を1つのネットワークで学習しておき、生成するときに2つを組み合わせて、結果を条件の側へ寄せる手法。強さを変えると、1枚ごとの質と多様性のバランスが変わる。2021年にワークショップで発表され、2022年に論文として公開された。",
      en: "A diffusion-model technique in which a single network learns to predict both with a condition (such as text) and without one, and the two predictions are combined during generation to pull the result toward the condition. Changing its strength shifts the balance between the quality of each sample and diversity. It was presented at a workshop in 2021 and released as a paper in 2022.",
    },
    relatedLessonIds: ["understanding-ai-03"],
    sources: [
      {
        label: "Ho & Salimans: Classifier-Free Diffusion Guidance (arXiv, 2022; NeurIPS 2021 Workshop)",
        url: "https://arxiv.org/abs/2207.12598",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "benchmark",
    term: { ja: "ベンチマーク", en: "Benchmark" },
    definition: {
      ja: "AIモデルの性能を比べるために、数学・プログラミング・生物学などの問題を集め、採点のしかたをそろえた試験。点数はその試験をその条件で解いた結果で、同じモデルでも問い方を変えると点数が動く。",
      en: "A test that collects questions — in math, programming, biology, and so on — with a fixed way of scoring them, so AI models can be compared. A score is the result of that test under particular conditions; the same model can score differently when asked in a different way.",
    },
    relatedLessonIds: ["understanding-ai-04"],
    sources: [
      { label: "Phan et al.: Humanity's Last Exam (arXiv, 2025-01; revised 2026-07)", url: "https://arxiv.org/abs/2501.14249" },
      {
        label: "Rein et al.: GPQA: A Graduate-Level Google-Proof Q&A Benchmark (arXiv, 2023-11)",
        url: "https://arxiv.org/abs/2311.12022",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "benchmark-saturation",
    term: { ja: "ベンチマークの飽和", en: "Benchmark saturation" },
    definition: {
      ja: "多くのモデルが満点近くを取るようになり、そのベンチマークでは性能の差を測れなくなること。Humanity's Last Examの論文は、最新のLLMがMMLUで9割を超える正答率に達し、ベンチマークは短い期間でほぼ0点からほぼ満点まで進みがちだと指摘している。",
      en: "When most models score close to full marks on a benchmark, so it can no longer tell them apart. The Humanity's Last Exam paper notes that the latest LLMs score over 90% on MMLU, and that benchmarks tend to go from near-zero to near-perfect in a short time.",
    },
    relatedLessonIds: ["understanding-ai-04"],
    sources: [
      { label: "Phan et al.: Humanity's Last Exam (arXiv, 2025-01; revised 2026-07)", url: "https://arxiv.org/abs/2501.14249" },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "benchmark-contamination",
    term: { ja: "ベンチマークの混入（コンタミネーション）", en: "Benchmark contamination" },
    definition: {
      ja: "ベンチマークの問題や正解がモデルの学習データに混ざること。モデルが解き方ではなく答えを覚えてしまい、点数が実力以上に高く出るおそれがある。ネットで公開された問題ほど起きやすく、問題をそのまま公開しないよう求めたり、学習データから除くための目印の文字列（カナリア文字列）を入れたりする対策がとられている。",
      en: "When a benchmark's questions or answers end up in a model's training data, so the model may remember answers instead of working them out and score higher than its real ability. Questions published online are most at risk; countermeasures include asking people not to post the questions and embedding a marker (\"canary\") string so they can be filtered out of training data.",
    },
    relatedLessonIds: ["understanding-ai-04"],
    sources: [
      {
        label: "OpenAI: Why SWE-bench Verified no longer measures frontier coding capabilities (2026-02-23)",
        url: "https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/",
      },
      {
        label: "Rein et al.: GPQA: A Graduate-Level Google-Proof Q&A Benchmark (arXiv, 2023-11)",
        url: "https://arxiv.org/abs/2311.12022",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "alignment",
    term: { ja: "アラインメント", en: "Alignment" },
    definition: {
      ja: "AIのふるまいを、作り手や社会が意図する目的や価値に沿わせ、役に立ち安全で信頼できるものにすること。人の評価を学習に使うRLHFや、原則のリストとAI自身のフィードバックで調整する方法（Constitutional AI）などがある。",
      en: "Making an AI model's behaviour reflect human values and goals, so that it is as helpful, safe, and reliable as possible. Methods include RLHF, which trains on human ratings, and Constitutional AI, which uses a list of principles and AI feedback.",
    },
    relatedLessonIds: ["understanding-ai-05", "how-llms-work-03"],
    sources: [
      { label: "IBM: What is AI alignment?", url: "https://www.ibm.com/think/topics/ai-alignment" },
      {
        label: "Bai et al.: Constitutional AI: Harmlessness from AI Feedback (arXiv, 2022-12-15)",
        url: "https://arxiv.org/abs/2212.08073",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "red-teaming",
    term: { ja: "レッドチーミング", en: "Red teaming" },
    definition: {
      ja: "攻撃者の考え方と手口をまねて、AIシステムの欠陥や弱点を組織的に探すこと。日本のAIセーフティ・インスティテュート（AISI）は、開発者や提供者が施したリスク対策を攻撃者の視点から評価する手法と説明し、2024年9月に手法のガイドを公開した（2025年3月に第1.10版）。",
      en: "A structured effort to find flaws and vulnerabilities in an AI system by adopting an attacker's mindset and methods. Japan's AI Safety Institute (AISI) describes it as a way for developers and providers to evaluate their risk mitigations from an attacker's perspective, and published a guide to the methodology in September 2024 (version 1.10 in March 2025).",
    },
    relatedLessonIds: ["understanding-ai-05"],
    sources: [
      {
        label: "AIセーフティ・インスティテュート（J-AISI）: AIセーフティに関するレッドチーミング手法ガイド（第1.10版、2025-03）",
        url: "https://aisi.go.jp/output/output_framework/guide_to_red_teaming_methodology_on_ai_safety/",
      },
      { label: "OpenAI: GPT-4 System Card (2023-03)", url: "https://cdn.openai.com/papers/gpt-4-system-card.pdf" },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "system-card",
    term: { ja: "システムカード（モデルカード）", en: "System card (model card)" },
    definition: {
      ja: "AIモデルの能力、安全性の評価、対策、限界、公開の判断などを、開発者がまとめて公表する文書。モデル単体だけでなく、利用規約・アクセスの制限・悪用の監視など周りの仕組みも扱う。2018年に提案された「モデルカード」（想定した使い方や、集団ごとの評価結果をモデルに添えて示す短い文書）の考え方を受け継いでいる。",
      en: "A document in which a developer sets out an AI model's capabilities, safety evaluations, mitigations, limitations, and deployment decisions. It covers not only the model but also the surrounding system, such as usage policies, access controls, and monitoring for abuse. It builds on the \"model card\" proposed in 2018: a short document accompanying a model that states its intended use and its evaluation results across groups.",
    },
    relatedLessonIds: ["understanding-ai-05"],
    sources: [
      { label: "Mitchell et al.: Model Cards for Model Reporting (arXiv, 2018-10-05)", url: "https://arxiv.org/abs/1810.03993" },
      { label: "OpenAI: GPT-4 System Card (2023-03)", url: "https://cdn.openai.com/papers/gpt-4-system-card.pdf" },
      { label: "Anthropic: Model system cards", url: "https://www.anthropic.com/system-cards" },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "frontier-safety-framework",
    term: { ja: "フロンティアAIの安全の枠組み", en: "Frontier AI safety framework" },
    definition: {
      ja: "最先端の高性能な汎用AI（フロンティアAI）を開発する企業が公表する、深刻なリスクの評価と管理の方針。リスクを許容できない水準（しきい値）、その水準に近づいたか・超えたかの評価、対策をしても下に抑えられないときの対応（最終的には開発も公開もしない）を定める。2024年5月のAIソウル・サミットで、16の企業・団体が公表を約束した（のちに4団体が加わった）。",
      en: "A policy published by a developer of frontier AI — highly capable general-purpose models — setting out how it assesses and manages severe risks: thresholds at which risks would be intolerable, how it checks whether a model is approaching or has crossed them, and what it will do if mitigations cannot keep risks below them (in the extreme, not developing or deploying the model at all). At the AI Seoul Summit in May 2024, 16 companies and organisations committed to publishing one (four more joined later).",
    },
    relatedLessonIds: ["understanding-ai-05"],
    sources: [
      {
        label: "UK Government (DSIT): Frontier AI Safety Commitments, AI Seoul Summit 2024 (2024-05-21, updated 2025-02-07)",
        url: "https://www.gov.uk/government/publications/frontier-ai-safety-commitments-ai-seoul-summit-2024/frontier-ai-safety-commitments-ai-seoul-summit-2024",
      },
    ],
    lastVerified: "2026-10-07",
  },
  {
    id: "ai-safety-institute",
    term: { ja: "AIセーフティ・インスティテュート（AISI）", en: "AI Safety Institute (AISI)" },
    definition: {
      ja: "AIの安全性を評価する手法や基準を研究・推進する政府系の機関。英国や米国での設立に続き、日本では2024年2月14日に発足し、情報処理推進機構（IPA）に事務局を置く。英国の機関は2025年2月14日に「AI Security Institute」へ名称を変え、安全保障や犯罪に関わる深刻なリスクに焦点を絞った。",
      en: "A government-backed body that researches and promotes methods and standards for evaluating AI safety. Following the UK and the US, Japan launched its institute on February 14, 2024, with its secretariat at the Information-technology Promotion Agency (IPA). On February 14, 2025, the UK renamed its institute the \"AI Security Institute,\" focusing on serious AI risks with security implications, such as crime.",
    },
    relatedLessonIds: ["understanding-ai-05"],
    sources: [
      { label: "AIセーフティ・インスティテュート（J-AISI）: AISIについて", url: "https://aisi.go.jp/about/" },
      {
        label: "GOV.UK: Tackling AI security risks to unleash growth and deliver Plan for Change (2025-02-14)",
        url: "https://www.gov.uk/government/news/tackling-ai-security-risks-to-unleash-growth-and-deliver-plan-for-change",
      },
    ],
    lastVerified: "2026-10-07",
  },
  // Using AI in Daily Life (money, legal, government procedures, travel, language, device settings).
  {
    id: "unregistered-operator",
    term: { ja: "無登録業者", en: "Unregistered operator" },
    definition: {
      ja: "日本の居住者を相手に株・FX・暗号資産などの金融商品取引業や暗号資産交換業を行うのに必要な登録を受けていない業者。所在地が海外でも日本での登録が必要で、金融庁は、登録の有無を「金融事業者一括検索」で名称や電話番号から確かめられるようにし、無登録業者との取引は、投資者を保護する態勢が整っているかを当局が確認できないため高リスクだとしている。",
      en: "A business that lacks the registration required to conduct financial instruments business — trading in stocks, FX, crypto-assets, and the like — or crypto-asset exchange business with residents of Japan. Registration in Japan is required even for firms located overseas. Japan's Financial Services Agency lets you check registration by name or phone number through its search of licensed financial operators, and warns that dealing with unregistered operators is high risk because the authorities cannot confirm they have investor-protection systems in place.",
    },
    relatedLessonIds: ["ai-in-daily-life-01", "ai-and-society-05"],
    sources: [
      { label: "金融庁: 無登録業者との取引は要注意！！（2023-06-30、2026-10-07 更新）", url: "https://www.fsa.go.jp/ordinary/chuui/highrisk.html" },
      { label: "金融庁: 詐欺的な投資勧誘等にご注意ください！（2026-06-24 更新）", url: "https://www.fsa.go.jp/ordinary/chuui/attention.html" },
    ],
    lastVerified: "2026-10-10",
  },
  {
    id: "j-flec",
    term: { ja: "J-FLEC（金融経済教育推進機構）", en: "J-FLEC (Japan Financial Literacy and Education Corporation)" },
    definition: {
      ja: "金融経済教育を推進する機関。特定の金融機関や金融商品に偏らない中立的な立場で助言する「J-FLEC認定アドバイザー」を認定・公表し、家計管理・生活設計・資産形成などについて、認定アドバイザーによる個別相談の無料体験や、相談料の割引クーポンを提供している（2026年10月時点）。アドバイザーの意見はそのアドバイザー個人のもので、J-FLECが特定の商品を勧めることはない。",
      en: "Japan's body for promoting financial and economic education. It certifies and publishes \"J-FLEC certified advisers,\" who advise from a neutral position not tied to particular financial institutions or products, and offers free trial consultations with them and discount coupons for paid consultations on household budgeting, life planning, and building assets (as of October 2026). An adviser's opinion is their own; J-FLEC does not recommend specific products.",
    },
    relatedLessonIds: ["ai-in-daily-life-01"],
    sources: [{ label: "金融経済教育推進機構（J-FLEC）: 専門家に相談したい", url: "https://www.j-flec.go.jp/public/consult/" }],
    lastVerified: "2026-10-10",
  },
  {
    id: "article-72-attorney-act",
    term: { ja: "弁護士法第72条（非弁行為の禁止）", en: "Article 72 of the Attorney Act (ban on unauthorized legal services)" },
    definition: {
      ja: "弁護士または弁護士法人でない者が、報酬を得る目的で、訴訟事件その他一般の法律事件に関して鑑定・代理・仲裁・和解その他の法律事務を取り扱うことや、その周旋を業とすることを禁じる規定。違反は2年以下の拘禁刑または300万円以下の罰金（第77条）。法務省は2023年8月と2026年8月21日に、AIを使った契約書審査や法務業務支援サービスとこの条文の関係についてのガイドラインを公表し、この条文は人の行為を対象とすること、「法律事件」には権利義務をめぐる争いや疑義がある「事件性」が必要であることなどを示した。",
      en: "The provision that prohibits anyone other than an attorney or a legal professional corporation from handling, as a business and for compensation, legal affairs — expert opinions, representation, arbitration, settlement, and the like — in lawsuits and other legal cases, or brokering them. Violations carry up to two years' imprisonment or a fine of up to 3 million yen (Article 77). In August 2023 and on August 21, 2026, Japan's Ministry of Justice published guidelines on how AI contract-review and legal-support services relate to the article, setting out that it targets human conduct and that a \"legal case\" requires \"case-ness\" — a dispute or doubt over rights and obligations.",
    },
    relatedLessonIds: ["ai-in-daily-life-02"],
    sources: [
      { label: "e-Gov法令検索: 弁護士法（昭和24年法律第205号）", url: "https://laws.e-gov.go.jp/law/324AC1000000205" },
      { label: "法務省: 弁護士法（その他）— AI等を用いた法務業務支援サービスと弁護士法第72条に関するガイドライン", url: "https://www.moj.go.jp/housei/shihouseido/housei10_00134.html" },
    ],
    lastVerified: "2026-10-10",
  },
  {
    id: "houterasu",
    term: { ja: "法テラス（日本司法支援センター）", en: "Houterasu (Japan Legal Support Center)" },
    definition: {
      ja: "国が設立した、法的トラブルの総合案内所となる公的な法人。「法テラス・サポートダイヤル」（0570-078374）は、法制度や相談窓口の情報を無料（通話料のみ）で案内する。オペレーターは個別の法律相談や法的判断は行わない。収入と資産が一定の基準以下の人は、民事法律扶助として、弁護士・司法書士による無料の法律相談や費用の立替えを利用できる（刑事事件の相談は対象外）。",
      en: "A public corporation established by the Japanese government as a one-stop guide for legal trouble. Its support line (0570-078374) provides information on the legal system and consultation desks free of charge apart from call costs; operators do not give individual legal advice or judgments. Under civil legal aid, people whose income and assets fall below set thresholds can get free consultations with lawyers or judicial scriveners and have fees advanced (criminal matters are excluded).",
    },
    relatedLessonIds: ["ai-in-daily-life-02"],
    sources: [
      { label: "法テラス: お電話でのお問合せ（法テラス・サポートダイヤル）", url: "https://www.houterasu.or.jp/site/soudanmadoguchi-houseido/support-dial.html" },
      { label: "法テラス: 民事法律扶助業務", url: "https://www.houterasu.or.jp/site/bengoshitou-fujo/" },
    ],
    lastVerified: "2026-10-10",
  },
  {
    id: "consumer-hotline-188",
    term: { ja: "消費者ホットライン「188」", en: "Consumer Hotline 188" },
    definition: {
      ja: "全国共通の3桁の電話番号（「いやや！」）。かけると、最寄りの市区町村や都道府県の消費生活センターなどの相談窓口につながる。契約や買い物のトラブル、もうけ話の勧誘などで迷ったときの相談先として、国民生活センターが案内している。",
      en: "Japan's nationwide three-digit consumer hotline. Calling it connects you to the nearest consumer affairs center run by your municipality or prefecture. The National Consumer Affairs Center points people to it for trouble with contracts and purchases and for suspicious money-making offers.",
    },
    relatedLessonIds: ["ai-in-daily-life-01", "ai-in-daily-life-04", "ai-and-society-05"],
    sources: [
      { label: "国民生活センター: 儲け話に関するトラブルにご注意！（2026-05-20 更新）", url: "https://www.kokusen.go.jp/soudan_now/data/moukebanashi.html" },
      {
        label: "国民生活センター: 便利な旅行予約サイトでトラブルに！？トラブル防止のための旅行予約サイトのチェックポイント（2025-03-18）",
        url: "https://www.kokusen.go.jp/news/data/n-20250318_1.html",
      },
    ],
    lastVerified: "2026-10-10",
  },
  {
    id: "my-number",
    term: { ja: "マイナンバー（個人番号）", en: "My Number (Individual Number)" },
    definition: {
      ja: "社会保障・税・災害対策の分野の行政手続で使われる個人番号。利用範囲は法律でこの3つの行政分野に限られ、番号法は、法律で認められた場合を除き、他人に個人番号の提供を求めることや、他人の個人番号を含む特定個人情報を収集・保管することを禁じている。デジタル庁などは、電話でマイナンバーの提供を求められることはないと注意を呼びかけている。",
      en: "The individual number used in Japan's administrative procedures for social security, tax, and disaster response. By law its use is limited to those three fields, and the My Number Act prohibits asking others for their number, or collecting and storing information containing others' numbers, except where the law allows. The Digital Agency and other bodies warn that no one will ever ask for your My Number by phone.",
    },
    relatedLessonIds: ["ai-in-daily-life-03"],
    sources: [
      {
        label: "デジタル庁ほか: マイナンバー制度に便乗した不正な勧誘や個人情報の取得にご注意ください！（2023-03-31 最終更新）",
        url: "https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_resources/fb0b3edb-47c6-4eed-abeb-f161194a703f/9f3210b4/20230331_policies_posts_mynumber_security_01.pdf",
      },
      {
        label: "e-Gov法令検索: 行政手続における特定の個人を識別するための番号の利用等に関する法律（番号法）第15条・第20条",
        url: "https://laws.e-gov.go.jp/law/425AC0000000027",
      },
    ],
    lastVerified: "2026-10-10",
  },
  {
    id: "tabi-reg",
    term: { ja: "たびレジ", en: "Tabi-Reg (overseas travel registration)" },
    definition: {
      ja: "外務省の海外旅行登録。旅行の予定を登録すると、出発前から旅行の終了まで、旅先の大使館や総領事館からの安全情報を無料で受け取れ、現地で事件や災害などの緊急事態に巻き込まれたときの安否確認や支援にもつながる。",
      en: "The Japanese Ministry of Foreign Affairs' registration service for overseas trips. Registering your itinerary brings free safety information from the embassy or consulate at your destination, from departure until the end of the trip, and helps the ministry confirm your safety and support you in an emergency such as an incident or disaster.",
    },
    relatedLessonIds: ["ai-in-daily-life-04"],
    sources: [{ label: "外務省: たびレジ（海外旅行登録）", url: "https://www.ezairyu.mofa.go.jp/tabireg/index.html" }],
    lastVerified: "2026-10-10",
  },
  {
    id: "electronic-travel-authorization",
    term: { ja: "電子渡航認証（ESTAなど）", en: "Electronic travel authorization (ESTA and others)" },
    definition: {
      ja: "渡航先の国に入国する前にオンラインで申請する渡航の認証で、米国のESTAが代表例。東京都消費生活総合センターは、検索結果の上位に公式サイトに似たデザインの申請代行サイトが表示され、公式の費用より高い金額を請求された相談があるとして、申請の前に大使館のサイトなどで所定の費用と公式サイトのURLを確かめるよう勧めている。",
      en: "An authorization to travel that must be applied for online before entering the destination country; the US ESTA is the best-known example. The Tokyo Metropolitan Consumer Affairs Center reports cases of travelers charged far more than the official fee by proxy application sites that resemble the official site and appear high in search results, and advises confirming the official fee and URL on the embassy's website before applying.",
    },
    relatedLessonIds: ["ai-in-daily-life-04"],
    sources: [
      {
        label: "東京都消費生活総合センター: 海外旅行をするときは、電子渡航認証（ESTA（エスタ）等）の申請代行サイトに注意しましょう（2024年7・8月号）",
        url: "https://www.shouhiseikatu.metro.tokyo.lg.jp/kurashi/2407_08/soudan.html",
      },
    ],
    lastVerified: "2026-10-10",
  },
  {
    id: "on-device-processing",
    term: { ja: "オンデバイス処理（端末内処理）", en: "On-device processing" },
    definition: {
      ja: "AIの処理を、クラウドのサーバーに送らず、スマートフォンやパソコンなど手元の端末の中で完結させること。データが端末から出ないためプライバシーの面で有利で、通信がなくても動く。Appleは、Apple Intelligenceのモデルは多くの場合すべて端末上で実行されるとし、Googleは、Pixelの通話メモ機能がGemini Nanoで端末内で処理され、通話の内容は端末に保存されてGoogleと共有されないと説明している。",
      en: "Running an AI task entirely on the phone, computer, or other device in hand rather than sending it to cloud servers. Because data never leaves the device, it is better for privacy and works without a connection. Apple says that in many cases Apple Intelligence models run entirely on device, and Google explains that the Call Notes feature on Pixel phones is processed on the device with Gemini Nano, with call contents stored on the device and not shared with Google.",
    },
    relatedLessonIds: ["ai-in-daily-life-06", "chat-ais-06"],
    sources: [
      { label: "Apple: Apple Intelligence & Privacy (2026-09-14)", url: "https://www.apple.com/legal/privacy/data/en/intelligence-engine/" },
      { label: "Google Phone app Help: Use Call Notes in Phone app", url: "https://support.google.com/phoneapp/answer/15257579" },
    ],
    lastVerified: "2026-10-10",
  },
  {
    id: "private-cloud-compute",
    term: { ja: "Private Cloud Compute", en: "Private Cloud Compute" },
    definition: {
      ja: "Appleが、端末内では処理しきれない複雑な要求を扱うために用意したサーバーの仕組み。Appleの説明では、処理されるデータはAppleが保存もアクセスもできず、要求を満たすためだけに処理されて結果が端末に返され、保持されない。設定の「プライバシーとセキュリティ」にある Apple Intelligence & PCC Report で、どの要求が送られたかの記録（透明性ログ）を有効にできる。",
      en: "Apple's server-based system for handling requests too complex to process on the device. According to Apple, the data being processed is not stored or made accessible to Apple; it is processed only to fulfill the request, after which the results are returned to the device and are not retained. Users can turn on a transparency log of the requests sent there under Settings > Privacy & Security > Apple Intelligence & PCC Report.",
    },
    relatedLessonIds: ["ai-in-daily-life-06"],
    sources: [{ label: "Apple: Apple Intelligence & Privacy (2026-09-14)", url: "https://www.apple.com/legal/privacy/data/en/intelligence-engine/" }],
    lastVerified: "2026-10-10",
  },
  {
    id: "grammatical-error-correction",
    term: { ja: "文法誤り訂正（GEC）", en: "Grammatical error correction (GEC)" },
    definition: {
      ja: "文章の文法的な誤りを自動で直す技術。評価では、元の文をできるだけ変えずに誤りだけを直す「最小限の修正」が原則とされる。2023年の評価では、ChatGPTは訂正後の文をとても流暢にする一方で直しすぎる傾向があり、この原則に従わなかった。",
      en: "Technology that automatically corrects grammatical errors in text. Evaluations treat \"minimal edits\" — fixing only the errors while changing the original as little as possible — as the principle. A 2023 evaluation found that ChatGPT makes corrected sentences very fluent but tends to over-correct, departing from that principle.",
    },
    relatedLessonIds: ["ai-in-daily-life-05"],
    sources: [
      {
        label: "Fang et al.: Is ChatGPT a Highly Fluent Grammatical Error Correction System? A Comprehensive Evaluation (arXiv, 2023-04-04)",
        url: "https://arxiv.org/abs/2304.01746",
      },
    ],
    lastVerified: "2026-10-10",
  },
  {
    id: "novelty-effect",
    term: { ja: "新奇性効果", en: "Novelty effect" },
    definition: {
      ja: "新しい道具や技術そのものの目新しさで、学習への意欲や成果が一時的に高まり、慣れるにつれて薄れる現象。チャットボットを使った語学学習の系統的レビュー（2022年）は、技術的な限界や認知負荷と並んで、新奇性効果を課題の一つに挙げている。",
      en: "A temporary rise in motivation or performance caused by the newness of a tool or technology, which fades as it becomes familiar. A 2022 systematic review of chatbot-supported language learning lists the novelty effect as one of the challenges, alongside technological limitations and cognitive load.",
    },
    relatedLessonIds: ["ai-in-daily-life-05"],
    sources: [
      {
        label: "Huang, Hew & Fryer: Chatbots for language learning—Are they really useful? (Journal of Computer Assisted Learning 38(1), 2022; ERIC record)",
        url: "https://eric.ed.gov/?id=EJ1322754",
      },
    ],
    lastVerified: "2026-10-10",
  },
  {
    id: "meta-analysis",
    term: { ja: "メタ分析", en: "Meta-analysis" },
    definition: {
      ja: "同じ問いを扱った複数の研究の結果を統計的に統合し、全体としての効果の大きさ（効果量）を推定する研究手法。個々の研究より結論が安定しやすい一方、まとめた研究の質や条件のばらつきの影響を受ける。チャットボットを使った語学学習のメタ分析（2024年オンライン公開）は、28の研究の70の効果量から正の効果（g = 0.484）を報告した。",
      en: "A research method that statistically combines the results of multiple studies on the same question to estimate the overall size of an effect (the effect size). Conclusions are more stable than from any single study, but they depend on the quality and the varying conditions of the studies pooled. A meta-analysis of chatbot-assisted language learning (published online in 2024) reported a positive effect (g = 0.484) from 70 effect sizes across 28 studies.",
    },
    relatedLessonIds: ["ai-in-daily-life-05"],
    sources: [
      {
        label: "Wang, Cheung, Neitzel & Chai: Does Chatting with Chatbots Improve Language Learning Performance? A Meta-Analysis of Chatbot-Assisted Language Learning (Review of Educational Research, online 2024-06-14)",
        url: "https://doi.org/10.3102/00346543241255621",
      },
    ],
    lastVerified: "2026-10-10",
  },
  {
    id: "notice-project",
    term: { ja: "NOTICE", en: "NOTICE (Japan's IoT security survey)" },
    definition: {
      ja: "総務省・NICT（情報通信研究機構）・ICT-ISACとインターネット接続事業者などが連携し、2019年2月20日から実施しているIoT機器のセキュリティ対策向上のプロジェクト。推測されやすい管理用パスワードが設定されたルーターやネットワークカメラなどを調査し、管理者や利用者に注意喚起を行う。対策として、管理用パスワードを安全性の高いものにすることと、最新のファームウェアへのアップデートを挙げている。",
      en: "A project run since February 20, 2019 by Japan's Ministry of Internal Affairs and Communications, NICT, ICT-ISAC, internet service providers, and others to improve the security of IoT devices. It surveys routers, network cameras, and similar devices set up with easily guessed administrative passwords and alerts their administrators and users, recommending a strong administrative password and the latest firmware.",
    },
    relatedLessonIds: ["ai-in-daily-life-06"],
    sources: [{ label: "NOTICE（総務省・NICT・ICT-ISAC）: みんなで守る、IoT。", url: "https://notice.go.jp/" }],
    lastVerified: "2026-10-10",
  },
];
