import type { Lesson } from "@/engine/content/types";

export const imageGenerationPractice: Lesson = {
  id: "generative-media-02",
  slug: "image-generation-practice",
  title: {
    ja: "画像生成の実践 — 狙った絵に近づけるコツ",
    en: "Practical Image Generation: Getting Closer to What You Want",
  },
  summary: {
    ja: "文章での指示に加え、構図・スタイル・反復の工夫で仕上がりが変わる。",
    en: "Beyond the text prompt, composition, style cues, and iteration all shape the result.",
  },
  body: {
    ja: `## テキストだけでなく、複数の手がかりを使う

画像生成AIをうまく使うには、プロンプト術トラックで扱った「具体性」の考え方に加え、画像ならではの工夫が役立ちます。

### プロンプトの工夫
- **被写体・構図・スタイル・雰囲気**を分けて書く（例: 「夕暮れの港町、俯瞰、水彩画風、ノスタルジックな雰囲気」）。
- 参考にしたい画風や技法を具体的に挙げる（画家名・写真の種類・アート運動名など）。
- 「〜ではない」という否定形の指示は伝わりにくいことがあるため、欲しいものを積極的に書く方が安定しやすい。

### 反復して近づける
- 一発で完璧を狙わず、生成結果を見てプロンプトを調整する（プロンプト術トラックの「反復改善」と同じ考え方）。
- 参考画像を追加でアップロードし、構図やスタイルの手がかりにできるツールも多い。
- 気に入った部分だけを再生成したり、特定の領域だけを描き直す機能（インペインティング）を使うと、部分的な修正がしやすい。

### 品質を左右するその他の要素
解像度・アスペクト比の指定、複数案を生成して選ぶ、といった基本操作も仕上がりに影響します。ツールごとに使える機能が異なるため、各サービスの公式ガイドを確認するのが近道です。`,
    en: `## Use more than just the text

Getting good results from image generation builds on the "be concrete" idea from the Prompting track, plus a few image-specific tricks.

### Prompt techniques
- Separate **subject, composition, style, and mood** in your description (e.g., "a harbor town at dusk, aerial view, watercolor style, nostalgic mood").
- Reference specific styles or techniques you want (an artist's name, a photography genre, an art movement).
- Negative instructions ("not X") can be less reliable — describing what you *do* want tends to work better.

### Iterate toward what you want
- Don't expect perfection in one shot — look at the result and adjust the prompt (the same "iteration" idea from the Prompting track).
- Many tools let you upload a reference image to guide composition or style.
- Regenerating just a portion of the image (inpainting) lets you fix specific parts without starting over.

### Other factors that affect quality
Resolution and aspect-ratio settings, and generating multiple candidates to choose from, also shape the result. Available features vary by tool, so checking each service's official guide is the fastest path to good results.`,
  },
  quiz: [
    {
      kind: "boolean",
      prompt: {
        ja: "画像生成では、否定形（「〜ではない」）の指示より、欲しいものを積極的に書く方が伝わりやすいことが多い。",
        en: "In image generation, describing what you want positively tends to work better than negative instructions.",
      },
      answer: true,
      explanation: {
        ja: "否定形は伝わりにくいことがあるため、欲しい要素を具体的に書く方が安定しやすいとされています。",
        en: "Negative phrasing can be unreliable, so stating what you actually want tends to give more consistent results.",
      },
    },
  ],
  sources: [
    {
      label: "Scale AI: Diffusion Models: A Practical Guide",
      url: "https://scale.com/guides/diffusion-models-guide",
    },
  ],
  lastVerified: "2026-07-15",
};
