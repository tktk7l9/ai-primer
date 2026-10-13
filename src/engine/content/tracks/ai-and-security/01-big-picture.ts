import type { Lesson } from "@/engine/content/types";

export const bigPicture: Lesson = {
  id: "ai-and-security-01",
  slug: "big-picture",
  title: {
    ja: "AIとセキュリティの全体像 — 狙われるAI、使われるAI、守るAI",
    en: "The Big Picture: AI as a Target, as a Tool for Attackers, and as a Defender",
  },
  summary: {
    ja: "AIは攻撃の的にも、攻撃の道具にも、守りの道具にもなる。日本の「情報セキュリティ10大脅威 2026」に初めて入ったAIのリスクと、OWASPとNISTによる攻撃の整理から、このトラックの地図を描く。",
    en: "AI can be the target of an attack, a tool for attackers, and a tool for defenders. Starting from the AI risk that entered Japan's list of 10 major information security threats for the first time in 2026, and from how OWASP and NIST classify attacks, this lesson maps out the track.",
  },
  body: {
    ja: `## 3つの向きで考える

AIとセキュリティの話は、向きの違う3つに分けると整理しやすくなります。

1. **AIを狙う攻撃**: AIを組み込んだシステムの弱点を突く。読ませる文書に指示を仕込む、安全対策をすり抜ける、学習データやモデルのファイルに細工する、など。
2. **AIを使う攻撃**: 攻撃者がAIを道具にする。文面を書く・訳す、下調べをする、コードを書く、といった作業を速くする。
3. **AIで守る**: 守る側もAIを使う。ソフトウェアの弱点（脆弱性）を見つけて直す作業を、AIで速くする試みが進んでいる。

## 日本の「10大脅威」に初めて入った
情報処理推進機構（IPA）が2026年1月29日に発表した「情報セキュリティ10大脅威 2026」では、組織向けの3位に「AIの利用をめぐるサイバーリスク」が初めて選ばれました。前の年に起きた事故や攻撃をもとにIPAが候補を選び、研究者や企業の実務担当者など約250人の選考会が投票で決めたものです。

IPAは、このリスクに含まれるものとして次を挙げています。
- AIをよく理解しないまま使うことによる、意図しない情報漏えいや、他人の権利の侵害
- AIが加工・生成した結果を十分に確かめず、うのみにすることで起きる問題
- AIの悪用で、サイバー攻撃がしやすくなり、手口も巧妙になること

同じ解説書（2026年3月）は、職場の許可なく個人のAIサービスを仕事に使う「シャドーAI」による情報漏えいや、もっともらしい誤り（ハルシネーション）もリスクとして挙げています。

## AIを狙う攻撃の整理 — OWASPとNIST
AIアプリを作る人に向けては、セキュリティの国際コミュニティOWASPが「LLMアプリケーション向けTop 10（2025年版）」をまとめています。

| 番号 | リスク |
|---|---|
| LLM01 | プロンプトインジェクション |
| LLM02 | 機密情報の漏えい |
| LLM03 | サプライチェーン |
| LLM04 | データとモデルのポイズニング |
| LLM05 | 出力の不適切な扱い |
| LLM06 | 過剰なエージェンシー |
| LLM07 | システムプロンプトの漏えい |
| LLM08 | ベクトルと埋め込みの弱点 |
| LLM09 | 誤情報 |
| LLM10 | 際限のない消費 |

米国立標準技術研究所（NIST）は2025年3月、機械学習への攻撃と対策の用語を整理した報告書（NIST AI 100-2 E2025）を出しました。攻撃を、モデルを学習させる段階で仕掛けるもの（学習データやモデルに細工するポイズニング）と、できあがったモデルを使う段階で仕掛けるもの（入力に細工して判断を誤らせる回避攻撃や、学習データなどの情報を引き出すプライバシーへの攻撃）に分けています。攻撃者の狙いは「使えなくする（可用性）」「誤らせる（完全性）」「情報を盗む（プライバシー）」の3つで整理し、生成AIについては「禁じられた使い方をできるようにする（悪用の手助け）」を加えています。

## 新しい攻撃と、昔からの基本
IPAの解説書のコラムは、AIに固有の弱点を狙う新しい攻撃として、AIが読み込んだデータに仕込まれた指示に従ってしまう**間接プロンプトインジェクション**を挙げています。2025年6月に報じられたMicrosoft 365 Copilotの脆弱性「EchoLeak」もこの型で、社内の秘密データが外に送られるおそれがあったとされます。

一方でコラムは、それ以外の事例の大部分は、従来と変わらない攻撃をAIで半自動化・高速化したものにとどまり、従来のセキュリティ対策が有効だとしています。AIのサービスでも、データベースが認証なしでインターネットに公開されていてデータが流出した例のように、設定ミスや認証の不備という昔からの弱点が狙われます。そして、状況は数か月のうちにも変わりうるので、基本を押さえつつ最新の動きを追う姿勢が求められる、と結んでいます。

## このトラックで学ぶこと
- [ジェイルブレイク](/ja/learn/ai-and-security/jailbreaks): 安全対策をすり抜ける入力と、防御のいたちごっこ
- [データポイズニングとバックドア](/ja/learn/ai-and-security/data-poisoning): 学習データに仕込まれる毒
- [AIのサプライチェーン](/ja/learn/ai-and-security/supply-chain): モデルファイルとパッケージの落とし穴
- [攻撃者はAIをどう使っているか](/ja/learn/ai-and-security/attackers-using-ai): 報告書で見る2025年の変化
- [守る側のAI](/ja/learn/ai-and-security/ai-for-defense): 脆弱性を見つけ、直すところまで

プロンプトインジェクションのしくみと、エージェントの権限で被害を抑える考え方は、[プロンプトインジェクションとエージェントの安全](/ja/learn/ai-agents/prompt-injection)のレッスンで扱っています。`,
    en: `## Three directions

Security and AI is easier to sort out if you split it into three directions.

1. **Attacks on AI**: exploiting weaknesses in systems that include AI — planting instructions in documents the AI will read, slipping past its safeguards, or tampering with training data or model files.
2. **Attacks using AI**: attackers using AI as a tool to speed up writing and translating messages, doing research, and writing code.
3. **AI for defense**: defenders use AI too, and efforts to speed up finding and fixing weaknesses in software (vulnerabilities) with AI are under way.

## A first entry in Japan's "10 major threats"
In its "10 Major Information Security Threats 2026," announced on January 29, 2026, Japan's Innovation Platform Agency (IPA) placed "cyber risks surrounding the use of AI" at number 3 on the list for organizations — the first time it had been selected. IPA picks candidates from incidents and attacks of the previous year, and a selection committee of about 250 members, including researchers and practitioners at companies, decides the list by vote.

IPA lists the following as part of this risk:
- unintended information leaks or infringement of other people's rights, caused by using AI without understanding it well,
- problems caused by accepting what AI has processed or generated without checking it enough,
- the misuse of AI making cyberattacks easier and tactics more sophisticated.

The same explanatory report (March 2026) also lists leaks through "shadow AI" — using personal AI services for work without the workplace's permission — and plausible but false output (hallucinations) as risks.

## Classifying attacks on AI: OWASP and NIST
For people building AI applications, the international security community OWASP publishes the "Top 10 for LLM Applications (2025)":

| No. | Risk |
|---|---|
| LLM01 | Prompt Injection |
| LLM02 | Sensitive Information Disclosure |
| LLM03 | Supply Chain |
| LLM04 | Data and Model Poisoning |
| LLM05 | Improper Output Handling |
| LLM06 | Excessive Agency |
| LLM07 | System Prompt Leakage |
| LLM08 | Vector and Embedding Weaknesses |
| LLM09 | Misinformation |
| LLM10 | Unbounded Consumption |

In March 2025, the US National Institute of Standards and Technology (NIST) published a report (NIST AI 100-2 E2025) that sets out common terms for attacks on machine learning and their mitigations. It separates attacks mounted while a model is being trained (poisoning, which tampers with the training data or the model) from attacks on a model that is already in use (evasion attacks, which alter inputs to make it misjudge, and privacy attacks, which extract information such as training data). It sorts attacker goals into three — availability (making it unusable), integrity (making it misbehave), and privacy (stealing information) — and, for generative AI, adds misuse enablement: getting around the restrictions on what the system may be used for.

## New attacks, and the old basics
A column in IPA's report highlights **indirect prompt injection** — where an AI follows instructions planted in data it reads — as a new kind of attack that targets a weakness specific to AI. EchoLeak, a vulnerability in Microsoft 365 Copilot reported in June 2025, was of this type; internal confidential data could reportedly have been sent outside.

Most other cases, the column says, are still conventional attacks that AI has semi-automated and sped up, so conventional security measures remain effective. AI services are also hit through old weaknesses such as misconfiguration and missing authentication — for example, databases left open to the internet without authentication, leaking data. Because the situation can change within months, the column concludes, we need to keep the basics solid while following the latest developments.

## What this track covers
- [Jailbreaks](/en/learn/ai-and-security/jailbreaks): inputs that slip past safeguards, and the back-and-forth of defense
- [Data poisoning and backdoors](/en/learn/ai-and-security/data-poisoning): poison slipped into training data
- [The AI supply chain](/en/learn/ai-and-security/supply-chain): pitfalls in model files and packages
- [How attackers use AI](/en/learn/ai-and-security/attackers-using-ai): what the 2025 threat reports show
- [AI on defense](/en/learn/ai-and-security/ai-for-defense): finding vulnerabilities and fixing them

How prompt injection works, and how to limit the damage through an agent's permissions, is covered in [prompt injection and agent safety](/en/learn/ai-agents/prompt-injection).`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "IPAの「情報セキュリティ10大脅威 2026」で、組織向けの3位に初めて選ばれた脅威はどれ？",
        en: "In IPA's \"10 Major Information Security Threats 2026,\" which threat was selected for the first time, at number 3 on the list for organizations?",
      },
      choices: [
        { ja: "AIの利用をめぐるサイバーリスク", en: "Cyber risks surrounding the use of AI" },
        { ja: "ランサム攻撃による被害", en: "Damage from ransomware attacks" },
        { ja: "DDoS攻撃（分散型サービス妨害攻撃）", en: "DDoS (distributed denial-of-service) attacks" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "1位はランサム攻撃による被害、2位はサプライチェーンや委託先を狙った攻撃で、初めて候補になった「AIの利用をめぐるサイバーリスク」が3位に入りました。DDoS攻撃は9位です。",
        en: "Ransomware was number 1 and attacks on supply chains and contractors number 2; \"cyber risks surrounding the use of AI,\" a candidate for the first time, came in at number 3. DDoS attacks were number 9.",
      },
    },
    {
      kind: "multi",
      prompt: {
        ja: "NISTの報告書が、攻撃者の狙いとして整理している3つをすべて選んで。",
        en: "Select all three attacker goals that the NIST report uses to classify attacks.",
      },
      choices: [
        { ja: "使えなくする（可用性）", en: "Making it unusable (availability)" },
        { ja: "誤らせる（完全性）", en: "Making it misbehave (integrity)" },
        { ja: "情報を盗む（プライバシー）", en: "Stealing information (privacy)" },
        { ja: "処理を速くする（性能）", en: "Making it faster (performance)" },
      ],
      correctIndexes: [0, 1, 2],
      explanation: {
        ja: "NISTは攻撃者の狙いを可用性・完全性・プライバシーの3つで整理し、生成AIについては「悪用の手助け」を加えています。",
        en: "NIST sorts attacker goals into availability, integrity, and privacy, and adds misuse enablement for generative AI.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "IPAの解説書は、AIが関わる攻撃の事例の大部分には、従来のセキュリティ対策が有効だとしている。",
        en: "IPA's report says that conventional security measures remain effective against most cases of attacks involving AI.",
      },
      answer: true,
      explanation: {
        ja: "間接プロンプトインジェクションはAIに固有の弱点を狙う新しい攻撃だとしたうえで、それ以外の事例の大部分は従来の攻撃をAIで半自動化・高速化したものにとどまり、従来の対策が有効だとしています。",
        en: "It calls indirect prompt injection a new attack on a weakness specific to AI, but says most other cases are conventional attacks semi-automated and sped up by AI, against which conventional measures remain effective.",
      },
    },
  ],
  sources: [
    { label: "IPA: 情報セキュリティ10大脅威 2026", url: "https://www.ipa.go.jp/security/10threats/10threats2026.html" },
    {
      label: "IPA: プレス発表「情報セキュリティ10大脅威 2026」を決定（2026-01-29）",
      url: "https://www.ipa.go.jp/pressrelease/2025/press20260129.html",
    },
    {
      label: "IPA: 「情報セキュリティ10大脅威 2026」解説書［組織編］（2026年3月）",
      url: "https://www.ipa.go.jp/security/10threats/omgdg50000008fi8-att/kaisetsu_2026_soshiki.pdf",
    },
    { label: "OWASP: Top 10 for LLM Applications 2025", url: "https://genai.owasp.org/llm-top-10/" },
    {
      label: "NIST: AI 100-2 E2025 Adversarial Machine Learning: A Taxonomy and Terminology of Attacks and Mitigations（2025年3月）",
      url: "https://csrc.nist.gov/pubs/ai/100/2/e2025/final",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["adversarial-machine-learning", "prompt-injection", "shadow-ai", "hallucination"],
};
