import type { Lesson } from "@/engine/content/types";

export const kuzushijiRecognition: Lesson = {
  id: "ai-and-historical-records-03",
  slug: "kuzushiji-recognition",
  title: {
    ja: "くずし字を読むAI — 古典籍と古文書の文字",
    en: "AI That Reads Kuzushiji: The Cursive Script of Old Books and Documents",
  },
  summary: {
    ja: "江戸時代以前の本や古文書の「くずし字」は、専門の知識がないと読みにくい。人が翻刻したデータから学ぶAIくずし字認識、スマホアプリ「みを」、似た字形を探すMOJIZO、国立国会図書館の古典籍OCR。AIの得意・不得意と、最後に文字を決めるのはだれか。",
    en: "Kuzushiji, the cursive script of books and documents from the Edo period and earlier, is hard to read without specialist knowledge. AI kuzushiji recognition that learns from human transcriptions, the miwo smartphone app, MOJIZO for finding similar character shapes, and the National Diet Library's OCR for classical books — what AI does well and badly, and who has the final say on each character.",
  },
  body: {
    ja: `## くずし字はなぜ難しいか
人文学オープンデータ共同利用センター（CODH）は、古典籍や古文書に書かれた**くずし字**を機械が読み取り、現代の文字コード（Unicode）に変換するソフトウェアを「くずし字OCR」と呼んでいます。CODHは、現代の手書き文字と比べた難しさを次のように挙げています。
- 前後の文字を続けて書く連綿体で、文字の切れ目が分かりにくい。
- 変体仮名では一つの音に複数の文字が対応するなど、字形が複雑。
- 木版印刷や手書きの写本はレイアウトの自由度が高く、読む順序が複雑なこともある。
- 1000年にわたって使われてきたため、時代による変化がある。

## AIは、人が翻刻したデータから学ぶ
- **日本古典籍くずし字データセット**: 国文学研究資料館が作り、CODHが公開しているデータセット。2019年11月時点で、古典籍44点の画像6,151コマから切り出した4,328文字種・1,086,326文字の字形データです。主に江戸時代の古典籍の字形で、出てくる文字種には偏りがあります。
- **翻刻とOCRは違う**: CODHは、**翻刻**は人による高精度のテキスト化で、OCRを補助に使うことはあっても、最終的には人が文字を決めると説明しています。

## 使えるツール
| ツール | 開発 | できること |
|---|---|---|
| みを（miwo） | CODH（2021年8月に v1.0） | スマホで撮ったくずし字を認識して、現代の文字に変換する。2022年10月の v1.1 から新しいAIモデルRURIを使う |
| MOJIZO | 奈良文化財研究所・東京大学史料編纂所（2016年3月にβ版） | 1文字分の画像から、木簡や古文書などの似た字形の画像を探す。2023年3月に、深層学習による文字画像の特徴抽出をもとにした検索になった |
| NDL古典籍OCR | 国立国会図書館（2022年度から） | 江戸期以前の和古書や清代以前の漢籍など、保護期間の満了した約8万点（430万画像）のテキスト化を実験している |

CODHのAIくずし字認識モデルは、2022年10月にKuroNetから新しいモデルRURI（瑠璃）に代わりました。KuroNetの名前は、IIIF（画像を機関の垣根を越えて扱うための国際規格）に対応した画像を読み取るサービスの名前として残っています。

## AIの得意・不得意 — 「みを」の説明から
CODHは「みを」を作るとき、AIによるくずし字認識は決して完璧にはならないが、それでも役に立つと考えたといいます。
- くずし字を読めない初学者には、AIの精度が人を上回ることが多く、何が書いてあるかが分かるだけでも内容を推測できる。
- 専門家にとっては、AIの精度が人に届かないことも多い。それでも、1枚あたり数秒で翻刻できる速さが資料調査の現場で役に立つ。
- 江戸時代の版本から集めたデータで学習しているため、ほかの時代の資料や、写本、古文書では精度が下がる可能性がある。シミや虫食い、照明や影でも下がる。石碑や看板のくずし字は認識できない。
- 認識結果には誤りが含まれることがあるので、使う人が自分で確かめる。

## 読むときの注意
- **学習したデータに近いものが得意**: 時代や種類の違う資料では、同じ成績は期待できません。
- **最後は人が読む**: AIの結果は下読みや手がかりとして使い、字形の用例やデータベースで確かめます。人とAIで翻刻を進める例は、[次のレッスン](/ja/learn/ai-and-historical-records/crowdsourced-transcription)で扱います。`,
    en: `## Why kuzushiji is hard
Japan's Center for Open Data in the Humanities (CODH) uses the term "kuzushiji OCR" for software that machine-reads the **kuzushiji** (cursive script) in classical books and old documents and converts it into modern character codes (Unicode). CODH lists what makes it harder than modern handwriting:
- Characters are written joined to the ones before and after, so it is hard to tell where one ends and the next begins.
- Character shapes are complex: in hentaigana (variant kana), for example, one sound can be written with several different characters.
- Woodblock prints and handwritten manuscripts have very free layouts, and the reading order can be complicated.
- The script was used for a thousand years, so it changed over time.

## AI learns from human transcriptions
- **The Japanese Classical Text Kuzushiji Dataset**: created by the National Institute of Japanese Literature and published by CODH. As of November 2019 it held glyph data for 1,086,326 characters of 4,328 character types, cut from 6,151 images of 44 classical books. The shapes come mainly from Edo-period books, so the character types it contains are skewed.
- **Transcription is not OCR**: CODH explains that **honkoku** (transcription) means highly accurate conversion to text by people; OCR may be used as an aid, but in the end people decide each character.

## Tools you can use
| Tool | Developer | What it does |
|---|---|---|
| miwo | CODH (v1.0 in August 2021) | Recognizes kuzushiji photographed with a smartphone and converts it to modern characters; since v1.1 in October 2022 it uses a new AI model, RURI |
| MOJIZO | Nara National Research Institute for Cultural Properties and the University of Tokyo's Historiographical Institute (beta in March 2016) | Finds images of similarly shaped characters on wooden tablets (mokkan), old documents, and more from an image of one character; in March 2023 its search came to be based on features extracted from character images with deep learning |
| NDL classical OCR | National Diet Library (since fiscal 2022) | Experimental conversion to text of about 80,000 public-domain items (4.3 million images), such as Japanese books from the Edo period and earlier and Chinese books from the Qing dynasty and earlier |

In October 2022, CODH's AI kuzushiji recognition model changed from KuroNet to a new model, RURI. The KuroNet name lives on as the name of the service that reads images compliant with IIIF (an international standard for working with images across institutions).

## What AI does well and badly, according to miwo's developers
When building miwo, CODH says, it worked from the view that AI kuzushiji recognition will never be perfect but is still useful.
- For beginners who cannot read kuzushiji, the AI is often more accurate than they are, and just knowing which characters are written lets them guess the content.
- For experts, the AI often falls short of human accuracy. Even so, transcribing a page in a few seconds helps during research in the field.
- Because it learned from data collected from Edo-period printed books, accuracy may drop for materials from other periods, manuscripts, and old documents. Stains, wormholes, lighting, and shadows also lower it. It cannot recognize kuzushiji on stone monuments or signboards.
- Recognition results can contain errors, so users must check them themselves.

## Reading the results
- **Best on data like what it learned from**: Do not expect the same results on materials from other periods or of other kinds.
- **People read last**: Use AI output as a first pass or a clue, and check it against example glyphs and databases. An example of people and AI transcribing together is covered in the [next lesson](/en/learn/ai-and-historical-records/crowdsourced-transcription).`,
  },
  quiz: [
    {
      kind: "multi",
      prompt: {
        ja: "CODHが挙げる、くずし字をOCRで読むのが難しい理由をすべて選んで。",
        en: "Select all the reasons CODH gives for why kuzushiji is hard for OCR.",
      },
      choices: [
        { ja: "文字を続けて書くため、文字の切れ目が分かりにくい", en: "Characters are joined, so it is hard to tell where they break" },
        { ja: "変体仮名などで字形が複雑", en: "Character shapes are complex, as with variant kana" },
        { ja: "1000年にわたって使われ、時代による変化がある", en: "It was used for a thousand years and changed over time" },
        { ja: "くずし字の資料はデジタル化が禁止されている", en: "Digitizing kuzushiji materials is prohibited" },
      ],
      correctIndexes: [0, 1, 2],
      explanation: {
        ja: "CODHは、文字の切れ目、字形の複雑さ、レイアウトの自由度、時代による変化を難しさとして挙げています。",
        en: "CODH points to unclear breaks between characters, complex shapes, free layouts, and change over time.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "「みを」のAIは江戸時代の版本のデータで学習しているので、写本や古文書でも同じ精度が出る。",
        en: "Because miwo's AI learned from Edo-period printed books, it is just as accurate on manuscripts and old documents.",
      },
      answer: false,
      explanation: {
        ja: "CODHは、ほかの時代の資料や写本、古文書では精度が下がる可能性があるとしています。学習したデータに近い資料ほど得意です。",
        en: "CODH says accuracy may drop for materials from other periods, manuscripts, and old documents. The AI does best on materials like those it learned from.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "CODHが説明する「翻刻」と「OCR」の違いは？",
        en: "How does CODH distinguish transcription (honkoku) from OCR?",
      },
      choices: [
        {
          ja: "翻刻は人による高精度のテキスト化で、OCRを補助に使っても最終的には人が文字を決める",
          en: "Transcription is highly accurate text conversion by people; OCR may assist, but people decide each character in the end",
        },
        { ja: "翻刻はAIが自動で行う作業のこと", en: "Transcription is the work AI does automatically" },
        { ja: "OCRのほうが翻刻より常に正確", en: "OCR is always more accurate than transcription" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "くずし字データセットも、翻刻の過程で生まれたデータです。熟練者が作業しても読めなかった文字は空白のまま残されています。",
        en: "The kuzushiji dataset itself comes from transcription work. Characters that even experienced transcribers could not read were left blank.",
      },
    },
  ],
  sources: [
    { label: "CODH: くずし字OCR（AIくずし字認識）について", url: "https://codh.rois.ac.jp/char-shape/OCR/" },
    { label: "CODH: 日本古典籍くずし字データセット", url: "https://codh.rois.ac.jp/char-shape/" },
    { label: "CODH: みを（miwo）とは？", url: "https://codh.rois.ac.jp/miwo/about/" },
    { label: "CODH: KuroNetくずし字認識サービス（AI OCR）", url: "https://codh.rois.ac.jp/kuronet/" },
    { label: "奈良文化財研究所・東京大学史料編纂所: 木簡・くずし字解読システム MOJIZO", url: "https://aimojizo.nabunken.go.jp/" },
    { label: "奈良文化財研究所・東京大学史料編纂所: MOJIZO よくあるご質問", url: "https://aimojizo.nabunken.go.jp/doc/faq.html" },
    { label: "NDLラボ: 古典籍資料のOCRテキスト化実験（令和4年度～）", url: "https://lab.ndl.go.jp/data_set/r4_koten/" },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["kuzushiji", "honkoku", "ocr"],
};
