import type { Lesson } from "@/engine/content/types";

export const governmentProcedures: Lesson = {
  id: "ai-in-daily-life-03",
  slug: "government-procedures",
  title: {
    ja: "行政手続き・申請書づくりでAIを使うとき — 調べる道具にして、提出は公式から",
    en: "Using AI for Government Procedures and Forms: A Research Tool, with Submission Through Official Channels",
  },
  summary: {
    ja: "どの窓口に、どの書類を、いつまでに——調べる段階でAIは役立つ。政府自身も生成AIを「確かめて使う」ものとして扱い、公的チャットボットの答えは一般論。マイナンバーを入力しない理由と、偽サイトを避けて公式から手続きに入る方法。",
    en: "Which office, which documents, by when — AI helps at the research stage. The government itself treats generative AI as something to verify, and official chatbots give general answers. Why not to enter your My Number, and how to reach procedures through official sites rather than fake ones.",
  },
  body: {
    ja: `## 「どこに、何を、いつまでに」を調べる道具として

引っ越しの手続き、確定申告、給付金の申請——行政の手続きは、どの窓口に、どの書類を、いつまでに出すのかを調べるところから始まります。チャットAIはこの「調べる」段階で役立ちますが、答えをそのまま提出書類にしてはいけません。

### 行政も、AIを「確かめて使う」ものとして扱っている
政府の側も生成AIを使い始めています。デジタル庁が各府省庁向けに定めた「行政の進化と革新のための生成AIの調達・利活用に係るガイドライン」（2025年5月27日決定、2026年6月12日に第2.0版）は、利活用の促進とリスク管理を表裏一体で進めるとしたうえで、生成AIが事実と異なる情報を出力し（ハルシネーション）、利用者がその情報を使って不利益を受けることをリスクの例に挙げ、職員に対して、正確性や根拠・事実関係をリスクに応じて確認することを求めています。生成物の誤りが行政手続の結果に影響し、法人の事業活動の停止のような大きな影響を与えうる場合は、高リスクになりうる例とされています。行政が自分たちに課している「確かめてから使う」は、市民がAIを使うときにも、そのまま当てはまります。

### 公式のチャットボットが答えるのは「一般的な回答」
国税庁のチャットボット（ふたば）は、会社員や個人事業の確定申告、インボイス制度などの質問に、メンテナンスの時間を除いて24時間答えます。国税庁は、回答は一般的なもので個別の事情には対応していないこと、個別の相談は税務署へ、そして個人情報を入力しないことを案内しています。公的機関のチャットボットでも、自分の事情に当てはめた最終の確認は、人の窓口で行います。

### マイナンバーをAIに入力しない
マイナンバーの利用範囲は、法律で社会保障・税・災害対策の3つの行政分野に限られています。デジタル庁・警察庁・個人情報保護委員会などが連名で出している注意喚起（2015年公表、2023年3月更新）は、電話でマイナンバーの提供を求められることはなく、手続きの名目で口座の暗証番号や資産の情報、家族構成を電話などで聞いたり、金銭を要求したりすることもないとしています。チャットAIは、入力した内容が提供元のサーバーに送られる道具です（[仕事でAIを使うときの情報の扱い](/ja/learn/society/data-privacy-at-work)のレッスン参照）。申請書の下書きを頼むときも、マイナンバー・口座番号・暗証番号は空欄のままにして、提出する紙や公式サイトの画面で自分で書き込みます。

### 手続きは、公式サイトから入る
国税庁は、国税庁・国税局・税務署が納付を求めるショートメッセージやメールを送ることはないこと、国税庁ホームページになりすましたサイトが見つかっていること、e-Taxから送るメールにファイルを添付したり本文にURLを書いたりすることはないことを案内し、不審なサイトにはアクセスせず、支払わず、税務署に問い合わせるよう呼びかけています。AIの答えに含まれるリンクは、存在しないページや別のページにつながることがあります（[AIで調べ物をする](/ja/learn/ai-agents/research-with-ai)のレッスン参照）。手続きには、AIの答えやメッセージのリンクからではなく、自分で検索した公式サイトやブックマークから入ります。

### 上手な使い方
1. **全体像をつかむ**: 「転入の手続きで必要なものと順番を、一般論として教えて」。
2. **公式ページを探す手がかりにする**: 担当する省庁や自治体の部署、手続きの正式名称を教えてもらい、自分で公式サイトを開く。
3. **様式を読む**: 記入欄の意味や用語（「扶養親族」「控除」など）を聞く。
4. **下書きは公式の様式と手引きで照合する**: 期限・添付書類・提出先は、手引きが正本。AIが答えた期限や金額は、公式ページで確かめる。
5. **迷ったら窓口へ**: 自治体の窓口や、国の機関のコールセンターに聞く。`,
    en: `## A tool for finding out where, what, and by when

Moving house, filing a tax return, applying for a benefit — a government procedure starts with finding out which office, which documents, and what deadline. A chat AI is useful at this research stage, but its answer must never go straight onto a form you submit.

### The government, too, treats AI as something to verify
Government offices have started using generative AI themselves. The Digital Agency's guideline for ministries and agencies on procuring and using generative AI (adopted May 27, 2025; version 2.0 on June 12, 2026) sets out that promoting use and managing risk go hand in hand. Among its examples of risk is generative AI outputting information that differs from the facts (hallucination) and a user being harmed by relying on it, and it requires officials to check accuracy, grounds, and facts in proportion to the risk. A case in which an error in AI output affects the outcome of an administrative procedure, with major consequences such as a company having to suspend its business, is given as an example that may be high risk. The rule the government sets for itself — verify before you use it — applies just as well when citizens use AI.

### Official chatbots give "general answers"
Japan's National Tax Agency runs a chatbot called Futaba that answers questions about tax returns for employees and sole proprietors, the invoice system, and more, around the clock except during maintenance. The agency explains that its answers are general and do not address individual circumstances, that individual questions should go to the tax office, and that you should not enter personal information. Even with a public body's chatbot, the final check against your own situation is done at a desk staffed by people.

### Don't enter your My Number into an AI
By law, Japan's My Number (individual number) may be used only in three administrative fields: social security, tax, and disaster response. A joint alert from the Digital Agency, the National Police Agency, the Personal Information Protection Commission, and other bodies (published 2015, updated March 2023) states that you will never be asked for your My Number by phone, and that no procedure involves being asked by phone for your bank PIN, your assets, or your family makeup, or being asked for money. A chat AI is a tool that sends what you type to the provider's servers (see [handling information when using AI at work](/en/learn/society/data-privacy-at-work)). When you ask it to draft a form, leave the My Number, account number, and PIN fields blank and fill them in yourself on the paper form or the official site.

### Enter procedures through official sites
The National Tax Agency states that it, the regional taxation bureaus, and tax offices never send text messages or emails demanding payment; that websites impersonating the agency's site have been found; and that emails from e-Tax never carry attachments or URLs in the body. It asks people not to access suspicious sites or pay, and to contact their tax office instead. Links in an AI's answer can point to pages that don't exist or to the wrong page (see the [researching with AI](/en/learn/ai-agents/research-with-ai) lesson). Enter a procedure from an official site you searched for yourself or bookmarked — not from a link in an AI answer or a message.

### Good ways to use AI
1. **Get the big picture**: "In general terms, what do I need for registering a move, and in what order?"
2. **Use it to find the official page**: ask which ministry or municipal department is responsible and what the procedure is formally called, then open the official site yourself.
3. **Read the form**: ask what a field or a term — "dependent," "deduction" — means.
4. **Check the draft against the official form and guide**: deadlines, attachments, and where to submit come from the official guide. Verify any deadline or amount the AI gave on the official page.
5. **When in doubt, ask the office**: your municipal desk or the national agency's call center.`,
  },
  quiz: [
    {
      kind: "multi",
      prompt: {
        ja: "給付金の申請書の下書きをAIに手伝ってもらうとき、適切な進め方をすべて選んでください。",
        en: "You're using AI to help draft a benefit application. Which of these are appropriate? Select all that apply.",
      },
      choices: [
        {
          ja: "期限・添付書類・提出先は、公式の様式と手引きで確かめる",
          en: "Check the deadline, attachments, and where to submit against the official form and guide",
        },
        {
          ja: "マイナンバーや口座番号は空欄のままにし、提出する書類に自分で書き込む",
          en: "Leave the My Number and account number blank and fill them in yourself on the form you submit",
        },
        {
          ja: "AIが示したリンクからそのままログインして申請する",
          en: "Log in and apply directly through the link the AI gave",
        },
        {
          ja: "分からない用語の意味をAIに聞き、最後は窓口で確かめる",
          en: "Ask the AI what unfamiliar terms mean, and confirm with the office at the end",
        },
      ],
      correctIndexes: [0, 1, 3],
      explanation: {
        ja: "AIは調べる段階の道具で、期限や添付書類は手引きが正本です。マイナンバーなどは入力せず、自分で書き込みます。AIの答えに含まれるリンクは存在しないページや別のページにつながることがあり、手続きには自分で検索した公式サイトやブックマークから入ります。",
        en: "AI is a tool for the research stage; the official guide is the authority on deadlines and attachments. Don't enter identifiers such as your My Number — write them in yourself. Links in AI answers can point to non-existent or wrong pages, so enter procedures from an official site you found or bookmarked yourself.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "国税庁のチャットボット（ふたば）は、税務署と同じように、個別の事情に基づいて判断してくれる。",
        en: "The National Tax Agency's chatbot, Futaba, makes judgments based on your individual circumstances, just as a tax office would.",
      },
      answer: false,
      explanation: {
        ja: "国税庁は、チャットボットの回答は一般的なもので個別の事情には対応していないとし、個別の相談は税務署へ、個人情報は入力しないよう案内しています。",
        en: "The agency explains that the chatbot's answers are general and do not address individual circumstances; individual questions go to the tax office, and personal information should not be entered.",
      },
    },
  ],
  sources: [
    {
      label: "国税庁: チャットボット（ふたば）にご相談ください",
      url: "https://www.nta.go.jp/taxes/shiraberu/chatbot/index.htm",
    },
    {
      label: "国税庁: 国税庁・国税局・税務署からのお知らせ（偽サイト・迷惑電話・不審メール等に関するご注意）",
      url: "https://www.nta.go.jp/information/attention/attention.htm",
    },
    {
      label: "デジタル庁・警察庁・個人情報保護委員会・消費者庁・総務省・国税庁・厚生労働省: マイナンバー制度に便乗した不正な勧誘や個人情報の取得にご注意ください！（2015-10-01 公表、2023-03-31 最終更新）",
      url: "https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_resources/fb0b3edb-47c6-4eed-abeb-f161194a703f/9f3210b4/20230331_policies_posts_mynumber_security_01.pdf",
    },
    {
      label: "デジタル庁: 行政の進化と革新のための生成AIの調達・利活用に係るガイドライン（DS-920、2025-05-27 決定、2026-06-12 改定）",
      url: "https://www.digital.go.jp/assets/contents/node/information/field_ref_resources/decb64eb-f26e-41cb-8d37-f3dd173108b8/59054b35/20260612_resources_standard_guidelines_guideline_01.pdf",
    },
  ],
  lastVerified: "2026-10-10",
  glossaryRefs: ["my-number", "hallucination"],
};
