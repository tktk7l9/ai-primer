import type { Lesson } from "@/engine/content/types";

export const makingVideo: Lesson = {
  id: "creating-with-ai-04",
  slug: "making-video",
  title: {
    ja: "動画を作る — 道具は入れ替わり、人の顔と声には同意がいり、公開には表示がいる",
    en: "Making Video with AI: Tools Change, Faces and Voices Need Consent, and Publishing Needs a Label",
  },
  summary: {
    ja: "動画生成は短いクリップを作る道具で、提供状況の変化も速い。実在の人物の顔や声を使うときの同意、YouTubeの開示ルールと類似性検出、TikTokの自動表示、Googleの電子透かし。",
    en: "Video generation makes short clips, and the tools change fast. Consent for real people's faces and voices, YouTube's disclosure rules and likeness detection, TikTok's automatic labels, and Google's watermark.",
  },
  body: {
    ja: `## 短いクリップから、作品へ

文章や画像から動画を生成する仕組みと難しさ（時間的な一貫性、物理法則、計算コスト）、そしてSoraのように注目されたサービスが短期間で終わった例は、[動画生成](/ja/learn/generative-media/video-generation)のレッスンで扱いました。どのサービスが今使えるかは[モデル・サービス一覧](/ja/models)で確かめてください。

### 作り方の現実
2026年10月時点の動画生成は、長編を一度に作るものではなく、短いクリップを作る道具です。たとえばGoogle DeepMindは、Veoのページに載せた比較評価でVeoの動画を8秒としており、最初のショットの最後の1秒を使ってクリップを延長する機能も紹介しています。趣味の作品に使うなら、次の流れが現実的です。
1. **先に絵コンテ**: 何カット要るか、各カットで何が起きるかを書く。生成は1カットずつ。
2. **実写と混ぜる**: 自分で撮った映像を軸にして、撮れない背景や挿入カット（Bロール）だけAIで作る。人物の一貫性の問題を避けやすくなります。
3. **編集ソフトでつなぐ**: 生成した素材は編集ソフトで並べ、音楽・ナレーション・字幕を付ける（音楽は[音楽を作る](/ja/learn/creating-with-ai/making-music)、台本は[文章を書く相棒としてのAI](/ja/learn/creating-with-ai/writing-with-ai)のレッスン参照）。
4. **音の出どころ**: 環境音やセリフまで生成できるモデルもありますが、実在の人の声に似せる使い方は次の節の問題になります。

### 人の顔と声 — 同意を取る
> **ご注意**: 権利に関する記述は一般的な情報で、法的助言ではありません。

- **家族や友人**: 実在の人の顔や声を動画に使うなら、本人に目的と公開先を伝えて同意を取ります。子どもの場合は特に慎重に。
- **有名人**: 法務省の検討会が2026年8月にまとめた報告書は、生成AIによるパブリシティ権侵害の解釈の指針を示し、声も保護の対象に含めています。本人とまったく同じでなくても、顔などの特徴が似ている程度に加え、本人のイメージに沿う服装や言動、本人だと明示・暗示する情報などを総合して判断するとしています（[資料・画像づくり](/ja/learn/ai-at-work/slides-and-images)のレッスン参照）。
- **自分の顔が使われたら**: YouTubeには、AIで生成・改変されたと思われる自分の顔が映った動画を見つけるための**類似性検出**（Likeness detection）があります。2026年10月時点のヘルプによると、試験運用版の機能で一部の国では使えず、18歳以上のチャンネルの所有者か管理者が、政府機関発行の身分証明書と短い自撮り動画で本人確認をすると（確認には最長5日ほど）、YouTube Studioの［コンテンツ検出］→［類似性］に一致の可能性がある動画が並びます。動画ごとに、プライバシー侵害としての削除申請、著作権侵害による削除通知、アーカイブ（リストから外して公開はそのまま）のいずれかを選べますが、削除申請がすべて認められるわけではなく、パロディや風刺かどうかなども考慮されます。現時点で検出の対象は顔で、声への拡大には2026年中の対応を目指して取り組んでいるとしています。自分の声がまねられた動画は、プライバシー侵害の申し立て手続きから報告できます。

### 公開するときの表示
- **YouTube**: 2026年10月時点のヘルプ「生成AIコンテンツの使用に関する開示」によると、写真のようにリアルなコンテンツをAIで生成したり大幅に改変したりしたときは、投稿時にYouTube Studioの［属性］→［AIの使用］で開示します。開示が必要なのは、実在の人物が言っていないこと・していないことをしたように見せる、実際の出来事や場所の映像を改変する、現実には起きていないシーンをリアルに生成する、そして**動画の中心となる音楽**をAIで作る場合です。一方、明らかに非現実的な内容（ユニコーンに乗って幻想的な世界を旅する人物）、美顔フィルタや色の調整、字幕の作成、アウトライン・台本・サムネイルの作成といった制作支援、**自分の声のクローンによるナレーションや吹き替え**には開示は要りません。ラベルは、写真のようにリアルな内容なら動画プレーヤーにも、そうでない内容やアニメーションなら説明欄に表示されることがあります。ヘルプは、開示しても視聴者が制限されたり収益化の資格に影響したりはしないと明記しています。C2PAのメタデータを含むコンテンツなどには、YouTubeが自動でラベルを付けることもあります。開示を繰り返し意図的に怠ると、ラベルの手動適用や、コンテンツの削除、パートナープログラムへの参加停止といったペナルティもありえます。
- **TikTok**: 2024年5月9日の発表によると、TikTokは1年以上前からリアルなAI生成コンテンツへの表示を投稿者に義務づけており、同日から他の一部のプラットフォームで作られたコンテンツもコンテンツクレデンシャル（C2PA）を読み取って自動で表示を付けるようにし、TikTok上で作ったコンテンツにもコンテンツクレデンシャルを付けていくとしています。
- **電子透かし**: Google DeepMindは、動画生成モデルVeoで作った動画にはSynthIDの透かしが入ると明記しています。消さずに残すことで、後から出どころを確かめられます（[ディープフェイクと来歴情報](/ja/learn/generative-media/deepfakes-and-provenance)のレッスン参照）。

ルールは「AIを使うな」ではなく「本物と間違えられる内容は表示せよ」です（YouTubeでは、動画の中心となるAI音楽も開示の対象です）。空想の映像や自分の声の複製によるナレーションは対象外で、実在の人・場所・出来事に見える映像ほど、表示と同意が要ります。`,
    en: `## From short clips to a finished piece

How video is generated from text and images, what makes it hard (consistency over time, physics, compute), and the example of Sora — a high-profile service that ended within a short time — were covered in [video generation](/en/learn/generative-media/video-generation). For what is available right now, see the [models and services catalog](/en/models).

### What making video actually looks like
As of October 2026, video generation produces short clips — not a whole film in one go. Google DeepMind's Veo page, for example, describes the Veo videos in its comparison tests as 8 seconds long, and presents a feature that extends a clip by continuing from the last second of the first shot. For a hobby project, a realistic workflow is:
1. **Storyboard first**: write down how many shots you need and what happens in each. Generate one shot at a time.
2. **Mix with real footage**: build around footage you shot yourself, and generate only what you can't shoot — backgrounds, cutaways (B-roll). That sidesteps most character-consistency problems.
3. **Assemble in an editor**: lay out the generated material in editing software and add music, narration, and subtitles (for music see [making music](/en/learn/creating-with-ai/making-music); for the script see [writing with AI](/en/learn/creating-with-ai/writing-with-ai)).
4. **Mind where the sound comes from**: some models generate ambient sound and dialogue too, but making a voice resemble a real person is the subject of the next section.

### Faces and voices: get consent
> **Please note**: the points about rights are general information, not legal advice.

- **Family and friends**: if a real person's face or voice goes into your video, tell them what it's for and where it will be published, and get their consent. Be especially careful with children.
- **Celebrities**: a report compiled in August 2026 by a Ministry of Justice study group sets out interpretive guidelines on infringement of publicity rights by generative AI and includes a person's voice among what is protected. The likeness need not be exact: the report says to weigh how closely the face and other features resemble the person together with added cues — clothing or behavior that fits the person's image, or anything stating or implying that it is them (see [making slides and images](/en/learn/ai-at-work/slides-and-images)).
- **If someone uses your face**: YouTube offers **likeness detection**, which helps creators find videos on YouTube where their face appears to be altered or generated by AI. According to the help page as of October 2026, it is an experimental feature that isn't available in some countries; a channel owner or manager over 18 verifies their identity with a government-issued ID and a short selfie video (verification can take up to five days), and potential matches then appear in YouTube Studio under Content detection → Likeness. For each video you can submit a privacy-based likeness removal request, submit a copyright removal request, or move it to the archive (off your review list, still live). Not every removal request succeeds: YouTube weighs factors such as whether the content is parody or satire. For now it looks for faces; YouTube says it is working to extend detection to voices in 2026. You can report a video that imitates your voice through the privacy complaint process.

### Labels when you publish
- **YouTube**: according to its help page "Disclosing use of GenAI content," as of October 2026, when you use AI to generate photorealistic content or meaningfully alter it, you disclose it at upload under Attributes → "AI use" in YouTube Studio. Disclosure is required when content makes a real person appear to say or do something they didn't, alters footage of a real event or place, generates a realistic scene that didn't actually occur, or uses AI to create **music that's the main focus of the video**. It is not required for clearly unrealistic content (someone riding a unicorn through a fantastical world), beauty filters or color adjustment, caption creation, production assistance such as creating an outline, script, or thumbnail, or **cloning your own voice for voice-overs or dubs**. A label may appear in the video player for photorealistic content, and in the expanded description for content that isn't photorealistic or is animated. The help page states that disclosing won't limit a video's audience or affect its eligibility to earn money. YouTube may also apply a label automatically, for example to content that contains C2PA metadata. Creators who consistently choose not to disclose may have a label applied manually, or face penalties including removal of content or suspension from the YouTube Partner Program.
- **TikTok**: in an announcement on May 9, 2024, TikTok said it had required creators to label realistic AI-generated content for over a year, that from that day it would also automatically label content made on some other platforms by reading Content Credentials (C2PA), and that it would start attaching Content Credentials to content made on TikTok.
- **Watermarks**: Google DeepMind states that videos made with its video generation model Veo are marked with SynthID. Leave the watermark in place so the origin can be checked later (see [deepfakes and provenance](/en/learn/generative-media/deepfakes-and-provenance)).

The rule is not "don't use AI" but "label what could be mistaken for real" (on YouTube, AI music that's the main focus of a video must be disclosed too). Fantasy footage and narration in a clone of your own voice are out of scope; the more a video looks like a real person, place, or event, the more it needs a label and consent.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "実在の街に竜巻が迫る様子をAIでリアルに生成し、YouTubeに投稿する。YouTubeのルールに沿った対応はどれ？",
        en: "You generate a realistic AI video of a tornado bearing down on a real city and upload it to YouTube. Which option follows YouTube's rules?",
      },
      choices: [
        { ja: "投稿時に、AIの使用を開示する", en: "Disclose the AI use when uploading" },
        { ja: "実際には起きていない出来事なので、開示は不要", en: "No disclosure is needed, since the event never happened" },
        { ja: "美顔フィルタと同じ軽い加工なので、開示は不要", en: "No disclosure is needed — it's a minor edit like a beauty filter" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "YouTubeのヘルプは、実在する都市に向かって移動する竜巻を、実際に発生したかのようにリアルに描写する映像を、開示が必要な例として挙げています。開示が不要なのは、明らかに非現実的な内容や、フィルタ・字幕・台本の作成のような軽微な編集や制作支援です。",
        en: "YouTube's help page lists a realistic depiction of a tornado moving toward a real city that didn't actually happen as an example that must be disclosed. Disclosure is unnecessary only for clearly unrealistic content or minor edits and production help such as filters, captions, or creating a script.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "YouTubeでAIの使用を開示すると、動画を見られる視聴者が制限され、収益化の資格にも影響する。",
        en: "Disclosing AI use on YouTube restricts who can see the video and affects its eligibility to earn money.",
      },
      answer: false,
      explanation: {
        ja: "2026年10月時点のヘルプは、AIコンテンツについて開示を行っても、視聴者が制限されることはなく、収益化の資格にも影響はないと明記しています。ペナルティの対象になりうるのは、開示を繰り返し意図的に怠る場合です。",
        en: "YouTube's help page, as of October 2026, states that disclosing AI content won't limit a video's audience or affect its eligibility to earn money. Penalties are for creators who consistently choose not to disclose.",
      },
    },
  ],
  sources: [
    {
      label: "YouTube Help: Disclosing use of GenAI content（日本語版「生成 AI コンテンツの使用に関する開示」）",
      url: "https://support.google.com/youtube/answer/14328491?hl=en",
    },
    {
      label: "YouTube Help: Likeness detection on YouTube（日本語版「YouTube の類似性検出」）",
      url: "https://support.google.com/youtube/answer/16440338?hl=en",
    },
    {
      label: "法務省: 肖像、声等の無断利用による民事責任の在り方に関する検討会（取りまとめ報告書・2026年8月）",
      url: "https://www.moj.go.jp/MINJI/minji07_00400.html",
    },
    {
      label: "TikTok Newsroom: Partnering with our industry to advance AI transparency and literacy（2024-05-09）",
      url: "https://newsroom.tiktok.com/en-us/partnering-with-our-industry-to-advance-ai-transparency-and-literacy",
    },
    { label: "Google DeepMind: Veo（SynthID watermarking）", url: "https://deepmind.google/models/veo/" },
  ],
  lastVerified: "2026-10-11",
  glossaryRefs: [
    "likeness-detection",
    "genai-content-disclosure",
    "deepfake",
    "digital-watermark",
    "content-credentials",
    "right-of-publicity",
  ],
};
