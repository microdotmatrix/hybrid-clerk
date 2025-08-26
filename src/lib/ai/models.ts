import { anthropic } from "@ai-sdk/anthropic";
import { openai } from "@ai-sdk/openai";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { customProvider } from "ai";
import { env } from "process";

const openRouterPreset = "@preset/obituary-generator";

const openRouter = createOpenRouter({
  apiKey: env.OPENROUTER_API_KEY,
});

export const aiProvider = customProvider({
  languageModels: {
    "chat-model-gpt": openai("gpt-4o"),
    "chat-model-claude": anthropic("claude-3-5-sonnet-20240620"),
    "title-model": openai("gpt-4o-mini"),
    "artifact-model": openRouter(openRouterPreset),
  },
});
