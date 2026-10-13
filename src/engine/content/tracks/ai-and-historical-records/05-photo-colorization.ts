import type { Lesson } from "@/engine/content/types";

export const photoColorization: Lesson = {
  id: "ai-and-historical-records-05",
  slug: "photo-colorization",
  title: {
    ja: "白黒写真に色をつけるAI — 「記憶の解凍」と色の確かめ方",
    en: "AI That Colorizes Black-and-White Photos: Rebooting Memories, and Checking the Colors",
  },
  summary: {
    ja: "AIは白黒写真に自動で色をつけられる。東京大学の「記憶の解凍」は、AIで色をつけた写真を出発点に、戦争を体験した人との対話や当時の資料で色を直していく。AIの色は出発点にすぎないことと、対話が記憶をよみがえらせた例。",
    en: "AI can colorize black-and-white photos automatically. The University of Tokyo's \"Rebooting Memories\" project starts from AI-colorized photos and then corrects the colors through conversations with people who lived through the war and through historical materials. Why AI's colors are only a starting point, and an example of conversation bringing memories back.",
  },
  body: {
    ja: `## AIによる自動カラー化
東京大学大学院情報学環の渡邉英徳教授は、2016年から、白黒写真を人工知能技術でカラー化する活動を進めています。使っているのは、早稲田大学の研究者らが2016年に発表した、白黒写真に自動で色をつける研究の技術です（"Let there be Color!"、SIGGRAPH 2016）。研究室のワークショップでは、写真を読み取って自動で色をつけるところまでを、スマートフォンだけで済ませていました。

## 「記憶の解凍」 — AIの色を、人が直す
「記憶の解凍」は、広島の高校生だった庭田杏珠さんが2017年に始め、渡邉教授と続けているプロジェクトです。
- まずAIで白黒写真に自動で色をつける。
- そのあと、戦争を体験した人との対話、SNSに寄せられたコメント、当時の資料などをもとに、手作業で色を補正する。
- この過程で写真の印象が大きく変わり、写っているできごとをめぐる対話が生まれる。

2020年には、こうしてカラー化した戦前から戦後の写真355点を収めた本を出版しました。

## 「シロツメクサ」ではなく「タンポポ」
渡邉教授の論文（2019年）は、戦前の広島の家族写真をカラー化したときの例を紹介しています。
- AIで自動で色をつけた結果をもとに、高校生たちは植物の図鑑を調べて、写っている花をシロツメクサだと推測し、花畑の黄色みを弱めた。
- この写真を一緒に見た、写真に写っていた本人は、花を指さして「これはタンポポだった」と言った。この言葉をもとに、色をさらに補正した。

論文は、カラー化という技術だけでは記憶はよみがえらず、親密な対話の場こそが記憶をよみがえらせる重要な要素だったと書いています。

## 読むときの注意
- **AIの色は出発点**: プロジェクトでも、AIがつけた色を、体験者の証言や資料で直しています。カラー化した写真の色が、当時の本当の色だとは限りません。
- **元の写真と一緒に**: カラー化した写真を使うときは、元の白黒写真の出典と、色をどう決めたかを添えると、見る人が確かめられます（このコースからの提案）。
- **作られた画像との違い**: 画像生成AIは、実在しない場面の画像も作れます。資料として扱えるのは、出どころをたどれる写真です（[ディープフェイクと来歴情報](/ja/learn/generative-media/deepfakes-and-provenance)のレッスン参照）。`,
    en: `## Automatic colorization by AI
Professor Hidenori Watanave of the University of Tokyo's Interfaculty Initiative in Information Studies has been colorizing black-and-white photos with artificial intelligence technology since 2016. The technology comes from research on automatic colorization published in 2016 by researchers at Waseda University ("Let there be Color!", SIGGRAPH 2016). In his lab's workshops, everything from scanning a photo to colorizing it automatically was done with just a smartphone.

## Rebooting Memories: people correct the AI's colors
"Rebooting Memories" (Kioku no Kaito) is a project that Anju Niwata began in 2017 as a high school student in Hiroshima and continues with Professor Watanave.
- First, AI automatically colorizes a black-and-white photo.
- Then the colors are corrected by hand, based on conversations with people who lived through the war, comments on social media, and materials from the period.
- In the process the photos' impression changes dramatically, and conversations about the events they show begin.

In 2020 they published a book of 355 photos from before, during, and after the war colorized this way.

## Dandelions, not white clover
A 2019 paper by Professor Watanave describes colorizing a prewar family photo from Hiroshima.
- Working from the AI's automatic colorization, high school students looked at a plant guide, guessed that the flowers in the photo were white clover, and toned down the yellow in the field of flowers.
- When a man who appeared in the photo looked at it with them, he pointed at the flowers and said, "These were dandelions." The colors were corrected again based on his words.

The paper writes that colorization technology alone did not bring his memories back; the close conversation was the key element in reviving them.

## Reading colorized photos
- **AI's colors are a starting point**: Even in this project, the colors AI produced were corrected with eyewitness accounts and historical materials. A colorized photo does not necessarily show the real colors of the time.
- **Keep the original alongside**: When you use a colorized photo, noting the source of the original black-and-white photo and how the colors were decided lets viewers check it (this course's suggestion).
- **Not the same as generated images**: Image-generating AI can also create pictures of scenes that never happened. What you can treat as a historical record is a photo whose origin can be traced (see the [deepfakes and content provenance](/en/learn/generative-media/deepfakes-and-provenance) lesson).`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "「記憶の解凍」で、写真の色はどうやって決めている？",
        en: "How are the colors decided in Rebooting Memories?",
      },
      choices: [
        {
          ja: "AIで自動で色をつけたあと、体験者との対話やSNSのコメント、当時の資料をもとに手作業で補正する",
          en: "AI colorizes the photo first, then the colors are corrected by hand based on conversations with eyewitnesses, social media comments, and period materials",
        },
        { ja: "AIがつけた色を、そのまま正しい色として使う", en: "The colors AI produces are used as the correct colors" },
        { ja: "AIは使わず、すべて手で一から塗る", en: "No AI is used; everything is painted by hand from scratch" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "AIの自動カラー化は出発点で、色は人の証言や資料で直していきます。その過程で対話が生まれることを、プロジェクトは大切にしています。",
        en: "AI colorization is the starting point, and the colors are fixed with people's accounts and records. The project values the conversations that arise along the way.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "渡邉教授の論文は、カラー化の技術だけで、写真に写った人の記憶がよみがえったとしている。",
        en: "Professor Watanave's paper says colorization technology alone brought back the memories of the man in the photo.",
      },
      answer: false,
      explanation: {
        ja: "論文は、技術だけでは記憶はよみがえらず、親密な対話の場が重要だったと書いています。",
        en: "The paper says technology alone did not bring the memories back; the close conversation was what mattered.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "花の色の例から分かることは？",
        en: "What does the flower example show?",
      },
      choices: [
        {
          ja: "AIの色づけや図鑑からの推測が、写真の場にいた人の証言で直されることがある",
          en: "AI colorization and guesses from a plant guide can be corrected by someone who was actually there",
        },
        { ja: "AIの色づけは必ず正しい", en: "AI colorization is always right" },
        { ja: "図鑑で調べれば、昔の写真の色は必ず分かる", en: "A plant guide always reveals the true colors of an old photo" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "高校生たちはシロツメクサだと推測しましたが、写真に写っていた本人は「タンポポだった」と言い、その言葉をもとに色が補正されました。",
        en: "The students guessed white clover, but the man in the photo said they were dandelions, and the colors were corrected based on his words.",
      },
    },
  ],
  sources: [
    {
      label: "東京大学大学院情報学環: 人工知能を使った「記憶の解凍」ワークショップ（2018）",
      url: "https://www.iii.u-tokyo.ac.jp/research/180705kiokunokaito",
    },
    {
      label: "東京大学大学院情報学環: 戦前の白黒写真をAIでカラー化×AR（拡張現実）表示する「記憶の解凍」ARアプリ公開のお知らせ（2019-02-01）",
      url: "https://www.iii.u-tokyo.ac.jp/news/201902019365",
    },
    {
      label: "東京大学大学院情報学環: 「AIとカラー化した写真でよみがえる戦前・戦争」出版のお知らせ（2020-06-23）",
      url: "https://www.iii.u-tokyo.ac.jp/news/2020062312108",
    },
    {
      label: "東京大学 UTokyo BiblioPlaza: AIとカラー化した写真でよみがえる戦前・戦争",
      url: "https://www.u-tokyo.ac.jp/biblioplaza/ja/F_00192.html",
    },
    {
      label: "渡邉英徳: 「記憶の解凍」—資料の“フロー”化とコミュニケーションの創発による記憶の継承（東京大学大学院情報学環紀要 情報学研究 No.96）",
      url: "https://www.iii.u-tokyo.ac.jp/manage/wp-content/uploads/2019/10/96.pdf",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["image-colorization", "digital-archive", "deepfake"],
};
