import type { Lesson } from "@/engine/content/types";

export const copyrightInJapan: Lesson = {
  id: "generative-media-06",
  slug: "copyright-in-japan",
  title: {
    ja: "日本の著作権法とAI — 「学習」と「生成・利用」を分けて考える",
    en: "Japanese Copyright Law and AI: Training vs. Generation and Use",
  },
  summary: {
    ja: "日本では、AIの学習に著作物を使う場面と、生成したものを使う場面とで、著作権の考え方が違う。文化庁の「考え方」に沿って整理する。",
    en: "In Japan, copyright works differently for using works to train AI and for using what the AI generates. A walk-through of the Agency for Cultural Affairs' guidance.",
  },
  body: {
    ja: `## 「学習」と「生成・利用」は別の問題

前のレッスンでは、生成物の著作権についての米国の考え方を見ました。日本では、文化審議会著作権分科会の法制度小委員会が2024年3月15日に「**AIと著作権に関する考え方について**」を取りまとめています（文化庁が公表）。そこでは、AIと著作権の関係を**開発・学習段階**と**生成・利用段階**に分け、さらに**AI生成物が著作物に当たるか**を別の問題として整理しています。段階ごとに行われる利用行為も、関係する条文も違うからです。

> **ご注意**: このレッスンは一般的な情報の紹介で、法的助言ではありません。「考え方」自体も法的な拘束力を持つものではなく、著作権法の解釈は最終的に個別の事案ごとに裁判所が判断します。具体的な事案は弁護士などの専門家に相談してください。

### 開発・学習段階 — 著作権法第30条の4
AIの学習のために著作物を複製するといった行為に関係するのが、著作権法**第30条の4**です。この条文は、著作物に表現された思想や感情を自ら享受したり他人に享受させたりすることを目的としない場合（**非享受目的**）には、必要と認められる限度で、著作権者の許諾なしに著作物を利用できると定めています。その例に挙げられているのが**情報解析**（大量の情報から言語・音・影像などの要素を抽出し、比較・分類などの解析を行うこと）で、「考え方」は、AI学習のためのものも含め、情報解析の用に供する場合はこの非享受目的に当たると整理しています。

ただし、次の場合は対象外です。
- **享受目的が併存するとき**: 目的のうち一つでも「享受」が含まれれば要件を欠きます。例として、学習データに含まれる著作物の創作的表現を**意図的に出力させる**ことを目的とした追加的な学習（意図的な「過学習」など）が挙げられています。
- **著作権者の利益を不当に害することとなるとき**（条文のただし書）: 例として、情報解析用に販売されているデータベースの著作物を、AI学習の目的で複製する場合が挙げられています。

### 生成・利用段階 — AIを使わない創作と同じ基準
AIで作った画像や文章をSNSに投稿したり販売したりする段階では、AIを使わずに創作した場合と同じく、既存の著作物との**類似性**（創作的表現が似ているか）と**依拠性**（既存の著作物をもとにしたか）が認められれば、著作権侵害になりえます。権利者は差止めや損害賠償を請求でき、故意の侵害には刑事罰もありえます。AIならではの点として、「考え方」は次のように整理しています。
- 利用者がその作品を**知らなかった**場合でも、そのAIが開発・学習段階でその作品を学習していたなら、通常は**依拠性があったと推認**され、侵害になりうる。
- そのAIがその作品を学習していなかったなら、似た生成物ができても偶然の一致にすぎず、依拠性は認められない。
- 侵害が成立しても、作品を知らなかったなどの事情で故意・過失が認められなければ、差止めの対象にとどまり、損害賠償や刑事罰の対象にはならないと考えられる。
- **作風**はアイデアにとどまると考えれば、作風が共通すること自体は著作権侵害にならない。ただし、特定のクリエイターの少数の作品群は、作風だけでなく創作的表現まで共通している場合もある。

### AI生成物に著作権は生まれるか
AIは法的な人格を持たないため、著作者にはなれません。人間の指示が**表現に至らないアイデア**にとどまる場合、生成物に著作物性は認められないと考えられています。判断は個々の生成物ごとで、「考え方」は次のような目安を示しています。
- 創作的表現といえるものを**具体的に示す詳細な指示**は、創作的寄与と評価される可能性を高める。反対に、長い指示でもアイデアを示すだけなら影響しない。
- **試行回数が多いこと**や**単に選ぶこと**それ自体は影響しない（生成物を確かめて指示を直しながら試行を繰り返す場合は、著作物性が認められることもある）。
- 人間が創作的表現といえる**加筆・修正**をした部分には、通常、著作物性が認められる。

### 実践での目安
- 公開・販売する前に、特定の作品やキャラクターに似すぎていないか確かめる。作品名や作家名を挙げて「そっくりに」と指示する使い方は、侵害のリスクを自分から高めます。
- 使うAIサービスの利用規約（商用利用の可否・生成物の扱い）も別に確認する（前のレッスン参照）。
- 文化庁は2024年7月31日に、業務外で使う一般の利用者向けの項目も含む、立場別の「AIと著作権に関するチェックリスト&ガイダンス」も公表しています。`,
    en: `## Training and generation are separate questions

The previous lesson looked at the US approach to copyright in AI output. In Japan, the Legal Subcommittee under the Copyright Subdivision of the Cultural Council compiled the "**General Understanding on AI and Copyright in Japan**" on March 15, 2024, published by the Agency for Cultural Affairs. It splits the relationship between AI and copyright into the **development and training stage** and the **generation and use stage**, and treats **whether AI output counts as a copyrighted work** as a separate question — because each stage involves different acts and different provisions of the law.

> **Please note**: this lesson is general information, not legal advice. The guidance itself is not legally binding, and the interpretation of the Copyright Act is ultimately decided by the courts case by case. For a specific situation, consult a lawyer or another qualified professional.

### Training: Article 30-4 of the Copyright Act
Copying works to train an AI falls under **Article 30-4** of the Copyright Act. It allows works to be used without the copyright holder's permission, to the extent considered necessary, when the purpose is not to enjoy — or have others enjoy — the thoughts or sentiments expressed in them (**non-enjoyment purposes**). One example the article lists is **data analysis**: extracting elements such as language, sounds, and images from large amounts of information and comparing, classifying, or otherwise analyzing them. The guidance concludes that using works for data analysis, including for AI training, qualifies as a non-enjoyment purpose.

There are exceptions:
- **When an enjoyment purpose coexists**: if even one of the purposes involves "enjoyment," the article no longer applies. The example given is additional training intended to **deliberately make the model output** the creative expression of works in its training data (for instance, deliberate overfitting).
- **When it would unreasonably prejudice the copyright holder's interests** (the article's proviso): the example given is copying, for AI training, a database of works that is sold for data-analysis use.

### Generation and use: the same test as human-made work
When you post AI-generated images or text on social media or sell them, the test is the same as for work created without AI: if **similarity** (the creative expression resembles an existing work) and **dependence** (the output was based on that work) are both found, it can infringe copyright. The rights holder can seek an injunction or damages, and willful infringement can carry criminal penalties. On points specific to AI, the guidance says:
- Even if you **did not know** the work, if the AI learned it during training, **dependence is normally presumed** and the output can infringe.
- If the AI never learned the work, a similar output is a coincidence and dependence is not found.
- Even when infringement is found, if there was no intent or negligence — for example, because you did not know the work — the remedy is likely limited to an injunction, without damages or criminal penalties.
- A **style**, treated as an idea, is not infringed merely by being shared. But a small body of works by a particular creator may share creative expression, not just a style.

### Does AI output get copyright protection?
An AI has no legal personality, so it cannot be an author. When a person's instructions remain **ideas that never reach the level of expression**, the output is not considered a copyrighted work. The call is made case by case, and the guidance offers these markers:
- **Detailed instructions that specifically set out creative expression** raise the chance of a creative contribution. A long prompt that only conveys ideas does not count, however long it is.
- **Generating many times** or **simply choosing** among outputs does not count on its own (repeatedly checking the output and revising the instructions may lead to protection).
- Parts where a person has made **additions or edits that amount to creative expression** are normally protected.

### Rules of thumb
- Before publishing or selling, check that the output does not closely resemble a specific work or character. Prompting "make it look exactly like" a named work or artist raises your own risk.
- Check the AI service's terms of use separately — commercial use and who holds rights in the output (previous lesson).
- On July 31, 2024, the Agency for Cultural Affairs also published a "Checklist & Guidance on AI and Copyright," organized by role, including a section for people using AI outside work.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "著作権法第30条の4により、原則として著作権者の許諾なしに行えるとされるのはどれ？",
        en: "Under Article 30-4 of Japan's Copyright Act, which use is in principle allowed without the copyright holder's permission?",
      },
      choices: [
        {
          ja: "AI学習のための情報解析など、表現を享受することを目的としない利用",
          en: "Uses with no purpose of enjoying the expression, such as data analysis for AI training",
        },
        {
          ja: "学習データ中の特定の作品の創作的表現を、意図的に出力させるための追加的な学習",
          en: "Additional training meant to deliberately reproduce the creative expression of specific works in the training data",
        },
        {
          ja: "情報解析用に販売されているデータベースを、AI学習のために複製すること",
          en: "Copying a database sold for data-analysis use in order to train an AI",
        },
      ],
      correctIndex: 0,
      explanation: {
        ja: "非享受目的の利用は原則として可能です。ただし、享受目的が併存する場合や、著作権者の利益を不当に害する場合（情報解析用データベースの複製など）は対象外です。",
        en: "Non-enjoyment uses are allowed in principle — but not when an enjoyment purpose coexists, or when the use unreasonably prejudices the rights holder (such as copying a database sold for analysis).",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "AIで作った画像が既存の作品に似ていても、利用者がその作品を知らなかったなら、依拠性は否定され著作権侵害にはならない。",
        en: "If an AI-generated image resembles an existing work but you didn't know that work, dependence is ruled out and there is no infringement.",
      },
      answer: false,
      explanation: {
        ja: "そのAIが学習段階でその作品を学習していれば、利用者が知らなくても通常は依拠性が推認され、侵害になりえます（故意・過失がなければ損害賠償や刑事罰の対象にはならないと考えられています）。",
        en: "If the AI learned that work during training, dependence is normally presumed even if you didn't know it, so the output can infringe — although without intent or negligence, damages and criminal penalties are considered unlikely.",
      },
    },
  ],
  sources: [
    {
      label: "文化庁: AIと著作権に関する考え方について（文化審議会著作権分科会法制度小委員会・2024年3月15日）",
      url: "https://www.bunka.go.jp/seisaku/bunkashingikai/chosakuken/pdf/94037901_01.pdf",
    },
    {
      label: "e-Gov法令検索: 著作権法 第30条の4",
      url: "https://laws.e-gov.go.jp/law/345AC0000000048#Mp-Ch_2-Se_3-Ss_5-At_30_4",
    },
    {
      label: "文化庁: AIと著作権に関するチェックリスト&ガイダンス（2024年7月31日）",
      url: "https://www.bunka.go.jp/seisaku/chosakuken/pdf/94097701_01.pdf",
    },
    { label: "文化庁: AIと著作権", url: "https://www.bunka.go.jp/seisaku/chosakuken/aiandcopyright.html" },
  ],
  lastVerified: "2026-10-07",
  glossaryRefs: ["article-30-4", "similarity-and-dependence"],
};
