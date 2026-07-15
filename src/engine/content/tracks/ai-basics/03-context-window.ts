import type { Lesson } from "@/engine/content/types";

export const contextWindow: Lesson = {
  id: "ai-basics-03",
  slug: "context-window",
  title: {
    ja: "コンテキストウィンドウ — AIの「記憶」の範囲",
    en: "The Context Window: How Much an AI Can \"Remember\"",
  },
  summary: {
    ja: "一度に読み書きできるトークン数の上限が、会話の続けやすさを左右する。",
    en: "The token limit an AI can read and write at once shapes how long a conversation can stay coherent.",
  },
  body: {
    ja: `## 「一度に見えている範囲」

**コンテキストウィンドウ**とは、LLMが1回のやり取りで同時に処理できるトークンの最大数のことです。ここには入力（これまでの会話・添付ファイルなど）と出力（生成される返答）の両方が含まれます。

- ウィンドウの外にある情報は、要約されたり改めて提示されない限りモデルには「見えません」。
- サイズはモデルごとに大きく異なります。2026年時点で数万〜数百万トークンまで、モデルによって幅があります。
- ウィンドウが大きいほど長文書類の一括処理や長い会話の継続がしやすくなりますが、関係ない情報が混ざると回答の精度が落ちることもあります（いわゆる「干し草の中の針」問題）。

会話が長くなると古いやり取りがウィンドウから押し出され、モデルが以前の内容を「忘れた」ように見えることがあります。これはモデルの記憶力の問題ではなく、ウィンドウという物理的な制約によるものです。`,
    en: `## The slice of text an AI can "see" at once

The **context window** is the maximum number of tokens an LLM can process in a single interaction — including both the input (the conversation so far, attached files, etc.) and the output it generates.

- Anything outside the window is invisible to the model unless it's summarized or re-supplied.
- Sizes vary widely by model — as of 2026, anywhere from tens of thousands to millions of tokens depending on the system.
- A larger window helps with long documents and extended conversations, but stuffing in irrelevant text can still hurt accuracy (the "needle in a haystack" problem).

As a conversation grows, older turns can get pushed out of the window, making the model seem to "forget" earlier context. That's not a memory failure — it's a hard limit of the window itself.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "コンテキストウィンドウに含まれるものは？",
        en: "What does the context window include?",
      },
      choices: [
        { ja: "入力と出力の両方のトークン", en: "Both input and output tokens" },
        { ja: "モデルの学習データ全体", en: "The model's entire training dataset" },
        { ja: "ユーザーのアカウント情報", en: "The user's account information" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "コンテキストウィンドウは、これまでの会話などの入力と、生成される出力を合わせたトークン数の上限です。",
        en: "The context window is the token budget shared by the input (conversation so far) and the output being generated.",
      },
    },
  ],
  sources: [
    { label: "IBM: What is a context window?", url: "https://www.ibm.com/think/topics/context-window" },
  ],
  lastVerified: "2026-07-15",
  glossaryRefs: ["token", "context-window"],
};
