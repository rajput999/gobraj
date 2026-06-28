import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Packages from "@/components/Packages";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Tour Packages — ${siteConfig.name}`,
  description:
    "All-inclusive Mathura–Vrindavan tour packages with food, stay and travel. From same-day darshan to complete Braj parikrama.",
};

export default function PackagesPage() {
  return (
    <PageShell>
      <Packages />
    </PageShell>
  );
}
