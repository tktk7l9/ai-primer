import type { Lesson } from "@/engine/content/types";

export const financialStability: Lesson = {
  id: "ai-in-finance-06",
  slug: "financial-stability",
  title: {
    ja: "金融システム全体への影響 — みんなが同じAIを使うと",
    en: "Effects on the Financial System as a Whole: When Everyone Uses the Same AI",
  },
  summary: {
    ja: "一つひとつの金融機関の工夫とは別に、AIは金融システム全体の弱点を増幅しうる。金融安定理事会（FSB）が2024年に挙げた4つの弱点、外部の事業者への依存と集中、市場の連動、サイバー、モデル・リスクと、当局の動き。",
    en: "Apart from what each institution does, AI could amplify weaknesses in the financial system as a whole. The four vulnerabilities the Financial Stability Board (FSB) highlighted in 2024 — dependence on and concentration of outside providers, market correlations, cyber, and model risk — and how authorities are responding.",
  },
  body: {
    ja: `## 金融システム全体という視点
**金融安定理事会**（FSB）は2024年11月14日、AIが金融システムの安定に与える影響についての報告書を公表し、G20に提出しました。AIには、業務の効率化、規制への対応、利用者に合わせた金融商品、高度なデータ分析などの利点がある一方、金融セクターの弱いところを増幅しうるとしています。システミック・リスク（金融システム全体に広がるリスク）を高めうるものとして挙げたのは、次の4つです。

| 弱点 | 中身 |
|---|---|
| 外部の事業者への依存と集中 | 専用のハードウェア、クラウド、事前学習済みのモデルへの依存が高まり、その市場は集中している。主要な提供者の障害が、金融機関の業務の弱点になりうる |
| 市場の連動 | 共通のAIモデルやデータが広く使われると、取引、融資、価格づけの動きが連動しやすくなる。市場のストレスや流動性の逼迫を増幅しうる |
| サイバー | 攻撃者がAIを使うことで、サイバー攻撃の頻度と影響が増しうる |
| モデル・リスク、データの質、ガバナンス | 一部のAIの複雑さや説明のしにくさ、学習データの出どころの不透明さ |

FSBはさらに、生成AIは金融詐欺や金融市場での偽情報の可能性を高めるとし、法律・規制・倫理の範囲で動くよう調整されていないAIが、金融の安定を害する振る舞いをするおそれにも触れています。

## みんなが同じAIを使うと何が起きるか
FSBは、共通のデータやモデルが使われる理由として、次の4つを挙げています。
- **群集行動**: 市場参加者が、ほかの参加者のデータやモデルの選び方をまねる。
- **ネットワーク外部性**: 利用者が多いほど外部のモデルの性能が上がりやすく、多くの参加者が同じモデルを使う動機になる。
- **選択肢の少なさ**: 必要な性能を満たすデータやモデルが少ない。
- **透明性の不足**: モデルの提供者が学習データの出どころを明かさないため、知らずにほかの参加者と同じデータに頼っていることがある。

そのうえで、似たAIを使った資産運用や売買の執行は、相場の変動を大きくし、下落局面での流動性の逼迫を悪化させ、フラッシュクラッシュの起きる確率を上げうるとしています。

## 当局の動き
- **監視と点検**: FSBは、各国の当局と国際機関に、AIの動向の監視を強め、今の政策の枠組みで足りるかを点検し、AIを使った道具も含めて規制・監督の能力を高めるよう求めました。
- **健全な実務の案**: FSBは2026年6月10日、金融機関がAIを責任をもって導入・利用するための「健全な実務」の案を公表し、意見を募りました。
- **金融庁**: AIディスカッションペーパーでも、FSBの報告書を引いて、外部の事業者への依存と特定の提供者への集中を、システミック・リスクを高めうる弱点として紹介しています。

## 読むときの注意
- **「起きうる」弱点の整理**: FSBが挙げたのは、リスクを高めうる弱点です。FSBは、AIの利用についてのデータが限られていることも、監視を強めるべき理由に挙げています。
- **個々の工夫と全体の視点**: [AIのリスクを管理する](/ja/learn/ai-in-finance/model-risk-and-governance)のレッスンで見た金融機関ごとの管理に加え、多くの機関が同じ提供者や同じモデルに頼ることで全体の偏りが生まれないかを見る視点が要ります。`,
    en: `## Looking at the system as a whole
On November 14, 2024, the **Financial Stability Board (FSB)** published a report on how AI affects financial stability and submitted it to the G20. AI brings benefits such as operational efficiency, regulatory compliance, financial products tailored to users, and advanced data analytics, the FSB says, but it could also amplify weak points in the financial sector. It highlighted four vulnerabilities with the potential to increase systemic risk (risk that spreads across the financial system):

| Vulnerability | What it means |
|---|---|
| Dependence on and concentration of outside providers | Reliance on specialized hardware, cloud services, and pre-trained models has grown, and their market is concentrated. Disruptions at key providers could become operational weak points for financial institutions |
| Market correlations | Widespread use of common AI models and data could make trading, lending, and pricing move together, amplifying market stress and liquidity crunches |
| Cyber | Attackers using AI could increase the frequency and impact of cyberattacks |
| Model risk, data quality, and governance | The complexity and limited explainability of some AI methods, and the opacity of training data sources |

The FSB adds that generative AI increases the potential for financial fraud and disinformation in financial markets, and notes that AI systems not calibrated to operate within legal, regulatory, and ethical boundaries could behave in ways that harm financial stability.

## What happens when everyone uses the same AI
The FSB gives four reasons common data and models might be used:
- **Herding**: market participants imitate others' choices of data and models.
- **Network externalities**: models from outside providers may perform better with more users, giving many participants a reason to use the same model.
- **Limited choice**: few data sources and models meet the required performance.
- **Lack of transparency**: model providers may not disclose their training data sources, so firms may unknowingly rely on the same data as others.

It concludes that correlated AI approaches in portfolio management and trading could amplify volatility, worsen liquidity crunches in downturns, and raise the probability of flash crashes.

## What authorities are doing
- **Monitoring and review**: The FSB called on national authorities and international bodies to step up monitoring of AI developments, assess whether current policy frameworks are adequate, and strengthen their regulatory and supervisory capabilities, including with AI-powered tools.
- **Draft sound practices**: On June 10, 2026, the FSB published proposed "sound practices" for financial institutions to adopt and use AI responsibly, and invited comments.
- **Japan's FSA**: Its AI discussion paper also cites the FSB report, presenting dependence on outside providers and concentration among particular providers as vulnerabilities that could increase systemic risk.

## Reading the report
- **Vulnerabilities that could matter**: What the FSB listed are weak points that could raise risk. It also cites the limited data on AI use as a reason to step up monitoring.
- **Individual safeguards and the whole picture**: Beyond each institution's own risk management, covered in the [managing AI risk](/en/learn/ai-in-finance/model-risk-and-governance) lesson, it is worth asking whether many institutions relying on the same providers or models creates a system-wide skew.`,
  },
  quiz: [
    {
      kind: "multi",
      prompt: {
        ja: "FSBが、システミック・リスクを高めうるAIの弱点として挙げたものをすべて選んで。",
        en: "Select all the AI-related vulnerabilities the FSB said could increase systemic risk.",
      },
      choices: [
        { ja: "外部の事業者への依存と集中", en: "Dependence on and concentration of outside providers" },
        { ja: "市場の連動", en: "Market correlations" },
        { ja: "サイバー", en: "Cyber" },
        { ja: "AIが計算を一度も間違えないこと", en: "AI never making a calculation error" },
      ],
      correctIndexes: [0, 1, 2],
      explanation: {
        ja: "4つ目は「モデル・リスク、データの質、ガバナンス」です。生成AIによる金融詐欺や偽情報の可能性にも触れています。",
        en: "The fourth is model risk, data quality, and governance. The report also mentions the potential for fraud and disinformation from generative AI.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "FSBのいう「市場の連動」とは？",
        en: "What does the FSB mean by \"market correlations\"?",
      },
      choices: [
        {
          ja: "共通のAIモデルやデータが広く使われ、取引や融資、価格づけの動きが連動しやすくなること",
          en: "Widespread use of common AI models and data making trading, lending, and pricing move together",
        },
        { ja: "AIが市場を閉鎖すること", en: "AI shutting down markets" },
        { ja: "金融機関がAIを使わなくなること", en: "Financial institutions giving up AI" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "群集行動、ネットワーク外部性、選択肢の少なさ、透明性の不足が、共通のデータやモデルが使われる理由として挙げられています。",
        en: "Herding, network externalities, limited choice, and lack of transparency are given as reasons common data and models get used.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "FSBは、AIの利用についてのデータが限られていることも、当局が監視を強めるべき理由に挙げている。",
        en: "The FSB cites limited data on AI use as one reason authorities should step up monitoring.",
      },
      answer: true,
      explanation: {
        ja: "FSBは、監視の強化、政策の枠組みの点検、AIを使った道具も含めた監督能力の向上を求めました。",
        en: "The FSB called for stronger monitoring, a review of policy frameworks, and better supervisory capabilities, including AI-powered tools.",
      },
    },
  ],
  sources: [
    {
      label: "FSB: The Financial Stability Implications of Artificial Intelligence（2024-11-14）",
      url: "https://www.fsb.org/2024/11/the-financial-stability-implications-of-artificial-intelligence/",
    },
    { label: "FSB: The Financial Stability Implications of Artificial Intelligence（報告書PDF）", url: "https://www.fsb.org/uploads/P14112024.pdf" },
    {
      label: "FSB: Sound Practices for Responsible Adoption of Artificial Intelligence (AI) — Consultation report（2026-06-10）",
      url: "https://www.fsb.org/uploads/P100626.pdf",
    },
    {
      label: "金融庁: AIディスカッションペーパー（第1.0版）～金融分野におけるAIの健全な利活用の促進に向けた初期的な論点整理～（2025年3月）",
      url: "https://www.fsa.go.jp/news/r6/sonota/20250304/aidp_summary.pdf",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["financial-stability-board", "third-party-concentration", "ai-market-correlation", "model-risk"],
};
