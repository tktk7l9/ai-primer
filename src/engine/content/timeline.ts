import type { Localized } from "@/i18n/config";
import type { Source } from "./types";

export type TimelinePrecision = "day" | "month" | "year";

export interface TimelineEvent {
  id: string;
  /** ISO date. Even when precision is month/year, use yyyy-mm-dd padded with 01. */
  date: string;
  precision: TimelinePrecision;
  title: Localized<string>;
  summary: Localized<string>;
  sources: readonly Source[];
}

// All dates and events verified against primary sources or reliable encyclopedias (as of 2026-07-15; entries from 2024-11 onward re-verified or added on 2026-10-06;
// C2PA, SynthID, Japan's AI copyright/guideline/basic-plan, Gemini Deep Research, and EU AI Act 2025-02 entries added on 2026-10-07;
// the AI-and-society entries — NIST face recognition 2019, Apple Live Speech 2023, Japan's anti-fraud plan 2024, IEA/ILO/ChatGPT
// parental controls 2025, and the 2026 labour white paper — added on 2026-10-07; the understanding-AI entries — the RAG, DDPM,
// MMLU, and latent diffusion papers, Chatbot Arena, SWE-bench, WHO's LMM guidance, Japan's AISI, the Seoul frontier AI safety
// commitments, and the first International AI Safety Report — added on 2026-10-07).
export const TIMELINE: readonly TimelineEvent[] = [
  {
    id: "1950-turing-test",
    date: "1950-01-01",
    precision: "year",
    title: { ja: "チューリングテストの提案", en: "The Turing Test Proposed" },
    summary: {
      ja: "アラン・チューリングが論文「計算する機械と知性」で、機械が人間と区別できない振る舞いをするかを判定する試験を提案した。",
      en: "Alan Turing proposed a test for whether a machine's behavior is indistinguishable from a human's, in his paper \"Computing Machinery and Intelligence.\"",
    },
    sources: [{ label: "Wikipedia: Turing test", url: "https://en.wikipedia.org/wiki/Turing_test" }],
  },
  {
    id: "1956-dartmouth",
    date: "1956-06-18",
    precision: "month",
    title: { ja: "ダートマス会議 — 「人工知能」誕生", en: "The Dartmouth Conference: AI Is Named" },
    summary: {
      ja: "ジョン・マッカーシーらが主催した研究集会で「人工知能」という言葉が初めて公に使われた。",
      en: "At a workshop organized by John McCarthy and others, the term \"artificial intelligence\" was used publicly for the first time.",
    },
    sources: [
      { label: "Dartmouth: AI Coined at Dartmouth", url: "https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth" },
    ],
  },
  {
    id: "1966-eliza",
    date: "1966-01-01",
    precision: "year",
    title: { ja: "ELIZA — 初期のチャットボット", en: "ELIZA: An Early Chatbot" },
    summary: {
      ja: "ジョセフ・ワイゼンバウムがMITで開発した、パターンマッチングで応答するチャットボット。セラピストを模した対話で知られる。",
      en: "Joseph Weizenbaum's MIT chatbot, which used pattern matching to simulate a Rogerian psychotherapist's responses.",
    },
    sources: [{ label: "Codecademy: History of Chatbots", url: "https://www.codecademy.com/article/history-of-chatbots" }],
  },
  {
    id: "1973-lighthill-report",
    date: "1973-01-01",
    precision: "year",
    title: { ja: "ライトヒル・レポートと第一次AIの冬", en: "The Lighthill Report and the First AI Winter" },
    summary: {
      ja: "英国でAI研究を批判するレポートが発表され、資金削減が米欧にも波及し、研究が停滞する「AIの冬」に入った。",
      en: "A UK report criticizing AI research led to funding cuts that spread to the US and Europe, ushering in the first \"AI winter.\"",
    },
    sources: [{ label: "Wikipedia: AI winter", url: "https://en.wikipedia.org/wiki/AI_winter" }],
  },
  {
    id: "1997-deep-blue",
    date: "1997-05-11",
    precision: "day",
    title: { ja: "ディープ・ブルーがカスパロフに勝利", en: "Deep Blue Defeats Kasparov" },
    summary: {
      ja: "IBMのチェス専用コンピュータ「ディープ・ブルー」が、世界チャンピオンのガルリ・カスパロフに公式戦で勝利した。",
      en: "IBM's chess computer Deep Blue defeated world champion Garry Kasparov in a standard-time-control match.",
    },
    sources: [
      { label: "Wikipedia: Deep Blue versus Garry Kasparov", url: "https://en.wikipedia.org/wiki/Deep_Blue_versus_Garry_Kasparov" },
    ],
  },
  {
    id: "2012-alexnet",
    date: "2012-09-01",
    precision: "month",
    title: { ja: "AlexNetが深層学習革命を起こす", en: "AlexNet Sparks the Deep Learning Revolution" },
    summary: {
      ja: "画像認識コンペILSVRCでAlexNetが圧勝し、深層学習が主流になる転換点となった。",
      en: "AlexNet's landslide win in the ILSVRC image-recognition competition marked deep learning's turning point into the mainstream.",
    },
    sources: [{ label: "Pinecone: AlexNet and ImageNet", url: "https://www.pinecone.io/learn/series/image-search/imagenet/" }],
  },
  {
    id: "2016-alphago",
    date: "2016-03-09",
    precision: "day",
    title: { ja: "AlphaGoが李世ドルに勝利", en: "AlphaGo Defeats Lee Sedol" },
    summary: {
      ja: "DeepMind開発のAlphaGoが、囲碁のトップ棋士イ・セドルとの5番勝負で4勝1敗を収めた。",
      en: "DeepMind's AlphaGo won 4 games to 1 against top Go player Lee Sedol in a five-game match.",
    },
    sources: [{ label: "Wikipedia: AlphaGo versus Lee Sedol", url: "https://en.wikipedia.org/wiki/AlphaGo_versus_Lee_Sedol" }],
  },
  {
    id: "2017-transformer",
    date: "2017-06-12",
    precision: "day",
    title: { ja: "「Attention Is All You Need」発表", en: "\"Attention Is All You Need\" Published" },
    summary: {
      ja: "Googleの研究者らがTransformerアーキテクチャを提示。以後の主要LLMの共通基盤となった。",
      en: "Google researchers introduced the Transformer architecture, which became the common foundation for nearly every major LLM since.",
    },
    sources: [{ label: "Wikipedia: Attention Is All You Need", url: "https://en.wikipedia.org/wiki/Attention_Is_All_You_Need" }],
  },
  {
    id: "2019-nist-face-recognition-demographics",
    date: "2019-12-19",
    precision: "day",
    title: {
      ja: "NISTが顔認識の人種・性別・年齢による差を報告",
      en: "NIST Reports Demographic Differences in Face Recognition",
    },
    summary: {
      ja: "米国国立標準技術研究所（NIST）が、99の開発者による189の顔認識アルゴリズムを評価。1対1の照合では、アジア系やアフリカ系米国人の顔で別人を同一人物と誤判定する率が白人の顔より高く、その差はアルゴリズムによって10倍から100倍に及ぶことが多かった。",
      en: "The US National Institute of Standards and Technology (NIST) evaluated 189 face recognition algorithms from 99 developers. In one-to-one matching, false positives were higher for Asian and African American faces than for white faces, with differentials often ranging from a factor of 10 to 100 depending on the algorithm.",
    },
    sources: [
      {
        label: "NIST: NIST Study Evaluates Effects of Race, Age, Sex on Face Recognition Software",
        url: "https://www.nist.gov/news-events/news/2019/12/nist-study-evaluates-effects-race-age-sex-face-recognition-software",
      },
    ],
  },
  {
    id: "2020-rag-paper",
    date: "2020-05-22",
    precision: "day",
    title: { ja: "RAG（検索拡張生成）を提案する論文が公開", en: "The Paper Proposing RAG (Retrieval-Augmented Generation) Is Released" },
    summary: {
      ja: "Facebook AI Research・ユニバーシティ・カレッジ・ロンドン・ニューヨーク大学の研究者が、Wikipediaの文書をベクトルの索引から検索し、取り出した文書を踏まえて文章を生成する「RAG」を提案する論文を公開した。NeurIPS 2020で発表された。",
      en: "Researchers from Facebook AI Research, University College London, and New York University released a paper proposing RAG, which retrieves Wikipedia passages from a dense vector index and generates text based on what it retrieved. It was presented at NeurIPS 2020.",
    },
    sources: [
      {
        label: "Lewis et al.: Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (arXiv)",
        url: "https://arxiv.org/abs/2005.11401",
      },
    ],
  },
  {
    id: "2020-gpt3",
    date: "2020-06-01",
    precision: "month",
    title: { ja: "GPT-3公開", en: "GPT-3 Released" },
    summary: {
      ja: "OpenAIが1,750億パラメータのGPT-3をAPIで公開し、大規模言語モデルの可能性を広く示した。",
      en: "OpenAI released the 175-billion-parameter GPT-3 via API, widely demonstrating the potential of large language models.",
    },
    sources: [{ label: "HISTORY: ChatGPT is released to the public", url: "https://www.history.com/this-day-in-history/november-30/chatgpt-released-openai" }],
  },
  {
    id: "2020-ddpm",
    date: "2020-06-19",
    precision: "day",
    title: { ja: "DDPM — 拡散モデルで高品質な画像生成", en: "DDPM: High-Quality Image Synthesis with Diffusion Models" },
    summary: {
      ja: "Jonathan Hoらが論文「Denoising Diffusion Probabilistic Models」を公開し、拡散モデルで高品質な画像を生成できることを示した。2023年のSDXLの論文は、拡散モデルが画像生成に強いことを示した先駆的な研究の1つにこれを挙げている。",
      en: "Jonathan Ho and colleagues released \"Denoising Diffusion Probabilistic Models,\" presenting high-quality image synthesis with diffusion models. The 2023 SDXL paper cites it as one of the seminal works that showed diffusion models to be powerful generators for image synthesis.",
    },
    sources: [
      { label: "Ho, Jain & Abbeel: Denoising Diffusion Probabilistic Models (arXiv)", url: "https://arxiv.org/abs/2006.11239" },
      {
        label: "Podell et al.: SDXL: Improving Latent Diffusion Models for High-Resolution Image Synthesis (arXiv, 2023)",
        url: "https://arxiv.org/abs/2307.01952",
      },
    ],
  },
  {
    id: "2020-mmlu",
    date: "2020-09-07",
    precision: "day",
    title: { ja: "MMLU（大規模マルチタスク言語理解）の発表", en: "The MMLU Benchmark Is Introduced" },
    summary: {
      ja: "Hendrycksらが、初等数学・米国史・コンピュータ科学・法律など57分野の選択式の問題で、モデルの知識と問題解決力を測るテストMMLUを発表した。当時のほとんどのモデルの正答率は、でたらめに選んだ場合とほぼ同じだった。",
      en: "Hendrycks and colleagues introduced MMLU, a multiple-choice test of models' knowledge and problem-solving ability across 57 subjects including elementary mathematics, US history, computer science, and law. At the time, most models scored near random chance.",
    },
    sources: [
      {
        label: "Hendrycks et al.: Measuring Massive Multitask Language Understanding (arXiv, 2020-09-07)",
        url: "https://arxiv.org/abs/2009.03300",
      },
    ],
  },
  {
    id: "2021-c2pa",
    date: "2021-02-01",
    precision: "month",
    title: { ja: "C2PA発足 — コンテンツの来歴を記録する標準づくり", en: "C2PA Launches to Standardize Content Provenance" },
    summary: {
      ja: "Adobe・Arm・BBC・Intel・Microsoft・Truepicが、デジタルコンテンツの出どころと編集履歴を記録・確認する技術標準をつくる団体C2PAを立ち上げた。2022年1月に最初の仕様を公開した。",
      en: "Adobe, Arm, the BBC, Intel, Microsoft, and Truepic launched the C2PA to build a technical standard for recording and checking where digital content came from and how it was edited. It released its first specification in January 2022.",
    },
    sources: [
      {
        label: "C2PA: C2PA Releases Specification of World's First Industry Standard for Content Provenance",
        url: "https://c2pa.org/c2pa-releases-specification-of-worlds-first-industry-standard-for-content-provenance/",
      },
    ],
  },
  {
    id: "2021-github-copilot",
    date: "2021-06-29",
    precision: "day",
    title: { ja: "GitHub Copilot技術プレビュー発表", en: "GitHub Copilot Technical Preview Announced" },
    summary: {
      ja: "GitHubがAIコーディング支援ツールCopilotの技術プレビューを発表した。",
      en: "GitHub announced a technical preview of Copilot, its AI coding assistant.",
    },
    sources: [{ label: "Wikipedia: GitHub Copilot", url: "https://en.wikipedia.org/wiki/GitHub_Copilot" }],
  },
  {
    id: "2021-latent-diffusion",
    date: "2021-12-20",
    precision: "day",
    title: { ja: "潜在拡散モデルの論文が公開", en: "The Latent Diffusion Models Paper Is Released" },
    summary: {
      ja: "Robin Rombachらが、画像を圧縮した潜在空間で拡散モデルを動かし、文章などの条件をクロスアテンションで取り込む「潜在拡散モデル」の論文を公開した（CVPR 2022）。画素のまま扱う拡散モデルより必要な計算を大きく減らした。",
      en: "Robin Rombach and colleagues released the paper on latent diffusion models, which run diffusion in the latent space of a pretrained autoencoder and take in conditions such as text through cross-attention (CVPR 2022), significantly reducing the computation needed compared with pixel-based diffusion models.",
    },
    sources: [
      {
        label: "Rombach et al.: High-Resolution Image Synthesis with Latent Diffusion Models (arXiv)",
        url: "https://arxiv.org/abs/2112.10752",
      },
    ],
  },
  {
    id: "2022-instructgpt",
    date: "2022-01-01",
    precision: "month",
    title: { ja: "InstructGPT — RLHFの実証", en: "InstructGPT Demonstrates RLHF" },
    summary: {
      ja: "OpenAIがRLHFで指示追従性を高めたInstructGPTを発表。小さなモデルが人間の評価で大きなモデルを上回った。",
      en: "OpenAI's InstructGPT, tuned with RLHF, showed a much smaller model preferred by human raters over a far larger one.",
    },
    sources: [{ label: "IBM: What Is RLHF?", url: "https://www.ibm.com/think/topics/rlhf" }],
  },
  {
    id: "2022-stable-diffusion",
    date: "2022-08-22",
    precision: "day",
    title: { ja: "Stable Diffusion公開", en: "Stable Diffusion Released" },
    summary: {
      ja: "Stability AIらがオープンソースの画像生成モデルStable Diffusionを公開した。",
      en: "Stability AI and collaborators released the open-source image generation model Stable Diffusion.",
    },
    sources: [{ label: "Wikipedia: Stable Diffusion", url: "https://en.wikipedia.org/wiki/Stable_Diffusion" }],
  },
  {
    id: "2022-chatgpt",
    date: "2022-11-30",
    precision: "day",
    title: { ja: "ChatGPT一般公開", en: "ChatGPT Launches Publicly" },
    summary: {
      ja: "OpenAIがChatGPTを無料研究プレビューとして公開。5日で利用者100万人に達し、AIを一般に広めた。",
      en: "OpenAI released ChatGPT as a free research preview; it reached one million users in five days, bringing AI to the mainstream.",
    },
    sources: [{ label: "HISTORY: ChatGPT is released to the public", url: "https://www.history.com/this-day-in-history/november-30/chatgpt-released-openai" }],
  },
  {
    id: "2023-gpt4",
    date: "2023-03-14",
    precision: "day",
    title: { ja: "GPT-4投入", en: "GPT-4 Launches" },
    summary: {
      ja: "OpenAIがより高性能なGPT-4をChatGPTとBingに投入した。",
      en: "OpenAI rolled out the more capable GPT-4 in ChatGPT and Bing.",
    },
    sources: [{ label: "HISTORY: ChatGPT is released to the public", url: "https://www.history.com/this-day-in-history/november-30/chatgpt-released-openai" }],
  },
  {
    id: "2023-chatbot-arena",
    date: "2023-05-03",
    precision: "day",
    title: { ja: "Chatbot Arena公開", en: "Chatbot Arena Launches" },
    summary: {
      ja: "LMSYSが、名前を伏せた2つのモデルの回答を人が比べて投票し、その結果から順位を付けるChatbot Arenaの最初の結果とリーダーボードを公開した。初回は9モデルを、約4,700票に基づくEloレーティングで並べた。",
      en: "LMSYS published the first results and leaderboard of Chatbot Arena, where people compare answers from two anonymous models and vote, and the votes are turned into rankings. The first leaderboard rated nine models with Elo ratings based on about 4,700 votes.",
    },
    sources: [
      {
        label: "LMSYS: Chatbot Arena: Benchmarking LLMs in the Wild with Elo Ratings (2023-05-03)",
        url: "https://www.lmsys.org/blog/2023-05-03-arena/",
      },
    ],
  },
  {
    id: "2023-apple-live-speech-personal-voice",
    date: "2023-05-16",
    precision: "day",
    title: {
      ja: "AppleがLive SpeechとPersonal Voiceを発表",
      en: "Apple Previews Live Speech and Personal Voice",
    },
    summary: {
      ja: "Appleが、打った文字を電話や対面の会話で読み上げる「Live Speech」と、ALSなどで発話能力を失うリスクのある人が自分の声に似た声を作れる「Personal Voice」を発表した。Personal Voiceは15分ほどの録音から、デバイス上の機械学習で作成する。",
      en: "Apple previewed Live Speech, which speaks typed text aloud during phone calls and in-person conversations, and Personal Voice, which lets people at risk of losing their ability to speak, such as those with ALS, create a voice that sounds like them from about 15 minutes of recordings, using on-device machine learning.",
    },
    sources: [
      {
        label: "Apple Newsroom: Apple introduces new features for cognitive accessibility, along with Live Speech, Personal Voice, and Point and Speak in Magnifier",
        url: "https://www.apple.com/newsroom/2023/05/apple-previews-live-speech-personal-voice-and-more-new-accessibility-features/",
      },
    ],
  },
  {
    id: "2023-synthid",
    date: "2023-08-29",
    precision: "day",
    title: { ja: "Google DeepMindがSynthIDを発表", en: "Google DeepMind Launches SynthID" },
    summary: {
      ja: "AIが生成した画像のピクセルに、人の目には見えないが検出できる電子透かしを埋め込むツールSynthIDのベータ版を公開。のちに音声・動画・テキストにも対象を広げた。",
      en: "Google DeepMind released a beta of SynthID, which embeds a watermark into the pixels of AI-generated images — imperceptible to the human eye but detectable. It later expanded to audio, video, and text.",
    },
    sources: [
      {
        label: "Google DeepMind: Identifying AI-generated images with SynthID",
        url: "https://deepmind.google/blog/identifying-ai-generated-images-with-synthid/",
      },
      { label: "Google DeepMind: SynthID", url: "https://deepmind.google/models/synthid/" },
    ],
  },
  {
    id: "2023-swe-bench",
    date: "2023-10-10",
    precision: "day",
    title: { ja: "SWE-bench発表", en: "SWE-bench Is Introduced" },
    summary: {
      ja: "研究者らが、12の人気のPythonリポジトリの実際のGitHubのissueとプルリクエストから集めた2,294問で、AIがコードを直して課題を解決できるかを測るSWE-benchを発表した。当時最も成績の良かったClaude 2でも、解けたのは1.96%だった。",
      en: "Researchers introduced SWE-bench, 2,294 problems drawn from real GitHub issues and pull requests in 12 popular Python repositories, testing whether AI can resolve issues by editing code. The best-performing model at the time, Claude 2, solved just 1.96%.",
    },
    sources: [
      {
        label: "Jimenez et al.: SWE-bench: Can Language Models Resolve Real-World GitHub Issues? (arXiv, 2023-10-10)",
        url: "https://arxiv.org/abs/2310.06770",
      },
    ],
  },
  {
    id: "2024-who-lmm-guidance",
    date: "2024-01-18",
    precision: "day",
    title: {
      ja: "WHOが大規模マルチモーダルモデルの倫理とガバナンスの指針を公表",
      en: "WHO Issues Ethics and Governance Guidance on Large Multi-Modal Models",
    },
    summary: {
      ja: "世界保健機関（WHO）が、健康の分野で生成AI（大規模マルチモーダルモデル）を使うときの倫理とガバナンスについて、政府・テック企業・医療提供者向けに40を超える推奨を示した。症状や治療を調べるといった患者自身の利用も、想定される使い方の一つに挙げている。",
      en: "The World Health Organization issued over 40 recommendations for governments, technology companies, and health care providers on the ethics and governance of large multi-modal models in health. It lists patient-guided use, such as investigating symptoms and treatment, among the expected applications.",
    },
    sources: [
      {
        label: "WHO: WHO releases AI ethics and governance guidance for large multi-modal models (2024-01-18)",
        url: "https://www.who.int/news/item/18-01-2024-who-releases-ai-ethics-and-governance-guidance-for-large-multi-modal-models",
      },
    ],
  },
  {
    id: "2024-japan-aisi",
    date: "2024-02-14",
    precision: "day",
    title: { ja: "日本のAIセーフティ・インスティテュート（AISI）発足", en: "Japan Launches Its AI Safety Institute (AISI)" },
    summary: {
      ja: "AIの安全性の評価手法や基準の検討・推進を担う機関として、日本のAISIが発足し、情報処理推進機構（IPA）に事務局が置かれた。",
      en: "Japan launched its AI Safety Institute to work on evaluation methods and standards for AI safety, with its secretariat at the Information-technology Promotion Agency (IPA).",
    },
    sources: [{ label: "AIセーフティ・インスティテュート（J-AISI）: AISIについて", url: "https://aisi.go.jp/about/" }],
  },
  {
    id: "2024-claude3",
    date: "2024-03-01",
    precision: "month",
    title: { ja: "Claude 3ファミリー発表", en: "The Claude 3 Family Announced" },
    summary: {
      ja: "AnthropicがOpus・Sonnet・Haikuの3段階モデル構成を導入した。",
      en: "Anthropic introduced its three-tier Opus/Sonnet/Haiku model lineup.",
    },
    sources: [{ label: "Anthropic: Introducing the next generation of Claude", url: "https://www.anthropic.com/news/claude-3-family" }],
  },
  {
    id: "2024-japan-ai-copyright",
    date: "2024-03-15",
    precision: "day",
    title: { ja: "「AIと著作権に関する考え方について」取りまとめ", en: "Japan's General Understanding on AI and Copyright" },
    summary: {
      ja: "文化審議会著作権分科会法制度小委員会が、AIと著作権の関係を「開発・学習段階」と「生成・利用段階」に分けて整理した考え方を取りまとめた。法的拘束力はなく、現行の著作権法の解釈についての小委員会の見解。",
      en: "The Legal Subcommittee under the Copyright Subdivision of Japan's Cultural Council compiled its General Understanding, separating AI development and training from generation and use. It is not legally binding; it sets out the subcommittee's view of how the current Copyright Act applies.",
    },
    sources: [
      {
        label: "文化庁: AIと著作権に関する考え方について（2024年3月15日）",
        url: "https://www.bunka.go.jp/seisaku/bunkashingikai/chosakuken/pdf/94037901_01.pdf",
      },
      { label: "文化庁: AIと著作権", url: "https://www.bunka.go.jp/seisaku/chosakuken/aiandcopyright.html" },
    ],
  },
  {
    id: "2024-japan-ai-guidelines",
    date: "2024-04-19",
    precision: "day",
    title: { ja: "AI事業者ガイドライン（第1.0版）公表", en: "Japan Publishes Its AI Guidelines for Business" },
    summary: {
      ja: "総務省と経済産業省が、AIの開発者・提供者・利用者向けの指針を、法的拘束力のないソフトローとして公表した。2026年3月31日に第1.2版へ改訂された。",
      en: "Japan's Ministry of Internal Affairs and Communications and Ministry of Economy, Trade and Industry published guidelines for AI developers, providers, and business users as non-binding soft law. Version 1.2 followed on March 31, 2026.",
    },
    sources: [
      { label: "総務省: 「AI事業者ガイドライン」掲載ページ", url: "https://www.soumu.go.jp/main_sosiki/kenkyu/ai_network/02ryutsu20_04000019.html" },
    ],
  },
  {
    id: "2024-gpt4o",
    date: "2024-05-13",
    precision: "day",
    title: { ja: "GPT-4o発表", en: "GPT-4o Announced" },
    summary: {
      ja: "OpenAIがテキスト・音声・画像をリアルタイムで横断して扱えるマルチモーダルモデルGPT-4oを発表した。",
      en: "OpenAI introduced GPT-4o, a multimodal model that reasons across text, audio, and vision in real time.",
    },
    sources: [{ label: "OpenAI: Hello GPT-4o", url: "https://openai.com/index/hello-gpt-4o/" }],
  },
  {
    id: "2024-frontier-ai-safety-commitments",
    date: "2024-05-21",
    precision: "day",
    title: { ja: "AIソウル・サミットで「フロンティアAI安全性コミットメント」", en: "Frontier AI Safety Commitments at the AI Seoul Summit" },
    summary: {
      ja: "英国と韓国の政府が、16の企業・団体がフロンティアAIの安全性に関する自主的な約束に合意したと発表した。深刻なリスクに焦点を当てた安全の枠組みを公表し、リスクを許容できない水準を定め、対策で抑えられなければ開発も公開もしないとした。",
      en: "The UK and Korean governments announced that 16 companies and organisations had agreed to voluntary frontier AI safety commitments: to publish safety frameworks focused on severe risks, set thresholds at which risks would be intolerable, and, if mitigations cannot keep risks below them, not develop or deploy a model at all.",
    },
    sources: [
      {
        label: "UK Government (DSIT): Frontier AI Safety Commitments, AI Seoul Summit 2024",
        url: "https://www.gov.uk/government/publications/frontier-ai-safety-commitments-ai-seoul-summit-2024",
      },
    ],
  },
  {
    id: "2024-japan-anti-fraud-plan",
    date: "2024-06-18",
    precision: "day",
    title: {
      ja: "「国民を詐欺から守るための総合対策」決定",
      en: "Japan Adopts a Comprehensive Plan Against Fraud",
    },
    summary: {
      ja: "犯罪対策閣僚会議が、投資家や著名人になりすましたSNS上の偽広告などで被害者を誘い込む詐欺への対策として、プラットフォーム事業者に広告の事前審査の強化や、広告を出す人の本人確認の強化を求めることなどを盛り込んだ総合対策を決定した。",
      en: "Japan's Ministerial Meeting on Crime Countermeasures adopted a comprehensive plan against fraud. To counter scams that lure victims with fake social media ads impersonating investors and celebrities, it calls on platform operators to strengthen ad screening and verification of advertisers' identities.",
    },
    sources: [
      {
        label: "犯罪対策閣僚会議: 国民を詐欺から守るための総合対策（2024-06-18）",
        url: "https://www.cas.go.jp/jp/seisakukaigi/hanzai/kettei/240618/honbun.pdf",
      },
    ],
  },
  {
    id: "2024-claude35-sonnet",
    date: "2024-06-20",
    precision: "day",
    title: { ja: "Claude 3.5 Sonnet発表", en: "Claude 3.5 Sonnet Announced" },
    summary: {
      ja: "AnthropicがClaude 3 Opusを上回る性能を、より低コスト・高速な3.5 Sonnetで実現したと発表した。",
      en: "Anthropic released Claude 3.5 Sonnet, outperforming Claude 3 Opus at a lower cost and higher speed.",
    },
    sources: [{ label: "Anthropic: Introducing Claude 3.5 Sonnet", url: "https://www.anthropic.com/news/claude-3-5-sonnet" }],
  },
  {
    id: "2024-eu-ai-act",
    date: "2024-08-01",
    precision: "day",
    title: { ja: "EU AI Actが発効", en: "The EU AI Act Enters Into Force" },
    summary: {
      ja: "欧州連合の包括的なAI規制法が発効。主要条項は段階的に適用される計画で、高リスク分野の適用時期は後に延期された（2026年の項参照）。",
      en: "The European Union's comprehensive AI regulation entered into force, with major provisions phasing in over time; the high-risk deadlines were later postponed (see the 2026 entry).",
    },
    sources: [
      { label: "European Commission: AI Act enters into force", url: "https://commission.europa.eu/news-and-media/news/ai-act-enters-force-2024-08-01_en" },
    ],
  },
  {
    id: "2024-o1",
    date: "2024-09-12",
    precision: "day",
    title: { ja: "OpenAI o1 — 「推論」モデルの登場", en: "OpenAI o1: A \"Reasoning\" Model Arrives" },
    summary: {
      ja: "回答前に時間をかけて考える設計のo1-preview/o1-miniが登場。数学・科学・コーディングでの複雑な問題に強くなった。",
      en: "OpenAI released o1-preview and o1-mini, models designed to spend more time reasoning before answering — stronger on complex math, science, and coding problems.",
    },
    sources: [{ label: "OpenAI: Introducing OpenAI o1", url: "https://openai.com/index/introducing-openai-o1-preview/" }],
  },
  {
    id: "2024-mcp",
    date: "2024-11-25",
    precision: "day",
    title: { ja: "Model Context Protocol（MCP）公開", en: "The Model Context Protocol (MCP) Is Released" },
    summary: {
      ja: "AnthropicがAIアプリと外部のデータ・ツールをつなぐオープン規格MCPを公開。接続先ごとに専用実装を作る負担を減らす狙い。",
      en: "Anthropic released MCP, an open standard for connecting AI applications to external data and tools, replacing one-off integrations with a common protocol.",
    },
    sources: [{ label: "Anthropic: Introducing the Model Context Protocol", url: "https://www.anthropic.com/news/model-context-protocol" }],
  },
  {
    id: "2024-gemini-deep-research",
    date: "2024-12-11",
    precision: "day",
    title: { ja: "GeminiにDeep Researchが登場", en: "Deep Research Arrives in Gemini" },
    summary: {
      ja: "Googleが、AIが調査計画を立ててWeb検索を繰り返し、出典リンクつきのレポートにまとめるDeep ResearchをGemini Advancedで提供開始した。2025年2月2日にはOpenAIもChatGPTでdeep researchを公開した。",
      en: "Google launched Deep Research in Gemini Advanced: the AI drafts a research plan, searches the web repeatedly, and compiles a report with links to its sources. OpenAI followed with deep research in ChatGPT on February 2, 2025.",
    },
    sources: [
      {
        label: "Google: Try Deep Research and our new experimental model in Gemini, your AI assistant",
        url: "https://blog.google/products-and-platforms/products/gemini/google-gemini-deep-research/",
      },
      { label: "OpenAI: Introducing deep research", url: "https://openai.com/index/introducing-deep-research/" },
    ],
  },
  {
    id: "2025-deepseek-r1",
    date: "2025-01-20",
    precision: "day",
    title: { ja: "DeepSeek-R1公開", en: "DeepSeek-R1 Released" },
    summary: {
      ja: "中国のDeepSeekが推論モデルR1を公開。低コストな学習を謳い、公開1週間でiOSの無料アプリ首位に立った。",
      en: "China's DeepSeek released its R1 reasoning model, claiming low-cost training, and topped the iOS free-app charts within a week.",
    },
    sources: [{ label: "Wikipedia: DeepSeek", url: "https://en.wikipedia.org/wiki/DeepSeek" }],
  },
  {
    id: "2025-international-ai-safety-report",
    date: "2025-01-29",
    precision: "day",
    title: { ja: "初の「国際AI安全性報告書」公表", en: "First International AI Safety Report Published" },
    summary: {
      ja: "英国ブレッチリーのAI安全性サミットに参加した国々の委託で、高度なAIの能力・リスク・安全性に関する証拠をまとめた初の国際報告書が公表された。30か国と国連・OECD・EUが専門家諮問パネルに代表を出し、計100人のAI専門家が執筆に関わった。2026年版は2026年2月3日に公表された。",
      en: "Mandated by the nations at the AI Safety Summit in Bletchley, UK, the first international report synthesizing the evidence on the capabilities, risks, and safety of advanced AI was published. Thirty nations, the UN, the OECD, and the EU each nominated a representative to its Expert Advisory Panel, and 100 AI experts contributed. The 2026 edition followed on February 3, 2026.",
    },
    sources: [
      { label: "arXiv: International AI Safety Report (Bengio et al., 2025-01-29)", url: "https://arxiv.org/abs/2501.17805" },
      { label: "International AI Safety Report (official site)", url: "https://internationalaisafetyreport.org/" },
    ],
  },
  {
    id: "2025-eu-ai-act-prohibitions",
    date: "2025-02-02",
    precision: "day",
    title: { ja: "EU AI Actの禁止規定とAIリテラシーの規定が適用開始", en: "EU AI Act Bans and AI Literacy Rules Begin to Apply" },
    summary: {
      ja: "有害な操作や社会的スコアリングなど、EU AI Actが禁止するAIの規定と、AIリテラシーの規定が適用され始めた。段階的な適用の最初の節目。",
      en: "The EU AI Act's bans on practices such as harmful manipulation and social scoring, along with its AI literacy obligations, began to apply — the first milestone in its phased rollout.",
    },
    sources: [
      { label: "European Commission: AI Act", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" },
    ],
  },
  {
    id: "2025-iea-energy-and-ai",
    date: "2025-04-10",
    precision: "day",
    title: {
      ja: "IEAが報告書「Energy and AI」を公表",
      en: "The IEA Publishes Energy and AI",
    },
    summary: {
      ja: "国際エネルギー機関（IEA）が、AIとエネルギーに関する報告書を公表。2024年に世界の電力消費の約1.5%（415TWh）だったデータセンターの電力消費が、2030年には約945TWhと2倍以上になり、AIがその最大の要因になる見通しを示した。",
      en: "The International Energy Agency (IEA) published its report on energy and AI, projecting that data-centre electricity consumption — around 1.5% of the world's electricity, or 415 TWh, in 2024 — would more than double to around 945 TWh by 2030, with AI as the most important driver.",
    },
    sources: [{ label: "IEA: Energy and AI", url: "https://www.iea.org/reports/energy-and-ai" }],
  },
  {
    id: "2025-ilo-genai-exposure-index",
    date: "2025-05-20",
    precision: "day",
    title: {
      ja: "ILOが生成AIへの職業の曝露の世界指標を公表",
      en: "The ILO Publishes a Global Index of Exposure to Generative AI",
    },
    summary: {
      ja: "国際労働機関（ILO）とポーランドの国立研究機関NASKが、世界の雇用の25%（高所得国では34%）が生成AIに曝露している職業にあるとする指標を公表。数字は潜在的な曝露であって実際に失われた仕事ではなく、置き換えより仕事の変化が起こりやすいとした。",
      en: "The International Labour Organization (ILO) and Poland's NASK published an index finding that 25% of global employment (34% in high-income countries) is in occupations exposed to generative AI — stressing that this is potential exposure, not actual job losses, and that transformation is more likely than replacement.",
    },
    sources: [
      {
        label: "ILO: One in four jobs at risk of being transformed by GenAI, new ILO–NASK Global Index shows",
        url: "https://www.ilo.org/resource/news/one-four-jobs-risk-being-transformed-genai-new-ilo%E2%80%93nask-global-index-shows",
      },
    ],
  },
  {
    id: "2025-gpt-oss",
    date: "2025-08-05",
    precision: "day",
    title: { ja: "OpenAIがオープンウェイトモデルgpt-ossを公開", en: "OpenAI Releases the Open-Weight gpt-oss Models" },
    summary: {
      ja: "GPT-2以来となるOpenAIのオープンウェイト推論モデルgpt-oss-120b/20bをApache 2.0ライセンスで公開。小さい方は一般的なPCでも動く設計。",
      en: "OpenAI released gpt-oss-120b and gpt-oss-20b, its first open-weight reasoning models since GPT-2, under the Apache 2.0 license; the smaller one targets consumer hardware.",
    },
    sources: [{ label: "OpenAI: Introducing gpt-oss", url: "https://openai.com/index/introducing-gpt-oss/" }],
  },
  {
    id: "2025-gpt5",
    date: "2025-08-07",
    precision: "day",
    title: { ja: "GPT-5発表", en: "GPT-5 Announced" },
    summary: {
      ja: "OpenAIがコーディング・数学・文章作成・視覚認識などで従来モデルを上回るGPT-5を発表した。",
      en: "OpenAI introduced GPT-5, with a jump in capability across coding, math, writing, and visual perception over prior models.",
    },
    sources: [{ label: "OpenAI: Introducing GPT-5", url: "https://openai.com/index/introducing-gpt-5/" }],
  },
  {
    id: "2025-japan-ai-act",
    date: "2025-09-01",
    precision: "day",
    title: { ja: "日本のAI法が全面施行", en: "Japan's AI Promotion Act Takes Full Effect" },
    summary: {
      ja: "「人工知能関連技術の研究開発及び活用の推進に関する法律」が全面施行され、AI戦略本部の設置とAI基本計画の策定が始まった。規制ではなく推進を軸にした法律。",
      en: "Japan's Act on the Promotion of Research, Development and Utilization of AI-Related Technologies took full effect, establishing an AI Strategy Headquarters and starting a national AI basic plan — a promotion-first law rather than a regulatory one.",
    },
    sources: [{ label: "内閣府: ＡＩ法 全面施行", url: "https://www.cao.go.jp/press/new_wave/20251003.html" }],
  },
  {
    id: "2025-chatgpt-parental-controls",
    date: "2025-09-29",
    precision: "day",
    title: {
      ja: "ChatGPTにペアレンタルコントロール",
      en: "Parental Controls Come to ChatGPT",
    },
    summary: {
      ja: "OpenAIが、保護者と10代の子どものアカウントを連携し、年齢に合った使い方になるよう設定を調整できるペアレンタルコントロールを、ChatGPTのすべての利用者に提供し始めた。",
      en: "OpenAI made parental controls available to all ChatGPT users, letting parents link their account with their teen's account and customize settings for a safe, age-appropriate experience.",
    },
    sources: [
      { label: "OpenAI: Introducing parental controls", url: "https://openai.com/index/introducing-parental-controls/" },
    ],
  },
  {
    id: "2025-openai-restructuring",
    date: "2025-10-28",
    precision: "day",
    title: { ja: "OpenAIが組織構造を再編", en: "OpenAI Restructures" },
    summary: {
      ja: "非営利のOpenAI Foundationが公益法人OpenAI Group PBCを統治する体制に再編された。",
      en: "OpenAI restructured so that the nonprofit OpenAI Foundation governs the public benefit corporation OpenAI Group PBC.",
    },
    sources: [{ label: "OpenAI: Evolving OpenAI's structure", url: "https://openai.com/index/evolving-our-structure/" }],
  },
  {
    id: "2025-gemini3",
    date: "2025-11-18",
    precision: "day",
    title: { ja: "Gemini 3発表", en: "Gemini 3 Announced" },
    summary: {
      ja: "GoogleがGemini 3 Proと、より深く推論するDeep Thinkモード、エージェント型開発環境Antigravityを発表した。",
      en: "Google introduced Gemini 3 Pro, the deeper-reasoning Deep Think mode, and Antigravity, an agentic development platform.",
    },
    sources: [{ label: "Google: Gemini 3", url: "https://blog.google/products-and-platforms/products/gemini/gemini-3/" }],
  },
  {
    id: "2025-agentic-ai-foundation",
    date: "2025-12-09",
    precision: "day",
    title: { ja: "MCPがAgentic AI Foundationへ", en: "MCP Joins the Agentic AI Foundation" },
    summary: {
      ja: "AnthropicがMCPをLinux Foundation傘下のAgentic AI Foundationに寄贈。Anthropic・Block・OpenAIが共同設立し、中立的な団体が規格を管理する体制になった。",
      en: "Anthropic donated MCP to the Agentic AI Foundation under the Linux Foundation, co-founded with Block and OpenAI, putting the standard under neutral stewardship.",
    },
    sources: [
      { label: "MCP Blog: MCP joins the Agentic AI Foundation", url: "https://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/" },
    ],
  },
  {
    id: "2025-japan-ai-basic-plan",
    date: "2025-12-23",
    precision: "day",
    title: { ja: "初の人工知能基本計画を閣議決定", en: "Japan Adopts Its First AI Basic Plan" },
    summary: {
      ja: "AI法に基づく初めての人工知能基本計画が閣議決定された。2026年7月14日には第2期の計画が閣議決定された。",
      en: "Japan's Cabinet adopted the first Artificial Intelligence Basic Plan under the AI Act; a second-term plan followed on July 14, 2026.",
    },
    sources: [{ label: "内閣府: 人工知能基本計画", url: "https://www8.cao.go.jp/cstp/ai/ai_plan/ai_plan.html" }],
  },
  {
    id: "2026-spacex-xai",
    date: "2026-02-02",
    precision: "day",
    title: { ja: "SpaceXがxAIを統合", en: "SpaceX Acquires xAI" },
    summary: {
      ja: "SpaceXがGrokの開発元xAIを統合すると発表。xAIは「宇宙を理解する」ことを使命に掲げてきた。同年7月には社名をSpaceXAIに改めた。",
      en: "SpaceX announced it had acquired xAI, the maker of Grok, which has framed its mission as \"understanding the universe.\" That July the company was renamed SpaceXAI.",
    },
    sources: [
      { label: "xAI: xAI joins SpaceX", url: "https://x.ai/news/xai-joins-spacex" },
      { label: "Wikipedia: SpaceXAI", url: "https://en.wikipedia.org/wiki/SpaceXAI" },
    ],
  },
  {
    id: "2026-sora-discontinued",
    date: "2026-03-24",
    precision: "day",
    title: { ja: "OpenAIがSoraの提供終了を発表", en: "OpenAI Announces the End of Sora" },
    summary: {
      ja: "動画生成サービスSoraの終了を発表。アプリとWeb版は4月26日に、APIは9月24日に停止した。注目サービスでも短期間で終わりうることを示した例。",
      en: "OpenAI announced it was discontinuing its Sora video service; the app and web experience closed on April 26 and the API on September 24. A reminder that even high-profile services can end quickly.",
    },
    sources: [
      { label: "OpenAI Docs: Deprecations", url: "https://developers.openai.com/api/docs/deprecations" },
      { label: "Wikipedia: Sora (text-to-video model)", url: "https://en.wikipedia.org/wiki/Sora_(text-to-video_model)" },
    ],
  },
  {
    id: "2026-claude-fable-5",
    date: "2026-06-09",
    precision: "day",
    title: { ja: "Claude Fable 5が一般提供開始", en: "Claude Fable 5 Becomes Generally Available" },
    summary: {
      ja: "当時のAnthropicの一般提供モデルで最も高性能とされたClaude Fable 5がAPI・主要クラウド経由で利用可能になった（同年9月に5.1へ更新）。",
      en: "Claude Fable 5, then Anthropic's most capable widely released model, became available via the API and major cloud platforms (superseded by 5.1 that September).",
    },
    sources: [
      { label: "Anthropic: Models overview", url: "https://platform.claude.com/docs/en/about-claude/models/overview" },
      { label: "Anthropic Docs: Model deprecations", url: "https://platform.claude.com/docs/en/about-claude/model-deprecations" },
    ],
  },
  {
    id: "2026-gpt56",
    date: "2026-07-09",
    precision: "day",
    title: { ja: "GPT-5.6発表", en: "GPT-5.6 Announced" },
    summary: {
      ja: "OpenAIがSol・Terra・Lunaの3モデルからなるGPT-5.6ファミリーを発表。ChatGPT・Codex・APIに展開された。",
      en: "OpenAI introduced the GPT-5.6 family — Sol, Terra, and Luna — rolling out across ChatGPT, Codex, and the API.",
    },
    sources: [{ label: "OpenAI: GPT-5.6", url: "https://openai.com/index/gpt-5-6/" }],
  },
  {
    id: "2026-eu-ai-act-applicable",
    date: "2026-08-02",
    precision: "day",
    title: { ja: "EU AI Actが本格適用、高リスク規制は延期", en: "The EU AI Act Becomes Applicable; High-Risk Rules Postponed" },
    summary: {
      ja: "AI Actが適用開始となり透明性の義務が発効。一方で「デジタル・オムニバス」により、高リスクAIの義務は分野別に2027年12月2日・2028年8月2日へ延期された。",
      en: "The AI Act became applicable and its transparency rules took effect, while the Digital Omnibus postponed the high-risk obligations to 2 December 2027 and 2 August 2028 depending on the category.",
    },
    sources: [
      { label: "European Commission: AI Act", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" },
    ],
  },
  {
    id: "2026-claude-fable-5-1",
    date: "2026-09-01",
    precision: "day",
    title: { ja: "Claude Fable 5.1 / Mythos 5.1発表", en: "Claude Fable 5.1 and Mythos 5.1 Announced" },
    summary: {
      ja: "AnthropicがFable 5.1を一般提供。同じモデルを基にしつつ安全装置の構成が異なるMythos 5.1は、審査済みのサイバーセキュリティ・生命科学の組織に限って提供される。",
      en: "Anthropic made Fable 5.1 generally available; Mythos 5.1, built on the same model with a different safeguard configuration, is limited to vetted cybersecurity and life-sciences organizations.",
    },
    sources: [{ label: "Anthropic: Introducing Claude Fable 5.1 and Claude Mythos 5.1", url: "https://www.anthropic.com/claude-fable-and-mythos-5-1" }],
  },
  {
    id: "2026-gpt6-astra",
    date: "2026-09-03",
    precision: "day",
    title: { ja: "GPT-6 Astra発表", en: "GPT-6 Astra Announced" },
    summary: {
      ja: "OpenAIがGPT-6世代の最上位モデルAstraを発表。9月22日にはSol・Lunaが続き、9月29日のDevDayでGPT-6.1 Solが公開された。",
      en: "OpenAI introduced GPT-6 Astra, the top model of the GPT-6 generation; Sol and Luna followed on September 22, and GPT-6.1 Sol was unveiled at DevDay on September 29.",
    },
    sources: [
      { label: "OpenAI: GPT-6 Astra", url: "https://openai.com/index/gpt-6-astra/" },
      { label: "OpenAI Docs: Models", url: "https://developers.openai.com/api/docs/models" },
      { label: "Wikipedia: GPT-6 Astra", url: "https://en.wikipedia.org/wiki/GPT-6_Astra" },
    ],
  },
  {
    id: "2026-japan-labour-white-paper-ai",
    date: "2026-09-29",
    precision: "day",
    title: {
      ja: "労働経済白書がAIを分析テーマに",
      en: "Japan's Labour White Paper Focuses on AI",
    },
    summary: {
      ja: "厚生労働省が「令和8年版 労働経済の分析」を公表。分析テーマを「AI等技術革新が進む中での労働市場の現状と課題」とし、国全体ではAIによって大きな雇用の減少が生じている証拠は現時点で示されていないとする一方、職種などによっては雇用を生む影響と失わせる影響の両方がありうるとした。",
      en: "Japan's Ministry of Health, Labour and Welfare published its 2026 white paper on the labour economy, themed on the labour market amid AI and other technological innovation. It found no evidence so far of AI causing large employment declines across the economy, while noting that AI could both create and destroy jobs in particular occupations.",
    },
    sources: [
      {
        label: "厚生労働省: 「令和８年版 労働経済の分析」を公表します（2026-09-29）",
        url: "https://www.mhlw.go.jp/stf/newpage_75700.html",
      },
    ],
  },
  {
    id: "2026-gemini-4-argon",
    date: "2026-09-30",
    precision: "day",
    title: { ja: "Gemini 4 Argon発表", en: "Gemini 4 Argon Announced" },
    summary: {
      ja: "GoogleがGemini 4世代の最初のモデルArgonを発表。ソフトウェア開発・企業の知的業務・サイバー防御を掲げ、まず審査済みのサイバー防御者向けに段階的に提供を開始した。",
      en: "Google announced Gemini 4 Argon, the first of the Gemini 4 generation, aimed at software engineering, enterprise knowledge work, and cyber defense, rolling out first to vetted cyber defenders.",
    },
    sources: [
      { label: "Google: Introducing Gemini 4 Argon", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/" },
    ],
  },
];
