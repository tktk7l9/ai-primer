import type { Track } from "@/engine/content/types";
import { adoptionInNumbers } from "./01-adoption-in-numbers";
import { fraudAndMoneyLaundering } from "./02-fraud-and-money-laundering";
import { lendingAndFairness } from "./03-lending-and-fairness";
import { customerFacingAi } from "./04-customer-facing-ai";
import { modelRiskAndGovernance } from "./05-model-risk-and-governance";
import { financialStability } from "./06-financial-stability";

export const aiInFinanceTrack: Track = {
  id: "ai-in-finance",
  emoji: "🏦",
  title: {
    ja: "金融とAI",
    en: "AI in Finance",
  },
  summary: {
    ja: "銀行、証券、保険の現場で、AIは何をしているのか。金融庁と日本銀行の調査で見る活用の現状、マネロン対策のAIスコアリング、融資の審査と説明・公平性、顧客向けに使うときの工夫、モデル・リスクの管理、そして金融システム全体への影響まで。",
    en: "What is AI doing at banks, securities firms, and insurers? The current picture from surveys by Japan's Financial Services Agency and the Bank of Japan, AI scoring against money laundering, loan screening and the questions of explanation and fairness, safeguards for customer-facing use, managing model risk, and effects on the financial system as a whole.",
  },
  // From adoption numbers through specific uses (fraud and AML, lending, customer service)
  // to risk management at each institution and, finally, system-wide stability.
  lessons: [
    adoptionInNumbers,
    fraudAndMoneyLaundering,
    lendingAndFairness,
    customerFacingAi,
    modelRiskAndGovernance,
    financialStability,
  ],
};
