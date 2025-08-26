import { getEntryById } from "@/lib/db/queries/entries";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface PageParams {
  params: Promise<{
    entryId: string;
    obituaryId: string;
  }>;
}

export default async function EntryObituaryViewPage({ params }: PageParams) {
  const { entryId, obituaryId } = await params;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EntryObituaryView entryId={entryId} obituaryId={obituaryId} />
    </Suspense>
  );
}

async function EntryObituaryView({
  entryId,
  obituaryId,
}: {
  entryId: string;
  obituaryId: string;
}) {
  const entry = await getEntryById(entryId);

  if (!entry) {
    notFound();
  }

  return <div>Obituary for {entry.name}</div>;
}
