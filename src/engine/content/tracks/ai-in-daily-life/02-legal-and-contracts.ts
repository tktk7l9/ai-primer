import type { Lesson } from "@/engine/content/types";

export const legalAndContracts: Lesson = {
  id: "ai-in-daily-life-02",
  slug: "legal-and-contracts",
  title: {
    ja: "法律・契約の相談でAIを使うとき — 読むのは得意、責任は取れない",
    en: "Asking AI About Legal Questions and Contracts: Good at Reading, Unable to Take Responsibility",
  },
  summary: {
    ja: "契約書の読み解きにAIは役立つが、挙げてくる判例は実在しないことがあり、争いのある案件は弁護士の領域。弁護士法72条と法務省のガイドラインが引く線、法テラスという入口、AIに任せてよい作業。",
    en: "AI helps you read a contract, but the precedents it cites may not exist, and contested matters belong to lawyers. Where Japan's Attorney Act and the Ministry of Justice's guideline draw the line, Houterasu as a first stop, and the tasks you can safely give to AI.",
  },
  body: {
    ja: `## 契約書を読むのは得意、責任は取れない

賃貸や雇用の契約書、通販の規約、SNSで起きたトラブル——法律に関わる疑問をチャットAIに聞くと、条文や判例らしきものまで挙げて説明してくれます。ただ、法律の相談は、間違えたときに取り返しがつきにくい分野です。

> **ご注意**: このレッスンは一般的な情報の紹介で、法的助言ではありません。具体的な事案は弁護士などの専門家に相談してください。

### AIが挙げる判例は、存在しないことがある
米スタンフォード大学などの研究者が2024年に法学誌Journal of Legal Analysisで発表した研究は、米国の連邦裁判所の実在の判例について具体的で検証できる質問をしたとき、大規模言語モデルが**58%**（ChatGPT 4）から**88%**（Llama 2）の割合でハルシネーション（事実と違う答え）を起こしたと報告しています。質問に誤った法的前提が含まれていても、モデルがそれを正さないことが多いことも示しました。米国の判例についての、2024年時点のモデルの結果ですが、「それらしい判例名や条文番号が出てきても、実在するとは限らない」という教訓は日本語でも同じです（[ハルシネーション](/ja/learn/ai-basics/hallucination)のレッスン参照）。実在しない判例を裁判所に提出した弁護士が制裁を受けた2023年の米国の事件は、[年表](/ja/timeline)に載せています。

### 法律の相談を仕事にできるのは誰か
弁護士法第72条は、弁護士または弁護士法人でない者が、報酬を得る目的で、訴訟事件などの法律事件に関して鑑定・代理・和解その他の法律事務を取り扱うことを業とすることを禁じています。違反には、2年以下の拘禁刑または300万円以下の罰金が定められています（第77条）。

では、AIが契約書をチェックするサービスはどうなるのでしょうか。法務省は2023年8月に、AIを使った契約書の作成・審査・管理の支援サービスとこの条文との関係を整理したガイドラインを公表し、2026年8月21日には、対象を契約書以外の法務業務支援サービスにも広げた新しいガイドラインを公表しました。2026年のガイドラインは、第72条は人の行為を対象とする罰則であること、AIにどんな指示を入力してどう使うかの最終的な判断は基本的に利用者に委ねられていること、第72条の「法律事件」には、権利義務をめぐる争いや疑義があって法的な紛争が生じることがほぼ避けられない「事件性」が必要であることなどを示しています。そのうえで、争いのある案件にもそうでない業務にも使える「価値中立的な」サービスについては、利用者が自分の判断で争いのある案件に使ったという事後的な事情だけで、提供者が第72条に違反したと評価することは難しいとしています。

利用者の側から見ると、こうなります。AIの答えは法律事務ではなく、**判断と責任は使う人に残る**。そして、相手との争いになっている案件は、AIではなく弁護士の領域です。

### 法テラスという入口
弁護士に相談すべきか迷うときは、国が設立した法テラス（日本司法支援センター）の**法テラス・サポートダイヤル**（0570-078374、平日9時〜21時・土曜9時〜17時、利用料は無料で通話料のみ）が、法制度や相談窓口を案内してくれます。オペレーターは個別の法律相談や法的判断は行いません。弁護士・司法書士による無料の法律相談を受けたい人向けの案内もあります。

### AIで「読む」、専門家に「決める」を頼む
AIが向いているのは、読んで理解する段階です。
1. **用語と構造を知る**: 「この条項は何を決めている？」「中途解約の条件はどこに書いてある？」と、文書の中の該当箇所を示してもらう。
2. **質問リストを作る**: 相手方や専門家に確かめることを整理する。
3. **自分の言葉で言い直す**: 契約書の内容を自分で要約し、AIに抜けや読み違いを指摘してもらう。
4. **条文は原文を開く**: AIが挙げた法律名と条番号は、e-Gov法令検索で原文を確かめる。

AIに向いていないのは、「署名してよいか」「訴えられるか」「いくら請求できるか」のような**判断**です。期限のある手続き（契約の解除やクーリング・オフ、時効）は、公的な窓口や専門家に早めに確かめます。

### 入力する前に
契約書には相手の名前や住所、金額が書かれています。入力した内容が保存や学習に使われる設定になっていないか確かめ、必要なら名前を伏せます（[仕事でAIを使うときの情報の扱い](/ja/learn/society/data-privacy-at-work)のレッスン参照）。職場の契約書なら、会社のルールが優先です。`,
    en: `## Good at reading, unable to take responsibility

A lease or an employment contract, an online shop's terms, a dispute that started on social media — ask a chat AI a legal question and it explains, complete with what look like statutes and precedents. But legal questions are an area where a mistake is hard to undo.

> **Please note**: this lesson is general information, not legal advice. For a specific situation, consult a lawyer or another qualified professional.

### The precedents an AI cites may not exist
In a study published in 2024 in the Journal of Legal Analysis, researchers at Stanford University and elsewhere report that when large language models were asked specific, verifiable questions about real US federal court cases, they hallucinated — gave answers that were not true — between **58%** of the time (ChatGPT 4) and **88%** (Llama 2). The models also often failed to correct a false legal premise built into the question. These are results for 2024 models on US case law, but the lesson holds in any language: a plausible case name or article number is no guarantee that it exists (see the [hallucination](/en/learn/ai-basics/hallucination) lesson). The 2023 US case in which lawyers were sanctioned for filing non-existent precedents is in the [timeline](/en/timeline).

### Who may handle legal matters for a living
Article 72 of Japan's Attorney Act prohibits anyone who is not an attorney or a legal professional corporation from handling, as a business and for the purpose of obtaining compensation, legal affairs such as giving expert opinions, representation, or settlement in lawsuits and other legal cases. Violations carry up to two years' imprisonment or a fine of up to 3 million yen (Article 77).

So where does an AI contract-review service stand? In August 2023, Japan's Ministry of Justice published a guideline on how services that use AI to help draft, review, and manage contracts relate to this article, and on August 21, 2026, it published a new guideline extending the scope to legal-support services beyond contracts. The 2026 guideline sets out that Article 72 is a penal provision aimed at human conduct; that the final decision about what to enter into the AI and how to use it rests, as a rule, with the user; and that a "legal case" under Article 72 requires what is called "case-ness" — a dispute or doubt over rights and obligations that makes a legal conflict all but unavoidable. For a "value-neutral" service that can be used both for contested matters and for ordinary work, it says it is difficult to find the provider in violation of Article 72 merely on the after-the-fact basis that a user chose to use it for a contested matter.

Seen from the user's side: an AI's answer is not legal services, and **the judgment and the responsibility stay with you**. And a matter that has become a dispute with the other party is a lawyer's territory, not an AI's.

### Houterasu as a first stop
If you're unsure whether to see a lawyer, the **Houterasu support line** of the Japan Legal Support Center (Houterasu), established by the national government — 0570-078374, weekdays 9:00–21:00 and Saturdays 9:00–17:00, free apart from call charges — explains the legal system and points you to the right consultation desk. Its operators do not give individual legal advice or legal judgments. It also provides guidance for people seeking free consultations with lawyers or judicial scriveners.

### Let AI read; let a professional decide
Where AI fits is the reading-and-understanding stage.
1. **Learn the terms and the structure**: "What does this clause decide?" "Where are the conditions for early termination?" — have it point to the relevant part of the document.
2. **Build a list of questions**: organize what to confirm with the other party or a professional.
3. **Restate it in your own words**: summarize the contract yourself and have the AI point out gaps or misreadings.
4. **Open the statute itself**: check any law and article number the AI cites against the original text on Japan's e-Gov law database.

Where AI doesn't fit is **judgment**: "Should I sign?" "Can I be sued?" "How much can I claim?" For anything with a deadline — cancelling a contract, cooling-off, limitation periods — check early with a public consultation desk or a professional.

### Before you enter the document
A contract contains the other party's name, address, and the amounts involved. Check whether what you enter is stored or used for training, and redact names where needed (see [handling information when using AI at work](/en/learn/society/data-privacy-at-work)). For a contract from your workplace, your employer's rules come first.`,
  },
  quiz: [
    {
      kind: "boolean",
      prompt: {
        ja: "AIが判例名と事件番号つきで答えた判例は、番号まで付いているのだから実在すると考えてよい。",
        en: "If an AI cites a precedent complete with a case name and docket number, the number means it must exist.",
      },
      answer: false,
      explanation: {
        ja: "2024年の研究では、実在の米国連邦判例についての検証できる質問に対し、大規模言語モデルは58%から88%の割合で事実と違う答えをしました。判例名や番号の形をしていても、原文を確かめるまでは未確認として扱います。",
        en: "In a 2024 study, large language models gave untrue answers to verifiable questions about real US federal cases between 58% and 88% of the time. A citation that looks like a case name and number is unverified until you find the original.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "賃貸の退去費用をめぐって管理会社と話がまとまらない。適切な進め方は？",
        en: "You and the management company can't agree on move-out costs for your rental. What's the right way forward?",
      },
      choices: [
        {
          ja: "法テラス・サポートダイヤルなどで相談窓口を案内してもらい、争いになっている案件として弁護士などの専門家に相談する",
          en: "Get a referral to the right consultation desk, for example through the Houterasu support line, and take the dispute to a lawyer or other professional",
        },
        {
          ja: "AIに内容証明の文面を作ってもらい、そのまま送る",
          en: "Have the AI draft a formal demand letter and send it as is",
        },
        {
          ja: "AIが「払わなくてよい」と答えたので、支払いを断り続ける",
          en: "Keep refusing to pay because the AI said you don't have to",
        },
      ],
      correctIndex: 0,
      explanation: {
        ja: "相手との争いになっている案件は、AIではなく弁護士の領域です。法テラス・サポートダイヤルは法制度や相談窓口を無料で案内し（個別の法律判断はしません）、条件を満たせば無料の法律相談の案内もあります。AIは契約書の読み解きや質問の整理に使い、判断は専門家と行います。",
        en: "A matter that has become a dispute belongs to a lawyer, not an AI. The Houterasu support line explains the system and refers you to a consultation desk for free (without giving individual legal judgments), and can point eligible people to free legal consultations. Use the AI to read the contract and organize your questions; decide with a professional.",
      },
    },
  ],
  sources: [
    {
      label: "e-Gov法令検索: 弁護士法（昭和24年法律第205号）第72条・第77条",
      url: "https://laws.e-gov.go.jp/law/324AC1000000205",
    },
    {
      label: "法務省大臣官房司法法制部: ビジネス分野におけるＡＩ等法務業務支援サービス提供と弁護士法第７２条の関係について（2026-08-21）",
      url: "https://www.moj.go.jp/content/001469040.pdf",
    },
    {
      label: "法テラス（日本司法支援センター）: お電話でのお問合せ（法テラス・サポートダイヤル）",
      url: "https://www.houterasu.or.jp/site/soudanmadoguchi-houseido/support-dial.html",
    },
    {
      label: "Dahl et al.: Large Legal Fictions: Profiling Legal Hallucinations in Large Language Models (arXiv 2401.01301; Journal of Legal Analysis 16(1), 2024)",
      url: "https://arxiv.org/abs/2401.01301",
    },
  ],
  lastVerified: "2026-10-10",
  glossaryRefs: ["article-72-attorney-act", "houterasu", "hallucination"],
};
