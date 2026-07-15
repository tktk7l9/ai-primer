import type { Lesson } from "@/engine/content/types";

export const imageGenerationMechanism: Lesson = {
  id: "generative-media-01",
  slug: "image-generation-mechanism",
  title: {
    ja: "画像生成の仕組み — ノイズから絵を「彫り出す」",
    en: "How Image Generation Works: Sculpting an Image Out of Noise",
  },
  summary: {
    ja: "多くの画像生成AIは、ランダムなノイズを少しずつ整えて絵にする「拡散モデル」を使う。",
    en: "Many image generators use \"diffusion models\" — gradually refining random noise into a picture.",
  },
  body: {
    ja: `## ざらついたノイズから、少しずつ像を浮かび上がらせる

多くのAI画像生成ツール（Midjourney・Stable Diffusionなど）は、**拡散モデル（Diffusion Model）**という仕組みを使っています。

### 学習の段階
きれいな画像に少しずつノイズを加えて壊していき、モデルに「このノイズをどう取り除けば元の画像に近づくか」を学習させます。

### 生成の段階
真逆の手順を踏みます。**完全なランダムノイズ**から出発し、学習した「ノイズの取り除き方」を何段階も繰り返し適用することで、少しずつはっきりした画像に近づけていきます。プロンプト（文章）を手がかりに、どんな画像に近づけるべきかをガイドしながら進めます。

### イメージで捉えると
彫刻家が大理石の塊から少しずつ不要な部分を削り出して像を彫り出す作業に近いたとえがよく使われます。最初は何も見えないノイズの塊から、段階を踏むごとに輪郭がはっきりしていきます。

この仕組みを理解しておくと、次のレッスンで扱う「画像生成AIをうまく使うコツ」の理由も見えやすくなります。`,
    en: `## Gradually revealing a picture out of grainy noise

Many AI image tools (Midjourney, Stable Diffusion, and others) use a mechanism called a **diffusion model**.

### Training
A clean image is progressively corrupted with noise, and the model learns how to reverse each step of that corruption to get back closer to the original.

### Generation
The process runs in reverse. Starting from **pure random noise**, the model repeatedly applies what it learned about removing noise, step by step, gradually sharpening the result into a coherent image — guided along the way by a text prompt describing what it should become.

### A useful analogy
Think of a sculptor chipping away unnecessary marble from a block to reveal a figure. What starts as an undifferentiated block of noise gains clearer outlines with each step.

Understanding this mechanism makes the practical tips in the next lesson easier to see the reasoning behind.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "拡散モデルによる画像生成は、何から出発する？",
        en: "What does a diffusion model start from when generating an image?",
      },
      choices: [
        { ja: "完全なランダムノイズ", en: "Pure random noise" },
        { ja: "既存の写真データベースからの検索結果", en: "A search result from an existing photo database" },
        { ja: "ユーザーが描いた下絵", en: "A rough sketch drawn by the user" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "ランダムなノイズから出発し、段階的にノイズを取り除きながら画像に近づけていきます。",
        en: "It starts from random noise and progressively removes it, step by step, until an image emerges.",
      },
    },
  ],
  sources: [
    {
      label: "Britannica: Diffusion model",
      url: "https://www.britannica.com/technology/diffusion-model",
    },
  ],
  lastVerified: "2026-07-15",
};
