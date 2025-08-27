CREATE TABLE "hybrid-clerk_Chat" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"createdAt" timestamp NOT NULL,
	"title" text NOT NULL,
	"userId" uuid NOT NULL,
	"visibility" varchar DEFAULT 'private' NOT NULL
);
--> statement-breakpoint
CREATE TABLE "hybrid-clerk_Document" (
	"id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"createdAt" timestamp NOT NULL,
	"title" text NOT NULL,
	"content" text,
	"text" varchar DEFAULT 'text' NOT NULL,
	"userId" uuid NOT NULL,
	CONSTRAINT "hybrid-clerk_Document_id_createdAt_pk" PRIMARY KEY("id","createdAt")
);
--> statement-breakpoint
CREATE TABLE "hybrid-clerk_Message" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"chatId" uuid NOT NULL,
	"role" varchar NOT NULL,
	"parts" json NOT NULL,
	"attachments" json NOT NULL,
	"createdAt" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "hybrid-clerk_Stream" (
	"id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"chatId" uuid NOT NULL,
	"createdAt" timestamp NOT NULL,
	CONSTRAINT "hybrid-clerk_Stream_id_pk" PRIMARY KEY("id")
);
--> statement-breakpoint
CREATE TABLE "hybrid-clerk_Suggestion" (
	"id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"documentId" uuid NOT NULL,
	"documentCreatedAt" timestamp NOT NULL,
	"originalText" text NOT NULL,
	"suggestedText" text NOT NULL,
	"description" text,
	"isResolved" boolean DEFAULT false NOT NULL,
	"userId" uuid NOT NULL,
	"createdAt" timestamp NOT NULL,
	CONSTRAINT "hybrid-clerk_Suggestion_id_pk" PRIMARY KEY("id")
);
--> statement-breakpoint
CREATE TABLE "hybrid-clerk_Vote" (
	"chatId" uuid NOT NULL,
	"messageId" uuid NOT NULL,
	"isUpvoted" boolean NOT NULL
);
--> statement-breakpoint
DROP TABLE "hybrid-clerk_entry_images" CASCADE;--> statement-breakpoint
ALTER TABLE "hybrid-clerk_Chat" ADD CONSTRAINT "hybrid-clerk_Chat_userId_hybrid-clerk_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."hybrid-clerk_user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hybrid-clerk_Document" ADD CONSTRAINT "hybrid-clerk_Document_userId_hybrid-clerk_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."hybrid-clerk_user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hybrid-clerk_Message" ADD CONSTRAINT "hybrid-clerk_Message_chatId_hybrid-clerk_Chat_id_fk" FOREIGN KEY ("chatId") REFERENCES "public"."hybrid-clerk_Chat"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hybrid-clerk_Stream" ADD CONSTRAINT "hybrid-clerk_Stream_chatId_hybrid-clerk_Chat_id_fk" FOREIGN KEY ("chatId") REFERENCES "public"."hybrid-clerk_Chat"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hybrid-clerk_Suggestion" ADD CONSTRAINT "hybrid-clerk_Suggestion_userId_hybrid-clerk_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."hybrid-clerk_user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hybrid-clerk_Suggestion" ADD CONSTRAINT "hybrid-clerk_Suggestion_documentId_documentCreatedAt_hybrid-clerk_Document_id_createdAt_fk" FOREIGN KEY ("documentId","documentCreatedAt") REFERENCES "public"."hybrid-clerk_Document"("id","createdAt") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hybrid-clerk_Vote" ADD CONSTRAINT "hybrid-clerk_Vote_chatId_hybrid-clerk_Chat_id_fk" FOREIGN KEY ("chatId") REFERENCES "public"."hybrid-clerk_Chat"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hybrid-clerk_Vote" ADD CONSTRAINT "hybrid-clerk_Vote_messageId_hybrid-clerk_Message_id_fk" FOREIGN KEY ("messageId") REFERENCES "public"."hybrid-clerk_Message"("id") ON DELETE no action ON UPDATE no action;