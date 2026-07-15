import type { Lesson } from "@/engine/content/types";

export const videoGeneration: Lesson = {
  id: "generative-media-03",
  slug: "video-generation",
  title: {
    ja: "動画生成 — Sora・Veoなど",
    en: "Video Generation: Sora, Veo, and Others",
  },
  summary: {
    ja: "文章から動画を生成する技術は急速に進化しており、提供形態の変化も速い。",
    en: "Text-to-video is advancing fast — and so is how these tools are packaged and offered.",
  },
  body: {
    ja: `## 静止画の次は「時間」を生成する

画像生成の技術（前のレッスン参照）を土台に、時間軸に沿った一貫性（物体の動き・物理法則・音声との同期など）まで扱うのが動画生成AIです。

### 代表的なツール
- **Sora（OpenAI）**: 物理法則に沿ったリアルな動き、セリフや効果音を含む音声の同期生成などを特徴として打ち出してきたモデル。提供形態はサービスの統廃合により変わることがあるため、利用可否は都度公式情報で確認が必要です。
- **Veo（Google DeepMind）**: テキストや画像からの動画生成に加え、環境音・セリフなどの音声もあわせて生成できる点が特徴とされています。

### 動画生成ならではの難しさ
- **時間的な一貫性**: 前後のコマで人物やモノの形が変わってしまわないようにする必要がある。
- **物理法則の再現**: 重力・衝突・液体の動きなど、現実世界の物理的なもっともらしさ。
- **計算コスト**: 静止画より生成に必要な計算資源が大きく、生成時間も長くなりやすい。

**注意**: この分野は変化が非常に速く、サービスの提供終了・統合・新モデルの登場が頻繁に起きます。本サイトでは個別の提供状況を追いきれないため、利用の際は各社の公式サイトで最新の提供状況を確認してください。`,
    en: `## After stills: generating time itself

Building on image generation (previous lesson), video generation also has to handle consistency across time — object motion, physical plausibility, and audio synchronization.

### Notable tools
- **Sora (OpenAI)**: a model that has emphasized physically plausible motion and synchronized audio, including dialogue and sound effects. Exactly how it's offered has changed as OpenAI has consolidated its products, so check OpenAI's official site for current availability.
- **Veo (Google DeepMind)**: generates video from text or images, and is noted for also generating accompanying audio — ambient sound and dialogue.

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
    { label: "Google DeepMind: Veo 3.1", url: "https://deepmind.google/models/veo/" },
  ],
  lastVerified: "2026-07-15",
};
