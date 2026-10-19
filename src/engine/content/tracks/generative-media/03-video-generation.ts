import type { Lesson } from "@/engine/content/types";

export const videoGeneration: Lesson = {
  id: "generative-media-03",
  slug: "video-generation",
  title: {
    ja: "動画生成 — Veo・Runwayと、終了したSora",
    en: "Video Generation: Veo, Runway, and the End of Sora",
  },
  summary: {
    ja: "文章から動画を生成する技術は急速に進化しており、提供形態の変化も速い。",
    en: "Text-to-video is advancing fast — and so is how these tools are packaged and offered.",
  },
  body: {
    ja: `## 静止画の次は「時間」を生成する

画像生成の技術（前のレッスン参照）を土台に、時間軸に沿った一貫性（物体の動き・物理法則・音声との同期など）まで扱うのが動画生成AIです。

### 代表的なツール
- **Veo（Google DeepMind）**: テキストや画像からの動画生成に加え、環境音・セリフなどの音声もあわせて生成できる点が特徴とされています。
- **Runway**: 映像制作者向けのプラットフォームで、文章・画像からの生成に加え、キーフレーム指定や動画から動画への編集といった制作向けの制御を打ち出しています。

### 消えたツールの例 — Sora
OpenAIの **Sora** は、物理法則に沿った動きや音声の同期生成を掲げて2024〜2025年に注目を集めましたが、2026年3月24日に提供終了が発表され、アプリとWeb版は4月26日に、APIは9月24日に停止しました。OpenAIは理由を具体的に示していませんが、報道は採算の悪さと計算資源の不足を挙げています。注目度の高いサービスでも短期間に終わることがある、という実例です。

### 動画生成ならではの難しさ
- **時間的な一貫性**: 前後のコマで人物やモノの形が変わってしまわないようにする必要がある。
- **物理法則の再現**: 重力・衝突・液体の動きなど、現実世界の物理的なもっともらしさ。
- **計算コスト**: 静止画より生成に必要な計算資源が大きく、生成時間も長くなりやすい。

**注意**: この分野は変化が非常に速く、サービスの提供終了・統合・新モデルの登場が頻繁に起きます。本サイトでは個別の提供状況を追いきれないため、利用の際は各社の公式サイトで最新の提供状況を確認してください。`,
    en: `## After stills: generating time itself

Building on image generation (previous lesson), video generation also has to handle consistency across time — object motion, physical plausibility, and audio synchronization.

### Notable tools
- **Veo (Google DeepMind)**: generates video from text or images, and is noted for also generating accompanying audio — ambient sound and dialogue.
- **Runway**: a platform aimed at filmmakers, offering text- and image-to-video plus production controls such as keyframes and video-to-video editing.

### A tool that disappeared: Sora
OpenAI's **Sora** drew attention in 2024–2025 for physically plausible motion and synchronized audio, but OpenAI announced its discontinuation on March 24, 2026; the app and web experience closed on April 26 and the API on September 24. OpenAI gave no specific reason, but news reports pointed to poor economics and a shortage of compute. It's a concrete example of how even a high-profile service can end within a short time.

### What makes video generation hard
- **Temporal consistency**: keeping people and objects looking the same from frame to frame.
- **Physical plausibility**: gravity, collisions, fluid motion behaving believably.
- **Compute cost**: video generation typically needs far more compute — and time — than a single still image.

**A caution**: this field moves very fast, with services being discontinued, merged, or replaced by new models frequently. This site can't track every product's current status — check each vendor's official site for what's actually available right now.`,
  },
  quiz: [
    {
      kind: "multi",
      prompt: {
        ja: "動画生成AIならではの難しさとして正しいものをすべて選べ。",
        en: "Select all the challenges specific to video generation.",
      },
      choices: [
        { ja: "コマ間で人物やモノの形の一貫性を保つこと", en: "Keeping people and objects consistent across frames" },
        { ja: "静止画より大きい計算コスト", en: "Higher compute cost than still images" },
        { ja: "文章を一切使わずに生成する必要があること", en: "Having to generate without using any text at all" },
      ],
      correctIndexes: [0, 1],
      explanation: {
        ja: "時間的な一貫性と計算コストの大きさが動画生成特有の難しさです。多くのツールはテキストからの生成に対応しています。",
        en: "Temporal consistency and higher compute cost are challenges specific to video. Most tools do support text-based generation.",
      },
    },
  ],
  sources: [
    { label: "Google DeepMind: Veo", url: "https://deepmind.google/models/veo/" },
    { label: "Runway: Introducing Runway Gen-4.5", url: "https://runway.com/research/introducing-runway-gen-4.5" },
    {
      label: "OpenAI Help Center: What to know about the Sora discontinuation",
      url: "https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation",
    },
    { label: "OpenAI Docs: Deprecations (Sora video models)", url: "https://developers.openai.com/api/docs/deprecations" },
    { label: "OpenAI Docs: Sora 2 model", url: "https://developers.openai.com/api/docs/models/sora-2" },
    { label: "Wikipedia: Sora (text-to-video model)", url: "https://en.wikipedia.org/wiki/Sora_(text-to-video_model)" },
    {
      label: "TechCrunch: Why OpenAI really shut down Sora (2026-03-29)",
      url: "https://techcrunch.com/2026/03/29/why-openai-really-shut-down-sora/",
    },
  ],
  lastVerified: "2026-10-20",
};
