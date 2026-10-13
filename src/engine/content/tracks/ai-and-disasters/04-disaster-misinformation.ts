import type { Lesson } from "@/engine/content/types";

export const disasterMisinformation: Lesson = {
  id: "ai-and-disasters-04",
  slug: "disaster-misinformation",
  title: {
    ja: "災害時の偽情報とAI — 能登半島地震で起きたこと",
    en: "Disaster Misinformation and AI: What Happened After the Noto Peninsula Earthquake",
  },
  summary: {
    ja: "2024年1月の能登半島地震では、SNSが安否確認に役立つ一方、「人工地震」の投稿や偽の救助要請が広がった。NICTのD-SUMMの分析では、デマと推定される救助要請が熊本地震の1件から104件に増えた。生成AIで偽の画像がさらに作りやすくなるなかで、受け取る側にできること。",
    en: "After the January 2024 Noto Peninsula earthquake, social media helped people check on each other — and spread \"man-made earthquake\" claims and fake rescue requests. In NICT's D-SUMM analysis, rescue requests estimated to be false rose from 1 after the Kumamoto earthquakes to 104. As generative AI makes fake images even easier to produce, what can those on the receiving end do?",
  },
  body: {
    ja: `## 何が広がったか
総務省の令和6年版情報通信白書によると、能登半島地震では、SNSが情報収集や安否確認の手段として役立った一方、迅速な救命・救助活動や円滑な復旧・復興活動を妨げるような偽・誤情報が流通したと指摘されています。X（Twitter Japan社）によると、Xでの能登半島地震に関する偽・誤情報を含む投稿の主なものは次のとおりでした。

| 内容 | 投稿の数 |
|---|---|
| 地震が「人工地震」だとする言葉を含む投稿 | 約10万件 |
| 「救助要請」に関する投稿 | 約21,000件 |
| 「支援要請」（偽の寄付を募るもの）に関する投稿 | 約350件 |
| 「窃盗団」（が現地に出没）に関する投稿 | 約200件 |

東京大学の澁谷准教授は、善意による投稿もあるものの、閲覧数稼ぎが目的と考えられる救助要請の複製投稿や、お金をだまし取る目的と考えられる偽の救助要請や振込依頼の投稿が見られたと指摘しています。複製投稿のユーザーの9割は、日本語使用者以外と推定されるユーザーでした。

## AIで「デマらしさ」に気づく
NICTのD-SUMM（[前のレッスン](/ja/learn/ai-and-disasters/social-media-reports)参照）でXの投稿を分析すると、発災後24時間に投稿された救助を求める報告は、2016年の熊本地震の573件（総報告数19,095）から、1,091件（同16,739）に倍増しました。1,091件のうち254件で矛盾する報告が検出され、104件がデマと推定されました。熊本地震の573件のうち、偽情報とみられたのは1件でした。

ただしNICTは、実在しない住所が載っていないか、デマに関する報道と内容が合うかなどを突き合わせて推定しており、現地で確かめたわけではないため、推定が誤っている可能性もあるとしています。

## 生成AIで、偽の画像はさらに作りやすく
白書は、生成AIの技術が進むなかで、さらに精巧な偽の動画や画像が簡単に作られ、偽・誤情報の流通・拡散が飛躍的に増えることが懸念されると書いています。総務省の請負調査の報告書（2025年3月31日）は、能登半島地震と日向灘の地震（2024年8月）で、生成AIで作られたとみられる被害状況の偽画像や、科学的根拠のない人工地震・地震予知の偽情報がSNSで広がり、注意喚起を装ったスパム投稿も相次いだと整理しています。

見破る技術の研究も進んでいます。同じ報告書には、生成AIで合成された一般の画像（特に災害の画像）を90%以上の精度で検知できるとする、企業の実証も載っています。ただし数字は開発した企業が実証で示したもので、報告書は、生成AIの速い進歩に検知のAIが追いつき続けることを課題に挙げています（ディープフェイクの見分け方は[ディープフェイクと来歴情報](/ja/learn/generative-media/deepfakes-and-provenance)のレッスン参照）。

## 国と事業者の対応
- 総務省は地震の翌日の2024年1月2日、SNSの公式アカウントで偽・誤情報への注意を呼びかけ、主要なSNSなどの事業者（LINEヤフー、X、Meta、Googleの4社）に、利用規約などに沿った適正な対応を求めました。1月5日からは、投稿の削除やアカウントの停止の件数などを毎日報告するよう求めています。
- Xのコミュニティノート（誤解を招くおそれのある投稿に、利用者が協力して背景情報を付ける機能）は、能登半島地震に関連して多く作られ、作成に初めて参加した人の数が最大を記録しました。
- 一方、総務省が2024年2〜3月に事業者から聞き取ると、ほぼすべての事業者で、日本国内で投稿の削除などを行った全体の件数が不透明でした。

## 受け取る側にできること
- **公式の情報源を持っておく**: 白書は、正確な情報を得るうえで、政府・自治体のホームページ、取材と編集に裏打ちされた放送、ファクトチェック団体の情報が役立つとしています。
- **自分もだまされうる**: 白書が引く国際大学の山口准教授らの調査では、デマに接した人の77.5%が、だまされていることに気づいていませんでした。
- **広める前に確かめる**: 出どころと日時を確かめ、真偽の分からない情報は広めない。偽の寄付の呼びかけは詐欺です（[AIを使った詐欺](/ja/learn/ai-and-society/ai-scams)のレッスン参照）。`,
    en: `## What spread
According to the 2024 edition of Japan's white paper on information and communications from the Ministry of Internal Affairs and Communications (MIC), social media helped people gather information and confirm each other's safety after the Noto Peninsula earthquake, but false and misleading information that could hinder rapid rescue and smooth recovery is said to have circulated as well. According to X (Twitter Japan), the main posts on X containing false or misleading information about the earthquake were these:

| Content | Number of posts |
|---|---|
| Posts containing words claiming it was a "man-made earthquake" | about 100,000 |
| Posts about "rescue requests" | about 21,000 |
| Posts about "support requests" (soliciting fake donations) | about 350 |
| Posts about "gangs of thieves" (appearing in the area) | about 200 |

Associate Professor Shibuya of the University of Tokyo points out that, although some posts were well-meant, there were duplicated rescue-request posts apparently aimed at collecting views, and fake rescue requests and requests for bank transfers apparently aimed at swindling money. About 90% of the users posting duplicates were estimated not to be Japanese-language users.

## Using AI to notice what looks like a rumor
When NICT's D-SUMM (see the [previous lesson](/en/learn/ai-and-disasters/social-media-reports)) analyzed posts on X, rescue reports posted in the first 24 hours roughly doubled, from 573 (out of 19,095 reports in total) after the 2016 Kumamoto earthquakes to 1,091 (out of 16,739). Contradicting reports were detected for 254 of the 1,091, and 104 were estimated to be false rumors. Of the 573 after the Kumamoto earthquakes, only 1 appeared to be false.

NICT notes, however, that it made these estimates by checking things like whether a post gave an address that does not exist and whether its content matched news reports about rumors. It did not confirm anything on the ground, so the estimates may be wrong.

## Generative AI makes fake images even easier
The white paper warns that as generative AI advances, ever more convincing fake videos and images can be made easily, raising concern that false information will multiply dramatically. A report from a study commissioned by MIC (March 31, 2025) records that after the Noto Peninsula earthquake and the Hyuganada earthquake (August 2024), fake images of damage apparently made with generative AI, and baseless claims of man-made earthquakes and earthquake predictions, spread on social media, along with a string of spam posts disguised as safety warnings.

Research on detection is advancing too. The same report includes a company's trial of technology said to detect general images synthesized by generative AI (especially disaster images) with over 90% accuracy. That figure was presented by the developer from its own trial, though, and the report lists keeping detection AI up with the rapid progress of generative AI as a challenge (on spotting deepfakes, see the [deepfakes and content provenance](/en/learn/generative-media/deepfakes-and-provenance) lesson).

## How government and platforms responded
- On January 2, 2024, the day after the earthquake, MIC warned about false information on its official social media accounts and asked the major platforms (LY Corporation, X, Meta, and Google) to keep responding appropriately under their terms of use. From January 5 it asked them to report daily on things like how many posts they had removed and accounts they had suspended.
- X's Community Notes — a feature where users work together to add context to posts that may mislead — saw many notes written about the earthquake, and the number of people writing a note for the first time hit a record high.
- Yet when MIC interviewed the platforms in February and March 2024, almost none made clear the overall number of posts they had removed or otherwise moderated in Japan.

## What you can do on the receiving end
- **Know your official sources**: The white paper names government and municipal websites, broadcasting backed by reporting and editing, and fact-checking organizations as useful sources of accurate information.
- **You can be fooled too**: In a survey by Associate Professor Yamaguchi of International University of Japan and colleagues, cited in the white paper, 77.5% of people who encountered false rumors did not realize they had been fooled.
- **Check before you share**: Check where information came from and when, and do not pass on what you cannot verify. Calls for fake donations are scams (see the [AI-enabled scams](/en/learn/ai-and-society/ai-scams) lesson).`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "Xが示した、能登半島地震に関する偽・誤情報を含む投稿で、最も多かった内容は？",
        en: "According to X, which kind of post containing false or misleading information about the Noto Peninsula earthquake was most common?",
      },
      choices: [
        { ja: "地震が「人工地震」だとする言葉を含む投稿（約10万件）", en: "Posts claiming it was a \"man-made earthquake\" (about 100,000)" },
        { ja: "「窃盗団」に関する投稿（約200件）", en: "Posts about \"gangs of thieves\" (about 200)" },
        { ja: "偽の寄付を募る投稿（約350件）", en: "Posts soliciting fake donations (about 350)" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "「人工地震」が約10万件で最多で、「救助要請」に関する投稿が約21,000件と続きます。",
        en: "\"Man-made earthquake\" posts were the most common at about 100,000, followed by about 21,000 posts about \"rescue requests.\"",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "D-SUMMの分析で「デマと推定」された104件は、現地で確かめてデマと確定したものだ。",
        en: "The 104 reports that D-SUMM's analysis \"estimated to be false\" were confirmed as false on the ground.",
      },
      answer: false,
      explanation: {
        ja: "実在しない住所や、デマに関する報道との突き合わせなどによる推定です。NICTは、現地で判断したわけではなく、推定が誤っている可能性もあるとしています。",
        en: "They were estimates based on checks such as addresses that do not exist and comparisons with news about rumors. NICT says it did not judge them on the ground and the estimates may be wrong.",
      },
    },
    {
      kind: "multi",
      prompt: {
        ja: "白書が、正確な情報を得るうえで役立つとした情報源をすべて選んで。",
        en: "Select all the sources the white paper names as useful for getting accurate information.",
      },
      choices: [
        { ja: "政府・自治体のホームページ", en: "Government and municipal websites" },
        { ja: "取材と編集に裏打ちされた放送", en: "Broadcasting backed by reporting and editing" },
        { ja: "ファクトチェック団体の情報", en: "Information from fact-checking organizations" },
        { ja: "多く拡散されている投稿", en: "Posts that are being widely shared" },
      ],
      correctIndexes: [0, 1, 2],
      explanation: {
        ja: "多く拡散されていることは、正しさの証拠になりません。デマに接した人の77.5%が、だまされていることに気づいていなかったという調査もあります。",
        en: "Being widely shared is no evidence of accuracy. One survey found that 77.5% of people who encountered false rumors did not realize they had been fooled.",
      },
    },
  ],
  sources: [
    {
      label: "総務省: 令和6年版 情報通信白書 コラム「災害時における偽・誤情報への対応」",
      url: "https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/r06/html/nd122c00.html",
    },
    {
      label: "総務省: 生成AIに起因するインターネット上の偽・誤情報等への対策技術に係る調査の請負 事業実施報告書（2025年3月31日）",
      url: "https://www.soumu.go.jp/main_content/001006034.pdf",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["d-summ", "community-notes", "deepfake"],
};
