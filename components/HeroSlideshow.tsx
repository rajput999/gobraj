"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { heroSlides } from "@/lib/data";

const INTERVAL = 3800;

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const id = setInterval(() => setIndex((p) => (p + 1) % heroSlides.length), INTERVAL);
    return () => clearInterval(id);
  }, []);

  const slide = heroSlides[index];

  return (
    <div className="relative aspect-[3/4] w-full">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}
        >
          <div className="ring-deco absolute inset-0 text-white/15" />
          {!failed[index] && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={slide.src}
              alt={`${slide.name}, ${slide.location}`}
              onError={() => setFailed((f) => ({ ...f, [index]: true }))}
              className="h-full w-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="absolute right-5 top-5 text-right text-white"
          >
            <div className="flex items-center justify-end gap-1.5 text-xs font-medium text-saffron-200">
              <MapPin size={13} /> {slide.location}
            </div>
            <div className="font-display text-2xl font-bold drop-shadow sm:text-3xl">
              {slide.name}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* indicators */}
      <div className="absolute bottom-4 left-5 z-10 flex items-center gap-1.5">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
