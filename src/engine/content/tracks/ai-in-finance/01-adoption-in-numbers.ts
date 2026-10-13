import type { Lesson } from "@/engine/content/types";

export const adoptionInNumbers: Lesson = {
  id: "ai-in-finance-01",
  slug: "adoption-in-numbers",
  title: {
    ja: "金融機関のAI活用 — 調査の数字で見る現状",
    en: "AI at Financial Institutions: The Current Picture in Survey Numbers",
  },
  summary: {
    ja: "銀行や証券会社、保険会社はAIを何に使っているのか。金融庁と日本銀行の調査では、チャットボットや書類の読み取り、不正の検知、融資の審査などで従来型のAIが、文書の要約や翻訳などで生成AIが広がっている。金融庁が言う「チャレンジしないリスク」とあわせて見る。",
    en: "What do banks, securities firms, and insurers use AI for? Surveys by Japan's Financial Services Agency and the Bank of Japan show conventional AI spreading in chatbots, document reading, fraud detection, and loan screening, and generative AI in summarizing and translating documents. We look at them alongside what the FSA calls the \"risk of not taking on the challenge.\"",
  },
  body: {
    ja: `## 2つの調査から
- **金融庁**: 2024年10月3日から11月15日にかけて、銀行、証券会社、保険会社など130社から回答を得た調査で、回答先の9割以上が、従来型のAIか生成AIをすでに使っていました（AIディスカッションペーパー、2025年3月）。
- **日本銀行**: 取引先の153の金融機関への調査（2025年9月公表、回収率100%）で、生成AIをすでに利用している先は約5割、試行中を含めると7割強、将来の試行・利用を検討している先を含めると9割強でした。従来型のAIは約7割が利用中か試行中で、大手行では9割でした。

## 何に使っているか
日本銀行の調査で、従来型のAIを利用中の金融機関の数（153先のうち）は次のとおりです。

| 用途 | 利用中の先 |
|---|---|
| 顧客応対と記録（チャットボットなど） | 64 |
| 書類のテキスト化（OCR） | 60 |
| 顧客ターゲット層の特定 | 55 |
| 不正取引の検知 | 33 |
| 融資の審査（貸し倒れの予測など） | 30 |
| 資産管理・運用（ロボアドバイザー） | 28 |

生成AIでは、文書の要約（利用中70先）、文書の校正・添削・評価（68先）、翻訳（68先）、報告書などの文書作成（50先）、規程などの情報検索（37先）が中心です。新しい使い道として、融資稟議書の作成（利用中9先、試行中16先）、マーケティング、コールセンター業務の支援なども出てきました。

## 金融庁の見方 — 「チャレンジしないリスク」
金融庁は、AIが将来、金融業務を支える中核的な技術の一つとして、金融サービスの提供のあり方や金融機関のビジネスモデルを抜本的に変えうるとしています。そのうえで、金融機関は、技術革新に取り残されて良質な金融サービスを提供できなくなる「チャレンジしないリスク」を強く意識すべき局面だとし、規制の適用関係を明確にするなどして後押しする方針です。

2025年6月から12月には「金融庁 AI官民フォーラム」を4回開き、その知見をもとに、2026年3月3日にディスカッションペーパーを第1.1版に改訂しました。

## 読むときの注意
- **数は「金融機関の数」**: 日本銀行の数字は、153先のうち何先が使っているかです。業務のどれだけをAIがこなしているかを示す数字ではありません。
- **生成AIはまず社内の仕事から**: 金融庁の調査では、生成AIの使い方は社内の業務効率化にとどまる先が多く、顧客に直接答える使い方は、ハルシネーションなどのリスクを考えてごく限られていました（[窓口とチャットのAI](/ja/learn/ai-in-finance/customer-facing-ai)のレッスン参照）。
- **変化が速い**: 金融庁の調査は2024年秋、日本銀行の調査は2025年度のものです。日本銀行の調査では、生成AIを利用中の先の割合が、前回（2024年度）の31.0%から50.3%に増えました。`,
    en: `## Two surveys
- **Financial Services Agency (FSA)**: In a survey that drew answers from 130 firms — banks, securities firms, insurers, and others — between October 3 and November 15, 2024, more than 90% of respondents were already using conventional AI or generative AI (AI Discussion Paper, March 2025).
- **Bank of Japan (BOJ)**: In a survey of 153 financial institutions it deals with (published September 2025, 100% response rate), about half were already using generative AI, over 70% including those trialing it, and over 90% including those considering future trials or use. About 70% were using or trialing conventional AI, rising to 90% among major banks.

## What they use it for
In the BOJ survey, the number of institutions (out of 153) using conventional AI for each purpose was:

| Purpose | Institutions using it |
|---|---|
| Customer interaction and records (chatbots, etc.) | 64 |
| Turning documents into text (OCR) | 60 |
| Identifying target customer segments | 55 |
| Detecting fraudulent transactions | 33 |
| Loan screening (predicting defaults, etc.) | 30 |
| Asset management (robo-advisors) | 28 |

Generative AI is used mainly for summarizing documents (70 institutions using it), proofreading, editing, and evaluating documents (68), translation (68), drafting reports and other documents (50), and searching internal rules (37). New uses are appearing too: drafting loan approval documents (9 using, 16 trialing), marketing, and supporting call center work.

## The FSA's view: the "risk of not taking on the challenge"
The FSA says AI may in future become one of the core technologies supporting financial business and fundamentally change how financial services are provided and how institutions do business. It argues that financial institutions should be keenly aware of the "risk of not taking on the challenge" — being left behind by innovation and becoming unable to provide good financial services — and plans to support them by, among other things, clarifying how regulations apply.

Between June and December 2025 it held four meetings of an "FSA AI Public-Private Forum," and on March 3, 2026 it revised its discussion paper to version 1.1 based on what was learned.

## Reading the numbers
- **They count institutions**: The BOJ figures show how many of the 153 institutions use AI for something, not how much of the work AI does.
- **Generative AI starts with internal work**: In the FSA survey, many firms used generative AI only to make internal work more efficient; uses in which AI answers customers directly were very limited because of risks such as hallucination (see the [AI at the counter and in chat](/en/learn/ai-in-finance/customer-facing-ai) lesson).
- **Things change fast**: The FSA survey dates from autumn 2024 and the BOJ survey from fiscal 2025. In the BOJ surveys, the share of institutions using generative AI rose from 31.0% in the previous round (fiscal 2024) to 50.3%.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "日本銀行の2025年度の調査で、生成AIをすでに利用していた金融機関はどのくらい？",
        en: "In the BOJ's fiscal 2025 survey, roughly what share of financial institutions were already using generative AI?",
      },
      choices: [
        { ja: "約5割（試行中を含めると7割強）", en: "About half (over 70% including trials)" },
        { ja: "約1割", en: "About 10%" },
        { ja: "ほぼすべて", en: "Nearly all of them" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "利用中が約5割、試行中を含めると7割強、将来の試行・利用を検討している先まで含めると9割強でした。",
        en: "About half were using it, over 70% including trials, and over 90% including those considering future trials or use.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "同じ調査で、従来型のAIを利用中の金融機関が最も多かった用途は？",
        en: "In the same survey, which use of conventional AI had the most institutions using it?",
      },
      choices: [
        { ja: "顧客応対と記録（チャットボットなど）", en: "Customer interaction and records (chatbots, etc.)" },
        { ja: "アルゴリズム取引", en: "Algorithmic trading" },
        { ja: "企業価値などの将来価値の予測", en: "Predicting future values such as company valuations" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "顧客応対と記録が64先で最も多く、OCR（60先）、顧客ターゲット層の特定（55先）と続きます。アルゴリズム取引は6先でした。",
        en: "Customer interaction and records led with 64 institutions, followed by OCR (60) and identifying target customers (55). Algorithmic trading had 6.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "金融庁は、金融機関が技術革新に取り残される「チャレンジしないリスク」を強く意識すべきだとしている。",
        en: "The FSA says financial institutions should be keenly aware of the \"risk of not taking on the challenge\" of being left behind by innovation.",
      },
      answer: true,
      explanation: {
        ja: "金融庁は、規制の適用関係の明確化などで健全なAIの活用を後押しする方針です。一方で、リスクの管理も求めています。",
        en: "The FSA plans to support sound AI use by clarifying how regulations apply, among other things, while also expecting risks to be managed.",
      },
    },
  ],
  sources: [
    {
      label: "金融庁: AIディスカッションペーパー（第1.0版）～金融分野におけるAIの健全な利活用の促進に向けた初期的な論点整理～（2025年3月）",
      url: "https://www.fsa.go.jp/news/r6/sonota/20250304/aidp_summary.pdf",
    },
    { label: "金融庁: AIディスカッションペーパー（第1.1版）の公表について（2026-03-03）", url: "https://www.fsa.go.jp/news/r7/sonota/20260303/aidp.html" },
    { label: "金融庁: 金融庁 AI官民フォーラム", url: "https://www.fsa.go.jp/singi/ai_forum/index.html" },
    {
      label: "日本銀行: 金融機関における生成AIの利用状況とリスク管理 ―2025年度アンケート調査結果から―（2025年9月）",
      url: "https://www.boj.or.jp/research/brp/fsr/data/fsrb250930.pdf",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["ocr", "hallucination"],
};
