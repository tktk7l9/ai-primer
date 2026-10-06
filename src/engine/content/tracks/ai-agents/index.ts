import type { Track } from "@/engine/content/types";
import { toolUseLoop } from "./01-tool-use-loop";
import { mcp } from "./02-mcp";
import { contextEngineering } from "./03-context-engineering";
import { promptInjection } from "./04-prompt-injection";
import { researchWithAi } from "./05-research-with-ai";

export const aiAgentsTrack: Track = {
  id: "ai-agents",
  emoji: "🤖",
  title: {
    ja: "AIエージェントとツール連携",
    en: "AI Agents and Tool Use",
  },
  summary: {
    ja: "ツール呼び出しのループ・MCP・コンテキスト設計・プロンプトインジェクション、調べ物をするエージェント——「自律的に動くAI」の仕組みと安全な使い方。",
    en: "The tool-calling loop, MCP, context engineering, prompt injection, and research agents — how autonomous AI works and how to keep it safe.",
  },
  lessons: [toolUseLoop, mcp, contextEngineering, promptInjection, researchWithAi],
};
