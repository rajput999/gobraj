"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SeeAllButton({ href, label }: { href: string; label: string }) {
  return (
    <div className="mt-9 flex justify-center sm:mt-12">
      <Link
        href={href}
        className="group inline-flex items-center gap-2 rounded-full border-2 border-saffron-300 bg-white/60 px-7 py-3 text-sm font-semibold text-saffron-700 transition-all hover:border-saffron-500 hover:bg-saffron-500 hover:text-white sm:text-base"
      >
        {label}
        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
