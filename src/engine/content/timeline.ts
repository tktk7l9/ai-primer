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
// commitments, and the first International AI Safety Report — added on 2026-10-07; the daily-life entries — NOTICE 2019,
// Mata v. Avianca 2023, the Justice Ministry's AI guidelines 2023 and 2026, the SEC/NASAA/FINRA alert 2024, Apple Intelligence
// in Japanese 2025, and the Digital Agency's generative AI guideline 2025 — added on 2026-10-10; the creating-with-AI entries —
// pixiv's AI-generated setting 2022 and 2026 guideline, Clarkesworld 2023, KDP disclosure 2023, YouTube's disclosure 2024,
// the labels' suits against Suno and Udio 2024, itch.io tagging 2024, Spotify's AI protections 2025, the Udio–UMG and Suno–WMG
// partnerships 2025, Collins' "vibe coding" 2025, and JASRAC's generative AI page 2026 — added on 2026-10-11; the AI-and-science
// entries — Japan's AI endoscopy program approval and the health ministry's AI diagnosis notice 2018, AlphaFold2 at CASP14 2020,
// GraphCast 2023, AlphaGeometry, AlphaFold 3, the IMO silver result, and the physics and chemistry Nobel Prizes 2024, ECMWF's
// operational AIFS and the officially graded IMO gold result 2025 — added on 2026-10-11; the self-driving-and-robots entries —
// Japan's Level 3 rules and Honda's Level 3 type designation 2020, Level 4 drone flights 2022, the Level 4 permit system and
// delivery-robot rules, the Eiheiji service, RT-2, and the Cruise suspension 2023, the UK Automated Vehicles Act and GM's
// exit from robotaxis 2024, and Gemini Robotics 2025 — added on 2026-10-13; the AI-and-security entries — many-shot
// jailbreaking and Big Sleep 2024, GTIG's two misuse reports, Constitutional Classifiers, NIST AI 100-2 E2025, the AIxCC final,
// Anthropic's two threat reports, and the 250-document poisoning study 2025, and IPA's 10 major threats 2026 — also added on 2026-10-13;
// the AI-and-Japanese entries — the plain Japanese guidelines 2020, JGLUE 2022, LLM-jp, the tokenizer-unfairness study, and Llama 2
// 2023, the Swallow study, Fugaku-LLM, and JBBQ 2024, and LLM-jp-4.1 2026 — also added on 2026-10-13; the AI-in-industry
// entries — the bridge inspection guidelines 2019, the logistics policy package 2023, the truck overtime cap, i-Construction 2.0,
// the care technology priority areas, the care worker estimate, and the smart agriculture act 2024 — also added on 2026-10-13;
// the AI-and-disasters entries — DISAANA 2015, D-SUMM 2016, photo-based housing damage assessment 2018, the JMA–RIKEN joint
// research 2019 and its results 2023, the Noto earthquake misinformation response and Google's two flood forecasting milestones
// 2024, and the survivor-support AI plan 2025 — also added on 2026-10-13; the historical-records entries — MOJIZO 2016,
// Minna de Honkoku 2017 and its AI relaunch 2019, Japan Search 2020, the miwo app 2021, NDL full-text search 2022, the Digital
// Archive Strategy 2025, and NDLOCR-Lite 2026 — also added on 2026-10-13; the AI-in-finance entries — the FSA model risk
// principles 2021, the FSB AI report 2024, the FSA AI discussion paper, shared AML AI scoring, and the BOJ generative AI survey
// 2025, and the discussion paper's version 1.1 and the FSB's draft sound practices 2026 — also added on 2026-10-13; the AI-and-sports
// entries — gymnastics judging support 2019 and its extension to all apparatus 2023, FIFA's semi-automated offside 2022, the
// J.League's 3D offside lines and Wimbledon's AI commentary 2023, the online abuse study 2024, and MLB's ABS Challenge 2025 — also
// added on 2026-10-13; the AI-and-nature entries — Google's humpback whale call detector 2018, AI Bird and NOAA's humpback song
// study 2021, the NACS-J and Nikon camera-trap app 2022, and the new Perch release 2025 — also added on 2026-10-13).
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
    id: "2015-disaana-trial",
    date: "2015-04-08",
    precision: "day",
    title: { ja: "NICTが対災害SNS情報分析システムDISAANAを試験公開", en: "NICT Opens a Trial of DISAANA, Its Disaster Social Media Analyzer" },
    summary: {
      ja: "情報通信研究機構（NICT）が、日本語のツイートの10%のランダムサンプルをリアルタイムに分析し、災害に関する質問に答えの候補を示すDISAANAのリアルタイム版を試験公開した。2016年の熊本地震では内閣官房のツイッター分析班が使い、熊本県の災害対策本部に分析結果が提供された。",
      en: "Japan's National Institute of Information and Communications Technology (NICT) began a trial of the real-time version of DISAANA, which analyzes a 10% random sample of Japanese tweets in real time and offers candidate answers to disaster-related questions. After the 2016 Kumamoto earthquakes, the Cabinet Secretariat's Twitter analysis team used it and passed results to Kumamoto Prefecture's disaster response headquarters.",
    },
    sources: [
      {
        label: "NICT: 大規模災害時の膨大な被災報告を人工知能で瞬時に整理・要約 ～災害状況要約システム「D-SUMM」を試験公開～（2016-10-18）",
        url: "https://www.nict.go.jp/press/2016/10/18-1.html",
      },
    ],
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
    id: "2016-mojizo-beta",
    date: "2016-03-25",
    precision: "day",
    title: {
      ja: "木簡・くずし字解読システム「MOJIZO」のβ版が公開",
      en: "MOJIZO, a System for Reading Wooden Tablets and Kuzushiji, Opens in Beta",
    },
    summary: {
      ja: "奈良文化財研究所と東京大学史料編纂所が、1文字分の画像から木簡や古文書などの似た字形の画像を探すMOJIZOのβ版を公開した。約1年で22万件余のアクセスがあり（2017年2月末時点）、2023年3月には深層学習による文字画像の特徴抽出をもとにした検索になった。",
      en: "The Nara National Research Institute for Cultural Properties and the University of Tokyo's Historiographical Institute released a beta of MOJIZO, which finds images of similarly shaped characters on wooden tablets, old documents, and more from an image of one character. It drew over 220,000 accesses in about a year (as of the end of February 2017), and in March 2023 its search came to be based on features extracted with deep learning.",
    },
    sources: [
      { label: "奈良文化財研究所・東京大学史料編纂所: 木簡・くずし字解読システム MOJIZO", url: "https://aimojizo.nabunken.go.jp/" },
      {
        label: "東京大学: 「木簡・くずし字解読システム―MOJIZO―」スマホ・タブレット版の公開に関するお知らせ（2017-03-17）",
        url: "https://www.u-tokyo.ac.jp/focus/ja/articles/t_z0206_00013.html",
      },
    ],
  },
  {
    id: "2016-d-summ-trial",
    date: "2016-10-18",
    precision: "day",
    title: { ja: "NICTが災害状況要約システムD-SUMMを試験公開", en: "NICT Opens a Trial of D-SUMM, Which Summarizes Disaster Reports" },
    summary: {
      ja: "NICTが、X（当時Twitter）の被災報告から意味の似た報告をまとめ、タイプとエリアごとに整理して要約するD-SUMMを試験公開した。報告と矛盾する投稿がある可能性も示す。総務省の情報通信白書によると、試験公開は2023年度末まで続いた。",
      en: "NICT began a trial of D-SUMM, which groups similar damage reports on X (then Twitter), organizes them by type and area, and summarizes them, also flagging reports that other posts may contradict. According to Japan's white paper on information and communications, the trial ran until the end of fiscal 2023.",
    },
    sources: [
      {
        label: "NICT: 大規模災害時の膨大な被災報告を人工知能で瞬時に整理・要約 ～災害状況要約システム「D-SUMM」を試験公開～（2016-10-18）",
        url: "https://www.nict.go.jp/press/2016/10/18-1.html",
      },
      {
        label: "総務省: 令和6年版 情報通信白書 コラム「災害時における偽・誤情報への対応」",
        url: "https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/r06/html/nd122c00.html",
      },
    ],
  },
  {
    id: "2017-minna-de-honkoku",
    date: "2017-01-10",
    precision: "day",
    title: { ja: "市民参加の翻刻プロジェクト「みんなで翻刻」が始まる", en: "Minna de Honkoku, a Public Transcription Project, Launches" },
    summary: {
      ja: "京都大学の古地震研究会が、地震の史料のくずし字を市民と一緒に翻刻するWebアプリを公開した。約2年で東京大学地震研究所図書室の古文書495点すべての解読を終えた。",
      en: "Kyoto University's historical earthquake research group released a web app for transcribing the kuzushiji in earthquake documents together with the public. In about two years, all 495 old documents held by the library of the University of Tokyo's Earthquake Research Institute had been read.",
    },
    sources: [
      {
        label: "京都大学: Webアプリケーション「みんなで翻刻【地震史料】」の公開（2017-01-10）",
        url: "https://www.kyoto-u.ac.jp/ja/research-news/2017-01-10",
      },
      {
        label: "京都大学: 「みんなで翻刻」プロジェクトが東京大学地震研究所蔵の古文書のうち495点をすべて解読（2019-03-19）",
        url: "https://www.kyoto-u.ac.jp/ja/news/2019-03-27-1",
      },
    ],
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
    id: "2018-photo-based-damage-assessment",
    date: "2018-03-01",
    precision: "month",
    title: {
      ja: "住家の被害認定で、写真を活用した「全壊」の判定が可能に",
      en: "Japan's Housing Damage Guidelines Allow Photo-Based \"Total Destruction\" Judgments",
    },
    summary: {
      ja: "内閣府が住家の被害認定の運用指針を見直し、写真を活用した判定方法を加えた。発災前後の航空写真やドローンの映像などから一見して倒壊が分かる住家は、写真で「全壊」と認定できる。写真で判定できなければ現地で調べる。",
      en: "Japan's Cabinet Office revised its operational guidelines for assessing housing damage, adding a method that uses photos: homes that aerial photos from before and after a disaster, drone footage, or similar images show at a glance to have collapsed can be certified as totally destroyed. If photos are not enough, the home is assessed on site.",
    },
    sources: [
      {
        label: "内閣府（防災担当）: 災害に係る住家の被害認定基準運用指針（2026年6月）",
        url: "https://www.bousai.go.jp/taisaku/pdf/r605shishin_all.pdf",
      },
    ],
  },
  {
    id: "2018-humpback-whale-call-detection",
    date: "2018-10-29",
    precision: "day",
    title: { ja: "Google、ザトウクジラの声を見つけるAIを発表", en: "Google Unveils AI That Detects Humpback Whale Calls" },
    summary: {
      ja: "GoogleがNOAAの太平洋諸島水産科学センターと協力し、太平洋の複数の地点で録音された15年分の水中の音から、ザトウクジラの声を見つけるAIを開発したと発表した。音をスペクトログラムという図にして、画像を見分けるモデルで判定した。",
      en: "Google announced that, in partnership with NOAA's Pacific Islands Fisheries Science Center, it had developed AI to identify humpback whale calls in 15 years of underwater recordings from a number of locations in the Pacific. It turned sound into pictures called spectrograms and classified them with an image recognition model.",
    },
    sources: [
      { label: "Google Research: Acoustic Detection of Humpback Whales Using a Convolutional Neural Network（2018-10-29）", url: "https://research.google/blog/acoustic-detection-of-humpback-whales-using-a-convolutional-neural-network/" },
    ],
  },
  {
    id: "2018-japan-ai-endoscopy-program-approval",
    date: "2018-12-01",
    precision: "month",
    title: { ja: "内視鏡の画像診断を支援するAIソフトウェアが承認（日本）", en: "Japan Approves an AI Program That Supports Endoscopic Diagnosis" },
    summary: {
      ja: "内視鏡の画像診断を支援するソフトウェアが、プログラム医療機器として承認された。2025年9月26日の厚生労働省の定期意見交換会でPMDAは、この承認以降に承認されたAIを活用したプログラム医療機器を、2025年8月末時点で55品目と説明している。",
      en: "A program that supports endoscopic image diagnosis was approved as a medical device program. At a health ministry meeting on September 26, 2025, PMDA counted 55 AI-based medical device programs approved from this approval through the end of August 2025.",
    },
    sources: [
      {
        label: "厚生労働省: 第23回 医療機器・体外診断薬の承認審査や安全対策等に関する定期意見交換会 議事録（2025年9月26日）",
        url: "https://www.mhlw.go.jp/stf/newpage_65484.html",
      },
    ],
  },
  {
    id: "2018-mhlw-ai-diagnosis-notice",
    date: "2018-12-19",
    precision: "day",
    title: { ja: "厚生労働省、AIで診断支援をしても判断の主体は医師と通知", en: "Japan's Health Ministry: With AI Diagnosis Support, the Doctor Still Decides" },
    summary: {
      ja: "厚生労働省が、AIを用いた診断・治療支援のプログラムを利用して診療する場合も、診断・治療を行う主体は医師で、医師が最終的な判断の責任を負い、医師法第17条の医業として行われると通知した。",
      en: "The Ministry of Health, Labour and Welfare notified that when doctors practice with AI programs that support diagnosis and treatment, the doctor remains the one who diagnoses and treats, bears final responsibility for the judgment, and is practicing medicine under Article 17 of the Medical Practitioners Act.",
    },
    sources: [
      {
        label: "厚生労働省: 人工知能（AI）を用いた診断、治療等の支援を行うプログラムの利用と医師法第17条の規定との関係について（医政医発1219第1号）",
        url: "https://www.mhlw.go.jp/content/10601000/000468150.pdf",
      },
    ],
  },
  {
    id: "2019-jma-riken-ai-research",
    date: "2019-01-23",
    precision: "day",
    title: {
      ja: "気象庁と理研AIPが、気象観測・予測へのAI活用の共同研究を開始",
      en: "JMA and RIKEN AIP Begin Joint Research on AI for Weather Observation and Prediction",
    },
    summary: {
      ja: "気象庁が理化学研究所 革新知能統合研究センターと、防災気象情報の根幹を支える観測と予測の精度を大きく上げることを目指す共同研究を始めた（2023年3月31日まで）。成果は2023年6月30日に公表された。",
      en: "The Japan Meteorological Agency began joint research with the RIKEN Center for Advanced Intelligence Project aimed at greatly improving the accuracy of the observations and predictions that underpin its weather information for disaster prevention (through March 31, 2023). The results were announced on June 30, 2023.",
    },
    sources: [
      {
        label: "気象庁: 気象観測・予測へのAI技術の活用に向けた共同研究の成果について（2023-06-30）",
        url: "https://www.jma.go.jp/jma/press/2306/30b/20230630_ai.pdf",
      },
    ],
  },
  {
    id: "2019-bridge-inspection-guidelines",
    date: "2019-02-01",
    precision: "month",
    title: { ja: "道路橋の定期点検要領を改定、近接目視と同等の方法も可能に", en: "Japan's Bridge Inspection Guidelines Allow Methods Equivalent to Close Visual Inspection" },
    summary: {
      ja: "国土交通省の道路橋定期点検要領は、5年に1回の定期点検と近接目視を基本としつつ、点検する人が近接目視と同等の診断ができる情報を得られると判断した方法による状態の把握も認めた。ドローンや画像のAIなどの点検支援技術を使う道が開けた。",
      en: "Japan's road bridge periodic inspection guidelines kept inspections every five years with close visual inspection as the basis, but also allowed inspectors to assess condition by any method they judge to give information for an equivalent diagnosis — opening the way for inspection-support technologies such as drones and image AI.",
    },
    sources: [
      { label: "国土交通省: 道路橋定期点検要領（2019年2月）", url: "https://www.mlit.go.jp/road/sisaku/yobohozen/tenken/yobo4_1.pdf" },
    ],
  },
  {
    id: "2019-notice-iot",
    date: "2019-02-20",
    precision: "day",
    title: { ja: "IoT機器の調査「NOTICE」開始", en: "Japan Launches NOTICE, Its IoT Security Survey" },
    summary: {
      ja: "総務省・NICT・インターネット接続事業者などが連携し、推測されやすい管理用パスワードが設定されたIoT機器を調査して利用者に注意喚起するプロジェクトNOTICEを開始。家庭のルーターやネットワークカメラも対象で、管理用パスワードの変更とファームウェアの更新を呼びかける。",
      en: "Japan's communications ministry, NICT, and internet service providers launched NOTICE, a project that surveys IoT devices set up with easily guessed administrative passwords and alerts their users. Home routers and network cameras are included; it urges changing administrative passwords and updating firmware.",
    },
    sources: [{ label: "NOTICE（総務省・NICT・ICT-ISAC）: みんなで守る、IoT。", url: "https://notice.go.jp/" }],
  },
  {
    id: "2019-minna-de-honkoku-ai",
    date: "2019-07-22",
    precision: "day",
    title: {
      ja: "「みんなで翻刻」がリニューアル、AIのくずし字認識を搭載",
      en: "Minna de Honkoku Relaunches with AI Kuzushiji Recognition",
    },
    summary: {
      ja: "国立歴史民俗博物館などが開発を進める「みんなで翻刻」がリニューアルし、凸版印刷とCODHが開発したAIによるくずし字の自動認識を使えるようになった。国際規格IIIFにも対応し、「東寺百合文書」の翻刻も始めた。それまでに約5,000人の参加で600万文字以上が翻刻されていた。",
      en: "Minna de Honkoku, developed by the National Museum of Japanese History and others, relaunched with automatic kuzushiji recognition by AI developed by Toppan Printing and CODH. It also adopted the international IIIF standard and began transcribing the Toji Temple Hyakugo Documents. By then, about 5,000 participants had transcribed over 6 million characters.",
    },
    sources: [
      {
        label: "国立歴史民俗博物館: 市民参加型翻刻プロジェクト「みんなで翻刻」が7月22日リニューアル公開（2019）",
        url: "https://www.rekihaku.ac.jp/news/20190722.html",
      },
    ],
  },
  {
    id: "2019-gymnastics-judging-support",
    date: "2019-10-04",
    precision: "day",
    title: {
      ja: "体操の世界選手権で、AIを使う採点支援システムを正式導入",
      en: "Gymnastics World Championships Officially Adopt an AI Judging Support System",
    },
    summary: {
      ja: "国際体操連盟と富士通が共同で開発した、3DセンサーとAIを使う採点支援システムが、第49回世界体操競技選手権大会のあん馬、つり輪、男子跳馬、女子跳馬の4種目で正式に導入された。審判の採点に疑念があるときや申し立てがあったときの演技の検証に使われた。",
      en: "A judging support system using 3D sensors and AI, jointly developed by the International Gymnastics Federation and Fujitsu, was officially introduced on four apparatus — pommel horse, rings, men's vault, and women's vault — at the 49th World Gymnastics Championships, to verify routines when scores were in doubt or a team filed an inquiry.",
    },
    sources: [
      {
        label: "富士通: 「第49回世界体操競技選手権大会」で富士通の採点支援システムを正式導入（2019-10-02）",
        url: "https://info.archives.global.fujitsu/jp/news/2019/10/2-1.html",
      },
    ],
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
    id: "2020-japan-level3-rules",
    date: "2020-04-01",
    precision: "month",
    title: { ja: "日本でレベル3の自動運転車が公道を走れるように", en: "Japan Allows Level 3 Automated Cars on Public Roads" },
    summary: {
      ja: "2019年に成立した改正道路交通法の自動運転関係の規定が施行され、道路運送車両法の改正と相まって、レベル3の自動運転車が公道を走れるようになった。道路交通法には、自動運行装置を使う運転者の義務や、作動状態を記録する装置の記録に関する規定が整えられた。",
      en: "Automated-driving provisions of the 2019 amendment to the Road Traffic Act took effect; together with the amended Road Transport Vehicle Act, they allowed Level 3 automated vehicles on public roads. The Road Traffic Act gained rules on the duties of drivers using an automated driving system and on records kept by a device logging its operating status.",
    },
    sources: [{ label: "警察庁: 自動運転", url: "https://www.npa.go.jp/bureau/traffic/selfdriving/index.html" }],
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
    id: "2020-plain-japanese-guidelines",
    date: "2020-08-01",
    precision: "month",
    title: { ja: "「在留支援のためのやさしい日本語ガイドライン」公表", en: "Japan Publishes Plain Japanese Guidelines for Supporting Foreign Residents" },
    summary: {
      ja: "出入国在留管理庁と文化庁が、難しい言葉を言い換えるなど相手に配慮したわかりやすい日本語（やさしい日本語）の書き言葉のガイドラインを公表した。日本人にわかりやすくする、外国人にもわかりやすくする、わかりやすさを確かめる、の3つのステップを示している。",
      en: "Japan's Immigration Services Agency and Agency for Cultural Affairs published guidelines for writing plain Japanese — easy-to-understand Japanese written with the reader in mind, such as by rephrasing difficult words — in three steps: make it clear for Japanese readers, make it clear for non-Japanese readers too, and check that it is understood.",
    },
    sources: [
      { label: "出入国在留管理庁: 在留支援のためのやさしい日本語ガイドライン", url: "https://www.moj.go.jp/isa/support/portal/plainjapanese_guideline.html" },
    ],
  },
  {
    id: "2020-japan-search",
    date: "2020-08-25",
    precision: "day",
    title: { ja: "ジャパンサーチの正式版が公開", en: "Japan Search Launches Its Official Version" },
    summary: {
      ja: "様々な分野のデジタルアーカイブのメタデータをまとめて検索・閲覧・活用できる国のプラットフォーム、ジャパンサーチの正式版が公開された。国立国会図書館がシステムを運用する。2026年10月13日時点で、321のデータベース、208の機関と連携し、メタデータは32,876,812件。",
      en: "Japan Search, a national platform for searching, viewing, and using metadata from digital archives in many fields, launched its official version, with the National Diet Library running the system. As of October 13, 2026, it linked 321 databases from 208 institutions, with 32,876,812 metadata records.",
    },
    sources: [
      { label: "ジャパンサーチ: ジャパンサーチ正式版を公開しました（2020-08-25）", url: "https://jpsearch.go.jp/news/20200821" },
      { label: "ジャパンサーチ: 現在のデータ", url: "https://jpsearch.go.jp/stats" },
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
    id: "2020-honda-legend-level3",
    date: "2020-11-11",
    precision: "day",
    title: { ja: "ホンダ・レジェンドに世界初のレベル3の型式指定", en: "Honda Legend Gets the World's First Level 3 Type Designation" },
    summary: {
      ja: "国土交通省が、本田技研工業のレジェンドに、自動運行装置を備えた車として世界で初めて型式指定を行った。装置「Traffic Jam Pilot」は高速道路の渋滞時に運転者に代わって運転し、条件を外れそうなときは警報を出して運転者に運転を求める。",
      en: "MLIT granted Honda's Legend the world's first type designation for a vehicle with an automated driving system. Its Traffic Jam Pilot drives in place of the driver in expressway traffic jams and warns the driver to take over when its operating conditions are about to stop being met.",
    },
    sources: [{ label: "国土交通省: 世界初！ 自動運転車（レベル３）の型式指定を行いました（2020年11月11日）", url: "https://www.mlit.go.jp/report/press/jidosha08_hh_003888.html" }],
  },
  {
    id: "2020-alphafold2-casp14",
    date: "2020-12-04",
    precision: "day",
    title: { ja: "CASP14でAlphaFold2が実験に迫る精度を示す", en: "AlphaFold2 Approaches Experimental Accuracy at CASP14" },
    summary: {
      ja: "タンパク質の構造予測の競技会CASPの第14回で、Google DeepMindのAlphaFold2が、多くの場合にX線結晶構造解析にほぼ並ぶ精度を示した。ノーベル財団の解説によると、CASPの創設者の一人ジョン・モールトは12月4日に競技を締めくくり、「次は何か」と問いかけた。",
      en: "At the 14th CASP protein structure prediction contest, Google DeepMind's AlphaFold2 in most cases performed almost as well as X-ray crystallography. According to the Nobel Foundation, CASP co-founder John Moult concluded the competition on December 4 by asking, \"what now?\"",
    },
    sources: [
      { label: "NobelPrize.org: Popular information — The Nobel Prize in Chemistry 2024", url: "https://www.nobelprize.org/prizes/chemistry/2024/popular-information/" },
      { label: "Protein Structure Prediction Center（CASP）", url: "https://predictioncenter.org/" },
    ],
  },
  {
    id: "2021-jwa-ai-bird",
    date: "2021-01-19",
    precision: "day",
    title: { ja: "日本気象協会、希少なワシを見分ける「AI Bird」を開発", en: "Japan Weather Association Develops \"AI Bird\" to Identify Rare Eagles" },
    summary: {
      ja: "4Kカメラで撮った映像から、国内希少野生動物のオジロワシとオオワシをAIで見分けるシステムを発表した。飛ぶ野生の鳥の映像からAIで種類を見分けるしくみは国内初で、風車に鳥がぶつかるバードストライクの防止に役立てる。北海道苫前町での野外実験の再現率は94%だった。",
      en: "The Japan Weather Association announced a system that uses AI to identify white-tailed eagles and Steller's sea eagles — nationally endangered species — in 4K video, the first system in Japan to identify wild birds in flight by species with AI. It is meant to help prevent bird strikes on wind turbines. In a field test in Tomamae, Hokkaido, its recall was 94%.",
    },
    sources: [
      { label: "日本気象協会: AI鳥類識別システム「AI Bird」を開発（2021-01-19）", url: "https://www.jwa.or.jp/news/2021/01/12092/" },
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
    id: "2021-noaa-humpback-song-study",
    date: "2021-05-18",
    precision: "day",
    title: { ja: "NOAA、ザトウクジラの歌をAIで探した研究を紹介", en: "NOAA Highlights a Study That Used AI to Find Humpback Whale Song" },
    summary: {
      ja: "NOAAの国立環境情報センターが、NOAAとGoogleが畳み込みニューラルネットワークで、北太平洋の13か所で14年間に集めた18万7,000時間を超える録音からザトウクジラの歌を探した研究を紹介した。ハワイの主要な島々での歌の減少をとらえ、モデルと録音のデータも公開された。",
      en: "NOAA's National Centers for Environmental Information highlighted a study in which NOAA and Google used a convolutional neural network to search more than 187,000 hours of recordings, collected over 14 years at 13 sites in the North Pacific, for humpback whale song. It captured a decline in song around the Main Hawaiian Islands, and the model and the recordings were made public.",
    },
    sources: [
      { label: "NOAA NCEI: Using AI to Listen and Learn about Humpback Whales（2021-05-18）", url: "https://www.ncei.noaa.gov/news/using-ai-listen-and-learn-about-humpback-whales" },
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
    id: "2021-miwo-app",
    date: "2021-08-30",
    precision: "day",
    title: { ja: "AIくずし字認識アプリ「みを」が公開", en: "The AI Kuzushiji Recognition App miwo Is Released" },
    summary: {
      ja: "人文学オープンデータ共同利用センター（CODH）が、スマホで撮ったくずし字をAIで認識して現代の文字に変換するアプリ「みを」を公開した。2022年10月の v1.1 から、新しいAIモデルRURIを使っている。CODHは、認識結果には誤りが含まれることがあり、利用者自身で確かめるよう求めている。",
      en: "Japan's Center for Open Data in the Humanities (CODH) released miwo, an app that uses AI to recognize kuzushiji photographed with a smartphone and convert it to modern characters. Since v1.1 in October 2022 it has used a new AI model, RURI. CODH warns that results can contain errors and asks users to check them themselves.",
    },
    sources: [{ label: "CODH: みを（miwo）とは？", url: "https://codh.rois.ac.jp/miwo/about/" }],
  },
  {
    id: "2021-fsa-model-risk-principles",
    date: "2021-11-12",
    precision: "day",
    title: { ja: "金融庁が「モデル・リスク管理に関する原則」を公表", en: "Japan's FSA Publishes Principles for Model Risk Management" },
    summary: {
      ja: "推定値や予測値、スコアなどを出す「モデル」の誤りや不適切な使用による悪影響をモデル・リスクとして管理するための8つの原則。モデルは引当、マネロン対策、不正検知、アルゴリズム取引などにも広がり、機械学習や人工知能の手法を使うものも多いとした。本邦のG-SIBsやD-SIBsなどが対象。",
      en: "Eight principles for managing model risk: adverse effects from errors in, or misuse of, models that output estimates, predictions, scores, and the like. The FSA noted that models have spread to provisioning, anti-money laundering, fraud detection, algorithmic trading, and more, many using machine learning and AI techniques. They apply to Japan's G-SIBs, D-SIBs, and certain others.",
    },
    sources: [{ label: "金融庁: モデル・リスク管理に関する原則（2021年11月12日）", url: "https://www.fsa.go.jp/common/law/ginkou/pdf_02.pdf" }],
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
    id: "2022-jglue",
    date: "2022-06-01",
    precision: "month",
    title: { ja: "日本語のベンチマーク「JGLUE」を発表", en: "JGLUE, a Japanese Language Benchmark, Is Presented" },
    summary: {
      ja: "日本語の言語理解の力を測るベンチマークJGLUEが、国際会議LRECで発表された。英語のテストを訳すのではなく、日本語で一から作られた。",
      en: "JGLUE, a benchmark for measuring language understanding in Japanese, was presented at the LREC conference. Rather than translating an English test, it was built from scratch in Japanese.",
    },
    sources: [
      { label: "Kurihara et al.: JGLUE: Japanese General Language Understanding Evaluation（LREC 2022）", url: "https://aclanthology.org/2022.lrec-1.317/" },
    ],
  },
  {
    id: "2022-semi-automated-offside",
    date: "2022-07-01",
    precision: "day",
    title: {
      ja: "FIFA、ワールドカップで半自動オフサイドテクノロジーの使用を発表",
      en: "FIFA Announces Semi-Automated Offside Technology for the World Cup",
    },
    summary: {
      ja: "2022年のワールドカップ（カタール大会）で、12台のカメラとボールの中のセンサーの追跡データにAIを適用し、オフサイドの可能性を映像室の審判員に自動で警告するしくみを使うと発表した。審判員が確かめてから主審に伝え、判定に使ったデータから3Dアニメーションを作って観客に示す。",
      en: "FIFA announced that the 2022 World Cup in Qatar would use a system that applies AI to tracking data from 12 cameras and a sensor inside the ball to automatically alert video match officials to possible offsides. Officials check the alert before informing the referee, and the same data becomes a 3D animation for spectators.",
    },
    sources: [
      {
        label: "FIFA: Semi-automated offside technology to be used at FIFA World Cup 2022（2022-07-01）",
        url: "https://inside.fifa.com/innovation/media-releases/semi-automated-offside-technology-to-be-used-at-fifa-world-cup-2022-tm",
      },
    ],
  },
  {
    id: "2022-nacsj-nikon-camera-trap-app",
    date: "2022-07-13",
    precision: "day",
    title: { ja: "日本自然保護協会とニコン、センサーカメラの写真から動物を見つけるアプリを発表", en: "NACS-J and Nikon Announce an App That Finds Animals in Sensor-Camera Photos" },
    summary: {
      ja: "群馬県みなかみ町「赤谷の森」の動物の写真で開発した。2021年4月からの実証実験で、「動物が写っていない」と判別した写真の検出精度は99.6%となり、3万枚の写真の確認と整理にかかる作業が1週間から2日に短くなった。",
      en: "Developed with photos of animals in the Akaya Forest in Minakami, Gunma Prefecture, the app reached 99.6% detection accuracy for photos it judged to contain no animal in a trial from April 2021, cutting the work of checking and sorting 30,000 photos from a week to two days.",
    },
    sources: [
      { label: "日本自然保護協会: AIを使った動物画像の自動検出アプリでモニタリング調査の大幅な労力削減が実現（2022-07-13）", url: "https://www.nacsj.or.jp/media/2022/07/31218/" },
    ],
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
    id: "2022-pixiv-ai-generated-setting",
    date: "2022-10-31",
    precision: "day",
    title: { ja: "pixivがAI生成作品の設定を導入", en: "pixiv Introduces the AI-Generated Work Setting" },
    summary: {
      ja: "イラスト投稿サイトpixivが、投稿時にAI生成作品であることを示す設定と、閲覧者がAI生成作品の表示を減らせる設定をリリースし、AI生成作品だけを分けたランキングも11月から順次提供するとした。AI生成作品は「制作過程のすべて、もしくはほとんどをAIによって生成された作品」と定義された。",
      en: "The illustration site pixiv released an upload setting marking a work as AI-generated and a viewer setting to see fewer such works, and said a separate ranking for them would roll out from November. It defined AI-generated works as those whose creation process was entirely or mostly generated by AI.",
    },
    sources: [
      { label: "pixiv: AI生成作品の取り扱いに関する機能をリリースしました（2022-10-31）", url: "https://www.pixiv.net/info.php?id=8733" },
    ],
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
    id: "2022-japan-drone-level4",
    date: "2022-12-05",
    precision: "day",
    title: { ja: "ドローンのレベル4飛行の制度が始まる", en: "Japan Launches the System for Level 4 Drone Flights" },
    summary: {
      ja: "改正航空法により、無人航空機の機体認証、操縦ライセンス、運航のルールの制度が始まり、人のいる地域の上空を補助者なしで目視外で飛ばすレベル4飛行ができるようになった。2023年3月17日には日本郵便に初めての許可・承認が出た。",
      en: "Under the amended Civil Aeronautics Act, aircraft certification, pilot licensing, and operating rules for unmanned aircraft took effect, making Level 4 flight — beyond visual line of sight over populated areas without assistants — possible. The first permission and approval went to Japan Post on March 17, 2023.",
    },
    sources: [
      { label: "国土交通省: 無人航空機レベル4飛行ポータルサイト", url: "https://www.mlit.go.jp/koku/level4/" },
      { label: "国土交通省: 無人航空機のレベル4飛行初実施のために飛行の許可・承認を行いました！（2023年3月17日）", url: "https://www.mlit.go.jp/report/press/kouku10_hh_000231.html" },
    ],
  },
  {
    id: "2022-ndl-full-text-search",
    date: "2022-12-21",
    precision: "day",
    title: {
      ja: "国立国会図書館デジタルコレクションがリニューアル、約247万点を全文検索可能に",
      en: "The NDL Digital Collections Renews, Making About 2.47 Million Items Full-Text Searchable",
    },
    summary: {
      ja: "国立国会図書館が、機械学習で改良したOCRで作ったテキストを使い、全文検索できるデジタル化資料を5万点から約247万点に増やした。全文検索の対象は2024年12月に300万点を超えた。OCRのテキストは校正していないため、誤認識がありうる。",
      en: "Using text produced with OCR improved by machine learning, Japan's National Diet Library expanded the digitized materials searchable by full text from 50,000 to about 2.47 million. Coverage passed 3 million items in December 2024. The OCR text has not been proofread, so misrecognitions are possible.",
    },
    sources: [
      {
        label: "カレントアウェアネス・ポータル（国立国会図書館）: 「国立国会図書館デジタルコレクション」をリニューアル（2022-12-21）",
        url: "https://current.ndl.go.jp/car/168581",
      },
      {
        label: "カレントアウェアネス・ポータル（国立国会図書館）: デジタルコレクションの全文検索対象資料が300万点を突破（2025-01-07）",
        url: "https://current.ndl.go.jp/car/238190",
      },
    ],
  },
  {
    id: "2023-jleague-3d-offside-lines",
    date: "2023-02-01",
    precision: "month",
    title: { ja: "Jリーグ、VARの3Dオフサイドラインを導入", en: "J.League Adopts 3D Offside Lines for VAR" },
    summary: {
      ja: "2023年シーズンから、J1の全試合などの320試合で、VARのオフサイドの確認に3Dラインを使うことになった。2Dラインより正確になる一方、作業の工程が増えて判定までの時間は長くなると見込まれ、公開されたシミュレーションでは確定までにおよそ1分30秒かかった。",
      en: "From the 2023 season, VAR offside checks in 320 matches, including all J1 matches, were to use 3D lines. They were expected to be more accurate than 2D lines but to take longer because of extra steps; in a simulation shown to the press, confirming an offside took about 1 minute 30 seconds.",
    },
    sources: [
      {
        label: "Jリーグ: 「3Dオフサイドライン導入」でより正確な判定の実現へ「第1回JFAレフェリーブリーフィング」レポート（2023-02-01）",
        url: "https://www.jleague.jp/news/article/24545/",
      },
    ],
  },
  {
    id: "2023-clarkesworld-closes-submissions",
    date: "2023-02-20",
    precision: "day",
    title: {
      ja: "SF誌ClarkesworldがAI生成の投稿の急増で受付を停止",
      en: "Clarkesworld Closes Submissions Over a Flood of AI-Written Stories",
    },
    summary: {
      ja: "米国のSF誌Clarkesworldの編集長ニール・クラークが、チャットボットの登場後に機械が書いた投稿が急増し、2月は投稿禁止の措置に至ったスパム投稿の割合が38%に達したとブログで報告。2月20日に投稿の受付を一時停止した。同誌はAIで書かれた作品もAIに補助された作品も受け付けていない。",
      en: "Editor Neil Clarke of the US science-fiction magazine Clarkesworld reported that machine-written submissions had surged after chatbots appeared, with spam submissions resulting in bans reaching 38% in February; on February 20 the magazine temporarily closed submissions. It accepts neither AI-written nor AI-assisted work.",
    },
    sources: [
      { label: "Neil Clarke: A Concerning Trend（2023-02-15、2023-02-20 更新）", url: "https://neil-clarke.com/a-concerning-trend/" },
      { label: "Clarkesworld Magazine: Submission Guidelines", url: "https://clarkesworldmagazine.com/submissions/" },
    ],
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
    id: "2023-japan-level4-permit-system",
    date: "2023-04-01",
    precision: "day",
    title: { ja: "レベル4の「特定自動運行」と配送ロボットのルールが施行", en: "Japan's Rules for Level 4 Operation and Delivery Robots Take Effect" },
    summary: {
      ja: "改正道路交通法が施行され、運転者のいないレベル4相当の自動運転（特定自動運行）が都道府県公安委員会の許可制で認められた。同じ日から、自動配送ロボットなどを「遠隔操作型小型車」として歩行者と同じルールで扱う規定も施行された。",
      en: "The amended Road Traffic Act took effect, allowing driverless automated driving equivalent to Level 4 (specified automated operation) under permits from prefectural public safety commissions. From the same day, delivery robots and similar machines were treated as remotely operated small vehicles under pedestrian rules.",
    },
    sources: [
      { label: "警察庁: 令和7年版 警察白書 — ITSの推進と自動運転の実現に向けた取組", url: "https://www.npa.go.jp/hakusyo/r07/honbun/html/bb5545000.html" },
      { label: "警察庁: 令和5年版 警察白書 — 新たなモビリティや自転車の良好な交通秩序の実現", url: "https://www.npa.go.jp/hakusyo/r05/honbun/html/zt300000.html" },
    ],
  },
  {
    id: "2023-llm-jp",
    date: "2023-05-01",
    precision: "month",
    title: { ja: "国立情報学研究所がLLM-jpを立ち上げ", en: "Japan's National Institute of Informatics Launches LLM-jp" },
    summary: {
      ja: "趣旨に賛同すれば誰でも参加できる、オープンで日本語に強いLLMを作るプロジェクトとして始まった。モデル・データ・ツール・技術資料を、議論の過程や失敗も含めて公開している。",
      en: "LLM-jp began as a project, open to anyone who shares its aims, to build open LLMs that are strong in Japanese. It publishes models, data, tools, and technical documents, including the discussions along the way and the failures.",
    },
    sources: [
      { label: "国立情報学研究所 大規模言語モデル研究開発センター: Summary", url: "https://llmc.nii.ac.jp/overview/" },
    ],
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
    id: "2023-tokenizer-unfairness",
    date: "2023-05-17",
    precision: "day",
    title: { ja: "言語によるトークン数の差を調べた研究が公開", en: "Study Shows Tokenizers Treat Languages Unequally" },
    summary: {
      ja: "同じ内容でも、言語によってトークン数が最大15倍違うことを示した研究（Petrovら、NeurIPS 2023で発表）が公開された。日本語は英語に対し、ChatGPTとGPT-4のトークナイザーで2.30倍だった。",
      en: "A study by Petrov and colleagues (later presented at NeurIPS 2023) showed that the same content can take up to 15 times as many tokens in some languages as in others. Japanese took 2.30 times as many tokens as English with the tokenizer used by ChatGPT and GPT-4.",
    },
    sources: [
      { label: "Petrov et al.: Language Model Tokenizers Introduce Unfairness Between Languages（arXiv:2305.15425）", url: "https://arxiv.org/pdf/2305.15425" },
    ],
  },
  {
    id: "2023-eiheiji-level4-service",
    date: "2023-05-21",
    precision: "day",
    title: { ja: "全国初のレベル4の自動運転移動サービスが福井県永平寺町で開始", en: "Japan's First Level 4 Automated Mobility Service Starts in Eiheiji" },
    summary: {
      ja: "運転者を置かないレベル4の自動運転移動サービスが、全国で初めて福井県永平寺町で始まった。約2kmの区間を、道路に敷いた電磁誘導線をたどって時速12kmで走る。車両の認可（3月30日）、旅客運送の登録（5月2日）、福井県公安委員会の許可（5月11日）を経て開始した。",
      en: "Japan's first Level 4 automated mobility service with no driver began in Eiheiji, Fukui, running about 2 km at 12 km/h along an electromagnetic guide wire in the road. It followed vehicle certification (March 30), passenger-transport registration (May 2), and a permit from the Fukui Prefectural Public Safety Commission (May 11).",
    },
    sources: [{ label: "国土交通省: 国内初！運転者を配置しないレベル４での自動運転移動サービスの開始について（2023年5月12日）", url: "https://www.mlit.go.jp/report/press/jidosha07_hh_000448.html" }],
  },
  {
    id: "2023-logistics-policy-package",
    date: "2023-06-02",
    precision: "day",
    title: { ja: "「物流革新に向けた政策パッケージ」を決定", en: "Japan Adopts a Policy Package for Logistics Innovation" },
    summary: {
      ja: "政府の関係閣僚会議が、商慣行の見直し、物流の効率化、荷主・消費者の行動変容を柱とする政策パッケージを決めた。自動倉庫や無人の荷役機器の導入、自動運転トラックのためのレーン、ドローン航路、AIを使った配船計画などを盛り込んだ。",
      en: "A ministerial council adopted a policy package built on reviewing business practices, making logistics more efficient, and changing the behavior of shippers and consumers. It included automated warehouses and unmanned loading equipment, lanes for automated trucks, drone routes, and AI-generated ship allocation plans.",
    },
    sources: [
      { label: "内閣官房: 物流革新に向けた政策パッケージ（2023年6月2日）", url: "https://www.cas.go.jp/jp/seisaku/buturyu_kakushin/pdf/seisaku_package.pdf" },
    ],
  },
  {
    id: "2023-wimbledon-ai-commentary",
    date: "2023-06-21",
    precision: "day",
    title: {
      ja: "IBMとウィンブルドン、ハイライト動画に生成AIの解説を導入",
      en: "IBM and Wimbledon Bring Generative AI Commentary to Highlight Videos",
    },
    summary: {
      ja: "IBMの生成AI（watsonx）で、2023年のウィンブルドンのすべてのハイライト動画に音声の解説と字幕をつけると発表した。人の実況があるショーコート以外の試合にも解説を届ける一歩と位置づけられた。",
      en: "IBM and the All England Club announced that IBM's generative AI (watsonx) would add audio commentary and captions to all highlight videos at Wimbledon 2023, as a step toward commentary for matches outside the Show Courts, which already have human commentary.",
    },
    sources: [
      {
        label: "IBM: IBM Brings Generative AI Commentary and AI Draw Analysis to the Wimbledon Digital Experience（2023-06-21）",
        url: "https://newsroom.ibm.com/2023-06-21-IBM-Brings-Generative-AI-Commentary-and-AI-Draw-Analysis-to-the-Wimbledon-Digital-Experience",
      },
    ],
  },
  {
    id: "2023-mata-v-avianca",
    date: "2023-06-22",
    precision: "day",
    title: {
      ja: "実在しない判例の提出で弁護士に制裁（Mata対Avianca事件）",
      en: "Lawyers Sanctioned for Filing Fake AI-Generated Precedents (Mata v. Avianca)",
    },
    summary: {
      ja: "ニューヨーク南部地区連邦地方裁判所が、ChatGPTが作った実在しない判例を偽の引用つきで提出し、裁判所に存在を疑われたあともそれを支持し続けた弁護士2人と法律事務所に、計5,000ドルの制裁金などを命じた。判決は、信頼できるAIツールを補助に使うこと自体は不適切ではないが、提出書類の正確さを確かめる門番の役割は弁護士にあるとした。",
      en: "The US District Court for the Southern District of New York imposed sanctions, including a $5,000 penalty, on two lawyers and their firm for submitting non-existent judicial opinions with fake quotes and citations created by ChatGPT, then standing by them after the court questioned their existence. The opinion said there is nothing inherently improper about using a reliable AI tool for assistance, but that existing rules impose a gatekeeping role on attorneys to ensure the accuracy of their filings.",
    },
    sources: [
      {
        label: "Mata v. Avianca, Inc., No. 22-cv-1461 (PKC) (S.D.N.Y. June 22, 2023): Opinion and Order on Sanctions (CourtListener)",
        url: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.575368/gov.uscourts.nysd.575368.54.0.pdf",
      },
    ],
  },
  {
    id: "2023-jma-ai-research-results",
    date: "2023-06-30",
    precision: "day",
    title: {
      ja: "気象庁と理研AIP、AIによる降水量予測の改善などの成果を公表",
      en: "JMA and RIKEN AIP Report Results Including AI-Improved Rainfall Forecasts",
    },
    summary: {
      ja: "共同研究の成果として、複数の数値予報モデルに基づくガイダンスをAIで組み合わせる「統合型ガイダンス」（仮称）による降水量予測の改善、深層学習で全国1kmメッシュの現在の気温を推定する技術、水蒸気ライダーのノイズ除去、衛星画像を使う台風の急発達予測のプロトタイプを公表した。気象庁は実用化を目指して技術開発を進めるとした。",
      en: "The joint research reported results including better rainfall forecasts from an \"integrated guidance\" (working name) that uses AI to combine guidance based on several numerical prediction models, a deep-learning technique for estimating current temperatures on a 1 km mesh across Japan, noise removal for water vapor lidar data, and a prototype that uses satellite images to predict rapid typhoon intensification. JMA said it would continue development toward practical use.",
    },
    sources: [
      {
        label: "気象庁: 気象観測・予測へのAI技術の活用に向けた共同研究の成果について（2023-06-30）",
        url: "https://www.jma.go.jp/jma/press/2306/30b/20230630_ai.pdf",
      },
    ],
  },
  {
    id: "2023-llama2",
    date: "2023-07-18",
    precision: "day",
    title: { ja: "MetaがLlama 2を公開", en: "Meta Releases Llama 2" },
    summary: {
      ja: "Metaが、商用利用もできるオープンなモデルLlama 2を論文とともに公開した。論文の表では、事前学習データの文書のうち英語が89.70%、日本語は0.10%で、英語以外での性能は不安定だとしていた。",
      en: "Meta released Llama 2, an open model that also allows commercial use, together with a paper. A table in the paper showed 89.70% of pre-training documents in English and 0.10% in Japanese, and the paper called its performance in other languages fragile.",
    },
    sources: [
      { label: "Touvron et al.: Llama 2: Open Foundation and Fine-Tuned Chat Models（arXiv:2307.09288）", url: "https://arxiv.org/pdf/2307.09288" },
    ],
  },
  {
    id: "2023-rt2",
    date: "2023-07-28",
    precision: "day",
    title: { ja: "ロボットを言葉で動かすVLAモデルRT-2", en: "RT-2, a Vision-Language-Action Model for Robots" },
    summary: {
      ja: "Google DeepMindが、ウェブの規模のデータで学んだ視覚・言語のモデルをロボットのデータでも学習させ、動作をトークンとして出力する視覚・言語・行動（VLA）モデルRT-2を発表。6,000回を超える試行で、ロボットのデータになかった物や状況への汎化が従来の3倍を超えたとした。",
      en: "Google DeepMind introduced RT-2, a vision-language-action (VLA) model that trains a web-pretrained vision-language model on robot data as well and outputs actions as tokens. Across more than 6,000 trials, it reported more than three times the generalization of earlier models to objects and situations absent from the robot data.",
    },
    sources: [{ label: "Google DeepMind: RT-2 — New model translates vision and language into action（2023-07-28）", url: "https://deepmind.google/blog/rt-2-new-model-translates-vision-and-language-into-action/" }],
  },
  {
    id: "2023-moj-ai-contract-review-guideline",
    date: "2023-08-01",
    precision: "month",
    title: {
      ja: "法務省がAI契約書審査サービスと弁護士法72条のガイドラインを公表",
      en: "Japan's Justice Ministry Issues a Guideline on AI Contract Review and Article 72",
    },
    summary: {
      ja: "法務省大臣官房司法法制部が「AI等を用いた契約書等関連業務支援サービスの提供と弁護士法第72条との関係について」を公表。非弁行為に当たるかは個別の事実関係で判断されるとしたうえで、「報酬を得る目的」「事件性」「法律事務」の要件ごとに、通常は同条に違反しないと考えられる例を示した。",
      en: "The Ministry of Justice published a guideline on how services that use AI to help draft, review, and manage contracts relate to Article 72 of the Attorney Act. While stressing that each case turns on its facts, it gave examples that would normally not violate the article for each element: compensation, \"case-ness,\" and legal affairs.",
    },
    sources: [
      {
        label: "法務省: 弁護士法（その他）— AI等を用いた契約書等関連業務支援サービスの提供と弁護士法第72条との関係について（令和5年8月）",
        url: "https://www.moj.go.jp/housei/shihouseido/housei10_00134.html",
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
    id: "2023-kdp-ai-disclosure",
    date: "2023-09-07",
    precision: "day",
    title: { ja: "Amazon KDPがAI生成コンテンツの申告を義務化", en: "Amazon KDP Requires Disclosure of AI-Generated Content" },
    summary: {
      ja: "Amazonが、Kindle ダイレクト・パブリッシングで本を出版・改訂するときに、本文・画像・翻訳のAI生成コンテンツをAmazonに申告するよう求める方針を導入した。自分で作った内容をAIで編集・推敲したAI支援は申告の対象外。米国の作家団体Authors Guildは同日、歓迎しつつ、読者への表示はまだないと述べた。",
      en: "Amazon began requiring Kindle Direct Publishing authors to tell Amazon about AI-generated text, images, or translations when publishing or republishing a book; AI-assisted editing of one's own content is exempt. The Authors Guild welcomed the step the same day while noting that the disclosure is not yet shown to readers.",
    },
    sources: [
      {
        label: "Amazon KDP: Content Guidelines — Artificial intelligence (AI) content",
        url: "https://kdp.amazon.com/en_US/help/topic/G200672390",
      },
      {
        label: "The Authors Guild: Amazon's New Disclosure Policy for AI-Generated Book Content Is a Welcome First Step (2023-09-07)",
        url: "https://authorsguild.org/news/amazons-new-disclosure-policy-for-ai-generated-book-content-is-a-welcome-first-step/",
      },
    ],
  },
  {
    id: "2023-gymnastics-jss-all-apparatus",
    date: "2023-09-30",
    precision: "day",
    title: {
      ja: "体操の採点支援システム、全10種目で利用開始",
      en: "Gymnastics Judging Support System Extends to All 10 Apparatus",
    },
    summary: {
      ja: "第52回世界体操競技選手権大会で、国際体操連盟と富士通の採点支援システムが全10種目に適用された。センサー方式をカメラ映像の画像分析に置き換え、AIが技を自動で判定して、関節の角度などの数値で審判の正確な判定を支援する。",
      en: "At the 52nd World Gymnastics Championships, the International Gymnastics Federation and Fujitsu's judging support system was applied to all 10 apparatus. Sensors were replaced with image analysis of camera footage, and AI identifies skills automatically, supporting judges with numbers such as joint angles.",
    },
    sources: [
      {
        label: "富士通: 国際体操連盟、富士通のJudging Support Systemを全10種目で利用開始（2023-10-05）",
        url: "https://info.archives.global.fujitsu/jp/news/2023/10/5-1.html",
      },
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
    id: "2023-california-suspends-cruise",
    date: "2023-10-24",
    precision: "day",
    title: { ja: "カリフォルニア州がCruiseの無人運行の許可を停止", en: "California Suspends Cruise's Driverless Permits" },
    summary: {
      ja: "カリフォルニア州車両管理局が、GM傘下のCruiseの無人での運行と無人の試験走行の許可を即日停止した。車の性能から公道での運行が安全でないと判断したことや、安全に関する情報を偽ったことなどを理由に挙げた。",
      en: "The California DMV suspended, effective immediately, the driverless deployment and testing permits of Cruise, a GM company, citing among other reasons that the vehicles were not safe for public operation based on their performance and that the company had misrepresented safety information.",
    },
    sources: [{ label: "California DMV: DMV Statement on Cruise LLC Suspension（2023-10-24）", url: "https://www.dmv.ca.gov/portal/news-and-media/dmv-statement-on-cruise-llc-suspension/" }],
  },
  {
    id: "2023-graphcast",
    date: "2023-11-14",
    precision: "day",
    title: { ja: "機械学習の天気予報モデルGraphCastがScience誌に掲載", en: "GraphCast Machine-Learning Weather Model Published in Science" },
    summary: {
      ja: "Google DeepMindが、ECMWFの再解析データERA5の約40年分で学習した天気予報モデルGraphCastを発表。10日先までの予報を1台のTPU v4で1分かからずに出し、評価した1,380の変数と予報時間の組み合わせの90%以上でECMWFのHRESより正確だったとした。",
      en: "Google DeepMind introduced GraphCast, a weather model trained on about four decades of ECMWF's ERA5 reanalysis data. It makes a 10-day forecast in under a minute on a single TPU v4 and was more accurate than ECMWF's HRES on more than 90% of the 1,380 variable and lead-time combinations evaluated.",
    },
    sources: [
      {
        label: "Google DeepMind: GraphCast — AI model for faster and more accurate global weather forecasting（2023-11-14）",
        url: "https://deepmind.google/blog/graphcast-ai-model-for-faster-and-more-accurate-global-weather-forecasting/",
      },
    ],
  },
  {
    id: "2024-noto-earthquake-misinformation",
    date: "2024-01-02",
    precision: "day",
    title: {
      ja: "能登半島地震の偽・誤情報に、総務省がSNS事業者へ対応を要請",
      en: "After the Noto Peninsula Earthquake, Japan's Communications Ministry Asks Platforms to Act on False Information",
    },
    summary: {
      ja: "能登半島地震の翌日、総務省がSNSの公式アカウントで偽・誤情報への注意を呼びかけ、主要なSNSなどの事業者4社に利用規約などに沿った適正な対応を求めた。Xによると、地震を「人工地震」とする言葉を含む投稿は約10万件にのぼった。",
      en: "The day after the Noto Peninsula earthquake, Japan's Ministry of Internal Affairs and Communications warned about false information on its official social media accounts and asked four major platforms to respond appropriately under their terms of use. According to X, posts containing words calling it a \"man-made earthquake\" numbered about 100,000.",
    },
    sources: [
      {
        label: "総務省: 令和6年版 情報通信白書 コラム「災害時における偽・誤情報への対応」",
        url: "https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/r06/html/nd122c00.html",
      },
    ],
  },
  {
    id: "2024-alphageometry",
    date: "2024-01-17",
    precision: "day",
    title: { ja: "幾何の問題を解くAlphaGeometryがNature誌に掲載", en: "AlphaGeometry, a Geometry-Solving AI, Published in Nature" },
    summary: {
      ja: "Google DeepMindが、言語モデルと記号的な演繹エンジンを組み合わせたAlphaGeometryを発表。過去のオリンピックの幾何問題30問のうち25問を制限時間内に解き、それまでの最高は10問、人間の金メダリストの平均は25.9問だったとした。",
      en: "Google DeepMind introduced AlphaGeometry, combining a language model with a symbolic deduction engine. It solved 25 of 30 Olympiad geometry problems within the time limit, against 10 for the previous state of the art and an average of 25.9 for human gold medalists.",
    },
    sources: [
      {
        label: "Google DeepMind: AlphaGeometry — An Olympiad-level AI system for geometry（2024-01-17）",
        url: "https://deepmind.google/blog/alphageometry-an-olympiad-level-ai-system-for-geometry/",
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
    id: "2024-sec-ai-investment-fraud-alert",
    date: "2024-01-25",
    precision: "day",
    title: { ja: "米SEC・NASAA・FINRAがAIをうたう投資詐欺の注意喚起", en: "US Regulators Warn of AI-Themed Investment Fraud" },
    summary: {
      ja: "米国の証券取引委員会（SEC）、北米証券監督官協会（NASAA）、金融取引業規制機構（FINRA）が、AIなどの新技術をうたう投資詐欺の増加を受けて、共同で投資家向けの注意喚起を公表。「当社独自のAI取引システムは負けません！」のような主張をする無登録のプラットフォームや、AIで作った音声・画像・動画によるなりすましに注意を促し、登録の確認を勧めた。",
      en: "The SEC, NASAA, and FINRA jointly issued an investor alert on the rise of investment fraud invoking AI and other emerging technologies, warning of unregistered platforms making claims like \"Our proprietary AI trading system can't lose!\" and of impersonation using AI-cloned voices, images, and videos, and advising investors to check registration.",
    },
    sources: [
      {
        label: "FINRA / SEC / NASAA: Investor Alert — Artificial Intelligence (AI) and Investment Fraud (2024-01-25)",
        url: "https://www.finra.org/investors/insights/artificial-intelligence-and-investment-fraud",
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
    id: "2024-youtube-synthetic-content-disclosure",
    date: "2024-03-18",
    precision: "day",
    title: { ja: "YouTubeが改変・合成コンテンツの開示を義務化", en: "YouTube Requires Disclosure of Altered or Synthetic Content" },
    summary: {
      ja: "YouTubeが、視聴者が本物の人物・場所・場面・出来事と思い込みそうなリアルな内容を改変・合成で作ったときに、投稿者に開示を求める仕組みを導入した。表示は多くの動画で説明欄に、健康・ニュース・選挙・金融など繊細な話題では動画上に目立つ形で出る。",
      en: "YouTube introduced a requirement that creators disclose realistic content — content viewers could mistake for a real person, place, scene, or event — made with altered or synthetic media. The label appears in the expanded description for most videos, and more prominently on the video itself for sensitive topics such as health, news, elections, or finance.",
    },
    sources: [
      {
        label: "YouTube Official Blog: How we're helping creators disclose altered or synthetic content（2024-03-18）",
        url: "https://blog.youtube/news-and-events/disclosing-ai-generated-content/",
      },
    ],
  },
  {
    id: "2024-flood-forecasting-ungauged",
    date: "2024-03-20",
    precision: "day",
    title: {
      ja: "Google、観測所のない流域の洪水予測の研究をNature誌で発表",
      en: "Google Publishes Research in Nature on Flood Forecasting for Ungauged Watersheds",
    },
    summary: {
      ja: "世界の観測所のデータで1つのLSTMモデルを学ばせ、観測所のない流域に当てはめる研究。5日先までの予測の信頼性が、既存の代表的な全球洪水予測システムGloFASの当日の予測と平均で同等以上だったとした。洪水予報サービスFlood Hubでは、80か国超で最大7日先までの予測を出していた。",
      en: "The research trained one LSTM model on gauge data from around the world and applied it to watersheds without gauges. Its forecasts up to five days ahead were, on average, as reliable as or more reliable than the same-day forecasts of GloFAS, the leading existing global flood forecasting system. Google's Flood Hub service was providing forecasts up to seven days ahead in more than 80 countries.",
    },
    sources: [
      {
        label: "Google Research: Using AI to expand global access to reliable flood forecasts（2024-03-20）",
        url: "https://research.google/blog/using-ai-to-expand-global-access-to-reliable-flood-forecasts/",
      },
      {
        label: "arXiv: Nearing et al., AI Increases Global Access to Reliable Flood Forecasts（arXiv:2307.16104）",
        url: "https://arxiv.org/abs/2307.16104",
      },
    ],
  },
  {
    id: "2024-truck-driver-overtime-cap",
    date: "2024-04-01",
    precision: "month",
    title: { ja: "トラックドライバーの時間外労働に年960時間の上限（物流の2024年問題）", en: "A 960-Hour Annual Overtime Cap for Truck Drivers (the Logistics \"2024 Problem\")" },
    summary: {
      ja: "働き方改革関連法に基づき、自動車の運転業務の時間外労働に年960時間（休日労働を含まない）の上限がかかった。国の試算では、具体的な対応をしなければ輸送能力が2024年度に約14%、2030年度に約34%不足する可能性がある。",
      en: "Under Japan's work-style reform legislation, a cap of 960 hours a year (excluding work on days off) on overtime for driving work took effect. A government estimate says that without concrete action, carrying capacity could fall about 14% short in fiscal 2024 and about 34% short in fiscal 2030.",
    },
    sources: [
      { label: "国土交通省: 物流の2024年問題について", url: "https://www.mlit.go.jp/policy/shingikai/content/001620626.pdf" },
    ],
  },
  {
    id: "2024-many-shot-jailbreaking",
    date: "2024-04-02",
    precision: "day",
    title: { ja: "Anthropicが「メニーショット・ジェイルブレイク」を公表", en: "Anthropic Publishes Research on Many-Shot Jailbreaking" },
    summary: {
      ja: "1つのプロンプトに偽の対話を大量に並べて、安全対策をすり抜けさせる手口の研究を公表した。広がったコンテキストウィンドウを逆手に取るもので、公表前に他のAI開発者にも知らせ、自社では対策を入れた。",
      en: "Anthropic published research on a technique that gets a model past its safeguards by packing a single prompt with many fake dialogues, exploiting ever-larger context windows. It briefed other AI developers before publishing and put mitigations in place.",
    },
    sources: [
      { label: "Anthropic: Many-shot jailbreaking（2024-04-02）", url: "https://www.anthropic.com/research/many-shot-jailbreaking" },
    ],
  },
  {
    id: "2024-i-construction-2",
    date: "2024-04-16",
    precision: "day",
    title: { ja: "国土交通省が「i-Construction 2.0」を策定", en: "Japan's MLIT Adopts i-Construction 2.0" },
    summary: {
      ja: "2040年度までに建設現場の省人化を少なくとも3割（生産性1.5倍）にすることを目指し、施工・データ連携・施工管理のオートメーション化を3本の柱とした。AIなどで作った施工計画に基づき、1人のオペレーターが複数の建設機械を管理する姿を描く。",
      en: "Aiming to cut the labor needed on construction sites by at least 30% (1.5 times the productivity) by fiscal 2040, it set three pillars — automating construction work, data integration, and construction management — envisioning one operator managing several machines according to plans generated with AI and other tools.",
    },
    sources: [
      { label: "国土交通省: 「i-Construction 2.0」を策定しました（2024-04-16）", url: "https://www.mlit.go.jp/report/press/kanbo08_hh_001085.html" },
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
    id: "2024-swallow-continual-pretraining",
    date: "2024-04-27",
    precision: "day",
    title: { ja: "日本語を追加で学ばせるSwallowの研究を公開", en: "Swallow Study on Teaching Japanese to an English-Trained Model" },
    summary: {
      ja: "Llama 2の語彙に日本語を足し、日本語の文章で追加の事前学習をしたSwallowの研究が公開された。日本語の課題の成績が大きく上がり、語彙を足したことで日本語のコーパスのトークン数は56.2%減った。",
      en: "A study on Swallow, which added Japanese to Llama 2's vocabulary and continued pre-training it on Japanese text, was published. Japanese task scores rose sharply, and the added vocabulary cut the token count of a Japanese corpus by 56.2%.",
    },
    sources: [
      { label: "Fujii et al.: Continual Pre-Training for Cross-Lingual LLM Adaptation: Enhancing Japanese Language Capabilities（arXiv:2404.17790）", url: "https://arxiv.org/pdf/2404.17790" },
    ],
  },
  {
    id: "2024-alphafold3",
    date: "2024-05-08",
    precision: "day",
    title: { ja: "AlphaFold 3発表 — DNA・RNA・小分子との結合も予測", en: "AlphaFold 3 Predicts Interactions with DNA, RNA, and Small Molecules" },
    summary: {
      ja: "Google DeepMindとIsomorphic Labsが、タンパク質に加えてDNA、RNA、リガンドなどの構造と結合を予測するAlphaFold 3を発表し、非営利の研究向けに無料のAlphaFold Serverを公開した。同年11月には学術目的でのコードと重みの提供を始めた。",
      en: "Google DeepMind and Isomorphic Labs announced AlphaFold 3, which predicts the structures and interactions of DNA, RNA, ligands, and more alongside proteins, and launched the free AlphaFold Server for non-commercial research. In November that year they released code and weights for academic use.",
    },
    sources: [
      {
        label: "Google: AlphaFold 3 predicts the structure and interactions of all of life's molecules（2024-05-08、2024-11-11 追記）",
        url: "https://blog.google/innovation-and-ai/products/google-deepmind-isomorphic-alphafold-3-ai-model/",
      },
    ],
  },
  {
    id: "2024-fugaku-llm",
    date: "2024-05-10",
    precision: "day",
    title: { ja: "「富岳」で学習したFugaku-LLMを公開", en: "Fugaku-LLM, Trained on the Fugaku Supercomputer, Is Released" },
    summary: {
      ja: "東京工業大学、東北大学、富士通、理化学研究所などのチームが、スーパーコンピュータ「富岳」のCPUで学習した130億パラメータの大規模言語モデルを公開した。ライセンスに従えば研究にも商業目的にも使える。",
      en: "A team from Tokyo Institute of Technology, Tohoku University, Fujitsu, RIKEN, and others released a 13-billion-parameter large language model trained on the CPUs of the Fugaku supercomputer. It can be used for research and commercial purposes under its license.",
    },
    sources: [
      { label: "理化学研究所: スーパーコンピュータ「富岳」で学習した大規模言語モデル「Fugaku-LLM」を公開（2024-05-10）", url: "https://www.riken.jp/pr/news/2024/20240510_2/" },
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
    id: "2024-uk-automated-vehicles-act",
    date: "2024-05-20",
    precision: "day",
    title: { ja: "英国で自動運転法が成立", en: "UK Automated Vehicles Act Receives Royal Assent" },
    summary: {
      ja: "英国で、道路などでの自動運転車の利用を規律する自動運転法（Automated Vehicles Act 2024）が成立した。自動運転車の認可の仕組みを定め、認可された機能が作動している間の「user-in-charge」は、車の走らせ方から生じる罪に原則として問われないとした。",
      en: "The UK's Automated Vehicles Act 2024, regulating the use of automated vehicles on roads and in other public places, received Royal Assent. It sets up authorization for automated vehicles and provides that a user-in-charge does not commit an offence arising from the way the vehicle is driven while an authorised feature is engaged, subject to exceptions.",
    },
    sources: [
      { label: "legislation.gov.uk: Automated Vehicles Act 2024（Introduction・2024-05-20）", url: "https://www.legislation.gov.uk/ukpga/2024/10/introduction/enacted" },
      { label: "legislation.gov.uk: Automated Vehicles Act 2024, section 47（User-in-charge not liable for manner of driving）", url: "https://www.legislation.gov.uk/ukpga/2024/10/section/47" },
    ],
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
    id: "2024-jbbq",
    date: "2024-06-04",
    precision: "day",
    title: { ja: "日本語の社会的な偏りを測るJBBQを公開", en: "JBBQ, a Benchmark for Social Bias in Japanese, Is Published" },
    summary: {
      ja: "英語のBBQをもとに、日本語の質問応答で社会的な偏りを測るデータセットが公開された。日本語のオープンなLLMでは、パラメータの多いモデルほど正答率が上がったが、偏りのスコアも上がった。",
      en: "A dataset for measuring social bias in Japanese question answering, built from the English benchmark BBQ, was published. Among open Japanese LLMs, larger models answered more accurately, but their bias scores also rose.",
    },
    sources: [
      { label: "Yanaka et al.: JBBQ: Japanese Bias Benchmark for Analyzing Social Biases in Large Language Models（arXiv:2406.02050）", url: "https://arxiv.org/abs/2406.02050" },
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
    id: "2024-labels-sue-suno-udio",
    date: "2024-06-24",
    precision: "day",
    title: { ja: "大手レコード会社がSunoとUdioを提訴", en: "Major Labels Sue Suno and Udio" },
    summary: {
      ja: "Sony Music Entertainment、UMG Recordings、Warner Recordsなどのレコード会社が、音楽生成サービスのSunoとUdioを、許諾なく録音物を複製して学習に使ったとして、それぞれマサチューセッツ州とニューヨーク州南部の連邦地方裁判所に提訴した。全米レコード協会（RIAA）が訴状を公開した。2025年にUMGはUdioと、WMGはSunoと提携している。",
      en: "Record companies including Sony Music Entertainment, UMG Recordings, and Warner Records sued the music generators Suno and Udio in federal courts in Massachusetts and the Southern District of New York, alleging that sound recordings were copied without permission to train the services. The RIAA published the complaints. In 2025 UMG partnered with Udio and WMG with Suno.",
    },
    sources: [
      {
        label: "RIAA: Record Companies Bring Landmark Cases for Responsible AI Against Suno and Udio（2024-06-24）",
        url: "https://www.riaa.com/news/record-companies-bring-landmark-cases-for-responsible-ai-againstsuno-and-udio-in-boston-and-new-york-federal-courts-respectively/",
      },
      {
        label: "RIAA: Complaint, UMG Recordings et al. v. Suno, Inc.（D. Mass.、2024-06-24）",
        url: "https://www.riaa.com/wp-content/uploads/2024/06/Suno-complaint-file-stamped20.pdf",
      },
    ],
  },
  {
    id: "2024-care-technology-priority-areas",
    date: "2024-06-28",
    precision: "day",
    title: { ja: "「介護テクノロジー利用の重点分野」に改訂", en: "Japan Revises Its Priority Areas as \"Care Technology\"" },
    summary: {
      ja: "厚生労働省と経済産業省が、介護ロボットの重点分野を改訂して名前を「介護テクノロジー利用の重点分野」に変え、機能訓練支援、食事・栄養管理支援、認知症生活支援・認知症ケア支援を加えて9分野16項目とした（2025年4月から運用）。",
      en: "Japan's health and industry ministries revised their priority areas for care robots, renamed them the \"priority areas for the use of care technology,\" and added functional training support, meal and nutrition management support, and dementia care support, for 9 areas and 16 items (in operation from April 2025).",
    },
    sources: [
      { label: "厚生労働省: 「ロボット技術の介護利用における重点分野」を改訂しました（2024-06-28）", url: "https://www.mhlw.go.jp/stf/juutenbunya_r6kaitei_00001.html" },
    ],
  },
  {
    id: "2024-care-worker-demand",
    date: "2024-07-12",
    precision: "day",
    title: { ja: "介護職員は2040年度に約272万人必要との推計", en: "Japan Estimates It Will Need About 2.72 Million Care Workers in Fiscal 2040" },
    summary: {
      ja: "厚生労働省が、都道府県の推計を集めた介護職員の必要数を公表した。2026年度に約240万人、2040年度に約272万人で、2022年度の約215万人よりそれぞれ約25万人、約57万人多い。",
      en: "Japan's Ministry of Health, Labour and Welfare published the number of care workers needed, based on prefectures' estimates: about 2.40 million in fiscal 2026 and about 2.72 million in fiscal 2040, about 250,000 and 570,000 more than the roughly 2.15 million of fiscal 2022.",
    },
    sources: [
      { label: "厚生労働省: 第9期介護保険事業計画に基づく介護職員の必要数について（2024-07-12）", url: "https://www.mhlw.go.jp/stf/newpage_41379.html" },
    ],
  },
  {
    id: "2024-imo-silver-alphaproof",
    date: "2024-07-25",
    precision: "day",
    title: { ja: "AIが数学オリンピックで銀メダル相当", en: "AI Reaches Silver-Medal Standard at the Math Olympiad" },
    summary: {
      ja: "Google DeepMindのAlphaProofとAlphaGeometry 2が、国際数学オリンピック2024の6問中4問を解き、42点満点中28点で銀メダル相当と発表。問題は人が形式言語に翻訳して与え、解くのに最長3日かかった。",
      en: "Google DeepMind's AlphaProof and AlphaGeometry 2 solved four of six problems from the 2024 International Mathematical Olympiad, scoring 28 of 42 — silver-medal standard. The problems were translated into formal language by hand, and solving took up to three days.",
    },
    sources: [
      {
        label: "Google DeepMind: AI achieves silver-medal standard solving International Mathematical Olympiad problems（2024-07-25）",
        url: "https://deepmind.google/blog/ai-solves-imo-problems-at-silver-medal-level/",
      },
    ],
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
    id: "2024-smart-agriculture-act",
    date: "2024-10-01",
    precision: "day",
    title: { ja: "スマート農業技術活用促進法が施行", en: "Japan's Smart Agriculture Technology Promotion Act Takes Effect" },
    summary: {
      ja: "2024年6月に成立した法律が施行された。スマート農業技術の活用とあわせて生産の方式を変える計画と、技術の開発・普及の計画の2つの認定制度を設け、認定を受けた農業者や事業者が金融などの支援を受けられるようにした。",
      en: "A law passed in June 2024 took effect, creating two certification schemes — for plans that use smart agriculture technology while changing production methods, and for plans to develop and spread such technology — so certified farmers and businesses can receive financial and other support.",
    },
    sources: [
      { label: "農林水産省: スマート農業技術活用促進法について", url: "https://www.maff.go.jp/j/kanbo/smart/houritsu.html" },
    ],
  },
  {
    id: "2024-nobel-physics",
    date: "2024-10-08",
    precision: "day",
    title: { ja: "ノーベル物理学賞にホップフィールドとヒントン", en: "Hopfield and Hinton Win the Nobel Prize in Physics" },
    summary: {
      ja: "スウェーデン王立科学アカデミーが、ジョン・ホップフィールドとジェフリー・ヒントンに、人工ニューラルネットワークによる機械学習を可能にした基礎的な発見と発明で、2024年のノーベル物理学賞を贈ると発表した。",
      en: "The Royal Swedish Academy of Sciences awarded the 2024 Nobel Prize in Physics to John J. Hopfield and Geoffrey Hinton for foundational discoveries and inventions that enable machine learning with artificial neural networks.",
    },
    sources: [
      { label: "NobelPrize.org: Press release — The Nobel Prize in Physics 2024（2024-10-08）", url: "https://www.nobelprize.org/prizes/physics/2024/press-release/" },
    ],
  },
  {
    id: "2024-nobel-chemistry",
    date: "2024-10-09",
    precision: "day",
    title: { ja: "ノーベル化学賞にタンパク質の設計と構造予測", en: "Protein Design and Structure Prediction Win the Nobel Prize in Chemistry" },
    summary: {
      ja: "2024年のノーベル化学賞は、半分が計算によるタンパク質設計のデイヴィッド・ベイカーに、もう半分がAlphaFold2によるタンパク質の構造予測のデミス・ハサビスとジョン・ジャンパーに贈られた。",
      en: "Half of the 2024 Nobel Prize in Chemistry went to David Baker for computational protein design, and half jointly to Demis Hassabis and John Jumper for protein structure prediction with AlphaFold2.",
    },
    sources: [
      { label: "NobelPrize.org: Press release — The Nobel Prize in Chemistry 2024（2024-10-09）", url: "https://www.nobelprize.org/prizes/chemistry/2024/press-release/" },
    ],
  },
  {
    id: "2024-world-athletics-online-abuse",
    date: "2024-10-31",
    precision: "day",
    title: {
      ja: "世界陸連、パリ五輪での選手へのSNSの中傷の調査を公表",
      en: "World Athletics Publishes Its Study of Online Abuse at the Paris Olympics",
    },
    summary: {
      ja: "AIのサービスThreat Matrixで1,917人の選手などのSNSを監視し、355,873件の投稿・コメントからAIが34,040件を人の確認に回して、809件が中傷と確認された。128件をプラットフォームに報告した。",
      en: "Using the AI service Threat Matrix to monitor the social media of 1,917 athletes and officials, the AI flagged 34,040 of 355,873 posts and comments for human review, and 809 were verified as abusive; 128 were reported to the platforms.",
    },
    sources: [
      {
        label: "World Athletics: World Athletics publishes findings of study into online abuse of athletes covering Paris Olympic Games（2024-10-31）",
        url: "https://worldathletics.org/news/press-releases/study-online-abuse-athletes-paris-2024-olympic-games",
      },
    ],
  },
  {
    id: "2024-big-sleep-sqlite",
    date: "2024-11-01",
    precision: "day",
    title: { ja: "AIエージェント「Big Sleep」がSQLiteの未知の脆弱性を発見", en: "Google's Big Sleep Agent Finds an Unknown Vulnerability in SQLite" },
    summary: {
      ja: "GoogleのProject ZeroとGoogle DeepMindが、AIエージェントが広く使われるデータベースエンジンSQLiteに悪用できる脆弱性を見つけたと発表した。正式版に入る前に修正された。チームは、広く使われる実際のソフトウェアで、AIエージェントが悪用できる未知のメモリ安全性の問題を見つけた初めての公開例だと考えている。",
      en: "Google Project Zero and Google DeepMind announced that their AI agent had found an exploitable vulnerability in SQLite, a widely used database engine; it was fixed before reaching an official release. The team believes it is the first public example of an AI agent finding a previously unknown, exploitable memory-safety issue in widely used real-world software.",
    },
    sources: [
      { label: "Google Project Zero: From Naptime to Big Sleep（2024-11-01）", url: "https://projectzero.google/2024/10/from-naptime-to-big-sleep.html" },
    ],
  },
  {
    id: "2024-flood-forecasting-100-countries",
    date: "2024-11-11",
    precision: "day",
    title: {
      ja: "Googleの洪水予測モデルが改良、Flood Hubは100か国超に",
      en: "Google Improves Its Flood Forecasting Model; Flood Hub Reaches Over 100 Countries",
    },
    summary: {
      ja: "改良したモデルは7日先の予測で以前の5日先と同じ精度になり、学習に使う観測所を5,680か所から15,980か所に増やした。Flood Hubで情報を届ける国は80か国から100か国超、人数は4億6,000万人から7億人に。品質を検証できていない予測地点は、専門家・研究者向けとして分けて示した。",
      en: "The improved model is as accurate seven days ahead as the previous one was five days ahead, and the gauges used for training rose from 5,680 to 15,980. Flood Hub's reach grew from 80 to over 100 countries and from 460 million to 700 million people. Forecast points whose quality could not be verified are offered separately for experts and researchers.",
    },
    sources: [
      {
        label: "Google Research: An improved flood forecasting AI model, trained and evaluated globally（2024-11-11）",
        url: "https://research.google/blog/a-flood-forecasting-ai-model-trained-and-evaluated-globally/",
      },
    ],
  },
  {
    id: "2024-fsb-ai-financial-stability",
    date: "2024-11-14",
    precision: "day",
    title: {
      ja: "金融安定理事会（FSB）、AIが金融の安定に与える影響の報告書を公表",
      en: "The FSB Reports on AI's Implications for Financial Stability",
    },
    summary: {
      ja: "外部の事業者への依存と集中、市場の連動、サイバー、モデル・リスクとデータの質・ガバナンスを、システミック・リスクを高めうるAIの弱点として挙げ、各国の当局に監視の強化や政策の枠組みの点検を求めた。G20に提出された。",
      en: "The report named dependence on and concentration of outside providers, market correlations, cyber, and model risk, data quality, and governance as AI-related vulnerabilities that could increase systemic risk, and called on authorities to step up monitoring and review their policy frameworks. It was submitted to the G20.",
    },
    sources: [
      {
        label: "FSB: The Financial Stability Implications of Artificial Intelligence（2024-11-14）",
        url: "https://www.fsb.org/2024/11/the-financial-stability-implications-of-artificial-intelligence/",
      },
    ],
  },
  {
    id: "2024-itchio-generative-ai-disclosure",
    date: "2024-11-20",
    precision: "day",
    title: { ja: "itch.ioが生成AI利用の申告タグを導入", en: "itch.io Introduces Generative AI Disclosure Tags" },
    summary: {
      ja: "インディーゲーム配信サイトitch.ioが、プロジェクトの編集画面に生成AIを使ったかの質問を設け、素材の販売者には回答を必須にした。「はい」ならAI Generatedのタグと、Graphics・Sound・Text & Dialog・Codeの区分タグが、「いいえ」ならNo AIのタグが付き、タグのないAI生成の素材は閲覧ページの索引から外される。",
      en: "The indie game marketplace itch.io added a question to the project editor asking whether generative AI was used, mandatory for asset creators. \"Yes\" applies an AI Generated tag with sub-tags for graphics, sound, text and dialog, or code; \"no\" applies a No AI tag; untagged AI-made assets are no longer indexed on the browse pages.",
    },
    sources: [
      { label: "itch.io: Generative AI Disclosure tagging（2024-11-20）", url: "https://itch.io/t/4309690/generative-ai-disclosure-tagging" },
    ],
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
    id: "2024-gm-ends-cruise-robotaxi",
    date: "2024-12-10",
    precision: "day",
    title: { ja: "GMがCruiseのロボタクシー開発への資金提供を終了", en: "GM Stops Funding Cruise's Robotaxi Development" },
    summary: {
      ja: "General Motorsが、事業を拡大するのに必要な時間と資源の大きさや競争の激しさを理由に、Cruiseのロボタクシー開発への資金提供をやめ、個人向けの車の自動運転・運転支援の開発に集中すると発表した。",
      en: "General Motors announced it would no longer fund Cruise's robotaxi development, citing the considerable time and resources needed to scale the business and an increasingly competitive market, and would focus on automated and assisted driving for personal vehicles.",
    },
    sources: [{ label: "GM: GM to refocus autonomous driving development on personal vehicles（2024-12-10）", url: "https://news.gm.com/home.detail.html/Pages/news/us/en/2024/dec/1210-gm.html" }],
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
    id: "2025-survivor-support-ai-plan",
    date: "2025-01-01",
    precision: "month",
    title: {
      ja: "被災者支援に生成AIを使う基盤の開発計画（文部科学省）",
      en: "Japan's Education Ministry Plans a Platform for Generative AI in Survivor Support",
    },
    summary: {
      ja: "能登半島地震の経験から、防災科学技術研究所を中心に、誤情報を取り除いた防災の情報を使う防災MRAGと生成AIを組み合わせ、個人情報を守りながら被災者一人ひとりに合わせた支援に使う基盤を開発する計画。2024〜2025年度にプロトタイプの開発と安全性の検証を目指す。",
      en: "Drawing on the Noto Peninsula earthquake, the plan has the National Research Institute for Earth Science and Disaster Resilience lead development of a platform that combines generative AI with a disaster MRAG built on information screened for misinformation, to support each survivor individually while protecting personal information. It targets a prototype and safety verification in fiscal 2024-2025.",
    },
    sources: [
      {
        label: "文部科学省: BRIDGE 令和6年度補正予算 研究開発等計画「個人情報・公的情報等を安全に活用可能な被災者支援AIサービス開発基盤」（2025年1月）",
        url: "https://www8.cao.go.jp/cstp/bridge/keikaku/r6-h02_bridge_r6.pdf",
      },
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
    id: "2025-gtig-adversarial-misuse",
    date: "2025-01-30",
    precision: "day",
    title: { ja: "Google、攻撃者による生成AIの悪用を分析", en: "Google Analyzes Attackers' Misuse of Generative AI" },
    summary: {
      ja: "GoogleのThreat Intelligence Group（GTIG）が、国家の支援を受けた攻撃者によるGeminiの使い方を分析した。下調べやコードの不具合の解決、文章作成で生産性は上がっているが、新しい能力を生んでいる兆しはないとまとめた。",
      en: "Google Threat Intelligence Group (GTIG) analyzed how government-backed attackers used Gemini, concluding that it made them more productive at research, troubleshooting code, and creating content, but showed no signs of giving them novel capabilities.",
    },
    sources: [
      { label: "Google Threat Intelligence Group: Adversarial Misuse of Generative AI（2025-01-30）", url: "https://cloud.google.com/blog/topics/threat-intelligence/adversarial-misuse-generative-ai" },
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
    id: "2025-constitutional-classifiers",
    date: "2025-02-03",
    precision: "day",
    title: { ja: "Anthropic、ジェイルブレイク対策「Constitutional Classifiers」を発表", en: "Anthropic Announces Constitutional Classifiers Against Jailbreaks" },
    summary: {
      ja: "入力と出力を見張る分類器で、自動評価ではジェイルブレイクの成功率を86%から4.4%に下げたと発表した。2月3日から10日までの公開デモでは、6日目と7日目に4人が全問を突破し、そのうち1人の方法が万能のジェイルブレイクと判断された。",
      en: "Anthropic announced classifiers that screen inputs and outputs, reporting that in automated tests they cut the jailbreak success rate from 86% to 4.4%. In a public demo from February 3 to 10, four participants passed every level on the sixth and seventh days, and one of their methods was judged a universal jailbreak.",
    },
    sources: [
      { label: "Anthropic: Constitutional Classifiers: Defending against universal jailbreaks（2025-02-03）", url: "https://www.anthropic.com/research/constitutional-classifiers" },
    ],
  },
  {
    id: "2025-ecmwf-aifs-operational",
    date: "2025-02-25",
    precision: "day",
    title: { ja: "ECMWFが機械学習の天気予報AIFSの運用を開始", en: "ECMWF Puts Its Machine-Learning Forecast AIFS into Operation" },
    summary: {
      ja: "欧州中期予報センターが、機械学習の予報システムAIFSの運用を始め、物理ベースのIFSと並べて動かした。熱帯低気圧の進路など多くの指標で物理モデルを上回り（最大20%）、予報のエネルギー使用量はおよそ1,000分の1とした。初期値はIFSと同じものを使う。",
      en: "The European Centre for Medium-Range Weather Forecasts took its machine-learning forecasting system AIFS into operation alongside its physics-based IFS, reporting gains of up to 20% on many measures such as tropical cyclone tracks and roughly 1,000 times less energy per forecast. It starts from the same initial conditions as the IFS.",
    },
    sources: [
      {
        label: "ECMWF: ECMWF's AI forecasts become operational（2025-02-25）",
        url: "https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ai-forecasts-become-operational",
      },
    ],
  },
  {
    id: "2025-nist-aml-taxonomy",
    date: "2025-03-01",
    precision: "month",
    title: { ja: "NIST、機械学習への攻撃と対策の用語集（2025年版）を公表", en: "NIST Publishes the 2025 Edition of Its Adversarial Machine Learning Taxonomy" },
    summary: {
      ja: "米国立標準技術研究所が報告書AI 100-2 E2025を公表した。機械学習への攻撃を学習の段階と運用の段階に分け、攻撃者の狙い（可用性・完全性・プライバシー、生成AIでは悪用の手助け）とともに、共通の用語を整理した。",
      en: "The US National Institute of Standards and Technology published AI 100-2 E2025, which separates attacks on machine learning into training-stage and deployment-stage attacks and sets out common terms, along with attacker goals: availability, integrity, privacy, and, for generative AI, misuse enablement.",
    },
    sources: [
      { label: "NIST: AI 100-2 E2025 Adversarial Machine Learning: A Taxonomy and Terminology of Attacks and Mitigations（2025年3月）", url: "https://csrc.nist.gov/pubs/ai/100/2/e2025/final" },
    ],
  },
  {
    id: "2025-fsa-ai-discussion-paper",
    date: "2025-03-01",
    precision: "month",
    title: { ja: "金融庁が「AIディスカッションペーパー」を公表", en: "Japan's FSA Publishes Its AI Discussion Paper" },
    summary: {
      ja: "130社が回答した調査で9割以上が従来型のAIか生成AIを使っていたとし、説明可能性、公平性、ハルシネーション、金融犯罪への悪用などの課題を整理した。金融機関は、技術革新に取り残される「チャレンジしないリスク」を強く意識すべきだとした。2026年3月3日に第1.1版に改訂。",
      en: "Reporting that over 90% of 130 responding firms used conventional or generative AI, the FSA organized issues such as explainability, fairness, hallucination, and misuse for financial crime, and said institutions should be keenly aware of the \"risk of not taking on the challenge\" of being left behind. It was revised to version 1.1 on March 3, 2026.",
    },
    sources: [
      {
        label: "金融庁: AIディスカッションペーパー（第1.0版）～金融分野におけるAIの健全な利活用の促進に向けた初期的な論点整理～（2025年3月）",
        url: "https://www.fsa.go.jp/news/r6/sonota/20250304/aidp_summary.pdf",
      },
      { label: "金融庁: AIディスカッションペーパー（第1.1版）の公表について（2026-03-03）", url: "https://www.fsa.go.jp/news/r7/sonota/20260303/aidp.html" },
    ],
  },
  {
    id: "2025-gemini-robotics",
    date: "2025-03-12",
    precision: "day",
    title: { ja: "Google DeepMindがGemini Roboticsを発表", en: "Google DeepMind Introduces Gemini Robotics" },
    summary: {
      ja: "Google DeepMindが、Gemini 2.0に物理的な動作を新しい出力として加えたVLAモデルGemini Roboticsと、空間を理解して推論するGemini Robotics-ERを発表。汎用性・対話性・器用さを掲げ、人型ロボットの開発でApptronik社と提携した。",
      en: "Google DeepMind announced Gemini Robotics, a VLA model built on Gemini 2.0 with physical actions as a new output, and Gemini Robotics-ER for spatial reasoning, emphasizing generality, interactivity, and dexterity, and partnering with Apptronik on humanoid robots.",
    },
    sources: [{ label: "Google DeepMind: Gemini Robotics brings AI into the physical world（2025-03-12）", url: "https://deepmind.google/blog/gemini-robotics-brings-ai-into-the-physical-world/" }],
  },
  {
    id: "2025-apple-intelligence-japanese",
    date: "2025-03-31",
    precision: "day",
    title: { ja: "Apple Intelligenceが日本語に対応", en: "Apple Intelligence Arrives in Japanese" },
    summary: {
      ja: "iOS 18.4・iPadOS 18.4・macOS Sequoia 15.4のリリースにより、Apple Intelligenceが日本語のほか、フランス語・ドイツ語・イタリア語・ポルトガル語（ブラジル）・スペイン語・韓国語・中国語（簡体字）などに対応。Appleは、生成モデルの多くがデバイス上で実行され、より大きなモデルが必要な要求はPrivate Cloud Computeで処理されると説明した。",
      en: "With the release of iOS 18.4, iPadOS 18.4, and macOS Sequoia 15.4, Apple Intelligence added Japanese along with French, German, Italian, Portuguese (Brazil), Spanish, Korean, Simplified Chinese, and more. Apple explained that many of its generative models run on device, with requests that need larger models handled by Private Cloud Compute.",
    },
    sources: [
      {
        label: "Apple Newsroom: Apple Intelligenceの機能が日本語で利用可能に（2025-03-31）",
        url: "https://www.apple.com/jp/newsroom/2025/03/apple-intelligence-features-are-now-available-in-more-languages/",
      },
    ],
  },
  {
    id: "2025-caml-ai-scoring",
    date: "2025-04-01",
    precision: "day",
    title: {
      ja: "銀行界のマネロン対策共同機構が、AIスコアリングを開始",
      en: "Japan's Banking Industry Launches Shared AI Scoring Against Money Laundering",
    },
    summary: {
      ja: "全国銀行協会の子会社のマネー・ローンダリング対策共同機構が、各金融機関の取引モニタリングなどが検知したアラートのリスクの度合いをAIで評価し、根拠とともに返すサービスを始めた。大量のアラートや誤検知への対応の効率化と、疑わしい取引の届出の判定業務の高度化を支援する。",
      en: "The Cooperation Agency for Anti-Money Laundering, a subsidiary of the Japanese Bankers Association, began a service that uses AI to score the risk of alerts raised by each institution's transaction monitoring and other systems and returns the scores with their grounds, helping handle large numbers of alerts and false positives and supporting decisions on reporting suspicious transactions.",
    },
    sources: [
      {
        label: "マネー・ローンダリング対策共同機構: AIスコアリングサービスの提供開始について（2025-04-01）",
        url: "https://www.caml.co.jp/article/general/a111",
      },
      { label: "マネー・ローンダリング対策共同機構: AIスコアリングサービスとは", url: "https://www.caml.co.jp/ai.html" },
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
    id: "2025-digital-archive-strategy",
    date: "2025-05-01",
    precision: "month",
    title: { ja: "「デジタルアーカイブ戦略2026-2030」が決定", en: "Japan Adopts Its Digital Archive Strategy 2026-2030" },
    summary: {
      ja: "2026年度から5年間のデジタルアーカイブ推進の方向を示す戦略。生成AIの普及などで偽・誤情報が深刻になるなか、デジタルアーカイブを信頼性の高い情報を集めて提供する中核的な基盤と位置づけ、知的財産権を守りながらAIを含む先端技術の活用を進めることを重要な課題とした。",
      en: "A strategy setting the direction for promoting digital archives over the five years from fiscal 2026. As misinformation grows more serious, partly with the spread of generative AI, it positions digital archives as core infrastructure for gathering and providing reliable information, and calls using advanced technologies including AI, while protecting intellectual property, an important issue.",
    },
    sources: [
      {
        label: "デジタルアーカイブ戦略懇談会・デジタルアーカイブ推進に関する検討会: デジタルアーカイブ戦略2026-2030（2025年5月）",
        url: "https://www.cas.go.jp/jp/seisakukaigi/titeki2/pdf/archive_2026-2030.pdf",
      },
    ],
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
    id: "2025-japan-genai-procurement-guideline",
    date: "2025-05-27",
    precision: "day",
    title: {
      ja: "デジタル庁が政府の生成AI調達・利活用ガイドラインを決定",
      en: "Japan Adopts Its Government Guideline on Procuring and Using Generative AI",
    },
    summary: {
      ja: "デジタル社会推進会議幹事会が「行政の進化と革新のための生成AIの調達・利活用に係るガイドライン」（DS-920）を決定。利活用の促進とリスク管理を表裏一体で進めるため、各府省庁にAI統括責任者（CAIO）を置き、ハルシネーションなどのリスクへの対応や出力の正確性の確認を定めた。2026年6月12日に第2.0版へ改定。",
      en: "Japan's Digital Agency adopted guideline DS-920 on procuring and using generative AI in government, pairing promotion of use with risk management: each ministry appoints a Chief AI Officer, and the guideline sets out how to handle risks such as hallucination and to verify the accuracy of outputs. Version 2.0 followed on June 12, 2026.",
    },
    sources: [
      {
        label: "デジタル庁: 行政の進化と革新のための生成AIの調達・利活用に係るガイドライン（DS-920、2025-05-27 決定、2026-06-12 改定）",
        url: "https://www.digital.go.jp/assets/contents/node/information/field_ref_resources/decb64eb-f26e-41cb-8d37-f3dd173108b8/59054b35/20260612_resources_standard_guidelines_guideline_01.pdf",
      },
    ],
  },
  {
    id: "2025-imo-gold-gemini-deep-think",
    date: "2025-07-21",
    precision: "day",
    title: { ja: "AIが数学オリンピックで金メダル相当 — 公式の採点で", en: "AI Reaches Gold-Medal Standard at the Math Olympiad, Officially Graded" },
    summary: {
      ja: "Google DeepMindが、Gemini Deep Thinkの高度な版が国際数学オリンピック2025の6問中5問を完答し、35点で金メダル相当と発表。IMOのコーディネーターが生徒と同じ基準で採点・認定し、問題文から自然言語で4時間半の制限時間内に証明を書いたとした。",
      en: "Google DeepMind announced that an advanced version of Gemini Deep Think solved five of six problems at the 2025 International Mathematical Olympiad, scoring 35 points — gold-medal standard — graded and certified by IMO coordinators using the same criteria as for students, with proofs written in natural language within the 4.5-hour limit.",
    },
    sources: [
      {
        label: "Google DeepMind: Advanced version of Gemini with Deep Think officially achieves gold-medal standard at the International Mathematical Olympiad（2025-07-21）",
        url: "https://deepmind.google/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/",
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
    id: "2025-perch-new-version",
    date: "2025-08-07",
    precision: "day",
    title: { ja: "Google DeepMind、生物音響のAIモデルPerchの新しい版を公開", en: "Google DeepMind Releases a New Version of Its Bioacoustics Model Perch" },
    summary: {
      ja: "鳥に加えて哺乳類、両生類、人がたてる音なども含む、前の版のほぼ2倍のデータで学習した新しいPerchを、オープンなモデルとして公開した。2023年の最初の版は25万回を超えてダウンロードされ、ハワイ大学の研究室はPerchを使って、絶滅のおそれがあるハワイミツスイの声を50倍近く速く見つけられた。",
      en: "Google DeepMind released a new Perch as an open model, trained on nearly twice as much data as before, including mammals, amphibians, and human-made noise as well as birds. The first version, launched in 2023, had been downloaded more than 250,000 times, and a University of Hawaiʻi lab used Perch to find the calls of endangered Hawaiian honeycreepers nearly 50 times faster.",
    },
    sources: [
      { label: "Google DeepMind: How AI is helping advance the science of bioacoustics to save endangered species（2025-08-07）", url: "https://deepmind.google/blog/how-ai-is-helping-advance-the-science-of-bioacoustics-to-save-endangered-species/" },
    ],
  },
  {
    id: "2025-darpa-aixcc-final",
    date: "2025-08-08",
    precision: "day",
    title: { ja: "DARPAのAI Cyber Challenge決勝、Team Atlantaが優勝", en: "Team Atlanta Wins the Final of DARPA's AI Cyber Challenge" },
    summary: {
      ja: "AIで脆弱性を見つけて直す自動のシステムを2年かけて競った大会の結果が発表された。決勝では、63の課題で人工的に仕込まれた脆弱性を54件見つけて43件を修正し、実在する脆弱性も18件見つけた。7チームのうち4チームのシステムがオープンソースで公開された。",
      en: "Results were announced for a two-year competition of automated systems that use AI to find and fix vulnerabilities. In the final, the systems found 54 vulnerabilities artificially inserted in 63 challenges, patched 43 of them, and also found 18 real vulnerabilities. Four of the seven teams' systems were released as open source.",
    },
    sources: [
      { label: "DARPA: AI Cyber Challenge marks pivotal inflection point for cyber defense（2025-08-08）", url: "https://www.darpa.mil/news/2025/aixcc-results" },
    ],
  },
  {
    id: "2025-anthropic-agentic-extortion-report",
    date: "2025-08-27",
    precision: "day",
    title: { ja: "Anthropic、AIエージェントを使った恐喝などの悪用事例を報告", en: "Anthropic Reports AI Agents Being Used for Extortion" },
    summary: {
      ja: "犯罪者がAIのコーディングツールで偵察から侵入までを自動化し、少なくとも17の組織からデータを盗んで恐喝した事例などを報告した。AIが攻撃の助言だけでなく、実行にも使われるようになったとした。",
      en: "Anthropic reported cases including a criminal who used an AI coding tool to automate everything from reconnaissance to breaking into networks, stealing data from at least 17 organizations for extortion. It said AI was now being used not just to advise on attacks but to carry them out.",
    },
    sources: [
      { label: "Anthropic: Detecting and countering misuse of AI: August 2025（2025-08-27）", url: "https://www.anthropic.com/news/detecting-countering-misuse-aug-2025" },
    ],
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
    id: "2025-boj-genai-survey",
    date: "2025-09-01",
    precision: "month",
    title: {
      ja: "日本銀行、金融機関の生成AIの利用状況の調査（2025年度）を公表",
      en: "The Bank of Japan Publishes Its Fiscal 2025 Survey of Generative AI Use at Financial Institutions",
    },
    summary: {
      ja: "153の金融機関のうち、生成AIをすでに利用している先は約5割（前回は31.0%）、試行中を含めると7割強、検討中を含めると9割強だった。利用状況のモニタリングやサードパーティ・リスクへの対策などは、5割程度の先が「改善の余地がある」か「検討中」と答えた。",
      en: "Of 153 financial institutions, about half (31.0% in the previous round) were already using generative AI, over 70% including trials and over 90% including those considering it. On monitoring use and countering third-party risk, among other items, around half answered \"room for improvement\" or \"under consideration.\"",
    },
    sources: [
      {
        label: "日本銀行: 金融機関における生成AIの利用状況とリスク管理 ―2025年度アンケート調査結果から―（2025年9月）",
        url: "https://www.boj.or.jp/research/brp/fsr/data/fsrb250930.pdf",
      },
    ],
  },
  {
    id: "2025-mlb-abs-challenge",
    date: "2025-09-23",
    precision: "day",
    title: {
      ja: "MLB、2026年からのABSチャレンジシステムの採用を発表",
      en: "MLB Approves the ABS Challenge System from 2026",
    },
    summary: {
      ja: "12台のホークアイのカメラで投球の位置を追跡し、投手・捕手・打者が球審の判定に異議を申し立てたときに確かめる制度。すべての投球を技術で判定する方式よりも、選手がチャレンジ方式を強く好んだことが決め手の一つになった。",
      en: "Under the system, 12 Hawk-Eye cameras track each pitch, and a pitch is checked when the pitcher, catcher, or batter challenges the plate umpire's call. Players' strong preference for the challenge format over having technology call every pitch was a key factor.",
    },
    sources: [
      {
        label: "MLB: MLB announces ABS Challenge System coming to the Major Leagues beginning in the 2026 season（2025-09-23）",
        url: "https://www.mlb.com/press-release/press-release-mlb-announces-abs-challenge-system-coming-to-the-major-leagues-beginning-in-the-2026-season",
      },
    ],
  },
  {
    id: "2025-spotify-ai-protections",
    date: "2025-09-25",
    precision: "day",
    title: { ja: "SpotifyがAIに関する保護策を発表", en: "Spotify Announces AI Protections" },
    summary: {
      ja: "Spotifyが、歌声のなりすましを本人が許可した場合にだけ認めるポリシー、大量アップロードや重複、極端に短い曲などを特定して推薦しないスパムフィルター、音楽のクレジットにAIの関与を記すDDEXの標準への対応を発表した。過去12か月で7,500万曲を超えるスパム曲を削除したとしている。",
      en: "Spotify announced a policy allowing vocal impersonation only with the impersonated artist's permission, a spam filter that identifies and stops recommending mass uploads, duplicates, and artificially short tracks, and support for the DDEX standard for noting AI involvement in music credits. It said it had removed more than 75 million spammy tracks in the past twelve months.",
    },
    sources: [
      {
        label: "Spotify Newsroom: Spotify Strengthens AI Protections for Artists, Songwriters, and Producers（2025-09-25）",
        url: "https://newsroom.spotify.com/2025-09-25/spotify-strengthens-ai-protections/",
      },
    ],
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
    id: "2025-poisoning-250-documents",
    date: "2025-10-09",
    precision: "day",
    title: { ja: "約250件の文書でLLMにバックドアを仕込めるという研究", en: "Study Finds About 250 Documents Can Backdoor an LLM" },
    summary: {
      ja: "Anthropic、英国のAIセキュリティ研究所、アラン・チューリング研究所が、6億〜130億パラメータのどのモデルにも、約250件の悪意ある文書で単純なバックドアを仕込めたと発表した。成功を左右したのは学習データに占める割合ではなく件数だった。より大きなモデルや、より有害な振る舞いでも同じかはわかっていない。",
      en: "Anthropic, the UK AI Security Institute, and the Alan Turing Institute reported that about 250 malicious documents were enough to plant a simple backdoor in models from 600 million to 13 billion parameters. What mattered was the number of documents, not their share of the training data; whether this holds for larger models or more harmful behaviors is unknown.",
    },
    sources: [
      { label: "Anthropic: A small number of samples can poison LLMs of any size（2025-10-09）", url: "https://www.anthropic.com/research/small-samples-poison" },
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
    id: "2025-udio-umg-partnership",
    date: "2025-10-29",
    precision: "day",
    title: { ja: "UdioがUniversal Music Groupと提携し、ダウンロードを停止", en: "Udio Partners with Universal Music Group and Ends Downloads" },
    summary: {
      ja: "音楽生成サービスUdioがUniversal Music Groupとの提携を発表し、同日からプラットフォームからのダウンロードを停止した。CEOは利用者にとって大きな犠牲だと認めている。ヘルプセンターは音声・動画・ステムのダウンロードが無効になったと説明し、あわせて生成クレジットを増やした。UMGは、2024年6月にUdioを提訴したレコード会社の一つだった。",
      en: "The music generator Udio announced a partnership with Universal Music Group and made downloads from the platform unavailable the same day, which its CEO acknowledged as a significant sacrifice for users. Its help center says audio, video, and stem downloads were disabled, while generation credits were increased. UMG had been among the record companies that sued Udio in June 2024.",
    },
    sources: [
      { label: "Udio: A New Era of Music — Udio with Universal Music Group（2025-10-29）", url: "https://www.udio.com/blog/a-new-era" },
      {
        label: "Udio Help Center: Changes associated with the Universal Music Group (UMG) partnership",
        url: "https://help.udio.com/en/articles/12683565-changes-associated-with-the-universal-music-group-umg-partnership",
      },
    ],
  },
  {
    id: "2025-collins-vibe-coding",
    date: "2025-11-06",
    precision: "day",
    title: { ja: "Collins英語辞典が「バイブコーディング」を今年の言葉に", en: "Collins Names \"Vibe Coding\" Word of the Year" },
    summary: {
      ja: "Collins英語辞典が、自然言語で指示して人工知能にコンピュータのコードを書かせることを指す「バイブコーディング」を2025年の「今年の言葉」に選んだ。AIの先駆者アンドレイ・カルパシーが作った言葉で、Collinsは、技術との関係の変化を象徴する言葉だと説明した。",
      en: "Collins Dictionary chose \"vibe coding\" — the use of artificial intelligence prompted by natural language to write computer code — as its Word of the Year 2025. Coined by AI pioneer Andrej Karpathy, the term, Collins said, captures something fundamental about our evolving relationship with technology.",
    },
    sources: [
      {
        label: "Collins Dictionary Language Blog: Collins' Word of the Year 2025（2025-11-06）",
        url: "https://blog.collinsdictionary.com/language-lovers/collins-word-of-the-year-2025-ai-meets-authenticity-as-society-shifts/",
      },
    ],
  },
  {
    id: "2025-gtig-ai-enabled-malware",
    date: "2025-11-06",
    precision: "day",
    title: { ja: "Google、実行中にAIを使うマルウェアを初めて確認したと報告", en: "Google Reports Identifying Malware That Uses AI While It Runs" },
    summary: {
      ja: "GTIGが、実行中にLLMに問い合わせて命令や自分のコードを作らせるマルウェア（PROMPTFLUX、PROMPTSTEALなど）を初めて確認したと報告した。攻撃者が学生や研究者を装ってAIの安全対策をすり抜けようとする例や、攻撃用のAIツールを売る闇市場の成熟も挙げた。",
      en: "GTIG reported identifying, for the first time, malware such as PROMPTFLUX and PROMPTSTEAL that queries an LLM during execution to generate commands or its own code. It also described attackers posing as students or researchers to get past AI safeguards, and a maturing underground market for AI attack tools.",
    },
    sources: [
      { label: "Google Threat Intelligence Group: GTIG AI Threat Tracker: Advances in Threat Actor Usage of AI Tools（2025-11-06）", url: "https://cloud.google.com/blog/topics/threat-intelligence/threat-actor-usage-of-ai-tools" },
    ],
  },
  {
    id: "2025-ai-orchestrated-espionage",
    date: "2025-11-13",
    precision: "day",
    title: { ja: "Anthropic、作業の大半をAIが行ったサイバー諜報活動を報告", en: "Anthropic Reports a Cyber Espionage Campaign Largely Run by AI" },
    summary: {
      ja: "同社が中国の国家支援グループと高い確度で判断する攻撃者が、AIのコーディングツールで約30の組織への侵入を試み、少数で成功したと報告した。作業の80〜90%をAIが行い、人間は重要な判断の場面でだけ関わったという。同社は、人間の大きな介入なしに実行された大規模なサイバー攻撃の、初めて記録された例だと考えている。",
      en: "Anthropic reported that a group it assessed with high confidence to be Chinese state-sponsored used an AI coding tool to try to break into about 30 organizations, succeeding in a small number. AI did 80–90% of the work, with humans stepping in only at key decision points. The company believes it is the first documented case of a large-scale cyberattack executed without substantial human intervention.",
    },
    sources: [
      { label: "Anthropic: Disrupting the first reported AI-orchestrated cyber espionage campaign（2025-11-13）", url: "https://www.anthropic.com/news/disrupting-AI-espionage" },
    ],
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
    id: "2025-suno-wmg-partnership",
    date: "2025-11-25",
    precision: "day",
    title: { ja: "SunoがWarner Music Groupと提携", en: "Suno Partners with Warner Music Group" },
    summary: {
      ja: "音楽生成サービスSunoがWarner Music Groupとの提携を発表した。ライセンスを受けた音楽で新しいモデルを作ること、曲のダウンロードには有料アカウントが必要になり有料プランごとに月のダウンロード数が決まること、オプトインしたWMGのアーティストの名前・肖像・声・楽曲を新しいAI音楽に使えるようにすることを示した。",
      en: "The music generator Suno announced a partnership with Warner Music Group: new models built on licensed music, a paid account required to download songs with a set number of downloads per paid tier each month, and the names, images, likenesses, voices, and compositions of WMG artists who opt in made available for new AI-generated music.",
    },
    sources: [{ label: "Suno: Suno and Warner Music Group（2025-11-25）", url: "https://suno.com/blog/wmg-partnership" }],
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
    id: "2026-ipa-10-threats-ai",
    date: "2026-01-29",
    precision: "day",
    title: { ja: "IPA「情報セキュリティ10大脅威 2026」でAIのリスクが初選出", en: "AI Risks Enter IPA's List of 10 Major Information Security Threats" },
    summary: {
      ja: "情報処理推進機構が、組織向けの3位に「AIの利用をめぐるサイバーリスク」を初めて選んだ。AIへの理解不足による情報漏えいや権利侵害、生成結果のうのみ、AIの悪用による攻撃の容易化と巧妙化などを挙げている。",
      en: "Japan's Innovation Platform Agency (IPA) placed \"cyber risks surrounding the use of AI\" at number 3 on its list for organizations — the first time it was selected — citing leaks and rights infringement from a poor understanding of AI, uncritical acceptance of AI output, and attacks made easier and more sophisticated by the misuse of AI.",
    },
    sources: [
      { label: "IPA: プレス発表「情報セキュリティ10大脅威 2026」を決定（2026-01-29）", url: "https://www.ipa.go.jp/pressrelease/2025/press20260129.html" },
    ],
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
    id: "2026-ndlocr-lite",
    date: "2026-02-24",
    precision: "day",
    title: { ja: "国立国会図書館がNDLOCR-Liteを公開", en: "Japan's National Diet Library Releases NDLOCR-Lite" },
    summary: {
      ja: "国立国会図書館が、GPUがなくても一般的な家庭用のコンピュータで図書や雑誌の画像からテキストを作れる、NDLOCRの軽量版をCC BY 4.0で公開した。NDLOCRが苦手だった英文や手書き文字にも実験的に対応している。",
      en: "Japan's National Diet Library released, under CC BY 4.0, a lightweight version of NDLOCR that can make text from images of books and magazines on ordinary home computers without a GPU. It also experimentally supports English text and handwriting, which NDLOCR handled poorly.",
    },
    sources: [{ label: "NDLラボ: NDLOCR-Liteの公開について（2026-02-24）", url: "https://lab.ndl.go.jp/news/2025/2026-02-24/" }],
  },
  {
    id: "2026-fsa-ai-discussion-paper-1-1",
    date: "2026-03-03",
    precision: "day",
    title: {
      ja: "金融庁、AIディスカッションペーパーを第1.1版に改訂",
      en: "Japan's FSA Revises Its AI Discussion Paper to Version 1.1",
    },
    summary: {
      ja: "2025年6月から12月に開いた「金融庁 AI官民フォーラム」の知見をもとに改訂した。顧客向けのサービスで生成AIのリスクを減らす取組みを、設計と事前検証、顧客への説明・注意喚起、検証・モニタリング、ガバナンスの4つの局面に整理した。",
      en: "Revised based on what was learned at the FSA AI Public-Private Forum held from June to December 2025, it organized ways to reduce generative AI's risks in customer-facing services into four phases: design and advance testing, explanation and warnings to customers, verification and monitoring, and governance.",
    },
    sources: [
      { label: "金融庁: AIディスカッションペーパー（第1.1版）の公表について（2026-03-03）", url: "https://www.fsa.go.jp/news/r7/sonota/20260303/aidp.html" },
      {
        label: "金融庁: AIディスカッションペーパー第1.1版 改訂の概要（2026年3月）",
        url: "https://www.fsa.go.jp/news/r7/sonota/20260303/aidp_version1.1_summary.pdf",
      },
    ],
  },
  {
    id: "2026-pixiv-guideline-ai-settings",
    date: "2026-03-18",
    precision: "day",
    title: {
      ja: "pixivがガイドラインを改定し、作品と一致しないAI生成作品設定の禁止を明記",
      en: "pixiv's Guidelines Spell Out That AI-Generated Settings Must Match the Work",
    },
    summary: {
      ja: "pixivが、2月18日に予告したガイドライン改定を実施。年齢制限・オリジナル作品設定・AI生成作品設定・ジャンル・タグなどに作品の内容と一致しない設定を付ける行為を禁止事項に明記し、規約やガイドラインに違反した可能性が高い作品を閲覧者の設定に応じて検索などで非表示にする場合がある、という項目を加えた。告知は、作品の内容と異なる設定での投稿や宣伝目的の過度な量の投稿が確認されていることを背景に挙げ、従来から禁止されていた事項をわかりやすく整理する改定だとしている。",
      en: "pixiv carried out the guideline revision announced on February 18, explicitly listing settings that do not match a work — age restriction, original-work status, the AI-generated setting, genre, tags, and so on — among prohibited acts, and adding an item saying works likely to violate its terms or guidelines may be hidden from search depending on viewers' settings. The announcement cited posts with settings that did not match their content and excessive promotional posting, and described the revision as clarifying what was already prohibited.",
    },
    sources: [
      {
        label: "pixiv: pixivにおける新しい検索設定の追加と、ガイドライン改定の予定について（2026-02-18）",
        url: "https://www.pixiv.net/info.php?id=13316",
      },
      { label: "pixiv: pixivガイドライン（2026-03-18 改定）", url: "https://www.pixiv.net/terms/?page=guideline" },
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
    id: "2026-fsb-ai-sound-practices",
    date: "2026-06-10",
    precision: "day",
    title: {
      ja: "FSB、金融機関のAI導入の「健全な実務」案を公表",
      en: "The FSB Proposes Sound Practices for Financial Institutions' AI Adoption",
    },
    summary: {
      ja: "金融安定理事会（FSB）が、あらゆる種類の金融機関がAIを責任をもって導入・利用するための「健全な実務」の案を公表し、2026年7月22日まで意見を募った。金融機関と金融の安定に関わる、AIに特有の側面とリスクに焦点を当てている。",
      en: "The Financial Stability Board (FSB) published proposed sound practices for financial institutions of all types to adopt and use AI responsibly, inviting comments until July 22, 2026. They focus on AI-specific aspects and risks relevant to financial institutions and financial stability.",
    },
    sources: [
      {
        label: "FSB: Sound Practices for Responsible Adoption of Artificial Intelligence (AI) — Consultation report（2026-06-10）",
        url: "https://www.fsb.org/uploads/P100626.pdf",
      },
    ],
  },
  {
    id: "2026-jasrac-generative-ai-page",
    date: "2026-06-11",
    precision: "day",
    title: { ja: "JASRACが生成AIと著作権の特設ページを公開", en: "JASRAC Publishes Its Position on Generative AI and Copyright" },
    summary: {
      ja: "JASRACが、生成AIと著作権をめぐる課題と基本的な考え方、生成AIを利用した作品の取り扱いをまとめた特設ページを公開した。シンプルな指示に基づいてAIが自律的に生成した歌詞や楽曲のように人間の創作的寄与が認められない作品は管理せず、届け出る側に人が創作的に寄与した著作物であることを保証する義務があるとした。著作権法第30条の4の改正も求めている。",
      en: "JASRAC published a dedicated page on the issues around generative AI and copyright, its basic position, and how it handles works made with generative AI: works with no recognizable human creative contribution, such as lyrics or music generated autonomously from simple instructions, are not managed, and members registering works must guarantee a human creative contribution. It also calls for amending Article 30-4 of the Copyright Act.",
    },
    sources: [
      {
        label: "JASRAC: 生成AIと著作権に関するJASRACの方針・取り組みをまとめた特設ページを公開しました（2026-06-11）",
        url: "https://www.jasrac.or.jp/information/topics/26/260611.html",
      },
      { label: "JASRAC: 創造のサイクルとの調和がとれたAI利活用の実現に向けて", url: "https://www.jasrac.or.jp/aboutus/ai.html" },
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
    id: "2026-moj-ai-legal-services-guideline",
    date: "2026-08-21",
    precision: "day",
    title: {
      ja: "法務省がAI法務業務支援サービスと弁護士法72条の新ガイドラインを公表",
      en: "Japan's Justice Ministry Issues a New Guideline on AI Legal-Support Services",
    },
    summary: {
      ja: "法務省大臣官房司法法制部が「ビジネス分野におけるAI等法務業務支援サービス提供と弁護士法第72条の関係について」を公表。2023年のガイドラインの枠組みを引き継ぎつつ、対象を契約書関連以外の法務業務支援サービスにも広げ、第72条は人の行為を対象とすること、争いのある案件にもそうでない業務にも使える「価値中立的な」サービスの扱いなどの解釈指針と、提供者への留意・推奨事項を示した。",
      en: "The Ministry of Justice published a guideline on AI legal-support services in business and Article 72 of the Attorney Act. Building on its 2023 framework, it extended the scope beyond contract work and set out interpretive guidance — that the article targets human conduct, and how to treat \"value-neutral\" services usable both for contested matters and for ordinary work — along with governance recommendations for providers.",
    },
    sources: [
      {
        label: "法務省大臣官房司法法制部: ビジネス分野におけるＡＩ等法務業務支援サービス提供と弁護士法第７２条の関係について（2026-08-21）",
        url: "https://www.moj.go.jp/content/001469040.pdf",
      },
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
    id: "2026-llm-jp-4-1",
    date: "2026-09-28",
    precision: "day",
    title: { ja: "国立情報学研究所が「LLM-jp-4.1」を公開", en: "Japan's National Institute of Informatics Releases LLM-jp-4.1" },
    summary: {
      ja: "国立情報学研究所の大規模言語モデル研究開発センターが、オープンで日本語に強いLLM-jp-4.1シリーズを、学習に使ったデータとあわせてApache License 2.0で公開した。2026年4月から公開してきたLLM-jp-4シリーズの事後学習を改善したもの。",
      en: "The Research and Development Center for Large Language Models at Japan's National Institute of Informatics released the LLM-jp-4.1 series, open models strong in Japanese, together with their training data under the Apache License 2.0. It improves the post-training of the LLM-jp-4 series released from April 2026.",
    },
    sources: [
      { label: "LLM-jp: 大規模言語モデル「LLM-jp-4.1」シリーズを公開（2026-09-28）", url: "https://llm-jp.nii.ac.jp/news/llm-jp-4-1/" },
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
