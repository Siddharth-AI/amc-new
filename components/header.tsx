import Link from "next/link";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Building2,
  UtensilsCrossed,
  Store,
  Scissors,
  Calculator,
  Users,
  Clock,
  Cpu,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavCategory {
  slug: string;
  name: string;
  tagline: string;
  productType: string;
}

const NAV = [
  { name: "About", href: "/about" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

const linkClass =
  "text-sm font-medium tracking-tight text-text-secondary transition-colors hover:text-navy";

/** Pick a category icon by matching keywords in the slug / type. */
function iconFor(slug: string, type: string): LucideIcon {
  const s = `${slug} ${type}`.toLowerCase();
  if (s.includes("hotel") || s.includes("hospitality")) return Building2;
  if (s.includes("restaurant") || s.includes("food") || s.includes("cafe"))
    return UtensilsCrossed;
  if (s.includes("salon") || s.includes("spa")) return Scissors;
  if (s.includes("erp") || s.includes("account") || s.includes("financ"))
    return Calculator;
  if (s.includes("hr") || s.includes("payroll")) return Users;
  if (s.includes("time") || s.includes("attendance")) return Clock;
  if (
    s.includes("hardware") ||
    s.includes("pos") ||
    s.includes("device") ||
    s.includes("printer") ||
    s.includes("scanner")
  )
    return Cpu;
  if (s.includes("retail") || s.includes("store") || s.includes("shop"))
    return Store;
  return LayoutGrid;
}

/**
 * Server component — no client hooks (keeps static export happy).
 * Dropdown = CSS hover, mobile menu = native <details> disclosure.
 */
export function Header({ categories }: { categories: NavCategory[] }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background shadow-[0_1px_0_0_rgba(0,0,0,0.02)]">
      <div className="mx-auto flex h-16 max-w-container items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 md:h-16">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="AMC Systems home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="AMC Systems"
            className="w-36 object-contain h-36"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 md:flex">
          <div className="group relative">
            <Link
              href="/products"
              className={`${linkClass} flex items-center gap-1`}>
              Solutions
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </Link>
            {/* hover dropdown */}
            <div className="invisible absolute left-1/2 top-full w-[700px] -translate-x-1/2 translate-y-1 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="overflow-hidden border border-border bg-surface shadow-[0_30px_80px_-24px_rgba(20,24,28,0.38)]">
                {/* header strip */}
                <div className="flex items-center justify-between border-b border-border bg-surface-sunken px-6 py-3.5">
                  <div>
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-primary-700">
                      Solutions
                    </p>
                    <p className="mt-0.5 text-xs text-text-muted">
                      Software &amp; hardware for every business
                    </p>
                  </div>
                </div>
                {/* category grid with hairline dividers */}
                <div className="grid grid-cols-2 gap-px bg-border">
                  {categories.map((c) => {
                    const Icon = iconFor(c.slug, c.productType);
                    const isHw = c.productType.toLowerCase().includes("hard");
                    return (
                      <Link
                        key={c.slug}
                        href={`/products/${c.slug}`}
                        className="group/item relative flex items-start gap-3.5 bg-surface px-5 py-4 transition-colors hover:bg-surface-sunken">
                        <span className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-primary transition-transform duration-200 group-hover/item:scale-y-100" />
                        <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-background text-primary-700 transition-colors group-hover/item:border-primary group-hover/item:bg-primary group-hover/item:text-white">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex flex-wrap items-center gap-1.5">
                            <span className="text-sm font-semibold text-navy">
                              {c.name}
                            </span>
                            <span
                              className={`shrink-0 border px-1.5 py-px text-[0.55rem] font-semibold uppercase tracking-wider ${
                                isHw
                                  ? "border-navy/25 text-navy/70"
                                  : "border-primary/30 text-primary-700"
                              }`}>
                              {c.productType}
                            </span>
                          </span>
                          <span className="mt-1 block text-xs leading-relaxed text-text-muted line-clamp-1">
                            {c.tagline}
                          </span>
                        </span>
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 -translate-x-1 text-text-muted opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:text-primary-700 group-hover/item:opacity-100" />
                      </Link>
                    );
                  })}
                </div>
                <Link
                  href="/products"
                  className="group/all flex items-center justify-between border-t border-border bg-surface-sunken px-6 py-3.5 text-sm font-medium text-navy transition-colors hover:text-primary-700">
                  View all solutions
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/all:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass}>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm" variant="primary">
            <Link href="/enquiry">
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile menu — native disclosure, no JS */}
        <details className="group relative md:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full text-navy [&::-webkit-details-marker]:hidden">
            <Menu className="h-5 w-5 group-open:hidden" />
            <X className="hidden h-5 w-5 group-open:block" />
          </summary>
          <div className="fixed inset-x-0 top-16 border-t border-border bg-background">
            <div className="max-h-[calc(100vh-4rem)] space-y-1 overflow-y-auto px-4 py-5 sm:px-6">
              <Link
                href="/products"
                className="block rounded-lg px-3 py-3 text-base font-medium text-navy hover:bg-surface-sunken">
                Solutions
              </Link>
              <div className="grid grid-cols-2 gap-1 border-b border-border pb-4">
                {categories.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/products/${c.slug}`}
                    className="rounded-lg px-3 py-2 text-sm text-text-muted hover:bg-surface-sunken hover:text-navy">
                    {c.name}
                  </Link>
                ))}
              </div>
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-navy hover:bg-surface-sunken">
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                size="md"
                variant="primary"
                className="mt-4 w-full">
                <Link href="/enquiry">
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}

export default Header;
