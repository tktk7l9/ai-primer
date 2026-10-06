import type { Lesson } from "@/engine/content/types";

export const dartmouth: Lesson = {
  id: "history-01",
  slug: "dartmouth-conference",
  title: {
    ja: "ダートマス会議 — 「人工知能」誕生の夏",
    en: "The Dartmouth Conference: The Summer AI Was Named",
  },
  summary: {
    ja: "1956年、ある研究集会で「人工知能」という言葉が生まれた。",
    en: "In 1956, a single summer workshop gave the field of AI its name.",
  },
  body: {
    ja: `## 1956年、ニューハンプシャー州ダートマス

**人工知能（Artificial Intelligence, AI）**という言葉は、1956年に米ダートマス大学で開かれた研究集会「ダートマス夏季研究プロジェクト」で定着しました。この語は、会議に先立つ1955年の提案書で初めて使われたものです。

主催したのは **ジョン・マッカーシー**（この語の提唱者）、**マービン・ミンスキー**、ベル研究所の**クロード・シャノン**、IBMの**ナサニエル・ロチェスター**の4人です。集まった研究者たちは「学習や知能のあらゆる側面は、原理的には機械で精密に記述し模倣できる」という前提のもと、数週間にわたり議論しました。

この会議は今日「AIの誕生地」と呼ばれ、ただし当時の参加者たちの見通しは楽観的すぎ、実際の技術がそれに追いつくまでには何十年もかかることになります。`,
    en: `## Summer 1956, Dartmouth College, New Hampshire

The term **artificial intelligence (AI)** took hold at the **Dartmouth Summer Research Project on Artificial Intelligence**, a workshop held at Dartmouth College in 1956. The term itself first appeared in the 1955 proposal for that workshop.

It was organized by **John McCarthy** (who coined the term), **Marvin Minsky**, **Claude Shannon** (Bell Labs), and **Nathaniel Rochester** (IBM). The researchers who gathered spent several weeks working from the premise that "every aspect of learning or intelligence can in principle be so precisely described that a machine can be made to simulate it."

The conference is now widely called the "birthplace of AI." The attendees' expectations, however, were far ahead of the technology of the time — it would take decades for reality to catch up.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "「人工知能（AI）」という言葉を提唱したのは誰？",
        en: "Who coined the term \"artificial intelligence\" (AI)?",
      },
      choices: [
        { ja: "ジョン・マッカーシー", en: "John McCarthy" },
        { ja: "アラン・チューリング", en: "Alan Turing" },
        { ja: "ジェフリー・ヒントン", en: "Geoffrey Hinton" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "1956年のダートマス会議を主催したジョン・マッカーシーが「人工知能」という語を提唱しました。",
        en: "John McCarthy, one of the organizers of the 1956 Dartmouth conference, coined the term \"artificial intelligence.\"",
      },
    },
  ],
  sources: [
    { label: "Wikipedia: Dartmouth workshop", url: "https://en.wikipedia.org/wiki/Dartmouth_workshop" },
    {
      label: "Dartmouth: Artificial Intelligence (AI) Coined at Dartmouth",
      url: "https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth",
    },
  ],
  lastVerified: "2026-10-06",
};
