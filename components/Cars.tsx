"use client";

import { Users } from "lucide-react";
import Link from "next/link";
import { cars } from "@/lib/data";
import { bookingHref } from "@/lib/booking";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";
import SeeAllButton from "./SeeAllButton";

const inr = (n: number) => "₹" + n.toLocaleString("en-IN");

export default function Cars({
  limit,
  seeAllHref,
}: {
  limit?: number;
  seeAllHref?: string;
}) {
  const items = limit ? cars.slice(0, limit) : cars;
  return (
    <section id="cars" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-saffron-300/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Travel with Ease"
          title={
            <>
              Private <span className="text-gradient">chauffeur-driven</span> cars
            </>
          }
          subtitle="Air-conditioned vehicles with experienced local drivers who know every lane of Braj. Fuel, tolls and driver — all included."
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6 lg:grid-cols-4">
          {items.map((c, i) => (
            <Reveal key={c.name} delay={(i % 4) * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-saffron-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl sm:rounded-3xl">
                <div className="relative h-28 w-full sm:h-40">
                  <SmartImage src={c.image} alt={c.name} gradient={c.gradient} className="h-full w-full" />
                  <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-saffron-700 sm:left-3 sm:top-3 sm:px-3 sm:py-1 sm:text-[11px]">
                    {c.type}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-3 sm:p-5">
                  <div className="flex items-center justify-between gap-1">
                    <h3 className="truncate font-display text-sm font-bold text-ink sm:text-xl">{c.name}</h3>
                    <span className="inline-flex shrink-0 items-center gap-1 text-[11px] font-medium text-ink-soft sm:text-xs">
                      <Users size={13} className="text-saffron-600" /> {c.seats}
                    </span>
                  </div>

                  <ul className="mt-2 flex flex-wrap gap-1 sm:mt-3 sm:gap-1.5">
                    {c.features.map((f) => (
                      <li
                        key={f}
                        className="rounded-full bg-peacock-500/10 px-2 py-0.5 text-[9px] font-medium text-peacock-700 sm:px-2.5 sm:text-[11px]"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-end justify-between pt-3 sm:pt-5">
                    <div>
                      <span className="font-display text-lg font-bold text-saffron-600 sm:text-2xl">
                        {inr(c.pricePerDay)}
                      </span>
                      <span className="text-[10px] text-ink-soft sm:text-xs"> / day</span>
                    </div>
                  </div>

                  <Link
                    href={bookingHref("Car", `${c.name} (${c.type}, ${c.seats}-seater)`)}
                    className="mt-3 block w-full rounded-full border-2 border-saffron-300 py-2 text-center text-xs font-semibold text-saffron-700 transition-colors hover:bg-saffron-500 hover:text-white sm:mt-4 sm:py-2.5 sm:text-sm"
                  >
                    Book This Car
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {seeAllHref && <SeeAllButton href={seeAllHref} label="See all cars" />}
      </div>
    </section>
  );
}
