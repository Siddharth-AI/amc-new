import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Lightweight reveal wrappers.
 *
 * These are intentionally SERVER components (plain wrappers) so that
 * `next/link` rendered inside them stays server-rendered — client wrappers
 * around <Link> break static export in this Next/React setup. A CSS scroll
 * reveal is applied via the `data-reveal` attribute (see globals.css).
 */
export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div data-reveal className={className}>
      {children}
    </div>
  );
}

export function RevealGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <div data-reveal className={className}>
      {children}
    </div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn(className)}>{children}</div>;
}
