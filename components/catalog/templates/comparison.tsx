import Link from "next/link";
import { ArrowRight, Check, X, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/ui/smart-image";
import { CtaBanner } from "@/components/home/cta";
import { TemplateProps, enquiry, VideoGallery } from "./shared";

/* Premium analytics · fully dark · emerald accent */
export function ComparisonTemplate({ product, related }: TemplateProps) {
  const without = [
    "Manual, guesswork decisions",
    "Hours lost to admin",
    "Missed revenue, inconsistent results",
    "No single source of truth",
  ];
  const withP = product.highlights.length
    ? product.highlights
    : product.keyFeatures.slice(0, 4).map((f) => f.title);
  const steps = product.keyFeatures.slice(0, 3);
  return (
    <article className="bg-[var(--ink)] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--ink)] pt-11 pb-16 md:pb-20">
        <div className="dots-pattern absolute inset-0 opacity-[0.06]" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[var(--acc)]/30 blur-[130px]" />
        <Container className="relative">
          <div className="mx-auto max-w-7xl text-center">
            {product.deploymentType && (
              <span className="animate-rise mb-5 inline-flex items-center  bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
                {product.deploymentType}
              </span>
            )}
            <h1
              className="animate-rise text-white"
              style={{ animationDelay: "0.05s" }}>
              {product.name}
            </h1>
            <p
              className="animate-rise mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75"
              style={{ animationDelay: "0.12s" }}>
              {product.tagline}
            </p>
            <div
              className="animate-rise mt-9 flex flex-wrap justify-center gap-4"
              style={{ animationDelay: "0.2s" }}>
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
          </div>
          <div
            className="animate-rise mt-14 grid gap-4 md:grid-cols-2"
            style={{ animationDelay: "0.28s" }}>
            <div className="border border-white/10 bg-white/[0.03] p-8">
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/45">
                The old way
              </p>
              <ul className="space-y-4">
                {without.map((w, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/60">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-red-400/70" />{" "}
                    {w}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-[var(--acc)]/40 bg-[var(--acc)]/10 p-8">
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-[var(--acc)]">
                With {product.name}
              </p>
              <ul className="space-y-4">
                {withP.map((w, i) => (
                  <li key={i} className="flex items-start gap-3 text-white">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--acc)]" />{" "}
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ROI stat band */}
      <Section padding="none" className="border-y border-white/10 py-14">
        <Container>
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {[
              { v: "+11%", l: "profit per 1% pricing gain" },
              { v: "10–30%", l: "revenue growth" },
              { v: "4 hrs", l: "saved per day" },
              { v: "365", l: "days optimised" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-4xl font-medium text-white md:text-5xl">
                  {s.v}
                </div>
                <div className="mt-1 text-sm text-white/50">{s.l}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Product preview */}
      <Section padding="none" className="py-12 md:py-16">
        <Container>
          <div
            data-reveal
            className="relative overflow-hidden border border-white/10">
            <div className="aspect-[16/8]">
              <SmartImage
                src={`/images/products/${product.slug}/a.jpg`}
                alt={product.name}
                label={product.name}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/70 to-transparent" />
            <span className="absolute bottom-5 left-6 text-xs font-semibold uppercase tracking-widest text-white/80">
              Live dashboard preview
            </span>
          </div>
        </Container>
      </Section>

      {/* How it works */}
      {steps.length > 0 && (
        <Section padding="none" className="py-16 md:py-24">
          <Container>
            <div data-reveal className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                How it works
              </p>
              <h2 className="text-white">Intelligent pricing, on autopilot</h2>
            </div>
            <div
              data-reveal
              className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
              {steps.map((f, i) => (
                <div key={i} className="bg-[var(--ink)] p-8">
                  <div className="mb-5 font-display text-5xl font-medium text-[var(--acc)]/50">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {f.title}
                  </h3>
                  <p className="leading-relaxed text-white/60">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Features — dark 2-col */}
      {product.keyFeatures.length > 0 && (
        <Section
          padding="none"
          className="border-t border-white/10 py-16 md:py-24">
          <Container>
            <div data-reveal className="mb-10 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                Capabilities
              </p>
              <h2 className="text-white">What you get</h2>
            </div>
            <div data-reveal className="grid gap-x-12 gap-y-8 md:grid-cols-2">
              {product.keyFeatures.map((f, i) => (
                <div
                  key={i}
                  className="flex gap-4 border-t border-white/10 pt-6">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--acc)]" />
                  <div>
                    <h3 className="mb-1 font-semibold text-white">{f.title}</h3>
                    <p className="text-sm leading-relaxed text-white/55">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Specs dark */}
      {product.specifications.length > 0 && (
        <Section padding="none" className="py-16 md:py-20">
          <Container>
            <div
              data-reveal
              className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
              {product.specifications.map((s, i) => (
                <div key={i} className="bg-[var(--ink)] px-7 py-6">
                  <dt className="text-xs font-semibold uppercase tracking-widest text-white/40">
                    {s.label}
                  </dt>
                  <dd className="mt-1 text-lg text-white">{s.value}</dd>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* FAQ dark */}
      {product.faqs.length > 0 && (
        <Section
          padding="none"
          className="border-t border-white/10 py-16 md:py-24">
          <Container>
            <h2 data-reveal className="mb-10 text-white">
              Frequently asked
            </h2>
            <div
              data-reveal
              className="mx-auto max-w-3xl divide-y divide-white/10 border-y border-white/10">
              {product.faqs.map((f, i) => (
                <details key={i} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-white">
                    {f.q}
                    <ChevronDown className="h-5 w-5 shrink-0 text-white/40 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 leading-relaxed text-white/60">{f.a}</p>
                </details>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Related — dark strip */}
      {related.length > 0 && (
        <Section
          padding="none"
          className="border-t border-white/10 py-16 md:py-20">
          <Container>
            <h2 data-reveal className="mb-8 text-white">
              Related solutions
            </h2>
            <div
              data-reveal
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.categorySlug}/${p.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col overflow-hidden border border-white/10 bg-white/[0.03] transition-colors hover:border-[var(--acc)]/40">
                  <div className="aspect-[16/10] overflow-hidden">
                    <SmartImage
                      src={p.heroImage}
                      alt={p.name}
                      label={p.name}
                      className="transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-1 text-lg font-semibold text-white">
                      {p.name}
                    </h3>
                    <p className="line-clamp-2 text-sm text-white/55">
                      {p.tagline}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <VideoGallery product={product} />
      <CtaBanner
        heading={`See what ${product.name} can do for you`}
        text="Get a tailored walkthrough and quote for your property or business."
        image={`/images/products/${product.slug}/a.jpg`}
      />
    </article>
  );
}
