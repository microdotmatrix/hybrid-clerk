CREATE TABLE "hybrid-clerk_entry_images" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"entry_id" text NOT NULL,
	"file_name" text NOT NULL,
	"file_url" text NOT NULL,
	"file_size" text,
	"mime_type" text NOT NULL,
	"description" text,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "hybrid-clerk_user_upload" ADD COLUMN "entry_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "hybrid-clerk_entry_images" ADD CONSTRAINT "hybrid-clerk_entry_images_user_id_hybrid-clerk_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."hybrid-clerk_user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hybrid-clerk_entry_images" ADD CONSTRAINT "hybrid-clerk_entry_images_entry_id_hybrid-clerk_deceased_id_fk" FOREIGN KEY ("entry_id") REFERENCES "public"."hybrid-clerk_deceased"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hybrid-clerk_user_upload" ADD CONSTRAINT "hybrid-clerk_user_upload_entry_id_hybrid-clerk_deceased_id_fk" FOREIGN KEY ("entry_id") REFERENCES "public"."hybrid-clerk_deceased"("id") ON DELETE cascade ON UPDATE no action;