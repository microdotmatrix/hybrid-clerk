import { Suspense } from "react";

export default function EntryObituariesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EntryObituaries />
    </Suspense>
  );
}

async function EntryObituaries() {
  return <div>Entry Obituaries</div>;
}
