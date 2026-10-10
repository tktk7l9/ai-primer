import type { Lesson } from "@/engine/content/types";

export const makingImages: Lesson = {
  id: "creating-with-ai-02",
  slug: "making-images",
  title: {
    ja: "画像を作る — 参考画像と作風、サービスの決まり、AIで作ったことの示し方",
    en: "Making Images with AI: References, Style, What Services Allow, and How to Label",
  },
  summary: {
    ja: "プロンプトの基本は生成メディアのレッスンに任せ、ここでは参考画像を渡すときの注意、作風をまねることと自分の作風を学習させることの違い、各社の利用ポリシーが禁じていること、来歴情報と記録の残し方を扱う。",
    en: "Prompt basics live in the generative-media track; here we cover handing over reference images, the difference between imitating a style and training on your own work, what vendors' use policies forbid, and how to keep provenance and records.",
  },
  body: {
    ja: `## 「描ける」の先にある4つの確認

被写体・構図・スタイルを分けて書く、否定形より欲しいものを書く、反復して近づける——プロンプトの基本は[画像生成の実践](/ja/learn/generative-media/image-generation-practice)のレッスンで扱いました。仕組みは[画像生成の仕組み](/ja/learn/generative-media/image-generation-mechanism)と[画像生成をもっと深く](/ja/learn/understanding-ai/diffusion-models-in-depth)のレッスンにあります。このレッスンでは、趣味で画像を作って人に見せるときに、描けること以外に確かめたい点をまとめます。

> **ご注意**: 権利に関する記述は一般的な情報で、法的助言ではありません。具体的な事案は弁護士などの専門家に相談してください。

### 1. 参考画像を渡すとき
多くのツールは、参考画像を渡してその要素を取り込んだ新しい画像を作ったり、画像の一部だけを描き直したり（インペインティング）できます。渡す画像の出どころで、確かめることが変わります。
- **自分で撮った写真・描いた絵**: 自由に使えます。自分の作風を保つのに最も確実な材料です。
- **他人の作品**: 文化庁の「AIと著作権に関するチェックリスト&ガイダンス」（2024年7月31日）は、既存の画像を入力してそれに似たものを作らせる目的なら、権利者の許諾が必要になる場合があるとしています（[資料・画像づくり](/ja/learn/ai-at-work/slides-and-images)のレッスン参照）。
- **人の写真**: 本人の同意を取ります。実在の人物に似せた画像には、著作権とは別にパブリシティ権などの問題があります（同レッスン参照）。

### 2. 作風をまねることと、自分の作風を学習させること
文化庁の「考え方」は、作風はアイデアにとどまると考えれば作風が共通すること自体は著作権侵害にならないとしつつ、特定のクリエイターの少数の作品群は作風だけでなく創作的表現まで共通している場合もあると注意しています（[日本の著作権法とAI](/ja/learn/generative-media/copyright-in-japan)のレッスン参照）。作家名を挙げて「そっくりに」と指示する使い方は、似すぎた生成物を生みやすく、依拠性も認められやすくなります。公開先によっては、特定の第三者の作風を無断で繰り返し模倣する行為そのものを禁止しているところもあります（[作品を公開するとき](/ja/learn/creating-with-ai/publishing-your-work)のレッスン参照）。

一方で、**自分の過去作**を追加学習させ、自分の作風を安定して出す使い方があります。よく使われるのが**LoRA**（Low-Rank Adaptation）です。2021年に提案されたこの手法は、学習済みモデルの重みを固定したまま、各層に小さな追加の行列だけを差し込んで学習するので、学習するパラメータの数を大きく減らせます。個人の環境でも扱える大きさで「自分専用の調整」を作れるのはこのためです。学習に使う画像がすべて自分のものなら、他人の権利の問題は起きません。他人の作品で学習させる場合は、その作品の創作的表現を意図的に出力させる目的の学習は著作権法第30条の4の対象外になりうること（同レッスン参照）を思い出してください。

### 3. サービスの利用ポリシーが禁じていること
画像生成サービスには、料金や権利を定める利用規約とは別に、「何に使ってはいけないか」を定めた利用ポリシーがあります。2026年10月時点の例です。
- **Googleの生成AI禁止用途ポリシー**（2024年12月17日改定）: 欺く目的で、明示的な開示なしに（存命か故人かを問わず）個人になりすますこと、欺く目的で生成物を「人間だけが作った」と出所を偽ること、性的に露骨なコンテンツ、プライバシーや知的財産権を含む他者の権利の侵害、同意のない性的な画像などを禁じています。教育・記録・科学・芸術上の考慮などから例外が認められる場合があるとも書いています。
- **Stability AIの利用規定**（2026年9月30日更新）: 同意や法的な権利のないなりすまし、知的財産権やプライバシー権を含む他者の権利の侵害、同意のない性的な画像、そして**生成物の性質について利用者を誤解させること**（人間が作ったふりをするなど）を禁じています。

二つに共通するのが「人間が作ったと偽らない」という項目です。公開先の表示のルール（[作品を公開するとき](/ja/learn/creating-with-ai/publishing-your-work)のレッスン参照）と合わせて、次の点につながります。

### 4. AIで作ったことを示す
- **来歴情報を残す**: 対応するツールが付けるコンテンツクレデンシャル（C2PA）や電子透かしは、消さずに残します。SNSや動画サイトは、この情報を読み取って自動的に表示を付けるようになっています（[ディープフェイクと来歴情報](/ja/learn/generative-media/deepfakes-and-provenance)のレッスン参照）。
- **記録を残す**: 使ったツール、プロンプト、設定（シード値など）、渡した参考画像とその出どころ、生成後に自分で加筆した部分。文化庁のチェックリストも、生成に使ったプロンプトなどを後から確かめられるようにしておくことを勧めています。
- **写真に見える画像は明示する**: 実在の場所や人物、出来事の写真に見える画像には、AIで作ったことを添えます。空想の絵には、公開先が求める設定（AI生成作品の設定など）で十分です。`,
    en: `## Four checks beyond "can it draw this?"

Separating subject, composition, and style; describing what you want rather than what you don't; iterating toward the result — prompt basics were covered in [practical image generation](/en/learn/generative-media/image-generation-practice). The mechanics are in [how image generation works](/en/learn/generative-media/image-generation-mechanism) and [a deeper look at image generation](/en/learn/understanding-ai/diffusion-models-in-depth). This lesson collects what to check, beyond the drawing itself, when you make images as a hobby and show them to others.

> **Please note**: the points about rights are general information, not legal advice. For a specific situation, consult a lawyer or another qualified professional.

### 1. When you hand over a reference image
Many tools let you provide reference images and generate a new image that incorporates their elements, or redraw just part of an image (inpainting). What you need to check depends on where the image came from.
- **Your own photos and drawings**: free to use, and the most reliable material for keeping your own style.
- **Someone else's work**: the Agency for Cultural Affairs' "Checklist & Guidance on AI and Copyright" (July 31, 2024) says that feeding in an existing image in order to produce something similar may require the rights holder's permission (see the lesson on [making slides and images](/en/learn/ai-at-work/slides-and-images)).
- **Photos of people**: get the person's consent. Images made to resemble a real person raise issues beyond copyright, such as the right of publicity (same lesson).

### 2. Imitating a style versus training on your own
The Agency's guidance treats a style as an idea, so sharing a style is not in itself copyright infringement — but it warns that a small body of works by one creator may share creative expression, not just a style (see [Japanese copyright law and AI](/en/learn/generative-media/copyright-in-japan)). Prompting "exactly like" a named artist makes over-similar output more likely and makes dependence easier to establish. Some platforms also prohibit repeatedly imitating a specific third party's style without consent as such (see [publishing your work](/en/learn/creating-with-ai/publishing-your-work)).

The other direction is training on **your own past work** so the model reproduces your style consistently. The common technique is **LoRA** (Low-Rank Adaptation). Proposed in 2021, it freezes the pre-trained model's weights and injects small trainable low-rank matrices into each layer, which greatly reduces the number of parameters that need training — that is why a personal "style adapter" is small enough to make on your own hardware. If every training image is yours, no one else's rights are involved. If you train on other people's works, remember that training intended to deliberately reproduce the creative expression of those works can fall outside Article 30-4 of the Copyright Act (same lesson).

### 3. What the services' use policies forbid
Besides the terms that set prices and rights, image services have use policies that say what you may not do with them. Two examples as of October 2026:
- **Google's Generative AI Prohibited Use Policy** (revised December 17, 2024) prohibits impersonating an individual, living or dead, without explicit disclosure in order to deceive; misrepresenting the provenance of generated content by claiming it was created solely by a human in order to deceive; sexually explicit content; violating others' rights, including privacy and intellectual property; and non-consensual intimate imagery. It notes that exceptions may apply for educational, documentary, scientific, or artistic reasons.
- **Stability AI's Acceptable Use Policy** (updated September 30, 2026) prohibits impersonation without consent or legal right; violations of others' rights, including intellectual property and privacy; non-consensual intimate imagery; and **misleading end users about the nature of outputs**, such as pretending something was made by a human.

The item both share is "don't pass it off as human-made." Together with the labeling rules of the places you publish (see [publishing your work](/en/learn/creating-with-ai/publishing-your-work)), that leads to the last check.

### 4. Showing that it was made with AI
- **Keep the provenance**: leave in place any Content Credentials (C2PA) or watermark that a supporting tool attaches. Social networks and video sites now read this information and add labels automatically (see [deepfakes and provenance](/en/learn/generative-media/deepfakes-and-provenance)).
- **Keep records**: the tool, the prompt, the settings (such as the seed), the reference images you supplied and where they came from, and what you changed afterwards by hand. The Agency's checklist likewise recommends keeping prompts so the generation process can be checked later.
- **Say so when it looks like a photograph**: if an image could pass for a photo of a real place, person, or event, say it was made with AI. For an obviously imaginary picture, the platform's own setting (such as an AI-generated flag) is enough.`,
  },
  quiz: [
    {
      kind: "multi",
      prompt: {
        ja: "画像生成サービスの利用ポリシー（GoogleとStability AI、2026年10月時点）が禁じているものをすべて選んでください。",
        en: "Which of the following do the image services' use policies (Google and Stability AI, as of October 2026) prohibit? Select all that apply.",
      },
      choices: [
        { ja: "欺く目的で、実在の人物になりすます画像を作ること", en: "Making images that impersonate a real person in order to deceive" },
        { ja: "生成した画像を「人間が描いた」と偽って示すこと", en: "Presenting a generated image as if a human had made it" },
        { ja: "「水彩画風」「浮世絵風」のように様式を指定すること", en: "Specifying a style such as \"watercolor\" or \"ukiyo-e\"" },
        { ja: "同意のない性的な画像を作ること", en: "Making non-consensual intimate imagery" },
      ],
      correctIndexes: [0, 1, 3],
      explanation: {
        ja: "どちらのポリシーも、欺く目的のなりすまし、人間が作ったと偽ること、同意のない性的な画像を禁じています。様式や技法を指定すること自体は禁止されていません（特定の作家に似せすぎることは、著作権や公開先の規約の問題になりえます）。",
        en: "Both policies prohibit deceptive impersonation, passing output off as human-made, and non-consensual intimate imagery. Specifying a style or technique is not prohibited in itself (getting too close to a particular artist can raise copyright and platform-rule issues).",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "自分の過去作だけを使ってLoRAを学習させ、自分の作風を安定して出すことは、他人の作品を学習させる場合と同じ権利上の問題を生む。",
        en: "Training a LoRA only on your own past work to reproduce your own style raises the same rights issues as training on other people's works.",
      },
      answer: false,
      explanation: {
        ja: "学習に使う画像がすべて自分のものなら、他人の権利の問題は起きません。問題になるのは他人の作品で学習させる場合で、特にその作品の創作的表現を意図的に出力させる目的の学習は、著作権法第30条の4の対象外になりえます。",
        en: "If every training image is your own, no one else's rights are involved. The issues arise when training on other people's works — especially training intended to deliberately reproduce their creative expression, which can fall outside Article 30-4 of Japan's Copyright Act.",
      },
    },
  ],
  sources: [
    {
      label: "Google: Generative AI Prohibited Use Policy（2024-12-17 改定）",
      url: "https://policies.google.com/terms/generative-ai/use-policy",
    },
    { label: "Stability AI: Acceptable Use Policy（2026-09-30 更新）", url: "https://stability.ai/use-policy" },
    {
      label: "文化庁: AIと著作権に関するチェックリスト&ガイダンス（2024年7月31日）",
      url: "https://www.bunka.go.jp/seisaku/chosakuken/pdf/94097701_01.pdf",
    },
    {
      label: "Hu et al. (2021): LoRA: Low-Rank Adaptation of Large Language Models (arXiv 2106.09685)",
      url: "https://arxiv.org/abs/2106.09685",
    },
  ],
  lastVerified: "2026-10-11",
  glossaryRefs: ["lora", "inpainting", "similarity-and-dependence", "right-of-publicity", "content-credentials", "article-30-4"],
};
