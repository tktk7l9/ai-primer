import type { Lesson } from "@/engine/content/types";

export const tokensAndJapanese: Lesson = {
  id: "ai-and-japanese-02",
  slug: "tokens-and-japanese",
  title: {
    ja: "トークンと日本語 — 同じ内容でも長さが変わる",
    en: "Tokens and Japanese: The Same Content, a Different Length",
  },
  summary: {
    ja: "AIは文章をトークンに分けて処理し、料金も一度に読める量もトークンで数える。同じ内容でも言語によってトークン数は大きく違い、日本語は英語より多くなりやすい。その理由と、日本語向けの工夫。",
    en: "AI processes text as tokens, and both prices and how much it can read at once are counted in tokens. The same content can take very different numbers of tokens in different languages, and Japanese tends to need more than English. Why, and how models are being adapted for Japanese.",
  },
  body: {
    ja: `## トークンの数は言語によって違う

LLMは、文章を**トークナイザー**で細かい単位（トークン）に分けてから処理します（[LLMとは](/ja/learn/ai-basics/what-is-llm)のレッスン参照）。APIの料金も、一度に読める量（[コンテキストウィンドウ](/ja/learn/ai-basics/context-window)）も、トークンで数えます。

2023年にNeurIPSで発表されたPetrovらの研究は、Wikipediaの同じ文を人が200の言語に訳したデータ（FLORES-200）を使い、言語ごとのトークン数を比べました。
- 同じ内容でも、言語によってトークン数は最大で15倍違った。
- 日本語のトークン数は、同じ内容の英語と比べて、GPT-2などのトークナイザーで3.00倍、ChatGPTとGPT-4が使うトークナイザー（cl100k_base）で2.30倍だった。
- cl100k_baseでも、漢字の65%超は1文字に3つのトークンを使う。GPT-2では「言」の1文字が3つのトークンだった。

研究チームは、この差が、商用サービスの料金、処理にかかる時間、モデルに渡せる文脈の量の3つで、一部の言語の利用者を不利にすると指摘しています。

### なぜ漢字1文字が3つのトークンになるのか
語彙にない文字を、文字の符号（UTF-8）のバイト単位に分けて表すトークナイザーがあります。日本語に強いモデルを作るSwallowの研究チームの論文は、Llamaのトークナイザーでは「猫」の1文字が \`<0xE7>\` \`<0x8C>\` \`<0xAB>\` という、それぞれは意味を持たない3つのトークンで表されることを例に挙げ、これが日本語の文章を長くし、文章を生成する費用も増やすと説明しています。

## 日本語向けの工夫 — 語彙を足す
語彙に日本語の文字や単語を足せば、日本語の文章を少ないトークンで表せます。これを**語彙拡張**と呼びます。Swallowの論文（2024年4月）は、英語中心に作られたLlama 2の語彙に日本語のサブワード（単語の断片）を11,176個足し（語彙は43,176に）、日本語の文章を追加で学習させました。
- 日本語のコーパス（学習用の文章の集まり）のトークン数が56.2%減り、日本語の文章を生成する効率は最大78%上がった。
- 語彙を足しても、要約を除いて、課題の成績は下がらなかった。

## 使う側にとっての意味
- **料金と一度に渡せる量**: 同じ内容でも、日本語は英語より多くのトークンを使うことがあり、そのぶん料金がかかり、一度に渡せる量も減ります。どれだけ増えるかは、モデルのトークナイザーによって違います。
- **モデルが変われば数え方も変わる**: Anthropicの文書（2026年10月時点）は、同社の新しいモデルは新しいトークナイザーを使うため、同じ文章でトークン数がおよそ30%多くなるとし、使う予定のモデルで数え直すよう勧めています。同社のAPIのように、送る前にトークン数を数えられる機能もあります。
- **長い文書は必要な部分だけ**: 長い日本語の文書を丸ごと渡すと、上限や料金に早く届きます。要る部分に絞ってから渡しましょう。`,
    en: `## Token counts differ by language

LLMs first split text into small units (tokens) using a **tokenizer**, and then process those (see [what an LLM is](/en/learn/ai-basics/what-is-llm)). API prices and how much a model can read at once (its [context window](/en/learn/ai-basics/context-window)) are both counted in tokens.

A study by Petrov and colleagues, presented at NeurIPS in 2023, compared token counts across languages using FLORES-200, a set of the same Wikipedia sentences translated by people into 200 languages:
- The same content took up to 15 times as many tokens in some languages as in others.
- Japanese took 3.00 times as many tokens as the same content in English with GPT-2 and similar tokenizers, and 2.30 times as many with cl100k_base, the tokenizer used by ChatGPT and GPT-4.
- Even with cl100k_base, more than 65% of kanji characters need three tokens each. With GPT-2, the single character 言 ("to say") took three tokens.

The researchers point out that these gaps put some language communities at a disadvantage in three ways: the cost of commercial services, processing time, and how much context can be given to a model.

### Why one kanji can become three tokens
Some tokenizers represent characters that are not in their vocabulary as the bytes of the character's encoding (UTF-8). The paper by the Swallow team, which builds models strong in Japanese, gives an example: with the Llama tokenizer, the single character 猫 ("cat") is represented by three tokens, \`<0xE7>\` \`<0x8C>\` \`<0xAB>\`, none of which carries meaning on its own. This, the paper explains, makes Japanese text longer and raises the cost of generating it.

## Adapting to Japanese: adding vocabulary
Adding Japanese characters and words to the vocabulary lets a model represent Japanese text with fewer tokens. This is called **vocabulary expansion**. The Swallow paper (April 2024) added 11,176 Japanese subwords (word fragments) to the vocabulary of Llama 2, which had been built mainly for English (bringing it to 43,176), and then trained the model further on Japanese text.
- The token count of the Japanese corpus (the collection of training text) fell by 56.2%, and the efficiency of generating Japanese text rose by up to 78%.
- Adding vocabulary did not lower task scores, except for summarization.

## What this means for users
- **Price and how much you can send at once**: the same content can take more tokens in Japanese than in English, which costs more and leaves less room. How many more depends on the model's tokenizer.
- **A new model can count differently**: Anthropic's documentation (as of October 2026) says the company's newer models use a new tokenizer that produces roughly 30% more tokens for the same text, and recommends recounting with the model you plan to use. Some APIs, such as Anthropic's, let you count tokens before you send a request.
- **Send only what you need from long documents**: passing a long Japanese document in full reaches limits and costs faster. Trim it to the parts that matter first.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "Petrovらの研究で、ChatGPTとGPT-4が使うトークナイザー（cl100k_base）では、日本語のトークン数は同じ内容の英語の何倍だった？",
        en: "In the study by Petrov and colleagues, how many times as many tokens did Japanese take as the same content in English with cl100k_base, the tokenizer used by ChatGPT and GPT-4?",
      },
      choices: [
        { ja: "2.30倍", en: "2.30 times" },
        { ja: "1.00倍（同じ）", en: "1.00 times (the same)" },
        { ja: "15倍", en: "15 times" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "日本語はcl100k_baseで2.30倍、GPT-2などのトークナイザーで3.00倍でした。15倍は、研究で見つかった言語間の差の最大値です。",
        en: "Japanese took 2.30 times as many tokens with cl100k_base and 3.00 times with GPT-2 and similar tokenizers. Fifteen times is the largest gap the study found between languages.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "Swallowの研究では、語彙に日本語のサブワードを足すと、日本語の文章のトークン数が減った。",
        en: "In the Swallow study, adding Japanese subwords to the vocabulary reduced the number of tokens for Japanese text.",
      },
      answer: true,
      explanation: {
        ja: "11,176個のサブワードを足したことで、日本語のコーパスのトークン数は56.2%減り、生成の効率は最大78%上がりました。",
        en: "Adding 11,176 subwords cut the token count of the Japanese corpus by 56.2% and raised generation efficiency by up to 78%.",
      },
    },
    {
      kind: "multi",
      prompt: {
        ja: "同じ内容でトークン数が多くなると起きることをすべて選んで。",
        en: "Select everything that happens when the same content takes more tokens.",
      },
      choices: [
        { ja: "トークン単位の料金が増える", en: "Per-token charges go up" },
        { ja: "一度にモデルへ渡せる内容が減る", en: "Less content fits into the model at once" },
        { ja: "処理に時間がかかる", en: "Processing takes longer" },
        { ja: "答えが必ず正確になる", en: "Answers become guaranteed to be accurate" },
      ],
      correctIndexes: [0, 1, 2],
      explanation: {
        ja: "Petrovらは、料金・処理時間・渡せる文脈の量の3つで不利になると指摘しています。トークン数は答えの正確さを保証しません。",
        en: "Petrov and colleagues point to three disadvantages: cost, processing time, and the amount of context. Token count says nothing that guarantees accuracy.",
      },
    },
  ],
  sources: [
    {
      label: "Petrov et al.: Language Model Tokenizers Introduce Unfairness Between Languages（NeurIPS 2023、arXiv:2305.15425）",
      url: "https://arxiv.org/pdf/2305.15425",
    },
    {
      label: "Fujii et al.: Continual Pre-Training for Cross-Lingual LLM Adaptation: Enhancing Japanese Language Capabilities（Swallow、arXiv:2404.17790）",
      url: "https://arxiv.org/pdf/2404.17790",
    },
    { label: "Anthropic: Token counting（Claude Platform Docs）", url: "https://platform.claude.com/docs/en/build-with-claude/token-counting" },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["token", "tokenizer", "tokenization-premium", "vocabulary-expansion", "context-window"],
};
