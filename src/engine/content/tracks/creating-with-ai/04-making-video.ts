import type { Lesson } from "@/engine/content/types";

export const makingVideo: Lesson = {
  id: "creating-with-ai-04",
  slug: "making-video",
  title: {
    ja: "動画を作る — 道具は入れ替わり、人の顔と声には同意がいり、公開には表示がいる",
    en: "Making Video with AI: Tools Change, Faces and Voices Need Consent, and Publishing Needs a Label",
  },
  summary: {
    ja: "動画生成は数秒のクリップを作る道具で、提供状況の変化も速い。実在の人物の顔や声を使うときの同意、YouTubeの開示ルールと肖像の検出機能、TikTokの自動表示、Googleの電子透かし。",
    en: "Video generation makes short clips, and the tools change fast. Consent for real people's faces and voices, YouTube's disclosure rules and likeness detection, TikTok's automatic labels, and Google's watermark.",
  },
  body: {
    ja: `## 数秒のクリップから、作品へ

文章や画像から動画を生成する仕組みと難しさ（時間的な一貫性、物理法則、計算コスト）、そしてSoraのように注目されたサービスが短期間で終わった例は、[動画生成](/ja/learn/generative-media/video-generation)のレッスンで扱いました。どのサービスが今使えるかは[モデル・サービス一覧](/ja/models)で確かめてください。

### 作り方の現実
2026年10月時点の動画生成は、長編を一度に作るものではなく、**数秒から十数秒のクリップ**を作る道具です。趣味の作品に使うなら、次の流れが現実的です。
1. **先に絵コンテ**: 何カット要るか、各カットで何が起きるかを書く。生成は1カットずつ。
2. **実写と混ぜる**: 自分で撮った映像を軸にして、撮れない背景や挿入カット（Bロール）だけAIで作る。人物の一貫性の問題を避けやすくなります。
3. **編集ソフトでつなぐ**: 生成した素材は編集ソフトで並べ、音楽・ナレーション・字幕を付ける（音楽は[音楽を作る](/ja/learn/creating-with-ai/making-music)、台本は[文章を書く相棒としてのAI](/ja/learn/creating-with-ai/writing-with-ai)のレッスン参照）。
4. **音の出どころ**: 環境音やセリフまで生成できるモデルもありますが、実在の人の声に似せる使い方は次の節の問題になります。

### 人の顔と声 — 同意を取る
> **ご注意**: 権利に関する記述は一般的な情報で、法的助言ではありません。

- **家族や友人**: 実在の人の顔や声を動画に使うなら、本人に目的と公開先を伝えて同意を取ります。子どもの場合は特に慎重に。
- **有名人**: 法務省の検討会が2026年8月にまとめた報告書は、生成AIによるパブリシティ権侵害の解釈の指針を示し、声も保護の対象に含めています。本人とまったく同じでなくても、顔などの特徴に加え、服装やふるまい、本人が出ていると思わせる情報を総合して判断するとしています（[資料・画像づくり](/ja/learn/ai-at-work/slides-and-images)のレッスン参照）。
- **自分の顔が使われたら**: YouTubeは、クリエイターが自分の顔がAIで改変・生成された動画を見つけられる**肖像の検出**（Likeness detection）を提供しています。2026年10月時点のヘルプによると、18歳以上のチャンネルの所有者か管理者が、政府発行の身分証と短い顔の動画で本人確認をすると（確認には最大5日）、YouTube Studioの「コンテンツの検出」→「肖像」に一致した動画が並び、プライバシー侵害としての削除依頼、著作権の削除依頼、保留のいずれかを選べます。現在検出できるのは**顔の一致**だけで、声の検出は今後の目標とされています。

### 公開するときの表示
- **YouTube**: 視聴者が本物と思い込みそうなリアルな内容をAIや合成で作ったときは、投稿時に開示が必要です。ヘルプが挙げる例は、実在の人物が言っていないこと・していないことをしたように見せる、実在の出来事や場所の映像を改変する、起きていないリアルな場面を生成する、そして**AIで生成した音楽**です。一方、明らかに非現実的な内容（一角獣に乗って空想の世界を進む）、美肌フィルターや色の調整、字幕の作成、構成案・台本・サムネイルの下書きといった制作支援、**自分の声の複製によるナレーション**には開示は要りません。表示は、写実的な内容なら動画プレーヤー上に、そうでなければ説明欄に出ます。開示を続けて怠ると、YouTubeが表示を付けるほか、動画の削除やパートナープログラムの停止もありえます。
- **TikTok**: 2024年5月9日の発表によると、TikTokは1年以上前からリアルなAI生成コンテンツへの表示を投稿者に義務づけており、同日から他社のツールで作られたコンテンツもコンテンツクレデンシャル（C2PA）を読み取って自動で表示を付けるようにし、TikTok上で作ったコンテンツにもコンテンツクレデンシャルを付けていくとしています。
- **電子透かし**: Google DeepMindは、動画生成モデルVeoで作った動画にはSynthIDの透かしが入ると明記しています。消さずに残すことで、後から出どころを確かめられます（[ディープフェイクと来歴情報](/ja/learn/generative-media/deepfakes-and-provenance)のレッスン参照）。

ルールは「AIを使うな」ではなく「本物と間違えられる内容は表示せよ」です。空想の映像や自分のナレーションの複製は対象外で、実在の人・場所・出来事に見える映像ほど、表示と同意が要ります。`,
    en: `## From a few seconds of clip to a finished piece

How video is generated from text and images, what makes it hard (consistency over time, physics, compute), and the example of Sora — a high-profile service that ended within a short time — were covered in [video generation](/en/learn/generative-media/video-generation). For what is available right now, see the [models and services catalog](/en/models).

### What making video actually looks like
As of October 2026, video generation produces **clips of a few seconds to a dozen or so** — not a whole film in one go. For a hobby project, a realistic workflow is:
1. **Storyboard first**: write down how many shots you need and what happens in each. Generate one shot at a time.
2. **Mix with real footage**: build around footage you shot yourself, and generate only what you can't shoot — backgrounds, cutaways (B-roll). That sidesteps most character-consistency problems.
3. **Assemble in an editor**: lay out the generated material in editing software and add music, narration, and subtitles (for music see [making music](/en/learn/creating-with-ai/making-music); for the script see [writing with AI](/en/learn/creating-with-ai/writing-with-ai)).
4. **Mind where the sound comes from**: some models generate ambient sound and dialogue too, but making a voice resemble a real person is the subject of the next section.

### Faces and voices: get consent
> **Please note**: the points about rights are general information, not legal advice.

- **Family and friends**: if a real person's face or voice goes into your video, tell them what it's for and where it will be published, and get their consent. Be especially careful with children.
- **Celebrities**: a report compiled in August 2026 by a Ministry of Justice study group sets out interpretive guidelines on infringement of publicity rights by generative AI and includes a person's voice among what is protected. The likeness need not be exact: the report says to weigh facial and other features together with clothing, behavior, and anything that suggests the real person appears (see [making slides and images](/en/learn/ai-at-work/slides-and-images)).
- **If someone uses your face**: YouTube offers **likeness detection**, which helps creators find videos on YouTube where their face appears to be altered or generated by AI. According to the help page as of October 2026, a channel owner or manager aged over 18 verifies their identity with a government-issued ID and a short video of their face (verification can take up to five days); matched videos then appear in YouTube Studio under Content detection → Likeness, where you can submit a privacy-based likeness removal request, a copyright removal request, or archive the video for later. It currently detects **facial matches** only; voice detection is a stated goal for later.

### Labels when you publish
- **YouTube**: when realistic content — something a viewer could easily mistake for a real person, place, scene, or event — is made with altered or synthetic media, you must disclose it when uploading. The help page's examples include making a real person appear to say or do something they didn't, altering footage of a real event or place, generating a realistic scene that never happened, and **AI-generated music**. Disclosure is not required for clearly unrealistic content (someone riding a unicorn through a fantastical world), beauty filters or color adjustment, caption creation, production assistance such as drafting an outline, script, or thumbnail, or **cloning your own voice for voice-overs**. The label appears in the video player for photorealistic content and in the expanded description otherwise. Creators who consistently fail to disclose may have a label applied by YouTube, or face penalties including removal of content or suspension from the YouTube Partner Program.
- **TikTok**: in an announcement on May 9, 2024, TikTok said it had required creators to label realistic AI-generated content for over a year, that from that day it would also automatically label content made with other companies' tools by reading Content Credentials (C2PA), and that it would start attaching Content Credentials to content made on TikTok.
- **Watermarks**: Google DeepMind states that videos made with its video generation model Veo are marked with SynthID. Leave the watermark in place so the origin can be checked later (see [deepfakes and provenance](/en/learn/generative-media/deepfakes-and-provenance)).

The rule is not "don't use AI" but "label what could be mistaken for real." Fantasy footage and a clone of your own narration are out of scope; the more a video looks like a real person, place, or event, the more it needs a label and consent.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "実在の街に竜巻が迫る様子をAIでリアルに生成し、YouTubeに投稿する。YouTubeのルールに沿った対応はどれ？",
        en: "You generate a realistic AI video of a tornado bearing down on a real city and upload it to YouTube. Which option follows YouTube's rules?",
      },
      choices: [
        { ja: "投稿時に、改変・合成コンテンツとして開示する", en: "Disclose it as altered or synthetic content when uploading" },
        { ja: "実際には起きていない出来事なので、開示は不要", en: "No disclosure is needed, since the event never happened" },
        { ja: "美肌フィルターと同じ軽い加工なので、開示は不要", en: "No disclosure is needed — it's a minor edit like a beauty filter" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "YouTubeのヘルプは、実在の都市に向かう竜巻など、起きていない出来事をリアルに描く映像を、開示が必要な例として挙げています。開示が不要なのは、明らかに非現実的な内容や、フィルター・字幕・台本の下書きのような軽い加工や制作支援です。",
        en: "YouTube's help page lists a realistic depiction of a tornado moving toward a real city that didn't actually happen as an example that must be disclosed. Disclosure is unnecessary only for clearly unrealistic content or minor edits and production help such as filters, captions, or drafting a script.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "YouTubeの肖像の検出は、2026年10月時点で、AIでまねられた自分の声も見つけられる。",
        en: "As of October 2026, YouTube's likeness detection can also find AI imitations of your voice.",
      },
      answer: false,
      explanation: {
        ja: "ヘルプによると、現在検出できるのは顔の一致だけで、声の検出は今後の目標です。見つかった動画には、プライバシー侵害としての削除依頼などができます。",
        en: "According to the help page, it currently detects facial matches only; voice detection is a goal for later. For matched videos you can submit a privacy-based removal request and similar actions.",
      },
    },
  ],
  sources: [
    {
      label: "YouTube Help: Disclosing use of altered or synthetic content",
      url: "https://support.google.com/youtube/answer/14328491?hl=en",
    },
    { label: "YouTube Help: Likeness detection on YouTube", url: "https://support.google.com/youtube/answer/16440338?hl=en" },
    {
      label: "TikTok Newsroom: Partnering with our industry to advance AI transparency and literacy（2024-05-09）",
      url: "https://newsroom.tiktok.com/en-us/partnering-with-our-industry-to-advance-ai-transparency-and-literacy",
    },
    { label: "Google DeepMind: Veo（SynthID watermarking）", url: "https://deepmind.google/models/veo/" },
  ],
  lastVerified: "2026-10-11",
  glossaryRefs: [
    "likeness-detection",
    "altered-or-synthetic-content",
    "deepfake",
    "digital-watermark",
    "content-credentials",
    "right-of-publicity",
  ],
};
