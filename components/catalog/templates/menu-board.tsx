import Link from "next/link";
import { ArrowRight, UtensilsCrossed } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/ui/smart-image";
import { CtaBanner } from "@/components/home/cta";
import { BUSINESS } from "@/lib/business";
import { TemplateProps, enquiry, RelatedStrip, FaqList, StatBand } from "./shared";

/* Restaurant cloud POS · warm hospitality · menu-styled feature list */
const ORDER_TYPES = [
  "Dine-in",
  "Takeaway",
  "Delivery",
  "Room service",
  "No charge orders",
];

export function MenuBoardTemplate({ product, category, related }: TemplateProps) {
  const paras = product.description.split("\n").filter(Boolean);

  return (
    <article>
      {/* Hero — full-bleed image, warm scrim, content lower-left */}
      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-[var(--ink)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.heroImage} alt="" className="animate-kenburns absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/65 to-[var(--ink)]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/85 via-[var(--ink)]/30 to-transparent" />
        <Container className="relative z-10 pb-16 pt-40 md:pb-24">
          <div className="max-w-3xl text-white">
            <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)] backdrop-blur-sm">
              <UtensilsCrossed className="h-3.5 w-3.5" />
              {category?.name ?? "Restaurant POS"}
            </span>
            <h1 className="animate-rise mt-6 text-white" style={{ animationDelay: "0.08s" }}>{product.name}</h1>
            <p className="animate-rise mt-6 max-w-xl text-xl leading-relaxed text-white/80" style={{ animationDelay: "0.16s" }}>{product.tagline}</p>
            <div className="animate-rise mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.24s" }}>
              <Button asChild size="lg" className="bg-[var(--acc)] text-[var(--ink)] hover:opacity-90"><Link href={enquiry(product)}>Get a Quote <ArrowRight className="h-4 w-4" /></Link></Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-[var(--ink)]"><Link href="/contact">Talk to an Expert</Link></Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Order-types row */}
      <Section padding="none" className="border-b border-border bg-surface">
        <Container>
          <div className="flex flex-wrap items-center gap-3 py-6">
            <span className="mr-1 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">Built for</span>
            {ORDER_TYPES.map((t) => (
              <span key={t} className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-sm font-medium text-navy">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--acc)]" />
                {t}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      {/* Intro statement */}
      <Section padding="none" className="py-24 md:py-32">
        <Container>
          <div data-reveal className="max-w-4xl">
            <p className="eyebrow mb-6">Overview</p>
            <p className="font-display text-3xl font-medium leading-[1.25] text-navy md:text-[2.6rem]">{paras[0]}</p>
            {paras.slice(1).map((p, i) => (
              <p key={i} className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary">{p}</p>
            ))}
          </div>
        </Container>
      </Section>

      {/* Signature — menu-styled feature list */}
      {product.keyFeatures.length > 0 && (
        <Section padding="none" className="pb-24 md:pb-32">
          <Container>
            <div data-reveal className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b-2 border-navy pb-6">
              <div>
                <p className="eyebrow mb-3">The menu</p>
                <h2 className="text-navy">What&rsquo;s on the menu</h2>
              </div>
              <span className="font-display text-sm uppercase tracking-[0.2em] text-text-muted">Served fresh, daily</span>
            </div>
            <dl data-reveal>
              {product.keyFeatures.map((f, i) => (
                <div key={i} className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-dashed border-border py-6">
                  <dt className="font-display text-xl font-medium text-navy">{f.title}</dt>
                  <span className="hidden h-px min-w-12 flex-1 translate-y-[-2px] border-b border-dashed border-border sm:block" aria-hidden="true" />
                  <dd className="max-w-xl text-left leading-relaxed text-text-muted sm:text-right">{f.description}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </Section>
      )}

      {/* Showcase image band with caption */}
      <section className="relative overflow-hidden bg-[var(--ink)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/images/products/${product.slug}/a.jpg`} alt="" className="h-[55vh] w-full object-cover md:h-[65vh]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/40 to-transparent" />
        <Container className="absolute inset-x-0 bottom-0 z-10 pb-10 md:pb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">From counter to kitchen</p>
          <p className="max-w-lg font-display text-2xl font-medium text-white md:text-3xl">Every order flows seamlessly — front of house, kitchen and back office in perfect sync.</p>
        </Container>
      </section>

      <StatBand stats={[{ v: BUSINESS.experience, l: "In business" }, { v: BUSINESS.happyClients, l: "Businesses served" }, { v: "24/7", l: "Support" }, { v: "UAE", l: "Nationwide" }]} />

      {/* Specs — two-column dl */}
      {product.specifications.length > 0 && (
        <Section padding="none" className="py-24 md:py-32">
          <Container>
            <div data-reveal className="mb-12 max-w-2xl">
              <p className="eyebrow mb-3">At a glance</p>
              <h2 className="text-navy">Specifications</h2>
            </div>
            <dl data-reveal className="grid gap-x-16 gap-y-0 border-t border-border sm:grid-cols-2">
              {product.specifications.map((s, i) => (
                <div key={i} className="flex justify-between gap-6 border-b border-border py-4">
                  <dt className="text-text-muted">{s.label}</dt>
                  <dd className="text-right font-medium text-navy">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </Section>
      )}

      <FaqList product={product} />
      <RelatedStrip related={related} />
      <CtaBanner heading={`Interested in ${product.name}?`} text="Tell us about your restaurant and our team will tailor the right setup — with installation, training and support." image={`/images/products/${product.slug}/a.jpg`} />
    </article>
  );
}
