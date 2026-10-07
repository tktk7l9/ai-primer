import type { Lesson } from "@/engine/content/types";

export const automatingRoutineWork: Lesson = {
  id: "ai-at-work-06",
  slug: "automating-routine-work",
  title: {
    ja: "定型作業の自動化 — 承認と記録を組み込む",
    en: "Automating Routine Work: Build In Approvals and Logs",
  },
  summary: {
    ja: "ノーコードの自動化ツールやエージェントに定型作業を任せるなら、権限・承認・記録・止め方を先に決める。人が必ず判断する場面も。",
    en: "Before handing routine work to a no-code automation or an agent, settle permissions, approvals, logs, and how to stop it — and know when a person must decide.",
  },
  body: {
    ja: `## 手順を決めて任せるか、手順ごと任せるか

届いた請求書を保存する、問い合わせを分類して担当者に回す、毎週の数字を集めて報告にまとめる——こうした定型作業は、ノーコードの自動化ツールやAIエージェントに任せられるようになってきました。任せ方は大きく2つです（[ツール呼び出しのループ](/ja/learn/ai-agents/tool-use-loop)のレッスン参照）。

- **ワークフロー型**: 「メールが届いたら→AIで要約して→チャットに投稿する」のように、人が決めた手順をツールが順に実行する。AIは分類・要約・下書きなど、手順の一部を担う。
- **エージェント型**: 目標だけを渡し、どのアプリで何をするかをAIが決めながら進める。

まずはワークフロー型で始め、手順を決めきれない作業にだけエージェントを使うのが無難です。手順が決まっていれば動きを予測でき、問題が起きたときに原因を追いやすいからです。アプリとの接続には、各ツールの連携機能（コネクタ）や[MCP](/ja/learn/ai-agents/mcp)が使われます。

### 任せすぎのリスク — 過剰なエージェンシー
OWASPの「LLMアプリケーション向けTop 10（2025年版）」は、LLMの出力が想定外・曖昧・操作されたものだったときに、有害な操作が実行されてしまう脆弱性を「**過剰なエージェンシー**」と呼んでいます。根本原因として挙げられているのは次の3つです。
1. **機能が多すぎる**: 読むだけでよいのに、送信や削除もできる連携を使っている。
2. **権限が大きすぎる**: 接続先のシステムに、必要以上の権限でつないでいる。
3. **自律性が大きすぎる**: 影響の大きい操作を、人が確かめないまま実行できる。

### 先に決めておく4つのこと
OWASPが挙げる対策をもとに、自動化を組む前に次の4つを決めておきます。
1. **権限**: 連携の権限は「読むだけ」「下書きまで」など作業に必要な分に絞る。管理者のアカウントを使い回さず、その自動化のための権限でつなぐ。操作してよいかの判断をAIに任せず、接続先のシステムの側の権限で止める。
2. **承認**: 社外への送信・削除・支払い・公開・権限の変更など、取り消しにくい操作の直前に、人が内容を見て承認する段階を置く。OWASPは、メールの下書きをするAIなら、送信は人が中身を確かめてボタンを押す形にする例を挙げています。自動化ツールにも、そのための部品があります。たとえばZapierの「Human in the Loop」（2026年10月時点のヘルプ）は、ワークフローを途中で止め、担当者が承認・却下・内容の修正をするまで先に進めません。却下されたときに処理を止めるか続けるかも選べます。
3. **記録**: いつ何を入力に、AIが何を出力し、何を実行し、誰が承認したかを残し、望ましくない動きがないかを見張る。見張る担当者も決めておく。
4. **止め方と戻し方**: 本番の前にサンプルのデータで試す。一度に実行できる回数に上限を設け、おかしいと気づいたらすぐ止められるようにする。送ってしまったもの・消してしまったものをどう戻すかも決めておく。

### 承認は多ければ安全、ではない
確認を求める回数が多すぎると、人は中身を読まずに承認するようになります。Anthropicは2026年8月、コーディングツールのClaude Codeで、操作の許可をAIによる自動判定に任せるモードを既定にする理由として、ある実験の結果を公表しました。有償の協力者1,053人にテスト用の環境でコーディングの作業をしてもらい、途中の確認画面に危険なコマンドを1つ紛れ込ませたところ、見抜けたのは**13.6%だけ**でした。作業の序盤では約17%を止められたものの、それまでに50回以上の確認を経た後では約5%まで下がっています。

承認は取り消しにくい操作など**本当に重要な場面に絞り**、承認の画面には「誰に・何を・いくら」のように判断に必要な情報を出させます。そのうえで承認だけに頼らず、権限の絞り込みと記録を組み合わせます。

### 人が必ず判断する場面
- **取り消せない操作・外に出る操作**: 顧客へのメール、公開、支払い、削除。
- **人に大きな影響を与える判断**: 採用・評価・融資の可否など。EUの一般データ保護規則（GDPR）第22条は、本人に法的な効果や同じくらい重大な影響を与える決定について、もっぱら自動化された処理に基づく決定の対象とされない権利を定めています。契約に必要な場合や本人の明示的な同意がある場合などの例外もありますが、そうした場合も、人の介入を求め、意見を述べ、決定に異議を唱える権利を保障するよう求めています。
- **信頼できない内容を読ませるとき**: 受信メールやWebページを読む自動化は、そこに仕込まれた指示に操られるおそれがあります。非公開のデータ・信頼できない内容・外部への送信の3つを同時に持たせないようにします（[プロンプトインジェクション](/ja/learn/ai-agents/prompt-injection)のレッスン参照）。`,
    en: `## Hand over the steps, or hand over the whole job?

Saving incoming invoices, sorting inquiries and routing them to the right person, gathering weekly figures into a report — routine work like this can now be handed to no-code automation tools and AI agents. There are two broad ways to do it (see the [tool-use loop](/en/learn/ai-agents/tool-use-loop) lesson):

- **Workflows**: a tool runs steps a person has defined, such as "when an email arrives → summarize it with AI → post it to chat." The AI handles part of the job, such as sorting, summarizing, or drafting.
- **Agents**: you give only the goal, and the AI decides which apps to use and what to do as it goes.

Start with a workflow, and use an agent only for work whose steps you can't pin down. Fixed steps make the behavior predictable and make problems easier to trace. Connections to apps go through each tool's integrations (connectors) or [MCP](/en/learn/ai-agents/mcp).

### The risk of handing over too much: excessive agency
The OWASP Top 10 for LLM Applications (2025) uses the name "**excessive agency**" for the vulnerability that lets damaging actions be performed in response to unexpected, ambiguous, or manipulated output from an LLM. It lists three root causes:
1. **Excessive functionality**: the integration can send or delete, when reading is all the job needs.
2. **Excessive permissions**: it connects to other systems with more permissions than it needs.
3. **Excessive autonomy**: it can take high-impact actions without anyone checking them.

### Four things to decide up front
Drawing on OWASP's mitigations, settle these four things before you build the automation:
1. **Permissions**: limit each integration to what the job needs — "read only," "drafts only." Don't reuse an administrator account; connect with permissions set up for this automation. Don't leave it to the AI to decide whether an action is allowed — enforce that with permissions in the systems it connects to.
2. **Approvals**: right before hard-to-undo actions — sending outside the organization, deleting, paying, publishing, changing permissions — add a step where a person reviews the content and approves it. OWASP's example: if an AI drafts emails, have a person review each one and press "send" themselves. Automation tools have building blocks for this. Zapier's "Human in the Loop," for example (per its help page as of October 2026), pauses a workflow at a chosen step until reviewers approve it, decline it, or edit the data, and you choose whether a declined run stops or continues.
3. **Logs**: record when it ran, what went in, what the AI produced, what it did, and who approved it, and watch for unwanted actions. Name the person who does the watching.
4. **Stopping and undoing**: test with sample data before going live. Cap how many actions it can take in a given period, and make sure it can be stopped the moment something looks wrong. Decide, too, how you would undo something sent or deleted by mistake.

### More approvals is not more safety
Ask people to approve too often and they start approving without reading. In August 2026, Anthropic published a study as part of its case for making its coding tool, Claude Code, default to a mode where an AI classifier decides which actions need blocking. 1,053 paid testers worked through a coding session in a test environment, and one dangerous command was slipped into a permission prompt partway through. They caught it just **13.6%** of the time. Testers blocked about 17% of dangerous commands early in a session, dropping to about 5% after 50 or more prior prompts.

Keep approvals for the moments that **really matter**, such as hard-to-undo actions, and make the approval screen show what a person needs to decide — who it goes to, what it says, how much it costs. Even then, don't rely on approvals alone: combine them with narrow permissions and logs.

### When a person must decide
- **Irreversible or outward-facing actions**: emails to customers, publishing, payments, deletions.
- **Decisions with a big impact on people**: hiring, performance reviews, credit decisions. The EU's General Data Protection Regulation (GDPR), in Article 22, gives people the right not to be subject to a decision based solely on automated processing when it produces legal effects concerning them or similarly significantly affects them. There are exceptions, such as when the decision is necessary for a contract or the person has explicitly consented — but even then, people must at least be able to obtain human intervention, express their point of view, and contest the decision.
- **When it reads untrusted content**: an automation that reads incoming email or web pages can be steered by instructions planted there. Don't give it private data, untrusted content, and the ability to send things out all at once (see the [prompt injection](/en/learn/ai-agents/prompt-injection) lesson).`,
  },
  quiz: [
    {
      kind: "multi",
      prompt: {
        ja: "自動化の中で、実行の直前に人の承認を挟むべき操作をすべて選んでください。",
        en: "In an automation, which actions should get a human approval right before they run? Select all that apply.",
      },
      choices: [
        { ja: "顧客へのメール送信", en: "Sending an email to a customer" },
        { ja: "共有フォルダのファイルの削除", en: "Deleting files in a shared folder" },
        { ja: "取引先への支払い", en: "Paying a supplier" },
        { ja: "届いたメールへの分類ラベルの付与", en: "Adding a category label to an incoming email" },
      ],
      correctIndexes: [0, 1, 2],
      explanation: {
        ja: "外に出る・取り消しにくい・お金が動く操作には承認を置きます。ラベル付けのようにすぐ戻せる操作まで承認を求めると、承認が形だけになり、肝心の確認が甘くなります。",
        en: "Put approvals on actions that go outside, are hard to undo, or move money. Requiring approval even for easily reversed actions like labeling turns approval into a reflex and weakens the checks that matter.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "承認のステップは、多ければ多いほど安全になる。",
        en: "The more approval steps you add, the safer an automation becomes.",
      },
      answer: false,
      explanation: {
        ja: "確認が多いと、人は中身を読まずに承認するようになります。Anthropicの実験では、確認画面に紛れ込ませた危険なコマンドを見抜けたのは13.6%でした。承認は重要な場面に絞り、権限の絞り込みと記録を組み合わせます。",
        en: "Frequent prompts teach people to approve without reading. In Anthropic's study, testers caught a dangerous command hidden in a permission prompt only 13.6% of the time. Keep approvals for what matters, and combine them with narrow permissions and logs.",
      },
    },
  ],
  sources: [
    { label: "OWASP: LLM06:2025 Excessive Agency", url: "https://genai.owasp.org/llmrisk/llm062025-excessive-agency/" },
    {
      label: "Claude by Anthropic: Auto mode is now the default in Claude Code for Pro, Max, and Team plans (2026-08-07)",
      url: "https://claude.com/resources/articles/auto-mode-default-in-claude-code",
    },
    {
      label: "Zapier Help: Request approval to keep your workflow running with Human in the Loop",
      url: "https://help.zapier.com/hc/en-us/articles/38731463206029-Request-approval-to-keep-your-workflow-running-with-Human-in-the-Loop",
    },
    {
      label: "個人情報保護委員会: GDPR（EU一般データ保護規則）仮日本語訳（英語原文併記・第22条）",
      url: "https://www.ppc.go.jp/files/pdf/gdpr-provisions-ja.pdf",
    },
  ],
  lastVerified: "2026-10-07",
  glossaryRefs: ["excessive-agency", "human-in-the-loop", "approval-fatigue", "agent", "mcp", "prompt-injection"],
};
