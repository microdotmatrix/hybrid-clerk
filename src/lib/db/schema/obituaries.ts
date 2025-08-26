import { relations } from "drizzle-orm";
import { integer, jsonb, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { pgTable } from "../utils";
import { EntryTable } from "./deceased";
import { UserTable } from "./users";

export const ObituaryTable = pgTable("obituary", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => UserTable.id, { onDelete: "cascade" }),
  entryId: text("entry_id")
    .notNull()
    .references(() => EntryTable.id, { onDelete: "cascade" }),
  inputData: jsonb("input_data"),
  aiModel: text("ai_model").notNull(),
  content: text("content").notNull(),
  tokenUsage: integer("token_usage").notNull(),
  createdAt: timestamp("created_at")
    .$defaultFn(() => new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => new Date())
    .notNull(),
});

export const ObituaryRelations = relations(ObituaryTable, ({ one }) => ({
  user: one(UserTable, {
    fields: [ObituaryTable.userId],
    references: [UserTable.id],
  }),
  entry: one(EntryTable, {
    fields: [ObituaryTable.entryId],
    references: [EntryTable.id],
  }),
}));
