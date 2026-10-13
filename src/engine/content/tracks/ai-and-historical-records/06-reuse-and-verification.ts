import type { Lesson } from "@/engine/content/types";

export const reuseAndVerification: Lesson = {
  id: "ai-and-historical-records-06",
  slug: "reuse-and-verification",
  title: {
    ja: "使える条件と、確かめ方 — アーカイブの資料とAIの付き合い方",
    en: "Usage Conditions and Checking: Working with Archive Materials and AI",
  },
  summary: {
    ja: "デジタルアーカイブの資料は、すべてが自由に使えるわけではない。保護期間が満了した資料、オープンデータ、許諾が必要な資料の見分け方と、AIの学習用に公開されているデータのライセンス。AIに歴史を聞くときに、元の資料で確かめる習慣。",
    en: "Not everything in a digital archive is free to use. How to tell apart public-domain materials, open data, and materials that need permission; the licenses of datasets published for AI training; and the habit of checking original materials when you ask AI about history.",
  },
  body: {
    ja: `## 使える条件は、資料ごとに違う
- **ジャパンサーチ**: 各コンテンツのページに、デジタルコンテンツを使うときの条件が書かれています。所蔵機関が定めたライセンスに従って使います。
- **国立国会図書館デジタルコレクション**: 公開範囲が「インターネット公開（保護期間満了）」の資料は自由に使え、国立国会図書館への申請も要りません。「インターネット公開（裁定）」や「インターネット公開（許諾）」などは、原則として著作権者の許諾が必要です。資料全体が保護期間満了でも、個々の画像の公開範囲が違う場合があるので、使う画像ごとに確かめます。
- **ColBase（国立文化財機構）**: 文化財の情報をオープンデータとして提供しており、商用利用や編集加工ができ、利用申請も要らない形で公開しています（デジタルアーカイブ戦略2026-2030）。

## CCライセンスの読み方
多くのデータは**CCライセンス**（クリエイティブ・コモンズ・ライセンス）で公開されています。作品を公開する人が「この条件を守れば自由に使ってよい」と示すための仕組みです。
- **CC BY（表示）**: 原作者のクレジット（氏名、作品タイトルなど）を表示すれば、改変も営利目的の二次利用もできる。
- **CC BY-SA（表示—継承）**: クレジットを表示し、改変したものは元と同じライセンスで公開することを条件に、営利目的の二次利用もできる。

## AIのために公開されているデータ
| データ | 公開元 | ライセンス |
|---|---|---|
| 日本古典籍くずし字データセット | 国文学研究資料館・CODH | CC BY-SA 4.0 |
| 「みんなで翻刻」の翻刻データ | みんなで翻刻 | CC BY-SA 4.0 |
| NDLOCR・NDLOCR-Lite | 国立国会図書館 | CC BY 4.0 |

国立国会図書館は、OCRで作ったテキストのうち、保護期間が満了した図書28万点の全文テキストを「次世代デジタルライブラリー」からダウンロードできるようにしています。デジタルアーカイブ戦略2026-2030も、データの活用のしかたの例として、AIの学習用データや研究対象のデータとしての活用を挙げています。

## AIに歴史を聞くとき
ここからは、このコースからの提案です。
- **出典を挙げてもらい、元の資料で確かめる**: 生成AIは、もっともらしい誤りを答えることがあります（[ハルシネーション](/ja/learn/ai-basics/hallucination)のレッスン参照）。デジタルアーカイブで元の資料の画像を見られるなら、そこまでたどります。
- **OCRや認識のテキストは画像と見比べる**: 国立国会図書館のOCRテキストやAIのくずし字認識の結果は、校正されていないことがあります。引用する前に、画像と見比べます。
- **使う前に条件を確かめる**: 画像やテキストを使うときは、資料ごとの利用条件とライセンスを確かめ、求められたクレジットを表示します（AIと著作権は[日本の著作権法とAI](/ja/learn/generative-media/copyright-in-japan)のレッスンで扱っています）。

デジタルアーカイブ戦略が、生成AIの時代にデジタルアーカイブを信頼できる情報の基盤と位置づけるのは、元の資料にたどれるからでもあります。`,
    en: `## Usage conditions differ for every item
- **Japan Search**: Each content page states the conditions for using the digital content. Use it according to the license set by the institution that holds it.
- **NDL Digital Collections**: Materials whose access status is "available online (copyright expired)" can be used freely, with no application to the National Diet Library. Materials marked "available online (ruling)" or "available online (permission)" and the like generally require the copyright holder's permission. Even when an item as a whole is out of copyright, individual images can have a different status, so check each image you want to use.
- **ColBase (National Institutes for Cultural Heritage)**: Provides information on cultural properties as open data that can be used commercially and edited, with no application needed (according to the Digital Archive Strategy 2026-2030).

## Reading Creative Commons licenses
Much data is published under **Creative Commons (CC) licenses**, a way for people who publish works to say, "You may use my work freely as long as you follow these conditions."
- **CC BY (Attribution)**: Credit the original creator (name, title of the work, and so on), and you may modify the work and use it for commercial purposes.
- **CC BY-SA (Attribution-ShareAlike)**: Credit the creator and release modified versions under the same license as the original; commercial use is allowed.

## Data published for AI
| Data | Publisher | License |
|---|---|---|
| Japanese Classical Text Kuzushiji Dataset | National Institute of Japanese Literature and CODH | CC BY-SA 4.0 |
| Minna de Honkoku transcription data | Minna de Honkoku | CC BY-SA 4.0 |
| NDLOCR and NDLOCR-Lite | National Diet Library | CC BY 4.0 |

Of the text it produced with OCR, the National Diet Library offers full text for 280,000 public-domain books for download from its "Next Digital Library." The Digital Archive Strategy 2026-2030 also lists use as AI training data or research data among its examples of how the data can be used.

## Asking AI about history
What follows is this course's own advice.
- **Ask for sources, and check the originals**: Generative AI can give plausible-sounding wrong answers (see the [hallucination](/en/learn/ai-basics/hallucination) lesson). If a digital archive lets you see images of the original material, follow the trail that far.
- **Compare OCR and recognition text with the images**: The National Diet Library's OCR text and AI kuzushiji recognition results may not have been proofread. Compare them with the images before you quote them.
- **Check the conditions before using anything**: When you use images or text, check each item's usage conditions and license, and give any credit required (AI and copyright are covered in the [Japanese copyright law and AI](/en/learn/generative-media/copyright-in-japan) lesson).

Part of why the Digital Archive Strategy can position digital archives as a foundation of reliable information in the age of generative AI is that they let you trace claims back to the original materials.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "国立国会図書館デジタルコレクションで、公開範囲が「インターネット公開（保護期間満了）」の画像は？",
        en: "In the NDL Digital Collections, what about images whose status is \"available online (copyright expired)\"?",
      },
      choices: [
        {
          ja: "自由に使え、国立国会図書館への申請も要らない",
          en: "They can be used freely, with no application to the National Diet Library",
        },
        { ja: "必ず国立国会図書館に申請しなければ使えない", en: "They cannot be used without applying to the National Diet Library" },
        { ja: "個人で見る以外には使えない", en: "They may only be viewed privately" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "保護期間満了の資料は自由に使えます。ただし個々の画像の公開範囲が違う場合があるので、使う画像ごとに確かめます。",
        en: "Out-of-copyright materials can be used freely. Individual images can have a different status, though, so check each one you use.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "CC BY-SA（表示—継承）のライセンスの条件は？",
        en: "What are the conditions of a CC BY-SA (Attribution-ShareAlike) license?",
      },
      choices: [
        {
          ja: "クレジットを表示し、改変したものは元と同じライセンスで公開する",
          en: "Give credit, and release modified versions under the same license as the original",
        },
        { ja: "営利目的の利用は一切できない", en: "No commercial use of any kind" },
        { ja: "クレジットを表示する必要はない", en: "No credit is needed" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "CC BY-SAは、クレジットの表示と、改変したものを同じライセンスで公開することが主な条件で、営利目的の二次利用もできます。",
        en: "CC BY-SA mainly requires credit and releasing modified versions under the same license; commercial reuse is allowed.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "資料全体が保護期間満了でも、個々の画像の公開範囲が違う場合があるので、使う画像ごとに確かめる必要がある。",
        en: "Even when an item as a whole is out of copyright, individual images can have a different status, so each image you use needs checking.",
      },
      answer: true,
      explanation: {
        ja: "国立国会図書館は、使いたい画像を表示して、その画像の公開範囲を確かめるよう案内しています。",
        en: "The National Diet Library asks users to display the image they want and check that image's access status.",
      },
    },
  ],
  sources: [
    { label: "国立国会図書館: 国立国会図書館ウェブサイトからのコンテンツの転載", url: "https://www.ndl.go.jp/use/reproduction" },
    {
      label: "国立国会図書館: ジャパンサーチ — 様々な分野のデジタルアーカイブを検索・閲覧・活用するためのプラットフォーム（2026年8月）",
      url: "https://jpsearch.go.jp/static/pdf/about/AboutJPS_202608.pdf",
    },
    {
      label: "デジタルアーカイブ戦略懇談会・デジタルアーカイブ推進に関する検討会: デジタルアーカイブ戦略2026-2030（2025年5月）",
      url: "https://www.cas.go.jp/jp/seisakukaigi/titeki2/pdf/archive_2026-2030.pdf",
    },
    { label: "クリエイティブ・コモンズ・ジャパン: CCライセンスとは", url: "https://creativecommons.jp/licenses/" },
    { label: "CODH: 日本古典籍くずし字データセット", url: "https://codh.rois.ac.jp/char-shape/" },
    { label: "NDLラボ: 古典籍資料のOCRテキスト化実験（令和4年度～）", url: "https://lab.ndl.go.jp/data_set/r4_koten/" },
    { label: "NDLラボ: 1 令和3年度デジタル化資料のOCRテキスト化", url: "https://lab.ndl.go.jp/data_set/ocr/r3_text/" },
    { label: "NDLラボ: NDLOCR-Liteの公開について（2026-02-24）", url: "https://lab.ndl.go.jp/news/2025/2026-02-24/" },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["creative-commons-license", "digital-archive", "japan-search", "hallucination"],
};
