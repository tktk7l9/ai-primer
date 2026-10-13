import type { Lesson } from "@/engine/content/types";

export const floodForecasting: Lesson = {
  id: "ai-and-disasters-02",
  slug: "flood-forecasting",
  title: {
    ja: "洪水の予測とAI — 観測所のない川を予測する",
    en: "Flood Forecasting and AI: Predicting Rivers Without Gauges",
  },
  summary: {
    ja: "川の流量を予測するモデルは、ふつう流域ごとの長い観測記録で調整する。観測所の少ない地域ほど予測は難しかった。Googleは、世界の川のデータで1つのモデルを学ばせ、観測所のない流域にも当てはめる研究を2024年に発表した。数字の読み方と、日本で使う公式の洪水の情報。",
    en: "Models that forecast river flow are usually calibrated to long records for each watershed, so forecasting was hardest where gauges are scarce. In 2024 Google published research that trains one model on river data from around the world and applies it to ungauged watersheds. How to read the numbers, and the official flood information to use in Japan.",
  },
  body: {
    ja: `## 観測所のない川という壁
Googleは、洪水を最も多い自然災害とし、洪水に関わる災害が起きる割合は2000年以降で2倍を超えたと説明しています。同社の研究チームの論文は、洪水の影響は、川の流量を測る観測所の少ない途上国で特に大きいと指摘しています。

川の洪水を予測する水文モデルは、ふつう、流域ごとの長い観測記録に合わせて調整する必要があります。観測所がない流域ほど、予測は難しかったのです。

## 1つのモデルで世界の川を学ぶ
Googleの研究チームは2024年3月20日、観測所のない流域でも極端な洪水を予測できるとする研究をNature誌で発表しました。
- **しくみ**: 時系列のデータに向くLSTMというニューラルネットワークで、流域の地形や気候などの特徴、過去1年分の気象データ、7日先までの気象予報を入力に、川の流量を確率の分布として予測する。
- **学習**: 世界の5,680か所の観測所で測った1980〜2023年の日ごとの流量で、1つのモデルを学ばせる。観測所のない流域には、このモデルを当てはめる。
- **成績**: 世界の2,092の流域（2014〜2023年）で評価すると、5日先までの予測の信頼性が、既存の代表的な全球洪水予測システムGloFAS（コペルニクス緊急事態管理サービス）の当日の予測（ナウキャスト）と平均で同等以上だった。再現期間5年の大きな洪水でも、GloFASが再現期間1年の洪水で出している精度と同等以上だったとしています。評価は欧州中期予報センター（ECMWF）と協力して行いました。

同社は当時、この技術を使う洪水予報サービスFlood Hubで、80か国超の川について最大7日先までの予測を出しているとしていました。

## 2024年11月の改良と、検証の壁
2024年11月11日、同社は改良したモデルを発表しました。改良後のモデルは、7日先の予測で以前のモデルの5日先と同じ精度が出るといい、Google DeepMindのAIの天気予報モデルが出す降水量と気温も入力に加えました。

| 項目 | 以前 | 改良後 |
|---|---|---|
| 学習に使った観測所 | 5,680か所 | 15,980か所 |
| Flood Hubで情報を届ける国 | 80か国 | 100か国超 |
| 情報が届く人 | 4億6,000万人 | 7億人 |

一方で、同社は検証の限界も書いています。
- モデルは地球上のどの地点の流量も予測できるが、品質を過去のデータで確かめられるのは一部の地点だけ。観測所のない地域では、洪水を写した過去の衛星レーダー画像と予測が合うかで確かめるが、使う衛星Sentinel-1が同じ場所を撮るのは12日ごとで、確かめられる場所は限られる。
- 品質を検証できていない「仮想ゲージ」を含む約25万の予測地点（150か国）は、専門家や研究者向けとして示している。
- 鉄砲水、都市の浸水、沿岸の洪水への対応は今後の課題。

## 日本で洪水の危険を確かめるには
日本では、気象庁の「洪水キキクル」が、中小河川の洪水災害の危険度の高まりを5段階に色分けして地図上に示しています。3時間先までの流域雨量指数の予測値を使い、約24,000の河川が計算の対象です。大河川の指定河川洪水予報もあわせて確認できます。自分の住む地域の判断には、こうした気象庁の情報と、自治体の避難情報を使います。

## 読むときの注意
- **何と比べたか**: 「5日先の予測が当日の予測と同等」は、比べる相手がGloFASの当日の予測（ナウキャスト）だという意味です。同じくらい信頼できる情報が、より早く手に入ることを示しています。
- **再現期間**: 「再現期間2年」の出水は、平均して2年に1回は超えると見込まれる流量の出水です。数字が大きいほど、まれで大きな洪水です。
- **検証できた場所の数字**: 成績は、適合率と再現率を組み合わせたF1値などで測っています（適合率と再現率は[インフラ点検とAI](/ja/learn/ai-in-industry/infrastructure-inspection)のレッスン参照）。検証できた流域での数字で、どの川でも同じ成績が出るとは限りません。`,
    en: `## The barrier of ungauged rivers
Google calls floods the most common natural disaster and says the rate of flood-related disasters has more than doubled since 2000. Its research team's paper notes that floods hit developing countries disproportionately hard, and those countries often lack dense networks of gauges that measure river flow.

Hydrological models that forecast river floods usually have to be calibrated to long data records for each watershed. The fewer the gauges, the harder the forecast.

## One model that learns rivers around the world
On March 20, 2024, Google's research team published a study in Nature showing that extreme floods can be predicted even in ungauged watersheds.
- **How it works**: An LSTM, a neural network suited to time-series data, takes watershed characteristics such as terrain and climate, a year of past weather data, and weather forecasts up to seven days ahead, and predicts river flow as a probability distribution.
- **Training**: A single model is trained on daily river flow from 1980 to 2023 measured at 5,680 gauges around the world, and then applied to watersheds that have no gauges.
- **Results**: Evaluated on 2,092 watersheds worldwide (2014-2023), its forecasts up to five days ahead were, on average, as reliable as or more reliable than the same-day forecasts (nowcasts) of GloFAS, the leading existing global flood forecasting system run by the Copernicus Emergency Management Service. For larger events with a 5-year return period, it was as accurate as or more accurate than GloFAS is for 1-year events. The evaluation was done in collaboration with the European Centre for Medium-Range Weather Forecasts (ECMWF).

At the time, Google said this technology let its Flood Hub service provide river forecasts up to seven days ahead in more than 80 countries.

## The November 2024 upgrade, and the limits of validation
On November 11, 2024, Google announced an improved model. It says the new model is as accurate seven days ahead as the previous one was five days ahead, and it added precipitation and temperature from Google DeepMind's AI weather forecasting model as inputs.

| Item | Before | After |
|---|---|---|
| Gauges used for training | 5,680 | 15,980 |
| Countries reached through Flood Hub | 80 | over 100 |
| People reached | 460 million | 700 million |

The company also describes the limits of validation.
- The model can predict flow at any point on Earth, but quality can be checked against historical data at only a fraction of them. In ungauged regions, Google checks whether forecasts match floods seen in past satellite radar images, but the Sentinel-1 satellites it uses revisit a place only every 12 days, so the places that can be checked are limited.
- About 250,000 forecast points in 150 countries, including "virtual gauges" whose quality has not been verified, are offered for experts and researchers.
- Flash floods, urban floods, and coastal floods remain future work.

## Checking flood danger in Japan
In Japan, the Japan Meteorological Agency's (JMA) "flood KiKiKuru" map shows the rising danger of flood disasters on small and medium rivers in five color-coded levels. It uses forecasts of a runoff index up to three hours ahead and covers about 24,000 rivers, and it also shows flood forecasts for designated major rivers. For decisions about where you live, use JMA information like this together with your municipality's evacuation information.

## Reading the numbers
- **Compared with what?**: "Five days ahead is as reliable as same-day" means the yardstick is GloFAS's same-day forecast (nowcast). It shows that information of similar reliability arrives earlier.
- **Return period**: A "2-year return period" event is a flow expected to be exceeded on average once every two years. The bigger the number, the rarer and larger the flood.
- **Numbers from places that could be checked**: Performance is measured with the F1 score, which combines precision and recall, among other metrics (for precision and recall, see the [infrastructure inspection and AI](/en/learn/ai-in-industry/infrastructure-inspection) lesson). The figures come from watersheds where validation was possible; not every river will see the same results.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "観測所のない流域で洪水の予測が難しかった主な理由は？",
        en: "What was the main reason flood forecasting was hard in ungauged watersheds?",
      },
      choices: [
        {
          ja: "従来の水文モデルは、流域ごとの長い観測記録に合わせて調整する必要があったから",
          en: "Conventional hydrological models had to be calibrated to long data records for each watershed",
        },
        { ja: "川の流量は雨と関係がないから", en: "River flow has nothing to do with rain" },
        { ja: "観測所のない国では天気予報が出ていないから", en: "Countries without gauges have no weather forecasts" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "観測記録がないと調整ができません。Googleの研究は、世界の観測所のデータで1つのモデルを学ばせ、観測所のない流域に当てはめることでこの壁を越えようとしました。",
        en: "Without records there is nothing to calibrate against. Google's research tried to get past this by training one model on gauge data from around the world and applying it to watersheds without gauges.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "「再現期間2年」の出水とは？",
        en: "What is a \"2-year return period\" event?",
      },
      choices: [
        { ja: "平均して2年に1回は超えると見込まれる流量の出水", en: "A flow expected to be exceeded on average once every two years" },
        { ja: "2年続けて起きる洪水", en: "A flood that happens two years in a row" },
        { ja: "予報の2年後に起きる洪水", en: "A flood that happens two years after the forecast" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "再現期間は洪水の大きさ（まれさ）を表します。研究は、再現期間5年の大きな洪水でも、GloFASが再現期間1年の洪水で出している精度と同等以上だったとしています。",
        en: "The return period describes how large (how rare) a flood is. The research says that even for 5-year events, its accuracy matched or beat what GloFAS achieves for 1-year events.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "Flood Hubで専門家や研究者向けに示される「仮想ゲージ」の予測は、すべて品質が検証済みだ。",
        en: "The \"virtual gauge\" forecasts that Flood Hub offers to experts and researchers have all been quality-verified.",
      },
      answer: false,
      explanation: {
        ja: "仮想ゲージは、データがなくて品質を評価できなかった地点や、評価で十分な品質が出なかった地点の予測です。だから専門家や研究者向けとして分けて示されています。",
        en: "Virtual gauges are forecasts for places where quality could not be assessed for lack of data, or where the assessment did not show high enough quality. That is why they are offered separately, for experts and researchers.",
      },
    },
  ],
  sources: [
    {
      label: "arXiv: Nearing et al., AI Increases Global Access to Reliable Flood Forecasts（arXiv:2307.16104）",
      url: "https://arxiv.org/abs/2307.16104",
    },
    {
      label: "Google Research: Using AI to expand global access to reliable flood forecasts（2024-03-20）",
      url: "https://research.google/blog/using-ai-to-expand-global-access-to-reliable-flood-forecasts/",
    },
    {
      label: "Google Research: An improved flood forecasting AI model, trained and evaluated globally（2024-11-11）",
      url: "https://research.google/blog/a-flood-forecasting-ai-model-trained-and-evaluated-globally/",
    },
    { label: "気象庁: 洪水キキクル", url: "https://www.jma.go.jp/jma/kishou/know/bosai/riskmap_flood.html" },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["ungauged-basin", "return-period", "kikikuru", "precision-and-recall"],
};
