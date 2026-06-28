"use client";

import { useState } from "react";

type SmartImageProps = {
  src: string;
  alt: string;
  gradient: string; // tailwind gradient classes, e.g. "from-amber-500 to-orange-600"
  className?: string;
};

/**
 * Renders a remote image on top of a themed gradient. If the image fails
 * to load (offline / blocked), the gradient remains as an elegant fallback,
 * so the layout never breaks. No external config required.
 */
export default function SmartImage({ src, alt, gradient, className }: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${className ?? ""}`}>
      {/* subtle pattern over the gradient fallback */}
      <div className="ring-deco absolute inset-0 text-white/20" />
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      )}
    </div>
  );
}
