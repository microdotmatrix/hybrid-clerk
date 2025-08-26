import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().min(1),
    CLERK_SECRET_KEY: z.string().min(1),
    ANTHROPIC_API_KEY: z.string().min(1),
    OPENAI_API_KEY: z.string().min(1),
    OPENROUTER_API_KEY: z.string().min(1),
    UPLOADTHING_TOKEN: z.string().min(1),
    ARCJET_KEY: z.string().min(1),
  },
  createFinalSchema: (env) => {
    return z.object(env).transform((val) => {
      const {
        DATABASE_URL,
        CLERK_SECRET_KEY,
        ANTHROPIC_API_KEY,
        OPENAI_API_KEY,
        OPENROUTER_API_KEY,
        UPLOADTHING_TOKEN,
        ARCJET_KEY,
      } = val;
      return {
        DATABASE_URL,
        CLERK_SECRET_KEY,
        ANTHROPIC_API_KEY,
        OPENAI_API_KEY,
        OPENROUTER_API_KEY,
        UPLOADTHING_TOKEN,
        ARCJET_KEY,
      };
    });
  },
  emptyStringAsUndefined: true,
  experimental__runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY,
    UPLOADTHING_TOKEN: process.env.UPLOADTHING_TOKEN,
    ARCJET_KEY: process.env.ARCJET_KEY,
  },
});
