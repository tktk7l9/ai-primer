import type { Lesson } from "@/engine/content/types";

export const ocrFullTextSearch: Lesson = {
  id: "ai-and-historical-records-02",
  slug: "ocr-full-text-search",
  title: {
    ja: "本の文字を読み取るAI — 国立国会図書館のOCRと全文検索",
    en: "AI That Reads the Text in Books: The National Diet Library's OCR and Full-Text Search",
  },
  summary: {
    ja: "国立国会図書館がデジタル化した資料は、ほとんどが文字のデータを持たない画像だった。機械学習で改良したOCRで約247万点をテキスト化し、本文まで検索できるようにした経緯。OCRの成績の測り方と、校正していないテキストを使うときの注意。",
    en: "Almost all the materials Japan's National Diet Library had digitized were images with no text data. How it used OCR improved with machine learning to convert about 2.47 million items to text and make their contents searchable, how OCR performance is measured, and what to keep in mind when using text that has not been proofread.",
  },
  body: {
    ja: `## 画像のままでは、中の文字を探せない
国立国会図書館（NDL）は、提供するデジタル化資料のほとんどが、文字のデータを持たない画像データだったとしています。画像から文字を読み取って文字のデータにする技術が**OCR**（光学的文字認識）です。

ただしNDLのデジタル化資料は、昭和前期以前に受け入れた資料が半分近くを占めます。既存のOCRサービスやソフトウェアでは、レイアウトが単純で読みやすい新しい本に比べて、文字認識の性能が大きく下がることが分かっていました。

## 約247万点をまとめてテキスト化（2021年度）
- NDLは2021年度、提供していたほぼすべてのデジタル化資料（図書・雑誌など約247万点、約2.2億画像）のOCRによるテキスト化を、LINE株式会社に委託して実施しました。
- 自館の資料から学習用のデータセットを作り、機械学習でOCRの性能を改善してから作業しています。
- 性能は、出版年代（1870年代から）と分野で分けた33の区分ごとに、文字単位のF値（適合率と再現率を組み合わせた指標）で測りました。目標は、既存の3種類のOCRのうち区分ごとに最も成績のよかった値で、33区分のうち32区分で目標を上回りました。

## 全文検索で変わったこと
- 2022年12月21日、NDLは国立国会図書館デジタルコレクションをリニューアルし、全文検索できるデジタル化資料を5万点から約247万点に増やしました。
- 2024年12月には、全文検索できる資料が300万点を超えました。
- **全文検索**では、タイトルや目次だけでなく、本文や挿絵のキャプションまで検索できます。タイトルや目次からは見つからない記述に出会える可能性があります。

## NDLOCR — 公開されているOCR
NDLは、これからデジタル化する資料のために、機械学習で改良できる自前のOCRプログラム**NDLOCR**も開発し、CC BY 4.0ライセンスで公開しています。

| 版 | 時期 | 主な内容 |
|---|---|---|
| ver.1 | 2021年度 | 全文検索用。株式会社モルフォAIソリューションズに委託して開発 |
| ver.2 | 2022年度 | 視覚障害者などの読み上げ用に、読み取った行を正しい順に並べる機能などを追加 |
| NDLOCR-Lite | 2026年2月24日公開 | GPUのない一般的な家庭用のコンピュータでも動く軽量版。NDLOCRが苦手だった英文や手書き文字にも実験的に対応 |

## 読むときの注意
- **校正していない**: OCRで作った全文テキストは校正していないため、誤認識がありえます。戦前の資料の、右から左に読む横書きのキャプションが逆向きに認識されていることもあります。
- **関係ないものも見つかる**: 本文まで検索するぶん、探している情報と関係のない資料も見つかりやすくなります。
- **読み方は考えてくれない**: 全文検索は文字そのものを探すので、「尾形」と「緒方」のように漢字の表記が違うと見つかりません（新字と旧字などは同じものとして扱われます）。
- **F値は区分ごとの成績**: 古い年代や分野によって成績は違います。適合率と再現率については[インフラ点検とAI](/ja/learn/ai-in-industry/infrastructure-inspection)のレッスンで扱っています。`,
    en: `## Images alone cannot be searched by the words in them
Japan's National Diet Library (NDL) says almost all the digitized materials it provided were image data without text data. The technology that reads characters in images and turns them into text data is **OCR** (optical character recognition).

But nearly half of the NDL's digitized materials were acquired in the early Showa era or before. It was known that existing OCR services and software performed much worse on them than on newer books with simple, readable layouts.

## About 2.47 million items converted at once (fiscal 2021)
- In fiscal 2021, the NDL commissioned LINE Corporation to OCR almost all the digitized materials it provided — books, magazines, and more, about 2.47 million items and about 220 million images.
- It built training datasets from its own materials and improved the OCR with machine learning before doing the work.
- Performance was measured with character-level F scores (a measure combining precision and recall) for each of 33 categories split by publication period (from the 1870s) and field. The target for each category was the best score among three existing OCR products, and the results beat the target in 32 of the 33 categories.

## What full-text search changed
- On December 21, 2022, the NDL renewed the NDL Digital Collections, expanding the digitized materials searchable by full text from 50,000 to about 2.47 million.
- In December 2024, materials searchable by full text passed 3 million.
- **Full-text search** looks not only at titles and tables of contents but also at the body text and illustration captions, so you may find passages you could never reach from titles or contents pages.

## NDLOCR: OCR anyone can use
For materials it digitizes from now on, the NDL also developed its own machine-learning OCR program, **NDLOCR**, and released it under the CC BY 4.0 license.

| Version | When | Main points |
|---|---|---|
| ver.1 | Fiscal 2021 | For full-text search; development commissioned to Morpho AI Solutions |
| ver.2 | Fiscal 2022 | Added features such as putting recognized lines in the right reading order, for read-aloud use by people with visual impairments and others |
| NDLOCR-Lite | Released February 24, 2026 | A lightweight version that runs on ordinary home computers without a GPU, with experimental support for English text and handwriting, which NDLOCR handled poorly |

## Reading the results
- **Not proofread**: Full text made by OCR has not been proofread, so misrecognitions are possible. In prewar materials, horizontal captions meant to be read right to left may have been read in the wrong direction.
- **Unrelated hits**: Because the body text is searched too, materials unrelated to what you want are also more likely to turn up.
- **Readings are not considered**: Full-text search looks for the characters themselves, so different kanji spellings of the same name (such as the surnames 尾形 and 緒方, both read "Ogata") will not match each other, although old and new forms of the same character are treated as the same.
- **F scores are per category**: Performance differs by period and field. Precision and recall are covered in the [infrastructure inspection and AI](/en/learn/ai-in-industry/infrastructure-inspection) lesson.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "NDLが自館の資料に合わせてOCRを改良した理由は？",
        en: "Why did the NDL improve OCR specifically for its own materials?",
      },
      choices: [
        {
          ja: "昭和前期以前の資料が半分近くを占め、既存のOCRでは古い資料の認識性能が大きく下がるから",
          en: "Nearly half its materials date from the early Showa era or before, and existing OCR performed much worse on old materials",
        },
        { ja: "新しい本しかデジタル化していなかったから", en: "It had digitized only new books" },
        { ja: "OCRを使うには自館で作る決まりがあったから", en: "A rule required libraries to build their own OCR" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "古い資料が多いため、自館の資料で学習用データセットを作り、機械学習で性能を改善しました。成績は年代と分野の33区分ごとに測っています。",
        en: "Because so much of the collection is old, the NDL built training datasets from its own materials and improved performance with machine learning, measuring results in 33 categories by period and field.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "国立国会図書館デジタルコレクションのOCRの全文テキストは、人がすべて校正している。",
        en: "The OCR full text in the NDL Digital Collections has all been proofread by people.",
      },
      answer: false,
      explanation: {
        ja: "校正していないため、誤認識がありえます。引用や確認には、元の画像と見比べることが大切です。",
        en: "It has not been proofread, so misrecognitions are possible. When quoting or checking, compare it with the original images.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "2026年2月に公開されたNDLOCR-Liteの特徴は？",
        en: "What is distinctive about NDLOCR-Lite, released in February 2026?",
      },
      choices: [
        {
          ja: "GPUがなくても、一般的な家庭用のコンピュータで動く軽量版",
          en: "A lightweight version that runs on ordinary home computers without a GPU",
        },
        { ja: "くずし字だけを読むための専用版", en: "A special version that only reads kuzushiji" },
        { ja: "有料の商用ソフト", en: "Paid commercial software" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "それまでのNDLOCRはGPUが必須でした。NDLOCR-LiteはCC BY 4.0で公開され、英文や手書き文字にも実験的に対応しています。",
        en: "Earlier NDLOCR required a GPU. NDLOCR-Lite is released under CC BY 4.0 and experimentally supports English text and handwriting.",
      },
    },
  ],
  sources: [
    { label: "NDLラボ: 1 令和3年度デジタル化資料のOCRテキスト化", url: "https://lab.ndl.go.jp/data_set/ocr/r3_text/" },
    { label: "NDLラボ: 2 令和3年度OCR処理プログラム研究開発", url: "https://lab.ndl.go.jp/data_set/ocr/r3_software/" },
    {
      label: "NDLラボ: 令和4年度NDLOCR追加開発事業及び同事業成果に対する改善作業",
      url: "https://lab.ndl.go.jp/data_set/r4ocr/r4_software/",
    },
    { label: "NDLラボ: NDLOCR-Liteの公開について（2026-02-24）", url: "https://lab.ndl.go.jp/news/2025/2026-02-24/" },
    { label: "GitHub: ndl-lab/ndlocr_cli", url: "https://github.com/ndl-lab/ndlocr_cli" },
    {
      label: "カレントアウェアネス・ポータル（国立国会図書館）: 「国立国会図書館デジタルコレクション」をリニューアル（2022-12-21）",
      url: "https://current.ndl.go.jp/car/168581",
    },
    {
      label: "カレントアウェアネス・ポータル（国立国会図書館）: デジタルコレクションの全文検索対象資料が300万点を突破（2025-01-07）",
      url: "https://current.ndl.go.jp/car/238190",
    },
    { label: "国立国会図書館 リサーチ・ナビ: 全文検索をさらに活用するヒント", url: "https://ndlsearch.ndl.go.jp/rnavi/plan/fulltext_tips" },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["ocr", "full-text-search", "precision-and-recall"],
};
