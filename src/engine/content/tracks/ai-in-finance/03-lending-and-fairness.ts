import type { Lesson } from "@/engine/content/types";

export const lendingAndFairness: Lesson = {
  id: "ai-in-finance-03",
  slug: "lending-and-fairness",
  title: {
    ja: "融資の審査とAI — 説明できるか、偏りはないか",
    en: "Loan Screening and AI: Can It Be Explained, and Is It Fair?",
  },
  summary: {
    ja: "融資の審査で貸し倒れを予測するAIや、稟議書の下書きを作る生成AIが使われ始めている。金融庁は、複雑なAIの判断を説明する難しさと、学習データの偏りが特定の顧客を不公平に扱うリスクを指摘している。現場の工夫と、残る課題。",
    en: "AI that predicts defaults in loan screening, and generative AI that drafts loan approval documents, are coming into use. Japan's Financial Services Agency points to how hard it is to explain complex AI decisions and to the risk that skewed training data treats some customers unfairly. What firms are doing, and what remains unsolved.",
  },
  body: {
    ja: `## 審査のどこにAIが入っているか
- 日本銀行の調査（2025年度）では、従来型のAIを融資の審査（貸し倒れの予測など）に使っている金融機関は30先でした（前回は28先）。
- 生成AIを審査そのもの（与信審査・信用リスク管理）に使っている先は、利用中2先・試行中6先とまだ少数です。一方、融資稟議書の作成に使う先は、利用中9先・試行中16先と広がり始めています。
- 金融庁も、従来型のAIの主な使い道として、与信審査・信用リスク管理・引受審査を挙げています。

## 「なぜその結果なのか」 — 説明可能性
金融庁は、生成AIのような複雑なAIでは、個々の推論について「なぜその回答になったのか」を示すのが難しいとしています。
- **課題の例**: AIが推奨した営業先のリストを営業店に示しても、なぜ推奨されるのかが分からないと、使われなくなってしまう。
- **工夫の例**: 営業先のリストに、判定の根拠を示す列を加えて納得してもらう。外部の事業者のAIモデル評価ツールを使う。
- **考え方**: 完全な説明可能性を確保するのは難しいため、使い道に応じて、顧客や社員など関係する人の納得感を確保することが大切。

## 偏りのない判断か — 公平性とバイアス
金融庁は、AIの学習データやアルゴリズム、推論の結果に偏りがあると、特定の属性を持つ顧客や社員が不公平に扱われるリスクが高まると指摘しています。学習データが足りない場合などには、モデルが学習の段階で偏りを強めてしまう危険もあるといいます。外部のバイアス検出ツールを使う例はあるものの、具体的な評価指標や監査の手順は必ずしも明確ではなく、偏りを早く見つけて対処する一貫した枠組みが求められるとしています。

偏りがどこから生まれるかは、[AIのバイアスと公平性](/ja/learn/ai-and-society/bias-and-fairness)のレッスンで扱っています。

## 読むときの注意
- **「AIが審査」の中身を確かめる**: 貸し倒れを予測するのか、稟議書の下書きを作るのかで、AIの役割は大きく違います。
- **人に大きな影響を与える判断**: 融資は、採用や評価と並んで、人に大きな影響を与える判断の一つです。AIの出力をそのまま結論にしない考え方は、上のバイアスのレッスンでも扱っています。
- **少数でも見過ごさない**: 生成AIを審査に使う先はまだ少数ですが、使い道が広がるほど、説明と公平性の確かめ方が問われます。`,
    en: `## Where AI enters screening
- In the Bank of Japan's fiscal 2025 survey, 30 financial institutions were using conventional AI for loan screening (predicting defaults and the like), up from 28 previously.
- Few use generative AI for screening itself (credit screening and credit risk management): 2 institutions using it and 6 trialing. Its use for drafting loan approval documents, though, is starting to spread, with 9 using it and 16 trialing.
- The Financial Services Agency (FSA) also lists credit screening, credit risk management, and underwriting among the main uses of conventional AI.

## "Why that result?": explainability
The FSA says that with complex AI such as generative AI, it is hard to show "why it gave that answer" for any individual inference.
- **An example of the problem**: if AI gives a branch a list of recommended sales prospects, staff stop using it when they cannot tell why the prospects were recommended.
- **Examples of what firms do**: adding a column showing the grounds for each judgment to the list to win people's acceptance; using outside vendors' tools for evaluating AI models.
- **The approach**: because full explainability is hard to achieve, it matters to secure the acceptance of the people involved — customers, staff, and others — in a way that fits the use.

## Is the judgment free of bias? Fairness
The FSA points out that bias in AI's training data, algorithms, or inference results raises the risk that customers or staff with certain attributes are treated unfairly. When training data is scarce, for example, a model may even strengthen bias during training. Some firms use outside bias-detection tools, but concrete evaluation metrics and audit procedures are not always clear, and the FSA says a consistent framework for detecting and dealing with bias early is needed.

Where bias comes from is covered in the [bias and fairness in AI](/en/learn/ai-and-society/bias-and-fairness) lesson.

## Reading the claims
- **Check what "AI screened it" means**: Predicting defaults and drafting approval documents are very different roles for AI.
- **Decisions with big effects on people**: Lending, like hiring and evaluations, is one of the decisions that greatly affect people. The idea of not taking AI output as the conclusion as is also appears in the bias lesson above.
- **Few now, but worth watching**: Few institutions use generative AI for screening yet, but the wider its use, the more explanation and fairness checks will matter.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "日本銀行の調査で、生成AIの使い道として広がり始めていたのは？",
        en: "In the BOJ survey, which use of generative AI was starting to spread?",
      },
      choices: [
        {
          ja: "融資稟議書の作成（利用中9先・試行中16先）",
          en: "Drafting loan approval documents (9 using, 16 trialing)",
        },
        { ja: "AIだけで融資を決めること", en: "Deciding loans with AI alone" },
        { ja: "アルゴリズム取引", en: "Algorithmic trading" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "審査そのもの（与信審査・信用リスク管理）への利用は、利用中2先・試行中6先とまだ少数でした。",
        en: "Use for screening itself (credit screening and credit risk management) was still rare: 2 using and 6 trialing.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "金融庁が挙げる、説明可能性が足りないと起きる課題の例は？",
        en: "What example does the FSA give of a problem caused by a lack of explainability?",
      },
      choices: [
        {
          ja: "AIが推奨した営業先のリストの理由が分からず、使われなくなる",
          en: "Staff stop using an AI-recommended list of sales prospects because they cannot tell why it recommends them",
        },
        { ja: "AIの計算が遅くなる", en: "The AI's calculations slow down" },
        { ja: "コンピューターの電気代が増える", en: "Computers use more electricity" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "判定の根拠を示す列を加えるなどの工夫で、使う人の納得感を確保する例が挙げられています。",
        en: "One response cited is adding a column showing the grounds for each judgment, so the people using it can accept it.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "金融庁は、学習データが足りない場合などに、モデルが学習の段階で偏りを強めてしまう危険があるとしている。",
        en: "The FSA says that when training data is scarce, for example, a model may strengthen bias during training.",
      },
      answer: true,
      explanation: {
        ja: "偏りは特定の属性を持つ顧客や社員の不公平な扱いにつながりうるため、早く見つけて対処する枠組みが求められるとしています。",
        en: "Because bias can lead to unfair treatment of customers or staff with certain attributes, the FSA calls for a framework to detect and address it early.",
      },
    },
  ],
  sources: [
    {
      label: "日本銀行: 金融機関における生成AIの利用状況とリスク管理 ―2025年度アンケート調査結果から―（2025年9月）",
      url: "https://www.boj.or.jp/research/brp/fsr/data/fsrb250930.pdf",
    },
    {
      label: "金融庁: AIディスカッションペーパー（第1.0版）～金融分野におけるAIの健全な利活用の促進に向けた初期的な論点整理～（2025年3月）",
      url: "https://www.fsa.go.jp/news/r6/sonota/20250304/aidp_summary.pdf",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["explainability", "algorithmic-bias"],
};
