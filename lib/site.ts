// =============================================================
//  SITE CONFIGURATION
//  --> EDIT THESE VALUES TO MAKE THE SITE YOUR OWN <--
// =============================================================

export const siteConfig = {
  name: "Braj Yatra",
  tagline: "Mathura • Vrindavan Tourism",
  description:
    "Experience the divine land of Lord Krishna. Curated temple tours, comfortable hotels, private cars and all-inclusive pilgrimage packages across Mathura, Vrindavan, Govardhan & Barsana.",

  // -------------------------------------------------------------
  //  IMPORTANT — where booking enquiries are delivered.
  //  Replace this with YOUR email address. The very first time a
  //  form is submitted, FormSubmit.co will send a one-time
  //  activation link to this inbox. Click it once and all future
  //  enquiries arrive automatically. No backend / no signup.
  // -------------------------------------------------------------
  bookingEmail: "abhishekgr154@gmail.com",

  phone: "+91 6395848115",
  whatsapp: "+91 6395848115",
  address: "Vrindavan Parikrama Marg, Vrindavan, Uttar Pradesh 281121, India",

  // -------------------------------------------------------------
  //  GOOGLE ANALYTICS (GA4)
  //  Paste your Measurement ID here, e.g. "G-XXXXXXXXXX".
  //  Find it in Google Analytics → Admin → Data Streams → Web.
  //  Leave it empty ("") to disable analytics entirely.
  //  (You can also set NEXT_PUBLIC_GA_ID in .env.local instead.)
  // -------------------------------------------------------------
  googleAnalyticsId: "",

  // -------------------------------------------------------------
  //  META (FACEBOOK) PIXEL
  //  Your Pixel ID for Meta Ads tracking. Leave "" to disable.
  //  (You can also set NEXT_PUBLIC_FB_PIXEL_ID in .env.local.)
  // -------------------------------------------------------------
  metaPixelId: "3432763876885744",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "Packages", href: "/packages" },
  // { label: "Hotels", href: "/hotels" },
  { label: "Cars", href: "/cars" },
  { label: "About", href: "/about" },
  { label: "Book Now", href: "/book?type=General&item=General%20booking%20enquiry" },
] as const;
