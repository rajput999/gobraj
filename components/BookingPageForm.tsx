"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Minus, Plus, Send } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import type { BookingType } from "@/lib/booking";
import { trackMetaEvent } from "@/lib/meta";

type Status = "idle" | "sending" | "success" | "error";

const bookingTypes: { value: BookingType; label: string }[] = [
  { value: "Package", label: "Package" },
  { value: "Hotel", label: "Hotel" },
  { value: "Car", label: "Car" },
  { value: "General", label: "Custom Plan" },
];

export default function BookingPageForm() {
  const params = useSearchParams();
  const initialType = (params.get("type") as BookingType) || "Package";
  const initialItem = params.get("item") || "";

  const [type, setType] = useState<BookingType>(
    bookingTypes.some((b) => b.value === initialType) ? initialType : "Package"
  );
  const [item, setItem] = useState(initialItem);
  const [persons, setPersons] = useState(2);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const payload = {
      ...data,
      booking_type: type,
      number_of_persons: persons,
      _subject: `🪈 New ${type} enquiry — ${siteConfig.name}`,
      _template: "table",
      _captcha: "false",
    };

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.bookingEmail)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        }
      );
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const json = await res.json();
      if (json.success === "true" || json.success === true) {
        setStatus("success");
        trackMetaEvent("Lead", { content_name: `${type} booking`, content_category: type });
      } else {
        throw new Error(json.message || "Something went wrong.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Could not send right now. Please use the email button below."
      );
    }
  }

  function mailtoFallback() {
    const nameEl = document.querySelector<HTMLInputElement>('input[name="name"]');
    const phoneEl = document.querySelector<HTMLInputElement>('input[name="contact_number"]');
    const body = encodeURIComponent(
      `Hello ${siteConfig.name} team,\n\nI'd like to enquire about a ${type} booking.\n\n` +
        `Interested in: ${item || "-"}\n` +
        `Name: ${nameEl?.value || "-"}\n` +
        `Contact number: ${phoneEl?.value || "-"}\n` +
        `Number of persons: ${persons}\n`
    );
    window.location.href = `mailto:${siteConfig.bookingEmail}?subject=${encodeURIComponent(
      `${type} booking enquiry`
    )}&body=${body}`;
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex min-h-[20rem] flex-col items-center justify-center rounded-2xl border border-saffron-100 bg-white p-8 text-center shadow-2xl sm:rounded-3xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="grid h-16 w-16 place-items-center rounded-full bg-peacock-500/15 text-peacock-600"
        >
          <CheckCircle2 size={36} />
        </motion.div>
        <h2 className="mt-5 font-display text-2xl font-bold text-ink">Radhe Radhe! 🙏</h2>
        <p className="mt-2 max-w-sm text-sm text-ink-soft">
          Your enquiry has been received. Our team will call you back very soon to plan your
          divine journey to Braj.
        </p>
        <Link
          href="/"
          className="mt-6 rounded-full bg-gradient-to-r from-saffron-500 to-holi-500 px-6 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
        >
          Back to Home
        </Link>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-saffron-100 bg-white p-4 shadow-2xl sm:rounded-3xl sm:p-6"
    >
      {/* booking type */}
      <label className="mb-2 block text-[13px] font-semibold text-ink">I want to book</label>
      <div className="flex flex-wrap gap-2">
        {bookingTypes.map((t) => (
          <button
            type="button"
            key={t.value}
            onClick={() => setType(t.value)}
            className={`rounded-full px-3.5 py-1.5 text-[13px] font-semibold transition-all ${
              type === t.value
                ? "bg-gradient-to-r from-saffron-500 to-holi-500 text-white shadow-glow"
                : "bg-saffron-50 text-ink-soft hover:bg-saffron-100"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* interested in (prefilled) */}
      <div className="mt-4">
        <label className="mb-1 block text-[13px] font-semibold text-ink">Interested in</label>
        <input
          name="interested_in"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="e.g. Braj Spiritual Sojourn"
          className={inputCls}
        />
      </div>

      {/* name */}
      <div className="mt-4">
        <label className="mb-1 block text-[13px] font-semibold text-ink">
          Full name <span className="text-saffron-600">*</span>
        </label>
        <input name="name" required placeholder="Your name" className={inputCls} />
      </div>

      {/* contact number */}
      <div className="mt-4">
        <label className="mb-1 block text-[13px] font-semibold text-ink">
          Contact number <span className="text-saffron-600">*</span>
        </label>
        <input
          name="contact_number"
          required
          inputMode="tel"
          placeholder="+91 ..."
          className={inputCls}
        />
      </div>

      {/* number of persons stepper */}
      <div className="mt-4">
        <label className="mb-1 block text-[13px] font-semibold text-ink">
          Number of persons <span className="text-saffron-600">*</span>
        </label>
        <div className="flex w-fit items-center gap-3 rounded-full border border-saffron-200 bg-cream/50 px-2.5 py-1.5">
          <button
            type="button"
            aria-label="Decrease"
            onClick={() => setPersons((p) => Math.max(1, p - 1))}
            className="grid h-8 w-8 place-items-center rounded-full bg-saffron-100 text-saffron-700 transition-colors hover:bg-saffron-200"
          >
            <Minus size={15} />
          </button>
          <span className="w-7 text-center font-display text-lg font-bold text-ink">{persons}</span>
          <button
            type="button"
            aria-label="Increase"
            onClick={() => setPersons((p) => Math.min(60, p + 1))}
            className="grid h-8 w-8 place-items-center rounded-full bg-saffron-100 text-saffron-700 transition-colors hover:bg-saffron-200"
          >
            <Plus size={15} />
          </button>
        </div>
      </div>

      {/* optional extras */}
      <details className="group mt-5 rounded-2xl bg-cream/60 p-3.5">
        <summary className="cursor-pointer list-none text-[13px] font-semibold text-saffron-700">
          + Add more details (optional)
        </summary>
        <div className="mt-3 space-y-3">
          <div>
            <label className="mb-1 block text-[13px] font-semibold text-ink">Email (optional)</label>
            <input name="email" type="email" placeholder="you@email.com" className={inputCls} />
          </div>
          <div>
            <label className="mb-1 block text-[13px] font-semibold text-ink">
              Preferred travel date (optional)
            </label>
            <input name="travel_date" type="date" className={inputCls} />
          </div>
          <div>
            <label className="mb-1 block text-[13px] font-semibold text-ink">
              Anything else? (optional)
            </label>
            <textarea
              name="message"
              rows={3}
              placeholder="Elderly travellers, dietary needs, special requests..."
              className={`${inputCls} resize-none`}
            />
          </div>
        </div>
      </details>

      {status === "error" && (
        <p className="mt-4 rounded-xl bg-red-50 px-3.5 py-2.5 text-[13px] text-red-600">
          {errorMsg}{" "}
          <button type="button" onClick={mailtoFallback} className="font-semibold underline">
            Email us instead
          </button>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-saffron-500 to-holi-500 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={17} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send size={17} /> Request Callback
          </>
        )}
      </button>

      <p className="mt-3 text-center text-xs text-ink-soft">
        We&apos;ll only use your details to contact you about this enquiry.
      </p>
    </form>
  );
}

const inputCls =
  "w-full rounded-xl border border-saffron-200 bg-cream/50 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-soft/50 outline-none transition-all focus:border-saffron-500 focus:ring-2 focus:ring-saffron-300";
