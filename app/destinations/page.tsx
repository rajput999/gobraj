import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Destinations from "@/components/Destinations";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Holy Places — ${siteConfig.name}`,
  description:
    "Explore all the temples and tirthas of Braj — Banke Bihari, Prem Mandir, ISKCON, Krishna Janmabhoomi, Govardhan, Barsana and more.",
};

export default function DestinationsPage() {
  return (
    <PageShell>
      <Destinations />
    </PageShell>
  );
}
