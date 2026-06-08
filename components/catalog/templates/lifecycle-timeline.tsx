import Link from "next/link";
import { ArrowRight, Users, CheckCircle2, Layers } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/ui/smart-image";
import { CtaBanner } from "@/components/home/cta";
import { BUSINESS } from "@/lib/business";
import { TemplateProps, enquiry, RelatedStrip, FaqList, StatBand } from "./shared";

/* HR & Payroll · hire-to-retire · full-bleed hero + horizontal lifecycle timeline (theme via shell vars) */
export function LifecycleTimelineTemplate({ product, category, related }: TemplateProps) {
  const paras = product.description.split("\n").filter(Boolean);
  const stages = product.keyFeatures;

  return (
    <article>
      {/* Hero — full-bleed image with ink scrim, content lower-left */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <SmartImage src={product.heroImage} alt={product.name} label={product.name} priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/60 to-[var(--ink)]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/70 via-transparent to-transparent" />
        <Container className="relative pb-20 pt-44 md:pb-28">
          <div className="max-w-3xl">
            <p className="animate-rise inline-flex items-center gap-2 border border-white/25 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)] backdrop-blur-sm">
              {category?.name ?? "Solution"}
              {product.deploymentType ? ` · ${product.deploymentType}` : ""}
            </p>
            <h1 className="animate-rise mt-7 text-white" style={{ animationDelay: "0.06s" }}>
              {product.name}
            </h1>
            <p
              className="animate-rise mt-7 max-w-2xl text-xl leading-relaxed text-white/80"
              style={{ animationDelay: "0.14s" }}>
              {product.tagline}
            </p>
            <div className="animate-rise mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.22s" }}>
              <Button asChild size="lg" className="bg-[var(--acc)] text-[var(--ink)] hover:opacity-90">
                <Link href={enquiry(product)}>
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-[var(--ink)]">
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Intro statement */}
      <Section padding="none" className="bg-background py-24 md:py-32">
        <Container>
          <div data-reveal className="max-w-4xl">
            <div className="mb-6 h-px w-12 bg-[var(--acc)]" />
            <p className="font-display text-3xl font-medium leading-[1.25] text-navy md:text-[2.6rem]">
              {paras[0]}
            </p>
            {paras.slice(1).map((p, i) => (
              <p key={i} className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary">
                {p}
              </p>
            ))}
            {product.highlights.length > 0 && (
              <div className="mt-12 flex flex-wrap gap-3">
                {product.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 border border-border bg-surface px-4 py-2 text-sm text-navy">
                    <CheckCircle2 className="h-4 w-4 text-[var(--acc)]" /> {h}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* SIGNATURE — horizontal lifecycle timeline */}
      {stages.length > 0 && (
        <Section padding="none" className="border-t border-border bg-surface py-24 md:py-32">
          <Container>
            <div data-reveal className="mb-16 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                The employee lifecycle
              </p>
              <h2 className="text-navy">From hire to retire</h2>
            </div>

            {/* Desktop: horizontal row of nodes joined by a connector line */}
            <div data-reveal className="relative hidden md:block">
              <div className="absolute left-0 right-0 top-7 h-px bg-border" />
              <ol
                className="relative grid gap-x-6"
                style={{ gridTemplateColumns: `repeat(${stages.length}, minmax(0, 1fr))` }}>
                {stages.map((s, i) => (
                  <li key={i} className="flex flex-col items-center text-center">
                    <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--acc)] font-display text-lg font-medium text-[var(--ink)] shadow-[var(--shadow-glow)]">
                      {i + 1}
                    </span>
                    <h3 className="mt-6 text-base font-semibold text-navy">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{s.description}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Mobile: vertical stack with a left connector */}
            <ol data-reveal className="relative md:hidden">
              {stages.map((s, i) => (
                <li key={i} className="relative flex gap-6 pb-10 last:pb-0">
                  {i < stages.length - 1 && (
                    <span className="absolute left-[1.6rem] top-14 h-full w-px bg-border" />
                  )}
                  <span className="relative z-10 flex h-13 w-13 min-w-[3.25rem] items-center justify-center rounded-full bg-[var(--acc)] font-display text-lg font-medium text-[var(--ink)]">
                    {i + 1}
                  </span>
                  <div className="pt-1">
                    <h3 className="text-lg font-semibold text-navy">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{s.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Container>
        </Section>
      )}

      {/* Supporting imagery */}
      <Section padding="none" className="py-24 md:py-32">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <div data-reveal className="relative aspect-[4/3] overflow-hidden">
              <SmartImage
                src={`/images/products/${product.slug}/a.jpg`}
                alt={`${product.name} in use`}
                label={product.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/35 to-transparent" />
            </div>
            <div data-reveal className="relative aspect-[4/3] overflow-hidden">
              <SmartImage
                src={`/images/products/${product.slug}/b.jpg`}
                alt={`${product.name} dashboard`}
                label={product.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/35 to-transparent" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Made for — audience grid */}
      {product.audience.length > 0 && (
        <Section padding="none" className="border-t border-border bg-surface py-24 md:py-32">
          <Container>
            <div data-reveal className="mb-14 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">Who it serves</p>
              <h2 className="text-navy">Made for</h2>
            </div>
            <div data-reveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {product.audience.map((a, i) => (
                <div key={i} className="flex items-start gap-4 border border-border bg-background p-7">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[var(--acc)]/12 text-[var(--acc)]">
                    <Users className="h-5 w-5" />
                  </span>
                  <p className="pt-1.5 text-base font-medium text-navy">{a}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <StatBand
        stats={[
          { v: BUSINESS.experience, l: "In business" },
          { v: BUSINESS.happyClients, l: "Businesses served" },
          { v: "24/7", l: "Support" },
          { v: "UAE", l: "Nationwide" },
        ]}
      />

      {/* Specs + integrations */}
      <Section padding="none" className="py-24 md:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            {product.specifications.length > 0 && (
              <div data-reveal>
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">At a glance</p>
                <dl className="divide-y divide-border border-t border-border">
                  {product.specifications.map((s, i) => (
                    <div key={i} className="flex justify-between gap-6 py-4">
                      <dt className="text-text-muted">{s.label}</dt>
                      <dd className="text-right font-medium text-navy">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
            {product.integrations.length > 0 && (
              <div data-reveal>
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">Integrations</p>
                <div className="flex flex-wrap gap-3">
                  {product.integrations.map((it, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 border border-border bg-surface px-4 py-2 text-sm text-navy">
                      <Layers className="h-3.5 w-3.5 text-[var(--acc)]" /> {it}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>

      <FaqList product={product} />
      <RelatedStrip related={related} />
      <CtaBanner
        heading={`Run payroll the right way with ${product.name}`}
        text="Tell us about your team and our experts will tailor the right hire-to-retire setup — with implementation, training and ongoing support."
        image={`/images/products/${product.slug}/a.jpg`}
      />
    </article>
  );
}
