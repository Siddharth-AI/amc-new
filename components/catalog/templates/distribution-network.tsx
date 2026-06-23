import Link from "next/link";
import {
  ArrowRight,
  Check,
  Globe,
  Layers,
  RefreshCw,
  ShieldCheck,
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
  VideoGallery,
} from "./shared";

/* Hotel channel manager · dark typographic hero · connectivity grid signature · light features (theme via shell vars) */
export function DistributionNetworkTemplate({
  product,
  category,
  related,
}: TemplateProps) {
  const paras = product.description.split("\n").filter(Boolean);

  // Big stat row under the hero.
  const stats = [
    { v: "130+", l: "channels" },
    { v: "Real-time", l: "sync" },
    { v: "Rate parity", l: "everywhere" },
    { v: "Zero", l: "overbooking" },
  ];

  // Connectivity grid — real product data first, then generic distribution channels.
  const generic = [
    "OTAs",
    "GDS",
    "Booking.com",
    "Airbnb",
    "Expedia",
    "Vacation Rentals",
    "Your Website",
    "Metasearch",
  ];
  const seen = new Set<string>();
  const channels = [...product.integrations, ...product.audience, ...generic]
    .map((c) => c.trim())
    .filter((c) => {
      const key = c.toLowerCase();
      if (!c || seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 16);

  return (
    <article>
      {/* Hero — DARK, typographic (no photo) */}
      <section className="relative overflow-hidden bg-[var(--ink)] pt-28 pb-20 text-white md:pb-28">
        <div className="dots-pattern pointer-events-none absolute inset-0 opacity-[0.07]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--acc)]/25 blur-[130px]" />
        <Container className="relative">
          <div className="mx-auto max-w-5xl text-center">
            <p className="animate-rise mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
              {category?.name ?? "Distribution"}
              {product.deploymentType ? ` · ${product.deploymentType}` : ""}
            </p>
            <h1
              className="animate-rise text-white"
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
                className="border-white/25 text-white hover:bg-white/10">
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
            </div>
          </div>

          {/* Big stat row right under hero */}
          <div
            className="animate-rise mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-px overflow-hidden border border-white/15 bg-white/10 sm:grid-cols-4"
            style={{ animationDelay: "0.3s" }}>
            {stats.map((s) => (
              <div key={s.l} className="bg-[var(--ink)] p-7 text-center">
                <div className="font-display text-3xl font-medium text-white md:text-4xl">
                  {s.v}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Intro — switch to LIGHT */}
      <Section padding="none" className="bg-background py-24 md:py-32">
        <Container>
          <div data-reveal className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
              overview
            </p>
            <div className="mx-auto mb-6 h-px w-12 bg-[var(--acc)]" />
            <p className="font-display text-3xl font-medium leading-[1.3] text-navy md:text-4xl">
              {paras[0]}
            </p>
            {paras[1] && (
              <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-text-muted">
                {paras[1]}
              </p>
            )}
          </div>
        </Container>
      </Section>

      {/* How it connects — 3 supporting points */}
      <Section padding="none" className="pb-8">
        <Container>
          <div
            data-reveal
            className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
            {[
              {
                icon: RefreshCw,
                t: "Two-way sync",
                d: "Rates, availability and restrictions update everywhere in real time — no manual reloading.",
              },
              {
                icon: ShieldCheck,
                t: "No overbooking",
                d: "A shared inventory pool closes rooms the moment they sell, on every connected channel.",
              },
              {
                icon: Layers,
                t: "One control panel",
                d: "Manage every OTA, GDS and your own website from a single dashboard.",
              },
            ].map((b) => (
              <div key={b.t} className="bg-surface p-8">
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--acc)]/15 text-[var(--ink)]">
                  <b.icon className="h-5 w-5" />
                </span>
                <h3 className="mb-1.5 text-lg font-semibold text-navy">
                  {b.t}
                </h3>
                <p className="leading-relaxed text-text-muted">{b.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Features — clean two-column list */}
      {product.keyFeatures.length > 0 && (
        <Section
          padding="none"
          className="border-t border-border bg-surface py-20 md:py-28">
          <Container>
            <div data-reveal className="mb-14 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                Capabilities
              </p>
              <h2 className="text-navy">Everything in one place</h2>
            </div>
            <div data-reveal className="grid gap-x-12 gap-y-9 md:grid-cols-2">
              {product.keyFeatures.map((f, i) => (
                <div key={i} className="flex gap-4 border-t border-border pt-7">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--acc)]/15 text-[var(--ink)]">
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="mb-1.5 text-lg font-semibold text-navy">
                      {f.title}
                    </h3>
                    <p className="leading-relaxed text-text-muted">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* SIGNATURE — connectivity / channels grid (dark) */}
      <section className="relative overflow-hidden border-t border-white/10 bg-[var(--ink)] py-20 text-white md:py-28">
        <div className="dots-pattern pointer-events-none absolute inset-0 opacity-[0.05]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[var(--acc)]/20 blur-[120px]" />
        <Container className="relative">
          <div data-reveal className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
              Connectivity
            </p>
            <h2 className="text-white">One dashboard, every channel</h2>
            <p className="mx-auto mt-4 max-w-lg leading-relaxed text-white/60">
              Push rates and availability across your entire distribution
              network from a single screen — and pull every reservation back in,
              automatically.
            </p>
          </div>
          <div
            data-reveal
            className="grid grid-cols-2 gap-px overflow-hidden border border-white/15 bg-white/10 sm:grid-cols-3 md:grid-cols-4">
            {channels.map((c) => (
              <div
                key={c}
                className="group flex min-h-[112px] flex-col justify-between bg-[var(--ink)] p-5 transition-colors hover:bg-white/[0.04] md:min-h-[128px] md:p-6">
                <Globe className="h-4 w-4 text-[var(--acc)]" />
                <span className="text-sm font-medium leading-snug text-white md:text-base">
                  {c}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Showcase image band */}
      <section className="relative overflow-hidden bg-[var(--ink)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/images/products/${product.slug}/b.jpg`}
          alt=""
          className="h-[50vh] w-full object-cover md:h-[60vh]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/75 to-transparent" />
        <Container className="absolute inset-x-0 bottom-0 z-10 pb-10">
          <p className="max-w-lg font-display text-2xl font-medium text-white md:text-3xl">
            Sell more rooms, on more channels, with less work.
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

      {/* Specs */}
      {product.specifications.length > 0 && (
        <Section padding="none" className="py-24 md:py-32">
          <Container>
            <div data-reveal className="mx-auto max-w-3xl">
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
          </Container>
        </Section>
      )}

      <VideoGallery product={product} />
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
