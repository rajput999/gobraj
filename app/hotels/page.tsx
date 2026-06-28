import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Hotels from "@/components/Hotels";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Hotels & Stays — ${siteConfig.name}`,
  description:
    "Hand-picked, comfortable hotels near the temples of Mathura, Vrindavan, Govardhan and Barsana — all pure-veg friendly.",
};

export default function HotelsPage() {
  return (
    <PageShell>
      <Hotels />
    </PageShell>
  );
}
