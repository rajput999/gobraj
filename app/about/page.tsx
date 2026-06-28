import type { Metadata } from "next";
import { Heart, ShieldCheck, MapPinned, Users, Leaf, Sparkles } from "lucide-react";
import PageShell from "@/components/PageShell";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import SmartImage from "@/components/SmartImage";
import CTABanner from "@/components/CTABanner";
import { siteConfig } from "@/lib/site";
import { heroSlides } from "@/lib/data";

export const metadata: Metadata = {
  title: `About Us — ${siteConfig.name}`,
  description:
    "Learn about Braj Yatra — a heartfelt Mathura–Vrindavan tourism service dedicated to giving every pilgrim a safe, comfortable and soulful journey through the land of Lord Krishna.",
};

const stats = [
  { value: "30+", label: "Years guiding travellers" },
  { value: "5,0000+", label: "Happy travellers" },
  { value: "60+", label: "Holy temples covered" },
  { value: "4.9★", label: "Average traveller rating" },
];

const values = [
  {
    icon: Heart,
    title: "Rooted in Devotion",
    text: "We are Braj locals who treat every yatra as seva. Your darshan and peace of mind come before everything else.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted & Safe",
    text: "Verified hotels, background-checked drivers and transparent pricing — no hidden charges, ever.",
  },
  {
    icon: MapPinned,
    title: "Local Expertise",
    text: "We know every lane, aarti timing and shortcut of Mathura, Vrindavan, Govardhan and Barsana.",
  },
  {
    icon: Leaf,
    title: "Pure & Sattvik",
    text: "Wholesome pure-veg meals, clean stays and a calm, unhurried pace suited to families and elders.",
  },
  {
    icon: Users,
    title: "Personal Care",
    text: "A real human coordinator stays with you from your first call to your safe return home.",
  },
  {
    icon: Sparkles,
    title: "Tailor-Made",
    text: "From a single-day darshan to a full Braj parikrama — every journey is shaped around you.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      {/* intro */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-saffron-50 via-cream to-cream-deep" />
        <div className="pointer-events-none absolute -right-20 top-0 -z-10 h-72 w-72 rounded-full bg-holi-400/15 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-saffron-200 bg-saffron-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-saffron-700">
              About {siteConfig.name}
            </span>
            <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
              Your companions on the path to <span className="text-gradient">Krishna&apos;s land</span>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
              Braj Yatra was born from a simple wish — to let every devotee experience the magic of
              Mathura and Vrindavan without a single worry about hotels, cars, routes or meals. We
              are a small, dedicated team of Braj locals who have spent our lives among these
              temples, ghats and festivals.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
              Whether you come for a quiet darshan, a vibrant Holi, or a complete parikrama of Braj
              Bhoomi, we handle every detail so you can simply lose yourself in devotion.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-[2rem] border-4 border-white/70 shadow-2xl">
              <SmartImage
                src={heroSlides[0].src}
                alt="Prem Mandir, Vrindavan"
                gradient={heroSlides[0].gradient}
                className="aspect-[4/5] w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* stats */}
      <section className="bg-cream-deep py-12 sm:py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-4 sm:px-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={(i % 4) * 0.08}>
              <div className="rounded-2xl border border-saffron-100 bg-white p-5 text-center shadow-sm">
                <div className="font-display text-2xl font-bold text-saffron-600 sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-[11px] leading-tight text-ink-soft sm:text-xs">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* values */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <SectionHeading
            eyebrow="Why Travellers Trust Us"
            title={
              <>
                What makes a <span className="text-gradient">Braj Yatra</span> different
              </>
            }
            subtitle="More than a travel service — we are your hosts in the holy land, looking after you like family."
          />

          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-2xl border border-saffron-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-saffron-500 to-holi-500 text-white shadow-glow">
                    <v.icon size={20} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* mission */}
      <section className="bg-cream-deep py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-8">
          <Reveal>
            <span className="text-4xl">🪷</span>
            <h2 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">Our Mission</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
              To make the divine land of Braj accessible, comfortable and unforgettable for every
              devotee — young or old, near or far — so that the only thing you carry home is the
              peace of Krishna&apos;s love.
            </p>
            <p className="mt-6 font-display text-xl font-semibold text-saffron-600">
              Radhe Radhe 🙏
            </p>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </PageShell>
  );
}
