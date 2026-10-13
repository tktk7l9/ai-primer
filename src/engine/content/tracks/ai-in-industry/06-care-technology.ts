import type { Lesson } from "@/engine/content/types";

export const careTechnology: Lesson = {
  id: "ai-in-industry-06",
  slug: "care-technology",
  title: {
    ja: "介護とテクノロジー — 見守り機器とAI、生まれた時間を人のケアに",
    en: "Care and Technology: Monitoring Devices, AI, and Time Returned to People",
  },
  summary: {
    ja: "介護職員は2040年度に約272万人必要と推計される。センサーで状態の変化を知らせる見守り機器や記録ソフト、AIを使った排泄ケアなど、国が重点分野を定めて進めるテクノロジーと、生まれた時間を直接のケアに充てるという考え方。",
    en: "About 2.72 million care workers are estimated to be needed in fiscal 2040. The technologies Japan is promoting through designated priority areas — monitoring devices that report changes in a person's condition, record-keeping software, AI-assisted continence care — and the idea of putting the time they free up into direct care.",
  },
  body: {
    ja: `## 必要な人数が増えていく

厚生労働省は2024年7月12日、都道府県の推計を集めると、必要な介護職員は2026年度に約240万人、2040年度に約272万人になると公表しました。2022年度の約215万人と比べて、それぞれ約25万人、約57万人多い人数です。国は、処遇の改善や多様な人材の確保と並んで、生産性の向上を対策の1つに挙げています。

## 国が進める「介護テクノロジー」
厚生労働省と経済産業省は2024年6月28日、「ロボット技術の介護利用における重点分野」を改訂し、名前を「**介護テクノロジー利用の重点分野**」に変えました（2025年4月から運用）。介護ロボットやICTなどのテクノロジーで、介護サービスの質の向上、職員の負担の軽減、高齢者の自立の支援を進めるためのもので、9分野16項目になり、機能訓練支援、食事・栄養管理支援、認知症生活支援・認知症ケア支援の3分野が加わりました。

たとえば、施設で使う**見守り機器**は、次のように定義されています。
- 各種センサーと外部への通信機能を備え、高齢者の尊厳を保ちながら職員の業務の自動化などを支え、複数の人を同時に見守れる。
- 高齢者の状態やその変化を検知して、職員に知らせる。情報やデータをためられる。
- 高齢者が自分から助けを求める行動（ボタンを押す、声を出すなど）から得る情報だけに頼らない。昼も夜も使える。

同じ資料が引く「令和3年度介護報酬改定の効果検証及び調査研究」の調査結果では、分野ごとの普及率は、見守り・コミュニケーションが30.0%、入浴支援が11.2%、介護業務支援が10.2%、移乗支援が9.7%、移動支援が1.2%、排泄支援が0.5%でした。

## 生産性の向上とは「人の時間を生む」こと
厚生労働省の資料（2026年3月）は、介護現場の生産性の向上を、テクノロジーを使って業務を改善・効率化し、職員の負担を減らすとともに、**生まれた時間を直接の介護ケアに充て、利用者と職員が接する時間を増やすなど、サービスの質の向上にもつなげること**だとしています。
- 見守り機器・介護記録ソフト・インカム（職員どうしの無線の連絡）は、業務時間を減らす効果が確認されているとして、導入を重点的に支援している。
- 2024年度の介護報酬改定では、見守り機器などを導入し、業務改善の効果を示すデータを毎年出す事業所を評価する「生産性向上推進体制加算」ができた。利用者の安全や介護の質、職員の負担軽減について検討する委員会を開き、必要な安全対策をとることも要件。2025年5月審査分では、全サービスの2.5%が加算（Ⅰ）を、21.8%が加算（Ⅱ）を算定していた。

## AIの例と、読み方
2025年度に表彰された事業所の例が、同じ資料に載っています。
- 愛媛県の特別養護老人ホームは、AIを使った排泄ケアのシステムを入れて夜間の対応の回数が減り、1フロアあたりの尿や便の漏れが週14回から週2回になった（厚生労働大臣表彰）。
- 茨城県の特別養護老人ホームは、以前に入れた見守り機器を活用し直し、夜勤の巡回時間が53分から26分に、排泄の介助の時間が180分から90分になった（内閣総理大臣表彰）。

表彰されたのは先進的に取り組んだ事業所で、どの施設でも同じ効果が出るとは限りません。機器は、尊厳を守り、生まれた時間を人どうしのケアに充てるための道具として位置づけられています。`,
    en: `## A growing number of workers needed

On July 12, 2024, the Ministry of Health, Labour and Welfare (MHLW) announced that, adding up prefectures' estimates, about 2.40 million care workers will be needed in fiscal 2026 and about 2.72 million in fiscal 2040 — about 250,000 and 570,000 more, respectively, than the roughly 2.15 million of fiscal 2022. Alongside better pay and recruiting a wider range of people, the government lists higher productivity as one of its measures.

## The "care technology" Japan is promoting
On June 28, 2024, MHLW and the Ministry of Economy, Trade and Industry revised their "priority areas for the use of robot technology in care" and renamed them the "**priority areas for the use of care technology**" (in operation from April 2025). They aim to use care robots, ICT, and other technology to improve the quality of care services, reduce the burden on staff, and support older people's independence. The revision brought the list to 9 areas and 16 items, adding three areas: support for functional training, support for meals and nutrition management, and support for daily life and care for people with dementia.

For example, **monitoring devices** for care facilities are defined as follows:
- They have sensors and external communication functions, support the automation of staff work while preserving the dignity of older people, and can watch over several people at once.
- They detect a person's condition and changes in it and notify staff, and can store information and data.
- They do not rely only on information from the person's own calls for help (pressing a button, calling out), and they work day and night.

In survey results cited in the same materials — from a study verifying the effects of the fiscal 2021 revision of care fees — adoption rates by area were 30.0% for monitoring and communication, 11.2% for bathing support, 10.2% for care work support, 9.7% for transfer support, 1.2% for mobility support, and 0.5% for continence support.

## Productivity means creating time for people
An MHLW document (March 2026) describes productivity in care as using technology to improve and streamline work and reduce the burden on staff, while **putting the time freed up into direct care — increasing the time residents and staff spend together, for example — and so improving the quality of the service**.
- Monitoring devices, care-record software, and intercoms (radio communication among staff) are given priority support because they have been confirmed to reduce working time.
- The fiscal 2024 revision of care fees created an "add-on for promoting productivity improvement" for facilities that introduce monitoring devices and similar technology and submit data showing the effects of their improvements every year. The requirements also include holding a committee on residents' safety, care quality, and staff burden, and taking the necessary safety measures. For claims reviewed in May 2025, 2.5% of all services claimed add-on (I) and 21.8% claimed add-on (II).

## Examples with AI, and how to read them
The same document lists examples from facilities honored in fiscal 2025:
- A special nursing home in Ehime Prefecture introduced an AI-based continence care system; night-time responses fell, and leaks per floor dropped from 14 a week to 2 a week (Minister of Health, Labour and Welfare award).
- A special nursing home in Ibaraki Prefecture put its previously installed monitoring devices back to work, cutting night-shift rounds from 53 to 26 minutes and continence assistance time from 180 to 90 minutes (Prime Minister's award).

These were facilities honored for leading-edge efforts, and other facilities will not necessarily see the same effects. The devices are positioned as tools for protecting dignity and putting the time they free up into care between people.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "厚生労働省の推計で、2040年度に必要とされる介護職員はどれくらい？",
        en: "According to MHLW's estimate, about how many care workers will be needed in fiscal 2040?",
      },
      choices: [
        { ja: "約272万人", en: "About 2.72 million" },
        { ja: "約27万人", en: "About 270,000" },
        { ja: "約2,720万人", en: "About 27.2 million" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "2040年度に約272万人で、2022年度の約215万人より約57万人多い推計です。",
        en: "About 2.72 million in fiscal 2040 — about 570,000 more than the roughly 2.15 million of fiscal 2022.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "施設の見守り機器の定義では、高齢者が自分でボタンを押したり声を出したりしたときの情報だけに頼る機器を想定している。",
        en: "The definition of monitoring devices for facilities assumes devices that rely only on information from a person pressing a button or calling out.",
      },
      answer: false,
      explanation: {
        ja: "定義は、本人が自分から助けを求める行動から得る情報だけに頼らず、状態の変化を検知して職員に知らせることを求めています。",
        en: "The definition requires not relying only on a person's own calls for help, and detecting changes in their condition to notify staff.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "厚生労働省の資料が示す、介護現場の生産性の向上の考え方に合うものはどれ？",
        en: "Which fits the idea of productivity in care set out in MHLW's document?",
      },
      choices: [
        {
          ja: "職員の負担を減らし、生まれた時間を直接のケアに充てて、サービスの質を上げる",
          en: "Reduce staff burden and put the time freed up into direct care, raising service quality",
        },
        { ja: "職員を減らして、人件費を下げることだけを目指す", en: "Aim only to cut staff and lower labor costs" },
        { ja: "利用者と職員が接する時間を減らす", en: "Reduce the time residents and staff spend together" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "テクノロジーで生まれた時間を直接のケアに充て、利用者と職員が接する時間を増やすなど、質の向上につなげることだとしています。",
        en: "It describes putting the time technology frees up into direct care — such as more time between residents and staff — to raise quality.",
      },
    },
  ],
  sources: [
    { label: "厚生労働省: 第9期介護保険事業計画に基づく介護職員の必要数について（2024-07-12）", url: "https://www.mhlw.go.jp/stf/newpage_41379.html" },
    {
      label: "厚生労働省: 「ロボット技術の介護利用における重点分野」を改訂しました（2024-06-28）",
      url: "https://www.mhlw.go.jp/stf/juutenbunya_r6kaitei_00001.html",
    },
    {
      label: "厚生労働省: （参考）介護テクノロジー利用の重点分野の全体図と普及率",
      url: "https://www.mhlw.go.jp/content/12300000/001268135.pdf",
    },
    { label: "厚生労働省: （参考）介護テクノロジー利用の重点分野定義", url: "https://www.mhlw.go.jp/content/12300000/001268136.pdf" },
    {
      label: "厚生労働省: テクノロジー等を活用した介護現場における生産性向上の重要性とその施策について（2026年3月2日）",
      url: "https://www.mhlw.go.jp/content/12300000/001678242.pdf",
    },
    { label: "厚生労働省: 介護テクノロジーの利用促進", url: "https://www.mhlw.go.jp/stf/kaigo-ict.html" },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["care-technology", "care-productivity"],
};
