import type { Lesson } from "@/engine/content/types";

export const geminiLesson: Lesson = {
  id: "chat-ais-03",
  slug: "gemini",
  title: {
    ja: "Gemini（Google DeepMind）",
    en: "Gemini (Google DeepMind)",
  },
  summary: {
    ja: "Googleのサービス群と深く統合された、マルチモーダル前提のAI。",
    en: "Google's deeply integrated, multimodal-first AI.",
  },
  body: {
    ja: `## 開発元: Google DeepMind

**Gemini** は **Google DeepMind** が開発するAIファミリーです。設計の当初からテキスト・画像・音声・動画を扱う**マルチモーダル**（AI基礎トラック参照）を前提としている点が特徴です。

### 特徴・位置づけ
- **Google Workspace（Gmail・ドキュメント・スプレッドシート・スライド・Meetなど）への深い統合**。文書作成の下書きや要約、会議の文字起こしなど、既存サービスの中でAI機能を使える。
- 検索・地図・YouTubeなどGoogleの他サービスとの連携。
- 用途に応じて、高度な推論に振ったモデルや、速度・コストを優先したモデルなど複数のバリエーションを提供。
- 大きなコンテキストウィンドウを持つモデルもあり、長い文書や複数ファイルの一括処理に向く。

Googleのサービスをすでに使っている場合、追加の導入なしにAI機能へアクセスできる点が他社との大きな違いです。具体的なモデル名は [モデルカタログ](/models) にまとめています。`,
    en: `## Made by: Google DeepMind

**Gemini** is the AI family built by **Google DeepMind**, designed from the outset around **multimodal** input — text, images, audio, and video (see the AI Fundamentals track).

### Positioning
- **Deep integration with Google Workspace** (Gmail, Docs, Sheets, Slides, Meet, and more) — drafting, summarizing, and meeting transcripts are available right inside tools people already use.
- Connections to other Google services like Search, Maps, and YouTube.
- Multiple model variants for different needs — some tuned for deep reasoning, others for speed and cost.
- Some models offer very large context windows, suited to long documents or processing multiple files at once.

The biggest practical difference from other providers: if you already use Google's services, Gemini's AI features are available with no extra setup. See the [model catalog](/models) for specific model names.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "Geminiの大きな特徴として挙げられるのは？",
        en: "What's a distinctive strength of Gemini?",
      },
      choices: [
        { ja: "Google Workspaceなど既存サービスへの深い統合", en: "Deep integration into existing services like Google Workspace" },
        { ja: "テキストのみを扱う専用設計", en: "A text-only design" },
        { ja: "個人利用者向けの提供がない", en: "No availability for individual users" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "GmailやDocsなどGoogleの既存サービスに組み込まれている点が大きな強みです。",
        en: "Its integration into existing Google services like Gmail and Docs is a key strength.",
      },
    },
  ],
  sources: [
    { label: "Google DeepMind", url: "https://deepmind.google/" },
  ],
  lastVerified: "2026-07-15",
  glossaryRefs: ["multimodal", "context-window"],
};
