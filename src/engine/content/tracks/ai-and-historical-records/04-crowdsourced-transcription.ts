import type { Lesson } from "@/engine/content/types";

export const crowdsourcedTranscription: Lesson = {
  id: "ai-and-historical-records-04",
  slug: "crowdsourced-transcription",
  title: {
    ja: "人とAIで翻刻する — 市民参加の「みんなで翻刻」",
    en: "Transcribing with People and AI: Minna de Honkoku",
  },
  summary: {
    ja: "残っている歴史資料は膨大で、少数の専門家だけでは翻刻しきれない。2017年に地震の史料から始まった「みんなで翻刻」は、市民とAIの文字認識が協力して、4,800万文字を超える翻刻を進めてきた。その翻刻データが、今度はAIの学習と評価に使われている。",
    en: "There are far too many historical documents for a handful of specialists to transcribe. Minna de Honkoku (\"transcribing together\"), which began in 2017 with documents about earthquakes, has had members of the public and AI character recognition work together on more than 48 million characters of transcription. That data is now used to train and test AI.",
  },
  body: {
    ja: `## 専門家だけでは読み切れない
「みんなで翻刻」は、歴史資料に書かれたくずし字を、インターネットを通じて市民と一緒に読み解く参加型のプロジェクトです。国立歴史民俗博物館、東京大学、京都大学が共同で運営しています。
- **地震の史料から始まった**: 2017年1月10日、京都大学の古地震研究会が、地震の史料を翻刻するWebアプリとして公開しました。日本には地震について書かれた史料が数多く残っていますが、翻刻されたのはごく一部で、翻刻されないまま失われつつあるものもあるためです。
- **約2年で495点**: 2019年3月、東京大学地震研究所図書室の古文書（デジタル画像のあるもの）495点すべての解読を終えました。

## AIの文字認識を組み込む
2019年7月22日のリニューアルで、AIによるくずし字の自動認識機能が加わりました（凸版印刷とCODHが開発したシステム）。デジタルアーカイブの国際規格IIIFにも対応し、国立国会図書館などの機関が公開する史料も扱えるようになりました。ユネスコ世界記憶遺産の「東寺百合文書」の翻刻も始め、翻刻したテキストはオープンデータとして公開されます。

いまのサイトでは、一文字単位でくずし字を自動認識できる2種類のAI（凸版印刷の「ふみのは」APIと、CODHの「Metomくずし字認識サービス」）を使えます。難しい文字に出会ったら、コミュニティ機能でほかの参加者に助けを求められ、くずし字学習アプリ「KuLA」の文字画像で学ぶこともできます。

| 時点 | 参加した人 | 翻刻した文字 |
|---|---|---|
| 2019年3月（地震史料495点の完了時） | 約347人（実際に文字を入力した人） | 465万文字 |
| 2019年7月（1回目のリニューアル時） | 約5,000人 | 600万文字以上 |
| 2026年10月（サイトの表示） | 通算10,800人強 | 4,800万文字超 |

## 翻刻データがAIを育てる
国立国会図書館の古典籍OCR（NDL古典籍OCR）は、「みんなで翻刻」の翻刻データ（CC BY-SA 4.0）などのオープンな翻刻テキストを学習に使っています。さらに、学習に使わずに取り分けた「翻刻！江戸の医療と養生」プロジェクトの翻刻3,028画像分を正解として ver.2 の品質を評価すると、F値の中央値は0.92程度でした。

人が読んだテキストでAIが学び、そのAIが次の翻刻や検索を助ける、という循環が生まれています。京都大学は2019年の時点で、このプロジェクトはAIで古文書を解読するための題材になる可能性も秘めていると書いていました。

## 読むときの注意
- **AIは一文字ずつの支援**: AIが助けるのは一文字単位の認識です。文として読み、確かめるのは参加者の読みと、コミュニティでのやりとりです。
- **人数の数え方に注意**: 参加者の数は、登録した人と、実際に入力した人で大きく違います。2019年3月の時点では、参加登録が4,626人（閲覧だけの人を含む）に対し、文字を入力したのは約347人でした。
- **F値0.92は1つの評価**: 評価に使った資料と同じ種類の資料での目安です。資料によって成績にはばらつきがあります。`,
    en: `## Too much for specialists alone
Minna de Honkoku is a participatory project in which members of the public, working over the internet, help read the kuzushiji (cursive script) in historical documents. It is run jointly by the National Museum of Japanese History, the University of Tokyo, and Kyoto University.
- **It began with earthquake records**: On January 10, 2017, Kyoto University's research group on historical earthquakes released it as a web app for transcribing earthquake documents. Japan has a great many surviving documents about earthquakes, but only a small fraction had been transcribed, and some were being lost without ever being transcribed.
- **495 documents in about two years**: In March 2019, the project finished reading all 495 old documents (those with digital images) held by the library of the University of Tokyo's Earthquake Research Institute.

## Building in AI character recognition
The renewal on July 22, 2019 added automatic AI recognition of kuzushiji (systems developed by Toppan Printing and CODH). It also added support for IIIF, the international standard for digital archive images, so documents published by institutions such as the National Diet Library can be used, and it began transcribing the Toji Temple Hyakugo Documents, a UNESCO Memory of the World. The transcribed texts are released as open data.

On today's site, participants can use two AIs that automatically recognize kuzushiji one character at a time (Toppan's "Fuminoha" API and CODH's "Metom" kuzushiji recognition service). When stuck on a hard character, they can ask other participants for help through community features, and they can practice with character images from the kuzushiji learning app KuLA.

| When | Participants | Characters transcribed |
|---|---|---|
| March 2019 (495 earthquake documents completed) | about 347 (people who actually entered text) | 4.65 million |
| July 2019 (first renewal) | about 5,000 | over 6 million |
| October 2026 (as shown on the site) | over 10,800 in total | over 48 million |

## Transcriptions that train AI
The National Diet Library's OCR for classical books (NDL classical OCR) uses open transcription texts, including Minna de Honkoku's transcription data (CC BY-SA 4.0), for training. And when version 2's quality was evaluated against 3,028 images of transcriptions from the project "Honkoku! Medicine and Health in Edo," which had been set aside and not used for training, its median F score was about 0.92.

The result is a cycle: AI learns from text people have read, and that AI then helps with the next transcriptions and searches. Kyoto University wrote back in 2019 that the project also had the potential to provide material for AI that reads old documents.

## Reading the numbers
- **AI helps one character at a time**: What the AI assists with is recognition of individual characters. Reading the text as sentences and checking it is done by participants and their exchanges in the community.
- **Watch how people are counted**: Registered users and people who actually type in text are very different numbers. In March 2019, 4,626 people had registered (including those who only browsed), but about 347 had entered text.
- **An F score of 0.92 is one evaluation**: It is a guide for materials like those used in the evaluation, and results vary from document to document.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "「みんなで翻刻」が2017年に始まったときの目的は？",
        en: "What was Minna de Honkoku's purpose when it started in 2017?",
      },
      choices: [
        {
          ja: "数多く残る地震の史料を、市民と一緒に翻刻すること",
          en: "Transcribing the many surviving earthquake documents together with the public",
        },
        { ja: "古文書をAIだけで自動的に読むこと", en: "Reading old documents automatically with AI alone" },
        { ja: "古文書の画像を販売すること", en: "Selling images of old documents" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "京都大学の古地震研究会が、翻刻されないまま失われつつある地震の史料を市民と読むために始めました。AIの文字認識は2019年のリニューアルで加わりました。",
        en: "Kyoto University's historical earthquake research group started it to read, with the public, earthquake documents being lost untranscribed. AI character recognition was added in the 2019 renewal.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "2019年3月の時点で、参加登録した4,626人の全員が文字を入力していた。",
        en: "As of March 2019, all 4,626 registered users had entered text.",
      },
      answer: false,
      explanation: {
        ja: "登録には閲覧だけの人も含まれ、実際に文字を入力したのは約347人でした。参加者の数は、何を数えたかを確かめて読みます。",
        en: "Registrations included people who only browsed; about 347 actually entered text. Always check what a participant count is counting.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "NDL古典籍OCRの品質の評価で、「みんなで翻刻」の翻刻はどう使われた？",
        en: "How were Minna de Honkoku transcriptions used to evaluate the NDL classical OCR?",
      },
      choices: [
        {
          ja: "学習に使わずに取り分けた翻刻を正解として、OCRの結果と比べた",
          en: "Transcriptions set aside from training served as the correct answers to compare the OCR output against",
        },
        { ja: "AIの結果を、そのまま翻刻として公開した", en: "The AI's output was published as transcriptions as is" },
        { ja: "翻刻データは使われていない", en: "The transcription data was not used at all" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "取り分けた3,028画像分の翻刻を正解として評価し、ver.2のF値の中央値は0.92程度でした。ほかの翻刻データは学習にも使われています。",
        en: "Set-aside transcriptions for 3,028 images served as the answer key, and version 2's median F score was about 0.92. Other transcription data was used for training as well.",
      },
    },
  ],
  sources: [
    {
      label: "国立歴史民俗博物館: みんなで翻刻ー市民参加で歴史資料を「翻刻」するー",
      url: "https://www.rekihaku.ac.jp/research/researcher/promotion/202605_hashimoto.html",
    },
    {
      label: "京都大学: Webアプリケーション「みんなで翻刻【地震史料】」の公開（2017-01-10）",
      url: "https://www.kyoto-u.ac.jp/ja/research-news/2017-01-10",
    },
    {
      label: "京都大学: 「みんなで翻刻」プロジェクトが東京大学地震研究所蔵の古文書のうち495点をすべて解読（2019-03-19）",
      url: "https://www.kyoto-u.ac.jp/ja/news/2019-03-27-1",
    },
    {
      label: "国立歴史民俗博物館: 市民参加型翻刻プロジェクト「みんなで翻刻」が7月22日リニューアル公開（2019）",
      url: "https://www.rekihaku.ac.jp/news/20190722.html",
    },
    { label: "みんなで翻刻", url: "https://honkoku.org/" },
    { label: "NDLラボ: 古典籍資料のOCRテキスト化実験（令和4年度～）", url: "https://lab.ndl.go.jp/data_set/r4_koten/" },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["honkoku", "kuzushiji", "iiif"],
};
