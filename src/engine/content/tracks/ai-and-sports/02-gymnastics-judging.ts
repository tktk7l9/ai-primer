import type { Lesson } from "@/engine/content/types";

export const gymnasticsJudging: Lesson = {
  id: "ai-and-sports-02",
  slug: "gymnastics-judging",
  title: {
    ja: "体操の採点を支えるAI — 技を数値で見る",
    en: "AI That Supports Gymnastics Judging: Seeing Skills in Numbers",
  },
  summary: {
    ja: "体操の技は複雑で速くなり、審判の負担が増えている。国際体操連盟と富士通は、選手の動きをセンシングしてAIで技を判定する採点支援システムを共同で開発し、2023年に全10種目で使い始めた。審判の採点とどう組み合わせているか。",
    en: "Gymnastics skills have grown faster and more complex, and judges' workload has grown with them. The International Gymnastics Federation and Fujitsu jointly developed a judging support system that senses athletes' movements and uses AI to identify skills, and began using it on all 10 apparatus in 2023. How it fits with the judges' scoring.",
  },
  body: {
    ja: `## 審判の負担と、採点の公平性
富士通によると、体操競技では選手の競技力や器具の向上で技が複雑・高度になり、判定する審判に、より高度なスキルが求められて負荷が高まっています。国際体操連盟（FIG）と富士通は、採点の公平性や透明性の確保といった**スポーツインテグリティ**を高める取組みとして、2017年に**採点支援システム**（JSS、Judging Support System）の開発に着手しました。

## 4種目から全10種目へ
- **2019年10月**: ドイツで開かれた第49回世界体操競技選手権大会で、3DセンサーとAIを使うシステムを、あん馬、つり輪、男子跳馬、女子跳馬の4種目に正式に導入。上級の審判員が審判の採点に疑念を抱いたときや、選手団からの申し立てがあったときに、FIGが2005年から使っているビデオ判定システムとともに演技の検証に使う。
- **2023年9月30日から**: ベルギーで開かれた第52回世界体操競技選手権大会で、全10種目に適用を始めた。従来のセンサー方式をカメラ映像の画像分析に置き換え、AIの技術を強化して、高速で複雑な動きを精緻に捉えられるようにした。

## システムがすること
- 競技者の動作をセンシングし、数値データとして分析して、AIが技を自動で判定し、結果を画面に表示する。
- 関節の角度など、審判が正確な体の動きを見たい場面の数値を表示し、同じ基準による正確な判定を支援する。
- 演技の技を3Dで表示し、様々な角度から見られるようにする（2019年の発表）。

FIGは、関節の角度や手足の位置などの数値を使って、より具体的に技を判断するガイドラインを、2023年11月から順次公開するとしていました。

## 採点の外にも広がる使い道
- FIGの加盟国は、選手の能力や技の習熟度を評価するトレーニングに、このシステムを使えるようになる。
- システムのデータに基づく解説や映像を、世界の視聴者に提供していく。
- 富士通は2019年の発表で、得られるデータが、けがのリスクの抽出や動きの強化、姿勢の矯正にも役立つ可能性があるとしていました。

## 読むときの注意
- **支援であって置き換えではない**: 2019年の導入時、システムは疑念や申し立てがあったときに演技を検証するために使われました。システムがしているのは「正確な判定の支援」です。
- **「可能性」と「実績」を分ける**: けがのリスクの抽出などは、発表時点では「役立つ可能性がある」使い道として書かれています。`,
    en: `## Judges' workload and fair scoring
According to Fujitsu, gymnastics skills have become more complex and difficult as athletes and equipment have improved, demanding more advanced skills from the judges who assess them and increasing their burden. As an effort to strengthen **sports integrity** — ensuring fair and transparent scoring — the International Gymnastics Federation (FIG) and Fujitsu began developing a **judging support system** (JSS) in 2017.

## From four apparatus to all ten
- **October 2019**: At the 49th World Artistic Gymnastics Championships in Germany, the system, which uses 3D sensors and AI, was officially introduced on four apparatus: pommel horse, rings, men's vault, and women's vault. When the superior judges had doubts about the judges' scores, or when a team filed an inquiry, it was used to verify routines together with the video replay system the FIG had used since 2005.
- **From September 30, 2023**: At the 52nd World Championships in Belgium, it began to be applied to all 10 apparatus. Sensors were replaced with image analysis of camera footage, and the AI was strengthened to capture fast, complex movements precisely.

## What the system does
- It senses athletes' movements, analyzes them as numerical data, has AI identify the skills automatically, and shows the results on screen.
- It displays numbers such as joint angles at moments when judges want to see exact body movements, supporting accurate judgments by the same standard.
- It shows the skills of a routine in 3D so they can be viewed from different angles (2019 announcement).

The FIG said it would publish, in stages from November 2023, guidelines for judging skills more concretely using numbers such as joint angles and limb positions.

## Uses beyond scoring
- FIG member federations will be able to use the system in training to assess athletes' abilities and how well they have mastered skills.
- Commentary and video based on the system's data will be provided to viewers around the world.
- In its 2019 announcement, Fujitsu said the data might also help identify injury risks, strengthen movements, and correct posture.

## Reading the claims
- **Support, not replacement**: When introduced in 2019, the system was used to verify routines when there were doubts or inquiries. What it does is "support accurate judging."
- **Separate "might" from "does"**: Uses such as identifying injury risk were described, at the time, as things the data "might" help with.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "2019年の導入時、採点支援システムはどんなときに使われた？",
        en: "When it was introduced in 2019, when was the judging support system used?",
      },
      choices: [
        {
          ja: "上級の審判員が採点に疑念を抱いたときや、選手団からの申し立てがあったときの演技の検証",
          en: "To verify routines when superior judges had doubts about scores or when a team filed an inquiry",
        },
        { ja: "すべての演技の得点を審判なしで決めるため", en: "To set every score with no judges" },
        { ja: "選手の出場順を決めるため", en: "To decide the order of competitors" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "FIGが2005年から使っているビデオ判定システムとともに、演技の検証に使われました。",
        en: "It was used to verify routines together with the video replay system the FIG had used since 2005.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "2023年に全10種目へ広げたとき、何が変わった？",
        en: "What changed when the system was extended to all 10 apparatus in 2023?",
      },
      choices: [
        {
          ja: "センサー方式をカメラ映像の画像分析に置き換え、AIの技術を強化した",
          en: "Sensors were replaced with image analysis of camera footage, and the AI was strengthened",
        },
        { ja: "審判をなくした", en: "Judges were eliminated" },
        { ja: "AIをやめて、目視だけにした", en: "AI was dropped in favor of the naked eye alone" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "高速で複雑な動きを精緻に捉えるための変更です。システムは、同じ基準による正確な判定を支援します。",
        en: "The change was made to capture fast, complex movements precisely. The system supports accurate judging by the same standard.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "富士通は2019年の発表で、データがけがのリスクの抽出に役立つことが証明されたとしていた。",
        en: "In its 2019 announcement, Fujitsu said the data had been proven to help identify injury risks.",
      },
      answer: false,
      explanation: {
        ja: "「役立つ可能性がある」使い道として書かれていました。可能性と実績を分けて読むことが大切です。",
        en: "It was described as something the data \"might\" help with. It is important to read possibilities and results separately.",
      },
    },
  ],
  sources: [
    {
      label: "富士通: 「第49回世界体操競技選手権大会」で富士通の採点支援システムを正式導入（2019-10-02）",
      url: "https://info.archives.global.fujitsu/jp/news/2019/10/2-1.html",
    },
    {
      label: "富士通: 国際体操連盟、富士通のJudging Support Systemを全10種目で利用開始（2023-10-05）",
      url: "https://info.archives.global.fujitsu/jp/news/2023/10/5-1.html",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["judging-support-system", "sports-integrity"],
};
