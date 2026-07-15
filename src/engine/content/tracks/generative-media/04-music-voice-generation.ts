import type { Lesson } from "@/engine/content/types";

export const musicVoiceGeneration: Lesson = {
  id: "generative-media-04",
  slug: "music-voice-generation",
  title: {
    ja: "音楽・音声生成 — Suno・ElevenLabsなど",
    en: "Music and Voice Generation: Suno, ElevenLabs, and Others",
  },
  summary: {
    ja: "文章から歌詞・メロディ・演奏まで一括生成する時代になった。",
    en: "Text prompts can now generate lyrics, melody, and full production in one pass.",
  },
  body: {
    ja: `## 一文から曲まるごと、声もまるごと

### Suno — 音楽生成
**Suno** は、1つの文章の指示から、歌詞・メロディ・演奏・ミックスまで含む1曲まるごとを短時間で生成できるサービスです。ジャンルを問わず幅広い曲調に対応し、有料プランでは自分の声を学習させて楽曲に使う機能も提供されています。

### ElevenLabs — 音声生成
**ElevenLabs** はもともと音声合成（テキスト読み上げ）・音声クローンを中心に展開してきたサービスで、自然な音声品質に強みがあります。2025年からは音楽生成機能（Eleven Music）も展開し、音声合成・音声クローン・効果音・対話AIなど幅広い音声関連機能を1つのプラットフォームでまとめて提供しています。

### 両者の違い
Sunoは「曲そのもの」を作ることに特化しているのに対し、ElevenLabsは音声全般（読み上げ・クローン・効果音・対話など）を幅広くカバーするプラットフォームという違いがあります。

### 使う上での注意
生成した音楽・音声を公開・商用利用する場合、プランごとの利用規約（商用利用の可否・クレジット表記の要否など）を必ず確認してください。次のレッスンで権利面をさらに詳しく扱います。`,
    en: `## A whole song from one line, a whole voice from one sample

### Suno — music generation
**Suno** generates a complete song — lyrics, melody, performance, and mix — from a single text prompt in a short amount of time, across a wide range of genres. Paid plans also offer a feature to train a model of your own voice for use in the music.

### ElevenLabs — voice generation
**ElevenLabs** started out focused on speech synthesis (text-to-speech) and voice cloning, and is known for natural-sounding voice quality. Since 2025 it has also offered music generation (Eleven Music), bringing speech synthesis, voice cloning, sound effects, and conversational AI together on one platform.

### How they differ
Suno specializes in creating the song itself, while ElevenLabs is a broader audio platform covering speech, cloning, sound effects, and conversation.

### A caution when using them
If you plan to publish or commercially use generated music or voice, always check the plan's terms of service — whether commercial use is allowed and whether attribution is required. The next lesson covers the rights side in more depth.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "SunoとElevenLabsの違いとして正しい説明は？",
        en: "Which correctly describes the difference between Suno and ElevenLabs?",
      },
      choices: [
        {
          ja: "Sunoは曲そのものの生成に特化、ElevenLabsは音声全般を扱う幅広いプラットフォーム",
          en: "Suno specializes in generating the song itself; ElevenLabs is a broader platform covering audio in general",
        },
        { ja: "両者は全く同じ機能を提供する同一の会社である", en: "They're the same company offering identical features" },
        { ja: "ElevenLabsは画像生成専用サービスである", en: "ElevenLabs is a service dedicated solely to image generation" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "Sunoは音楽生成に特化、ElevenLabsは音声合成・クローン・音楽など幅広い音声関連機能をカバーします。",
        en: "Suno focuses on music generation, while ElevenLabs covers a broad range of audio features including speech synthesis, cloning, and music.",
      },
    },
  ],
  sources: [
    { label: "Suno", url: "https://suno.com/" },
    { label: "ElevenLabs", url: "https://elevenlabs.io/" },
  ],
  lastVerified: "2026-07-15",
};
