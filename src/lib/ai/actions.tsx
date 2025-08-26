"use server";

import { generateText, UIMessage } from "ai";

import { ReactNode } from "react";
import { aiProvider } from "./models";

// Define the AI state and UI state types
export type ServerMessage = {
  role: "user" | "assistant";
  content: string;
};

export type ClientMessage = {
  id: string;
  role: "user" | "assistant";
  display: ReactNode;
};

export async function generateTitleFromUserMessage({
  message,
}: {
  message: UIMessage;
}) {
  const { text: title } = await generateText({
    model: aiProvider.languageModel("title-model"),
    system: `\n
    - you will generate a short title based on the first message a user begins a conversation with
    - ensure it is not more than 80 characters long
    - the title should be a summary of the user's message
    - do not use quotes or colons`,
    prompt: JSON.stringify(message),
  });

  return title;
}

export const sendMessage = async (input: string): Promise<ClientMessage> => {
  "use server";
  return {
    id: crypto.randomUUID(),
    role: "user",
    display: input,
  };
};
