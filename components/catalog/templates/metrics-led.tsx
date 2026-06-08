import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Plug, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/ui/smart-image";
import { CtaBanner } from "@/components/home/cta";
import { BUSINESS } from "@/lib/business";
import { TemplateProps, enquiry, RelatedStrip } from "./shared";

/*
 * METRICS-LED — premium analytics / cloud financial management & ERP.
 * Dark, typographic hero (no photo) → big outcome metrics band → framed live
 * dashboard image → dark 2-col feature list → dark spec cells → dark FAQ.
 * Sharp corners only. Theme via shell CSS vars (--acc / --ink). Server component.
 */
export function MetricsLedTemplate({ product, category, related }: TemplateProps) {
  const paras = product.description.split("\n").filter(Boolean);

  // Signature outcome metrics — large, accent-ruled cards on dark.
  const metrics = [
    { v: "70–90%", l: "Less reporting time" },
    { v: "80%", l: "Faster month-end close" },
    { v: "350+", l: "Integrations" },
    { v: "Real-time", l: "Financial visibility" },
  ];

  return (
    <article className="bg-[var(--ink)] text-white">
      {/* ── Hero — centered, typographic + glow (no photo) ───────────────── */}
      <section className="relative isolate overflow-hidden bg-[var(--ink)] pt-32 pb-24 md:pt-40 md:pb-32">
        {/* radial accent glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[var(--acc)]/25 blur-[140px]" />
        {/* texture */}
        <div className="dots-pattern pointer-events-none absolute inset-0 -z-10 opacity-[0.08]" />
        {/* gradient floor into next section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-[var(--ink)]" />

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="animate-rise mb-6 inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
              {category?.name ?? "Solution"}
              {product.deploymentType ? ` · ${product.deploymentType}` : ""}
            </p>
            <h1
              className="animate-rise font-display text-5xl font-medium leading-[1.05] text-white md:text-7xl"
              style={{ animationDelay: "0.06s" }}>
              {product.name}
            </h1>
            <p
              className="animate-rise mx-auto mt-6 max-w-xl text-xl leading-relaxed text-white/70"
              style={{ animationDelay: "0.14s" }}>
              {product.tagline}
            </p>
            <div
              className="animate-rise mt-10 flex flex-wrap justify-center gap-4"
              style={{ animationDelay: "0.22s" }}>
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

      {/* ── Signature METRICS BAND — big outcome numbers ─────────────────── */}
      <Section padding="none" className="border-y border-white/10">
        <Container>
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <div
                key={m.l}
                data-reveal
                className="bg-[var(--ink)] p-8 md:p-10"
                style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="mb-6 h-px w-10 bg-[var(--acc)]" />
                <div className="font-display text-4xl font-medium leading-none text-white md:text-6xl">
                  {m.v}
                </div>
                <div className="mt-4 text-xs uppercase tracking-[0.18em] text-white/55">
                  {m.l}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Intro statement ──────────────────────────────────────────────── */}
      {paras.length > 0 && (
        <Section padding="none" className="py-24 md:py-32">
          <Container>
            <div data-reveal className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-6 h-px w-12 bg-[var(--acc)]" />
              <p className="font-display text-3xl font-medium leading-[1.3] text-white md:text-4xl">
                {paras[0]}
              </p>
              {paras.slice(1).map((p, i) => (
                <p key={i} className="mt-6 text-lg leading-relaxed text-white/55">
                  {p}
                </p>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ── Framed DASHBOARD IMAGE band ──────────────────────────────────── */}
      <Section padding="none" className="pb-24 md:pb-32">
        <Container>
          <figure data-reveal className="relative overflow-hidden border border-white/10">
            <div className="aspect-[16/9] w-full">
              <SmartImage
                src={`/images/products/${product.slug}/a.jpg`}
                alt={`${product.name} dashboard`}
                label={product.name}
              />
            </div>
            {/* bottom scrim into ink */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/20 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-6 md:p-8">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--acc)]" />
              <span className="text-sm font-medium tracking-wide text-white/70">
                Live financial dashboard
              </span>
            </figcaption>
          </figure>
        </Container>
      </Section>

      {/* ── Features — dark 2-col list ───────────────────────────────────── */}
      {product.keyFeatures.length > 0 && (
        <Section padding="none" className="border-t border-white/10 bg-white/[0.03] py-24 md:py-32">
          <Container>
            <div data-reveal className="mb-14 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                Capabilities
              </p>
              <h2 className="font-display text-4xl font-medium text-white md:text-5xl">
                Engineered for the numbers
              </h2>
            </div>
            <div data-reveal className="grid gap-x-12 gap-y-9 md:grid-cols-2">
              {product.keyFeatures.map((f, i) => (
                <div key={i} className="flex gap-4 border-t border-white/10 pt-7">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--acc)]/10 text-[var(--acc)]">
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="mb-1.5 text-lg font-semibold text-white">{f.title}</h3>
                    <p className="leading-relaxed text-white/55">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ── Highlights + second framed image ─────────────────────────────── */}
      {(product.highlights.length > 0 || product.audience.length > 0) && (
        <Section padding="none" className="py-24 md:py-32">
          <Container>
            <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
              {product.highlights.length > 0 && (
                <div data-reveal>
                  <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                    Why teams choose it
                  </p>
                  <ul className="divide-y divide-white/10 border-y border-white/10">
                    {product.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-4 py-5">
                        <span className="mt-1 font-display text-sm font-medium text-[var(--acc)]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-base leading-snug text-white/80">{h}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div data-reveal className="relative overflow-hidden border border-white/10">
                <div className="aspect-[4/3] w-full">
                  <SmartImage
                    src={`/images/products/${product.slug}/b.jpg`}
                    alt={`${product.name} in use`}
                    label={product.name}
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--ink)] to-transparent" />
                {product.audience.length > 0 && (
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                      <Users className="h-3.5 w-3.5" /> Built for
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.audience.map((a, i) => (
                        <span
                          key={i}
                          className="border border-white/15 bg-white/[0.06] px-3 py-1 text-xs text-white/80">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* ── Specs — dark cells grid ──────────────────────────────────────── */}
      {product.specifications.length > 0 && (
        <Section padding="none" className="border-t border-white/10 py-24 md:py-32">
          <Container>
            <div data-reveal className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                Specifications
              </p>
              <h2 className="font-display text-4xl font-medium text-white md:text-5xl">
                At a glance
              </h2>
            </div>
            <div
              data-reveal
              className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {product.specifications.map((s, i) => (
                <div key={i} className="bg-[var(--ink)] p-7">
                  <dt className="text-xs uppercase tracking-[0.16em] text-white/45">{s.label}</dt>
                  <dd className="mt-2 text-lg font-medium text-white">{s.value}</dd>
                </div>
              ))}
            </div>

            {product.integrations.length > 0 && (
              <div data-reveal className="mt-16">
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                  Integrations
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.integrations.map((it, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/80">
                      <Plug className="h-3.5 w-3.5 text-[var(--acc)]" /> {it}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </Container>
        </Section>
      )}

      {/* ── Dark FAQ (inline details) ────────────────────────────────────── */}
      {product.faqs.length > 0 && (
        <Section padding="none" className="border-t border-white/10 py-24 md:py-32">
          <Container>
            <div data-reveal className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                  Questions
                </p>
                <h2 className="font-display text-4xl font-medium text-white md:text-5xl">
                  Frequently asked
                </h2>
              </div>
              <div className="divide-y divide-white/10 border-y border-white/10">
                {product.faqs.map((f, i) => (
                  <details key={i} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-white">
                      {f.q}
                      <ChevronDown className="h-5 w-5 shrink-0 text-white/45 transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="mt-3 leading-relaxed text-white/55">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* ── Related (light — intentional contrast) + CTA ─────────────────── */}
      <div className="bg-background text-foreground">
        <RelatedStrip related={related} />
      </div>
      <CtaBanner
        heading={`Interested in ${product.name}?`}
        text={`Tell us about your finance operations and our team at ${BUSINESS.name} will tailor the right setup — with implementation, training and support.`}
        image={`/images/products/${product.slug}/a.jpg`}
      />
    </article>
  );
}
