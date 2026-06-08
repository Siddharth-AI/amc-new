import Link from "next/link";
import { ArrowRight, Store, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/ui/smart-image";
import { CtaBanner } from "@/components/home/cta";
import { BUSINESS } from "@/lib/business";
import { TemplateProps, enquiry, RelatedStrip, FaqList, StatBand } from "./shared";

/* Light hero + 3-image strip · industry/use-case grid (theme via shell vars) */
export function IndustryGridTemplate({ product, category, related }: TemplateProps) {
  const paras = product.description.split("\n").filter(Boolean);
  return (
    <article>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-background pt-28 md:pt-32">
        <Container className="relative">
          <div className="max-w-3xl">
            <p className="animate-rise mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]"><Store className="h-3.5 w-3.5" /> {category?.name ?? "Solution"}</p>
            <h1 className="animate-rise text-navy" style={{ animationDelay: "0.06s" }}>{product.name}</h1>
            <p className="animate-rise mt-6 max-w-xl text-xl leading-relaxed text-text-secondary" style={{ animationDelay: "0.14s" }}>{product.tagline}</p>
            <div className="animate-rise mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.22s" }}>
              <Button asChild size="lg" className="bg-[var(--acc)] text-[var(--ink)] hover:opacity-90"><Link href={enquiry(product)}>Get a Quote <ArrowRight className="h-4 w-4" /></Link></Button>
              <Button asChild size="lg" variant="outline"><Link href="/contact">Talk to an Expert</Link></Button>
            </div>
          </div>
          {/* 3-image strip */}
          <div className="animate-rise mt-14 grid grid-cols-3 gap-2 md:gap-3" style={{ animationDelay: "0.18s" }}>
            {["hero", "a", "b"].map((n) => (
              <div key={n} className="aspect-[3/4] overflow-hidden sm:aspect-[4/3]">
                <SmartImage src={`/images/products/${product.slug}/${n}.jpg`} alt={product.name} label={product.name} />
              </div>
            ))}
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

      {/* Industries / who it's for */}
      {product.audience.length > 0 && (
        <Section padding="none" className="border-y border-border bg-surface py-20 md:py-28">
          <Container>
            <div data-reveal className="mb-12 max-w-2xl"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">Industries</p><h2 className="text-navy">Built for every kind of store</h2></div>
            <div data-reveal className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {product.audience.map((a, i) => (
                <div key={i} className="group flex items-center gap-4 bg-surface p-8 transition-colors hover:bg-surface-sunken">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--acc)]/15 text-[var(--ink)] transition-colors group-hover:bg-[var(--acc)] group-hover:text-white"><Check className="h-5 w-5" /></span>
                  <span className="font-medium text-navy">{a}</span>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Features — editorial list */}
      {product.keyFeatures.length > 0 && (
        <Section padding="none" className="py-20 md:py-28">
          <Container>
            <div data-reveal className="mb-14 max-w-2xl"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">Capabilities</p><h2 className="text-navy">Everything in one place</h2></div>
            <div data-reveal className="border-t border-border">
              {product.keyFeatures.map((f, i) => (
                <div key={i} className="grid items-baseline gap-2 border-b border-border py-8 md:grid-cols-[5rem_0.9fr_1.4fr] md:gap-8">
                  <span className="font-display text-3xl font-medium text-[var(--acc)]">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-xl font-semibold text-navy">{f.title}</h3>
                  <p className="leading-relaxed text-text-muted">{f.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <StatBand stats={[{ v: BUSINESS.experience, l: "In business" }, { v: BUSINESS.happyClients, l: "Businesses served" }, { v: "24/7", l: "Support" }, { v: "UAE", l: "Nationwide" }]} />

      {/* Specs */}
      {product.specifications.length > 0 && (
        <Section padding="none" className="py-20 md:py-24">
          <Container>
            <dl data-reveal className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
              {product.specifications.map((s, i) => (<div key={i} className="bg-surface px-7 py-6"><dt className="text-xs font-semibold uppercase tracking-widest text-text-muted">{s.label}</dt><dd className="mt-1 text-lg text-navy">{s.value}</dd></div>))}
            </dl>
          </Container>
        </Section>
      )}

      <FaqList product={product} />
      <RelatedStrip related={related} />
      <CtaBanner heading={`Interested in ${product.name}?`} text="Tell us about your business and our team will tailor the right setup — with installation, training and support." image={`/images/products/${product.slug}/a.jpg`} />
    </article>
  );
}
