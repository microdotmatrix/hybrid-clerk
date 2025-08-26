import { serial, text, timestamp } from "drizzle-orm/pg-core";
import { pgTable } from "../utils";

export const PostTable = pgTable("post", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at")
    .$defaultFn(() => new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => new Date())
    .notNull(),
});

export type Post = typeof PostTable.$inferSelect;
