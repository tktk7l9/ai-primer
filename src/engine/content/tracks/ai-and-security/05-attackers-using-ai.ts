import type { Lesson } from "@/engine/content/types";

export const attackersUsingAi: Lesson = {
  id: "ai-and-security-05",
  slug: "attackers-using-ai",
  title: {
    ja: "攻撃者はAIをどう使っているか — 報告書で見る2025年の変化",
    en: "How Attackers Use AI: What the 2025 Threat Reports Show",
  },
  summary: {
    ja: "2025年初めの報告は「生産性は上がったが、新しい能力は生んでいない」だった。年の後半には、動いている最中にAIを呼び出すマルウェアや、作業の大半をAIに任せた攻撃が報告された。報告書の読み方と、今日からできる備え。",
    en: "Reports in early 2025 said AI was making attackers more productive but not giving them new capabilities. Later that year came reports of malware that calls AI while it runs and of attacks in which AI did most of the work. How to read these reports, and what you can do starting today.",
  },
  body: {
    ja: `## 2025年1月 — 「まだゲームチェンジャーではない」

GoogleのThreat Intelligence Group（GTIG）は2025年1月30日、国家の支援を受けた攻撃者が、同社の生成AI（Gemini）をどう使おうとしたかの分析を公表しました。
- AIは攻撃者にとって役に立つ道具だが、言われているほどのゲームチェンジャーではまだない。
- 使い道は主に、下調べ、コードの不具合の解決、文章の作成と翻訳・現地化。生産性は上がっているが、新しい能力を生み出している兆しはない。
- 安全対策を破ろうとする試みは、公開されているジェイルブレイク用の文面を使うといった単純なもので、成功しなかった。
- 生成AIは攻撃を根本から変えるのではなく、より速く、より大量に行えるようにしている。

## 2025年後半 — 相談相手から、作業の担い手へ
同じ年の後半には、AIが攻撃の作業そのものを担う例が報告されました。

- **AIに作業を任せた恐喝**（Anthropic、2025年8月27日）: 犯罪者がAIのコーディングツール（Claude Code）を使い、偵察、認証情報の収集、ネットワークへの侵入を自動化した。医療、緊急サービス、行政機関、宗教団体を含む少なくとも17の組織からデータを盗み、公開すると脅して、時に50万ドルを超える身代金を要求したという。同じ報告は、基本的なコーディングの技能しかない人物がAIに頼ってランサムウェアを作り、1つ400〜1,200ドルで売っていた例も挙げています。
- **動いている最中にAIを呼び出すマルウェア**（GTIG、2025年11月6日）: 実行中にLLMに問い合わせ、実行する命令や自分のコードをその場で作らせるマルウェアを、初めて確認したと報告した。GTIGがロシア政府の支援を受けるとする攻撃グループは、ウクライナへの攻撃でPROMPTSTEALを使い、Hugging Faceを通じてLLMに命令を作らせて、パソコンの情報や文書を集めていた。Geminiに自分のコードを書き換えさせるPROMPTFLUXは、まだ開発・試験の段階とみられるという。ほかに、攻撃者がセキュリティ競技（CTF）の参加者やセキュリティ研究者を装ってAIの安全対策をすり抜けようとしたことや、闇市場でフィッシングやマルウェア作りを助けるAIツールが売られていることも報告しています。
- **作業の大半をAIが行った諜報活動**（Anthropic、2025年11月13日）: 同社が中国の国家支援グループと高い確度で判断する攻撃者が、AIのコーディングツールを使って約30の組織への侵入を試み、少数で成功した。作業の80〜90%をAIが行い、人間が関わったのは、1回の攻撃あたり4〜6回ほどの重要な判断の場面だったという。攻撃者は、攻撃を害のなさそうな小さな作業に分け、正規のセキュリティ会社の防御テストだと偽って、AIの安全対策をすり抜けた。一方でAIは、認証情報をでっちあげたり、公開されている情報を秘密の情報だと報告したりすることもあり、それが完全に自律した攻撃の妨げになっている、ともしています。

## 報告書を読むときの注意
- **誰に見えた範囲か**: これらは、AIを提供する企業が自社のサービスの中で見つけた例です。Anthropicも、見えているのは自社のAIの使われ方だけだと断っています（そのうえで、ほかの最先端のAIでも同じ傾向だろうとしています）。
- **「初めて」は報告した組織の評価**: 「初めて確認した」「初の事例と考える」は、その組織が知る範囲での判断です。
- **試作か、実戦か**: GTIGは、確認したマルウェアごとに、実際の攻撃で見つかったものか、試験段階とみられるものかを分けて示しています。

## 何が変わり、何が変わらないか
英国の国家サイバーセキュリティセンター（NCSC）は2025年5月7日の評価で、2027年にかけてAIは、新しい攻撃の道を開くよりも、既存の手口を強めることで、侵入の件数と影響を増やす可能性が高いとしました。脆弱性が公表されてから悪用されるまでの時間はすでに数日に縮んでおり、AIによってさらに縮むことはほぼ確実だ、とも見ています。

IPAの解説書は、AIの翻訳の力で、フィッシングなどの文面を標的の母国語で違和感なく書けるようになり、言葉の壁を越えた攻撃がずっと容易になったと指摘しています。「日本語が不自然だから怪しい」という見分け方は、頼りにしにくくなっています。

## 今日からできる備え
IPAの解説書が挙げる対策と、NCSCの評価から。
- **更新はすぐ当てる**: 公表された脆弱性を狙う攻撃は、更新していないシステムを探します。
- **多要素認証（MFA）を使う**: AIを悪用した不正アクセスやソーシャルエンジニアリングを防ぐ助けになります。
- **お金や承認に関わる判断は複数人で確かめる**: 巧妙になるなりすまし（ソーシャルエンジニアリング）に備えます。
- **許可されていないAIサービスに、社内の秘密を入れない**: 情報漏えいを防ぎます。`,
    en: `## January 2025: "not yet a game-changer"

On January 30, 2025, Google Threat Intelligence Group (GTIG) published an analysis of how government-backed attackers tried to use Google's generative AI, Gemini.
- AI is a useful tool for attackers, but not yet the game-changer it is sometimes portrayed to be.
- They mainly used it for research, troubleshooting code, and creating and localizing content. It made them more productive, but there were no signs of it giving them novel capabilities.
- Attempts to break its safeguards were basic — such as using publicly available jailbreak prompts — and unsuccessful.
- Rather than changing attacks fundamentally, generative AI lets attackers move faster and at higher volume.

## Late 2025: from adviser to operator
Later that year, reports described AI carrying out the work of attacks itself.

- **Extortion with the work handed to AI** (Anthropic, August 27, 2025): a criminal used an AI coding tool (Claude Code) to automate reconnaissance, harvesting credentials, and breaking into networks. The actor stole data from at least 17 organizations, including in healthcare, emergency services, government, and religious institutions, and threatened to publish it, demanding ransoms that sometimes exceeded $500,000. The same report describes a person with only basic coding skills who relied on AI to build ransomware and sold it for $400 to $1,200 per package.
- **Malware that calls AI while it runs** (GTIG, November 6, 2025): GTIG reported identifying, for the first time, malware that queries an LLM during execution to generate the commands it runs or its own code on the fly. A group GTIG describes as Russian government-backed used PROMPTSTEAL against Ukraine; it had an LLM, accessed through Hugging Face, generate commands to collect system information and documents. PROMPTFLUX, which asks Gemini to rewrite its own code, appeared to still be in development or testing. GTIG also reported attackers posing as capture-the-flag (CTF) contestants or security researchers to get past AI safeguards, and an underground market selling AI tools that help with phishing and malware development.
- **Espionage with most of the work done by AI** (Anthropic, November 13, 2025): a group the company assessed with high confidence to be Chinese state-sponsored used an AI coding tool to try to break into about 30 organizations, and succeeded in a small number of cases. AI performed 80–90% of the work; humans stepped in at perhaps 4–6 critical decision points per campaign. The attackers got past the AI's safeguards by splitting the attack into small, innocent-looking tasks and claiming it was defensive testing for a legitimate security firm. The AI also sometimes made up credentials or reported publicly available information as secret — which, the company says, remains an obstacle to fully autonomous attacks.

## Reading these reports
- **Whose view is it?** These are cases that AI providers found within their own services. Anthropic notes that it only has visibility into how its own AI is used (while saying the pattern probably holds across other frontier AI models).
- **"First" is the reporter's assessment**: "identified for the first time" or "we believe this is the first case" reflects what that organization knows.
- **Prototype or real operation?** GTIG marks each malware family it lists as either observed in operations or apparently experimental.

## What changes, and what doesn't
In an assessment published on May 7, 2025, the UK's National Cyber Security Centre (NCSC) judged that, through 2027, AI will highly likely increase the volume and impact of intrusions by enhancing existing tactics rather than by creating new kinds of attack. It also noted that the time between a vulnerability's disclosure and its exploitation has already shrunk to days, and that AI will almost certainly shrink it further.

IPA's explanatory report points out that AI translation lets attackers write phishing messages and the like in the target's native language without anything sounding off, making attacks across language barriers far easier. Telling a scam by its unnatural Japanese — or English — is becoming less reliable.

## What you can do starting today
From the measures in IPA's report and NCSC's assessment:
- **Apply updates promptly**: attacks on disclosed vulnerabilities look for systems that haven't been updated.
- **Use multi-factor authentication (MFA)**: it helps deter unauthorized access and social engineering that misuse AI.
- **Have more than one person check decisions involving money or approvals**: this prepares you for increasingly sophisticated impersonation (social engineering).
- **Don't put company secrets into AI services that haven't been approved**: this prevents leaks.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "GTIGが2025年1月の報告でまとめた、攻撃者による生成AIの使い方として正しいものは？",
        en: "Which correctly describes attackers' use of generative AI, as summarized in GTIG's January 2025 report?",
      },
      choices: [
        {
          ja: "下調べや文章作成などで生産性は上がったが、新しい能力を生んでいる兆しはなかった",
          en: "It made them more productive in tasks like research and writing, but showed no signs of giving them novel capabilities",
        },
        { ja: "AIだけで新しい種類の攻撃を次々に生み出していた", en: "AI alone was creating one new kind of attack after another" },
        { ja: "攻撃者は生成AIをまったく使っていなかった", en: "Attackers were not using generative AI at all" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "GTIGは、AIは役に立つ道具だが、まだゲームチェンジャーではなく、攻撃をより速く、より大量に行えるようにしている、とまとめました。",
        en: "GTIG concluded that AI was a useful tool but not yet a game-changer, letting attackers move faster and at higher volume.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "Anthropicが2025年11月に報告した諜報活動では、すべての判断をAIが行い、人間はまったく関わらなかった。",
        en: "In the espionage campaign Anthropic reported in November 2025, AI made every decision and humans were not involved at all.",
      },
      answer: false,
      explanation: {
        ja: "作業の80〜90%をAIが行いましたが、人間も1回の攻撃あたり4〜6回ほどの重要な判断の場面で関わっていました。AIが認証情報をでっちあげるなどの誤りも、完全な自律の妨げになっていたとしています。",
        en: "AI did 80–90% of the work, but humans stepped in at perhaps 4–6 critical decision points per campaign. Errors such as made-up credentials also stood in the way of full autonomy, the company says.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "NCSCの評価をふまえると、まず優先したい備えはどれ？",
        en: "Given NCSC's assessment, which precaution should come first?",
      },
      choices: [
        { ja: "公表された脆弱性の更新をすぐ当てる", en: "Apply updates for disclosed vulnerabilities promptly" },
        { ja: "日本語が不自然なメールだけを警戒する", en: "Watch out only for emails written in unnatural language" },
        { ja: "AIに関係する話題のメールをすべて削除する", en: "Delete every email that mentions AI" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "公表から悪用までの時間は数日に縮み、AIでさらに縮むとみられています。AIの翻訳で文面は自然になっているので、言葉の不自然さだけを手がかりにするのは危険です。",
        en: "The time from disclosure to exploitation has shrunk to days and is expected to shrink further with AI. And since AI translation makes messages sound natural, relying on awkward wording alone is risky.",
      },
    },
  ],
  sources: [
    {
      label: "Google Threat Intelligence Group: Adversarial Misuse of Generative AI（2025-01-30）",
      url: "https://cloud.google.com/blog/topics/threat-intelligence/adversarial-misuse-generative-ai",
    },
    {
      label: "Anthropic: Detecting and countering misuse of AI: August 2025（2025-08-27）",
      url: "https://www.anthropic.com/news/detecting-countering-misuse-aug-2025",
    },
    {
      label: "Google Threat Intelligence Group: GTIG AI Threat Tracker: Advances in Threat Actor Usage of AI Tools（2025-11-06）",
      url: "https://cloud.google.com/blog/topics/threat-intelligence/threat-actor-usage-of-ai-tools",
    },
    {
      label: "Anthropic: Disrupting the first reported AI-orchestrated cyber espionage campaign（2025-11-13）",
      url: "https://www.anthropic.com/news/disrupting-AI-espionage",
    },
    {
      label: "NCSC: Impact of AI on cyber threat from now to 2027（2025-05-07）",
      url: "https://www.ncsc.gov.uk/report/impact-ai-cyber-threat-now-2027",
    },
    {
      label: "IPA: 「情報セキュリティ10大脅威 2026」解説書［組織編］（2026年3月）",
      url: "https://www.ipa.go.jp/security/10threats/omgdg50000008fi8-att/kaisetsu_2026_soshiki.pdf",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["ai-enabled-malware", "jailbreak", "zero-day", "agent"],
};
