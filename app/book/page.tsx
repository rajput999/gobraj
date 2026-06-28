import { Suspense } from "react";
import type { Metadata } from "next";
import { CheckCircle2, Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import BookingPageForm from "@/components/BookingPageForm";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: `Book Your Yatra — ${siteConfig.name}`,
  description:
    "Request a callback for your Mathura–Vrindavan tour. Share your name, contact number and number of travellers — we'll reach out with a tailored plan.",
};

const perks = [
  "100% customisable Mathura–Vrindavan itineraries",
  "Verified hotels, drivers & local temple guides",
  "Pure-veg sattvik meals throughout your stay",
  "Transparent pricing — no hidden charges",
  "A real human calls you back within hours",
];

export default function BookPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-saffron-50 via-cream to-cream-deep" />
      <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-80 w-80 rounded-full bg-saffron-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 -z-10 h-80 w-80 rounded-full bg-holi-400/20 blur-3xl" />

      {/* same header as the main page */}
      <ScrollProgress />
      <Navbar />

      {/* body */}
      <main className="mx-auto max-w-5xl px-4 pb-14 pt-24 sm:px-8 sm:pt-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-saffron-200 bg-saffron-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-saffron-700">
            Book Your Yatra
          </span>
          <h1 className="mt-3 font-display text-2xl font-bold leading-tight text-ink sm:text-3xl">
            Just a <span className="text-gradient">minute</span> to begin your journey
          </h1>
          <p className="mt-2 text-sm text-ink-soft">
            Share a few details and our yatra coordinator will call you back. No online payment
            required.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-5 lg:grid-cols-[1fr_1.2fr]">
          {/* reassurance */}
          <div className="flex flex-col gap-4 rounded-2xl bg-gradient-to-br from-ink to-[#3b2417] p-5 text-cream shadow-2xl sm:rounded-3xl sm:p-6">
            <h2 className="font-display text-lg font-bold sm:text-xl">Why book with us?</h2>
            <ul className="space-y-2.5 text-[13px] text-cream/85">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-saffron-400" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="space-y-2.5 border-t border-white/10 pt-4 text-[13px]">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 hover:text-saffron-300"
              >
                <Phone size={15} /> {siteConfig.phone}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-saffron-300"
              >
                <MessageCircle size={15} /> WhatsApp us
              </a>
              <a
                href={`mailto:${siteConfig.bookingEmail}`}
                className="flex items-center gap-2.5 hover:text-saffron-300"
              >
                <Mail size={15} /> {siteConfig.bookingEmail}
              </a>
            </div>
          </div>

          {/* the form */}
          <Suspense
            fallback={
              <div className="grid min-h-[24rem] place-items-center rounded-3xl border border-saffron-100 bg-white shadow-2xl">
                <span className="text-ink-soft">Loading form…</span>
              </div>
            }
          >
            <BookingPageForm />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
