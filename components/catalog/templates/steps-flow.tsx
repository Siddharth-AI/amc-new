import Link from "next/link";
import { ArrowRight, Plug } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/ui/smart-image";
import { CtaBanner } from "@/components/home/cta";
import { BUSINESS } from "@/lib/business";
import { TemplateProps, enquiry, RelatedStrip, FaqList, StatBand } from "./shared";

/* Typographic dark hero · numbered process flow · light body (theme via shell vars) */
export function StepsFlowTemplate({ product, category, related }: TemplateProps) {
  const paras = product.description.split("\n").filter(Boolean);
  const steps = product.keyFeatures;
  return (
    <article>
      {/* Hero — typographic on ink */}
      <section className="relative overflow-hidden bg-[var(--ink)] pt-36 pb-20 text-white md:pt-44 md:pb-28">
        <div className="dots-pattern absolute inset-0 opacity-[0.06]" />
        <div className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-[var(--acc)]/25 blur-[140px]" />
        <Container className="relative">
          <p className="animate-rise mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
            {category?.name ?? "Solution"}{product.deploymentType ? ` · ${product.deploymentType}` : ""}
          </p>
          <h1 className="animate-rise max-w-4xl text-white" style={{ animationDelay: "0.06s" }}>{product.name}</h1>
          <p className="animate-rise mt-7 max-w-2xl text-xl leading-relaxed text-white/75" style={{ animationDelay: "0.14s" }}>{product.tagline}</p>
          <div className="animate-rise mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.22s" }}>
            <Button asChild size="lg" className="bg-[var(--acc)] text-[var(--ink)] hover:opacity-90"><Link href={enquiry(product)}>Get a Quote <ArrowRight className="h-4 w-4" /></Link></Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-[var(--ink)]"><Link href="/contact">Talk to an Expert</Link></Button>
          </div>
        </Container>
      </section>

      {/* Image band */}
      <div className="relative aspect-[16/6] w-full overflow-hidden">
        <SmartImage src={`/images/products/${product.slug}/hero.jpg`} alt={product.name} label={product.name} priority />
      </div>

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

      {/* Process — numbered vertical flow */}
      {steps.length > 0 && (
        <Section padding="none" className="border-t border-border bg-surface py-20 md:py-28">
          <Container>
            <div data-reveal className="mb-14 max-w-2xl"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">How it works</p><h2 className="text-navy">From setup to results</h2></div>
            <div data-reveal className="mx-auto max-w-3xl">
              {steps.map((f, i) => (
                <div key={i} className="relative flex gap-8 pb-12 last:pb-0">
                  {i < steps.length - 1 && <span className="absolute left-[1.4rem] top-12 h-full w-px bg-border" />}
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--acc)] font-display text-lg font-medium text-[var(--ink)]">{i + 1}</span>
                  <div className="pt-1.5">
                    <h3 className="mb-1.5 text-xl font-semibold text-navy">{f.title}</h3>
                    <p className="leading-relaxed text-text-muted">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <StatBand stats={[{ v: BUSINESS.experience, l: "In business" }, { v: BUSINESS.happyClients, l: "Businesses served" }, { v: "24/7", l: "Support" }, { v: "UAE", l: "Nationwide" }]} />

      {/* Specs + integrations */}
      <Section padding="none" className="py-24 md:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            {product.specifications.length > 0 && (
              <div data-reveal>
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">At a glance</p>
                <dl className="divide-y divide-border border-t border-border">
                  {product.specifications.map((s, i) => (<div key={i} className="flex justify-between gap-6 py-4"><dt className="text-text-muted">{s.label}</dt><dd className="text-right font-medium text-navy">{s.value}</dd></div>))}
                </dl>
              </div>
            )}
            {product.integrations.length > 0 && (
              <div data-reveal>
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">Integrations</p>
                <div className="flex flex-wrap gap-3">{product.integrations.map((it, i) => (<span key={i} className="inline-flex items-center gap-2 border border-border bg-surface px-4 py-2 text-sm text-navy"><Plug className="h-3.5 w-3.5 text-[var(--acc)]" /> {it}</span>))}</div>
              </div>
            )}
          </div>
        </Container>
      </Section>

      <FaqList product={product} />
      <RelatedStrip related={related} />
      <CtaBanner heading={`Interested in ${product.name}?`} text="Tell us about your business and our team will tailor the right setup — with installation, training and support." image={`/images/products/${product.slug}/a.jpg`} />
    </article>
  );
}
