import Link from "next/link";
import { ArrowRight, Package, Plug, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/ui/smart-image";
import { CtaBanner } from "@/components/home/cta";
import { BUSINESS } from "@/lib/business";
import { TemplateProps, enquiry, RelatedStrip, StatBand } from "./shared";

/* POS accessories · headline hero + full-width image band · accessory card grid + dual-image showcase (theme via shell vars) */
export function AccessoryGridTemplate({
  product,
  category,
  related,
}: TemplateProps) {
  const paras = product.description.split("\n").filter(Boolean);
  return (
    <article>
      {/* Hero — clean light, headline left + CTAs */}
      <section className="relative overflow-hidden border-b border-border bg-background pt-22">
        <Container className="relative">
          <div className="max-w-3xl">
            <p className="animate-rise mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
              <Package className="h-3.5 w-3.5" />{" "}
              {category?.name ?? "Accessories"}
              {product.deploymentType ? ` · ${product.deploymentType}` : ""}
            </p>
            <h1
              className="animate-rise text-navy"
              style={{ animationDelay: "0.06s" }}>
              {product.name}
            </h1>
            <p
              className="animate-rise mt-6 max-w-xl text-xl leading-relaxed text-text-secondary"
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
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
            </div>
          </div>
        </Container>
        {/* Full-width image band with ink scrim */}
        <div
          className="animate-rise relative mt-16 aspect-[16/7] w-full overflow-hidden md:aspect-[16/6]"
          style={{ animationDelay: "0.18s" }}>
          <SmartImage
            src={product.heroImage}
            alt={product.name}
            label={product.name}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/70 to-transparent" />
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
              <p
                key={i}
                className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      {/* SIGNATURE — accessory card grid */}
      {product.keyFeatures.length > 0 && (
        <Section
          padding="none"
          className="border-y border-border bg-surface py-20 md:py-28">
          <Container>
            <div data-reveal className="mb-14 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                Accessories
              </p>
              <h2 className="text-navy">Everything to complete your counter</h2>
            </div>
            <div
              data-reveal
              className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {product.keyFeatures.map((f, i) => (
                <div key={i} className="flex flex-col bg-surface p-8">
                  <span className="mb-6 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--acc)]/15 text-[var(--ink)]">
                    <Plug className="h-5 w-5" />
                  </span>
                  <h3 className="mb-2 text-lg font-semibold text-navy">
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

      {/* Dual-image showcase */}
      <section className="grid grid-cols-1 sm:grid-cols-2">
        {["a", "b"].map((n) => (
          <div
            key={n}
            className="relative aspect-[4/3] overflow-hidden bg-[var(--ink)] sm:aspect-square md:aspect-[4/3]">
            <SmartImage
              src={`/images/products/${product.slug}/${n}.jpg`}
              alt={product.name}
              label={product.name}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/30 to-transparent" />
          </div>
        ))}
      </section>

      <StatBand
        stats={[
          { v: BUSINESS.experience, l: "In business" },
          { v: BUSINESS.happyClients, l: "Businesses served" },
          { v: "Install", l: "& setup included" },
          { v: "UAE", l: "Nationwide" },
        ]}
      />

      {/* Spec table — two-column dl */}
      {product.specifications.length > 0 && (
        <Section padding="none" className="py-24 md:py-32">
          <Container>
            <div data-reveal className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                Details
              </p>
              <h2 className="text-navy">Specifications</h2>
            </div>
            <dl
              data-reveal
              className="mx-auto max-w-3xl divide-y divide-border border-y border-border">
              {product.specifications.map((s, i) => (
                <div key={i} className="flex justify-between gap-6 py-4">
                  <dt className="text-text-muted">{s.label}</dt>
                  <dd className="text-right font-medium text-navy">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </Section>
      )}

      {/* Ideal for — audience chips */}
      {product.audience.length > 0 && (
        <Section
          padding="none"
          className="border-t border-border bg-surface py-20 md:py-24">
          <Container>
            <div data-reveal className="mb-10 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                Who it&apos;s for
              </p>
              <h2 className="text-navy">Ideal for</h2>
            </div>
            <div data-reveal className="flex flex-wrap gap-3">
              {product.audience.map((a, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 border border-border bg-background px-4 py-2 text-sm font-medium text-navy">
                  <Check className="h-3.5 w-3.5 text-[var(--acc)]" /> {a}
                </span>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <RelatedStrip related={related} />
      <CtaBanner
        heading={`Need ${product.name}?`}
        text="Tell us about your counter and our team will pair the right accessories — with installation, setup and support."
        image={`/images/products/${product.slug}/a.jpg`}
      />
    </article>
  );
}
