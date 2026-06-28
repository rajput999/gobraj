import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Cars from "@/components/Cars";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Car Rentals — ${siteConfig.name}`,
  description:
    "Private, chauffeur-driven AC cars for your Braj yatra — sedans, SUVs, tempo travellers and luxury vehicles with fuel and driver included.",
};

export default function CarsPage() {
  return (
    <PageShell>
      <Cars />
    </PageShell>
  );
}
