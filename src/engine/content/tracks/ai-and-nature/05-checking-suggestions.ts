import type { Lesson } from "@/engine/content/types";

export const checkingSuggestions: Lesson = {
  id: "ai-and-nature-05",
  slug: "checking-suggestions",
  title: {
    ja: "AIの候補を確かめる — 人の確認が次のAIを育てる",
    en: "Checking AI Suggestions: Human Verification Trains the Next AI",
  },
  summary: {
    ja: "生きものを見分けるAIは、学習したのと似た写真には強く、違う写真には弱い。iNaturalistは、AIの候補だけを頼りに「同意」しないよう呼びかけている。人が確かめたラベルは、次のAIの学習データにもなる。AIと人の役割分担を見る。",
    en: "AI that identifies living things is strong on photos like the ones it learned from and weak on others. iNaturalist asks people not to \"agree\" with an identification based only on AI suggestions. Labels that people verify also become training data for the next AI. A look at how the work is shared between AI and people.",
  },
  body: {
    ja: `## AIは「見慣れた写真」に強い
iNaturalistのヘルプによると、画像認識のモデルは、ある種そのものを見分けるように学習しているのではなく、iNaturalistに投稿される、その種の典型的な写真を見分けるように学習しています。
- 投稿される写真の多くは、スマートフォンなどで撮った、野外にいる生きもの。標本としてピンで留めた昆虫の写真などでは、うまく働かないことが多い。
- 候補は、iNaturalistの利用が盛んな地域ほど正確になる。見ている種が、まだ候補に含まれていないこともある。
- 候補に付く「Expected Nearby（近くにいると予想）」は、別のモデル（Geomodel）が、その場所にその生きものがいると予測していることを表す。ふだんは、見た目が似ていて近くにいると予想される候補を表示し、そうした候補がないときだけ、場所を問わず見た目が似た候補を表示する。

## 「同意」ボタンの重み
iNaturalistは、他の人の同定に「同意」するのは、自分でも似た種と見分けて確かめられるときだけにしてほしいと呼びかけています。
- iNaturalistの画像認識の候補やMerlin Bird IDのような、AIの道具だけに頼らない。
- 知らないまま同意すると、記録が誤って「研究用」になり、データ全体の質を下げる。
- お礼の気持ちは、「同意」ではなくコメントで伝える。

みんなの同定がそろった記録は、AIの学習にも優先して使われます（[写真で生きものを調べるAI](/ja/learn/ai-and-nature/photo-identification)のレッスン参照）。

## 人の確認が、次のAIを育てる
- **Wildlife Insights**: 人が確かめたラベル付きの写真を約2億枚預かる共同の基盤。利用者はSpeciesNetの助けを借りて写真にラベルを付け、人が確かめたものは、SpeciesNetの学習データにもなる（Googleの研究者、2026年3月）。
- **地域に合わせる**: オーストラリアのWildObsは、SpeciesNetの2,498の分類にない、オーストラリアにしかいない種の写真でSpeciesNetを学習させた版を作った。新しい写真と学習データは、Wildlife Insightsを通じて広く共有している。
- **少ない正解から始める**: Googleが2018年にザトウクジラの声を学習させたとき、人が手でラベルを付けたのはデータ全体の0.2%で、そのラベルの大部分はNOAAの研究者が用意した。2021年の論文は、注釈が少ない専門分野で質の高いモデルを作るのに、能動学習（active learning）という方法が役立つとしている。

## 読むときの注意
- **確かめられないときは同意しない**: AIの候補が合っているかを自分で見分けられないなら、見分けられる人に任せます。人の確認を経たラベルは次のAIの学習にも使われるので、誤ったラベルが混じれば、その誤りも学習に入りえます（学習データに意図して細工する攻撃については[データポイズニングとバックドア](/ja/learn/ai-and-security/data-poisoning)のレッスン参照）。
- **学習した写真と違う使い方に注意**: AIは、学習したのと似た写真に強く、標本の写真のように種類の違う写真には弱くなります。`,
    en: `## AI is strong on "familiar" photos
According to iNaturalist's help pages, its image recognition model is not trained to recognize a species as such — it is trained to recognize typical iNaturalist photos of that species.
- Most photos posted to iNaturalist are taken with smartphones or other consumer equipment, of organisms in the wild. For photos of pinned insects, for example, it probably won't work that well.
- Suggestions are most accurate in areas with high activity on iNaturalist. The species you are looking at may not yet be included among the possible suggestions.
- The "Expected Nearby" label on a suggestion means that a separate model (the Geomodel) predicts the organism occurs in that location. By default, iNaturalist shows suggestions that look similar and are expected nearby; only when none of those exist does it show visually similar suggestions regardless of where they are expected to occur.

## The weight of the "Agree" button
iNaturalist asks people to agree with someone else's identification only when they can confidently identify it themselves and rule out lookalikes.
- Don't rely solely on AI tools such as iNaturalist's computer vision suggestions or Merlin Bird ID.
- Agreeing without actually knowing the organism can make an observation reach Research Grade by mistake, which harms the overall quality of the data.
- Don't use "Agree" to say thanks; write a comment instead.

Observations with a matching Community ID are also prioritized when training the AI (see the [AI that identifies living things in photos](/en/learn/ai-and-nature/photo-identification) lesson).

## Human verification trains the next AI
- **Wildlife Insights**: a community platform that hosts about 200 million images with human-verified labels. Users label their images with help from SpeciesNet, and any labeled images that people verify can in turn become training data for SpeciesNet (Google's researchers, March 2026).
- **Adapting to a region**: In Australia, WildObs trained a version of SpeciesNet on images of species found only in Australia that are not among SpeciesNet's 2,498 labels. It is feeding its new images and training data back to the wider community through Wildlife Insights.
- **Starting from a few correct answers**: When Google trained a model on humpback whale calls in 2018, only 0.2% of the entire dataset had been labeled by hand, and a NOAA researcher provided the bulk of those labels. The 2021 paper says active learning approaches are useful for creating high-quality models in specialized fields where annotations are rare.

## Reading the suggestions
- **If you can't check, don't agree**: If you can't tell for yourself whether an AI suggestion is right, leave it to someone who can. Because human-verified labels are also used to train the next AI, any wrong labels that slip in can end up in its training too (for attacks that deliberately tamper with training data, see the [data poisoning and backdoors](/en/learn/ai-and-security/data-poisoning) lesson).
- **Beware of photos unlike the training data**: AI is strong on photos similar to the ones it learned from and weaker on different kinds of photos, such as those of specimens.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "iNaturalistによると、画像認識のモデルは何を見分けるように学習している？",
        en: "According to iNaturalist, what is its image recognition model trained to recognize?",
      },
      choices: [
        {
          ja: "iNaturalistに投稿される、その種の典型的な写真",
          en: "Typical iNaturalist photos of a species",
        },
        { ja: "図鑑に載っている絵だけ", en: "Only illustrations in field guides" },
        { ja: "その種の遺伝子の配列", en: "The species' DNA sequence" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "多くは野外の生きものをスマートフォンなどで撮った写真なので、ピンで留めた標本の昆虫などでは、うまく働かないことが多いとしています。",
        en: "Most are smartphone photos of organisms in the wild, so iNaturalist says it probably won't work well on, for example, pinned insect specimens.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "AIの候補と同じ名前なら、自分で見分けられなくても「同意」を押すのがよい。",
        en: "If an ID matches the AI's suggestion, you should press \"Agree\" even if you can't identify the organism yourself.",
      },
      answer: false,
      explanation: {
        ja: "知らないまま同意すると、記録が誤って「研究用」になり、データ全体の質を下げます。AIの道具だけに頼らないよう呼びかけられています。",
        en: "Agreeing without knowing can make an observation reach Research Grade by mistake and harms data quality. iNaturalist asks people not to rely solely on AI tools.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "Wildlife Insightsで、人が確かめたラベル付きの写真はどう使われる？",
        en: "On Wildlife Insights, how are labeled images that people have verified used?",
      },
      choices: [
        { ja: "SpeciesNetの学習データにもなる", en: "They can also become training data for SpeciesNet" },
        { ja: "確かめたらすぐに削除される", en: "They are deleted as soon as they are verified" },
        { ja: "AIの学習には使わないと決められている", en: "They are never used to train AI" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "利用者はSpeciesNetの助けを借りてラベルを付け、人が確かめたものが、次の学習に生かされます。",
        en: "Users label images with SpeciesNet's help, and those verified by people feed into its next training.",
      },
    },
  ],
  sources: [
    {
      label: "iNaturalist Help: Why can't computer vision identify my photo correctly?",
      url: "https://help.inaturalist.org/en/support/solutions/articles/151000170369-why-can-t-computer-vision-identify-my-photo-correctly-",
    },
    {
      label: "iNaturalist Help: What does \"Expected Nearby\" mean?",
      url: "https://help.inaturalist.org/en/support/solutions/articles/151000170371-what-does-expected-nearby-mean-",
    },
    {
      label: "iNaturalist Help: When should I agree with someone else's identification?",
      url: "https://help.inaturalist.org/en/support/solutions/articles/151000170242-when-should-i-agree-with-someone-else-s-identification-",
    },
    {
      label: "Google Research: Where wild things roam: Identifying wildlife with SpeciesNet（2026-03）",
      url: "https://research.google/blog/where-wild-things-roam-identifying-wildlife-with-speciesnet/",
    },
    {
      label: "Google Research: Acoustic Detection of Humpback Whales Using a Convolutional Neural Network（2018-10-29）",
      url: "https://research.google/blog/acoustic-detection-of-humpback-whales-using-a-convolutional-neural-network/",
    },
    {
      label:
        "NOAA Institutional Repository: A Convolutional Neural Network for Automated Detection of Humpback Whale Song in a Diverse, Long-Term Passive Acoustic Dataset（2021）",
      url: "https://repository.library.noaa.gov/view/noaa/33468",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["human-in-the-loop", "research-grade"],
};
