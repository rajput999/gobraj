"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { bookingHref } from "@/lib/booking";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-saffron-50 via-cream to-cream-deep" />
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-holi-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-peacock-400/15 blur-3xl" />

      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-ink to-[#3b2417] px-8 py-14 text-center text-cream shadow-2xl sm:px-14">
            <div className="ring-deco absolute inset-0 text-white/5" />
            <span className="relative text-4xl">🪷</span>
            <h2 className="relative mt-4 font-display text-4xl font-bold sm:text-5xl">
              Ready to begin your <span className="text-saffron-300">Braj Yatra</span>?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-cream/80">
              Booking takes less than a minute. Just share your name, contact number and the
              number of travellers — our team will call you back with a tailored plan and the
              best price. No payment needed now.
            </p>
            <Link
              href={bookingHref("General", "Book my yatra")}
              className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-saffron-500 to-holi-500 px-9 py-4 font-semibold text-white shadow-glow transition-transform hover:scale-105"
            >
              Book Your Yatra <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
