CREATE TABLE "hybrid-clerk_deceased" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"name" text NOT NULL,
	"date_of_birth" timestamp NOT NULL,
	"date_of_death" timestamp NOT NULL,
	"location_born" text NOT NULL,
	"location_died" text NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "hybrid-clerk_obituary_details" (
	"entry_id" text NOT NULL,
	"occupation" text,
	"job_title" text,
	"company_name" text,
	"years_worked" text,
	"education" text,
	"accomplishments" text,
	"milestones" text,
	"biographical_summary" text,
	"hobbies" text,
	"personal_interests" text,
	"family_details" text,
	"survived_by" text,
	"preceded_by" text,
	"service_details" text,
	"donation_requests" text,
	"special_acknowledgments" text,
	"additional_notes" text,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL,
	CONSTRAINT "hybrid-clerk_obituary_details_entry_id_unique" UNIQUE("entry_id")
);
--> statement-breakpoint
ALTER TABLE "hybrid-clerk_deceased" ADD CONSTRAINT "hybrid-clerk_deceased_user_id_hybrid-clerk_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."hybrid-clerk_user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hybrid-clerk_obituary_details" ADD CONSTRAINT "hybrid-clerk_obituary_details_entry_id_hybrid-clerk_deceased_id_fk" FOREIGN KEY ("entry_id") REFERENCES "public"."hybrid-clerk_deceased"("id") ON DELETE cascade ON UPDATE no action;