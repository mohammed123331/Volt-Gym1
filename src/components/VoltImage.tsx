import { useState } from 'react';

interface VoltImageProps {
  src: string;
  alt: string;
  className?: string;
  /** Screen-reader-first: image is decorative (its context already labelled) */
  decorative?: boolean;
}

/**
 * Brand-aware image with intentional fallback.
 * Real VOLT photography lives in /public/images/volt-gym — if a file is
 * missing (or on a slow connection), we render a dark branded placeholder
 * with the VOLT wordmark instead of a broken image or a random stock photo.
 * Replace the file on disk to update the photo — no code change.
 */
export default function VoltImage({ src, alt, className = '', decorative = false }: VoltImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-volt-charcoal2 ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="flex flex-col items-center gap-1 p-4 text-center">
          <span className="font-display text-lg font-bold tracking-[0.3em] text-volt-line">VOLT</span>
          <span className="text-[10px] font-semibold text-volt-gray/60">صورة النادي قريبًا</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={decorative ? '' : alt}
      aria-hidden={decorative || undefined}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
