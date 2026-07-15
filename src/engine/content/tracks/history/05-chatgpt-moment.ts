import type { Lesson } from "@/engine/content/types";

export const chatgptMoment: Lesson = {
  id: "history-05",
  slug: "chatgpt-moment",
  title: {
    ja: "ChatGPTモーメント — AIが一般に広がった日",
    en: "The ChatGPT Moment: When AI Went Mainstream",
  },
  summary: {
    ja: "2022年11月30日の公開から、史上最速で普及した消費者向けサービスになった。",
    en: "Released on Nov. 30, 2022, it became the fastest-adopted consumer product in history.",
  },
  body: {
    ja: `## 5日で100万ユーザー

OpenAI は **2022年11月30日**、GPT-3.5をベースにしたチャットサービス **ChatGPT** を無料の研究プレビューとして公開しました。

普及の速さは記録的で、公開から**5日で利用者100万人**、**2か月で月間利用者1億人**規模に達したとされ、史上最も急速に広まった消費者向けサービスの一つと言われています。

その後の主な展開:
- **2023年2月**: 有料プラン ChatGPT Plus を発表。
- **2023年3月**: より高性能な **GPT-4** を ChatGPT と Bing に投入。

ChatGPT以前もGPT-3（2020年、1,750億パラメータ）などのLLMは存在していましたが、**対話形式のチャットUI**として一般の生活者に届けたことが、それまで研究者やエンジニアの間の話題だったLLMを一気に日常語にした転換点でした。`,
    en: `## One million users in five days

On **November 30, 2022**, OpenAI released **ChatGPT**, a chat interface built on GPT-3.5, as a free research preview.

Its adoption speed was record-breaking: reportedly **one million users within five days**, and roughly **100 million monthly users within two months** — among the fastest-adopted consumer products in history.

Key milestones that followed:
- **February 2023**: OpenAI launched ChatGPT Plus, a paid tier.
- **March 2023**: The more capable **GPT-4** rolled out in ChatGPT and Bing.

LLMs existed before ChatGPT — GPT-3 (2020, 175 billion parameters) among them — but wrapping one in a **conversational chat interface** for ordinary users is what turned LLMs from a research-and-engineering topic into everyday vocabulary almost overnight.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "ChatGPTが一般公開されたのはいつ？",
        en: "When was ChatGPT publicly released?",
      },
      choices: [
        { ja: "2022年11月", en: "November 2022" },
        { ja: "2020年6月", en: "June 2020" },
        { ja: "2023年3月", en: "March 2023" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "2022年11月30日に無料の研究プレビューとして公開されました。2023年3月はGPT-4投入の時期です。",
        en: "It launched as a free research preview on November 30, 2022. March 2023 is when GPT-4 followed.",
      },
    },
  ],
  sources: [
    {
      label: "HISTORY: ChatGPT is released to the public",
      url: "https://www.history.com/this-day-in-history/november-30/chatgpt-released-openai",
    },
  ],
  lastVerified: "2026-07-15",
};
