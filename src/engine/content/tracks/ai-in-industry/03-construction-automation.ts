import type { Lesson } from "@/engine/content/types";

export const constructionAutomation: Lesson = {
  id: "ai-in-industry-03",
  slug: "construction-automation",
  title: {
    ja: "建設とAI — 現場のオートメーション化",
    en: "Construction and AI: Automating the Building Site",
  },
  summary: {
    ja: "国は、2040年度までに建設現場の省人化を少なくとも3割、生産性を1.5倍にする目標を掲げた。AIなどで施工計画を作り、1人で複数の建設機械を動かす「施工のオートメーション化」とは何か、そのために必要な安全のルールや共通の仕組み。",
    en: "Japan's government has set a goal of cutting the labor needed on construction sites by at least 30% — raising productivity 1.5 times — by fiscal 2040. What \"automated construction\" means, with plans drawn up by AI and other systems and one operator running several machines, and the safety rules and shared systems it needs.",
  },
  body: {
    ja: `## 担い手の高齢化と、増える災害

国土交通省の「i-Construction 2.0」（2024年4月16日策定）は、建設産業の課題として次を挙げています。
- 生産年齢人口は2040年には2割減ると予測されている。
- 建設業は、就業者に占める55歳以上の割合が全産業の平均より高い水準で増えている一方、29歳以下の割合の増え方は緩やか。高齢の就業者の大量退職も見込まれ、将来の担い手不足が心配されている。
- 気候変動に伴って災害が激しく、多くなっている。

## i-Construction 2.0 — 3本の柱
国土交通省は2016年度から、ICT（情報通信技術）を使う施工（ICT施工）をはじめとする「i-Construction」を進めてきました。i-Construction 2.0は、これを一歩進めて、**2040年度までに建設現場の省人化を少なくとも3割、すなわち生産性を1.5倍に**することを目指し、次の3本の柱を掲げています。
1. 施工のオートメーション化
2. データ連携のオートメーション化
3. 施工管理のオートメーション化

## 施工のオートメーション化とは
- **これまで**: 経験の豊かな技術者の指揮のもとで施工計画を作り、工事の工程を決め、指示を受けたオペレーターが建設機械に乗って操作する。
- **これから**: さまざまなセンサーで現場の情報を集め、AIなどを使って自動的に作った施工計画に基づいて、1人のオペレーターが複数の建設機械の動きを管理する。

そのために、国は次のような環境を整えるとしています。
- 自動で施工するときの、標準的な安全のルール
- メーカーの違う建設機械でも制御できる、共通の制御信号
- 人が立ち入らない現場で安全に作業するための、遠隔操作の建設機械の普及
- メーカーが違っても施工のデータをリアルタイムに集めて共有し、建設機械の最適な配置をすぐ判断できるようにすること

文書は、人が手作業で行っている内容をAIやシステムで自動化し、**人はマネジメントの業務に特化していく**よう変わる必要があるとしています。ドローンやAIなどの先進技術で、施工管理の屋外での作業をリモート化・オフサイト化することも目指しています。

## 読むときの注意
- 省人化3割は、2040年度に向けた目標です。達成された数字ではありません。国土交通省は2025年4月に、1年目の成果と2025年度の取り組みの予定を公表しています。
- 文書は、災害への対応や、雪の多い寒い地域のような厳しい現場の条件、地域の特性も考える必要があるとしています。同じ技術が、どの現場でも同じように使えるとは限りません。
- 機械が動き回る現場の安全は、人のいる場所を動くほかの機械と同じく、ルールとセットで考える必要があります（[歩道の配送ロボットと、空のドローン](/ja/learn/self-driving-and-robots/delivery-robots-and-drones)のレッスン参照）。`,
    en: `## An aging workforce and more disasters

The Ministry of Land, Infrastructure, Transport and Tourism's (MLIT) "i-Construction 2.0" (adopted on April 16, 2024) lists these challenges for the construction industry:
- The working-age population is projected to fall by 20% by 2040.
- In construction, the share of workers aged 55 and over is higher than the all-industry average and rising, while the share aged 29 and under is growing only slowly. With a wave of retirements expected among older workers, a future shortage of workers is a concern.
- Disasters are becoming more severe and more frequent with climate change.

## i-Construction 2.0: three pillars
Since fiscal 2016, MLIT has promoted "i-Construction," starting with construction that uses information and communications technology (ICT construction). i-Construction 2.0 takes this a step further, aiming to **cut the labor needed on construction sites by at least 30% — that is, raise productivity 1.5 times — by fiscal 2040**, with three pillars:
1. Automating construction work
2. Automating data integration
3. Automating construction management

## What automating construction work means
- **Until now**: under the direction of experienced engineers, a construction plan is drawn up and the work schedule set, and operators who receive instructions ride in and operate the machines.
- **From here**: information about the site is collected with various sensors, and one operator manages the movements of several machines, following a construction plan generated automatically with AI and other tools.

To make this possible, the government says it will put in place:
- standard safety rules for automated construction,
- common control signals that can control machines from different manufacturers,
- wider use of remotely operated machines, so work can be done safely at sites where people do not enter, and
- real-time collection and sharing of construction data across manufacturers, so the best placement of machines can be decided immediately.

The document says work now done by hand needs to be automated with AI and systems, so that **people specialize in management**. It also aims to use drones, AI, and other advanced technologies to move outdoor construction-management work to remote and off-site settings.

## Reading the plan
- The 30% labor reduction is a goal for fiscal 2040, not something already achieved. In April 2025, MLIT published the results of the first year and its plans for fiscal 2025.
- The document notes the need to consider disaster response, harsh site conditions such as heavy snow and cold, and regional characteristics. The same technology will not necessarily work equally well on every site.
- As with other machines that move among people, safety on sites where machines move around has to be thought through together with rules (see the [delivery robots and drones](/en/learn/self-driving-and-robots/delivery-robots-and-drones) lesson).`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "i-Construction 2.0が掲げる目標はどれ？",
        en: "What goal does i-Construction 2.0 set?",
      },
      choices: [
        {
          ja: "2040年度までに建設現場の省人化を少なくとも3割（生産性1.5倍）",
          en: "At least a 30% cut in labor on construction sites (1.5 times the productivity) by fiscal 2040",
        },
        { ja: "2025年度までにすべての建設現場を無人にする", en: "Making every construction site unmanned by fiscal 2025" },
        { ja: "建設業で働く人の数を2倍にする", en: "Doubling the number of construction workers" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "2040年度に向けた目標で、施工・データ連携・施工管理のオートメーション化を3本の柱にしています。",
        en: "It is a goal for fiscal 2040, built on three pillars: automating construction work, data integration, and construction management.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "施工のオートメーション化では、AIなどで作った施工計画に基づいて、1人のオペレーターが複数の建設機械を管理することを目指している。",
        en: "Automating construction work aims for one operator to manage several machines, following a plan generated with AI and other tools.",
      },
      answer: true,
      explanation: {
        ja: "センサーで現場の情報を集め、自動的に作った施工計画に基づいて、1人が複数の機械の動きを管理する姿を描いています。人はマネジメントの業務に特化していきます。",
        en: "It envisions collecting site information with sensors and one person managing several machines according to an automatically generated plan, with people focusing on management.",
      },
    },
    {
      kind: "multi",
      prompt: {
        ja: "施工のオートメーション化のために国が整えるとしているものをすべて選んで。",
        en: "Select everything the government says it will put in place to automate construction work.",
      },
      choices: [
        { ja: "自動で施工するときの標準的な安全のルール", en: "Standard safety rules for automated construction" },
        { ja: "メーカーの違う建設機械を制御できる共通の制御信号", en: "Common control signals for machines from different manufacturers" },
        { ja: "遠隔操作の建設機械の普及", en: "Wider use of remotely operated machines" },
        { ja: "建設機械の操作に必要な資格の廃止", en: "Abolishing the qualifications needed to operate machines" },
      ],
      correctIndexes: [0, 1, 2],
      explanation: {
        ja: "安全のルール、共通の制御信号、遠隔操作の機械の普及、施工データの共有などを挙げています。資格の廃止は挙げていません。",
        en: "It lists safety rules, common control signals, wider use of remote machines, and data sharing, among others. Abolishing qualifications is not one of them.",
      },
    },
  ],
  sources: [
    {
      label: "国土交通省: 「i-Construction 2.0」を策定しました（2024-04-16）",
      url: "https://www.mlit.go.jp/report/press/kanbo08_hh_001085.html",
    },
    { label: "国土交通省: i-Construction 2.0 ～建設現場のオートメーション化～（2024年4月）", url: "https://www.mlit.go.jp/tec/constplan/content/001738240.pdf" },
    {
      label: "国土交通省: 「i-Construction 2.0」の2025年度の取組予定をまとめました（2025-04-18）",
      url: "https://www.mlit.go.jp/report/press/kanbo08_hh_001199.html",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["i-construction", "physical-ai"],
};
