import { relations } from "drizzle-orm";
import {
  boolean,
  foreignKey,
  json,
  primaryKey,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { pgTable } from "../utils";
import { UserTable } from "./users";

export const ChatTable = pgTable("Chat", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  createdAt: timestamp("createdAt").notNull(),
  title: text("title").notNull(),
  userId: uuid("userId")
    .notNull()
    .references(() => UserTable.id),
  visibility: varchar("visibility", { enum: ["public", "private"] })
    .notNull()
    .default("private"),
});

export const ChatRelations = relations(ChatTable, ({ one }) => ({
  user: one(UserTable, {
    fields: [ChatTable.userId],
    references: [UserTable.id],
  }),
}));

export type Chat = typeof ChatTable.$inferSelect;

export const MessageTable = pgTable("Message", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  chatId: uuid("chatId")
    .notNull()
    .references(() => ChatTable.id),
  role: varchar("role").notNull(),
  parts: json("parts").notNull(),
  attachments: json("attachments").notNull(),
  createdAt: timestamp("createdAt").notNull(),
});

export const MessageRelations = relations(MessageTable, ({ one }) => ({
  chat: one(ChatTable, {
    fields: [MessageTable.chatId],
    references: [ChatTable.id],
  }),
}));

export type Message = typeof MessageTable.$inferSelect;

export const VoteTable = pgTable("Vote", {
  chatId: uuid("chatId")
    .notNull()
    .references(() => ChatTable.id),
  messageId: uuid("messageId")
    .notNull()
    .references(() => MessageTable.id),
  isUpvoted: boolean("isUpvoted").notNull(),
});

export const VoteRelations = relations(VoteTable, ({ one }) => ({
  chat: one(ChatTable, {
    fields: [VoteTable.chatId],
    references: [ChatTable.id],
  }),
  message: one(MessageTable, {
    fields: [VoteTable.messageId],
    references: [MessageTable.id],
  }),
}));

export type Vote = typeof VoteTable.$inferSelect;

export const DocumentTable = pgTable(
  "Document",
  {
    id: uuid("id").notNull().defaultRandom(),
    createdAt: timestamp("createdAt").notNull(),
    title: text("title").notNull(),
    content: text("content"),
    kind: varchar("text", { enum: ["text"] })
      .notNull()
      .default("text"),
    userId: uuid("userId")
      .notNull()
      .references(() => UserTable.id),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.id, table.createdAt] }),
    };
  }
);

export const DocumentRelations = relations(DocumentTable, ({ one }) => ({
  chat: one(ChatTable, {
    fields: [DocumentTable.id],
    references: [ChatTable.id],
  }),
}));

export type Document = typeof DocumentTable.$inferSelect;

export const SuggestionTable = pgTable(
  "Suggestion",
  {
    id: uuid("id").notNull().defaultRandom(),
    documentId: uuid("documentId").notNull(),
    documentCreatedAt: timestamp("documentCreatedAt").notNull(),
    originalText: text("originalText").notNull(),
    suggestedText: text("suggestedText").notNull(),
    description: text("description"),
    isResolved: boolean("isResolved").notNull().default(false),
    userId: uuid("userId")
      .notNull()
      .references(() => UserTable.id),
    createdAt: timestamp("createdAt").notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.id] }),
    documentRef: foreignKey({
      columns: [table.documentId, table.documentCreatedAt],
      foreignColumns: [DocumentTable.id, DocumentTable.createdAt],
    }),
  })
);

export const SuggestionRelations = relations(SuggestionTable, ({ one }) => ({
  document: one(DocumentTable, {
    fields: [SuggestionTable.documentId, SuggestionTable.documentCreatedAt],
    references: [DocumentTable.id, DocumentTable.createdAt],
  }),
}));

export type Suggestion = typeof SuggestionTable.$inferSelect;

export const StreamTable = pgTable(
  "Stream",
  {
    id: uuid("id").notNull().defaultRandom(),
    chatId: uuid("chatId").notNull(),
    createdAt: timestamp("createdAt").notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.id] }),
    chatRef: foreignKey({
      columns: [table.chatId],
      foreignColumns: [ChatTable.id],
    }),
  })
);

export const StreamRelations = relations(StreamTable, ({ one }) => ({
  chat: one(ChatTable, {
    fields: [StreamTable.chatId],
    references: [ChatTable.id],
  }),
}));

export type Stream = typeof StreamTable.$inferSelect;
