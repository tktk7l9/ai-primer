import type { Localized } from "@/i18n/config";
import type { Source } from "./types";

export type ModelKind = "chat" | "coding" | "image" | "video" | "music";

export interface ModelEntry {
  id: string;
  vendor: string;
  name: string;
  kind: ModelKind;
  strengths: Localized<string>;
  freeTier: boolean;
  officialUrl: string;
  sources: readonly Source[];
  lastVerified: string;
}

// 揮発性の高い個別バージョン名・料金は書かず、「開発元・立ち位置・強み」を中心にまとめる。
// 詳細・最新の料金体系は officialUrl を必ず確認すること。
export const MODELS: readonly ModelEntry[] = [
  {
    id: "chatgpt",
    vendor: "OpenAI",
    name: "ChatGPT",
    kind: "chat",
    strengths: {
      ja: "最も広いユーザー基盤を持つチャットAIの一つ。用途別に複数モデルを使い分けられる。",
      en: "One of the most widely used chat AIs, with multiple models tuned for different needs.",
    },
    freeTier: true,
    officialUrl: "https://openai.com/chatgpt/overview/",
    sources: [{ label: "OpenAI: ChatGPT", url: "https://openai.com/chatgpt/overview/" }],
    lastVerified: "2026-07-15",
  },
  {
    id: "claude",
    vendor: "Anthropic",
    name: "Claude",
    kind: "chat",
    strengths: {
      ja: "AI安全性を重視する設計思想。大きなコンテキストウィンドウとエージェント的タスクに強い。",
      en: "Built around an AI-safety-centered philosophy; strong on large context windows and agentic tasks.",
    },
    freeTier: true,
    officialUrl: "https://platform.claude.com/docs/en/about-claude/models/overview",
    sources: [
      { label: "Anthropic: Models overview", url: "https://platform.claude.com/docs/en/about-claude/models/overview" },
    ],
    lastVerified: "2026-07-15",
  },
  {
    id: "gemini",
    vendor: "Google DeepMind",
    name: "Gemini",
    kind: "chat",
    strengths: {
      ja: "Google Workspace等への深い統合と、テキスト・画像・音声・動画のマルチモーダル対応。",
      en: "Deep integration with Google Workspace, and multimodal support across text, image, audio, and video.",
    },
    freeTier: true,
    officialUrl: "https://deepmind.google/models/gemini/",
    sources: [{ label: "Google DeepMind: Gemini", url: "https://deepmind.google/models/gemini/" }],
    lastVerified: "2026-07-15",
  },
  {
    id: "grok",
    vendor: "xAI",
    name: "Grok",
    kind: "chat",
    strengths: {
      ja: "X（旧Twitter）上のリアルタイム投稿を参照でき、速報性の高い話題に強い。",
      en: "Real-time access to posts on X (formerly Twitter), making it strong on fast-moving, current topics.",
    },
    freeTier: true,
    officialUrl: "https://x.ai/grok",
    sources: [{ label: "xAI: Grok", url: "https://x.ai/grok" }],
    lastVerified: "2026-07-15",
  },
  {
    id: "perplexity",
    vendor: "Perplexity AI",
    name: "Perplexity",
    kind: "chat",
    strengths: {
      ja: "検索とチャットAIを組み合わせた「回答エンジン」。回答に出典リンクが付く。",
      en: "An \"answer engine\" combining search with chat AI — answers come with inline source citations.",
    },
    freeTier: true,
    officialUrl: "https://www.perplexity.ai/",
    sources: [
      {
        label: "Perplexity Help Center: What is an answer engine?",
        url: "https://www.perplexity.ai/help-center/en/articles/10354917-what-is-an-answer-engine-and-how-does-perplexity-work-as-one",
      },
    ],
    lastVerified: "2026-07-15",
  },
  {
    id: "github-copilot",
    vendor: "GitHub (Microsoft)",
    name: "GitHub Copilot",
    kind: "coding",
    strengths: {
      ja: "コード補完・チャット・PR支援・自律エージェントまで幅広くカバー。GitHubワークフローと親和性が高い。",
      en: "Covers completion, chat, PR assistance, and autonomous agent modes, tightly integrated with the GitHub workflow.",
    },
    freeTier: true,
    officialUrl: "https://github.com/features/copilot/",
    sources: [{ label: "GitHub: Copilot", url: "https://github.com/features/copilot/" }],
    lastVerified: "2026-07-15",
  },
  {
    id: "claude-code",
    vendor: "Anthropic",
    name: "Claude Code",
    kind: "coding",
    strengths: {
      ja: "ターミナル起点でコードベース全体を理解し、横断的に作業するエージェント型CLI。",
      en: "A terminal-first agentic CLI that understands and works across an entire codebase.",
    },
    freeTier: false,
    officialUrl: "https://claude.com/product/claude-code",
    sources: [{ label: "Claude Code Docs: Overview", url: "https://code.claude.com/docs/en/overview" }],
    lastVerified: "2026-07-15",
  },
  {
    id: "cursor",
    vendor: "Cursor",
    name: "Cursor",
    kind: "coding",
    strengths: {
      ja: "AIエージェントでの開発を前提に設計されたエディタ。複数社のモデルをタスクに応じて選べる。",
      en: "A code editor designed from the ground up for agentic development, with a choice of models across providers.",
    },
    freeTier: true,
    officialUrl: "https://cursor.com/",
    sources: [{ label: "Cursor: Product", url: "https://cursor.com/product" }],
    lastVerified: "2026-07-15",
  },
  {
    id: "midjourney",
    vendor: "Midjourney, Inc.",
    name: "Midjourney",
    kind: "image",
    strengths: {
      ja: "美術的な仕上がりの質に定評があり、Discordや自社サイトから利用する画像生成AI。",
      en: "Known for aesthetically polished output; used via Discord or its own website.",
    },
    freeTier: false,
    officialUrl: "https://www.midjourney.com/",
    sources: [{ label: "Midjourney", url: "https://www.midjourney.com/" }],
    lastVerified: "2026-07-15",
  },
  {
    id: "dall-e",
    vendor: "OpenAI",
    name: "DALL-E",
    kind: "image",
    strengths: {
      ja: "ChatGPTに統合されており、文章から画像を手軽に生成できる。",
      en: "Integrated into ChatGPT, making text-to-image generation easy to access.",
    },
    freeTier: true,
    officialUrl: "https://openai.com/index/dall-e-3/",
    sources: [{ label: "OpenAI: DALL·E 3", url: "https://openai.com/index/dall-e-3/" }],
    lastVerified: "2026-07-15",
  },
  {
    id: "stable-diffusion",
    vendor: "Stability AI",
    name: "Stable Diffusion",
    kind: "image",
    strengths: {
      ja: "オープンソースで、ローカル実行やファインチューニングなど自由度の高いカスタマイズが可能。",
      en: "Open source, allowing local execution and fine-tuning for high customization freedom.",
    },
    freeTier: true,
    officialUrl: "https://stability.ai/",
    sources: [{ label: "Stability AI", url: "https://stability.ai/" }],
    lastVerified: "2026-07-15",
  },
  {
    id: "sora",
    vendor: "OpenAI",
    name: "Sora",
    kind: "video",
    strengths: {
      ja: "物理法則に沿ったリアルな動きと、セリフ・効果音の同期生成が特徴。提供形態は変化が速いため公式情報の確認が必須。",
      en: "Known for physically plausible motion and synchronized dialogue/sound effects. How it's offered changes quickly — always check official info.",
    },
    freeTier: false,
    officialUrl: "https://openai.com/sora/",
    sources: [{ label: "OpenAI: Sora", url: "https://openai.com/sora/" }],
    lastVerified: "2026-07-15",
  },
  {
    id: "veo",
    vendor: "Google DeepMind",
    name: "Veo",
    kind: "video",
    strengths: {
      ja: "テキスト・画像からの動画生成に加え、環境音やセリフなど音声も併せて生成できる。",
      en: "Generates video from text or images, along with accompanying audio like ambient sound and dialogue.",
    },
    freeTier: false,
    officialUrl: "https://deepmind.google/models/veo/",
    sources: [{ label: "Google DeepMind: Veo 3.1", url: "https://deepmind.google/models/veo/" }],
    lastVerified: "2026-07-15",
  },
  {
    id: "suno",
    vendor: "Suno",
    name: "Suno",
    kind: "music",
    strengths: {
      ja: "1つの文章の指示から、歌詞・メロディ・演奏・ミックスまで含む1曲まるごとを短時間で生成。",
      en: "Generates a complete song — lyrics, melody, performance, and mix — from a single text prompt.",
    },
    freeTier: true,
    officialUrl: "https://suno.com/",
    sources: [{ label: "Suno", url: "https://suno.com/" }],
    lastVerified: "2026-07-15",
  },
  {
    id: "elevenlabs",
    vendor: "ElevenLabs",
    name: "ElevenLabs",
    kind: "music",
    strengths: {
      ja: "音声合成・音声クローンで高い自然さに強み。音楽生成や効果音・対話AIも1つのプラットフォームで扱う。",
      en: "Strong on natural-sounding speech synthesis and voice cloning; also covers music generation, sound effects, and conversational AI in one platform.",
    },
    freeTier: true,
    officialUrl: "https://elevenlabs.io/",
    sources: [{ label: "ElevenLabs", url: "https://elevenlabs.io/" }],
    lastVerified: "2026-07-15",
  },
];
