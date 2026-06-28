"use client";

import { MapPin, Star } from "lucide-react";
import Link from "next/link";
import { hotels } from "@/lib/data";
import { bookingHref } from "@/lib/booking";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";
import SeeAllButton from "./SeeAllButton";

const inr = (n: number) => "₹" + n.toLocaleString("en-IN");

export default function Hotels({
  limit,
  seeAllHref,
}: {
  limit?: number;
  seeAllHref?: string;
}) {
  const items = limit ? hotels.slice(0, limit) : hotels;
  return (
    <section id="hotels" className="relative bg-cream-deep py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Stay in Comfort"
          title={
            <>
              Hand-picked <span className="text-gradient">hotels</span> near the temples
            </>
          }
          subtitle="Clean, comfortable and walking distance from the divine. Every stay is pure-veg friendly and family-approved."
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6 lg:grid-cols-4">
          {items.map((h, i) => (
            <Reveal key={h.name} delay={(i % 4) * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-saffron-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl sm:rounded-3xl">
                <div className="relative h-28 w-full sm:h-44">
                  <SmartImage src={h.image} alt={h.name} gradient={h.gradient} className="h-full w-full" />
                  <div className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[11px] font-bold text-ink sm:right-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-xs">
                    <Star size={11} className="fill-saffron-500 text-saffron-500" /> {h.rating}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-3 sm:p-5">
                  <h3 className="truncate font-display text-sm font-bold text-ink sm:text-xl">{h.name}</h3>
                  <div className="mt-1 flex items-center gap-1 text-[10px] text-ink-soft sm:text-xs">
                    <MapPin size={12} className="shrink-0 text-saffron-600" />{" "}
                    <span className="truncate">{h.location}</span>
                  </div>

                  <div className="mt-2 flex flex-wrap gap-1 sm:mt-3 sm:gap-1.5">
                    {h.amenities.map((a) => (
                      <span
                        key={a}
                        className="rounded-full bg-peacock-500/10 px-2 py-0.5 text-[9px] font-medium text-peacock-700 sm:px-2.5 sm:text-[11px]"
                      >
                        {a}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-end justify-between pt-3 sm:pt-5">
                    <div>
                      <span className="font-display text-lg font-bold text-saffron-600 sm:text-2xl">
                        {inr(h.pricePerNight)}
                      </span>
                      <span className="text-[10px] text-ink-soft sm:text-xs"> / night</span>
                    </div>
                  </div>

                  <Link
                    href={bookingHref("Hotel", `${h.name} — ${h.location}`)}
                    className="mt-3 block w-full rounded-full border-2 border-saffron-300 py-2 text-center text-xs font-semibold text-saffron-700 transition-colors hover:bg-saffron-500 hover:text-white sm:mt-4 sm:py-2.5 sm:text-sm"
                  >
                    Book Stay
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {seeAllHref && <SeeAllButton href={seeAllHref} label="See all hotels" />}
      </div>
    </section>
  );
}
