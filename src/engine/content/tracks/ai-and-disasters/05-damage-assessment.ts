import type { Lesson } from "@/engine/content/types";

export const damageAssessment: Lesson = {
  id: "ai-and-disasters-05",
  slug: "damage-assessment",
  title: {
    ja: "住家の被害認定とAI — 罹災証明書を早く届けるために",
    en: "Assessing Housing Damage with AI: Getting Disaster Victim Certificates Out Faster",
  },
  summary: {
    ja: "災害のあと、市町村は住まいの被害の程度を調べて罹災証明書を出す。被災者への支援を決める材料の一つになる書類だが、大きな災害では調べる家が膨大になる。写真やドローン、衛星画像のAI解析をどこまで使えるようにしてきたかを、国の指針と自治体のアンケートから見る。",
    en: "After a disaster, municipalities assess how badly homes were damaged and issue disaster victim certificates, one of the bases for deciding on support. In a large disaster, the number of homes to assess becomes enormous. How far photos, drones, and AI analysis of satellite images have been allowed to help, according to national guidelines and a municipal survey.",
  },
  body: {
    ja: `## 罹災証明書と、住家の被害認定
**罹災証明書**は、災害による住家の被害の程度を証明する書類で、被災者への支援策を決める判断材料の一つとして使われます。災害対策基本法は、市町村長は被災者から申請があれば、遅滞なく住家の被害などを調べて罹災証明書を交付しなければならないと定めています（2013年の改正）。国の防災基本計画も、各種の支援措置を早く実施するため、被害の程度を遅滞なく調べて交付するよう市町村に求めています。被害の程度は、内閣府の「災害に係る住家の被害認定基準運用指針」に沿って、全壊、大規模半壊、中規模半壊、半壊、準半壊、準半壊に至らない（一部損壊）に区分されます。

大きな災害では、調べる家の数が膨大になります。熊本地震では、熊本県内で交付された罹災証明書が213,924件（2016年度）にのぼりました。

## 写真とドローンで判定する
- **写真で「全壊」と判定（2018年〜）**: 2018年3月の見直しで、写真を活用した判定方法が加わりました。発災前後の航空写真やドローンの映像などから、屋根の位置が変わっているなど、一見して住家が倒壊していると分かる場合は、写真で「全壊」と認定できます。写真だけで判定できない場合は、現地で調べます。
- **ドローンの3次元データで、区域ごとにまとめて判定**: 木造・プレハブの1〜2階建ての戸建てが並ぶ区域では、区域全体をドローンで撮影・3次元化して算出した浸水深で、明らかに床上1.8m以上の浸水を確かめられれば、その区域の該当する住家をまとめて判定できます。津波や川の氾濫の水流やがれきで外壁と建具が壊れている場合は「全壊」、そうでない場合は「大規模半壊」です。
- **スマートフォンの画像**: スマートフォンなどで撮った画像から算出した浸水深も使えます。

## AIはどこまで来たか
- **デジタル庁の技術検証**: 2023年10月から2024年2月にかけて、ドローン、衛星画像、GISデータ、3Dモデル、AIによる画像解析などで、水害時の被害認定調査を効率化できるかが検証され、業務の効率化が図られたことが確認されました。
- **内閣府の周知**: これを受けて内閣府は、衛星写真のAI解析で浸水した戸数を概算できること（調査の計画づくりなどに役立つ）や、ドローンの3次元データから区域をまとめて判定できることを周知しています。
- **自治体の計画**: 内閣府の手引きに載る2022年度の自治体アンケートでは、被災者支援のシステムで今後導入を予定している機能（回答数267）のうち、「AI技術等を用いた全壊住家等の自動判定機能」が42.3%でした。一方、すでに導入している機能（回答数512）としては、割合が最も低い部類でした。

## 読むときの注意
- **AIの解析は「概算」**: 衛星写真のAI解析は、浸水した戸数の概算として、調査の計画づくりなどに役立つと位置づけられています。どんな方法で判定できるかは運用指針が定めています。
- **基準は見直され続けている**: 2024年の能登半島地震では、第1次調査の結果が第2次調査で見直されるなど、被害の程度の確定に時間がかかる例が多く見られました。運用指針は2025年7月と2026年6月に、調査の流れなどを見直しています。
- **再調査を頼める**: 運用指針は、第2次調査のあと被災者から再調査の依頼があれば、内容を精査して必要な点を調べ直し、判定の結果を理由とともに示すとしています。
- **数字の意味**: 「AIの自動判定を予定する自治体が42.3%」は、システムの導入を予定する機能を答えた自治体の中での割合で、全国の自治体の42.3%ではありません。`,
    en: `## Disaster victim certificates and housing damage assessment
A **disaster victim certificate** certifies how badly a home was damaged in a disaster and is used as one basis for deciding on support for survivors. Japan's Disaster Countermeasures Basic Act (as amended in 2013) says that when a victim applies, the municipal mayor must assess the damage to the home without delay and issue the certificate. The national Basic Disaster Management Plan likewise asks municipalities to assess damage and issue certificates without delay so that support measures can start early. Damage is classified, under the Cabinet Office's operational guidelines for assessing housing damage, as total destruction, large-scale half destruction, medium-scale half destruction, half destruction, quasi-half destruction, and partial damage (below quasi-half).

In a large disaster, the number of homes to assess becomes enormous. After the Kumamoto earthquakes, 213,924 disaster victim certificates were issued in Kumamoto Prefecture (fiscal 2016).

## Judging from photos and drones
- **Judging "total destruction" from photos (since 2018)**: A March 2018 revision added a method that uses photos. If aerial photos from before and after the disaster, drone footage, or similar images show at a glance that a home has collapsed — its roof has shifted, for example — it can be certified as "totally destroyed" from the photos. If photos alone are not enough, the home is assessed on site.
- **Judging a whole zone from 3D drone data**: In a zone of one- or two-story wooden or prefabricated detached houses, if flood depth calculated from drone images of the entire zone turned into 3D data clearly shows water at least 1.8 m above floor level, the qualifying homes in the zone can be assessed together. Where water flow or debris from a tsunami or river flood has broken outer walls and fittings such as doors and windows, they are "totally destroyed"; otherwise, "large-scale half destroyed."
- **Smartphone images**: Flood depth calculated from images taken with smartphones and similar devices can also be used.

## How far has AI come?
- **A Digital Agency technology trial**: From October 2023 to February 2024, a trial tested whether drones, satellite images, GIS data, 3D models, AI image analysis, and the like could make flood damage assessment more efficient, and confirmed that they did.
- **What the Cabinet Office publicized**: Following the trial, the Cabinet Office has publicized that AI analysis of satellite photos can roughly estimate the number of flooded homes (useful for planning surveys, for example), and that whole zones can be assessed from 3D drone data.
- **Municipal plans**: In a fiscal 2022 municipal survey cited in the Cabinet Office's handbook, among functions planned for disaster-victim support systems (267 responses), 42.3% planned an "automatic judgment function for totally destroyed homes using AI and other technologies." Among functions already in place (512 responses), though, it was among the least common.

## Reading the numbers
- **AI analysis gives an estimate**: AI analysis of satellite photos is positioned as a rough estimate of how many homes flooded, useful for planning surveys and the like. Which methods may be used to make the actual assessment is set by the operational guidelines.
- **The rules keep changing**: After the 2024 Noto Peninsula earthquake, many results from the first survey were revised in the second, so it often took a long time to settle the extent of damage. The guidelines revised the survey process and other points in July 2025 and June 2026.
- **You can ask for a re-survey**: The guidelines say that if, after the second survey, a resident asks for a re-survey, the municipality reviews the request, re-examines the points that need it, and shows the result with its reasons.
- **What the percentage means**: "42.3% of municipalities plan AI automatic judgment" is a share of the municipalities that answered about planned system functions, not 42.3% of all municipalities in Japan.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "2018年3月の見直しで加わった、写真を活用した判定でできることは？",
        en: "What does the photo-based method added in the March 2018 revision allow?",
      },
      choices: [
        {
          ja: "写真から一見して住家が倒壊していると分かれば「全壊」と認定できる（分からなければ現地で調べる）",
          en: "If photos show at a glance that a home has collapsed, it can be certified as totally destroyed (otherwise it is assessed on site)",
        },
        { ja: "どんな被害も写真だけで判定し、現地調査はしない", en: "All damage is judged from photos alone, with no on-site surveys" },
        { ja: "被災者が撮った写真だけで罹災証明書が自動で発行される", en: "Certificates are issued automatically from residents' photos alone" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "写真で判定できるのは、屋根の位置が変わっているなど、一見して倒壊が分かる場合です。写真だけで判定できなければ現地で調べます。",
        en: "Photos are enough only when collapse is obvious at a glance, such as a shifted roof. If they are not enough, the home is assessed on site.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "デジタル庁の技術検証を受けて内閣府が周知した、衛星写真のAI解析の使い道は？",
        en: "Following the Digital Agency trial, what use of AI analysis of satellite photos did the Cabinet Office publicize?",
      },
      choices: [
        {
          ja: "浸水した戸数の概算（調査の計画づくりなどに役立つ）",
          en: "Roughly estimating how many homes flooded (useful for planning surveys, for example)",
        },
        { ja: "一軒ずつの罹災証明書の発行", en: "Issuing each household's disaster victim certificate" },
        { ja: "地震の発生の予知", en: "Predicting earthquakes" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "AI解析は浸水戸数の「概算」として位置づけられています。判定の方法は運用指針が定めています。",
        en: "The AI analysis is positioned as a rough estimate of flooded homes. How damage is actually assessed is set by the operational guidelines.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "2022年度のアンケートでは、AIによる全壊住家の自動判定機能は、すでに多くの自治体のシステムで使われていた。",
        en: "In the fiscal 2022 survey, AI-based automatic judgment of totally destroyed homes was already in use in many municipalities' systems.",
      },
      answer: false,
      explanation: {
        ja: "導入予定の機能としては42.3%と比較的高い一方、すでに導入している機能としては割合が最も低い部類でした。",
        en: "It was relatively common among planned functions (42.3%), but among functions already in place it was one of the least common.",
      },
    },
  ],
  sources: [
    {
      label: "内閣府（防災担当）: 災害に係る住家の被害認定基準運用指針（2026年6月）",
      url: "https://www.bousai.go.jp/taisaku/pdf/r605shishin_all.pdf",
    },
    {
      label: "内閣府（防災担当）: 住家被害認定業務実施体制の手引き 第7章 平常時からの備え",
      url: "https://www.bousai.go.jp/taisaku/pdf/r605saigai_tebiki_7.pdf",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["disaster-victim-certificate", "housing-damage-assessment"],
};
