import type { Lesson } from "@/engine/content/types";

export const localAndOpenModels: Lesson = {
  id: "chat-ais-06",
  slug: "local-and-open-models",
  title: {
    ja: "ローカルで動くAI — オープンウェイトモデル",
    en: "Running AI Locally: Open-Weight Models",
  },
  summary: {
    ja: "クラウドのチャットAI以外にも、手元のPCで動かせるモデルがある。何が手に入り、何を引き受けるのか。",
    en: "Beyond cloud chat AIs, there are models you can run on your own computer. What you gain, and what you take on.",
  },
  body: {
    ja: `## クラウドか、手元か

ここまでのレッスンで見たChatGPT・Claude・Gemini・Grokは、提供元のサーバーで動く**クラウド型**です。それとは別に、学習済みの**重み（パラメータ）そのものを配布**しているモデルがあり、**オープンウェイトモデル**と呼ばれます。ダウンロードして自分のPCやサーバーで動かすことができます。

### 代表例
- **Gemma**（Google）: 「オープンウェイトで提供され、責任ある商用利用を認める」モデルファミリー。
- **gpt-oss**（OpenAI）: 2025年8月に公開された、OpenAIとしてGPT-2以来のオープンウェイト推論モデル。Apache 2.0ライセンスで、小さい方はPC向けとされる。
- **DeepSeek-R1**（DeepSeek）: 2025年1月に公開され、本サイトの年表にも登場する推論モデル。
- **Stable Diffusion**（Stability AI）: 画像生成の分野で早くから公開された例（生成メディアトラック参照）。

手元で動かすには、**Ollama**・**LM Studio**・**llama.cpp** のようなツールを使うのが一般的で、インストールしてモデルを選ぶだけで試せます。

### 「オープンソース」と「オープンウェイト」は同じではない
重みが公開されていても、学習データや学習コードまで公開されているとは限りません。Open Source Initiative（OSI）の「オープンソースAIの定義 1.0」は、利用・研究・改変・共有の4つの自由に加え、**学習データに関する十分な情報・学習と実行のコード・パラメータ**の3点が揃って初めて「オープンソースAI」と呼べるとしています。この定義では、**重みだけの公開はオープンソースAIには当たりません**。ニュースで「オープンソースのモデル」と書かれていても、実際には重みだけ、ライセンスに利用制限あり、ということはよくあります。

### 何が手に入り、何を引き受けるか
**利点**
- データが手元の端末から出ない（仕事での情報の扱いのレッスン参照）。
- トークンごとの従量課金がなく、オフラインでも動く。
- 自分の用途向けにファインチューニングしやすい（AI基礎トラック参照）。

**引き受けるもの**
- メモリやGPUなどの**ハードウェア**。大きなモデルほど要求が高い。
- 一般に、最新のクラウドモデルより**性能は一歩後ろ**になりやすい。
- 安全対策・更新・バックアップを**自分で管理**する。

### 向いている場面
機密データを外に出せない、通信環境が不安定、大量処理で従量課金が重い、仕組みを学びたい——こうした条件があるときに、ローカルモデルは現実的な選択肢になります。逆に、最高性能が必要で手元の機材が貧弱なら、クラウド型の方が素直です。`,
    en: `## In the cloud, or on your machine

The ChatGPT, Claude, Gemini, and Grok covered so far run on their providers' servers — they are **cloud** services. Separately, some models **distribute their trained weights (parameters)** directly. These are **open-weight models**: you can download them and run them on your own PC or server.

### Representative examples
- **Gemma** (Google): a model family "provided with open weights" that permits responsible commercial use.
- **gpt-oss** (OpenAI): released in August 2025, OpenAI's first open-weight reasoning models since GPT-2, under the Apache 2.0 license, with the smaller one aimed at consumer hardware.
- **DeepSeek-R1** (DeepSeek): the reasoning model released in January 2025 that appears in this site's timeline.
- **Stable Diffusion** (Stability AI): an early open release in image generation (see the Generative Media track).

To run them locally, people typically use tools like **Ollama**, **LM Studio**, or **llama.cpp** — install one, pick a model, and try it.

### "Open source" and "open weight" are not the same thing
Published weights don't mean the training data or training code were published. The Open Source Initiative's Open Source AI Definition 1.0 requires the four freedoms — use, study, modify, share — plus three things together: **sufficiently detailed information about the training data, the code used to train and run the system, and the parameters**. Under that definition, **weights alone do not make an AI open source**. News coverage often says "open-source model" when in fact only weights were released, sometimes under a license with usage restrictions.

### What you gain, what you take on
**Gains**
- Data never leaves your device (see the lesson on handling information at work).
- No per-token metering, and it works offline.
- Easier to fine-tune for your own purposes (see the AI Fundamentals track).

**What you take on**
- **Hardware** — memory and GPU; larger models demand more.
- Capability usually sits **a step behind** the latest cloud models.
- You manage safety measures, updates, and backups **yourself**.

### When it fits
Confidential data that can't leave the building, an unreliable connection, heavy volume where metering adds up, or wanting to learn how the pieces work — under conditions like these, a local model is a realistic choice. If you need top-end capability and have modest hardware, the cloud is the simpler path.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "OSIの「オープンソースAIの定義 1.0」で、重みの公開に加えて求められているものは？",
        en: "Under the OSI's Open Source AI Definition 1.0, what is required beyond publishing the weights?",
      },
      choices: [
        {
          ja: "学習データに関する十分な情報と、学習・実行に使うコード",
          en: "Sufficiently detailed information about the training data, plus the code used to train and run the system",
        },
        { ja: "無料のチャットアプリの提供", en: "A free chat app" },
        { ja: "GPUを1枚以上同梱すること", en: "Bundling at least one GPU" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "重みだけの公開は「オープンウェイト」であり、この定義の「オープンソースAI」には当たりません。",
        en: "Weights alone make a model \"open weight\" — not \"open source AI\" under this definition.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "モデルを自分のPC上で動かせば、入力したデータは手元の端末から出ない。",
        en: "If you run the model on your own PC, the data you enter never leaves your device.",
      },
      answer: true,
      explanation: {
        ja: "これがローカルモデルの最大の利点の一つで、代わりにハードウェアや管理の手間を自分で引き受けます。",
        en: "That's one of the main advantages of a local model; the trade-off is that you supply the hardware and the upkeep.",
      },
    },
  ],
  sources: [
    { label: "Open Source Initiative: The Open Source AI Definition 1.0", url: "https://opensource.org/ai/open-source-ai-definition" },
    { label: "OpenAI: Introducing gpt-oss", url: "https://openai.com/index/introducing-gpt-oss/" },
    { label: "Google AI for Developers: Gemma models overview", url: "https://ai.google.dev/gemma/docs/core" },
    { label: "Ollama Docs", url: "https://docs.ollama.com/" },
  ],
  lastVerified: "2026-10-06",
  glossaryRefs: ["open-weight", "llm", "fine-tuning"],
};
