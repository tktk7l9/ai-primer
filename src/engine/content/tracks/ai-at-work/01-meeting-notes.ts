import type { Lesson } from "@/engine/content/types";

export const meetingNotes: Lesson = {
  id: "ai-at-work-01",
  slug: "meeting-notes",
  title: {
    ja: "会議の記録と要約 — 知らせてから記録し、元の発言で確かめる",
    en: "Meeting Notes and Summaries: Tell People First, Then Check Against What Was Said",
  },
  summary: {
    ja: "会議ツールの文字起こし・要約機能は便利だが、記録することを参加者に知らせることと、要約を元の発言と照らし合わせることは人の仕事。",
    en: "Transcripts and summaries built into meeting tools save time, but telling participants you are recording — and checking the summary against what was actually said — are still jobs for a person.",
  },
  body: {
    ja: `## AIに議事録係を任せる

主な会議ツールには、会議の音声を文字に起こし（**音声認識**）、それをもとに要約や決定事項、次にやることまでまとめる機能があります。2026年10月時点の公式ヘルプでは、たとえば次のように説明されています。

- **Google Meetの「自動メモ生成」**: 要約や次のステップなどを含むメモをGoogleドキュメントにまとめ、会議の主催者のGoogleドライブに保存します。メモを誰に共有するか（社外を含む招待者全員か、社内の招待者だけか、主催者と共同主催者だけか）は主催者側が選びます。職場や学校のアカウントでは、管理者の設定によって一部の会議で自動的にオンになることもあります。
- **Microsoft TeamsのCopilot**: 会議中も会議後も使える設定のほかに、会議中だけ使える設定があり、こちらは会議の音声を文字に変換したデータを会議の終了後に残しません。ただし組織の保持ポリシーによっては、録音や文字起こしをオフにしていても、会議中のCopilotへの質問と回答がコンプライアンスのために保存されることがあるとしています。

どちらも、誤りが入る場所は「聞き取り（文字起こし）」と「まとめ（要約）」の2段階です。対応するプランや設定の名前は変わりやすいので、使う前に自分の職場のツールのヘルプで確かめてください。

### 始める前に — 知らせる・保存先を知る
- **参加者に知らせる**: Google Meetは、自動メモ生成を使っているあいだ参加者全員にメモが作成されていることを通知し、全員の画面に鉛筆のアイコンを表示します。それでもGoogleのヘルプ自身が、オンにしたら使っていることを皆に伝えるよう呼びかけています。表示を見落とす人もいますし、表示されることと参加者が納得していることは別です。始める前に口頭やチャットで「AIで記録します」と伝え、断る機会をつくりましょう。社外の人がいる会議では特に大切です。
- **個人情報として扱う**: 個人情報保護委員会のQ&Aは、顧客との通話の録音について、通話の内容から特定の個人を識別できる場合は個人情報に当たるとしています。事業者は利用目的を通知または公表する義務を負う一方、録音していることを伝える義務までは負わない、とも説明しています。法律で求められるかどうかとは別に、黙って記録していたと後で分かれば信頼を損ないます。
- **保存先と共有先を確かめる**: メモや文字起こしがどこに保存され、誰に自動で送られ、いつまで残るか。社外の参加者にも自動で共有される設定になっていないか。
- **AIで記録しない方がよい会議もある**: 人事評価、健康、法律の相談、公表前の交渉などです。職場で認められていないツールに会議の音声を渡す**シャドーAI**も避けます（[仕事でAIを使うときの情報の扱い](/ja/learn/society/data-privacy-at-work)のレッスン参照）。

### 要約を「元の発言」と照らし合わせる
GoogleはMeetのヘルプで、会議の要約は不完全だったり、不正確だったり、生成されなかったりすることがあると明記しています。
1. **聞き取りの誤り**: 人名・社名・数字・専門用語の聞き違いや、声が重なったときの取り違え。音声にない文が作られることもあります。2024年に発表された研究「Careless Whisper」は、OpenAIの音声認識モデルWhisper（2023年時点）を調べ、文字起こしの約1%に、元の音声のどこにもない語句や文がまるごと含まれていたと報告しました。その38%には、暴力を助長する、事実でない結びつけをする、偽りの権威を装うといった明らかな害がありました。発話の合間に声のない時間が長い人（失語症によくみられる症状）ほど起きやすい、という偏りも見つかっています。
2. **まとめの誤り**: 反対意見や保留が抜け落ちる、まだ決まっていないことが「決定」と書かれる、担当者や期限が入れ替わる、など。

### 共有する前の確かめ方
1. **決定事項・数字・担当者・期限**の4つを、文字起こしや録音と突き合わせる。
2. 要約を頼むときは「決まったこと」「決まっていないこと」「反対意見」を分けて書かせ、根拠になった発言を発言者つきで引用させる（その引用も文字起こしで確かめる）。
3. 主な発言者に目を通してもらってから共有する。
4. AIで作ったメモであることを書き添え、誤りの指摘を受け付ける。`,
    en: `## Letting AI take the minutes

The major meeting tools can transcribe a meeting's audio (**speech recognition**) and use the transcript to summarize the discussion, the decisions, and the next steps. As of October 2026, their official help pages describe features like these:

- **"Take notes for me" in Google Meet**: it writes notes, including a summary and next steps, into a Google Doc saved in the meeting organizer's Google Drive. The hosts choose who receives them — all invited guests including people outside the organization, invited guests in the organization, or hosts and co-hosts only. With a work or school account, the feature may be turned on automatically for certain meetings, depending on admin settings.
- **Copilot in Microsoft Teams meetings**: besides a setting that works during and after the meeting, there is an "only during the meeting" setting, which relies on speech-to-text data that isn't saved after the meeting ends. Microsoft adds that, depending on an organization's retention policies, Copilot prompts and responses during meetings might be retained for compliance purposes even when recording and transcription are off.

Either way, errors can creep in at two stages: hearing (the transcript) and condensing (the summary). Plans and setting names change often, so check your own workplace tool's help pages before you rely on them.

### Before you start: tell people, and know where it goes
- **Tell the participants**: while "Take notes for me" is on, Google Meet informs everyone that notes are being taken and shows a pencil icon on all participants' screens. Even so, Google's own help asks you, once you turn it on, to let everyone know you're using it. People miss indicators, and seeing an icon is not the same as agreeing. Say "I'm using AI to take notes" out loud or in the chat before you start, and give people a chance to object — especially when people from outside your organization attend.
- **Treat it as personal information**: in its Q&A on recording calls with customers, Japan's Personal Information Protection Commission says the content of a call is personal information if a specific individual can be identified from it. A business must notify people of, or publish, its purpose of use, though it explains there is no legal duty to tell people the call is being recorded. Whatever the law requires, people who later learn they were recorded without being told will trust you less.
- **Know where it is saved and who gets it**: where are the notes and transcript stored, who receives them automatically, and how long are they kept? Is it set to share them automatically with outside participants?
- **Some meetings are better left unrecorded by AI**: performance reviews, health matters, legal consultations, negotiations that aren't public yet. And don't feed meeting audio to tools your workplace hasn't approved — that is **shadow AI** (see the lesson on [handling information at work](/en/learn/society/data-privacy-at-work)).

### Check the summary against what was actually said
Google's Meet help states plainly that a meeting summary can sometimes be incomplete, inaccurate, or not generated at all.
1. **Hearing errors**: misheard names, company names, numbers, and jargon, or mix-ups when people talk over each other. Transcription can even produce text nobody said. "Careless Whisper," a study published in 2024, examined OpenAI's Whisper speech recognition model as of 2023 and found that roughly 1% of transcriptions contained entire hallucinated phrases or sentences that did not exist in any form in the audio. 38% of those hallucinations included explicit harms, such as perpetuating violence, making up inaccurate associations, or implying false authority. They also occurred disproportionately for people who speak with longer pauses — a common symptom of aphasia.
2. **Condensing errors**: dissent or open questions dropped, something still undecided written up as a "decision," owners or deadlines swapped.

### How to check before you share
1. Check four things against the transcript or recording: **decisions, numbers, owners, and deadlines**.
2. When you ask for a summary, have it separate "what was decided," "what is still open," and "objections," and quote the remarks behind each point with the speaker's name — then check those quotes against the transcript too.
3. Have the main speakers look it over before you circulate it.
4. Note that the notes were made with AI, and invite corrections.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "AIが作った会議の要約を共有する前に、文字起こしや録音と突き合わせる対象として最も優先すべきものは？",
        en: "Before sharing an AI-generated meeting summary, what should you check against the transcript or recording first?",
      },
      choices: [
        { ja: "決定事項・数字・担当者・期限", en: "Decisions, numbers, owners, and deadlines" },
        { ja: "敬語や言い回しの自然さ", en: "How natural and polite the wording sounds" },
        { ja: "要約の長さが適切かどうか", en: "Whether the summary is the right length" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "後の仕事を左右するのは、何が決まり、誰がいつまでに何をするかです。聞き違いや要約の誤りはここに入り込みやすく、文面が自然でも内容が正しいとは限りません。",
        en: "What drives the follow-up work is what was decided and who does what by when. Mishearing and condensing errors creep in right there — and smooth wording says nothing about whether the content is right.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "会議ツールが参加者全員に通知を表示するので、AIで記録することを自分から伝える必要はない。",
        en: "Because the meeting tool shows everyone a notification, you don't need to tell people yourself that AI is taking notes.",
      },
      answer: false,
      explanation: {
        ja: "表示を見落とす人もいて、表示されることと納得していることは別です。Googleのヘルプも、オンにしたら使っていることを皆に伝えるよう呼びかけています。管理者の設定で自動的にオンになることもあるので、自分でも確かめます。",
        en: "People miss indicators, and seeing one is not the same as agreeing. Google's own help asks you to let everyone know once you turn it on. It can also be switched on automatically by admin settings, so check for yourself.",
      },
    },
  ],
  sources: [
    {
      label: "Google Meet Help: \"Take notes for me\" in Google Meet",
      url: "https://support.google.com/meet/answer/14754931?hl=en",
    },
    {
      label: "Microsoft Learn: Manage Microsoft Copilot in Teams meetings and events",
      url: "https://learn.microsoft.com/en-us/microsoftteams/copilot-teams-transcription",
    },
    {
      label: "Koenecke et al.: Careless Whisper: Speech-to-Text Hallucination Harms (ACM FAccT 2024)",
      url: "https://arxiv.org/abs/2402.08021",
    },
    {
      label: "個人情報保護委員会: よくある質問 Q1-10（通話内容の録音と個人情報）",
      url: "https://www.ppc.go.jp/all_faq_index/faq1-q1-10/",
    },
  ],
  lastVerified: "2026-10-07",
  glossaryRefs: ["speech-recognition", "hallucination", "shadow-ai"],
};
