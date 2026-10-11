import type { Lesson } from "@/engine/content/types";

export const medicalAi: Lesson = {
  id: "ai-and-science-05",
  slug: "medical-ai",
  title: {
    ja: "医療で使われるAI — 審査を受けた医療機器と、判断するのは医師",
    en: "AI in Medicine: Reviewed Medical Devices, and the Doctor Who Decides",
  },
  summary: {
    ja: "診断や治療に使うソフトウェアは医療機器として審査される。日本ではAIを使ったプログラム医療機器の承認が進み、米FDAの一覧には1,600件を超えるAI搭載の機器が載る。厚生労働省は、AIを使っても判断の主体は医師だと整理している。",
    en: "Software used for diagnosis and treatment is reviewed as a medical device. Japan has approved a growing number of AI-based medical device programs, and the US FDA lists more than 1,600 AI-enabled devices. Japan's health ministry holds that even with AI, the doctor makes the call.",
  },
  body: {
    ja: `## 「AIが診断」の中身を分けて考える

### ソフトウェアも医療機器になる
日本では、2014年11月25日に施行された医薬品医療機器等法で、病気の診断や治療などを目的とする単体のプログラム（ソフトウェア）も、医療機器として規制されるようになりました。医薬品医療機器総合機構（PMDA）によると、規制の対象になるのは、医療機器としての目的を持ち、意図したとおりに動かなかった場合に患者（または使う人）の生命や健康に影響を与えるおそれがあるプログラムです（影響を与えるおそれがほとんどないものは除く）。こうした**プログラム医療機器**も、医薬品医療機器等法に基づく承認などを受けて世に出ます。

2025年9月26日に開かれた厚生労働省の定期意見交換会で、PMDAは、2018年12月に内視鏡の画像診断を支援するソフトウェアが承認されて以降、2025年8月末までにAIを活用したプログラム医療機器が55品目承認されたと説明しました。胃や大腸の内視鏡画像をはじめ、CTやMRIの画像、超音波、脈波、心電図などを解析して、診断や治療の補助・支援を行うものです。

### 米国FDAの一覧
米国食品医薬品局（FDA）は、米国で販売が認められたAI搭載の医療機器の一覧を公開しています。2026年9月4日更新の一覧には1,614件が載っていて、うち1,230件が放射線科の分野でした。最も古いものは、1995年の、子宮頸部の細胞診（パップテスト）の標本を自動でスクリーニングする装置です。FDAは、一覧の機器は安全性と有効性の審査を含む市販前の要件を満たしたものだとする一方、主にAIに関する用語で特定したもので網羅的な一覧ではないとしています。大規模言語モデルを組み込んだ機器を見分ける方法は、今後検討するとしています。

### 判断の主体は医師
厚生労働省は2018年12月19日の通知で、AIを使った診断・治療支援のプログラムを利用して診療する場合も、診断や治療を行う主体は医師で、医師が最終的な判断の責任を負うと整理しました。通知が引く研究報告は、AIは医師が判断する過程の一部で効率を上げて情報を示す支援ツールにすぎず、判断の主体は少なくとも当面は医師だとしています。

### 審査された道具と、身近なチャットAIを区別する
- 医療機器としてのAIは、決められた目的（たとえば内視鏡画像の解析による診断の支援）について審査を受けた道具で、医療者が使います。
- 一般向けのチャットAIを健康の相談に使うときは、それが医療機器として審査を受けた道具かどうかを区別して受け止めます。調べるときの注意と相談先は[健康・医療の情報をAIで調べるとき](/ja/learn/understanding-ai/health-information)のレッスンで扱いました。
- 承認件数の数字は時点によって変わります。数字を見たら、いつ時点の、どの国の、どの範囲の数かを確かめます。`,
    en: `## Unpacking "AI diagnoses"

### Software can be a medical device
In Japan, the Act on Pharmaceuticals and Medical Devices, in force since November 25, 2014, brought standalone programs (software) intended for diagnosing or treating disease under medical device regulation. According to the Pharmaceuticals and Medical Devices Agency (PMDA), the regulation covers programs that have a medical-device purpose and that could affect the life or health of patients (or users) if they do not work as intended — excluding those with almost no such risk. These **medical device programs**, too, reach the market through approval and related procedures under the Act.

At a Ministry of Health, Labour and Welfare meeting on September 26, 2025, PMDA reported that since an endoscopic image diagnosis support program was approved in December 2018, 55 AI-based medical device programs had been approved as of the end of August 2025. They analyze stomach and colon endoscopy images, CT and MRI scans, ultrasound, pulse waves, electrocardiograms, and more, to assist and support diagnosis or treatment.

### The US FDA's list
The US Food and Drug Administration (FDA) publishes a list of AI-enabled medical devices authorized for marketing in the United States. The list as updated on September 4, 2026 contains 1,614 devices, 1,230 of them in radiology. The oldest is a 1995 system that automatically screens Pap test (cervical cytology) slides. The FDA says the listed devices met its premarket requirements, including a review of safety and effectiveness, but that the list was compiled mainly from AI-related terms and is not comprehensive. It says it will explore ways to identify devices that incorporate large language models.

### The doctor makes the call
In a notice dated December 19, 2018, Japan's Ministry of Health, Labour and Welfare stated that when doctors use programs that support diagnosis and treatment with AI, the doctor remains the one who diagnoses and treats and bears final responsibility for the judgment. The research report the notice cites describes AI as merely a support tool that presents information more efficiently within steps of a doctor-led judgment, and says the doctor is the decision-maker, at least for now.

### Tell reviewed tools apart from everyday chat AI
- AI as a medical device is a tool reviewed for a defined purpose — for example, supporting diagnosis by analyzing endoscopy images — and used by healthcare professionals.
- When you ask a general-purpose chat AI about health, keep in mind whether it is a tool reviewed as a medical device. What to watch for, and where to turn, is covered in [looking up health information with AI](/en/learn/understanding-ai/health-information).
- Approval counts change over time. When you see a number, check as of when, in which country, and what it counts.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "AIを使った医療機器について、本文の内容に合うものはどれ？",
        en: "Which statement about AI-based medical devices matches the lesson?",
      },
      choices: [
        {
          ja: "日本でも米国でも、決められた目的について審査を受けて承認などを受けたAIの医療機器がある",
          en: "In both Japan and the US, there are AI medical devices that were reviewed and authorized for a defined purpose",
        },
        { ja: "FDAの一覧は、世界中のAI医療機器を網羅している", en: "The FDA's list covers every AI medical device in the world" },
        { ja: "AIの医療機器を使えば、診断の最終的な責任はAIの開発者に移る", en: "Using an AI medical device shifts final responsibility for the diagnosis to the AI's developer" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "日本ではAIを活用したプログラム医療機器が承認されており、FDAも販売が認められたAI搭載の機器の一覧を公開しています。FDAの一覧は網羅的ではないとFDA自身が書いており、厚生労働省は、AIを使っても最終的な判断の責任は医師が負うと整理しています。",
        en: "Japan has approved AI-based medical device programs, and the FDA lists AI-enabled devices authorized for marketing. The FDA itself says its list is not comprehensive, and Japan's health ministry holds that the doctor bears final responsibility even when AI is used.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "厚生労働省は、AIを使った診断支援のプログラムを利用する場合も、診断の主体は医師で、医師が最終的な判断の責任を負うと整理している。",
        en: "Japan's health ministry holds that even when doctors use an AI diagnosis-support program, the doctor is the one who diagnoses and bears final responsibility.",
      },
      answer: true,
      explanation: {
        ja: "2018年12月19日の通知は、AIを用いた診断・治療支援のプログラムを利用して診療する場合も、診断・治療を行う主体は医師で、医師がその最終的な判断の責任を負うとしています。",
        en: "The notice of December 19, 2018 states that when practicing medicine with AI diagnosis- and treatment-support programs, the doctor is the one who diagnoses and treats and bears final responsibility for the judgment.",
      },
    },
  ],
  sources: [
    { label: "PMDA: プログラム医療機器", url: "https://www.pmda.go.jp/review-services/drug-reviews/about-reviews/devices/0048.html" },
    {
      label: "厚生労働省: 第23回 医療機器・体外診断薬の承認審査や安全対策等に関する定期意見交換会 議事録（2025年9月26日）",
      url: "https://www.mhlw.go.jp/stf/newpage_65484.html",
    },
    {
      label: "FDA: Artificial Intelligence-Enabled Medical Devices（List・2026-09-04 更新）",
      url: "https://www.fda.gov/medical-devices/artificial-intelligence-enabled-medical-devices/list-artificial-intelligence-enabled-medical-devices",
    },
    {
      label: "厚生労働省: 人工知能（AI）を用いた診断、治療等の支援を行うプログラムの利用と医師法第17条の規定との関係について（医政医発1219第1号・2018年12月19日）",
      url: "https://www.mhlw.go.jp/content/10601000/000468150.pdf",
    },
  ],
  lastVerified: "2026-10-11",
  glossaryRefs: ["samd", "human-in-the-loop"],
};
