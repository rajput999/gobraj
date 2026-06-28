"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type Fbq = (...args: unknown[]) => void;

/**
 * Meta (Facebook) Pixel.
 * - Loads the base pixel code once (fires the initial PageView).
 * - Fires an additional PageView on every client-side route change
 *   (Next.js App Router navigations don't trigger a full reload).
 */
export default function MetaPixel({ pixelId }: { pixelId: string }) {
  const pathname = usePathname();
  const isFirst = useRef(true);

  useEffect(() => {
    // The base code already fires the first PageView; skip the initial run
    // so it isn't double-counted, then track subsequent navigations.
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    const fbq = (window as unknown as { fbq?: Fbq }).fbq;
    if (fbq) fbq("track", "PageView");
  }, [pathname]);

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${pixelId}');
fbq('track', 'PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
