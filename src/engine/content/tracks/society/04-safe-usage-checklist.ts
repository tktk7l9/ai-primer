import type { Lesson } from "@/engine/content/types";

export const safeUsageChecklist: Lesson = {
  id: "society-04",
  slug: "safe-usage-checklist",
  title: {
    ja: "安全な使い方チェックリスト",
    en: "A Checklist for Safe AI Use",
  },
  summary: {
    ja: "本サイトで学んだことを、日常で実践するための最終確認。",
    en: "A final, practical checklist drawing on everything covered in this course.",
  },
  body: {
    ja: `## これまでの学びを、実践のチェックリストに

本サイトの各トラックで扱った内容を、日常で使えるチェックリストにまとめます。

### 使う前に
- [ ] 今の目的に、どのAI・どの手法が向いているかを考える（主要チャットAI比較トラック参照）。
- [ ] ベンチマークの点数やランキングで選ぶときは、誰が・どの条件で測った数字かを確かめ、自分の課題でも試す（[ベンチマークの読み方](/ja/learn/understanding-ai/reading-benchmarks)のレッスン参照）。
- [ ] 新しいAIを仕事などで本格的に使う前に、開発元のシステムカードで、試された範囲・対象外の機能・残るリスクに目を通す（[AIの安全性の取り組み](/ja/learn/understanding-ai/ai-safety-practices)のレッスン参照）。
- [ ] 個人情報・秘密情報を入力しても問題ないサービスか確認する（学習利用の設定・保存期間・職場のルール。仕事での情報の扱いのレッスン参照）。
- [ ] 仕事で使うなら、職場のルールとAI事業者ガイドラインの「AI利用者」向けの項目を確認する（AIのルールのレッスン参照）。
- [ ] 会議を録音・文字起こしするなら、始める前に参加者に知らせる（[会議の記録と要約](/ja/learn/ai-at-work/meeting-notes)のレッスン参照）。
- [ ] 音声モードでカメラや画面を共有するなら、保存・学習の設定と、映り込む情報や周りの人を確認する（音声アシスタントのレッスン参照）。
- [ ] 学ぶために使うなら、先に自分で考え、答えではなくヒントを頼む（AIで学ぶレッスン参照）。
- [ ] 子どもが使うなら、サービスの年齢の条件と保護者向けの設定を確かめ、使い方を家庭で話し合う（[子どもとAI](/ja/learn/ai-and-society/children-and-ai)のレッスン参照）。
- [ ] スマートフォンや家電のAI機能は、端末内で処理するのか、クラウドや別の会社のAIに送るのか、送る前に確認が出るかを設定で確かめる（[家電・スマホのAI機能の設定](/ja/learn/ai-in-daily-life/device-ai-settings)のレッスン参照）。

### プロンプトを書くとき
- [ ] 役割・文脈・タスク・出力形式を具体的にする（プロンプト術トラック参照）。
- [ ] 複雑なタスクは「段階を踏んで」と明示するか、小さく分解する。

### 回答を受け取ったとき
- [ ] 重要な事実・数値・引用は、自分で出典を確認する（ハルシネーションのレッスン参照）。
- [ ] 出典つきの回答やディープリサーチのレポートでも、出典を開いて該当箇所を確かめる（AIで調べ物をするレッスン参照）。
- [ ] AIが作った要約・翻訳・集計は、数字・固有名詞・担当者・期限を元の発言や資料と照らし合わせてから使う（[仕事でAIを使う](/ja/learn/ai-at-work)トラック参照）。
- [ ] 医療・法律・税務など専門判断が必要な内容は、専門家に相談する。
- [ ] 体調や薬のことは、AIの答えだけで決めない。迷ったら医師・薬剤師や#7119などの電話相談に相談し、命に関わりそうなら119番に電話する（[健康・医療の情報をAIで調べるとき](/ja/learn/understanding-ai/health-information)のレッスン参照）。
- [ ] お金や法律の相談では、AIの答えを一般論として扱い、投資の助言は登録を受けた業者に、争いのある案件は弁護士や法テラスに相談する（[お金の相談でAIを使うとき](/ja/learn/ai-in-daily-life/money-questions)・[法律・契約の相談でAIを使うとき](/ja/learn/ai-in-daily-life/legal-and-contracts)のレッスン参照）。
- [ ] 行政の手続きや旅行の予約は、AIの答えやメッセージのリンクからではなく、自分で開いた公式サイトから行い、マイナンバーや口座番号はAIに入力しない（[行政手続き・申請書づくりでAIを使うとき](/ja/learn/ai-in-daily-life/government-procedures)・[旅行の計画にAIを使うとき](/ja/learn/ai-in-daily-life/travel-planning)のレッスン参照）。
- [ ] 偏った・不公平な内容が含まれていないか、一歩引いて確認する（リスクのレッスン参照）。
- [ ] 採用や評価など人に関わる判断に使うなら、名前や性別など関係ないはずの部分を入れ替えて結果が変わらないか試し、AIの出力だけで決めない（[AIのバイアスと公平性](/ja/learn/ai-and-society/bias-and-fairness)のレッスン参照）。

### コードを書かせるとき
- [ ] 生成されたコードを必ずレビューする。
- [ ] 秘密情報を含むファイルをAIに読み込ませない設定にする（コーディングAIトラック参照）。
- [ ] 破壊的な操作は人間が確認してから実行する。

### エージェントに権限を与えるとき
- [ ] 読める範囲と実行できる操作を、そのタスクに必要な分だけに絞る（AIエージェントトラック参照）。
- [ ] 非公開データ・信頼できない内容・外部への通信の3つを同時に持たせない。
- [ ] MCPサーバーは、誰が作ったか・何ができるかを確認してから接続する。
- [ ] 定型作業を任せるなら、送信・削除・支払いなど取り消しにくい操作の前に人の承認を挟み、記録を残す（[定型作業の自動化](/ja/learn/ai-at-work/automating-routine-work)のレッスン参照）。

### 画像・音楽などを生成するとき
- [ ] 公開・商用利用する前に、サービスの利用規約と著作権の基本（米国と日本の考え方）を確認する（生成メディアトラック参照）。
- [ ] 画像を公開するときは代替テキストを書き添え、動画の自動字幕は見直してから公開する（[AIとアクセシビリティ](/ja/learn/ai-and-society/accessibility)のレッスン参照）。
- [ ] 公募・配信先・投稿先のAI方針（利用の可否・申告の方法・表示）を先に読み、求められる設定や開示を正直に付ける（[作品を公開するとき](/ja/learn/creating-with-ai/publishing-your-work)のレッスン参照）。
- [ ] 実在の人の顔や声を使うなら本人の同意を取り、本物と間違えられそうな画像・動画・音声にはAIで作ったことを示す（[動画を作る](/ja/learn/creating-with-ai/making-video)のレッスン参照）。
- [ ] 使ったツール・プラン・プロンプト・設定・下書きなどの制作記録を残す（[文章を書く相棒としてのAI](/ja/learn/creating-with-ai/writing-with-ai)のレッスン参照）。

### 画像・動画・音声を受け取ったとき
- [ ] 感情を揺さぶる・急がせる内容ほど、出どころと来歴情報を確かめる（ディープフェイクのレッスン参照）。
- [ ] 声や映像で送金を求められたら、いったん切って別の経路で本人に確認する。
- [ ] 著名人が投資を勧める広告やメッセージは、本人の公式の発信と、業者の金融庁への登録を確かめる（[AIを使った詐欺](/ja/learn/ai-and-society/ai-scams)のレッスン参照）。

**まとめ**: このチェックリストは一度覚えて終わりではなく、AIサービスやルールが更新されるたびに見直す習慣が大切です。本サイトも各レッスンの「最終確認」日を目安に、内容の鮮度を保つよう努めています。`,
    en: `## Turning what you've learned into a practical checklist

Here's a checklist for everyday use, drawing on every track in this course.

### Before you start
- [ ] Consider which AI or technique fits your current goal (see Comparing the Major Chat AIs).
- [ ] When choosing by benchmark scores or rankings, check who measured them and under what conditions, and try the AI on your own tasks too (see [how to read AI benchmarks](/en/learn/understanding-ai/reading-benchmarks)).
- [ ] Before relying on a new AI for work or other serious use, skim the developer's system card for what was tested, what was out of scope, and what risks remain (see [how AI developers work on safety](/en/learn/understanding-ai/ai-safety-practices)).
- [ ] Check whether it's safe to enter personal or confidential information into this service (training settings, retention, workplace rules — see the lesson on handling information at work).
- [ ] At work, check your workplace's rules and the "AI business user" items in Japan's AI Guidelines for Business (see the lesson on the rules for AI).
- [ ] Before recording or transcribing a meeting, tell the participants (see the [meeting notes](/en/learn/ai-at-work/meeting-notes) lesson).
- [ ] Before sharing your camera or screen in a voice mode, check the storage and training settings, and what — and who — is in frame (see the voice assistants lesson).
- [ ] When using AI to learn, think first and ask for hints rather than answers (see the lesson on learning with AI).
- [ ] If a child will use it, check the service's age requirements and parental settings, and talk through how to use it as a family (see the [children and AI](/en/learn/ai-and-society/children-and-ai) lesson).
- [ ] For AI features on your phone or home devices, check in the settings whether they run on the device or send data to the cloud or another company's AI, and whether they ask before sending (see the [device AI settings](/en/learn/ai-in-daily-life/device-ai-settings) lesson).

### Writing your prompt
- [ ] Make role, context, task, and format concrete (see Prompting Techniques).
- [ ] For complex tasks, ask it to reason step by step, or break the task into smaller pieces.

### Reading the answer
- [ ] Verify important facts, numbers, and citations against real sources yourself (see the Hallucination lesson).
- [ ] Even when an answer or a deep research report cites sources, open them and find the passage (see the lesson on researching with AI).
- [ ] Before using an AI-made summary, translation, or calculation, check its numbers, names, owners, and deadlines against what was said or the source material (see the [Using AI at Work](/en/learn/ai-at-work) track).
- [ ] For anything requiring professional judgment — medical, legal, tax — consult an actual professional.
- [ ] Don't let an AI's answer decide health or medicine questions for you. If you're unsure, ask a doctor or pharmacist or call a phone service such as #7119 in Japan, and call 119 if a life may be at risk (see [looking up health information with AI](/en/learn/understanding-ai/health-information)).
- [ ] For money and legal questions, treat the AI's answer as general information: take investment advice from a registered firm, and take disputes to a lawyer or Houterasu (see the [asking AI about money](/en/learn/ai-in-daily-life/money-questions) and [legal questions and contracts](/en/learn/ai-in-daily-life/legal-and-contracts) lessons).
- [ ] Do government procedures and travel bookings from an official site you opened yourself, not from a link in an AI answer or a message, and never enter your My Number or account numbers into an AI (see the [government procedures](/en/learn/ai-in-daily-life/government-procedures) and [travel planning](/en/learn/ai-in-daily-life/travel-planning) lessons).
- [ ] Step back and check for biased or unfair content (see the Risks lesson).
- [ ] When AI helps with decisions about people, such as hiring or reviews, swap details that shouldn't matter — a name, a gender — to see whether the result changes, and don't let the AI's output decide on its own (see the [bias and fairness](/en/learn/ai-and-society/bias-and-fairness) lesson).

### When it writes code
- [ ] Always review the generated code.
- [ ] Make sure files with secrets aren't exposed to the AI (see Coding AI).
- [ ] Have a human confirm before running any destructive operation.

### When granting an agent permissions
- [ ] Limit what it can read and do to what the task needs (see the AI Agents track).
- [ ] Don't give it private data, untrusted content, and external communication all at once.
- [ ] Before connecting an MCP server, check who built it and what it can do.
- [ ] When automating routine work, put a human approval before hard-to-undo actions such as sending, deleting, or paying, and keep a log (see the [automating routine work](/en/learn/ai-at-work/automating-routine-work) lesson).

### When generating images or music
- [ ] Before publishing or commercial use, check the service's terms and the basics of copyright in the US and Japan (see Generating Images, Video, and Music).
- [ ] When you publish images, add alt text, and review automatic captions on your videos before they go out (see the [AI and accessibility](/en/learn/ai-and-society/accessibility) lesson).
- [ ] Read the AI policy of the contest, distributor, or platform first — whether AI is allowed, how to declare it, what label is required — and set the required flags and disclosures honestly (see the [publishing your work](/en/learn/creating-with-ai/publishing-your-work) lesson).
- [ ] Get consent before using a real person's face or voice, and say it was made with AI whenever an image, video, or audio could be mistaken for real (see the [making video](/en/learn/creating-with-ai/making-video) lesson).
- [ ] Keep process records — the tool, plan, prompts, settings, and drafts (see the [writing with AI](/en/learn/creating-with-ai/writing-with-ai) lesson).

### When you receive images, video, or audio
- [ ] The more emotional or urgent the content, the more carefully you check its source and provenance (see the deepfakes lesson).
- [ ] If a voice or video asks you for money, hang up and confirm with the person through another channel.
- [ ] When an ad or message shows a celebrity recommending an investment, check the person's official channels and whether the firm is registered with Japan's Financial Services Agency (see the [AI-enabled scams](/en/learn/ai-and-society/ai-scams) lesson).

**Takeaway**: this checklist isn't a one-time thing to memorize — revisit it as AI services and rules keep changing. This site itself works to stay current, tracked by each lesson's "last verified" date.`,
  },
  quiz: [
    {
      kind: "boolean",
      prompt: {
        ja: "重要な事実や数値は、AIの回答を鵜呑みにせず自分で出典を確認するべきである。",
        en: "You should verify important facts and figures against real sources rather than taking an AI's answer at face value.",
      },
      answer: true,
      explanation: {
        ja: "ハルシネーションのリスクがあるため、重要な内容は出典確認を習慣にすることが安全な使い方の基本です。",
        en: "Because of hallucination risk, making source-verification a habit for important content is a basic safety practice.",
      },
    },
  ],
  sources: [
    { label: "IBM: What Are AI Hallucinations?", url: "https://www.ibm.com/think/topics/ai-hallucinations" },
  ],
  lastVerified: "2026-10-06",
  glossaryRefs: ["hallucination"],
};
