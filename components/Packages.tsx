"use client";

import { Check, Clock, Star } from "lucide-react";
import Link from "next/link";
import { packages } from "@/lib/data";
import { bookingHref } from "@/lib/booking";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";
import SeeAllButton from "./SeeAllButton";
import CustomPackageCard from "./CustomPackageCard";

const inr = (n: number) => "₹" + n.toLocaleString("en-IN");

export default function Packages({
  limit,
  seeAllHref,
}: {
  limit?: number;
  seeAllHref?: string;
}) {
  const items = limit ? packages.slice(0, limit) : packages;
  return (
    <section id="packages" className="relative bg-cream-deep py-24 sm:py-28">
      {/* soft decorative blobs */}
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-holi-400/10 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-20 h-72 w-72 rounded-full bg-peacock-400/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="All-Inclusive Packages"
          title={
            <>
              Food, stay &amp; travel — <span className="text-gradient">handled</span>
            </>
          }
          subtitle="Pick a package and simply turn up. We take care of comfortable hotels, pure-veg meals, private cars and guided darshan so you focus only on devotion."
        />

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-7 lg:grid-cols-3">
          {items.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl sm:rounded-3xl ${
                  p.popular ? "border-saffron-400 ring-2 ring-saffron-300" : "border-saffron-100"
                }`}
              >
                {p.popular && (
                  <div className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-saffron-500 to-holi-500 px-2.5 py-1 text-[10px] font-bold text-white shadow-glow sm:right-4 sm:top-4 sm:px-3 sm:text-xs">
                    <Star size={11} className="fill-white" /> Most Popular
                  </div>
                )}

                <div className="relative h-32 w-full sm:h-44">
                  <SmartImage
                    src={p.image}
                    alt={p.title}
                    gradient={p.gradient}
                    className="h-full w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-ink sm:bottom-3 sm:left-4 sm:px-3 sm:text-xs">
                    <Clock size={12} className="text-saffron-600" /> {p.duration}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <h3 className="font-display text-lg font-bold text-ink sm:text-2xl">{p.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-soft sm:mt-2 sm:text-sm">
                    {p.summary}
                  </p>

                  <ul className="mt-3 space-y-1.5 sm:mt-5 sm:space-y-2.5">
                    {p.includes.map((inc) => (
                      <li
                        key={inc}
                        className="flex items-start gap-2 text-xs text-ink-soft sm:gap-2.5 sm:text-sm"
                      >
                        <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-peacock-500/15 text-peacock-600 sm:h-5 sm:w-5">
                          <Check size={11} strokeWidth={3} />
                        </span>
                        {inc}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex items-end justify-between border-t border-saffron-100 pt-4 sm:mt-6 sm:pt-5">
                    <div>
                      <span className="font-display text-2xl font-bold text-saffron-600 sm:text-3xl">
                        {inr(p.price)}
                      </span>
                      <span className="ml-1 text-[11px] text-ink-soft sm:text-xs">{p.priceUnit}</span>
                    </div>
                  </div>

                  <Link
                    href={bookingHref("Package", `${p.title} (${p.duration})`)}
                    className="mt-4 block w-full rounded-full bg-gradient-to-r from-saffron-500 to-holi-500 py-3 text-center text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03] sm:mt-5 sm:py-3.5 sm:text-base"
                  >
                    Book This Package
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={items.length * 0.1}>
            <CustomPackageCard />
          </Reveal>
        </div>

        {seeAllHref && <SeeAllButton href={seeAllHref} label="See all packages" />}

        <p className="mt-8 text-center text-sm text-ink-soft">
          Need a custom itinerary or group rates?{" "}
          <Link
            href={bookingHref("General", "Custom itinerary enquiry")}
            className="font-semibold text-saffron-600 underline-offset-4 hover:underline"
          >
            Tell us what you need →
          </Link>
        </p>
      </div>
    </section>
  );
}
