"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Phone, Sparkles, X } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";
import { siteConfig } from "@/lib/site";
import { trackMetaEvent } from "@/lib/meta";

type Status = "idle" | "sending" | "success" | "error";

const SUBMITTED_KEY = "brajYatraLeadSubmitted"; // localStorage: set forever once the form is filled
const SESSION_KEY = "brajYatraPopupSeen"; // sessionStorage: clears when the site/tab is closed
const SHOW_DELAY_MS = 1000; // 1 second after arriving

// Fire a GA4 event only when Google Analytics is actually loaded
// (i.e. a valid measurement ID is configured). No-op otherwise.
function trackEvent(action: string, params: Record<string, unknown> = {}) {
  try {
    if (typeof window !== "undefined" && Array.isArray((window as unknown as { dataLayer?: unknown[] }).dataLayer)) {
      sendGAEvent("event", action, params);
    }
  } catch {
    /* ignore analytics errors */
  }
}

export default function InterestPopup() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Show 1s after arriving. Reappears on every new visit/session
  // (e.g. after closing & reopening the site) UNTIL the form is filled.
  useEffect(() => {
    let submitted = false;
    let seenThisSession = false;
    try {
      submitted = localStorage.getItem(SUBMITTED_KEY) === "1";
      seenThisSession = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      submitted = false;
      seenThisSession = false;
    }
    // Never show again once they've submitted; don't repeat within the same session.
    if (submitted || seenThisSession) return;

    timerRef.current = setTimeout(() => {
      setOpen(true);
      trackEvent("interest_popup_shown");
      // mark as seen for THIS session only (so it won't pop repeatedly while browsing,
      // but will show again next time they open the website)
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* private mode / storage disabled — ignore */
      }
    }, SHOW_DELAY_MS);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // lock background scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const payload = {
      ...data,
      _subject: `🪈 New lead (20% OFF offer) — ${siteConfig.name}`,
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
        trackEvent("generate_lead", { source: "interest_popup", offer: "20_percent_off" });
        trackMetaEvent("Lead", { content_name: "Interest popup", source: "homepage_popup" });
        // form filled — never show the popup again, on any future visit
        try {
          localStorage.setItem(SUBMITTED_KEY, "1");
        } catch {
          /* ignore */
        }
        // auto-close shortly after a successful submit
        setTimeout(() => setOpen(false), 2600);
      } else {
        throw new Error(json.message || "Something went wrong.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Could not send right now. Please try again."
      );
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* backdrop */}
          <motion.div
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Plan your Braj Yatra"
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-saffron-100 bg-white shadow-2xl"
          >
            {/* decorative top band */}
            <div className="relative bg-gradient-to-r from-saffron-500 to-holi-500 px-6 py-5 text-white">
              <div className="ring-deco absolute inset-0 text-white/15" />
              <button
                aria-label="Close"
                onClick={close}
                className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/35"
              >
                <X size={17} />
              </button>
              <div className="relative flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/90">
                <Sparkles size={13} /> Special Welcome Offer
              </div>
              <h2 className="relative mt-1 font-display text-3xl font-bold leading-none">
                Flat <span className="text-cream">20% OFF</span>
              </h2>
              <p className="relative mt-1.5 text-sm font-medium text-white/90">
                on your first Braj Yatra booking 🙏
              </p>
            </div>

            <div className="p-6">
              {status === "success" ? (
                <div className="flex flex-col items-center py-4 text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-peacock-500/15 text-peacock-600">
                    <CheckCircle2 size={32} />
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold text-ink">Offer claimed! 🎉</h3>
                  <p className="mt-1.5 text-sm text-ink-soft">
                    Your <span className="font-semibold text-saffron-600">20% discount</span> is reserved.
                    Our team will call you back shortly to plan your divine Braj Yatra.
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    Leave your name &amp; number to claim <span className="font-semibold text-saffron-600">20% off</span> your
                    first Mathura–Vrindavan tour. Our yatra coordinator will call you with the best
                    offer — it&apos;s free!
                  </p>

                  <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                    <input type="hidden" name="source" value="Homepage welcome popup" />
                    <div>
                      <label className="mb-1 block text-[13px] font-semibold text-ink">
                        Full name <span className="text-saffron-600">*</span>
                      </label>
                      <input
                        name="name"
                        required
                        placeholder="Your name"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-[13px] font-semibold text-ink">
                        Contact number <span className="text-saffron-600">*</span>
                      </label>
                      <div className="relative">
                        <Phone
                          size={15}
                          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-saffron-600"
                        />
                        <input
                          name="contact_number"
                          required
                          inputMode="tel"
                          placeholder="+91 ..."
                          className={`${inputCls} pl-9`}
                        />
                      </div>
                    </div>

                    {status === "error" && (
                      <p className="rounded-lg bg-red-50 px-3 py-2 text-[13px] text-red-600">
                        {errorMsg}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-saffron-500 to-holi-500 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 size={16} className="animate-spin" /> Sending...
                        </>
                      ) : (
                        "Claim My 20% OFF"
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={close}
                      className="w-full text-center text-xs text-ink-soft hover:text-saffron-600"
                    >
                      No thanks, maybe later
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const inputCls =
  "w-full rounded-xl border border-saffron-200 bg-cream/50 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-soft/50 outline-none transition-all focus:border-saffron-500 focus:ring-2 focus:ring-saffron-300";
