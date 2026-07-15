import type { Localized } from "@/i18n/config";
import type { Source } from "./types";

export type TimelinePrecision = "day" | "month" | "year";

export interface TimelineEvent {
  id: string;
  /** ISO date。precision が month/year の場合も yyyy-mm-dd 形式で01埋めする。 */
  date: string;
  precision: TimelinePrecision;
  title: Localized<string>;
  summary: Localized<string>;
  sources: readonly Source[];
}

// 日付・出来事は全て一次情報源または信頼できる百科事典で検証済み(2026-07-15時点)。
export const TIMELINE: readonly TimelineEvent[] = [
  {
    id: "1950-turing-test",
    date: "1950-01-01",
    precision: "year",
    title: { ja: "チューリングテストの提案", en: "The Turing Test Proposed" },
    summary: {
      ja: "アラン・チューリングが論文「計算する機械と知性」で、機械が人間と区別できない振る舞いをするかを判定する試験を提案した。",
      en: "Alan Turing proposed a test for whether a machine's behavior is indistinguishable from a human's, in his paper \"Computing Machinery and Intelligence.\"",
    },
    sources: [{ label: "Wikipedia: Turing test", url: "https://en.wikipedia.org/wiki/Turing_test" }],
  },
  {
    id: "1956-dartmouth",
    date: "1956-06-18",
    precision: "month",
    title: { ja: "ダートマス会議 — 「人工知能」誕生", en: "The Dartmouth Conference: AI Is Named" },
    summary: {
      ja: "ジョン・マッカーシーらが主催した研究集会で「人工知能」という言葉が初めて公に使われた。",
      en: "At a workshop organized by John McCarthy and others, the term \"artificial intelligence\" was used publicly for the first time.",
    },
    sources: [
      { label: "Dartmouth: AI Coined at Dartmouth", url: "https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth" },
    ],
  },
  {
    id: "1966-eliza",
    date: "1966-01-01",
    precision: "year",
    title: { ja: "ELIZA — 初期のチャットボット", en: "ELIZA: An Early Chatbot" },
    summary: {
      ja: "ジョセフ・ワイゼンバウムがMITで開発した、パターンマッチングで応答するチャットボット。セラピストを模した対話で知られる。",
      en: "Joseph Weizenbaum's MIT chatbot, which used pattern matching to simulate a Rogerian psychotherapist's responses.",
    },
    sources: [{ label: "Codecademy: History of Chatbots", url: "https://www.codecademy.com/article/history-of-chatbots" }],
  },
  {
    id: "1973-lighthill-report",
    date: "1973-01-01",
    precision: "year",
    title: { ja: "ライトヒル・レポートと第一次AIの冬", en: "The Lighthill Report and the First AI Winter" },
    summary: {
      ja: "英国でAI研究を批判するレポートが発表され、資金削減が米欧にも波及し、研究が停滞する「AIの冬」に入った。",
      en: "A UK report criticizing AI research led to funding cuts that spread to the US and Europe, ushering in the first \"AI winter.\"",
    },
    sources: [{ label: "Wikipedia: AI winter", url: "https://en.wikipedia.org/wiki/AI_winter" }],
  },
  {
    id: "1997-deep-blue",
    date: "1997-05-11",
    precision: "day",
    title: { ja: "ディープ・ブルーがカスパロフに勝利", en: "Deep Blue Defeats Kasparov" },
    summary: {
      ja: "IBMのチェス専用コンピュータ「ディープ・ブルー」が、世界チャンピオンのガルリ・カスパロフに公式戦で勝利した。",
      en: "IBM's chess computer Deep Blue defeated world champion Garry Kasparov in a standard-time-control match.",
    },
    sources: [
      { label: "Wikipedia: Deep Blue versus Garry Kasparov", url: "https://en.wikipedia.org/wiki/Deep_Blue_versus_Garry_Kasparov" },
    ],
  },
  {
    id: "2012-alexnet",
    date: "2012-09-01",
    precision: "month",
    title: { ja: "AlexNetが深層学習革命を起こす", en: "AlexNet Sparks the Deep Learning Revolution" },
    summary: {
      ja: "画像認識コンペILSVRCでAlexNetが圧勝し、深層学習が主流になる転換点となった。",
      en: "AlexNet's landslide win in the ILSVRC image-recognition competition marked deep learning's turning point into the mainstream.",
    },
    sources: [{ label: "Pinecone: AlexNet and ImageNet", url: "https://www.pinecone.io/learn/series/image-search/imagenet/" }],
  },
  {
    id: "2016-alphago",
    date: "2016-03-09",
    precision: "day",
    title: { ja: "AlphaGoが李世ドルに勝利", en: "AlphaGo Defeats Lee Sedol" },
    summary: {
      ja: "DeepMind開発のAlphaGoが、囲碁のトップ棋士イ・セドルとの5番勝負で4勝1敗を収めた。",
      en: "DeepMind's AlphaGo won 4 games to 1 against top Go player Lee Sedol in a five-game match.",
    },
    sources: [{ label: "Wikipedia: AlphaGo versus Lee Sedol", url: "https://en.wikipedia.org/wiki/AlphaGo_versus_Lee_Sedol" }],
  },
  {
    id: "2017-transformer",
    date: "2017-06-12",
    precision: "day",
    title: { ja: "「Attention Is All You Need」発表", en: "\"Attention Is All You Need\" Published" },
    summary: {
      ja: "Googleの研究者らがTransformerアーキテクチャを提示。以後の主要LLMの共通基盤となった。",
      en: "Google researchers introduced the Transformer architecture, which became the common foundation for nearly every major LLM since.",
    },
    sources: [{ label: "Wikipedia: Attention Is All You Need", url: "https://en.wikipedia.org/wiki/Attention_Is_All_You_Need" }],
  },
  {
    id: "2020-gpt3",
    date: "2020-06-01",
    precision: "month",
    title: { ja: "GPT-3公開", en: "GPT-3 Released" },
    summary: {
      ja: "OpenAIが1,750億パラメータのGPT-3をAPIで公開し、大規模言語モデルの可能性を広く示した。",
      en: "OpenAI released the 175-billion-parameter GPT-3 via API, widely demonstrating the potential of large language models.",
    },
    sources: [{ label: "HISTORY: ChatGPT is released to the public", url: "https://www.history.com/this-day-in-history/november-30/chatgpt-released-openai" }],
  },
  {
    id: "2021-github-copilot",
    date: "2021-06-29",
    precision: "day",
    title: { ja: "GitHub Copilot技術プレビュー発表", en: "GitHub Copilot Technical Preview Announced" },
    summary: {
      ja: "GitHubがAIコーディング支援ツールCopilotの技術プレビューを発表した。",
      en: "GitHub announced a technical preview of Copilot, its AI coding assistant.",
    },
    sources: [{ label: "Wikipedia: GitHub Copilot", url: "https://en.wikipedia.org/wiki/GitHub_Copilot" }],
  },
  {
    id: "2022-instructgpt",
    date: "2022-01-01",
    precision: "month",
    title: { ja: "InstructGPT — RLHFの実証", en: "InstructGPT Demonstrates RLHF" },
    summary: {
      ja: "OpenAIがRLHFで指示追従性を高めたInstructGPTを発表。小さなモデルが人間の評価で大きなモデルを上回った。",
      en: "OpenAI's InstructGPT, tuned with RLHF, showed a much smaller model preferred by human raters over a far larger one.",
    },
    sources: [{ label: "IBM: What Is RLHF?", url: "https://www.ibm.com/think/topics/rlhf" }],
  },
  {
    id: "2022-stable-diffusion",
    date: "2022-08-22",
    precision: "day",
    title: { ja: "Stable Diffusion公開", en: "Stable Diffusion Released" },
    summary: {
      ja: "Stability AIらがオープンソースの画像生成モデルStable Diffusionを公開した。",
      en: "Stability AI and collaborators released the open-source image generation model Stable Diffusion.",
    },
    sources: [{ label: "Wikipedia: Stable Diffusion", url: "https://en.wikipedia.org/wiki/Stable_Diffusion" }],
  },
  {
    id: "2022-chatgpt",
    date: "2022-11-30",
    precision: "day",
    title: { ja: "ChatGPT一般公開", en: "ChatGPT Launches Publicly" },
    summary: {
      ja: "OpenAIがChatGPTを無料研究プレビューとして公開。5日で利用者100万人に達し、AIを一般に広めた。",
      en: "OpenAI released ChatGPT as a free research preview; it reached one million users in five days, bringing AI to the mainstream.",
    },
    sources: [{ label: "HISTORY: ChatGPT is released to the public", url: "https://www.history.com/this-day-in-history/november-30/chatgpt-released-openai" }],
  },
  {
    id: "2023-gpt4",
    date: "2023-03-14",
    precision: "day",
    title: { ja: "GPT-4投入", en: "GPT-4 Launches" },
    summary: {
      ja: "OpenAIがより高性能なGPT-4をChatGPTとBingに投入した。",
      en: "OpenAI rolled out the more capable GPT-4 in ChatGPT and Bing.",
    },
    sources: [{ label: "HISTORY: ChatGPT is released to the public", url: "https://www.history.com/this-day-in-history/november-30/chatgpt-released-openai" }],
  },
  {
    id: "2024-claude3",
    date: "2024-03-01",
    precision: "month",
    title: { ja: "Claude 3ファミリー発表", en: "The Claude 3 Family Announced" },
    summary: {
      ja: "AnthropicがOpus・Sonnet・Haikuの3段階モデル構成を導入した。",
      en: "Anthropic introduced its three-tier Opus/Sonnet/Haiku model lineup.",
    },
    sources: [{ label: "Anthropic: Introducing the next generation of Claude", url: "https://www.anthropic.com/news/claude-3-family" }],
  },
  {
    id: "2025-openai-restructuring",
    date: "2025-10-28",
    precision: "day",
    title: { ja: "OpenAIが組織構造を再編", en: "OpenAI Restructures" },
    summary: {
      ja: "非営利のOpenAI Foundationが公益法人OpenAI Group PBCを統治する体制に再編された。",
      en: "OpenAI restructured so that the nonprofit OpenAI Foundation governs the public benefit corporation OpenAI Group PBC.",
    },
    sources: [{ label: "OpenAI: Evolving OpenAI's structure", url: "https://openai.com/index/evolving-our-structure/" }],
  },
];
