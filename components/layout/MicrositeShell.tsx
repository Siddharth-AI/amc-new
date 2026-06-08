import Link from "next/link";
import { ArrowUpRight, ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/business";

/**
 * Standalone microsite shell for product / blog detail pages.
 * Has its own minimal navbar + footer (distinct from the AMC site shell),
 * but links back to and is "powered by" AMC Systems.
 */
export function MicrositeShell({
  children,
  title,
  backHref = "/products",
  backLabel = "All Solutions",
  cta = { label: "Get a Quote", href: "/enquiry" },
  theme = { acc: "#16a5a3", ink: "#1e3358" },
}: {
  children: React.ReactNode;
  title: string;
  backHref?: string;
  backLabel?: string;
  cta?: { label: string; href: string };
  theme?: { acc: string; ink: string };
}) {
  return (
    <div
      className="flex min-h-screen flex-col bg-background"
      style={{ ["--acc" as string]: theme.acc, ["--ink" as string]: theme.ink }}>
      {/* Microsite navbar */}
      <header className="sticky top-0 z-50 border-b border-border bg-background backdrop-blur-md">
        <Container>
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Mobile: compact AMC wordmark only (long product title hidden) */}
            <Link
              href="/"
              className="font-display text-base font-medium tracking-tight text-navy sm:hidden">
              AMC Systems
            </Link>
            {/* Tablet / desktop: full product title + connect (no wrap) */}
            <div className="hidden min-w-0 items-center gap-3 sm:flex">
              <Link
                href="/"
                className="truncate whitespace-nowrap font-display text-lg font-medium tracking-tight text-navy">
                {title}
              </Link>
              <span className="hidden whitespace-nowrap text-xs text-text-muted md:inline">
                by AMC Systems
              </span>
            </div>
            <div className="flex shrink-0 items-center gap-2 sm:gap-4">
              <Link
                href={backHref}
                className="hidden items-center gap-1 text-sm font-medium text-text-secondary transition-colors hover:text-navy sm:inline-flex">
                {backLabel} <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Button asChild size="sm" className="bg-[var(--acc)] text-[var(--ink)] hover:opacity-90">
                <Link href={cta.href}>
                  {cta.label} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </header>

      <main className="flex-1">{children}</main>

      {/* Microsite footer — connects back to AMC */}
      <footer className="bg-[var(--ink)] text-white">
        <Container>
          <div className="grid gap-10 py-14 md:grid-cols-[1.3fr_1fr] md:gap-16">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                Powered by AMC Systems
              </p>
              <p className="max-w-md font-display text-2xl font-medium leading-snug text-white">
                Supplied, installed and supported by Al Marwah Computer Systems
                — UAE.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-[var(--acc)] text-[var(--ink)] hover:opacity-90">
                  <Link href="/enquiry">
                    Request a Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white hover:text-navy">
                  <Link href="/">Visit AMC Systems</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
                  Explore
                </p>
                <ul className="space-y-2.5 text-sm text-white/70">
                  <li>
                    <Link href="/products" className="hover:text-white">
                      All Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/news" className="hover:text-white">
                      News & Insights
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-white">
                      About AMC
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
                  Get in touch
                </p>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white">
                  <Phone className="h-4 w-4 text-[var(--acc)]" />{" "}
                  {BUSINESS.phoneDisplay}
                </a>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  {BUSINESS.address.full}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {BUSINESS.foundingYear}–2026 AMC Systems. All rights reserved.
            </span>
            <span>{BUSINESS.tagline}</span>
          </div>
        </Container>
      </footer>
    </div>
  );
}
