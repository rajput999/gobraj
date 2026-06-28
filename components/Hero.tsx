"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { MapPin, Phone, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { EASE } from "@/lib/anim";
import { bookingHref } from "@/lib/booking";
import HeroSlideshow from "./HeroSlideshow";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const stats = [
  { value: "5,000+", label: "Happy travellers" },
  { value: "25+", label: "Holy temples" },
  { value: "4.9★", label: "Traveller rating" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* layered gradient mesh background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-cream via-saffron-50 to-cream-deep" />
      <div className="absolute -left-32 top-10 -z-10 h-[28rem] w-[28rem] rounded-full bg-saffron-300/40 blur-3xl" />
      <div className="absolute -right-24 top-40 -z-10 h-[26rem] w-[26rem] rounded-full bg-holi-400/30 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 -z-10 h-[24rem] w-[24rem] rounded-full bg-peacock-400/25 blur-3xl" />

      {/* floating decorative emojis */}
      <motion.span
        className="pointer-events-none absolute left-[8%] top-[26%] hidden text-5xl opacity-70 md:block animate-float"
        aria-hidden
      >
        🦚
      </motion.span>
      <motion.span
        className="pointer-events-none absolute right-[10%] top-[60%] hidden text-5xl opacity-70 md:block animate-float-slow"
        aria-hidden
      >
        🪷
      </motion.span>
      <motion.span
        className="pointer-events-none absolute right-[22%] top-[20%] hidden text-4xl opacity-60 md:block animate-float"
        aria-hidden
      >
        🪔
      </motion.span>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* left: copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-saffron-200 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-saffron-700"
          >
            <Sparkles size={14} /> Land of Lord Krishna
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-5xl font-bold leading-[1.05] text-ink sm:text-6xl lg:text-7xl"
          >
            Discover the <span className="text-gradient">Divine</span> Soul of{" "}
            <span className="text-gradient">Braj</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/packages"
              className="rounded-full bg-gradient-to-r from-saffron-500 to-holi-500 px-8 py-4 font-semibold text-white shadow-glow transition-transform hover:scale-105"
            >
              Explore Packages
            </Link>
            <Link
              href={bookingHref("General", "Book my yatra")}
              className="rounded-full border-2 border-saffron-300 bg-white/60 px-8 py-4 font-semibold text-ink transition-colors hover:border-saffron-500 hover:text-saffron-600"
            >
              Book Your Yatra
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-soft"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-saffron-600" /> Mathura • Vrindavan • Govardhan
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone size={16} className="text-saffron-600" /> {siteConfig.phone}
            </span>
          </motion.div>
        </motion.div>

        {/* right: stacked image card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-3 -z-10 animate-spin-slow rounded-[2.5rem] bg-gradient-to-tr from-saffron-300 via-holi-300 to-peacock-300 opacity-50 blur-2xl" />
          <div className="overflow-hidden rounded-[2.5rem] border-4 border-white/70 shadow-2xl">
            <HeroSlideshow />
          </div>

          {/* floating glass stat card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute -bottom-6 -left-6 z-20 grid grid-cols-3 gap-4 rounded-2xl border border-saffron-100 bg-cream px-6 py-4 shadow-xl"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-xl font-bold text-saffron-600">
                  {s.value}
                </div>
                <div className="text-[10px] leading-tight text-ink-soft">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
