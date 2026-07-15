import type { Lesson } from "@/engine/content/types";

export const rightsAndLicensing: Lesson = {
  id: "generative-media-05",
  slug: "rights-and-licensing",
  title: {
    ja: "権利とライセンス — 生成物は誰のもの？",
    en: "Rights and Licensing: Who Owns What You Generate?",
  },
  summary: {
    ja: "AI生成物の著作権は、人間の創作的関与の有無によって扱いが変わる。",
    en: "Copyright for AI-generated works hinges on how much creative human involvement went into them.",
  },
  body: {
    ja: `## 「AIが作った」だけでは著作権は発生しない

米国著作権局（U.S. Copyright Office）は、著作権保護の対象は「人間によって創作された」ものに限られるという立場を長く取っています。

### 現在の基本的な考え方（米国の場合）
- **AIが自律的に生成しただけの作品**は、現行法上、著作権保護の対象にならないとされています。
- **人間が十分に創造的な表現を加えた場合**（AI生成物を人間が創造的に選択・配置・修正するなど）は、その人間の関与部分について著作権が認められうるとされています。
- ただし、**プロンプトを書いただけ**では、現時点の一般的な技術水準では「人間が十分にコントロールした」とは認められにくい、という報告も出されています。

このルールは国・地域によって異なり、今後の法整備や判例で変わる可能性もあります。あくまで一例として、実務では最新の公式情報を確認することが重要です。

### 実践上の注意点
- **商用利用の可否**は、使用したAIサービスの利用規約によって個別に定められています（無料プランと有料プランで扱いが異なることも多い）。
- **既存の作品に似すぎた生成物**は、意図せず他者の著作権を侵害するリスクがあるため、公開前に確認する。
- **学習データの由来**を巡る議論（AIの学習に使われた元データの権利問題）も各国で係争中の分野であり、今後の動向を注視する必要がある。

**まとめ**: 「AIが作ったから自由に使える」とは限りません。公開・商用利用する前に、利用規約と著作権法の基本的な考え方を確認する習慣が重要です。`,
    en: `## "The AI made it" doesn't automatically create copyright

The U.S. Copyright Office has long held that copyright protection is limited to works "created by a human being."

### The current basic stance (in the US)
- **A work generated purely autonomously by AI** is not currently eligible for copyright protection under US law.
- **When a human adds sufficiently creative expression** — creatively selecting, arranging, or modifying AI-generated material — copyright may be recognized for that human contribution.
- However, a report has noted that **writing a prompt alone**, given generally available technology today, is unlikely to count as enough human control to make the user the "author" of the output.

Rules differ by country and region, and may change as law and case precedent evolve. Treat this as one example — always check current official guidance for your situation.

### Practical cautions
- **Whether commercial use is allowed** is set individually by each AI service's terms — often differing between free and paid tiers.
- **Output that too closely resembles an existing work** risks unintentionally infringing someone else's copyright — check before publishing.
- **Disputes over training data provenance** (rights questions around the data used to train these models) remain an active, unsettled area across many countries — worth watching.

**Takeaway**: "the AI made it" doesn't mean you're free to use it however you like. Checking a service's terms and the basics of copyright law before publishing or commercializing anything is a habit worth building.`,
  },
  quiz: [
    {
      kind: "boolean",
      prompt: {
        ja: "米国著作権局の現在の立場では、プロンプトを書いただけでは「人間が十分にコントロールした」とは認められにくいとされる。",
        en: "Under the current US Copyright Office stance, writing a prompt alone is unlikely to count as sufficient human control.",
      },
      answer: true,
      explanation: {
        ja: "現時点の一般的な技術水準では、プロンプトのみでは著作権上の「人間の創作」と認められにくいと報告されています。",
        en: "Given today's generally available technology, a prompt alone is unlikely to satisfy the human-authorship requirement.",
      },
    },
  ],
  sources: [
    {
      label: "U.S. Copyright Office: Copyright and Artificial Intelligence",
      url: "https://www.copyright.gov/ai/",
    },
  ],
  lastVerified: "2026-07-15",
};
