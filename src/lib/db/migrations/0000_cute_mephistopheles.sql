CREATE TABLE "hybrid-clerk_user_settings" (
	"user_id" text PRIMARY KEY NOT NULL,
	"theme" text DEFAULT 'system' NOT NULL,
	"notifications" boolean DEFAULT true NOT NULL,
	"cookies" boolean DEFAULT false NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "hybrid-clerk_user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"image_url" text,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL,
	CONSTRAINT "hybrid-clerk_user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "hybrid-clerk_user_upload" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"file_name" text NOT NULL,
	"file_type" text NOT NULL,
	"file_size" integer NOT NULL,
	"url" text NOT NULL,
	"thumbnail_url" text,
	"storage_provider" text NOT NULL,
	"storage_key" text NOT NULL,
	"metadata" json,
	"is_public" boolean NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "hybrid-clerk_user_settings" ADD CONSTRAINT "hybrid-clerk_user_settings_user_id_hybrid-clerk_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."hybrid-clerk_user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hybrid-clerk_user_upload" ADD CONSTRAINT "hybrid-clerk_user_upload_user_id_hybrid-clerk_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."hybrid-clerk_user"("id") ON DELETE cascade ON UPDATE no action;