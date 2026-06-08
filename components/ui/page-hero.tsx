import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

interface Crumb {
  name: string;
  href?: string;
}

interface Meta {
  value: string;
  label: string;
}

/**
 * Elegant, editorial inner-page hero (light). Big display type, a faded
 * watermark word for depth, breadcrumb and an optional meta row.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
  meta,
  watermark,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
  meta?: Meta[];
  watermark?: string;
}) {
  return (
    <Section
      padding="none"
      className="relative overflow-hidden border-b border-border bg-background pt-32 pb-14 md:pt-40 md:pb-20">
      {/* faded typographic watermark */}
      {watermark && (
        <span
          aria-hidden
          className="pointer-events-none absolute -right-4 bottom-[-1.5rem] select-none font-display text-[28vw] font-medium leading-none tracking-tight text-navy/[0.04] md:bottom-[-3rem] lg:text-[15rem]">
          {watermark}
        </span>
      )}
      {/* soft teal wash */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/[0.07] blur-[120px]" />

      <Container className="relative">
        {crumbs && crumbs.length > 0 && (
          <nav className="mb-8 flex items-center gap-2 text-sm text-text-muted">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-navy">{c.name}</Link>
                ) : (
                  <span className="text-navy">{c.name}</span>
                )}
                {i < crumbs.length - 1 && <span className="text-border-strong">/</span>}
              </span>
            ))}
          </nav>
        )}

        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="max-w-4xl text-navy">{title}</h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">{subtitle}</p>
        )}

        {meta && meta.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            {meta.map((m) => (
              <div key={m.label} className="border-l-2 border-primary/40 pl-4">
                <div className="font-display text-2xl font-medium text-navy">{m.value}</div>
                <div className="text-sm text-text-muted">{m.label}</div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
