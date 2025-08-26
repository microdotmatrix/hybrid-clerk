ALTER TABLE "hybrid-clerk_deceased" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "hybrid-clerk_deceased" ALTER COLUMN "id" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "hybrid-clerk_obituary_details" ALTER COLUMN "entry_id" SET DATA TYPE text;