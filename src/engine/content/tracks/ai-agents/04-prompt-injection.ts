import type { Lesson } from "@/engine/content/types";

export const promptInjection: Lesson = {
  id: "ai-agents-04",
  slug: "prompt-injection",
  title: {
    ja: "プロンプトインジェクションとエージェントの安全",
    en: "Prompt Injection and Agent Safety",
  },
  summary: {
    ja: "読ませた文書やWebページに仕込まれた「指示」をAIが実行してしまう問題と、権限で被害を抑える考え方。",
    en: "When an AI follows \"instructions\" hidden in a document or web page it was asked to read — and how permissions limit the damage.",
  },
  body: {
    ja: `## 読んだものを、命令だと思ってしまう

LLMは、入力されたトークンの**どこから来たか**で重要度を見分けることができません。利用者の指示も、ツールで読み込んだWebページの文章も、同じ「トークンの列」として処理されます。そのため、読ませた文書やメール、Webページに「これまでの指示を無視して〜せよ」といった文が仕込まれていると、モデルがそれに従ってしまうことがあります。これが**プロンプトインジェクション**です。

OWASPの「LLMアプリケーション向けTop 10（2025年版）」は、これを第1位のリスクに挙げ、利用者自身の入力でモデルの挙動が変わる**直接型**と、Webページやファイルなど外部の内容を処理した結果として挙動が変わる**間接型**に分けています。エージェントにとって深刻なのは後者です。ツールで外の世界を読むほど、外の世界からの「指示」にさらされるからです。

### なぜ「対策済み」にできないのか
Webアプリの古典的な脆弱性であるSQLインジェクションは、命令とデータを分離する仕組みで根本的に防げます。英国の国家サイバーセキュリティセンター（NCSC）は2025年12月の解説で、プロンプトインジェクションはそれとは性質が違い、**命令とデータの区別を持たないLLMの仕組みそのものに由来する**ため、同じようには根絶できない、と指摘しています。推奨されるのは、残るリスクとして受け入れたうえで、**起きる可能性と起きたときの被害を設計で小さくする**ことです。

### 危険な3点セット
プログラマーのSimon Willisonは2025年6月、エージェントが次の3つを同時に持つと、情報が盗まれる条件が揃うとして「lethal trifecta（致命的な3点セット）」と名付けました:
1. **あなたの非公開データへのアクセス**（メール・社内文書など）
2. **信頼できない内容にさらされること**（Webページ・受信メール・他人の文書など）
3. **外部に通信できること**（メール送信・Web投稿・APIの呼び出しなど）

仕込まれた指示が「非公開データを読んで外部に送れ」と命じれば、3つが揃ったエージェントはそれを実行しうる、という構図です。

### 被害を抑える設計
- **最小権限**: 読める範囲・実行できる操作を、そのタスクに必要な分だけに絞る。
- **重要な操作には人間の承認**: 送信・削除・支払い・本番環境への反映などは、実行前に確認を挟む（OWASPも推奨）。
- **信頼できない内容を分けて扱う**: 外部から取り込んだ文章は「データ」として明示し、指示として扱わせない。
- **3点セットを揃えない**: 非公開データを読ませるなら外部通信を切る、Webを読ませるなら非公開データに触れさせない、など。
- **記録と監視**: 何を読み何を実行したかのログを残す。

利用者としては、エージェントやMCPサーバーに権限を与える前に、「このAIは3つのうちどれを持つことになるか」を数えてみるのが実践的な第一歩です。`,
    en: `## Mistaking what it reads for orders

An LLM can't reliably tell how important an instruction is based on **where it came from**. Your request and the text of a web page fetched by a tool are processed as the same kind of thing: a sequence of tokens. So if a document, email, or web page you ask the model to read contains a line like "ignore your previous instructions and do X," the model may comply. That is **prompt injection**.

OWASP's Top 10 for LLM Applications (2025 edition) ranks it the number-one risk and splits it in two: **direct** injection, where the user's own input alters the model's behavior, and **indirect** injection, where processing external content — web pages, files — alters it. The second is the one that bites agents: the more an agent reads the outside world through tools, the more "instructions" from the outside world it is exposed to.

### Why it can't simply be "fixed"
SQL injection, the classic web vulnerability, can be eliminated at the root by mechanisms that separate commands from data. In a December 2025 post, the UK's National Cyber Security Centre (NCSC) argued that prompt injection is different in kind: it stems from **the LLM's own lack of any instruction/data boundary**, so it is unlikely to be eradicated the same way. The recommended stance is to treat it as residual risk and **reduce both the likelihood and the impact through design**.

### The lethal trifecta
In June 2025, programmer Simon Willison named the combination that sets up data theft the "lethal trifecta." An agent is in danger when it has all three at once:
1. **Access to your private data** (email, internal documents, and so on)
2. **Exposure to untrusted content** (web pages, incoming mail, other people's documents)
3. **The ability to communicate externally** (sending email, posting to the web, calling APIs)

If injected text says "read the private data and send it out," an agent holding all three can do exactly that.

### Designing to limit the damage
- **Least privilege**: restrict what the agent can read and do to what the task needs.
- **Human approval for consequential actions**: sending, deleting, paying, deploying to production — require confirmation before execution (OWASP recommends this too).
- **Segregate untrusted content**: mark externally fetched text as data and don't let it act as instructions.
- **Break the trifecta**: if it reads private data, cut off external communication; if it browses the web, keep it away from private data.
- **Log and monitor**: keep a record of what was read and what was executed.

As a user, the practical first step before granting an agent or MCP server any permission is to count which of the three it would end up holding.`,
  },
  quiz: [
    {
      kind: "multi",
      prompt: {
        ja: "「lethal trifecta（致命的な3点セット）」に含まれるものをすべて選べ。",
        en: "Select everything that belongs to the \"lethal trifecta.\"",
      },
      choices: [
        { ja: "非公開データへのアクセス", en: "Access to private data" },
        { ja: "信頼できない内容にさらされること", en: "Exposure to untrusted content" },
        { ja: "外部に通信できること", en: "The ability to communicate externally" },
        { ja: "モデルの応答が遅いこと", en: "Slow model responses" },
      ],
      correctIndexes: [0, 1, 2],
      explanation: {
        ja: "3つが揃うと「非公開データを読んで外へ送る」指示が実行されうるため、どれか1つを外す設計が勧められます。",
        en: "With all three present, an injected \"read private data and send it out\" can succeed — so remove at least one.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "プロンプトインジェクションは、SQLインジェクションと同じように入力を適切に処理すれば完全に防げる。",
        en: "Prompt injection can be fully prevented the same way SQL injection is, by handling input properly.",
      },
      answer: false,
      explanation: {
        ja: "命令とデータの区別を持たないLLMの性質に由来するため根絶は難しく、権限と承認で被害を抑える設計が勧められています。",
        en: "It stems from the LLM's lack of an instruction/data boundary, so the guidance is to limit damage through permissions and approvals rather than expect eradication.",
      },
    },
  ],
  sources: [
    { label: "OWASP: LLM01:2025 Prompt Injection", url: "https://genai.owasp.org/llmrisk/llm01-prompt-injection/" },
    { label: "Simon Willison: The lethal trifecta for AI agents", url: "https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/" },
    { label: "NCSC: Prompt injection is not SQL injection", url: "https://www.ncsc.gov.uk/blog-post/prompt-injection-is-not-sql-injection" },
  ],
  lastVerified: "2026-10-06",
  glossaryRefs: ["prompt-injection", "agent", "mcp"],
};
