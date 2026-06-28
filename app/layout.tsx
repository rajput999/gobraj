import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import MetaPixel from "@/components/MetaPixel";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: [
    "Mathura tourism",
    "Vrindavan tour",
    "Banke Bihari darshan",
    "Krishna pilgrimage",
    "Braj yatra package",
    "Vrindavan hotels",
    "Mathura car rental",
  ],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Prefer an env var (NEXT_PUBLIC_GA_ID); fall back to siteConfig.
  // Only enable when a real "G-..." ID is provided.
  const gaId = process.env.NEXT_PUBLIC_GA_ID || siteConfig.googleAnalyticsId;
  const gaEnabled = /^G-[A-Z0-9]{4,}$/.test(gaId) && !gaId.includes("XXXX");

  const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID || siteConfig.metaPixelId;
  const pixelEnabled = /^\d{6,}$/.test(pixelId);

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {pixelEnabled && <MetaPixel pixelId={pixelId} />}
        {children}
      </body>
      {gaEnabled && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
