import type { Lesson } from "@/engine/content/types";

export const protectingLocations: Lesson = {
  id: "ai-and-nature-06",
  slug: "protecting-locations",
  title: {
    ja: "生きものの居場所を守る — 公開するデータ、ぼかすデータ",
    en: "Protecting Where Living Things Live: Data to Share, Data to Blur",
  },
  summary: {
    ja: "観察の記録は、研究や保全に役立つ公開のデータになる。一方で、居場所が知られると乱獲や密猟に狙われる生きものもいる。環境省がレッドデータブックに詳しい位置を載せない理由と、iNaturalistが位置をぼかすしくみ、それでも場所が推測されうるという注意から、公開データとの付き合い方を学ぶ。",
    en: "Observation records become public data that help research and conservation. But some living things are targeted by overcollection and poaching once their whereabouts are known. Why Japan's Ministry of the Environment leaves precise locations out of its Red Data Book, how iNaturalist blurs locations, and its warning that places can still be guessed — lessons for living with public data.",
  },
  body: {
    ja: `## 詳しい場所は載せない
環境省は、絶滅のおそれのある種をまとめたレッドデータブックに、それぞれの種の分布域の情報を載せています。ただし、詳しい生息・生育の場所を公開すると、人による乱獲などのおそれがあるため、詳しい位置の情報は載せていません。環境省は、絶滅危惧種にとって「捕獲・採集」は大きな減少の要因だとして、一人一人が「むやみにとらない」意識を持つことが大切だとしています。

一方、生きものの記録を集める側の道具は便利になりました。環境省の資料（2018年）によると、市民の参加で全国の生きものの情報を集める「いきものログ」のアプリは、GPS機能のある端末で撮った写真から、撮影場所の緯度・経度を読み取って記録できます。写真には、場所の情報が付いていることがあるのです。

## iNaturalistの2つのしくみ
iNaturalistに投稿された観察記録は公開されますが、位置の情報を制限するしくみが2つあります。
- **観察者が決める位置の非公開（geoprivacy）**: 例えば、自宅の庭での観察を、個人のプライバシーのために制限する。iNaturalistは、観察者がはっきり許可しない限り、この情報を共有しない。
- **生きものごとの位置の非公開（taxon geoprivacy）**: 居場所が知られると脅かされる生きものの記録について、iNaturalistが自動で位置を制限する。例えば、一部のランは密猟者に狙われるため、その観察記録の位置は自動でぼかされる。制限した位置の情報は、保全に取り組む人々と共有することがある。

## どうぼかすのか
- **ぼかす（obscured）**: 本当の緯度・経度は公開されない欄に移され、公開される位置は、0.2度×0.2度のマス（赤道付近で約500平方キロメートル）の中のランダムな点になる。場所のメモも粗く表示され、場合によっては日付も「2021年6月21日」が「2021年6月」のように粗くなる。
- **非公開（private）**: 位置の情報をまったく公開しない。ただ、場所の手がかりがないと、みんなで同定したり、位置のデータの誤りを見つけたりするのが難しくなるため、控えめに使うよう求めている。

## ぼかしても、推測されることがある
iNaturalist自身が、このしくみは完全ではないと書いています。
- 写真に写った目印や説明の文、参加しているプロジェクトから、本当の場所の手がかりが分かることがある。
- 同じ人が近い時間に投稿した、ぼかしていない記録から、場所を推測できることがある。そのため、ぼかした記録と場所も時間も近い記録を、公開のまま投稿しないよう勧めている。
- データの流出が決して起きないとは保証できない。

どの生きものの位置をぼかすかは、利用者が生きものに印を付けて提案し、管理を手伝うキュレーターや協力する保全団体が、議論の進行や設定の管理を担います。利用者と、行政で自然資源を扱う専門家など外部の関係者との合意をめざし、合意できないときはiNaturalistのスタッフなどが決めます。

## 読むときの注意
- **1つずつは小さな手がかりでも**: 写真の目印、日時、近くの記録などは、組み合わせると本当の場所を語ることがあります。
- **隠しすぎても困る**: 位置をまったく公開しないと、データとしての価値も下がります。保全と、みんなで確かめ合うことの両立が求められます（観察記録の質をみんなで評価するしくみは[写真で生きものを調べるAI](/ja/learn/ai-and-nature/photo-identification)のレッスン参照）。
- **自分で投稿するとき**: 位置の設定を確かめ、ぼかした記録の近くで、場所も時間も近い記録を公開のまま投稿しないようにします。`,
    en: `## Precise places are left out
Japan's Ministry of the Environment publishes information on the distribution range of each species in its Red Data Book of threatened species. But because publishing precise habitats could lead to overcollection by people, it does not include detailed location information. The ministry says capture and collection are a major cause of decline for threatened species, and that it is important for everyone to keep in mind not to take them needlessly.

Meanwhile, the tools for collecting records of living things have become more convenient. According to a ministry document (2018), the app for "Ikimono Log," which collects information on living things nationwide with citizen participation, can read the latitude and longitude of where a photo was taken from photos shot on GPS-equipped devices. Photos can carry location information.

## iNaturalist's two mechanisms
Observations posted to iNaturalist are public, but there are two ways to restrict their location information.
- **Geoprivacy, decided by the observer**: For example, a user might restrict an observation made in their backyard for personal privacy. iNaturalist never shares this information without the observer's explicit permission.
- **Taxon geoprivacy, applied per species**: For organisms threatened by location disclosure, iNaturalist automatically restricts location information. For example, observations of certain orchids are automatically obscured because those species are sought after by poachers. The restricted information may be shared with the conservation community.

## How locations are blurred
- **Obscured**: The true latitude and longitude are moved to fields that are not public, and the public location becomes a random point within a cell of 0.2 × 0.2 degrees (about 500 square kilometers at the equator). Locality notes are shown more coarsely, and in some cases so is the date — for example, "June 21, 2021" becomes "June 2021."
- **Private**: No location information is made public. But without any geographic context, it becomes hard for the community to identify observations or spot location errors, so iNaturalist asks that this be used sparingly.

## Even blurred locations can be guessed
iNaturalist itself says this approach isn't perfect.
- Landmarks in a photo, text in a description, or the projects an observation belongs to can give clues to the true location.
- The true location can sometimes be guessed from open observations the same person posted around the same time. So iNaturalist recommends not posting open observations close in space and time to an obscured one.
- It cannot guarantee that data breaches will never occur.

Which species get their locations obscured is proposed by users who flag them, while curators who help run the site and collaborating conservation organizations moderate the discussions and maintain the settings. The aim is a consensus between users and informed outside stakeholders such as government natural resource professionals; if none can be reached, iNaturalist staff and its network partners decide.

## Reading public data
- **Small clues add up**: Landmarks in photos, dates and times, and nearby records can, together, reveal a true location.
- **Hiding everything has a cost too**: Making locations completely private lowers the data's value. Protecting species and letting the community check each other's records both matter (for how the community assesses the quality of observations, see the [AI that identifies living things in photos](/en/learn/ai-and-nature/photo-identification) lesson).
- **When you post**: Check your location settings, and don't post open observations close in space and time to an obscured one.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "環境省がレッドデータブックに、詳しい生息・生育の場所を載せない理由は？",
        en: "Why does Japan's Ministry of the Environment leave precise habitats out of its Red Data Book?",
      },
      choices: [
        {
          ja: "公開すると、人による乱獲などのおそれがあるから",
          en: "Publishing them could lead to overcollection by people",
        },
        { ja: "場所がまったく分かっていないから", en: "Because nobody knows where the species live" },
        { ja: "地図を作る費用が足りないから", en: "Because there is no budget for maps" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "分布域の情報は載せていますが、詳しい位置は載せていません。捕獲・採集は絶滅危惧種の大きな減少の要因です。",
        en: "It publishes distribution ranges but not precise locations. Capture and collection are a major cause of decline for threatened species.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "iNaturalistで位置を「ぼかす（obscured）」と、公開される位置はどうなる？",
        en: "On iNaturalist, what happens to the public location when an observation is obscured?",
      },
      choices: [
        {
          ja: "0.2度×0.2度のマスの中の、ランダムな点になる",
          en: "It becomes a random point within a 0.2 × 0.2 degree cell",
        },
        { ja: "本当の位置がそのまま表示される", en: "The true location is shown as is" },
        { ja: "観察記録ごと削除される", en: "The whole observation is deleted" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "本当の緯度・経度は公開されない欄に移されます。場所のメモも粗く表示され、場合によっては日付も粗くなります。",
        en: "The true latitude and longitude are moved to non-public fields. Locality notes are shown more coarsely, and in some cases the date too.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "iNaturalistは、位置をぼかせば本当の場所が推測されることはないとしている。",
        en: "iNaturalist says that once a location is obscured, the true location cannot be guessed.",
      },
      answer: false,
      explanation: {
        ja: "写真の目印や、同じ人が近い時間に投稿した記録などから推測されうるため、しくみは完全ではないと書いています。",
        en: "It says the approach isn't perfect, because locations can be guessed from landmarks in photos or from the same person's open observations made around the same time.",
      },
    },
  ],
  sources: [
    {
      label: "環境省: レッドリスト等に関するQ＆A",
      url: "https://www.env.go.jp/nature/kisho/hozen/redlist/qa.html",
    },
    {
      label: "環境省: 生物多様性情報収集・提供システム「いきものログ」について（2018年6月時点）",
      url: "https://www.env.go.jp/content/900511912.pdf",
    },
    {
      label: "iNaturalist Help: What is geoprivacy? What does it mean for an observation to be obscured?",
      url: "https://help.inaturalist.org/en/support/solutions/articles/151000169938-what-is-geoprivacy-what-does-it-mean-for-an-observation-to-be-obscured-",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["geoprivacy"],
};
