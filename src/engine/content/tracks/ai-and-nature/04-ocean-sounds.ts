import type { Lesson } from "@/engine/content/types";

export const oceanSounds: Lesson = {
  id: "ai-and-nature-04",
  slug: "ocean-sounds",
  title: {
    ja: "海の音を聞くAI — クジラの歌を探す",
    en: "AI That Listens to the Ocean: Searching for Whale Songs",
  },
  summary: {
    ja: "姿の見えにくいクジラも、水中マイクなら声で追える。NOAAとGoogleは、14年分・18万7,000時間を超える録音からザトウクジラの歌を探すAIを作り、ハワイでの減少や新しい場所での発見につなげた。鳥で学んだAIが、少しの例でクジラの声の分類にも使えることも分かってきた。",
    en: "Whales that are hard to see can still be tracked by their voices with underwater microphones. NOAA and Google built an AI that searched more than 187,000 hours of recordings over 14 years for humpback whale song, leading to findings of a decline around Hawaiʻi and a discovery at a new site. It is also becoming clear that an AI trained on birds can classify whale calls from just a few examples.",
  },
  body: {
    ja: `## 見えないクジラを、音で調べる
米国海洋大気庁（NOAA）によると、クジラはどの種も音でコミュニケーションをとり、その声は水中で何マイルも届きます。姿は見つけにくくても、水中マイクで声を録音すれば、移動や数の変化を調べられます。これを**受動的音響モニタリング**といいます。長い期間、広い範囲で録音できるようになった結果、データが増えすぎて、科学者が自分で解析する時間が足りなくなりました。

## ザトウクジラの歌を探すAI
NOAAとGoogleは、深層学習のモデル（畳み込みニューラルネットワーク）に、ザトウクジラの歌を見分けさせました（論文は2021年）。
- 北太平洋の13か所で14年間に集めた、18万7,000時間を超える録音を解析した。
- オスのザトウクジラの歌は長く複雑で、繁殖する群れごと、年ごとに違うため、自動で見分けるのが難しい。チームは、YouTubeの画像分類のために作られた技術を使った。Googleの2018年の説明によると、音を時間と周波数の図（スペクトログラム）にして、画像を見分ける問題として解いている。
- 75秒ずつに区切った音で歌を検出する成績は、平均適合率（average precision）で0.97だった。
- ハワイの主要な島々では、2015〜16年の冬から歌の検出が減っていた。これは、毎年の目視の調査で、2014〜15年の冬からザトウクジラが大きく減ったことと合う結果だった。
- 北緯5度のキングマン・リーフで、ザトウクジラの歌が見つかるという新しい発見もあった。
- Googleはモデルを公開し、録音と歌の注釈のデータも、NOAAの国立環境情報センター（NCEI）のアーカイブとGoogle Cloudで公開されている。

## 間違いから学ぶ
Googleの2018年の説明では、初期のモデルは、近くの船や録音機器そのものが出す雑音を、クジラの声と取り違えました。この雑音を抑える処理を加えると、検出の誤りの率が24%減りました。また、季節による検出の変化が、夏をアラスカの近くで過ごしてえさをとり、ハワイの近くへ移って繁殖・出産するという、既に知られたパターンと合うことを、モデルの確かめに使っています。

## 鳥で学んだAIが、海の音にも
Googleの研究者によると（2026年2月）、主に鳥など陸の動物の声で学習したPerch 2.0は、学習に水中の音をまったく含めていないのに、クジラの声の分類にもよく使えました。
- **転移学習**の方法: 学習済みのモデルで、音の区間ごとに特徴を表す数値（埋め込み）を作り、それを入力に簡単な分類器（ロジスティック回帰）だけを学習させる。深いネットワーク全体を学び直すより、時間も計算もずっと少なくて済む。
- 1つの分類につき4〜32個の例だけで分類器を作る評価で、ヒゲクジラの種の見分けやシャチの群れの見分けなど、海の課題を試した。Perch 2.0は、3つのデータセットと例の数のどの組み合わせでも、1位か2位だった。
- 理由の候補の1つとして、北米には「クー」という鳴き声が少しずつ違うハトが14種いるように、よく似た鳥の声を区別する訓練が、細かな音の特徴を学ばせることが挙げられている。
- NOAAは最近、正体不明だった「バイオトワング」という音を、ニタリクジラのものとした。新しい歌や、音と種の対応は次々に見つかっている。

## 読むときの注意
- **成績には条件がある**: 2018年の初期の結果（適合率・再現率とも90%超）について、Googleは、学習とテストのデータが似た機器や環境から来ているので注意して解釈すべきだと書いていました。数字は、どんなデータで測ったかとセットで読みます。
- **ほかの調査と照らし合わせる**: ハワイでの減少は、音のデータだけでなく、目視の調査とも合っていたことで、意味のある発見になりました。`,
    en: `## Studying unseen whales by sound
According to the U.S. National Oceanic and Atmospheric Administration (NOAA), all whale species use sound to communicate, and their calls can travel for many miles underwater. Even when whales are hard to spot, recording their voices with underwater microphones lets scientists study their movements and population changes. This is called **passive acoustic monitoring**. As recordings became possible over longer periods and larger areas, the volume of data grew so large that scientists simply do not have enough hours to analyze it themselves.

## AI that searches for humpback whale song
NOAA and Google trained a deep learning model (a convolutional neural network) to identify humpback whale song (the paper was published in 2021).
- It analyzed more than 187,000 hours of recordings collected over 14 years at 13 sites in the North Pacific.
- Male humpback whales sing long, complex songs that are unique to each breeding population and year, which makes automatic identification hard. The team used technology developed for YouTube image classification. According to Google's 2018 explanation, it turns sound into a time–frequency picture (a spectrogram) and solves the task as an image classification problem.
- On 75-second audio segments, it detected humpback song with an average precision of 0.97.
- In the Main Hawaiian Islands, song detections declined from the winter of 2015–16. This supports annual visual surveys that found a significant decline in humpback whales from the winter of 2014–15.
- It also led to a new discovery: humpback whale song at Kingman Reef, at 5° north latitude.
- Google released the model publicly, and the recordings and song annotations are public through the archive of NOAA's National Centers for Environmental Information (NCEI) and Google Cloud.

## Learning from mistakes
In Google's 2018 explanation, early versions of the model confused noise from nearby boats and the recording equipment itself with whale calls. Adding a step that suppresses this kind of noise cut the error rate of whale call detection by 24%. The team also checked the model by confirming that the seasonal changes in detections matched a known pattern: humpbacks spend summers feeding near Alaska and then migrate to the vicinity of the Hawaiian Islands to breed and give birth.

## An AI trained on birds, applied to ocean sounds
According to Google's researchers (February 2026), Perch 2.0 — trained mostly on the calls of birds and other land animals — worked well for classifying whale calls even though its training included no underwater audio at all.
- **How transfer learning works**: The pre-trained model produces numbers that represent the features of each window of audio (embeddings), and only a simple classifier (logistic regression) is trained on top of them. This takes far less time and computation than retraining a whole deep network.
- In an evaluation that built classifiers from just 4 to 32 examples per class, they tested marine tasks such as telling baleen whale species apart and distinguishing killer whale populations. Perch 2.0 was consistently the top or second-best model for each of the three datasets and every number of examples.
- One possible reason given: telling similar bird calls apart — North America has 14 species of doves, each with its own subtly different "coo" — forces the model to learn detailed acoustic features.
- NOAA recently attributed the mysterious "biotwang" sound to Bryde's whales. New songs and new matches between sounds and species keep being identified.

## Reading the results
- **Results come with conditions**: About its early 2018 results (over 90% precision and recall), Google wrote that they should be interpreted with care because the training and test data came from similar equipment and environmental conditions. Read a number together with the data it was measured on.
- **Cross-check with other surveys**: The decline around Hawaiʻi became a meaningful finding because the acoustic data matched visual surveys too.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "NOAAとGoogleのザトウクジラのAIは、どれだけの録音を解析した？",
        en: "How much audio did NOAA and Google's humpback whale AI analyze?",
      },
      choices: [
        {
          ja: "北太平洋の13か所で14年間に集めた、18万7,000時間を超える録音",
          en: "More than 187,000 hours recorded over 14 years at 13 sites in the North Pacific",
        },
        { ja: "水族館のクジラ1頭の、1日分の録音", en: "One day of audio from a single whale in an aquarium" },
        { ja: "クジラの写真100枚", en: "100 photos of whales" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "人では聞ききれない量の録音を解析し、ハワイでの減少や、キングマン・リーフでの新しい発見につながりました。",
        en: "It analyzed far more audio than people could listen to, leading to a finding of a decline around Hawaiʻi and a new discovery at Kingman Reef.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "主に鳥の声で学んだPerch 2.0を、クジラの声の分類に使った方法は？",
        en: "How was Perch 2.0, trained mostly on bird calls, used to classify whale calls?",
      },
      choices: [
        {
          ja: "学習済みのモデルで埋め込みを作り、その上で簡単な分類器だけを学習させる転移学習",
          en: "Transfer learning: produce embeddings with the pre-trained model and train only a simple classifier on top",
        },
        {
          ja: "クジラの声を一から大量に集め、大きなモデルを最初から作り直した",
          en: "Collecting huge amounts of whale audio and building a large model from scratch",
        },
        { ja: "鳥の声を、クジラの声に変換して聞いた", en: "Converting bird calls into whale calls and listening to them" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "1つの分類につき4〜32個の例で分類器を作る評価で、Perch 2.0は海の課題でも1位か2位でした。",
        en: "In an evaluation using 4 to 32 examples per class, Perch 2.0 ranked first or second on the marine tasks.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "ハワイの主要な島々でザトウクジラの歌の検出が減った結果は、目視の調査の結果とも合っていた。",
        en: "The decline in humpback song detections in the Main Hawaiian Islands matched the findings of visual surveys.",
      },
      answer: true,
      explanation: {
        ja: "毎年の目視の調査でも、2014〜15年の冬からザトウクジラが大きく減っていました。",
        en: "Annual visual surveys had also found a significant decline in humpbacks from the winter of 2014–15.",
      },
    },
  ],
  sources: [
    {
      label: "NOAA NCEI: Using AI to Listen and Learn about Humpback Whales（2021-05-18）",
      url: "https://www.ncei.noaa.gov/news/using-ai-listen-and-learn-about-humpback-whales",
    },
    {
      label:
        "NOAA Institutional Repository: A Convolutional Neural Network for Automated Detection of Humpback Whale Song in a Diverse, Long-Term Passive Acoustic Dataset（2021）",
      url: "https://repository.library.noaa.gov/view/noaa/33468",
    },
    {
      label: "Google Research: Acoustic Detection of Humpback Whales Using a Convolutional Neural Network（2018-10-29）",
      url: "https://research.google/blog/acoustic-detection-of-humpback-whales-using-a-convolutional-neural-network/",
    },
    {
      label: "Google Research: How AI trained on birds is surfacing underwater mysteries（2026-02-09）",
      url: "https://research.google/blog/how-ai-trained-on-birds-is-surfacing-underwater-mysteries/",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["passive-acoustic-monitoring", "transfer-learning", "embedding"],
};
