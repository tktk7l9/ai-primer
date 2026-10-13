import type { Lesson } from "@/engine/content/types";

export const customerFacingAi: Lesson = {
  id: "ai-in-finance-04",
  slug: "customer-facing-ai",
  title: {
    ja: "窓口とチャットのAI — 顧客向けに使うときの工夫",
    en: "AI at the Counter and in Chat: Safeguards for Customer-Facing Use",
  },
  summary: {
    ja: "金融機関の生成AIは、まず社内の仕事で使われ、顧客に直接答える使い方はまだ限られている。金融庁は2026年3月、顧客向けに使うときのリスクを減らす工夫を、設計、説明、検証、ガバナンスの4つの局面に整理した。使う側として確かめたいことも。",
    en: "Financial institutions use generative AI mostly for internal work so far; uses in which it answers customers directly are still limited. In March 2026, Japan's Financial Services Agency organized ways to reduce the risks of customer-facing use into four phases: design, explanation, verification, and governance. Plus what to check as a customer.",
  },
  body: {
    ja: `## 顧客に直接答えるAIは、まだ限られている
金融庁は、生成AIの使い方を3つの型に分けています。

| 型 | 例 |
|---|---|
| ① 社内での利用（業務効率化など） | 文書の要約・翻訳、社内FAQなどの情報検索、システム開発 |
| ② 顧客向けサービスへの間接的な利用 | コールセンター業務の支援、稟議書や対外公表文書の下書き |
| ③ 顧客向けサービスへの直接の利用 | 現状では極めて限定的 |

金融庁の調査（2024年秋）では、①にとどまる先が多く、③はハルシネーションなどのリスクを考えてごく限られていました。一方で、今後、顧客向けのサービスでの活用を検討すると答えた先も半数以上ありました。なお従来型のAIでは、チャットボットなどの顧客応対と記録に使う金融機関が64先あります（日本銀行、2025年度）。

## 顧客向けに使うときの工夫 — 金融庁の整理（2026年3月）
ディスカッションペーパー第1.1版は、顧客向けのサービスでリスクを減らす取組みに「一定の共通的な目線が形成されつつある」として、4つの局面に整理しました。金融庁が、金融機関からの相談や照会に対応するときに参照するものです。
- **設計と事前検証**: RAGで回答の範囲を限る、回答内容をフィルタリングする。AIによる対応と人による対応を利用者が選べるようにする。事務的な手続からAIを使い始め、適用範囲を広げていく。
- **顧客への説明・注意喚起**: 生成AIによる回答であることや、誤りが含まれうることを知らせる。手続の途中で顧客の理解を確かめ、確認できなければ先に進めない。回答の根拠・情報源を示す。いつでもAIから人の対応に移れるようにする。
- **検証・モニタリング**: 会話のログを保存して回答を見直し、必要なら顧客にフォローアップする。AIが偏った勧誘などをしていないかを客観的な数字で確かめる。推奨のロジックを文書にし、第三者がレビューする。
- **ガバナンス**: 経営陣を含む全社的な体制を整え、現場の職員までリテラシーを高める。用途に応じたリスクベースの対応をとる。

## 誤りとどう向き合うか
- **金融庁**: 生成AIが誤った情報を示したり、信用リスクや法的リスクに直結する回答を誤って作ったりすれば、金融機関の信頼を損なうおそれがあるとしています。取組みの例は、人が関わることを前提にした業務の流れ（Human in the loop）や、根拠となる文書を回答に含める工夫です。同時に、「AIは絶対に誤ってはならない」という高い水準を課すのは適切ではないとも考えられるとし、過度に萎縮せずに活用を探ることを期待しています。
- **日本銀行**: 顧客向けのサービスに生成AIを使うには、生成AI特有のリスクや外部の事業者の管理、利用者への説明責任といった課題をクリアする必要があるとしています。AIエージェントの想定外の動作によるトラブルなど、新しい技術で生じうるリスクにも注意が要るといいます。

## 使う側として確かめたいこと
ここからは、このコースからの提案です。
- AIによる回答だと示されているか、人の担当者に代われるかを見る。
- 大事な手続や商品の説明は、示された根拠や公式の書面で確かめる。お金の相談でAIを使うときの注意は、[お金の相談でAIを使うとき](/ja/learn/ai-in-daily-life/money-questions)のレッスンで扱っています。`,
    en: `## AI that answers customers directly is still limited
Japan's Financial Services Agency (FSA) sorts uses of generative AI into three types:

| Type | Examples |
|---|---|
| (1) Internal use (efficiency and the like) | Summarizing and translating documents, searching internal FAQs and other information, system development |
| (2) Indirect use in customer services | Supporting call center work, drafting approval documents and public statements |
| (3) Direct use in customer services | Very limited at present |

In the FSA's survey (autumn 2024), many firms had not gone beyond type (1), and type (3) was very limited because of risks such as hallucination. On the other hand, more than half said they would consider using it in customer services in future. As for conventional AI, 64 institutions use it for customer interaction and records, such as chatbots (Bank of Japan, fiscal 2025).

## Safeguards for customer-facing use: the FSA's framework (March 2026)
Version 1.1 of the FSA's discussion paper says "a certain common view is taking shape" on reducing the risks of customer-facing services, and organizes it into four phases, which the FSA refers to when responding to institutions' questions.
- **Design and advance testing**: limit the scope of answers with RAG and filter the content of answers; let users choose between AI service and human service; start using AI with routine procedures and widen its scope from there.
- **Explanation and warnings to customers**: tell customers that answers come from generative AI and may contain errors; check customers' understanding during a procedure and do not let them proceed unless it is confirmed; show the grounds and sources of answers; let customers switch from AI to a person at any time.
- **Verification and monitoring**: keep conversation logs to review answers, following up with customers when needed; check with objective numbers whether the AI is, for example, making biased sales pitches; document the recommendation logic and have third parties review it.
- **Governance**: build a company-wide structure including senior management and raise literacy down to front-line staff; take a risk-based approach suited to each use.

## Dealing with errors
- **The FSA**: If generative AI gives wrong information, or wrongly produces answers that bear directly on credit or legal risk, it could damage trust in the institution. Examples of responses are work processes that assume human involvement (human in the loop) and including source documents in answers. At the same time, the FSA says demanding that "AI must never be wrong" may not be appropriate, and hopes firms will explore its use without being overly timid.
- **The Bank of Japan**: To use generative AI in customer services, institutions must deal with risks specific to generative AI, management of outside vendors, and accountability to users. New risks from new technology, such as trouble caused by unexpected behavior of AI agents, also need attention.

## What to check as a customer
What follows is this course's own advice.
- See whether answers are labeled as coming from AI, and whether you can switch to a human.
- For important procedures or product explanations, check the grounds given and the official documents. Cautions for asking AI about money are covered in the [asking AI about money](/en/learn/ai-in-daily-life/money-questions) lesson.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "金融庁の調査（2024年秋）で、生成AIが顧客に直接答える使い方はどうだった？",
        en: "In the FSA's survey (autumn 2024), how common was generative AI answering customers directly?",
      },
      choices: [
        {
          ja: "ハルシネーションなどのリスクを考えて、ごく限られていた",
          en: "Very limited, because of risks such as hallucination",
        },
        { ja: "ほとんどの金融機関がすでに使っていた", en: "Most institutions were already doing it" },
        { ja: "法律で禁止されていた", en: "It was prohibited by law" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "社内での利用にとどまる先が多い一方、今後の顧客向けの活用を検討すると答えた先も半数以上ありました。",
        en: "Many stayed with internal use, but more than half said they would consider customer-facing use in future.",
      },
    },
    {
      kind: "multi",
      prompt: {
        ja: "第1.1版が挙げる「顧客への説明・注意喚起」の工夫をすべて選んで。",
        en: "Select all the \"explanation and warnings to customers\" practices listed in version 1.1.",
      },
      choices: [
        {
          ja: "生成AIによる回答で、誤りが含まれうることを知らせる",
          en: "Telling customers answers come from generative AI and may contain errors",
        },
        { ja: "回答の根拠・情報源を示す", en: "Showing the grounds and sources of answers" },
        { ja: "いつでもAIから人の対応に移れるようにする", en: "Letting customers switch from AI to a person at any time" },
        { ja: "AIだと分からないように、人のふりをさせる", en: "Having the AI pretend to be a person so customers cannot tell" },
      ],
      correctIndexes: [0, 1, 2],
      explanation: {
        ja: "ほかに、手続の途中で顧客の理解を確かめ、確認できなければ先に進めない工夫も挙げられています。",
        en: "Another is checking customers' understanding during a procedure and not letting them proceed unless it is confirmed.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "金融庁は、「AIは絶対に誤ってはならない」という高い水準をAIに課すのは適切ではないとも考えられるとしている。",
        en: "The FSA says demanding that \"AI must never be wrong\" may not be appropriate.",
      },
      answer: true,
      explanation: {
        ja: "そのうえで、人が関わる業務の流れや根拠の提示などで誤りに備え、過度に萎縮せずに活用を探ることを期待しています。",
        en: "It expects firms to guard against errors with human involvement and by showing sources, while exploring use without being overly timid.",
      },
    },
  ],
  sources: [
    {
      label: "金融庁: AIディスカッションペーパー（第1.0版）～金融分野におけるAIの健全な利活用の促進に向けた初期的な論点整理～（2025年3月）",
      url: "https://www.fsa.go.jp/news/r6/sonota/20250304/aidp_summary.pdf",
    },
    {
      label: "金融庁: AIディスカッションペーパー第1.1版 改訂の概要（2026年3月）",
      url: "https://www.fsa.go.jp/news/r7/sonota/20260303/aidp_version1.1_summary.pdf",
    },
    {
      label: "日本銀行: 金融機関における生成AIの利用状況とリスク管理 ―2025年度アンケート調査結果から―（2025年9月）",
      url: "https://www.boj.or.jp/research/brp/fsr/data/fsrb250930.pdf",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["rag", "human-in-the-loop", "hallucination"],
};
