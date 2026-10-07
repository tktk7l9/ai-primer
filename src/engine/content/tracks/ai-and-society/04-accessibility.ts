import type { Lesson } from "@/engine/content/types";

export const accessibility: Lesson = {
  id: "ai-and-society-04",
  slug: "accessibility",
  title: {
    ja: "AIとアクセシビリティ — 見る・聞く・話すを支える力と、その限界",
    en: "AI and Accessibility: Help with Seeing, Hearing, and Speaking — and Its Limits",
  },
  summary: {
    ja: "画像の説明、話し声の字幕、打った文字の読み上げ。AIは障害のある人の「見る・聞く・話す」を支える道具になった。何ができて、どこで頼りすぎてはいけないかを、当事者団体の調査と声明から学ぶ。",
    en: "Describing images, captioning speech, speaking typed text aloud: AI has become a tool for seeing, hearing, and speaking. What it can do, and where it must not be over-relied on, from disability organizations' research and statements.",
  },
  body: {
    ja: `## 見る・聞く・話すを支える

目の見えない人・見えにくい人の多くは、画面の内容を音声や点字に変えるソフト（**スクリーンリーダー**）でパソコンやスマートフォンを使います。ただ、写真や図のように文字になっていない情報は、作り手が説明（**代替テキスト**）を付けていなければ伝わりません。そこにAIが加わり、画像を言葉で説明したり、話し声をその場で字幕にしたり、打った文字を読み上げたりできるようになりました（[マルチモーダル](/ja/learn/ai-basics/multimodal)のレッスン参照）。

### 日本語で使える機能の例
2026年10月時点でAppleが公表している対応状況では、iPhoneの次の機能が日本語に対応しています。
- **画像と周りの様子の説明**: スクリーンリーダーのVoiceOverと拡大鏡で、画像や景色を端末の中で説明する機能。
- **ライブキャプション**: 話し声をその場で字幕にする機能。
- **ライブスピーチ**: 打った文字を読み上げる機能。話すことが難しい人のコミュニケーション（**拡大・代替コミュニケーション（AAC）**）を助けます。

一方、自分の声に似た合成音声を作る「パーソナルボイス」は、英語（米国）・中国語（中国本土）・スペイン語（メキシコ）だけで、日本語には対応していません。使える機能は言語や機種によって違い、更新で変わるので、使う前に確かめてください。

### 当事者の調査が示したこと
米国の視覚障害者支援団体AFB（American Foundation for the Blind）が2026年8月に公表した報告書は、米国での調査から、目の見えない人・見えにくい人368人の回答を分析しています。
- **よく使われている**: 79%が、AIを画像の説明に使っていました。
- **正確さの評価**: 「おおむね正確」が61%、「ある程度正確」が24%で、「ほぼ完璧」と答えたのは10%でした。
- **害を受けた人も**: 画像の説明を使う人の21%（61人）が、AIの誤りで害を受けたと答えています。ある参加者は、横断歩道の信号が「進め」か「止まれ」かを尋ね、「進め」と答えられたところに車が来て、AIが事実でない答えを作っていた（[ハルシネーション](/ja/learn/ai-basics/hallucination)）と気づいたと語っています。
- **確かめる負担**: 報告書は、薬のラベルを読み違えれば飲み忘れや過量服用につながりうること、機能が中途半端だと、見て確かめるのが最も難しい本人に確認の手間が押しつけられることを指摘しています。AIの機能を使うために、個人情報やプライバシーを差し出さざるをえない場合があることにも触れています。

### 字幕と、人による支援
世界ろう連盟（WFD）と国際難聴者連盟（IFHOH）は2019年の共同声明で、自動音声認識（ASR）の研究開発を歓迎しながらも、ASRは電話リレーサービスや字幕サービスといった今の手段を置き換えるべきではないとしています。固有名詞や専門用語は認識しにくく、人の担い手なしにASRだけを使えば、ろう者や難聴者は社会への完全な参加から締め出される、という理由です。話し方の特徴によって認識の誤りが増える例も報告されています（[会議の記録と要約](/ja/learn/ai-at-work/meeting-notes)のレッスン参照）。字幕から「〜しないでください」の「ない」が1語抜けるだけで、意味は正反対になります。

### 作る側・使う側にできること
Webの標準化団体W3Cは、画像の文字による説明や音声の字幕を作るには少なくともある程度の人の関与が必要で、音声認識や画像認識のツールは作り手を助けられても、たいてい完全には自動化できないとしています。
- **作る側**: 画像を公開するときは、AIの説明を下書きにしてもよいので、伝えたい内容に合わせて自分で代替テキストを書き添える。動画の自動字幕は、公開前に見直して直す。
- **使う側・周りの人**: 横断歩道や薬、お金など、間違えると危険な場面では、AIの説明だけに頼らない。写真や音声に写る人・話す人のプライバシーにも気を配る。
- **人による支援を残す**: 手話通訳・文字通訳・電話リレーサービスなど人が担う支援を、AIがあるから不要とはしない。どの手段を使うかは、使う本人の希望を聞いて決める。`,
    en: `## Help with seeing, hearing, and speaking

Many blind and low-vision people use computers and phones through software that turns what is on screen into speech or braille — a **screen reader**. But information that isn't text, such as photos and charts, doesn't come through unless its creator has added a description (**alt text**). AI now fills some of that gap: it can describe images in words, caption speech as it happens, and speak typed text aloud (see the [multimodal](/en/learn/ai-basics/multimodal) lesson).

### Examples that work in Japanese
According to Apple's published availability as of October 2026, these iPhone features support Japanese:
- **Image and scene descriptions**: on-device descriptions of images and surroundings in the VoiceOver screen reader and in Magnifier.
- **Live Captions**: captions of speech in real time.
- **Live Speech**: speaks what you type, supporting communication for people who find speaking difficult (**augmentative and alternative communication, or AAC**).

Personal Voice, which creates a synthesized voice that sounds like your own, supports only English (United States), Mandarin Chinese (China mainland), and Spanish (Mexico) — not Japanese. What works differs by language and device and changes with updates, so check before you rely on it.

### What blind and low-vision users report
In August 2026, the American Foundation for the Blind (AFB) published a report analyzing the responses of 368 blind and low-vision participants in a US survey:
- **Widely used**: 79% used AI for image descriptions.
- **Accuracy ratings**: 61% said the descriptions were mostly accurate and 24% somewhat accurate; only 10% said extremely accurate or near perfect.
- **Some were harmed**: 21% of those using AI image description (61 people) said a mistake by the AI had hurt them. One participant asked whether a crosswalk signal said Walk or Don't Walk; the AI said Walk, a car came along, and they realized it had made the answer up (a [hallucination](/en/learn/ai-basics/hallucination)).
- **Who carries the checking**: the report notes that misreading a medication label could lead to missed doses or overdosing, and that partial functionality shifts the work of verification onto the person least able to check visually whether the system got it right. It also notes that some AI features require users to give up personal information and privacy.

### Captions, and support from people
In a 2019 joint statement, the World Federation of the Deaf (WFD) and the International Federation of Hard of Hearing People (IFHOH) welcomed research on automatic speech recognition (ASR) — but said ASR should not replace existing services such as telephone relay services and captioning services. Proper nouns and technical terms are hard for it to recognize reliably, and when ASR is used without a human operator, deaf and hard of hearing people are excluded from full participation in society. Recognition errors have also been found to rise for certain ways of speaking (see the [meeting notes](/en/learn/ai-at-work/meeting-notes) lesson). Drop a single "not" from a caption, and it says the opposite of what was said.

### What creators and users can do
The W3C, the web's standards body, says that creating text descriptions for images and captions for audio takes at least some level of human involvement: speech and image recognition tools can help authors, but the conversion is usually not fully automatable.
- **When you create**: when publishing an image, an AI description can be your first draft, but write the alt text yourself to fit what you want to convey. Review and correct automatic captions on your videos before you publish.
- **When you use, or support someone who does**: for anything risky to get wrong — crossings, medication, money — don't rely on an AI description alone. Mind the privacy of the people who appear in photos or are heard in recordings.
- **Keep human support**: don't treat sign language interpreters, live captioners, or relay services as unnecessary because AI exists. Let the person who uses them choose what works for them.`,
  },
  quiz: [
    {
      kind: "boolean",
      prompt: {
        ja: "AIによる画像の説明は、横断歩道の信号の確認のように安全に関わる場面でも、そのまま頼ってよい。",
        en: "AI image descriptions can be relied on as is, even for safety-critical checks such as reading a crosswalk signal.",
      },
      answer: false,
      explanation: {
        ja: "AFBの調査では、画像の説明を使う人の21%がAIの誤りで害を受けたと答え、信号を取り違えて車が来た例も報告されています。安全に関わる場面では、ほかの手段と組み合わせます。",
        en: "In AFB's survey, 21% of image-description users said an AI mistake had hurt them, including a misread crosswalk signal with a car approaching. For safety-critical checks, combine it with other means.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "世界ろう連盟（WFD）と国際難聴者連盟（IFHOH）は、2019年の共同声明で自動音声認識（ASR）についてどう述べているか？",
        en: "In their 2019 joint statement, what did the WFD and IFHOH say about automatic speech recognition (ASR)?",
      },
      choices: [
        {
          ja: "研究開発は歓迎するが、電話リレーサービスや字幕サービスを置き換えるべきではない",
          en: "They welcome research on it, but it should not replace telephone relay and captioning services",
        },
        {
          ja: "ASRが十分に正確になったので、人による字幕はもう必要ない",
          en: "ASR is now accurate enough that human captioning is no longer needed",
        },
        { ja: "ASRの研究開発は、すぐにやめるべきだ", en: "Research on ASR should stop immediately" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "声明は、固有名詞や専門用語の認識が難しいことなどを挙げ、人の担い手なしにASRだけを使えば、ろう者や難聴者が社会への完全な参加から締め出されるとしています。",
        en: "The statement points to problems such as recognizing proper nouns and technical terms, and says that ASR used without a human operator excludes deaf and hard of hearing people from full participation in society.",
      },
    },
  ],
  sources: [
    {
      label: "American Foundation for the Blind: New Doors, New Locks — AI and the Daily Lives of Blind and Low Vision People (2026-08)",
      url: "https://www.afb.org/research-and-initiatives/ai-series/new-doors-new-locks",
    },
    {
      label: "WFD & IFHOH: Joint Statement on Automatic Speech Recognition in Telephone Relay Services and in Captioning Services (2019-03-27)",
      url: "https://wfdeaf.org/wp-content/uploads/WFD-IFHOH-Joint-Statement-on-ARS-2019-Final.pdf",
    },
    {
      label: "W3C WAI: Tools and Techniques — Perception",
      url: "https://www.w3.org/WAI/people-use-web/tools-techniques/perception/",
    },
    { label: "Apple: iOS and iPadOS — Feature Availability", url: "https://www.apple.com/ios/feature-availability/" },
  ],
  lastVerified: "2026-10-07",
  glossaryRefs: ["screen-reader", "alt-text", "aac", "speech-recognition", "hallucination", "multimodal"],
};
