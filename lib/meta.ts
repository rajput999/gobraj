// Safe wrapper around the Meta (Facebook) Pixel's fbq().
// No-ops when the pixel isn't loaded (e.g. no Pixel ID configured,
// or blocked by an ad-blocker), so calls are always safe.

type Fbq = (...args: unknown[]) => void;

function getFbq(): Fbq | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as unknown as { fbq?: Fbq }).fbq;
}

/** Track a standard or custom Meta Pixel event. */
export function trackMetaEvent(event: string, params?: Record<string, unknown>) {
  const fbq = getFbq();
  if (fbq) fbq("track", event, params);
}
