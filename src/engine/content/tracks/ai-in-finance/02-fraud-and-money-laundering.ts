import type { Lesson } from "@/engine/content/types";

export const fraudAndMoneyLaundering: Lesson = {
  id: "ai-in-finance-02",
  slug: "fraud-and-money-laundering",
  title: {
    ja: "不正とマネロンを見つけるAI — アラートの山に優先順位をつける",
    en: "AI That Spots Fraud and Money Laundering: Prioritizing a Mountain of Alerts",
  },
  summary: {
    ja: "銀行は取引を監視して、マネー・ローンダリングなどの疑わしい取引を見つける。検知のアラートは大量で、誤検知への対応も負担になる。銀行界が共同で始めたAIスコアリングのしくみと、生成AIで巧妙になる金融犯罪への金融庁の警告。",
    en: "Banks monitor transactions to find suspicious ones, such as money laundering. Alerts pile up, and dealing with false positives is a burden. How the AI scoring service the Japanese banking industry launched jointly works, and the FSA's warning about financial crime made more sophisticated by generative AI.",
  },
  body: {
    ja: `## マネロン対策と、大量のアラート
**マネー・ローンダリング**（資金洗浄）は、一般に、犯罪で得た収益の出所や本当の持ち主を分からなくして、捜査機関などによる発見や検挙を逃れようとする行為をいいます（警察庁）。金融機関は**取引モニタリング**などで疑わしい取引を見つけ、届出につなげています。

マネー・ローンダリング対策共同機構（全国銀行協会が100%出資し、2023年1月6日に設立）は、2021年8月30日に公表されたFATF（金融活動作業部会）の第4次対日審査報告書を受けて、マネロン等への堅確な対応が必要になり、取引モニタリングや取引フィルタリングの高度化・効率化が喫緊の課題になったと説明しています。とりわけ中小規模の金融機関では、単独での対応に限界があるといいます。

## 共同で使うAIスコアリング（2025年4月から）
同機構は2025年4月1日、AIスコアリングサービスの提供を始めました。
- 各金融機関の取引モニタリングシステムやネームスクリーニングシステムが検知したアラートについて、AIがリスクの度合いを評価し、結果を金融機関に返す。
- リスクの度合いとその根拠を出力し、大量のアラートやヒットの誤検知への対応を効率化する。スコアに応じて、確認する深さを変えられるようにする。
- 疑わしい取引の届出に関する判定業務の高度化などを支援する。

## 使い道は広がり、手口も巧妙に
- **検知への利用は増えている**: 日本銀行の調査（2025年度）では、従来型のAIを不正取引の検知に使っている金融機関は33先で、前回の22先から増えました。
- **生成AIは犯罪にも使われる**: 金融庁は、生成AIで自然な日本語の文面・音声・映像が作れるようになり、フィッシング詐欺などの手口が巧妙になっていると指摘しています。ディープフェイクで特定の人物になりすました偽の動画や音声による詐欺もしやすくなり、従来の本人確認の手続や認証システムでは実在の人物と見分けにくく、本人確認をすり抜ける可能性があるとしています。

## 読むときの注意
- **AIのスコアは優先順位づけ**: AIの評価は、どのアラートから、どこまで深く確認するかを決める材料です。届出の判定業務を支援するもので、見逃しと誤検知の両方を見る必要があります（[インフラ点検とAI](/ja/learn/ai-in-industry/infrastructure-inspection)のレッスンで、再現率と適合率の読み方を扱っています）。
- **個人が狙われる詐欺は別のレッスンで**: AIを使った詐欺の手口と相談先は[AIを使った詐欺](/ja/learn/ai-and-society/ai-scams)のレッスンで扱っています。`,
    en: `## Money laundering and a flood of alerts
**Money laundering** generally means hiding the origin or true owner of proceeds of crime so that investigators cannot find them or make arrests (Japan's National Police Agency). Financial institutions use **transaction monitoring** and other means to find suspicious transactions and report them.

The Cooperation Agency for Anti-Money Laundering (wholly owned by the Japanese Bankers Association and founded on January 6, 2023) explains that after the FATF (Financial Action Task Force) published its fourth mutual evaluation report on Japan on August 30, 2021, a firm response to money laundering became necessary, and upgrading and streamlining transaction monitoring and filtering became an urgent task. Smaller financial institutions in particular, it says, have limits to what they can do alone.

## Shared AI scoring (since April 2025)
On April 1, 2025, the agency began providing an AI scoring service.
- AI evaluates the degree of risk of alerts raised by each institution's transaction monitoring and name screening systems, and returns the results to the institution.
- It outputs the degree of risk and the grounds for it, making it more efficient to deal with large numbers of alerts and false-positive hits, and allowing the depth of checking to vary with the score.
- It supports and improves the work of deciding whether to report suspicious transactions.

## Wider use, more sophisticated crime
- **More use in detection**: In the Bank of Japan's fiscal 2025 survey, 33 institutions were using conventional AI to detect fraudulent transactions, up from 22 in the previous round.
- **Generative AI is used for crime too**: The FSA points out that generative AI can now produce natural Japanese text, voice, and video, making phishing and other scams more sophisticated. Deepfakes make it easier to commit fraud with fake videos or voices impersonating real people, and conventional identity verification procedures and authentication systems may struggle to tell them apart from real people, possibly letting them slip through.

## Reading the results
- **AI scores set priorities**: The AI's evaluation helps decide which alerts to check first and how deeply. It supports the work of deciding on reports, and both misses and false alarms need watching (the [infrastructure inspection and AI](/en/learn/ai-in-industry/infrastructure-inspection) lesson explains how to read recall and precision).
- **Scams aimed at individuals are covered elsewhere**: AI-enabled scams and where to get help are covered in the [AI-enabled scams](/en/learn/ai-and-society/ai-scams) lesson.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "マネー・ローンダリング対策共同機構のAIスコアリングサービスがすることは？",
        en: "What does the Cooperation Agency for Anti-Money Laundering's AI scoring service do?",
      },
      choices: [
        {
          ja: "各金融機関のシステムが検知したアラートのリスクの度合いをAIが評価し、根拠とともに返す",
          en: "AI evaluates the risk of alerts raised by each institution's systems and returns the results with their grounds",
        },
        { ja: "AIが自動で口座を凍結する", en: "AI freezes accounts automatically" },
        { ja: "AIが警察に直接届け出る", en: "AI reports directly to the police" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "評価は金融機関に返され、大量のアラートや誤検知への対応の効率化と、届出の判定業務の高度化を支援します。",
        en: "The results go back to the institutions, helping them handle large numbers of alerts and false positives and supporting their reporting decisions.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "共同のサービスにした理由として、同機構が挙げていることは？",
        en: "What reason does the agency give for offering a shared service?",
      },
      choices: [
        {
          ja: "中小規模の金融機関を中心に、単独での対応には限界があるから",
          en: "Smaller institutions in particular have limits to what they can do alone",
        },
        { ja: "AIは1社でしか使ってはいけない決まりがあるから", en: "Rules allow only one company to use AI" },
        { ja: "マネロン対策が不要になったから", en: "Anti-money laundering measures are no longer needed" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "FATFの対日審査を受けて対策の高度化・効率化が課題になる一方、単独での対応には限界があるため、業界横断で底上げをめざしています。",
        en: "After the FATF evaluation made upgrading measures urgent, and because institutions have limits alone, the service aims to raise the level across the industry.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "金融庁は、ディープフェイクによって、従来の本人確認の手続や認証をすり抜ける可能性があると指摘している。",
        en: "The FSA points out that deepfakes could slip through conventional identity verification procedures and authentication.",
      },
      answer: true,
      explanation: {
        ja: "生成AIで自然な文面・音声・映像が作れるようになり、実在の人物との見分けが難しくなっているためです。",
        en: "Generative AI now makes natural text, voice, and video, so fakes are harder to tell from real people.",
      },
    },
  ],
  sources: [
    { label: "警察庁 JAFIC: マネー・ローンダリング対策の沿革", url: "https://www.npa.go.jp/sosikihanzai/jafic/maneron/manetop.htm" },
    { label: "マネー・ローンダリング対策共同機構: AIスコアリングサービスとは", url: "https://www.caml.co.jp/ai.html" },
    {
      label: "マネー・ローンダリング対策共同機構: AIスコアリングサービスの提供開始について（2025-04-01）",
      url: "https://www.caml.co.jp/article/general/a111",
    },
    { label: "マネー・ローンダリング対策共同機構: 会社概要", url: "https://www.caml.co.jp/company/index.html" },
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
  glossaryRefs: ["aml-cft", "transaction-monitoring", "fatf", "false-positive", "deepfake"],
};
