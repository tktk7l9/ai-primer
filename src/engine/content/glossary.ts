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
    relatedLessonIds: ["ai-basics-04", "ai-agents-05", "society-06", "ai-at-work-01", "ai-at-work-02", "ai-and-society-04", "ai-and-society-06"],
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
    relatedLessonIds: ["ai-basics-02", "how-llms-work-02", "ai-at-work-03"],
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
    relatedLessonIds: ["how-llms-work-03", "ai-and-society-03"],
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
    relatedLessonIds: ["ai-agents-04", "ai-at-work-04", "ai-at-work-06"],
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
    relatedLessonIds: ["ai-agents-05"],
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
    relatedLessonIds: ["ai-at-work-03"],
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
    relatedLessonIds: ["how-llms-work-04", "ai-and-society-02"],
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
    relatedLessonIds: ["ai-and-society-05"],
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
    relatedLessonIds: ["ai-and-society-05", "generative-media-07"],
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
];
