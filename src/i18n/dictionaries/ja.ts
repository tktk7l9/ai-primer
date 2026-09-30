// UI クロームの文言のみ（レッスン本文は engine/content 側の Localized フィールドに持つ）。
// この ja が辞書の形を定義し、en は Dictionary 型で同形を強制される。
const ja = {
  meta: {
    title: "AI Primer — AIを体系的に学ぶ",
    description:
      "AIの用語・歴史・仕組み・使い方を体系的に学べる無料チュートリアル。ChatGPT・Claude・Gemini・Grokからコーディング・画像・動画・音楽生成まで。全レッスンに出典と確認クイズ付き。",
  },
  nav: {
    home: "コース",
    models: "モデルカタログ",
    timeline: "AI年表",
    glossary: "用語集",
    switchLocale: "English",
    breadcrumb: "現在地",
    siteNav: "サイト内メニュー",
    trackOutline: "このトラックの目次",
    outline: "目次",
    lessonPager: "前後のレッスン",
  },
  home: {
    heroTitle: "AIを、体系的に。",
    heroLead:
      "用語・歴史・仕組みから、ChatGPT・Claude・Gemini・Grok の使い分け、コーディング・画像・動画・音楽生成まで。クイズと出典付きの無料チュートリアル。",
    startLearning: "学習を始める",
    resumeLearning: "続きから学ぶ",
    reviewLearning: "最初から復習する",
    upNext: "次は",
    overallProgress: "全体の進捗",
    lessonsLabel: "レッスン",
    newsBanner: "最新のAIニュースは姉妹アプリ「AIニュース・ダイジェスト」へ",
  },
  lesson: {
    quizHeading: "確認クイズ",
    check: "答え合わせ",
    correct: "正解！",
    incorrect: "もう一度考えてみよう",
    explanationHeading: "解説",
    sourcesHeading: "出典・引用元",
    lastVerified: "最終確認",
    staleNotice: "この内容は90日以上前に確認されたものです",
    next: "次のレッスン",
    prev: "前のレッスン",
    backToTrack: "トラックに戻る",
    completed: "完了",
    reset: "選び直す",
    trueLabel: "正しい",
    falseLabel: "誤り",
    multiHint: "当てはまるものをすべて選んでください",
    orderHint: "正しい順にタップしてください（もう一度タップすると取り消せます）",
    completedNotice: "このレッスンを完了しました",
    positionLabel: "レッスン",
    backToCourse: "コース一覧へ戻る",
  },
  track: {
    lessonsIn: "このトラックのレッスン",
    progress: "進捗",
    nextUp: "次はここ",
  },
  footer: {
    newsLink: "AIニュース・ダイジェスト（日次更新）",
    disclaimer:
      "本サイトは変わりにくい基礎を扱います。内容は各レッスンの「最終確認」日時点の情報です。",
    github: "GitHub",
  },
  models: {
    title: "モデルカタログ",
    lead: "主要なAIサービスの開発元・立ち位置・強みをまとめています。料金や個別バージョンは変化が速いため、必ず公式サイトで最新情報を確認してください。",
    officialSite: "公式サイト",
    freeTierYes: "無料枠あり",
    freeTierNo: "無料枠なし",
    kinds: {
      chat: "チャット",
      coding: "コーディング",
      image: "画像生成",
      video: "動画生成",
      music: "音楽・音声生成",
    },
  },
  timeline: {
    title: "AI年表",
    lead: "1950年のチューリングテストから現在まで、AIの歴史を出来事順にたどります。各出来事は歴史トラックのレッスンとあわせて読むとより理解が深まります。",
  },
  notFound: {
    title: "ページが見つかりません",
    lead: "URL が変わったか、削除された可能性があります。コースの一覧か用語集から探してください。",
    backHome: "コース一覧へ",
    glossary: "用語集で探す",
  },
  glossary: {
    title: "用語集",
    lead: "本サイトのレッスンに登場する用語を一覧できます。各用語から関連レッスンにもリンクしています。",
    relatedLessons: "関連レッスン",
  },
};

export default ja;
export type Dictionary = typeof ja;
