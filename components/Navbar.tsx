"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";
import { bookingHref } from "@/lib/booking";
import { EASE } from "@/lib/anim";

function NavItem({
  href,
  label,
  onClick,
  className,
}: {
  href: string;
  label: string;
  onClick?: () => void;
  className: string;
}) {
  return (
    <Link href={href} onClick={onClick} className={className}>
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-lg transition-all duration-300 ${
        scrolled || open
          ? "bg-cream/80 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.18)]"
          : "bg-cream/30"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2 sm:gap-3 sm:px-8 sm:py-3.5">
        {/* brand — shrinkable so it never pushes the menu button off-screen */}
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-2.5">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-saffron-500 to-holi-500 text-base shadow-glow sm:h-10 sm:w-10 sm:text-lg">
            🪈
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-base font-bold text-ink sm:text-xl">
              {siteConfig.name}
            </span>
            <span className="hidden truncate text-[10px] uppercase tracking-[0.2em] text-ink-soft sm:block">
              {siteConfig.tagline}
            </span>
          </span>
        </Link>

        {/* desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavItem
                href={link.href}
                label={link.label}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-saffron-600"
              />
            </li>
          ))}
          <li>
            <Link
              href={bookingHref("General", "Plan my yatra")}
              className="ml-2 rounded-full bg-gradient-to-r from-saffron-500 to-holi-500 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
            >
              Plan My Yatra
            </Link>
          </li>
        </ul>

        {/* mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/80 text-ink shadow sm:h-11 sm:w-11 lg:hidden"
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden border-t border-saffron-100 bg-cream/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="px-4 py-2 sm:px-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavItem
                    href={link.href}
                    label={link.label}
                    onClick={() => setOpen(false)}
                    className="block border-b border-saffron-100/70 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:text-saffron-600"
                  />
                </li>
              ))}
              <li className="py-3">
                <Link
                  href={bookingHref("General", "Plan my yatra")}
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-gradient-to-r from-saffron-500 to-holi-500 py-2.5 text-center text-sm font-semibold text-white shadow-glow"
                >
                  Plan My Yatra
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
