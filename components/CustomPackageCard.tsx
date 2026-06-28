"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Hotel, Car, CalendarDays, Sparkles, Wand2 } from "lucide-react";
import { bookingHref } from "@/lib/booking";

const steps = [
  { icon: MapPin, text: "Pick the temples & sites you love" },
  { icon: Hotel, text: "Choose your stay & comfort level" },
  { icon: Car, text: "Select the right car for your group" },
  { icon: CalendarDays, text: "Set your own dates & pace" },
];

export default function CustomPackageCard() {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-dashed border-saffron-400 bg-gradient-to-br from-saffron-50 via-white to-holi-50 p-5 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl sm:rounded-3xl sm:p-7">
      {/* glowing decorative blob */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-holi-400/20 blur-3xl transition-opacity duration-300 group-hover:opacity-80" />

      <div className="relative flex items-center gap-3">
        <motion.span
          animate={{ rotate: [0, -12, 12, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-saffron-500 to-holi-500 text-white shadow-glow"
        >
          <Wand2 size={22} />
        </motion.span>
        <div>
          <span className="inline-flex items-center gap-1 rounded-full bg-holi-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-holi-600">
            <Sparkles size={11} /> Build your own
          </span>
          <h3 className="mt-1 font-display text-lg font-bold text-ink sm:text-2xl">
            Design Your Own Yatra
          </h3>
        </div>
      </div>

      <p className="relative mt-3 text-xs leading-relaxed text-ink-soft sm:text-sm">
        Have something special in mind? Craft a fully personalised Braj pilgrimage — your temples,
        your stay, your schedule. Tell us your wishes and we&apos;ll call you back with a tailor-made
        plan and price.
      </p>

      <ul className="relative mt-4 space-y-2 sm:mt-5 sm:space-y-2.5">
        {steps.map((s) => (
          <li
            key={s.text}
            className="flex items-center gap-2.5 text-xs text-ink-soft sm:text-sm"
          >
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-saffron-600 shadow-sm">
              <s.icon size={14} />
            </span>
            {s.text}
          </li>
        ))}
      </ul>

      <Link
        href={bookingHref("General", "Custom package — designed by me")}
        className="relative mt-auto block w-full rounded-full bg-gradient-to-r from-saffron-500 to-holi-500 py-3 text-center text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03] sm:mt-7 sm:py-3.5 sm:text-base"
      >
        Build My Package
      </Link>
      <p className="relative mt-2 text-center text-[11px] text-ink-soft">
        We&apos;ll reach out for a free callback — no payment now.
      </p>
    </article>
  );
}
