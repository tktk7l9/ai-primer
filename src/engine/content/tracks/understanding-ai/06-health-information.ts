import type { Lesson } from "@/engine/content/types";

export const healthInformation: Lesson = {
  id: "understanding-ai-06",
  slug: "health-information",
  title: {
    ja: "健康・医療の情報をAIで調べるとき — 医師の代わりにしない使い方",
    en: "Looking Up Health Information with AI: Use It, but Never in Place of a Clinician",
  },
  summary: {
    ja: "AIに症状や薬のことを聞くとすぐに答えが返るが、間違えたときの影響が大きい分野。WHOと厚生労働省の考え方、試験で高得点のAIでも一般の人の判断を助けられなかった研究、注意したい答えと、迷ったときの公的な電話相談。",
    en: "AI answers questions about symptoms and medicines instantly, but this is a field where mistakes cost the most. What WHO and Japan's health ministry say, a study in which top-scoring AI failed to help members of the public, answers to watch out for, and the public phone services to call when unsure.",
  },
  body: {
    ja: `## AIに健康のことを聞く前に

体の不調、薬の飲み方、検査結果の意味——AIに聞けば、すぐにわかりやすい答えが返ってきます。ただ、健康や医療は、間違えたときの影響が大きい分野です。公的機関の考え方、研究でわかったこと、注意したい答え、上手な使い方、迷ったときの相談先をまとめます。

> **ご注意**: このレッスンは一般的な情報の紹介で、医療上の助言ではありません。AIは医師の診察の代わりにはなりません。体調や薬について迷うときは医師・薬剤師などの専門家に相談し、命に関わりそうなときはすぐに119番に電話してください。

### 公的機関の考え方
- **世界保健機関**（WHO）は2023年5月、健康の分野で大規模言語モデル（LLM）を使うことに慎重であるよう呼びかけました。LLMの答えは利用者には権威がありもっともらしく見えても、まったく間違っていることがある、利用者が入力した健康のデータなどの機微な情報を守れないことがある、といった懸念を挙げ、日常の医療で広く使う前に、利益をはっきり確かめるべきだとしています。
- **厚生労働省**は2018年12月の通知で、医療の現場でAIを使った診断・治療の支援プログラムが使われる機会が増えていることを踏まえ、そうしたプログラムを使う場合も、診断や治療を行う主体は医師であり、医師が最終的な判断の責任を負うと整理しています。AIは医師の判断を助ける道具という位置づけです。

### 医師の試験でほぼ満点でも、使う人の助けになるとは限らない
英オックスフォード大学などの研究者らが2026年2月に医学誌Nature Medicineで発表した研究では、医師が作った10の場面（症例の設定）を使い、英国の1,298人に、考えられる病気と、とるべき行動（自宅で様子を見る〜救急車を呼ぶ）を答えてもらいました。
- 場面の全文をAIだけに渡すと、関係する病気を94.9%、とるべき行動を平均56.3%で正しく挙げました。
- ところが、同じAIを使って調べた参加者は、関係する病気を挙げられたのが34.5%未満、行動の正答は44.2%未満で、AIを使わずにふだんの方法（多くは検索エンジンや、英国の公的医療サービスNHSなどのサイト）で調べた人たちを上回りませんでした。
- 参加者が必要な情報を伝えきれなかったり、AIが質問を読み違えたりした例があり、AIの勧めに参加者がいつも従ったわけでもありませんでした。くも膜下出血の症状をほぼ同じように伝えた2人の一方には「暗い部屋で横になる」、もう一方には「すぐに救急を受診する」と正反対の助言が返った例や、英国の参加者にオーストラリアの救急番号を勧めた例もありました。

研究チームは、LLMが医師の資格試験でほぼ満点を取るようになった一方で、医学知識の標準的なベンチマークや、模擬的な患者とのやり取りの試験では、人が使ったときのこうした失敗を予測できなかったとしています（[ベンチマークの読み方](/ja/learn/understanding-ai/reading-benchmarks)のレッスン参照）。

### 特に注意したい答え
1. **救急かどうかの判断**: 「様子を見て大丈夫」も「すぐ受診を」も、AIの答えだけで決めない。迷ったら下の相談窓口へ。
2. **薬の量を変える・やめる**: 自己判断せず、処方した医師や薬剤師に確かめる。
3. **出典のない断定**: もっともらしい答えほど、出典を開いて確かめる（[AIで調べ物をする](/ja/learn/ai-agents/research-with-ai)、[ハルシネーション](/ja/learn/ai-basics/hallucination)のレッスン参照）。
4. **外国の前提**: 救急の番号、薬の名前、制度は国によって違う。
5. **聞くたびに変わる結論**: 言い方を少し変えただけで結論が変わるなら、その答えに頼らない。
6. **「必ず治る」のような言い切り**: 特定の商品や治療法を強く勧める答えは、公的機関や医療機関の情報で確かめる。

### 健康の情報を入力する前に
症状・持病・飲んでいる薬は、とても個人的な情報です。WHOが指摘するように、入力した内容が守られるとは限りません。保存や学習への利用の設定を確かめてから使いましょう（[仕事でAIを使うときの情報の扱い](/ja/learn/society/data-privacy-at-work)、[声で話すAI](/ja/learn/chat-ais/voice-assistants)のレッスン参照）。

### 上手な使い方
- **受診の準備**: 症状がいつから、どんなときに起きるかを整理し、医師に聞きたいことのリストを作る。
- **受け取った説明を理解する**: 診察でもらった説明書や検査結果の言葉の意味を調べ、わからない点は医師・薬剤師に確かめる。
- **公的な情報への入り口にする**: 公的機関や医療機関のページを探す手伝いをさせ、最後は自分でページを開いて読む。

暮らしの中でのAIの使い方は[生活での活用事例](/ja/learn/society/life-use-cases)のレッスンにもあります。お金・法律・行政手続きの相談は、[暮らしでAIを使う](/ja/learn/ai-in-daily-life)トラックで扱います。医療機関で使われる、医療機器として承認されたAIと、判断の主体を医師とする厚生労働省の整理は、[医療で使われるAI](/ja/learn/ai-and-science/medical-ai)のレッスンで扱います。

### 迷ったら、電話で相談する
- **#7119（救急安心センター事業）**: 急な病気やけがで「救急車を呼ぶべきか」「今すぐ病院に行くべきか」迷ったときに、医師・看護師・救急救命士などから電話で助言を受けられます。緊急性が高ければ、119番への転送や、119番へのかけ直しの案内などをしてくれます。2026年10月時点で実施しているのは全国42地域で、まだ全国一律ではなく、#7119以外の番号で相談を受けている地域もあります。
- **子どもの急な病気**: #7119の窓口の中には、おおむね15歳未満の子どもの相談は#8000へ、と案内しているところがあります。お住まいの地域の案内を確かめておきましょう。
- **119番**: 命に関わりそうなときは、迷わずすぐに電話する。`,
    en: `## Before you ask AI about your health

A strange symptom, how to take a medicine, what a test result means — ask an AI and you get a clear answer right away. But health and medicine are areas where a mistake can cost the most. This lesson covers what public health authorities say, what research has found, answers to watch out for, good ways to use AI, and where to turn when you are unsure.

> **Please note**: this lesson is general information, not medical advice. AI is not a substitute for being seen by a doctor. If you are unsure about your health or your medicines, ask a doctor, pharmacist, or other professional, and if a life may be at risk, call emergency services (119 in Japan) right away.

### What public authorities say
- In May 2023, the **World Health Organization (WHO)** called for caution in using large language models (LLMs) for health. Among its concerns: LLM responses can appear authoritative and plausible to the user yet be completely incorrect, and LLMs may not protect sensitive data — including health data — that users enter. WHO says clear evidence of benefit should be measured before LLMs are used widely in routine health care.
- In a December 2018 notice, **Japan's Ministry of Health, Labour and Welfare** noted that AI programs supporting diagnosis and treatment were being used more and more in medical practice, and set out that even when doctors use such programs, it is the doctor who diagnoses and treats and who bears responsibility for the final judgment. AI is positioned as a tool that supports the doctor's judgment.

### Near-perfect exam scores don't guarantee real help
In a study published in Nature Medicine in February 2026, researchers at the University of Oxford and other institutions used ten medical scenarios written by doctors and had 1,298 people in the UK name the conditions that might be involved and choose what to do, on a scale from caring for yourself at home to calling an ambulance.
- Given the full scenario text, the AI models on their own named a relevant condition in 94.9% of cases and chose the right course of action in 56.3% on average.
- But participants who used those same models named a relevant condition in fewer than 34.5% of cases and chose the right course of action in fewer than 44.2% — no better than people who used whatever they would normally use at home, mostly a search engine or trusted websites such as the UK's National Health Service (NHS).
- Participants sometimes gave incomplete information, the models sometimes misread their questions, and participants did not consistently follow the models' recommendations. In one case, two people described symptoms of a subarachnoid hemorrhage in very similar words and got opposite advice: one was told to lie down in a dark room, the other to seek emergency care. A model also suggested calling Australia's emergency number to a participant in the UK.

The researchers note that LLMs now achieve near-perfect scores on medical licensing exams, yet standard benchmarks for medical knowledge and simulated patient interactions did not predict these failures with real people (see [How to Read AI Benchmarks](/en/learn/understanding-ai/reading-benchmarks)).

### Answers to be especially careful with
1. **Deciding whether it's an emergency**: don't let an AI's "you can wait and see" or "see a doctor now" decide for you. If you're unsure, use the phone services below.
2. **Changing or stopping a medicine**: don't decide on your own — check with the doctor who prescribed it or a pharmacist.
3. **Confident claims without sources**: the more plausible the answer, the more you should open the sources and check (see [Researching with AI](/en/learn/ai-agents/research-with-ai) and [Hallucination](/en/learn/ai-basics/hallucination)).
4. **Another country's assumptions**: emergency numbers, medicine names, and health systems differ from country to country.
5. **Conclusions that change when you ask again**: if rephrasing slightly changes the conclusion, don't rely on that answer.
6. **Promises like "this will definitely cure it"**: when an answer strongly pushes a particular product or treatment, check it against information from public health bodies or medical institutions.

### Before you enter health details
Your symptoms, conditions, and medicines are highly personal information, and as WHO points out, what you enter may not be protected. Check the service's settings for storage and training use before you start (see [Handling Information When Using AI at Work](/en/learn/society/data-privacy-at-work) and [Talking to AI: Real-Time Voice Assistants](/en/learn/chat-ais/voice-assistants)).

### Good ways to use AI
- **Preparing for an appointment**: organize when your symptoms started and when they occur, and draft a list of questions for your doctor.
- **Understanding what you've been given**: look up the terms in a leaflet or test result you received, and ask your doctor or pharmacist about anything that's still unclear.
- **A doorway to official information**: have the AI help you find pages from public health bodies or medical institutions, then open and read them yourself.

For more on everyday uses of AI, see [AI in Everyday Life: Use Cases](/en/learn/society/life-use-cases). Money, legal, and government questions are covered in the [Using AI in Daily Life](/en/learn/ai-in-daily-life) track. AI approved as a medical device for use in healthcare, and Japan's health ministry's position that the doctor remains the decision-maker, are covered in the [AI in medicine](/en/learn/ai-and-science/medical-ai) lesson.

### When in doubt, call (in Japan)
- **#7119 (emergency medical phone consultation)**: when a sudden illness or injury leaves you unsure whether to call an ambulance or go to a hospital right now, doctors, nurses, paramedics, and others can advise you by phone. If the situation is urgent, they transfer the call to 119 or ask you to call 119 yourself. As of October 2026 the service runs in 42 areas of Japan — not yet everywhere — and some areas take these calls on a number other than #7119.
- **Sudden illness in children**: some #7119 services direct calls about children under roughly 15 to #8000. Check the guidance for your area in advance.
- **119**: if a life may be at risk, call right away without hesitating.`,
  },
  quiz: [
    {
      kind: "boolean",
      prompt: {
        ja: "医師の資格試験でほぼ満点を取れるAIなら、一般の人が症状を相談しても、正しい判断にたどり着ける。",
        en: "If an AI can score almost perfectly on medical licensing exams, members of the public who ask it about their symptoms will reach the right decision.",
      },
      answer: false,
      explanation: {
        ja: "Nature Medicineに載った研究では、AIだけなら関係する病気を94.9%で挙げられたのに、同じAIを使った参加者は34.5%未満で、ふだんの方法で調べた人たちを上回りませんでした。伝える情報の不足や読み違いなど、人とAIのやり取りでつまずきます。",
        en: "In the study published in Nature Medicine, the models alone named a relevant condition in 94.9% of cases, but participants using the same models did so in fewer than 34.5% — no better than people using their usual methods. Things go wrong in the exchange between person and AI, through missing details and misread questions.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "夜中に家族の様子がいつもと違い、救急車を呼ぶべきか迷っている。まずとる行動として適切なのは？",
        en: "Late at night, a family member seems unwell and you can't decide whether to call an ambulance. What is the right first step?",
      },
      choices: [
        {
          ja: "#7119などの救急電話相談に電話する。命に関わりそうなら、すぐに119番に電話する",
          en: "Call an emergency phone consultation service such as #7119 — or call 119 straight away if a life may be at risk",
        },
        {
          ja: "チャットAIに症状を入力し、救急車を呼ぶかどうかを決めてもらう",
          en: "Type the symptoms into a chat AI and let it decide whether to call an ambulance",
        },
        {
          ja: "朝まで様子を見て、AIで調べてから受診先を決める",
          en: "Wait until morning, then look things up with AI and decide where to go",
        },
      ],
      correctIndex: 0,
      explanation: {
        ja: "#7119では医師・看護師・救急救命士などが電話で助言し、緊急性が高ければ119番につなぎます。AIは似た症状に正反対の助言を返すことがあり、救急かどうかの判断を任せるのは危険です。#7119がない地域もあるので、迷ったら119番をためらわないでください。",
        en: "At #7119, doctors, nurses, paramedics, and others advise you by phone and connect you to 119 if it's urgent. AI can give opposite advice for similar symptoms, so it is dangerous to let it decide whether something is an emergency. Not every area has #7119 — if in doubt, don't hesitate to call 119.",
      },
    },
  ],
  sources: [
    {
      label: "WHO: WHO calls for safe and ethical AI for health (2023-05-16)",
      url: "https://www.who.int/news/item/16-05-2023-who-calls-for-safe-and-ethical-ai-for-health",
    },
    {
      label: "厚生労働省: 人工知能（AI）を用いた診断、治療等の支援を行うプログラムの利用と医師法第17条の規定との関係について（医政医発1219第1号、2018-12-19）",
      url: "https://www.mhlw.go.jp/content/10601000/000468150.pdf",
    },
    {
      label: "Bean et al.: Reliability of LLMs as medical assistants for the general public: a randomized preregistered study (Nature Medicine, 2026-02-09)",
      url: "https://www.nature.com/articles/s41591-025-04074-y",
    },
    {
      label: "総務省消防庁: 救急安心センター事業（♯7119）ってナニ？",
      url: "https://www.fdma.go.jp/mission/enrichment/appropriate/appropriate007.html",
    },
  ],
  lastVerified: "2026-10-07",
  glossaryRefs: ["hallucination", "llm"],
};
