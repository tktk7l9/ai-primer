import type { Lesson } from "@/engine/content/types";

export const aiRules: Lesson = {
  id: "society-07",
  slug: "ai-rules",
  title: {
    ja: "AIのルール — 日本のAI法・AI事業者ガイドラインとEU AI Act",
    en: "The Rules for AI: Japan's AI Act, Its Business Guidelines, and the EU AI Act",
  },
  summary: {
    ja: "日本は推進を目的とする法律と法的拘束力のない指針、EUはリスクに応じた義務。個人や小さな事業者が押さえておきたい要点。",
    en: "Japan pairs a promotion-first law with non-binding guidelines; the EU sets obligations by level of risk. What individuals and small businesses should know.",
  },
  body: {
    ja: `## 法律で縛るか、指針で促すか

AIのルールの作り方には大きく2つあります。法律で義務を定める方法と、法的拘束力のない指針（**ソフトロー**）で自主的な取り組みを促す方法です。日本は後者を軸にし、EUは前者を軸にしています。

> **ご注意**: このレッスンは一般的な情報の紹介で、法的助言ではありません。具体的な事案は弁護士などの専門家に相談してください。

### 日本: AI法 — 目的は推進、罰則の規定はない
正式名称は「人工知能関連技術の研究開発及び活用の推進に関する法律」（令和7年法律第53号、略称「AI法」）です。2025年6月4日に公布・一部施行され、9月1日に全面施行されました。
- **推進のための法律**: 首相を本部長とする**人工知能戦略本部**を内閣に置き、政府が「**人工知能基本計画**」を定めます。
- **リスクへの目配り**: 基本理念は、不正な目的や不適切な方法で使われると、犯罪への利用・個人情報の漏えい・著作権の侵害などを助長するおそれがあるとして、透明性の確保などの施策を求めています。国は、権利利益の侵害が生じた事案を分析し、事業者などへの**指導・助言・情報の提供**を行います。
- **罰則の規定はない**: 違反を罰する規定は置かれていません。一方で、個人情報保護法や著作権法など既存の法律は、AIを使う場面でもこれまでどおり適用されます。
- **それぞれの責務**: AIを事業活動に活用する「活用事業者」は国や自治体の施策に協力しなければならないとされ、国民は、AIへの理解と関心を深め、施策に協力するよう**努める**ものとされています（努力義務）。

### 日本: AI事業者ガイドライン — 仕事でAIを使う人の指針
総務省と経済産業省の「**AI事業者ガイドライン**」は、2024年4月の第1.0版から改訂を重ね、2026年3月31日に第1.2版が公表されました。法的拘束力のないソフトローで、内容を随時更新する「Living Document」と位置づけられています。
- 対象は、事業活動でAIに関わる**AI開発者・AI提供者・AI利用者**です。事業活動以外でAIを使う個人は対象外ですが、一般の消費者にも参考になる情報を含むとしています。
- 共通の指針として、人間中心・安全性・公平性・プライバシー保護・セキュリティ確保・透明性・アカウンタビリティ・教育・リテラシー・公正競争確保・イノベーションの10項目を挙げています。
- **AI利用者**（事業活動でAIを使う事業者）には、たとえば次のことを求めています: 提供者が想定した範囲で使う／出力の精度とリスクを理解したうえで使う／個人情報や機密情報を不適切に入力しない／提供者のサービス規約を守る（仕事でAIを使うときの情報の扱いのレッスン参照）。

### EU: AI Act — リスクに応じた義務
EUのAI Act（AI規則）は、AIをリスクの大きさで分け、禁止・厳しい義務・透明性の義務・規制なし、と扱いを変える仕組みです。適用は段階的です。
- 2024年8月1日: 発効
- 2025年2月2日: 禁止されるAI（有害な操作・社会的スコアリングなど）と、AIリテラシーの規定が適用
- 2025年8月2日: 汎用AIモデルの提供者の義務が適用
- 2026年8月2日: 本格適用（チャットボットであることの表示などの**透明性の義務**を含む）
- 雇用・教育などの分野の**高リスクAI**の義務は、2026年7月27日に発効した改正（AIオムニバス）で延期され、2027年12月2日から適用（規制対象の製品に組み込まれるものは2028年8月2日から）

利用者として目にする変化は、主に透明性の義務です。チャットボットと話すときはAIだと知らされ、ディープフェイクや、公共の関心事を知らせる目的で公開されるAI生成の文章には、AIによるものだという表示が求められます（ディープフェイクのレッスン参照）。

対象範囲にも注意が必要です。EU域外の事業者でも、EU市場にAIを提供する場合や、AIの出力がEU域内で使われる場合は対象になりえます。一方、個人が純粋に私的な、職業外の活動でAIを使う場合には、利用者（deployer）としての義務は適用されません。

### 個人・小さな事業者にとっての要点
- 日本で個人的にAIを使う限り、AI法による罰則つきの新しい義務はありません。ただし、既存の法律（個人情報保護法・著作権法など）はこれまでどおり適用されます（日本の著作権法のレッスン参照）。
- 仕事でAIを使うなら、AI事業者ガイドラインの「AI利用者」向けの項目をチェックリストとして使えます。
- EUの人に向けてAIを組み込んだサービス（チャットボットなど）を提供するなら、AI Actの対象になりうるため、早めに専門家に確認しましょう。`,
    en: `## Binding law, or guidelines that encourage?

There are two broad ways to make rules for AI: write obligations into law, or encourage voluntary action through non-binding guidelines (**soft law**). Japan leans on the second; the EU leans on the first.

> **Please note**: this lesson is general information, not legal advice. For a specific situation, consult a lawyer or another qualified professional.

### Japan: the AI Act — built to promote, with no penalty provisions
Its full name is the Act on Promotion of Research and Development, and Utilization of AI-related Technology (Act No. 53 of 2025), known as the "AI Act." It was promulgated and partly took effect on June 4, 2025, and took full effect on September 1, 2025.
- **A law to promote AI**: it sets up an **Artificial Intelligence Strategy Headquarters** in the Cabinet, headed by the Prime Minister, and has the government adopt an **Artificial Intelligence Basic Plan**.
- **Attention to risk**: its basic principles note that AI used for improper purposes or in inappropriate ways may facilitate crime, leaks of personal information, copyright infringement, and other harms, and call for measures such as ensuring transparency. The national government analyzes cases where people's rights and interests were harmed and provides **guidance, advice, and information** to businesses and others.
- **No penalty provisions**: the Act contains no provisions punishing violations. Existing laws, such as the personal information protection law and copyright law, continue to apply when AI is used.
- **Responsibilities**: businesses that use AI in their business activities must cooperate with national and local government measures, while citizens are to **endeavor** to deepen their understanding of and interest in AI and to cooperate with those measures (a duty of effort).

### Japan: the AI Guidelines for Business — for people using AI at work
The "**AI Guidelines for Business**" from the Ministry of Internal Affairs and Communications and the Ministry of Economy, Trade and Industry were first published as version 1.0 in April 2024 and have been revised since; version 1.2 came out on March 31, 2026. They are non-binding soft law, positioned as a "Living Document" updated as things change.
- They cover the actors in business activities: **AI developers, AI providers, and AI business users**. People using AI outside business activities are out of scope, though the guidelines say they contain useful information for general consumers too.
- Their common guiding principles list ten items: human-centric, safety, fairness, privacy protection, ensuring security, transparency, accountability, education and literacy, ensuring fair competition, and innovation.
- **AI business users** (businesses using AI in their operations) are asked, for example, to: use AI within the scope the provider intended; understand the accuracy and risks of the output before relying on it; avoid inappropriately entering personal or confidential information; and follow the provider's terms of service (see the lesson on handling information at work).

### The EU: the AI Act — obligations scaled to risk
The EU's AI Act sorts AI by level of risk and treats each level differently: prohibited, strict obligations, transparency duties, or no rules. It applies in stages:
- August 1, 2024: enters into force
- February 2, 2025: prohibited practices (such as harmful manipulation and social scoring) and AI literacy obligations apply
- August 2, 2025: obligations for providers of general-purpose AI models apply
- August 2, 2026: becomes broadly applicable, including **transparency duties** such as telling people they are talking to a chatbot
- Obligations for **high-risk AI** in areas such as employment and education were postponed by an amendment (the "AI Omnibus") that entered into force on July 27, 2026; they apply from December 2, 2027 (and from August 2, 2028 for AI built into regulated products)

What you will notice as a user is mainly the transparency duties: you are told when you are talking to a chatbot, and deepfakes and AI-generated text published to inform the public on matters of public interest must be disclosed as AI-made (see the deepfakes lesson).

Scope matters too. Businesses outside the EU can be covered when they place AI on the EU market or when their AI's output is used in the EU. On the other hand, deployer obligations do not apply to individuals using AI in a purely personal, non-professional activity.

### Key points for individuals and small businesses
- If you use AI personally in Japan, the AI Act adds no new obligations backed by penalties — but existing laws, such as personal information and copyright law, still apply (see the lesson on Japanese copyright law).
- If you use AI at work, the "AI business user" items in the AI Guidelines for Business make a practical checklist.
- If you offer AI-powered services (such as a chatbot) to people in the EU, the AI Act may apply — check with a professional early.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "日本のAI法の説明として正しいものは？",
        en: "Which statement about Japan's AI Act is correct?",
      },
      choices: [
        {
          ja: "研究開発と活用の推進を目的とし、違反を罰する規定は置いていない",
          en: "It aims to promote research, development, and use, and has no provisions punishing violations",
        },
        {
          ja: "生成AIを使うには、国への事前の届け出を個人に義務づけている",
          en: "It requires individuals to notify the government before using generative AI",
        },
        {
          ja: "AIの生成物すべてに、個人が透かしを入れることを義務づけている",
          en: "It requires individuals to watermark everything they generate with AI",
        },
      ],
      correctIndex: 0,
      explanation: {
        ja: "AI法は推進を目的とする法律で、罰則の規定はありません。リスクへの対応は、国による指導・助言や情報提供、既存の法律の適用、ソフトローのガイドラインが担います。",
        en: "The AI Act is a promotion law with no penalty provisions. Risks are handled through government guidance, advice, and information, existing laws, and soft-law guidelines.",
      },
    },
    {
      kind: "order",
      prompt: {
        ja: "EU AI Actの規定が適用される順に並べよ。",
        en: "Put the EU AI Act's provisions in the order they apply.",
      },
      items: [
        { ja: "発効", en: "Entry into force" },
        { ja: "禁止されるAIとAIリテラシーの規定", en: "Prohibited practices and AI literacy obligations" },
        { ja: "汎用AIモデルの提供者の義務", en: "Obligations for providers of general-purpose AI models" },
        { ja: "チャットボットであることの表示などの透明性の義務", en: "Transparency duties such as chatbot disclosure" },
        { ja: "雇用・教育などの分野の高リスクAIの義務", en: "High-risk AI obligations in areas such as employment and education" },
      ],
      explanation: {
        ja: "2024年8月の発効 → 2025年2月 → 2025年8月 → 2026年8月 → 2027年12月（改正で延期）の順です。",
        en: "Entry into force in August 2024 → February 2025 → August 2025 → August 2026 → December 2027 (postponed by an amendment).",
      },
    },
  ],
  sources: [
    {
      label: "e-Gov法令検索: 人工知能関連技術の研究開発及び活用の推進に関する法律（AI法）",
      url: "https://laws.e-gov.go.jp/law/507AC0000000053",
    },
    {
      label: "総務省: AI事業者ガイドライン",
      url: "https://www.soumu.go.jp/main_sosiki/kenkyu/ai_network/02ryutsu20_04000019.html",
    },
    { label: "European Commission: AI Act", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" },
    { label: "AI Act Service Desk: Article 2 (Scope)", url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-2" },
  ],
  lastVerified: "2026-10-07",
  glossaryRefs: ["ai-promotion-act", "ai-guidelines-for-business", "eu-ai-act"],
};
