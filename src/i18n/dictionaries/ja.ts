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
  },
  home: {
    heroTitle: "AIを、体系的に。",
    heroLead:
      "用語・歴史・仕組みから、ChatGPT・Claude・Gemini・Grok の使い分け、コーディング・画像・動画・音楽生成まで。クイズと出典付きの無料チュートリアル。",
    startLearning: "学習を始める",
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
  },
  track: {
    lessonsIn: "このトラックのレッスン",
    progress: "進捗",
  },
  footer: {
    newsLink: "AIニュース・ダイジェスト（日次更新）",
    disclaimer:
      "本サイトは変わりにくい基礎を扱います。内容は各レッスンの「最終確認」日時点の情報です。",
    github: "GitHub",
  },
};

export default ja;
export type Dictionary = typeof ja;
