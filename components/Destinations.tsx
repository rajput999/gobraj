"use client";

import { MapPin } from "lucide-react";
import Link from "next/link";
import { destinations } from "@/lib/data";
import { bookingHref } from "@/lib/booking";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";
import SeeAllButton from "./SeeAllButton";

export default function Destinations({
  limit,
  seeAllHref,
}: {
  limit?: number;
  seeAllHref?: string;
}) {
  const items = limit ? destinations.slice(0, limit) : destinations;
  return (
    <section id="destinations" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Holy Places"
          title={
            <>
              Temples &amp; tirthas of <span className="text-gradient">Braj Bhoomi</span>
            </>
          }
          subtitle="From the curtain darshan of Banke Bihari to the marble splendour of Prem Mandir — walk the very land where Krishna spent his childhood leelas."
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6 lg:grid-cols-4">
          {items.map((d, i) => (
            <Reveal key={d.name} delay={(i % 4) * 0.08}>
              <article className="group relative h-52 overflow-hidden rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-2xl sm:h-80 sm:rounded-3xl">
                <SmartImage
                  src={d.image}
                  alt={`${d.name}, ${d.location}`}
                  gradient={d.gradient}
                  className="h-full w-full"
                />
                {/* dark gradient for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <span className="absolute left-2.5 top-2.5 rounded-full bg-white/85 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-saffron-700 backdrop-blur sm:left-4 sm:top-4 sm:px-3 sm:py-1 sm:text-[11px]">
                  {d.tag}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-5">
                  <div className="flex items-center gap-1 text-[11px] font-medium text-saffron-200 sm:text-xs">
                    <MapPin size={12} /> {d.location}
                  </div>
                  <h3 className="mt-0.5 font-display text-base font-bold leading-tight sm:mt-1 sm:text-2xl">
                    {d.name}
                  </h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/85 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                    {d.blurb}
                  </p>
                  <Link
                    href={bookingHref("General", `Visit ${d.name}, ${d.location}`)}
                    className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold text-saffron-700 backdrop-blur transition-colors hover:bg-saffron-500 hover:text-white sm:mt-3 sm:text-xs"
                  >
                    Plan a Visit →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {seeAllHref && <SeeAllButton href={seeAllHref} label="See all destinations" />}
      </div>
    </section>
  );
}
