import { AI } from "@/lib/ai/provider";

export default function ObituaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AI>{children}</AI>;
}
