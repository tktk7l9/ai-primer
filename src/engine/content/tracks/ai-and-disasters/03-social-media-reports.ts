import type { Lesson } from "@/engine/content/types";

export const socialMediaReports: Lesson = {
  id: "ai-and-disasters-03",
  slug: "social-media-reports",
  title: {
    ja: "SNSの被災報告をAIで整理する — DISAANAとD-SUMM",
    en: "Organizing Disaster Reports on Social Media with AI: DISAANA and D-SUMM",
  },
  summary: {
    ja: "大きな災害では、SNSに被災の報告があふれ、全体像がつかみにくくなる。情報通信研究機構（NICT）は、X（旧Twitter）の投稿を分析するDISAANAと、地域や種類ごとに要約するD-SUMMを開発し、熊本地震では国の分析班が使った。しくみと、機械の要約の限界。",
    en: "In a major disaster, social media fills with damage reports and the overall picture gets hard to see. Japan's National Institute of Information and Communications Technology (NICT) built DISAANA, which analyzes posts on X (formerly Twitter), and D-SUMM, which summarizes them by area and type; a government analysis team used them after the Kumamoto earthquakes. How they work, and the limits of machine summaries.",
  },
  body: {
    ja: `## DISAANA — 投稿から答えの候補を探す（2015年〜）
情報通信研究機構（NICT）は2015年4月8日、対災害SNS情報分析システムDISAANA（ディサーナ）のリアルタイム版を試験公開しました。
- 日本語のツイートの10%のランダムサンプルをリアルタイムに分析し、「質問応答モード」と「エリア検索モード」で答えの候補を示す。
- 2016年の熊本地震では、内閣官房のツイッター分析班が実際に使い、熊本県の災害対策本部に分析結果が提供された。

ただ、大規模な災害では、DISAANAが出す被災報告も膨大になり、被災状況の概要を一目でつかむのは難しいという課題がありました。

## D-SUMM — 地域と種類ごとに要約する（2016年〜）
NICTは2016年10月18日、災害状況要約システムD-SUMM（ディーサム）を試験公開しました。
- 「火災が発生している」「火事が起きている」のように、意味の似た報告を一まとめにして、コンパクトに要約する。
- 報告をタイプ（地震、道路やインフラの被害、物資の不足など）ごとに分け、指定したエリアの下の市町村などの単位で整理し、重大な報告が多く挙がっているエリアから順に示す。地図でも表示する。
- そのために、DISAANAが報告のタイプを分けるのに使っていた、単語に意味のカテゴリーを付けた辞書（2,800万語）を、機械学習と統計処理で細かく分けた。
- 報告と矛盾する投稿がある可能性を示すマークも付く。元の情報がデマである可能性に気づく手がかりとして使える。

2020年7月10日には、DISAANAとD-SUMMの技術を使ったNECの商用サービスの販売が始まったと、NICTが発表しました。総務省の情報通信白書によると、D-SUMMの試験公開は2023年度末まで続きました。2024年の能登半島地震でのD-SUMMの分析は、[災害時の偽情報とAI](/ja/learn/ai-and-disasters/disaster-misinformation)のレッスンで扱います。

## 読むときの注意
- **見えているのは一部**: 分析の対象は日本語の投稿の10%程度のサンプルです。SNSに投稿されない被害や、SNSを使わない人の状況は映りません。
- **機械の要約は誤りうる**: NICT自身が、もとの投稿が不正確だったり、自動抽出を誤ったりして、デマや誤り、不適切な要約が出ることもあると注意しています。出力は機械処理によるもので、NICTの判断を示すものではないとしています。
- **要約は判断の材料**: 熊本地震でも、分析の結果は災害対策本部に提供される形でした。救助や避難の判断に使うには、ほかの情報と照らして確かめる必要があります。`,
    en: `## DISAANA: finding candidate answers in posts (2015 onward)
On April 8, 2015, Japan's National Institute of Information and Communications Technology (NICT) began a trial release of the real-time version of DISAANA, its system for analyzing disaster information on social media.
- It analyzes a 10% random sample of Japanese tweets in real time and offers candidate answers through a "question answering mode" and an "area search mode."
- After the 2016 Kumamoto earthquakes, the Cabinet Secretariat's Twitter analysis team actually used it, and the results were passed to Kumamoto Prefecture's disaster response headquarters.

In a large disaster, though, DISAANA's output of damage reports also becomes enormous, making it hard to grasp the overall situation at a glance.

## D-SUMM: summarizing by area and type (2016 onward)
On October 18, 2016, NICT began a trial release of D-SUMM, its disaster-information summarizer.
- It groups reports with similar meanings — such as "a fire has broken out" and "there's a fire" — into compact summaries.
- It sorts reports by type (earthquakes, damage to roads and infrastructure, supply shortages, and so on), organizes them by sub-area such as the municipalities within the chosen area, and lists the areas with the most serious reports first. It can also show them on a map.
- To do this, NICT used machine learning and statistical processing to subdivide the semantic-category dictionary of 28 million words that DISAANA used to classify reports.
- A marker flags reports that may be contradicted by other posts — a clue that the original information may be a false rumor.

On July 10, 2020, NICT announced that NEC had begun selling a commercial service built on DISAANA and D-SUMM technology. According to Japan's white paper on information and communications, D-SUMM's trial release ran until the end of fiscal 2023. D-SUMM's analysis of the 2024 Noto Peninsula earthquake is covered in the [disaster misinformation and AI](/en/learn/ai-and-disasters/disaster-misinformation) lesson.

## Reading the output
- **Only part of the picture**: The analysis covers a sample of about 10% of Japanese posts. Damage nobody posts about, and the situation of people who do not use social media, do not show up.
- **Machine summaries can be wrong**: NICT itself warns that inaccurate posts or errors in automatic extraction can produce false rumors, mistakes, or inappropriate summaries, and that the output is machine-generated rather than NICT's own judgment.
- **Summaries are input, not decisions**: After the Kumamoto earthquakes, too, the results were supplied to the disaster response headquarters. Before using them for rescue or evacuation decisions, they need to be checked against other information.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "D-SUMMが解決しようとした、DISAANAの課題は？",
        en: "What problem with DISAANA was D-SUMM meant to solve?",
      },
      choices: [
        {
          ja: "大規模な災害で被災報告が膨大になり、被災状況の概要を一目でつかめないこと",
          en: "In a large disaster, damage reports become so numerous that the overall situation cannot be grasped at a glance",
        },
        { ja: "日本語の投稿を読めないこと", en: "It could not read Japanese posts" },
        { ja: "地震のときしか動かないこと", en: "It only worked during earthquakes" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "D-SUMMは、意味の似た報告をまとめ、タイプとエリアごとに整理して、重大な報告が多いエリアから順に示します。",
        en: "D-SUMM groups reports with similar meanings, organizes them by type and area, and lists the areas with the most serious reports first.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "DISAANAとD-SUMMは、日本語のすべての投稿を分析している。",
        en: "DISAANA and D-SUMM analyze every Japanese post.",
      },
      answer: false,
      explanation: {
        ja: "対象は日本語のツイートの10%のランダムサンプルです。投稿されない被害や、SNSを使わない人の状況は映らないことにも注意が要ります。",
        en: "They analyze a 10% random sample of Japanese tweets. Damage nobody posts about, and the situation of people who are not on social media, will not show up either.",
      },
    },
    {
      kind: "multi",
      prompt: {
        ja: "D-SUMMの機能をすべて選んで。",
        en: "Select all of D-SUMM's features.",
      },
      choices: [
        { ja: "意味の似た報告を一まとめにする", en: "Grouping reports with similar meanings" },
        { ja: "報告をタイプとエリアごとに整理する", en: "Organizing reports by type and area" },
        { ja: "報告と矛盾する投稿がある可能性を示す", en: "Flagging reports that other posts may contradict" },
        { ja: "現地に行って報告が本当か確かめる", en: "Going to the scene to confirm whether reports are true" },
      ],
      correctIndexes: [0, 1, 2],
      explanation: {
        ja: "D-SUMMは投稿を機械で整理・要約するシステムで、現地で確かめるわけではありません。矛盾のマークは、デマの可能性に気づく手がかりです。",
        en: "D-SUMM organizes and summarizes posts by machine; it does not check anything on the ground. The contradiction marker is a clue that something may be a false rumor.",
      },
    },
  ],
  sources: [
    {
      label: "NICT: 大規模災害時の膨大な被災報告を人工知能で瞬時に整理・要約 ～災害状況要約システム「D-SUMM」を試験公開～（2016-10-18）",
      url: "https://www.nict.go.jp/press/2016/10/18-1.html",
    },
    {
      label: "NICT: NICTが開発したDISAANA, D-SUMMの技術を活用した商用サービス販売開始（2020-07-10）",
      url: "https://www.nict.go.jp/info/topics/2020/07/10-1.html",
    },
    {
      label: "総務省: 令和6年版 情報通信白書 コラム「災害時における偽・誤情報への対応」",
      url: "https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/r06/html/nd122c00.html",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["disaana", "d-summ"],
};
