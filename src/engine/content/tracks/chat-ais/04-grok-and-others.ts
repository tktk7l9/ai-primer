import type { Lesson } from "@/engine/content/types";

export const grokAndOthers: Lesson = {
  id: "chat-ais-04",
  slug: "grok-and-others",
  title: {
    ja: "Grok（xAI）と、その他の主要プレーヤー",
    en: "Grok (xAI) and Other Notable Players",
  },
  summary: {
    ja: "リアルタイム性を重視するGrokと、Copilot・Perplexityなど周辺の主要サービス。",
    en: "Grok's real-time focus, plus other notable services like Copilot and Perplexity.",
  },
  body: {
    ja: `## Grok — 開発元: xAI

**Grok** は **xAI**（2023年設立）が開発するチャットAIです。xAIは「宇宙を理解する」ことを使命に掲げています。

### Grokの特徴
- SNS「X」上の**リアルタイムの投稿**を読み取れる点が大きな差別化要素で、速報性の高い話題に強い。
- Xのアプリ内のほか、単独のWeb版・モバイルアプリからも利用可能。
- 音声対話・画像生成なども統合。

## その他の主要プレーヤー

### GitHub Copilot（Microsoft/GitHub）
コーディング支援に特化したAI。エディタ内でのコード補完や、チャット形式での実装相談に使われる（コーディングAIトラックで詳しく扱う）。

### Perplexity
検索エンジンとチャットAIを組み合わせた**回答エンジン**。質問に対し、参照した情報源へのリンク付きで回答するのが特徴で、出典を重視する調べ物に向く。

**選ぶときの視点**: 各社・各サービスで強みが異なるため、「どのAIが一番良いか」より「今の目的に何が向くか」で選ぶのが実用的です。次のレッスンで具体的な選び方を整理します。`,
    en: `## Grok — made by xAI

**Grok** is the chat AI built by **xAI**, founded in 2023 with a stated mission of "understanding the universe."

### What sets Grok apart
- Real-time access to posts on X (formerly Twitter) is Grok's biggest differentiator, making it strong on breaking, fast-moving topics.
- Available inside the X app as well as through a standalone web app and mobile apps.
- Also integrates voice conversation and image generation.

## Other notable players

### GitHub Copilot (Microsoft/GitHub)
An AI focused specifically on coding assistance — in-editor code completion and chat-based implementation help (covered in depth in the Coding AI track).

### Perplexity
An **answer engine** that combines search with a chat AI. It answers questions with links to the sources it drew on, making it well suited to source-conscious research.

**How to think about choosing**: strengths differ across providers, so it's more useful to ask "what fits my current task" than "which AI is best overall." The next lesson breaks that down concretely.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "Grokの大きな差別化要素として挙げられるのは？",
        en: "What's Grok's biggest differentiator?",
      },
      choices: [
        { ja: "X（旧Twitter）のリアルタイム投稿を参照できること", en: "Real-time access to posts on X (formerly Twitter)" },
        { ja: "音声機能が一切ないこと", en: "Having no voice features at all" },
        { ja: "オフラインでのみ動作すること", en: "Working only offline" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "X上のリアルタイム投稿を読み取れることが、速報性という点での大きな強みです。",
        en: "Real-time access to X posts is Grok's key strength for fast-moving, current topics.",
      },
    },
  ],
  sources: [
    { label: "xAI: Company", url: "https://x.ai/company" },
  ],
  lastVerified: "2026-07-15",
};
