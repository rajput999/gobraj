# 🪈 Braj Yatra — Mathura & Vrindavan Tourism Website

An aesthetic, animated, fully responsive tourism website for **Mathura–Vrindavan**, built with
**Next.js 16 + React 19 + Tailwind CSS v4 + Framer Motion**.

Visitors can browse sacred destinations, all-inclusive packages (food + stay + travel),
hotels and chauffeur-driven cars, then **request a callback** — their contact details are
sent straight to your email. **No backend and no database required.**

---

## ✨ Features

- Animated hero, scroll-reveal sections, scroll-progress bar, infinite festival marquee
- **Destinations** – Banke Bihari, Prem Mandir, ISKCON, Krishna Janmabhoomi, Dwarkadhish, Govardhan, Barsana, Vishram Ghat
- **Packages** – Same-Day Darshan, Spiritual Sojourn, Complete Braj Parikrama
- **Hotels** & **Cars** with ratings, amenities and pricing
- **Booking** – every "Book" button opens a dedicated **`/book` page** with a quick form
  (name, contact number, number of persons + optional email / date / message), pre-filled
  with whatever the visitor clicked
- Sends enquiries to email via **FormSubmit.co** (free, no signup) + a **mailto fallback**
- Fully responsive (mobile → ultra-wide) and image-failure-proof (themed gradient fallbacks)

---

## 🚀 Run it

```bash
cd ~/Desktop/braj-yatra
npm install      # already done, run again only if needed
npm run dev      # start dev server  → http://localhost:3000
```

Build for production:

```bash
npm run build && npm start
```

---

## 📧 One-time email setup (so you receive bookings)

Open **`lib/site.ts`** and change one line:

```ts
bookingEmail: "your-email@example.com",   // 👉 put YOUR email here
```

The **first time** someone submits the form, FormSubmit.co emails you a one-click
activation link. Click it once — after that, every enquiry lands in your inbox
automatically. Even before activation, the form's "Email us instead" fallback works.

You can also edit your phone, WhatsApp number and address in the same file, and all
prices/temples/hotels/cars in **`lib/data.ts`**.

---

## 🗂️ Project structure

```
app/
  layout.tsx        fonts + metadata
  page.tsx          home — assembles all sections
  book/page.tsx     dedicated booking page (minimal form)
  globals.css       theme tokens, animations, utilities (Tailwind v4)
components/
  Navbar, Hero, Marquee, Destinations, Packages, Hotels, Cars,
  CTABanner, Footer, ScrollProgress, SectionHeading, Reveal, SmartImage,
  BookingPageForm   ← the minimal form on /book
lib/
  site.ts           ← your email / phone / brand config
  data.ts           ← all destinations, packages, hotels, cars
  booking.ts        builds /book links with prefill query params
  anim.ts           shared easing
```

Radhe Radhe • Jai Shri Krishna 🙏
