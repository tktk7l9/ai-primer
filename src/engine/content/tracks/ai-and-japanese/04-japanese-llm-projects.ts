import type { Lesson } from "@/engine/content/types";

export const japaneseLlmProjects: Lesson = {
  id: "ai-and-japanese-04",
  slug: "japanese-llm-projects",
  title: {
    ja: "日本で進むLLM開発 — 一から作る、日本語を足す、計算資源を支える",
    en: "Building LLMs in Japan: From Scratch, by Adding Japanese, and with Shared Compute",
  },
  summary: {
    ja: "日本でも、日本語に強いモデルを作る取り組みが続いている。データまで公開して一から作るLLM-jp、海外のオープンなモデルに日本語を追加で学ばせるSwallow、スーパーコンピュータ「富岳」で学習したFugaku-LLM、計算資源を支えるGENIACと、国の計画。",
    en: "Japan has several efforts to build models that are strong in Japanese: LLM-jp, which builds from scratch and publishes even its data; Swallow, which teaches Japanese to overseas open models; Fugaku-LLM, trained on the Fugaku supercomputer; GENIAC, which supports compute; and the national plan behind them.",
  },
  body: {
    ja: `## 国の計画が掲げること

人工知能基本計画（2026年7月14日閣議決定）は、「信頼できるAI基盤モデル等の開発」として、日本の文化・習慣などを踏まえた信頼できるAIの開発・評価を進め、質の高い日本語データの整備・拡充を図るとしています。あわせて、オープンソース・オープンウェイトのAIモデルを含む、信頼性の高いAIのエコシステムを築くとしています。

## 3つのやり方
### 一から作り、データまで公開する — LLM-jp
国立情報学研究所（NII）は2023年5月、趣旨に賛同すれば誰でも参加できる**LLM-jp**を立ち上げ、モデル・データ・ツール・技術資料を、議論の過程や失敗も含めて公開してきました。参加者は2026年4月1日時点で2,700人を超えています。現在は、文部科学省の「生成AIモデルの透明性・信頼性の確保に向けた研究開発拠点形成」事業の拠点として設けられた、同研究所の大規模言語モデル研究開発センター（LLMC）が主宰しています。2026年9月28日には「LLM-jp-4.1」シリーズを、学習に使ったデータとあわせてApache License 2.0で公開しました。

### 海外のオープンなモデルに日本語を足す — Swallow
東京科学大学と産業技術総合研究所のメンバーを中心とする**Swallow**は、海外で公開されたオープンなモデルを土台に、日本語の文章を追加で学習させる（**継続事前学習**）ことで、日本語の力を高めたモデルを公開しています。最初の論文（2024年4月）は、英語で学習したモデルを使うことで英語の豊富な資源を生かし、事前学習の費用を抑えられると説明し、日本語の課題の成績が追加の学習で大きく上がって、日本語と英語で一から学習した他のモデルを上回ったと報告しています。プロジェクトは、できるだけ利用の制限が少ないライセンスで公開する方針を掲げています。

### 国内の計算機で学習する — Fugaku-LLM
東京工業大学、東北大学、富士通、理化学研究所などのチームは2024年5月10日、スーパーコンピュータ「富岳」で学習した130億パラメータの**Fugaku-LLM**を公開しました。富岳のCPUで現実的な時間で学習できるよう、計算を6倍、通信を3倍速くしたとしています。サイバーエージェントが集めた独自の日本語データと英語のデータなどで学習し、ライセンスに従えば研究にも商業目的にも使えます。

## 計算資源とつながりを支える — GENIAC
経済産業省とNEDOが主導する**GENIAC**は、基盤モデルの開発に欠かせない計算資源（GPUなど）の調達や、データセットの構築、知見の共有を支援し、モデルの開発者と、それを使う企業や投資家などをつなぐ取り組みです。サイトによると、採択された事業者は90を超えます（2026年10月時点）。

## 選ぶときの視点
国産であることそのものより、次の点で比べると選びやすくなります。
- **何が公開されているか**: モデルの重みだけか、学習データや作り方まで公開されているか（[ローカルとオープンなモデル](/ja/learn/chat-ais/local-and-open-models)のレッスン参照）。
- **ライセンス**: 商用で使えるか、どんな条件があるか。
- **日本語の力の根拠**: どのテストで、何と比べたか（[日本語の力をどう測るか](/ja/learn/ai-and-japanese/measuring-japanese-ability)のレッスン参照）。`,
    en: `## What the national plan calls for

Japan's Artificial Intelligence Basic Plan (adopted by the Cabinet on July 14, 2026), under "developing trustworthy AI foundation models," calls for advancing the development and evaluation of trustworthy AI grounded in Japan's culture and customs, and for building up and expanding high-quality Japanese-language data. It also calls for building a highly reliable AI ecosystem that includes open-source and open-weight AI models.

## Three approaches
### Build from scratch and publish even the data: LLM-jp
In May 2023, Japan's National Institute of Informatics (NII) launched **LLM-jp**, open to anyone who shares its aims, and has published models, data, tools, and technical documents — including the discussions along the way and the failures. Participants numbered more than 2,700 as of April 1, 2026. It is now led by NII's Research and Development Center for Large Language Models (LLMC), set up as the hub for a Ministry of Education, Culture, Sports, Science and Technology program on ensuring the transparency and reliability of generative AI models. On September 28, 2026, it released the LLM-jp-4.1 series under the Apache License 2.0, together with the data used to train it.

### Add Japanese to overseas open models: Swallow
**Swallow**, developed mainly by members of the Institute of Science Tokyo and Japan's National Institute of Advanced Industrial Science and Technology (AIST), publishes models whose Japanese ability has been strengthened by taking open models released overseas and training them further on Japanese text (**continual pre-training**). Its first paper (April 2024) explains that starting from a model trained in English lets you draw on the wealth of English resources and reduce pre-training costs, and reports that further training sharply improved Japanese task scores, beating other models trained from scratch in Japanese and English. The project states a policy of releasing models under licenses with as few usage restrictions as possible.

### Train on computers in Japan: Fugaku-LLM
On May 10, 2024, a team from Tokyo Institute of Technology, Tohoku University, Fujitsu, RIKEN, and others released **Fugaku-LLM**, a 13-billion-parameter model trained on the Fugaku supercomputer. To make training on Fugaku's CPUs possible in a realistic amount of time, the team says it made computation 6 times and communication 3 times faster. It was trained on original Japanese data collected by CyberAgent plus English data and more, and can be used for both research and commercial purposes under its license.

## Supporting compute and connections: GENIAC
**GENIAC**, led by Japan's Ministry of Economy, Trade and Industry (METI) and NEDO, supports the procurement of compute (such as GPUs) essential for developing foundation models, the building of datasets, and knowledge sharing, and connects model developers with the companies that use them, investors, and others. According to its site, more than 90 businesses have been selected (as of October 2026).

## What to look at when choosing
Rather than being made in Japan in itself, these points make comparison easier:
- **What is published?** Only the model weights, or also the training data and how it was made (see [local and open models](/en/learn/chat-ais/local-and-open-models))? LLM-jp is an example that publishes its training data.
- **License**: can you use it commercially, and under what conditions?
- **Evidence of Japanese ability**: on which test, compared with what (see [measuring Japanese ability](/en/learn/ai-and-japanese/measuring-japanese-ability))?`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "Swallowが日本語に強いモデルを作るやり方はどれ？",
        en: "How does Swallow build models that are strong in Japanese?",
      },
      choices: [
        { ja: "海外で公開されたオープンなモデルに、日本語の文章を追加で学習させる", en: "It trains open models released overseas further on Japanese text" },
        { ja: "毎回、日本語だけで一から学習する", en: "It always trains from scratch on Japanese text only" },
        { ja: "英語の答えを機械翻訳して日本語にする", en: "It machine-translates English answers into Japanese" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "継続事前学習と呼ばれるやり方です。英語で学習したモデルの力を生かし、事前学習の費用を抑えられます。",
        en: "This is continual pre-training. It draws on what the English-trained model already knows and keeps pre-training costs down.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "LLM-jpは、モデルだけでなく、学習に使ったデータも公開している。",
        en: "LLM-jp publishes not only models but also the data used to train them.",
      },
      answer: true,
      explanation: {
        ja: "LLM-jpは、モデル・データ・ツール・技術資料を公開してきました。2026年9月のLLM-jp-4.1も、学習データとあわせて公開されています。",
        en: "LLM-jp has published models, data, tools, and technical documents. LLM-jp-4.1, in September 2026, was also released together with its training data.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "GENIACが主に支援していることはどれ？",
        en: "What does GENIAC mainly support?",
      },
      choices: [
        { ja: "基盤モデルの開発に必要な計算資源の調達などと、開発者と利用企業などをつなぐこと", en: "Procuring compute for foundation model development and the like, and connecting developers with companies that use them" },
        { ja: "一般向けのチャットAIを無料で提供すること", en: "Offering a free chat AI to the public" },
        { ja: "AIの利用を禁止する規制を作ること", en: "Writing regulations that ban AI use" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "経済産業省とNEDOが主導し、計算資源の調達、データセットの構築、知見の共有を支援し、マッチングも行っています。",
        en: "Led by METI and NEDO, it supports compute procurement, dataset building, and knowledge sharing, and runs matchmaking.",
      },
    },
  ],
  sources: [
    { label: "内閣府: 人工知能基本計画（2026年7月14日閣議決定）", url: "https://www8.cao.go.jp/cstp/ai/ai_plan/aiplan_20260714.pdf" },
    { label: "国立情報学研究所 大規模言語モデル研究開発センター: Summary", url: "https://llmc.nii.ac.jp/overview/" },
    { label: "LLM-jp: 大規模言語モデル「LLM-jp-4.1」シリーズを公開（2026-09-28）", url: "https://llm-jp.nii.ac.jp/news/llm-jp-4-1/" },
    { label: "Swallow LLM", url: "https://swallow-llm.github.io/index.ja.html" },
    {
      label: "Fujii et al.: Continual Pre-Training for Cross-Lingual LLM Adaptation: Enhancing Japanese Language Capabilities（arXiv:2404.17790）",
      url: "https://arxiv.org/abs/2404.17790",
    },
    {
      label: "理化学研究所: スーパーコンピュータ「富岳」で学習した大規模言語モデル「Fugaku-LLM」を公開（2024-05-10）",
      url: "https://www.riken.jp/pr/news/2024/20240510_2/",
    },
    {
      label: "富士通ほか: スーパーコンピュータ「富岳」で学習した大規模言語モデル「Fugaku-LLM」を公開（2024-05-10）",
      url: "https://info.archives.global.fujitsu/jp/news/2024/05/10.html",
    },
    { label: "経済産業省: GENIAC（Generative AI Accelerator Challenge）", url: "https://geniac.meti.go.jp/" },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["llm-jp", "continual-pretraining", "geniac", "open-weight"],
};
