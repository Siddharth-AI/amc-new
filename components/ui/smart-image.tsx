"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface SmartImageProps {
  src?: string | null;
  alt: string;
  className?: string;
  /** Monogram/label shown on the elegant fallback when no image is present. */
  label?: string;
  priority?: boolean;
}

/**
 * Renders a real image when the file exists, otherwise an on-brand, elegant
 * placeholder (navy→teal wash + monogram). Lets us ship the design now and
 * drop real /public images in later without broken <img> tags.
 */
export function SmartImage({ src, alt, className, label, priority }: SmartImageProps) {
  const [errored, setErrored] = useState(false);
  const showFallback = !src || errored;

  if (showFallback) {
    const mono = (label ?? alt ?? "AMC").trim().charAt(0).toUpperCase();
    return (
      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center overflow-hidden bg-navy",
          className
        )}
        aria-label={alt}
        role="img">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-primary-700 opacity-95" />
        <div className="dots-pattern absolute inset-0 opacity-[0.12]" />
        <span className="relative font-display text-6xl font-medium text-white/90">
          {mono}
        </span>
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={() => setErrored(true)}
      className={cn("h-full w-full object-cover", className)}
    />
  );
}
