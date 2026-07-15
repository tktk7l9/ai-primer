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

**人工知能（Artificial Intelligence, AI）**という言葉は、1956年に米ダートマス大学で開かれた研究集会「ダートマス夏季研究プロジェクト」で初めて公に使われました。

主催したのは **ジョン・マッカーシー**（この語の提唱者）、**マービン・ミンスキー**、そしてIBMの**クロード・シャノン**・**ネイサン・ロチェスター**の4人です。集まった研究者たちは「学習や知能のあらゆる側面は、原理的には機械で精密に記述し模倣できる」という前提のもと、数週間にわたり議論しました。

この会議は今日「AIの誕生地」と呼ばれ、以降しばらく続く楽観的な期間は「AIの最初の夏」とも表現されます。ただし当時の参加者たちの見通しは楽観的すぎ、実際の技術がそれに追いつくまでには何十年もかかることになります。`,
    en: `## Summer 1956, Dartmouth College, New Hampshire

The term **artificial intelligence (AI)** was first used publicly at the **Dartmouth Summer Research Project on Artificial Intelligence**, a workshop held at Dartmouth College in 1956.

It was organized by **John McCarthy** (who coined the term), **Marvin Minsky**, and IBM's **Claude Shannon** and **Nathan Rochester**. The researchers who gathered spent several weeks working from the premise that "every aspect of learning or intelligence can in principle be so precisely described that a machine can be made to simulate it."

The conference is now widely called the "birthplace of AI," and the optimistic period that followed is sometimes referred to as AI's "first summer." The attendees' expectations, however, were far ahead of the technology of the time — it would take decades for reality to catch up.`,
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
    {
      label: "Dartmouth: Artificial Intelligence (AI) Coined at Dartmouth",
      url: "https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth",
    },
  ],
  lastVerified: "2026-07-15",
};
