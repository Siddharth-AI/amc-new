import Link from "next/link";
import { ArrowRight, Plug, Layers } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/ui/smart-image";
import { CtaBanner } from "@/components/home/cta";
import { BUSINESS } from "@/lib/business";
import { TemplateProps, enquiry, RelatedStrip, FaqList, StatBand } from "./shared";

/* Modular ERP & accounting · stacked full-width module bands (theme via shell vars) */
export function ModuleBandsTemplate({ product, category, related }: TemplateProps) {
  const paras = product.description.split("\n").filter(Boolean);

  return (
    <article>
      {/* Hero — clean light editorial, then a full-width image band */}
      <section className="bg-background">
        <Container className="pb-16 pt-40 md:pb-20 md:pt-48">
          <div className="max-w-4xl">
            <p className="animate-rise mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
              <Layers className="h-3.5 w-3.5" />
              {category?.name ?? "Business Software"}
              {product.deploymentType ? ` · ${product.deploymentType}` : ""}
            </p>
            <h1 className="animate-rise text-navy" style={{ animationDelay: "0.08s" }}>
              {product.name}
            </h1>
            <p
              className="animate-rise mt-6 max-w-2xl text-xl leading-relaxed text-text-muted"
              style={{ animationDelay: "0.16s" }}>
              {product.tagline}
            </p>
            <div
              className="animate-rise mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "0.24s" }}>
              <Button asChild size="lg" className="bg-[var(--acc)] text-[var(--ink)] hover:opacity-90">
                <Link href={enquiry(product)}>
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border text-navy hover:bg-surface">
                <Link href="/contact">Talk to Our Team</Link>
              </Button>
            </div>
          </div>
        </Container>

        {/* Full-width hero image band with ink scrim */}
        <div className="relative h-[44vh] w-full overflow-hidden bg-[var(--ink)] md:h-[58vh]">
          <SmartImage
            src={product.heroImage}
            alt={product.name}
            label={product.name}
            priority
            className="animate-rise"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/30 to-transparent" />
        </div>
      </section>

      {/* Intro statement */}
      <Section padding="none" className="py-24 md:py-32">
        <Container>
          <div data-reveal className="max-w-4xl">
            <div className="mb-6 h-px w-12 bg-[var(--acc)]" />
            <p className="font-display text-3xl font-medium leading-[1.25] text-navy md:text-[2.6rem]">
              {paras[0]}
            </p>
            {paras.slice(1).map((p, i) => (
              <p key={i} className="mt-8 max-w-2xl text-lg leading-relaxed text-text-muted">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      {/* SIGNATURE — stacked full-width module bands (alternating background / surface) */}
      {product.keyFeatures.length > 0 && (
        <section>
          {product.keyFeatures.map((f, i) => (
            <Section
              key={i}
              padding="none"
              className={`border-t border-border py-24 md:py-32 ${
                i % 2 === 0 ? "bg-background" : "bg-surface"
              }`}>
              <Container>
                <div data-reveal className="max-w-4xl">
                  <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                    Module {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display text-3xl font-medium leading-[1.15] text-navy md:text-5xl">
                    {f.title}
                  </h3>
                  <p className="mt-8 max-w-3xl text-lg leading-relaxed text-text-muted">
                    {f.description}
                  </p>
                  <div className="mt-12 h-px w-full bg-[var(--acc)]" />
                </div>
              </Container>
            </Section>
          ))}
        </section>
      )}

      {/* Highlights — module summary (optional) */}
      {product.highlights.length > 0 && (
        <Section padding="none" className="border-t border-border py-24 md:py-32">
          <Container>
            <div data-reveal className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                Why teams choose it
              </p>
              <h2 className="text-navy">Built to scale with you</h2>
            </div>
            <ul data-reveal className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {product.highlights.map((h, i) => (
                <li key={i} className="bg-background p-8">
                  <span className="font-display text-2xl font-medium text-[var(--acc)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 leading-relaxed text-navy">{h}</p>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      {/* Framed dashboard image band with caption */}
      <Section padding="none" className="border-t border-border py-24 md:py-32">
        <Container>
          <figure data-reveal>
            <div className="relative aspect-[16/9] w-full overflow-hidden border border-border bg-[var(--ink)]">
              <SmartImage
                src={`/images/products/${product.slug}/a.jpg`}
                alt={`${product.name} dashboard`}
                label={product.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/60 to-transparent" />
            </div>
            <figcaption className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted">
              One workspace for every department — accounting, inventory and operations, perfectly in sync.
            </figcaption>
          </figure>
        </Container>
      </Section>

      <StatBand
        stats={[
          { v: BUSINESS.experience, l: "In business" },
          { v: BUSINESS.happyClients, l: "Businesses served" },
          { v: "24/7", l: "Support" },
          { v: "UAE", l: "Nationwide" },
        ]}
      />

      {/* Integrations + Specifications */}
      <Section padding="none" className="py-24 md:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            {product.integrations.length > 0 && (
              <div data-reveal>
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                  Integrations
                </p>
                <h2 className="mb-8 text-navy">Connects to your stack</h2>
                <div className="flex flex-wrap gap-3">
                  {product.integrations.map((it, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 border border-border bg-surface px-4 py-2 text-sm text-navy">
                      <Plug className="h-3.5 w-3.5 text-[var(--acc)]" /> {it}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-sm text-text-muted">
                  Need a specific integration?{" "}
                  <Link href="/contact" className="font-medium text-[var(--acc)] hover:underline">
                    Contact our team
                  </Link>
                  .
                </p>
              </div>
            )}
            {product.specifications.length > 0 && (
              <div data-reveal>
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                  At a glance
                </p>
                <h2 className="mb-8 text-navy">The details</h2>
                <dl className="divide-y divide-border border-y border-border">
                  {product.specifications.map((s, i) => (
                    <div key={i} className="flex justify-between gap-6 py-4">
                      <dt className="text-text-muted">{s.label}</dt>
                      <dd className="text-right font-medium text-navy">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </Container>
      </Section>

      <FaqList product={product} />
      <RelatedStrip related={related} />
      <CtaBanner
        heading={`Ready to run on ${product.name}?`}
        text="Tell us how your business operates and our team will configure the right modules — with migration, training and support."
        image={`/images/products/${product.slug}/a.jpg`}
      />
    </article>
  );
}
