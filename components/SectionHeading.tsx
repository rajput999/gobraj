"use client";

import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
};

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }: Props) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="inline-flex items-center gap-2 rounded-full border border-saffron-200 bg-saffron-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-saffron-700">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:mt-4 sm:text-lg">{subtitle}</p>
      )}
      <div
        className={`mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-saffron-500 to-holi-500 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </Reveal>
  );
}
