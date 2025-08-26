import { ClientMessage, ServerMessage, sendMessage } from "@/lib/ai/actions";
import { createAI } from "@ai-sdk/rsc";

export type AIState = ServerMessage[];
export type UIState = ClientMessage[];

// Create the AI provider with the initial states and allowed actions
export const AI = createAI<AIState, UIState>({
  initialAIState: [],
  initialUIState: [],
  actions: {
    sendMessage,
  },
});
