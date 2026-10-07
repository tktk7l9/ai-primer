import type { Lesson } from "@/engine/content/types";

export const diffusionModelsInDepth: Lesson = {
  id: "understanding-ai-03",
  slug: "diffusion-models-in-depth",
  title: {
    ja: "画像生成をもっと深く — 文章が絵を導くしくみと、文字や手が苦手だった理由",
    en: "Image Generation in Depth: How Text Steers the Picture, and Why Lettering and Hands Were Hard",
  },
  summary: {
    ja: "拡散モデルは、文章を数字に変えるテキストエンコーダと注意機構を使って、ノイズの取り除き方を導く。圧縮した空間での生成、ガイダンスの強さ、文字や手が崩れやすかった理由、拡散モデル以外の方式まで、開発者の論文から学ぶ。",
    en: "Diffusion models steer how noise is removed using a text encoder and attention. Generating in a compressed space, guidance strength, why lettering and hands came out garbled, and generators that aren't diffusion models at all — from the developers' own papers.",
  },
  body: {
    ja: `## 文章は、ノイズの取り除き方をどう導くのか

拡散モデルがノイズから少しずつ絵を浮かび上がらせる流れは、[画像生成の仕組み](/ja/learn/generative-media/image-generation-mechanism)のレッスンで見ました。ここでは一歩進んで、「夕暮れの港町」という文章が絵の中身をどう決めているのか、そして文字や手がなぜ崩れやすかったのかを、開発者の論文から見ていきます。

### テキストエンコーダ — 文章を数字に変える
まず、プロンプトの文章を**テキストエンコーダ**が数字の並びに変えます。使う部品はモデルによって違います。SDXLの論文（2023年）によると、Stable Diffusionの初期の版（1.4／1.5）はCLIPと呼ばれる系統のエンコーダを1つ、SDXLは2つ使っています。OpenAIがDALL·E 3の論文で報告した実験のモデルは、T5というエンコーダを使っていました。

### クロスアテンション — 文章と絵の各部分を結びつける
ノイズを取り除くネットワークは、各段階で文章の数字を参照しながら、どこに何を描くかを決めていきます。その参照に使われるのが**クロスアテンション**です。[Attention](/ja/learn/how-llms-work/attention-intuition)と同じ考え方で、絵の各部分が文章のどこに注目するかを計算します。DALL·E 3の論文の実験モデルも、T5で変換した文章をこの方法で参照していました。

### 潜在拡散 — 圧縮した小さな空間で描く
画像を画素のまま扱う代わりに、いったん小さな**潜在表現**に圧縮し、その中でノイズを取り除いてから、最後に画像へ戻す方式があります。これが**潜在拡散モデル**で、SDXLもこの方式です。DALL·E 3の論文の実験では、縦横を8分の1に縮めるオートエンコーダを使い、256ピクセル四方の画像を32×32の大きさで扱っていました。扱う位置の数が64分の1になるぶん、計算を減らせます。

### ガイダンス — 文章の側へどれだけ寄せるか
**分類器なしガイダンス（classifier-free guidance）**は、2021年にワークショップで発表され、2022年に論文として公開された手法です。条件（文章など）を与えた予測と与えない予測を1つのモデルで学習しておき、生成するときに2つを組み合わせて、条件の側へ寄せる度合いを決めます。論文は、ガイダンスを、ほかの生成モデルでtemperatureを低くして生成するのと同じ趣旨の調整と位置づけ（LLMのtemperatureは[推論とtemperature](/ja/learn/how-llms-work/inference-temperature)を参照）、この手法で1枚ごとの質と多様性のバランスを取れると説明しています。

### 文字と手が苦手だった理由
- **文字**: DALL·E 3の論文（2023年）は、学習用の説明文に画像の中の目立つ文字を含めるようにしたことで文字を描けるようになったものの、文字が抜けたり余分に入ったりして当てにならないと述べています。原因の推測として、テキストエンコーダ（T5）は単語を丸ごと表すトークンとして受け取るため、それを絵の中の1文字1文字に対応させなければならない点を挙げ、1文字ずつ扱う言語モデルを使うことを今後の課題にしていました。SDXLの論文も、長く読める文字はまだ難しく、でたらめな文字が混じることがあると認めています。
- **手**: SDXLの論文は、手のように細かく複雑な構造が苦手だとし、理由の仮説として、手やそれに似た物は写真ごとに見え方のばらつきが非常に大きく、実際の立体の形や物理的な制約をモデルが読み取りにくいことを挙げています。
- **取り違え**: 同じ論文は、「青い帽子」と「赤い手袋」のはずのペンギンが青い手袋と赤い帽子で描かれた例を挙げ、原因の候補として、テキストエンコーダが文章の情報を1つのトークンに詰め込むよう学習されている点を挙げています。DALL·E 3の論文も、「左に」「下に」「後ろに」といった位置の指示は当てにならないとしています。

### 説明文を良くすると、指示に従いやすくなる
DALL·E 3の論文は、それまでの画像生成モデルが詳しい指示に従えず、単語を無視したり意味を取り違えたりするのは、学習に使った画像の説明文が雑で不正確だからではないか、という仮説を立てました。画像を詳しく説明する専用のモデルで学習データの説明文を書き直して学習させたところ、指示への従いやすさが確かに上がったと報告しています。DALL·E 3は、書き直した説明文を95%、元の説明文を5%混ぜて学習しました。

### 拡散モデルだけではない
OpenAIは2025年3月25日の文書で、ChatGPTに組み込んだ画像生成（4o image generation）は、拡散モデルだったDALL·Eと違い、**自己回帰モデル**だと説明しています。自己回帰とは、LLMが次のトークンを順に予測するのと同じように（[事前学習](/ja/learn/how-llms-work/pretraining)）、前に作った部分をもとに続きを順に作っていく方式です。同じ文書は画像に文字を確実に組み込めるとも書いていますが、これは開発元自身の説明です。

### 使うときに
- 方式を問わず、文字・指・物の位置関係は、使う前に拡大して確かめます。狙った絵に近づけるコツは[画像生成の実践](/ja/learn/generative-media/image-generation-practice)へ。
- 公開前の権利と表示は[権利とライセンス](/ja/learn/generative-media/rights-and-licensing)と[日本の著作権法とAI](/ja/learn/generative-media/copyright-in-japan)、本物かどうかの確かめ方は[ディープフェイクと来歴情報](/ja/learn/generative-media/deepfakes-and-provenance)へ。モデルの一覧は[モデルカタログ](/ja/models)にあります。`,
    en: `## How does the text steer the noise removal?

The [How Image Generation Works](/en/learn/generative-media/image-generation-mechanism) lesson showed how a diffusion model gradually brings a picture out of noise. This lesson goes a step further: how a phrase like "a harbor town at dusk" decides what ends up in the picture, and why lettering and hands so often came out garbled — drawing on the developers' own papers.

### Text encoder: turning the prompt into numbers
First, a **text encoder** turns the prompt into a list of numbers. Which encoder is used depends on the model. According to the SDXL paper (2023), the early versions of Stable Diffusion (1.4/1.5) used one encoder from the family known as CLIP, while SDXL uses two. The experimental models OpenAI reported in its DALL·E 3 paper used an encoder called T5.

### Cross-attention: linking the words to parts of the picture
At each step, the network that removes noise consults those numbers to decide what goes where. It does so with **cross-attention** — the same idea as [attention](/en/learn/how-llms-work/attention-intuition), with each part of the image working out which parts of the text to focus on. The experimental model in the DALL·E 3 paper, for example, read the T5-encoded text this way.

### Latent diffusion: drawing in a small, compressed space
Instead of working on the image's pixels directly, some models first compress the image into a small **latent representation**, remove noise there, and turn the result back into an image only at the end. This is a **latent diffusion model**, and SDXL is one. In the DALL·E 3 paper's experiments, an autoencoder shrank images by a factor of 8 in each direction, so a 256×256-pixel image was handled at 32×32. With one sixty-fourth as many positions to work on, the computation shrinks accordingly.

### Guidance: how hard to pull toward the text
**Classifier-free guidance** was presented at a workshop in 2021 and published as a paper in 2022. A single model learns to make predictions both with a condition (such as the text) and without one; when generating, the two predictions are combined to set how strongly the result is pulled toward the condition. The paper frames guidance as being in the same spirit as low-temperature sampling in other kinds of generative models (for temperature in LLMs, see [inference and temperature](/en/learn/how-llms-work/inference-temperature)) and says the method strikes a trade-off between the quality of each sample and diversity.

### Why lettering and hands were hard
- **Lettering**: the DALL·E 3 paper (2023) says that because its captioner was built to include prominent words found in images, DALL·E 3 can render text when prompted — but unreliably, with missing or extra characters. The authors suspected the T5 text encoder: it sees tokens that represent whole words and must map them to the letters in an image. They named character-level language models as a direction for future work. The SDXL paper likewise admits that long, legible text is still hard and that random characters sometimes appear.
- **Hands**: the SDXL paper says intricate structures such as human hands are a challenge, and offers a hypothesis: hands and similar objects appear with very high variance in photographs, which makes it hard for the model to extract their real 3D shape and physical limits.
- **Mix-ups**: the same paper shows a penguin that was supposed to wear a "blue hat" and "red gloves" but came out with blue gloves and a red hat, and suggests one possible cause: the text encoders are trained to compress all the information into a single token. The DALL·E 3 paper also calls position words such as "to the left of," "underneath," and "behind" unreliable.

### Better captions, better instruction following
The DALL·E 3 paper hypothesized that existing text-to-image models struggled to follow detailed descriptions — ignoring words or confusing the meaning of prompts — because the image captions in their training data were noisy and inaccurate. The authors trained a dedicated captioner, used it to rewrite the captions in the training data, and found that training on these descriptive captions reliably improved prompt following. DALL·E 3 was trained on a mix of 95% rewritten captions and 5% original ones.

### Not every image generator is a diffusion model
In a document dated March 25, 2025, OpenAI says that the image generation built into ChatGPT (4o image generation) is, unlike the diffusion-based DALL·E, an **autoregressive model**. Autoregressive means producing the output piece by piece, each new piece based on what came before — the way an LLM predicts the next token (see [pre-training](/en/learn/how-llms-work/pretraining)). The same document says it can reliably incorporate text into images, but that is the developer's own description.

### When you use it
- Whatever the method, zoom in to check lettering, fingers, and how objects are placed before you use an image. For tips on getting closer to what you want, see [practical image generation](/en/learn/generative-media/image-generation-practice).
- For rights and labeling before you publish, see [rights and licensing](/en/learn/generative-media/rights-and-licensing) and [Japanese copyright law and AI](/en/learn/generative-media/copyright-in-japan); for checking whether an image is real, see [deepfakes and provenance](/en/learn/generative-media/deepfakes-and-provenance). Models are listed in the [model catalog](/en/models).`,
  },
  quiz: [
    {
      kind: "multi",
      prompt: {
        ja: "画像生成の弱点の原因の候補として、このレッスンで紹介した論文が挙げたものをすべて選んでください。",
        en: "Which of these did the papers in this lesson put forward as possible causes of image generators' weak spots? Select all that apply.",
      },
      choices: [
        {
          ja: "手は、写真ごとの見え方のばらつきが非常に大きい",
          en: "Hands look very different from one photograph to the next",
        },
        {
          ja: "テキストエンコーダが、単語を丸ごと表すトークンとして受け取る",
          en: "The text encoder sees tokens that represent whole words",
        },
        {
          ja: "学習に使った画像の説明文が、雑で不正確だった",
          en: "The image captions in the training data were noisy and inaccurate",
        },
        {
          ja: "画像のファイルが大きすぎて、保存できなかった",
          en: "The image files were too large to save",
        },
      ],
      correctIndexes: [0, 1, 2],
      explanation: {
        ja: "SDXLの論文は手の見え方のばらつきを、DALL·E 3の論文は単語単位のトークンと雑な説明文を、原因の候補（仮説）として挙げています。いずれも開発者自身の推測で、確定した原因ではありません。",
        en: "The SDXL paper points to how much hands vary across photos, and the DALL·E 3 paper to word-level tokens and noisy captions — all offered by the developers as hypotheses, not proven causes.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "潜在拡散モデルの説明として正しいものは？",
        en: "Which statement correctly describes a latent diffusion model?",
      },
      choices: [
        {
          ja: "画像を小さな潜在表現に圧縮し、その中でノイズを取り除いてから画像に戻す",
          en: "It compresses the image into a small latent representation, removes noise there, and then turns it back into an image",
        },
        {
          ja: "プロンプトを1文字ずつ順に、対応する画像の部品に置き換えていく",
          en: "It replaces each character of the prompt, one by one, with a matching piece of an image",
        },
        {
          ja: "写真のデータベースから似た画像を探して貼り合わせる",
          en: "It searches a photo database for similar images and stitches them together",
        },
      ],
      correctIndex: 0,
      explanation: {
        ja: "潜在拡散モデルは、圧縮した小さな空間でノイズを取り除きます。DALL·E 3の論文の実験では、縦横8分の1に圧縮していました。",
        en: "A latent diffusion model removes noise in a small, compressed space. In the DALL·E 3 paper's experiments, images were compressed to one-eighth in each direction.",
      },
    },
  ],
  sources: [
    {
      label: "Betker et al. (OpenAI): Improving Image Generation with Better Captions (DALL·E 3, 2023)",
      url: "https://cdn.openai.com/papers/dall-e-3.pdf",
    },
    {
      label: "Podell et al.: SDXL: Improving Latent Diffusion Models for High-Resolution Image Synthesis (arXiv, 2023)",
      url: "https://arxiv.org/abs/2307.01952",
    },
    {
      label: "Ho & Salimans: Classifier-Free Diffusion Guidance (arXiv, 2022; NeurIPS 2021 Workshop)",
      url: "https://arxiv.org/abs/2207.12598",
    },
    {
      label: "OpenAI: Addendum to GPT-4o System Card: Native image generation (2025-03-25)",
      url: "https://cdn.openai.com/11998be9-5319-4302-bfbf-1167e093f1fb/Native_Image_Generation_System_Card.pdf",
    },
  ],
  lastVerified: "2026-10-07",
  glossaryRefs: ["diffusion-model", "text-encoder", "latent-diffusion", "classifier-free-guidance", "attention"],
};
