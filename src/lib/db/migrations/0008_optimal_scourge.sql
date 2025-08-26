CREATE TABLE "hybrid-clerk_obituary" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"entry_id" text NOT NULL,
	"input_data" jsonb,
	"ai_model" text NOT NULL,
	"content" text NOT NULL,
	"token_usage" integer NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
DROP TABLE "hybrid-clerk_Chat" CASCADE;--> statement-breakpoint
DROP TABLE "hybrid-clerk_Document" CASCADE;--> statement-breakpoint
DROP TABLE "hybrid-clerk_Message" CASCADE;--> statement-breakpoint
DROP TABLE "hybrid-clerk_Stream" CASCADE;--> statement-breakpoint
DROP TABLE "hybrid-clerk_Suggestion" CASCADE;--> statement-breakpoint
DROP TABLE "hybrid-clerk_Vote" CASCADE;--> statement-breakpoint
ALTER TABLE "hybrid-clerk_obituary" ADD CONSTRAINT "hybrid-clerk_obituary_user_id_hybrid-clerk_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."hybrid-clerk_user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hybrid-clerk_obituary" ADD CONSTRAINT "hybrid-clerk_obituary_entry_id_hybrid-clerk_deceased_id_fk" FOREIGN KEY ("entry_id") REFERENCES "public"."hybrid-clerk_deceased"("id") ON DELETE cascade ON UPDATE no action;