import type { Lesson } from "@/engine/content/types";

export const makingMusic: Lesson = {
  id: "creating-with-ai-03",
  slug: "making-music",
  title: {
    ja: "音楽を作る — サービスの商用条件、JASRACの取り扱い、配信先のルール",
    en: "Making Music with AI: Commercial Terms, JASRAC's Handling, and Streaming Platform Rules",
  },
  summary: {
    ja: "AIで作った曲を公開・配信・収益化する前に、プランごとの権利と商用条件、規約が業界との契約で変わること、JASRACが2026年に示した「人間の創作的寄与」の線引き、Spotifyのなりすまし・スパム・AI開示のルールを確かめる。",
    en: "Before you publish, distribute, or monetize an AI-made song: the rights and commercial terms per plan, how terms change with industry deals, JASRAC's 2026 line on \"human creative contribution,\" and Spotify's rules on impersonation, spam, and AI disclosure.",
  },
  body: {
    ja: `## 曲はできた。その先の4つの確認

一文の指示から歌詞・メロディ・演奏まで生成できること、音声合成や声の複製のサービスがあることは、[音楽・音声生成](/ja/learn/generative-media/music-voice-generation)のレッスンで扱いました。このレッスンでは、作った曲を人に聴かせ、配信し、場合によっては収益化するまでに確かめることをまとめます。

> **ご注意**: 規約や法律に関する記述は一般的な情報で、法的助言ではありません。規約は頻繁に変わるので、必ず最新の原文を確かめてください。

### 1. プランで権利と商用条件が変わる
Sunoの利用規約（2026年8月10日改定・9月3日発効）を例にします。
- **無料・基本プラン**: 生成物は、適法な**個人的・非商用の目的**にだけ使うと約束する形です。
- **有料プラン（Pro・Premier）**: Sunoが持つ生成物の権利を利用者に**譲渡**します。ダウンロードした曲は商用にも個人用にも使えますが、ダウンロードできる数はプランごとに月の上限があります。Sunoは、生成物がSunoで作られたものだと公に示す権利を持ち続けます。
- **声**: 自分の声に似せた**ボイスモデル**だけを作れます。他人の声のモデルを作ること、作ろうとすることは明確に禁止されています。

「無料プランで作った曲を動画のBGMにして収益化する」は、この規約では認められません。ほかのサービスでも、無料と有料で生成物の権利や商用条件が違うのは珍しくないので、作る前にプランの条件を確かめます。

### 2. 規約は、業界との契約で変わる
大手レコード会社は2024年6月、SunoとUdioを、許諾なく録音物を学習に使ったとして米国の連邦裁判所に提訴しました。その後、和解と提携が進み、サービスの条件も変わっています（[年表](/ja/timeline)参照）。
- Udioは2025年10月29日、Universal Music Groupとの提携を発表し、**同日からダウンロードを停止**しました。CEOは利用者にとって大きな犠牲だと認めたうえで、プラットフォーム内での利用に切り替えるとしています。
- Sunoは2025年11月25日、Warner Music Groupとの提携を発表しました。ライセンスを受けた音楽で新しいモデルを作ること、**曲のダウンロードには有料アカウントが必要**になり有料プランごとに月のダウンロード数が決まること、オプトインしたWMGのアーティストの名前・肖像・声・楽曲を新しいAI音楽に使えるようにすることを示しました。

教訓は二つです。**作った曲は手元に保存しておく**こと（ダウンロードできなくなることがある）、そして**規約の改定通知を読む**ことです。

### 3. 日本での権利 — JASRACの線引き
日本の著作権法では、AIが自律的に作ったものに著作権は生まれず、人間の創作的寄与があるかどうかが問題になります（[日本の著作権法とAI](/ja/learn/generative-media/copyright-in-japan)のレッスン参照）。音楽の著作権管理団体JASRACは2026年6月11日、生成AIと著作権の特設ページを公開し、生成AIを利用した作品の取り扱いを示しました。
- シンプルな指示に基づいてAIが自律的に生成した歌詞や楽曲のように、**人間の創作的寄与が認められない作品は管理しない**。
- 人間の創作的寄与が認められるものは管理の対象になる。
- 作品を届け出る委託者には、届け出る作品が**人が創作的に寄与した著作物であることを保証する義務**がある。
- 基本的な考え方（2023年7月5日の理事会決議）として、創造のサイクルとの調和、フリーライド防止の必要性、国際的なルールの調和、クリエイターの懸念への対応の4点を掲げ、著作権法第30条の4を改正して、クリエイターが自分の作品を学習素材として使わせるかどうかを判断できる機会を確保するよう求めています。

つまり、作詞は自分でした、メロディをAIの出力から大きく作り替えた、といった**自分の寄与**が何かを説明できるようにしておくことが、権利を主張する前提になります。

### 4. 配信先のルール — Spotifyの例
Spotifyは2025年9月25日、AIに関する保護策を発表しました。
- **なりすまし**: 歌声の模倣（ボーカルのなりすまし）は、まねされたアーティストがその利用を許可した場合にだけ認められる。正規のアーティストのプロフィールにAI生成曲や盗んだ曲を載せる不正なアップロードへの対策も強める。
- **スパムフィルター**: 大量アップロード、重複、検索対策の悪用、再生数と支払いを不正に増やすための極端に短い曲などの手口を使うアップローダーと曲を特定してタグ付けし、推薦しない。過去12か月で7,500万曲を超えるスパム曲を削除したとしています。
- **AIの開示**: 業界団体DDEXが策定した、音楽のクレジットにAIの関与を記す標準を支持する。ボーカル、演奏、ポストプロダクションのどこにAIがどう関わったかを示せます。

実在の歌手の声に似せた曲を公開することは、サービスの規約と配信先のルールの両方に反しうるうえ、日本では声も**パブリシティ権**の保護の対象に含まれると法務省の検討会の報告書が示しています（[資料・画像づくり](/ja/learn/ai-at-work/slides-and-images)のレッスン参照）。自分の声か、同意を得た人の声だけを使います。

### 公開前のチェック
- 使ったプランの規約で、商用利用とダウンロードが認められているか。
- 自分の創作的な寄与（歌詞、構成、編集）を説明できるか。記録を残したか。
- 他人の声や既存の曲に似すぎていないか。
- 配信先のAI開示の欄を正しく埋めたか。`,
    en: `## The song is done. Four checks before it goes out

That one line of text can produce lyrics, melody, and performance, and that speech synthesis and voice-cloning services exist, was covered in [music and voice generation](/en/learn/generative-media/music-voice-generation). This lesson collects what to check before you play a song to others, distribute it, or try to earn from it.

> **Please note**: the points about terms and law are general information, not legal advice. Terms change often — always check the current original.

### 1. Rights and commercial terms depend on the plan
Take Suno's Terms of Service (revised August 10, 2026, effective September 3) as an example.
- **Free and basic tiers**: you agree to use outputs only for lawful **personal, non-commercial purposes**.
- **Paid tiers (Pro and Premier)**: Suno **assigns** to you its rights in the outputs. Songs you download can be used commercially or personally, with a monthly download limit per tier. Suno keeps the right to tell the public that an output was generated through its service.
- **Voices**: you may create a **voice model** resembling only your own voice. Creating, or attempting to create, a voice model of another person is expressly prohibited.

"Make a track on the free plan and use it as background music in a monetized video" is not allowed under these terms. Other services also commonly separate free and paid tiers by output rights and commercial use, so check the plan's conditions before you start.

### 2. Terms change with industry deals
In June 2024 the major record companies sued Suno and Udio in US federal courts, alleging that sound recordings had been used for training without permission. Settlements and partnerships followed, and the services' conditions changed with them (see the [timeline](/en/timeline)).
- On October 29, 2025, Udio announced a partnership with Universal Music Group and **made downloads unavailable from that day**. Its CEO acknowledged this was a significant sacrifice for users, with use shifting to within the platform.
- On November 25, 2025, Suno announced a partnership with Warner Music Group: new models built on licensed music, **a paid account required to download songs** with a set number of downloads per paid tier each month, and the names, images, likenesses, voices, and compositions of WMG artists who opt in becoming available for new AI-generated music.

Two lessons follow. **Keep your own copies** of what you make — downloads can disappear — and **read the notices when terms change**.

### 3. Rights in Japan: where JASRAC draws the line
Under Japanese copyright law, what an AI produces on its own is not a copyrighted work; the question is whether a human made a creative contribution (see [Japanese copyright law and AI](/en/learn/generative-media/copyright-in-japan)). On June 11, 2026, JASRAC, Japan's music copyright collecting society, published a dedicated page on generative AI and copyright setting out how it handles works made with generative AI.
- Works with **no recognizable human creative contribution** — such as lyrics or music generated autonomously by an AI from simple instructions — **are not managed** by JASRAC.
- Works with a recognizable human creative contribution are managed.
- A member registering a work has a **duty to guarantee that it is a copyrighted work to which a person contributed creatively**.
- Its basic position (a board resolution of July 5, 2023) rests on four points — harmony with the creative cycle, the need to prevent free-riding, international harmonization of rules, and responding to creators' concerns — and it calls for amending Article 30-4 of the Copyright Act so that creators can decide whether their works are used as training material.

In practice, being able to explain **your own contribution** — you wrote the lyrics, you substantially reworked the melody the AI produced — is the precondition for claiming any rights.

### 4. Platform rules: Spotify's example
On September 25, 2025, Spotify announced a set of AI protections.
- **Impersonation**: vocal impersonation is only allowed when the impersonated artist has authorized the use. Spotify is also stepping up action against fraudulent uploads that place AI-generated or stolen tracks on legitimate artists' profiles.
- **Spam filter**: a system that identifies uploaders and tracks using tactics such as mass uploads, duplicates, SEO hacks, and artificially short tracks designed to inflate streams and payments, tags them, and stops recommending them. Spotify says it removed more than 75 million spammy tracks in the previous twelve months.
- **AI disclosure**: support for the industry standard developed through DDEX for noting AI involvement in music credits — where and how AI played a role, whether vocals, instrumentation, or post-production.

Publishing a song that imitates a real singer's voice can breach both the service's terms and the platform's rules, and in Japan a report by a Ministry of Justice study group holds that a person's voice is protected by the right of publicity (see the lesson on [making slides and images](/en/learn/ai-at-work/slides-and-images)). Use your own voice, or a voice whose owner has consented.

### Before you publish
- Do the terms of the plan you used allow commercial use and downloads?
- Can you explain your own creative contribution (lyrics, structure, editing)? Did you keep records?
- Is it too close to someone's voice or to an existing song?
- Did you fill in the platform's AI disclosure fields correctly?`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "無料プランで生成した曲を、収益化しているYouTube動画のBGMにしたい。Sunoの規約（2026年10月時点）に沿った対応はどれ？",
        en: "You want to use a song generated on the free plan as background music in a monetized YouTube video. Which option follows Suno's terms as of October 2026?",
      },
      choices: [
        {
          ja: "有料プランで作り直してダウンロードし、商用利用の条件を満たす",
          en: "Remake it on a paid plan, download it, and meet the commercial-use conditions",
        },
        { ja: "無料プランの曲でも生成物は自分のものなので、そのまま使う", en: "Use it as is — outputs on the free plan are yours anyway" },
        {
          ja: "動画の説明欄に「AI生成」と書けば、無料プランの曲でも商用利用できる",
          en: "Write \"AI-generated\" in the video description, which makes commercial use of a free-plan song acceptable",
        },
      ],
      correctIndex: 0,
      explanation: {
        ja: "無料・基本プランの生成物は個人的・非商用の目的にだけ使うと約束する形で、有料プランではSunoが権利を譲渡し、ダウンロードした曲を商用利用できます。表示を付けても、プランの条件は変わりません。",
        en: "On the free and basic tiers you agree to personal, non-commercial use only; on paid tiers Suno assigns the rights and downloaded songs may be used commercially. A label does not change the plan's conditions.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "JASRACは、シンプルな指示でAIが自律的に生成した楽曲でも、作品届を出せば管理の対象にする。",
        en: "JASRAC will manage a piece of music generated autonomously by an AI from simple instructions, as long as a work registration is filed.",
      },
      answer: false,
      explanation: {
        ja: "JASRACは、人間の創作的寄与が認められない作品は管理しないとし、届け出る側に、人が創作的に寄与した著作物であることを保証する義務を課しています。管理の対象になるのは、人間の創作的寄与が認められるものです。",
        en: "JASRAC says it does not manage works with no recognizable human creative contribution, and it requires the person registering a work to guarantee that a human contributed creatively. Only works with such a contribution are managed.",
      },
    },
  ],
  sources: [
    { label: "Suno: Terms of Service（2026-08-10 改定・2026-09-03 発効）", url: "https://suno.com/terms" },
    { label: "Suno: Suno and Warner Music Group（2025-11-25）", url: "https://suno.com/blog/wmg-partnership" },
    {
      label: "JASRAC: 創造のサイクルとの調和がとれたAI利活用の実現に向けて（生成AIと著作権の特設ページ・2026-06-11 公開）",
      url: "https://www.jasrac.or.jp/aboutus/ai.html",
    },
    {
      label: "Spotify Newsroom: Spotify Strengthens AI Protections for Artists, Songwriters, and Producers（2025-09-25）",
      url: "https://newsroom.spotify.com/2025-09-25/spotify-strengthens-ai-protections/",
    },
  ],
  lastVerified: "2026-10-11",
  glossaryRefs: ["ai-music-credits-ddex", "voice-cloning", "right-of-publicity", "article-30-4"],
};
