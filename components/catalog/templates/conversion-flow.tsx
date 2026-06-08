import Link from "next/link";
import {
  ArrowRight,
  Plug,
  Search,
  CalendarCheck,
  CreditCard,
  BedDouble,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/ui/smart-image";
import { CtaBanner } from "@/components/home/cta";
import { BUSINESS } from "@/lib/business";
import {
  TemplateProps,
  enquiry,
  RelatedStrip,
  FaqList,
  StatBand,
} from "./shared";

/* Full-bleed hero · booking funnel signature · conversion stat band · light body (theme via shell vars) */
export function ConversionFlowTemplate({
  product,
  category,
  related,
}: TemplateProps) {
  const paras = product.description.split("\n").filter(Boolean);
  const funnel = [
    {
      icon: Search,
      label: "Look",
      line: "Guests browse live rooms, rates and availability on your own site.",
    },
    {
      icon: CalendarCheck,
      label: "Book",
      line: "A two-click flow turns interest into a confirmed reservation.",
    },
    {
      icon: CreditCard,
      label: "Pay",
      line: "Secure payment captured directly — no middleman, no fees.",
    },
    {
      icon: BedDouble,
      label: "Stay",
      line: "The booking syncs to your PMS, ready for a smooth arrival.",
    },
  ];
  return (
    <article>
      {/* Hero — full-bleed image, content lower-left */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden">
        <SmartImage
          src={product.heroImage}
          alt={product.name}
          label={product.name}
          className="absolute inset-0 h-full w-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-black/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        <Container className="relative z-10 pb-20 md:pb-28">
          <span className="animate-rise inline-flex items-center rounded-full bg-[var(--acc)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink)]">
            0% commission
          </span>
          <h1
            className="animate-rise mt-6 max-w-3xl text-white"
            style={{ animationDelay: "0.06s" }}>
            {product.name}
          </h1>
          <p
            className="animate-rise mt-6 max-w-2xl text-xl leading-relaxed text-white/80"
            style={{ animationDelay: "0.14s" }}>
            {product.tagline}
          </p>
          <div
            className="animate-rise mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.22s" }}>
            <Button
              asChild
              size="lg"
              className="bg-[var(--acc)] text-[var(--ink)] hover:opacity-90">
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
        </Container>
      </section>

      {/* Intro */}
      <Section padding="none" className="py-24 md:py-32">
        <Container>
          <div data-reveal className="max-w-4xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
              {category?.name ?? "Solution"}
              {product.deploymentType ? ` · ${product.deploymentType}` : ""}
            </p>
            <div className="mb-6 h-px w-12 bg-[var(--acc)]" />
            <p className="font-display text-3xl font-medium leading-[1.25] text-navy md:text-[2.6rem]">
              {paras[0]}
            </p>
            {paras.slice(1).map((p, i) => (
              <p
                key={i}
                className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      {/* Signature — booking funnel: Look → Book → Pay → Stay */}
      <Section
        padding="none"
        className="border-t border-border bg-surface py-20 md:py-28">
        <Container>
          <div data-reveal className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
              The booking funnel
            </p>
            <h2 className="text-navy">From looker to booker in two clicks</h2>
          </div>
          <div
            data-reveal
            className="flex flex-col items-stretch gap-6 md:flex-row md:items-start">
            {funnel.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.label}
                  className="flex flex-1 flex-col md:flex-row md:items-start">
                  <div className="flex flex-1 flex-col">
                    <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--acc)] font-display text-lg font-medium text-[var(--ink)]">
                      {i + 1}
                    </span>
                    <div className="mb-3 inline-flex items-center gap-2 text-navy">
                      <Icon className="h-5 w-5 text-[var(--acc)]" />
                      <h3 className="text-xl font-semibold">{step.label}</h3>
                    </div>
                    <p className="leading-relaxed text-text-muted">
                      {step.line}
                    </p>
                  </div>
                  {i < funnel.length - 1 && (
                    <ArrowRight className="mx-auto my-4 h-6 w-6 rotate-90 shrink-0 text-[var(--acc)] md:mx-6 md:mt-3 md:rotate-0" />
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Conversion stat band — big numbers */}
      <Section padding="none" className="bg-[var(--ink)]">
        <Container>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 py-16 sm:grid-cols-3 md:py-24 text-center">
            {[
              { v: "0%", l: "commission" },
              { v: "+40%", l: "direct bookings" },
              { v: "24/7", l: "availability" },
            ].map((s) => (
              <div key={s.l}>
                <div className="mb-5 h-px w-10 bg-[var(--acc)] mx-auto" />
                <div className="font-display text-6xl font-medium text-white md:text-7xl">
                  {s.v}
                </div>
                <div className="mt-3 text-sm uppercase tracking-[0.18em] text-white/50">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Features — clean card grid */}
      {product.keyFeatures.length > 0 && (
        <Section padding="none" className="py-24 md:py-32">
          <Container>
            <div data-reveal className="mb-14 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                Capabilities
              </p>
              <h2 className="text-navy">
                Everything your direct channel needs
              </h2>
            </div>
            <div
              data-reveal
              className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {product.keyFeatures.map((f, i) => (
                <div key={i} className="bg-surface p-8">
                  <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--acc)]/15 text-[var(--ink)]">
                    <CalendarCheck className="h-5 w-5 text-[var(--acc)]" />
                  </span>
                  <h3 className="mb-1.5 text-lg font-semibold text-navy">
                    {f.title}
                  </h3>
                  <p className="leading-relaxed text-text-muted">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Showcase image band */}
      <section className="relative overflow-hidden bg-[var(--ink)]">
        <SmartImage
          src={`/images/products/${product.slug}/a.jpg`}
          alt={product.name}
          label={product.name}
          className="h-[55vh] w-full object-cover md:h-[65vh]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/40 to-transparent" />
        <Container className="absolute inset-x-0 bottom-0 z-10 pb-10">
          <p className="max-w-lg font-display text-2xl font-medium text-white md:text-3xl">
            Your website, your bookings.
          </p>
        </Container>
      </section>

      <StatBand
        stats={[
          { v: BUSINESS.experience, l: "In business" },
          { v: BUSINESS.happyClients, l: "Businesses served" },
          { v: "24/7", l: "Support" },
          { v: "UAE", l: "Nationwide" },
        ]}
      />

      {/* Specs + integrations — inline */}
      <Section padding="none" className="py-24 md:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            {product.specifications.length > 0 && (
              <div data-reveal>
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                  At a glance
                </p>
                <dl className="divide-y divide-border border-t border-border">
                  {product.specifications.map((s, i) => (
                    <div key={i} className="flex justify-between gap-6 py-4">
                      <dt className="text-text-muted">{s.label}</dt>
                      <dd className="text-right font-medium text-navy">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
            {product.integrations.length > 0 && (
              <div data-reveal>
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                  Integrations
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.integrations.map((it, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 border border-border bg-surface px-4 py-2 text-sm text-navy">
                      <Plug className="h-3.5 w-3.5 text-[var(--acc)]" /> {it}
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
        heading={`Interested in ${product.name}?`}
        text="Tell us about your property and our team will tailor the right setup — with installation, training and support."
        image={`/images/products/${product.slug}/a.jpg`}
      />
    </article>
  );
}
