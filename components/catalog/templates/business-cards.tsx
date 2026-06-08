import Link from "next/link";
import { ArrowRight, Check, Sparkles, Smartphone, Apple, PlayCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/ui/smart-image";
import { CtaBanner } from "@/components/home/cta";
import { BUSINESS } from "@/lib/business";
import { TemplateProps, enquiry, RelatedStrip, FaqList, StatBand } from "./shared";

/* Fresh SaaS · full-bleed hero · charcoal + blush */
export function BusinessCardsTemplate({ product, category, related }: TemplateProps) {
  const paras = product.description.split("\n").filter(Boolean);
  return (
    <article>
      {/* Hero */}
      <section className="relative flex min-h-screen items-end overflow-hidden bg-[var(--ink)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.heroImage} alt="" className="animate-kenburns absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/55 to-[var(--ink)]/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/85 via-[var(--ink)]/25 to-transparent" />
        <Container className="relative z-10 pb-20 pt-40 md:pb-28">
          <div className="max-w-3xl text-white">
            <p className="animate-rise mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]"><Sparkles className="h-3.5 w-3.5" /> {category?.name ?? "Cloud software"}</p>
            <h1 className="animate-rise text-white" style={{ animationDelay: "0.06s" }}>{product.name}</h1>
            <p className="animate-rise mt-6 max-w-xl text-xl leading-relaxed text-white/80" style={{ animationDelay: "0.14s" }}>{product.tagline}</p>
            <div className="animate-rise mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.22s" }}>
              <Button asChild size="lg" className="bg-[var(--acc)] text-[var(--ink)] hover:opacity-90"><Link href={enquiry(product)}>Book a Demo <ArrowRight className="h-4 w-4" /></Link></Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-[var(--ink)]"><Link href="/contact">Talk to Us</Link></Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <Section padding="none" className="py-24 md:py-32">
        <Container>
          <div data-reveal className="max-w-4xl">
            <div className="mb-6 h-px w-12 bg-[var(--acc)]" />
            <p className="font-display text-3xl font-medium leading-[1.25] text-navy md:text-[2.6rem]">{paras[0]}</p>
            {paras.slice(1).map((p, i) => <p key={i} className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary">{p}</p>)}
          </div>
        </Container>
      </Section>

      {/* Feature card grid */}
      {product.keyFeatures.length > 0 && (
        <Section padding="none" className="border-y border-border bg-surface py-20 md:py-28">
          <Container>
            <div data-reveal className="mb-14 max-w-2xl"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">Everything included</p><h2 className="text-navy">One platform, every tool you need</h2></div>
            <div data-reveal className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {product.keyFeatures.map((f, i) => (
                <div key={i} className="group bg-surface p-8 transition-colors hover:bg-surface-sunken">
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--acc)]/15 text-[var(--ink)] transition-colors group-hover:bg-[var(--acc)] group-hover:text-white"><Check className="h-5 w-5" /></span>
                  <h3 className="mb-2 text-lg font-semibold text-navy">{f.title}</h3>
                  <p className="leading-relaxed text-text-muted">{f.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Closer look */}
      <Section padding="none" className="py-20 md:py-28">
        <Container>
          <div data-reveal className="mb-12 max-w-2xl"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">A closer look</p><h2 className="text-navy">Designed to be a joy to use</h2></div>
          <div data-reveal className="grid gap-4 sm:grid-cols-2">
            <div className="aspect-[4/3] overflow-hidden border border-border"><SmartImage src={`/images/products/${product.slug}/a.jpg`} alt={product.name} label={product.name} /></div>
            <div className="aspect-[4/3] overflow-hidden border border-border"><SmartImage src={`/images/products/${product.slug}/b.jpg`} alt={product.name} label={product.name} /></div>
          </div>
        </Container>
      </Section>

      {/* Made-for */}
      {product.audience.length > 0 && (
        <Section padding="none" className="border-t border-border pb-20 md:pb-28">
          <Container>
            <div data-reveal className="mb-10 max-w-2xl pt-20 md:pt-28"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">Made for</p><h2 className="text-navy">Built for businesses like yours</h2></div>
            <div data-reveal className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {product.audience.map((a, i) => (
                <div key={i} className="flex items-center gap-4 bg-surface p-7"><span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--acc)]/15 text-[var(--ink)]"><Check className="h-5 w-5" /></span><span className="font-medium text-navy">{a}</span></div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <StatBand stats={[{ v: BUSINESS.experience, l: "In business" }, { v: BUSINESS.happyClients, l: "Clients served" }, { v: "24/7", l: "Support" }, { v: "Cloud", l: "Anywhere access" }]} />

      {/* App-download band */}
      <Section padding="none" className="py-20 md:py-28">
        <Container>
          <div data-reveal className="relative overflow-hidden border border-border bg-surface-sunken px-8 py-14 text-center md:py-20">
            <div className="relative mx-auto max-w-xl">
              <span className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--acc)]/15 text-[var(--ink)]"><Smartphone className="h-6 w-6" /></span>
              <h2 className="mb-3 text-navy">Run it from your pocket</h2>
              <p className="mb-8 text-text-muted">Manage bookings, staff and billing on the go with the mobile apps.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="inline-flex items-center gap-2 bg-[var(--ink)] px-5 py-3 text-sm text-white"><Apple className="h-5 w-5" /> App Store</span>
                <span className="inline-flex items-center gap-2 bg-[var(--ink)] px-5 py-3 text-sm text-white"><PlayCircle className="h-5 w-5" /> Google Play</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Specs */}
      {product.specifications.length > 0 && (
        <Section padding="none" className="border-t border-border py-16 md:py-20">
          <Container>
            <dl data-reveal className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3">
              {product.specifications.map((s, i) => (
                <div key={i} className="border-t-2 border-[var(--acc)] pt-4"><dt className="text-xs font-semibold uppercase tracking-widest text-text-muted">{s.label}</dt><dd className="mt-1 text-navy">{s.value}</dd></div>
              ))}
            </dl>
          </Container>
        </Section>
      )}

      <FaqList product={product} />
      <RelatedStrip related={related} />
      <CtaBanner heading={`Grow your business with ${product.name}`} text="Book a free demo and our team will set you up with the right plan, training and support." image={`/images/products/${product.slug}/a.jpg`} />
    </article>
  );
}
