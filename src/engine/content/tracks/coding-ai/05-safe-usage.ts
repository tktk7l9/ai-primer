import type { Lesson } from "@/engine/content/types";

export const safeUsage: Lesson = {
  id: "coding-ai-05",
  slug: "safe-usage",
  title: {
    ja: "コーディングAIの安全な使い方",
    en: "Using Coding AI Safely",
  },
  summary: {
    ja: "生成されたコードをそのまま信じず、レビューと秘密情報の管理を徹底する。",
    en: "Never trust generated code blindly — review it, and guard your secrets.",
  },
  body: {
    ja: `## 便利さと引き換えに気をつけたいこと

コーディングAIは強力ですが、次の点を意識しないと事故につながります。

### 1. 生成されたコードは必ずレビューする
AIも間違えます（ハルシネーションのレッスン参照）。特に以下は要注意です:
- セキュリティに関わる処理（認証・権限チェック・入力値の検証など）
- ライセンスが不明なコードの丸ごとコピー
- エッジケースの考慮漏れ

### 2. 秘密情報をAIに渡さない
APIキー・パスワード・個人情報などを含むファイルやログを、そのままAIに読み込ませたり、公開リポジトリのコンテキストとして使わせたりしない。エージェント型ツールは広い範囲のファイルを自動で読むことがあるため、\`.gitignore\`や除外設定を適切に行う。

### 3. 破壊的な操作は特に慎重に
ファイル削除・強制的な上書き・本番環境への反映など、元に戻しにくい操作をAIに任せる場合は、必ず人間が内容を確認してから実行する。

### 4. テストで裏付けを取る
「動いているように見える」ことと「正しく動く」ことは別です。自動テストや型チェックを通す運用にすることで、AIが生成したコードの品質を客観的に確認できます。

**まとめ**: コーディングAIは「自動で全て任せる道具」ではなく、「人間の判断を前提にした強力な補助」と捉えると、事故を避けながら恩恵を受けられます。`,
    en: `## What to watch for in exchange for the convenience

Coding AI is powerful, but skipping these precautions invites trouble.

### 1. Always review generated code
AI makes mistakes too (see the Hallucination lesson). Watch especially for:
- Security-sensitive logic (authentication, permission checks, input validation)
- Copying code wholesale with unclear licensing
- Missed edge cases

### 2. Never hand it your secrets
Don't let an AI read files or logs containing API keys, passwords, or personal data — and don't let that content become context for a public repository. Agentic tools can read a wide range of files automatically, so set up \`.gitignore\` and exclusions properly.

### 3. Be especially careful with destructive operations
For anything hard to undo — deleting files, forced overwrites, pushing to production — always have a human review the change before it runs.

### 4. Back it up with tests
"Looks like it works" and "actually works correctly" are different things. Running automated tests and type checks gives you an objective check on the quality of AI-generated code.

**Takeaway**: think of coding AI not as a tool you hand everything to, but as a powerful assistant that still assumes human judgment — that mindset lets you get the benefits while avoiding the accidents.`,
  },
  quiz: [
    {
      kind: "multi",
      prompt: {
        ja: "コーディングAIを安全に使う上で正しい心がけをすべて選べ。",
        en: "Select all the sound practices for using coding AI safely.",
      },
      choices: [
        { ja: "生成されたコードは人間がレビューする", en: "Have a human review generated code" },
        { ja: "APIキーやパスワードを含むファイルをそのままAIに読み込ませない", en: "Never let the AI read files containing API keys or passwords as-is" },
        { ja: "破壊的な操作もAIの判断だけで即実行させる", en: "Let the AI execute destructive operations on its own judgment alone" },
      ],
      correctIndexes: [0, 1],
      explanation: {
        ja: "レビューの徹底と秘密情報の保護は基本です。破壊的な操作は必ず人間の確認を挟むべきで、AI任せにするのは避けるべきです。",
        en: "Review and protecting secrets are the basics. Destructive operations should always get human confirmation, not be left entirely to the AI.",
      },
    },
  ],
  sources: [
    { label: "IBM: What Are AI Hallucinations?", url: "https://www.ibm.com/think/topics/ai-hallucinations" },
  ],
  lastVerified: "2026-07-15",
  glossaryRefs: ["hallucination"],
};
