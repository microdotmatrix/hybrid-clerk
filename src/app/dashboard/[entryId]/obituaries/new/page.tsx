import { getEntryById } from "@/lib/db/queries/entries";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface PageParams {
  params: Promise<{
    entryId: string;
  }>;
}

export default async function EntryObituaryNewPage({ params }: PageParams) {
  const { entryId } = await params;

  if (!entryId) {
    notFound();
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EntryObituaryNewContent entryId={entryId} />
    </Suspense>
  );
}

async function EntryObituaryNewContent({ entryId }: { entryId: string }) {
  const entry = await getEntryById(entryId);

  return <div>Create Obituary for {entry?.name}</div>;
}
