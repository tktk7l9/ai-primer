import type { Lesson } from "@/engine/content/types";

export const instructionsAndSkills: Lesson = {
  id: "coding-ai-06",
  slug: "instructions-and-skills",
  title: {
    ja: "エージェントへの説明書 — AGENTS.mdとスキル",
    en: "Instructions for Agents: AGENTS.md and Skills",
  },
  summary: {
    ja: "毎回同じ説明を繰り返さないために、プロジェクトの決まりは指示ファイルに、手順はスキルにまとめる。短く書くこと、必ず守らせたいことは別の仕組みにすること、他人のスキルはコードと同じように読むこと。",
    en: "Stop repeating yourself: put project rules in an instruction file and procedures in skills. Keep them short, enforce must-have rules another way, and read other people's skills as you would read code.",
  },
  body: {
    ja: `## 新しい同僚に渡す説明書

コーディングエージェントは、新しいセッションのたびに何も覚えていない状態から始まります。テストの実行方法、チームの決まり、触ってはいけない場所を毎回説明するのは大変です。そこで、**リポジトリに説明書を置く**方法が広まりました。

### 指示ファイル — AGENTS.md
**AGENTS.md** は、エージェント向けの説明を書くMarkdownファイルです。公式サイトは「エージェントのためのREADME」と説明し、開発者向けのREADMEを読みにくくする細かい手順の置き場だとしています。決まった形式はなく、2026年11月時点で6万を超えるオープンソースのプロジェクトで使われているとされます。Codex・Cursor・GitHub Copilotのコーディングエージェントなど多くのツールが読み、現在はLinux Foundation傘下のAgentic AI Foundationが管理しています。

Claude Codeは \`CLAUDE.md\` という専用の名前を使いますが、既存の AGENTS.md を読み込むこともできます。モノレポでは各プロジェクトに置くことができ、編集中のファイルに最も近いものが優先され、チャットでの明示的な指示はそれより優先されます。

### 何を書くか
Claude Codeの公式ガイドの基準は単純です。**コードを読めば分かることは書かない**。書くべきなのは、エージェントが自力では見つけられないことです。

- 作業を確かめるコマンド（テスト、型チェック、lint）
- コードから誤解しやすい点（古い書き方が残っているが真似してはいけない、など）
- 会議で決めたこと、デプロイの手順など、リポジトリにない決定
- 2回以上訂正したこと

指示ファイルは毎回読み込まれるので、長いほどコンテキストを消費し、守られにくくなります。公式ガイドは1ファイル200行未満を目安にしています（[コンテキストエンジニアリング](/ja/learn/ai-agents/context-engineering)のレッスン参照）。

### 手順はスキルに — 必要なときだけ読む
レビューの手順やリリースの確認など、特定の作業でだけ必要な内容は**スキル**にします。Agent Skillsは、もともとAnthropicが開発し、オープンな規格として公開された形式で、\`SKILL.md\` を含むフォルダが1つのスキルです。スクリプトや参考資料を同梱することもできます。

読み込みは3段階です。

1. **発見**: 起動時には名前と説明だけを読む。
2. **起動**: 作業が説明に合ったら、\`SKILL.md\` の全文を読む。
3. **実行**: 手順に従い、必要なら同梱のコードや資料を使う。

全文は必要なときだけ読まれるので、多くのスキルを持っていてもコンテキストをあまり消費しません。同じ指示をチャットに何度も貼っているなら、スキルにする合図です。

### 書いてあっても、強制ではない
ここを誤解すると事故につながります。Claude Codeの資料は、CLAUDE.mdやスキルのような指示は**モデルが読んで判断するもの**で、強制される設定ではないと説明しています。「本番のデータベースに触らない」のように例外があってはならない決まりは、指示ファイルに書くだけでなく、フック、拒否ルール、サンドボックスなど、モデルの判断と関係なく働く仕組みで守ります（[安全な使い方](/ja/learn/coding-ai/safe-usage)のレッスン参照）。

### 他人のスキルはコードと同じ
スキルには、エージェントへの指示と、実行されるコードの両方が入っています。Snykが2026年2月に公開した調査では、2つの配布先の3,984個のスキルのうち、534個（13.4%）に重大度が最も高い問題が見つかり、76個は人の確認で悪意があると確かめられました。悪意のあるスキルの多くは、[プロンプトインジェクション](/ja/learn/ai-agents/prompt-injection)を組み合わせていました。

一方で、数字の読み方には注意が必要です。2026年の別の研究（arXiv:2603.16572）は、配布先のスキャナーが最大46.8%を悪意ありとする例に対し、GitHubのリポジトリの文脈を見ると疑わしいものは0.52%まで減ると報告しました。大事なのは割合より、**入れる前に自分で読む**ことです。Claude Codeの資料も、\`SKILL.md\`、事前に許可するツール、実行されるコマンドを確かめてから信頼するよう勧めています。`,
    en: `## A briefing for a new colleague

A coding agent starts each new session knowing nothing about your project. Explaining how to run the tests, the team's conventions, and what not to touch gets tiresome. So a common practice has emerged: **keep a briefing in the repository**.

### Instruction files: AGENTS.md
**AGENTS.md** is a Markdown file of instructions for agents. Its official site calls it a README for agents, a home for the detail that would clutter a README written for people. There is no required format. As of November 2026 the site says it is used by more than 60,000 open-source projects, and many tools read it, including Codex, Cursor, and GitHub Copilot's coding agent. It is now stewarded by the Agentic AI Foundation under the Linux Foundation.

Claude Code uses its own file name, \`CLAUDE.md\`, but can also read an existing AGENTS.md. In a monorepo each project can have one; the file closest to what is being edited wins, and explicit instructions in chat take priority over that.

### What to write
The test in Claude Code's official guide is simple: **leave out what can be found by reading the code**. Write down what the agent can't find on its own.

- Commands that confirm the work (tests, type checks, lint)
- Places where the code misleads (an old pattern that must not be copied, for example)
- Decisions that aren't in the repo, such as what a meeting settled and how deploys work
- Anything you have had to correct twice

Instruction files are loaded every time, so a long one uses up context and is followed less reliably. The guide suggests under 200 lines per file (see [context engineering](/en/learn/ai-agents/context-engineering)).

### Procedures go in skills, read only when needed
Content needed only for particular jobs, such as a review procedure or a release checklist, belongs in a **skill**. Agent Skills is a format originally developed by Anthropic and released as an open standard. A skill is a folder containing a \`SKILL.md\` file, and it can bundle scripts and reference material.

Loading happens in three stages.

1. **Discovery**: at startup, only names and descriptions are loaded.
2. **Activation**: when a task matches a description, the full \`SKILL.md\` is read.
3. **Execution**: the agent follows the instructions, using bundled code or files as needed.

Because full text loads only when needed, many skills cost little context. If you keep pasting the same instructions into chat, that's a sign you need a skill.

### Written down is not enforced
Misunderstanding this leads to accidents. Claude Code's documentation explains that instructions like CLAUDE.md and skills are **read and weighed by the model**; they are context, not enforced configuration. For a rule that can have no exceptions, such as "never touch the production database," don't stop at writing it down. Back it with something that works regardless of what the model decides: hooks, deny rules, or a sandbox (see [using coding AI safely](/en/learn/coding-ai/safe-usage)).

### Treat other people's skills as code
A skill holds both instructions for the agent and code that runs. In a study published in February 2026, Snyk examined 3,984 skills from two distribution sites. It found critical-severity issues in 534 (13.4%), and human review confirmed 76 as malicious. Many malicious skills combined this with [prompt injection](/en/learn/ai-agents/prompt-injection).

These numbers need careful reading, though. A separate 2026 paper (arXiv:2603.16572) reported that where marketplace scanners labeled up to 46.8% of skills malicious, taking the surrounding GitHub repository into account cut the suspicious share to 0.52%. More important than any percentage is **reading a skill yourself before installing it**. Claude Code's documentation likewise advises checking the \`SKILL.md\`, its pre-approved tools, and the commands it runs before trusting it.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "AGENTS.mdやCLAUDE.mdに書く内容として、最も適切なものは？",
        en: "Which is the best thing to put in AGENTS.md or CLAUDE.md?",
      },
      choices: [
        { ja: "テストの実行コマンドと、コードからは分からないチームの決まり", en: "The test command and team decisions that can't be seen in the code" },
        { ja: "全ファイルの一覧と内容の要約", en: "A list and summary of every file" },
        { ja: "読めば分かるコードの解説をできるだけ長く", en: "As much explanation as possible of code that is clear on reading" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "指示ファイルは毎回読み込まれます。エージェントが自力で見つけられないことに絞ります。",
        en: "Instruction files load every time, so stick to what the agent can't find on its own.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "CLAUDE.mdに「本番環境を変更しない」と書けば、その操作は仕組みとして確実に防がれる。",
        en: "Writing \"never change production\" in CLAUDE.md is a guaranteed block on that action.",
      },
      answer: false,
      explanation: {
        ja: "指示はモデルが読んで判断するものです。確実に止めるにはフックや拒否ルールを使います。",
        en: "Instructions are context the model weighs. Use hooks or deny rules for a guaranteed block.",
      },
    },
    {
      kind: "order",
      prompt: {
        ja: "スキルが読み込まれる流れを、順番に並べてください。",
        en: "Put the stages of loading a skill in order.",
      },
      items: [
        { ja: "起動時に名前と説明だけを読む", en: "Load only names and descriptions at startup" },
        { ja: "作業が説明に合ったらSKILL.mdの全文を読む", en: "Read the full SKILL.md when a task matches" },
        { ja: "手順に従い、必要なら同梱のコードや資料を使う", en: "Follow the steps, using bundled code or files as needed" },
      ],
      explanation: {
        ja: "必要なときだけ全文を読むので、多くのスキルを持っていてもコンテキストを節約できます。",
        en: "Full text is read only when needed, which saves context even with many skills installed.",
      },
    },
  ],
  sources: [
    { label: "AGENTS.md", url: "https://agents.md/" },
    { label: "Agent Skills: Overview", url: "https://agentskills.io/" },
    { label: "Claude Code Docs: Best practices", url: "https://code.claude.com/docs/en/best-practices" },
    { label: "Claude Code Docs: How Claude remembers your project", url: "https://code.claude.com/docs/en/memory" },
    { label: "Claude Code Docs: Skills", url: "https://code.claude.com/docs/en/skills" },
    { label: "Snyk: ToxicSkills（2026-02-05）", url: "https://snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub" },
    { label: "arXiv: Context Matters: Repository-Aware Security Analysis of the Agent Skill Ecosystem", url: "https://arxiv.org/abs/2603.16572" },
  ],
  lastVerified: "2026-11-02",
  glossaryRefs: ["agents-md", "agent-skills", "context-engineering", "prompt-injection"],
};
