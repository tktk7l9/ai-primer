import type { Lesson } from "@/engine/content/types";

export const digitalArchives: Lesson = {
  id: "ai-and-historical-records-01",
  slug: "digital-archives",
  title: {
    ja: "デジタルアーカイブとAI — 残すだけでなく、探せるように",
    en: "Digital Archives and AI: Not Just Preserved, but Findable",
  },
  summary: {
    ja: "博物館、図書館、文書館の資料をデジタル化して公開するデジタルアーカイブ。資料を探す手がかりになるメタデータと、分野をまたいで探せるジャパンサーチ。生成AIの時代に、国の戦略がデジタルアーカイブに何を期待しているかを見る。",
    en: "Digital archives digitize and publish the holdings of museums, libraries, and archives. This lesson covers the metadata that makes materials findable, Japan Search for searching across fields, and what Japan's national strategy expects of digital archives in the age of generative AI.",
  },
  body: {
    ja: `## デジタルアーカイブとは
国の「デジタルアーカイブ戦略2026-2030」（2025年5月決定）は、**デジタルアーカイブ**を、様々なデジタル情報資源を収集・保存・提供する仕組みの総体と説明しています。扱うのは、デジタル化した資料（コンテンツ）だけではありません。
- **メタデータ**: コンテンツの内容、外形、所在などを記述したデータ。図書館の書誌データ、収蔵品の目録データ、文化財の基礎データなど。
- **サムネイル/プレビュー**: コンテンツの縮小版や部分表示。

資料を探すときの手がかりになるのは、まずメタデータです。

## ジャパンサーチ — 分野をまたいで探す
**ジャパンサーチ**は、書籍、公文書、文化財、美術、人文学、自然史・理工学、放送番組、映画など、様々な分野のコンテンツのメタデータをまとめて検索・閲覧・活用できる国のプラットフォームです。2020年8月25日に正式版が公開されました。内閣府知的財産戦略推進事務局が事務局を務める会議の方針のもと、国立国会図書館がシステムを運用しています。

| 項目 | 数（2026年10月13日時点） |
|---|---|
| 連携データベース | 321 |
| 連携機関 | 208 |
| メタデータ | 32,876,812件 |

キーワードでの横断検索のほか、画像から似た特徴の画像を探す検索や、「馬に乗った人」のような単語や文章から画像を探す検索もあります。各コンテンツのページには、デジタルコンテンツを使うときの条件が書かれています（[使える条件と、確かめ方](/ja/learn/ai-and-historical-records/reuse-and-verification)のレッスン参照）。

## 生成AIの時代に期待されること
デジタルアーカイブ戦略2026-2030は、AIについて次のように書いています。
- 生成AIの普及などで偽・誤情報の流通が世界的に深刻になるなか、デジタルアーカイブを、インターネット上で信頼性の高い情報・知識を集めて提供する中核的な基盤と位置づけられる。
- 知的財産権などを適切に守りながら、AIを含む先端技術の活用を進めることは重要な課題。来歴の管理や標準化など、データの信頼性に関わる技術や議論の動向にも気を配る。
- データを活用する人の例として、AIの学習用データや研究対象のデータとしての活用も挙げる。
- 人文学では、大規模なデータをAIなどで分析する「デジタル・ヒューマニティーズ」が進んでいる。

## 読むときの注意
- **探せるのは主にメタデータ**: ジャパンサーチが集めているのはメタデータです。資料の画像などは、コンテンツのページから収録元のデータベースに移って見ます。
- **画像があっても、中の文字では探せない**: 国立国会図書館は、提供するデジタル化資料のほとんどが文字のデータを持たない画像だったとしています。これを変えたOCRは、[次のレッスン](/ja/learn/ai-and-historical-records/ocr-full-text-search)で扱います。
- **数は増え続ける**: 連携の数やメタデータの件数は、確認した日の時点のものです。`,
    en: `## What is a digital archive?
Japan's "Digital Archive Strategy 2026-2030" (adopted in May 2025) describes a **digital archive** as the whole system for collecting, preserving, and providing digital information resources. It covers more than the digitized materials (the content) themselves:
- **Metadata**: data describing a work's content, form, location, and so on — library catalog records, inventory records of collections, basic data on cultural properties, and the like.
- **Thumbnails/previews**: reduced or partial views of the content.

When you look for materials, metadata is the first thing that lets you find them.

## Japan Search: searching across fields
**Japan Search** is a national platform for searching, viewing, and using the metadata of content from many fields at once — books, public records, cultural properties, art, the humanities, natural history and science, broadcast programs, film, and more. Its official version launched on August 25, 2020. The National Diet Library (NDL) runs the system under the direction of a council whose secretariat is the Cabinet Office's Intellectual Property Strategy Headquarters secretariat.

| Item | Count (as of October 13, 2026) |
|---|---|
| Linked databases | 321 |
| Partner institutions | 208 |
| Metadata records | 32,876,812 |

Besides keyword search across databases, it offers search for images with similar features to a given image, and search for images from words or sentences such as "a person on horseback." Each content page states the conditions for using the digital content (see the [usage conditions and checking](/en/learn/ai-and-historical-records/reuse-and-verification) lesson).

## What is expected in the age of generative AI
The Digital Archive Strategy 2026-2030 says this about AI:
- As false and misleading information becomes a more serious problem worldwide, partly because of the spread of generative AI, digital archives can be positioned as core infrastructure that gathers and provides reliable information and knowledge on the internet.
- Using advanced technologies including AI, while properly protecting intellectual property rights, is an important issue; attention should also be paid to technologies and debates on data reliability, such as provenance management and standardization.
- Among the examples of people who use the data, it lists use as training data for AI or as data for research.
- In the humanities, "digital humanities" research that analyzes large amounts of data with AI and other tools is advancing.

## Reading the numbers
- **What you search is mainly metadata**: Japan Search gathers metadata. To see the images of a work, you move from its content page to the source database.
- **Images alone cannot be searched by the words in them**: The NDL says almost all the digitized materials it provided were images without text data. The OCR that changed this is covered in the [next lesson](/en/learn/ai-and-historical-records/ocr-full-text-search).
- **The numbers keep growing**: Counts of partners and metadata records are as of the date checked.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "デジタルアーカイブ戦略2026-2030が「メタデータ」と呼んでいるものは？",
        en: "What does the Digital Archive Strategy 2026-2030 call \"metadata\"?",
      },
      choices: [
        {
          ja: "コンテンツの内容、外形、所在などを記述したデータ（書誌データや目録データなど）",
          en: "Data describing a work's content, form, location, and so on (catalog records, inventories, and the like)",
        },
        { ja: "資料の画像そのもの", en: "The images of the materials themselves" },
        { ja: "AIが資料から作った要約", en: "Summaries of the materials written by AI" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "メタデータは資料を探す手がかりになるデータです。ジャパンサーチは、様々な分野のメタデータをまとめて検索できるようにしています。",
        en: "Metadata is the data that lets you find materials. Japan Search makes metadata from many fields searchable in one place.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "ジャパンサーチでは、連携先の資料の本文をすべて全文検索できる。",
        en: "Japan Search lets you run full-text searches on the entire text of every partner's materials.",
      },
      answer: false,
      explanation: {
        ja: "ジャパンサーチが集めて検索できるようにしているのはメタデータです。資料そのものは、コンテンツのページから収録元のデータベースで見ます。",
        en: "What Japan Search gathers and makes searchable is metadata. The materials themselves are viewed in the source databases, reached from each content page.",
      },
    },
    {
      kind: "multi",
      prompt: {
        ja: "デジタルアーカイブ戦略2026-2030がAIについて書いていることをすべて選んで。",
        en: "Select everything the Digital Archive Strategy 2026-2030 says about AI.",
      },
      choices: [
        {
          ja: "偽・誤情報が深刻になるなか、信頼性の高い情報を集めて提供する中核的な基盤と位置づけられる",
          en: "As misinformation grows more serious, archives can be positioned as core infrastructure for reliable information",
        },
        {
          ja: "知的財産権を守りながら、AIを含む先端技術の活用を進めることは重要な課題",
          en: "Using advanced technologies including AI, while protecting intellectual property, is an important issue",
        },
        { ja: "AIの学習用データとしての活用も想定している", en: "Use as AI training data is among the expected uses" },
        { ja: "AIが生成した画像を、アーカイブの資料の中心にする", en: "AI-generated images should become the core of archive collections" },
      ],
      correctIndexes: [0, 1, 2],
      explanation: {
        ja: "戦略は、生成AIの時代に信頼できる情報の基盤としての役割と、権利を守りながらのAIの活用の両方を挙げています。",
        en: "The strategy points both to archives' role as a foundation of trustworthy information in the age of generative AI and to using AI while protecting rights.",
      },
    },
  ],
  sources: [
    {
      label: "デジタルアーカイブ戦略懇談会・デジタルアーカイブ推進に関する検討会: デジタルアーカイブ戦略2026-2030（2025年5月）",
      url: "https://www.cas.go.jp/jp/seisakukaigi/titeki2/pdf/archive_2026-2030.pdf",
    },
    { label: "ジャパンサーチ: ジャパンサーチ正式版を公開しました（2020-08-25）", url: "https://jpsearch.go.jp/news/20200821" },
    { label: "ジャパンサーチ: ジャパンサーチの概要", url: "https://jpsearch.go.jp/about" },
    { label: "ジャパンサーチ: 現在のデータ", url: "https://jpsearch.go.jp/stats" },
    {
      label: "国立国会図書館: ジャパンサーチ — 様々な分野のデジタルアーカイブを検索・閲覧・活用するためのプラットフォーム（2026年8月）",
      url: "https://jpsearch.go.jp/static/pdf/about/AboutJPS_202608.pdf",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["digital-archive", "metadata", "japan-search"],
};
