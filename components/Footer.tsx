"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream/80">
      <div className="ring-deco absolute inset-0 text-white/5" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-saffron-500 to-holi-500 text-lg">
                🪈
              </span>
              <span className="font-display text-2xl font-bold text-cream">{siteConfig.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Your trusted companion for a soulful pilgrimage across Mathura, Vrindavan, Govardhan
              and Barsana — the eternal playground of Lord Krishna.
            </p>
            <p className="mt-4 inline-block rounded-full bg-white/5 px-4 py-2 text-xs">
              🗓️ Best time to visit: <span className="font-semibold text-saffron-300">October – March</span>
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-cream">Explore</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-saffron-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-cream">Reach Us</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-saffron-400" />
                {siteConfig.address}
              </li>
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-saffron-300">
                  <Phone size={16} className="text-saffron-400" /> {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.bookingEmail}`} className="flex items-center gap-3 hover:text-saffron-300">
                  <Mail size={16} className="text-saffron-400" /> {siteConfig.bookingEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-cream/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Made with devotion. 🙏</p>
          <p>Radhe Radhe • Jai Shri Krishna</p>
        </div>
      </div>
    </footer>
  );
}
