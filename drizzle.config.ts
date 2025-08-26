import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });

export default defineConfig({
  schema: "./src/lib/db/schema/index.ts",
  out: "./src/lib/db/migrations",
  dialect: "postgresql",
  tablesFilter: ["hybrid-clerk_*"],
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
