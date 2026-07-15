import type { Lesson } from "@/engine/content/types";

export const aiWinter: Lesson = {
  id: "history-02",
  slug: "ai-winter",
  title: {
    ja: "AIの冬 — 期待が萎んだ2つの時代",
    en: "The AI Winters: When the Hype Froze Over",
  },
  summary: {
    ja: "1970年代と1980年代、資金と期待が急速に冷え込んだ時期があった。",
    en: "Twice — in the 1970s and again in the 1980s — funding and enthusiasm for AI collapsed.",
  },
  body: {
    ja: `## 期待が現実に追いつけなかった時代

**AIの冬**とは、AI研究への資金と関心が大きく落ち込んだ時期を指す言葉です。歴史上、代表的に2回の冬がありました。

### 第一次AIの冬（1970年代）
1973年に英国で発表された **ライトヒル・レポート** が、多額の資金を投じたにもかかわらず目標に届いていないとAI研究を厳しく批判しました。影響は大きく、英国が資金を大幅に削減すると、米国・欧州でも同様の削減が続きました。米DARPAのAI研究予算は1970年代初頭の年間約3,000万ドルから1974年にはほぼゼロまで落ち込みました。

### 第二次AIの冬（1980年代後半）
1980年代前半には、特定分野の専門知識をルール化した**エキスパートシステム**が商業的に成功し、1982年開始の日本の「第五世代コンピュータ」計画（8億5,000万ドル規模）も資金を集めました。しかし1980年代後半、エキスパートシステムが期待されたほど汎用的でないことが明らかになり、専用ハードウェア市場も崩壊、再び冬の時代へ入りました。

**教訓**: 過度な期待とその反動という同じパターンが繰り返されてきたことは、現在の生成AIブームを考える上でも参考になります。`,
    en: `## When expectations outran reality

An **AI winter** is a period of sharply reduced funding and interest in AI research. History records two major ones.

### The first AI winter (1970s)
In 1973, the UK's **Lighthill Report** sharply criticized AI research for failing to meet its ambitious goals despite substantial funding. The impact was swift: the UK slashed AI funding, and similar cuts followed in the US and Europe. US DARPA funding for AI dropped from roughly $30 million a year in the early 1970s to almost nothing by 1974.

### The second AI winter (late 1980s)
In the early 1980s, **expert systems** — which encoded specialist knowledge as rules — found commercial success, and Japan's Fifth Generation Computer Systems project (launched 1982, backed by $850 million) drew fresh investment. But by the late 1980s, expert systems turned out to be far less general-purpose than promised, the specialized hardware market collapsed, and the field entered a second winter.

**The lesson**: this cycle of hype followed by retrenchment has repeated before — worth keeping in mind when thinking about today's generative-AI boom.`,
  },
  quiz: [
    {
      kind: "boolean",
      prompt: {
        ja: "第一次AIの冬のきっかけの一つは、英国でのライトヒル・レポートによる批判だった。",
        en: "One trigger of the first AI winter was the Lighthill Report's criticism of AI research in the UK.",
      },
      answer: true,
      explanation: {
        ja: "1973年のライトヒル・レポートを受けて英国が資金を大幅削減し、米欧にも波及しました。",
        en: "Following the 1973 Lighthill Report, the UK sharply cut funding, and similar cuts spread to the US and Europe.",
      },
    },
  ],
  sources: [
    { label: "Wikipedia: AI winter", url: "https://en.wikipedia.org/wiki/AI_winter" },
  ],
  lastVerified: "2026-07-15",
};
