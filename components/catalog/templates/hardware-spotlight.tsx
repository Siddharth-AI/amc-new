import Link from "next/link";
import { ArrowRight, Check, ScanLine } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/ui/smart-image";
import { CtaBanner } from "@/components/home/cta";
import { BUSINESS } from "@/lib/business";
import { TemplateProps, enquiry, RelatedStrip, StatBand } from "./shared";

/* Hardware spotlight · centered product spotlight hero · clean light UI (theme via shell vars) */
export function HardwareSpotlightTemplate({ product, category, related }: TemplateProps) {
  const paras = product.description.split("\n").filter(Boolean);
  const highlights =
    product.highlights.length > 0
      ? product.highlights
      : product.keyFeatures.map((f) => f.title);
  const topHighlights = highlights.slice(0, 3);

  return (
    <article>
      {/* Hero — centered product spotlight */}
      <section className="relative overflow-hidden bg-background">
        <Container className="relative z-10 pb-20 pt-36 text-center md:pb-28 md:pt-44">
          <p className="animate-rise mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
            <ScanLine className="h-3.5 w-3.5" /> {category?.name ?? "Hardware"}
          </p>
          <h1 className="animate-rise mx-auto max-w-4xl text-navy" style={{ animationDelay: "0.06s" }}>
            {product.name}
          </h1>
          <p
            className="animate-rise mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-text-secondary"
            style={{ animationDelay: "0.14s" }}>
            {product.tagline}
          </p>
          <div
            className="animate-rise mt-10 flex flex-wrap items-center justify-center gap-4"
            style={{ animationDelay: "0.22s" }}>
            <Button asChild size="lg" className="bg-[var(--acc)] text-[var(--ink)] hover:opacity-90">
              <Link href={enquiry(product)}>
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Ask Our Team</Link>
            </Button>
          </div>

          {/* Centered product image in a sharp frame with a soft radial accent glow */}
          <div
            className="animate-rise relative mx-auto mt-16 max-w-3xl"
            style={{ animationDelay: "0.3s" }}>
            <div className="pointer-events-none absolute inset-0 -z-10 mx-auto h-full w-[120%] -translate-x-[8.33%] rounded-full bg-[var(--acc)]/[0.08] blur-3xl" />
            <div className="overflow-hidden border border-border bg-surface shadow-[var(--shadow-glow)]">
              <div className="aspect-[16/10]">
                <SmartImage
                  src={product.heroImage}
                  alt={product.name}
                  label={product.name}
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3 highlight points — accent number + short line */}
      {topHighlights.length > 0 && (
        <Section padding="none" className="border-y border-border bg-surface py-14 md:py-20">
          <Container>
            <div data-reveal className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
              {topHighlights.map((h, i) => (
                <div key={i} className="flex items-start gap-4 bg-surface p-8">
                  <span className="font-display text-3xl font-medium leading-none text-[var(--acc)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-1 font-medium leading-snug text-navy">{h}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Overview */}
      <Section padding="none" className="py-24 md:py-32">
        <Container>
          <div data-reveal className="max-w-4xl">
            <div className="mb-6 h-px w-12 bg-[var(--acc)]" />
            <p className="font-display text-3xl font-medium leading-[1.25] text-navy md:text-[2.6rem]">{paras[0]}</p>
            {paras.slice(1).map((p, i) => (
              <p key={i} className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary">{p}</p>
            ))}
          </div>
        </Container>
      </Section>

      {/* Key features — clean two-column list */}
      {product.keyFeatures.length > 0 && (
        <Section padding="none" className="border-y border-border bg-surface py-20 md:py-28">
          <Container>
            <div data-reveal className="mb-14 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">Capabilities</p>
              <h2 className="text-navy">Built to perform</h2>
            </div>
            <div data-reveal className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
              {product.keyFeatures.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--acc)]/15 text-[var(--ink)]">
                    <Check className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <h3 className="mb-1.5 text-lg font-semibold text-navy">{f.title}</h3>
                    <p className="leading-relaxed text-text-muted">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Specifications — two-column dl */}
      {product.specifications.length > 0 && (
        <Section padding="none" className="py-24 md:py-32">
          <Container>
            <div data-reveal className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
              <div className="lg:sticky lg:top-24 lg:h-fit">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">Specifications</p>
                <h2 className="text-navy">The details</h2>
                {product.deploymentType && (
                  <p className="mt-6 text-sm text-text-muted">
                    Deployment: <span className="font-medium text-navy">{product.deploymentType}</span>
                  </p>
                )}
              </div>
              <dl className="divide-y divide-border border-y border-border">
                {product.specifications.map((s, i) => (
                  <div key={i} className="flex justify-between gap-6 py-5">
                    <dt className="text-text-muted">{s.label}</dt>
                    <dd className="text-right text-lg font-medium text-navy">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Container>
        </Section>
      )}

      {/* Ideal for — audience chips */}
      {product.audience.length > 0 && (
        <Section padding="none" className="border-t border-border pb-24">
          <Container>
            <div data-reveal className="flex flex-wrap gap-3 pt-16 md:pt-24">
              <p className="mb-2 w-full text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">Ideal for</p>
              {product.audience.map((a, i) => (
                <span key={i} className="inline-flex items-center gap-2 border border-border bg-surface px-4 py-2.5 text-sm font-medium text-navy">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--acc)]" /> {a}
                </span>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Secondary image — full-width band with scrim + caption */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden bg-[var(--ink)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/images/products/${product.slug}/a.jpg`} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/45 to-transparent" />
        <Container className="relative z-10 flex h-full items-end pb-14 md:pb-20">
          <div data-reveal className="max-w-xl text-white">
            <div className="mb-5 h-px w-12 bg-[var(--acc)]" />
            <p className="font-display text-2xl font-medium leading-snug md:text-3xl">
              Supplied, configured and installed by AMC Systems across the UAE.
            </p>
          </div>
        </Container>
      </section>

      <StatBand
        stats={[
          { v: BUSINESS.experience, l: "In business" },
          { v: BUSINESS.happyClients, l: "Businesses served" },
          { v: "Install", l: "& setup included" },
          { v: "UAE", l: "Nationwide" },
        ]}
      />

      <RelatedStrip related={related} />
      <CtaBanner
        heading={`Need ${product.name}?`}
        text="Tell us your requirements and our team will recommend, supply and install the right hardware."
        image={`/images/products/${product.slug}/a.jpg`}
      />
    </article>
  );
}
