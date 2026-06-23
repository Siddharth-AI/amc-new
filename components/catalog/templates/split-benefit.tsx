import Link from "next/link";
import { ArrowRight, Plug } from "lucide-react";
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

/* Editorial · cinematic full-bleed · navy + gold */
export function SplitBenefitTemplate({
  product,
  category,
  related,
}: TemplateProps) {
  const paras = product.description.split("\n").filter(Boolean);
  const lead = product.keyFeatures[0];
  const rest = product.keyFeatures.slice(1);
  return (
    <article>
      {/* Hero */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[var(--ink)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.heroImage}
          alt=""
          className="animate-kenburns absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/55 to-[var(--ink)]/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/80 via-[var(--ink)]/25 to-transparent" />
        <Container className="relative z-10 pb-16 md:pb-24">
          <div className="max-w-4xl text-white">
            <p className="animate-rise mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
              {category?.name ?? "Solution"}
              {product.deploymentType ? ` · ${product.deploymentType}` : ""}
            </p>
            <h1
              className="animate-rise text-white"
              style={{ animationDelay: "0.08s" }}>
              {product.name}
            </h1>
            <p
              className="animate-rise mt-6 max-w-xl text-xl leading-relaxed text-white/80"
              style={{ animationDelay: "0.16s" }}>
              {product.tagline}
            </p>
            <div
              className="animate-rise mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "0.24s" }}>
              <Button
                asChild
                size="lg"
                className="bg-[var(--acc)] text-navy hover:opacity-90">
                <Link href={enquiry(product)}>
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-navy">
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Intro statement */}
      <Section padding="none" className="py-24 md:py-32">
        <Container>
          <div data-reveal className="max-w-4xl">
            <p className="eyebrow mb-6">Overview</p>
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

      {/* Feature highlight — full-bleed image */}
      {lead && (
        <section className="relative overflow-hidden bg-[var(--ink)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/products/${product.slug}/a.jpg`}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)] via-[var(--ink)]/80 to-[var(--ink)]/30" />
          <Container className="relative z-10 py-28 md:py-40">
            <div data-reveal className="max-w-xl text-white">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                Built in
              </p>
              <h2 className="mb-4 text-white">{lead.title}</h2>
              <p className="text-lg leading-relaxed text-white/75">
                {lead.description}
              </p>
            </div>
          </Container>
        </section>
      )}

      {/* Capabilities — editorial list */}
      {rest.length > 0 && (
        <Section padding="none" className="py-24 md:py-32">
          <Container>
            <div data-reveal className="mb-14 max-w-2xl">
              <p className="eyebrow mb-3">Capabilities</p>
              <h2 className="text-navy">Everything your property needs</h2>
            </div>
            <div data-reveal className="border-t border-border">
              {rest.map((f, i) => (
                <div
                  key={i}
                  className="grid items-baseline gap-2 border-b border-border py-8 md:grid-cols-[5rem_0.9fr_1.4fr] md:gap-8">
                  <span className="font-display text-3xl font-medium text-[var(--acc)]">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-semibold text-navy">{f.title}</h3>
                  <p className="leading-relaxed text-text-muted">
                    {f.description}
                  </p>
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

      {/* Showcase image with caption */}
      <section className="relative overflow-hidden bg-[var(--ink)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/images/products/${product.slug}/b.jpg`}
          alt=""
          className="h-[60vh] w-full object-cover md:h-[70vh]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/70 to-transparent" />
        <Container className="absolute inset-x-0 bottom-0 z-10 pb-10">
          <p className="max-w-lg font-display text-2xl font-medium text-white md:text-3xl">
            One platform, every department — in perfect sync.
          </p>
        </Container>
      </section>

      {/* Specs + integrations */}
      <Section padding="none" className="py-24 md:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            {product.specifications.length > 0 && (
              <div data-reveal>
                <p className="eyebrow mb-6">At a glance</p>
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
                <p className="eyebrow mb-6">Integrations</p>
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
                  Need details for your setup?{" "}
                  <Link
                    href="/contact"
                    className="font-medium text-[var(--acc)] hover:underline">
                    Contact our team
                  </Link>
                  .
                </p>
              </div>
            )}
          </div>
        </Container>
      </Section>

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
