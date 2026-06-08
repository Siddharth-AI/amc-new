import Link from "next/link";
import { ArrowRight, Check, Cpu } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/ui/smart-image";
import { CtaBanner } from "@/components/home/cta";
import { BUSINESS } from "@/lib/business";
import { TemplateProps, enquiry, RelatedStrip, StatBand } from "./shared";

/* Hardware spec-sheet · image hero · spec table centrepiece (theme via shell vars) */
export function SpecSheetTemplate({ product, category, related }: TemplateProps) {
  const paras = product.description.split("\n").filter(Boolean);
  return (
    <article>
      {/* Hero — full-bleed image */}
      <section className="relative flex min-h-[80vh] items-end overflow-hidden bg-[var(--ink)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.heroImage} alt="" className="animate-kenburns absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/60 to-[var(--ink)]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/85 to-transparent" />
        <Container className="relative z-10 pb-16 pt-40 md:pb-20">
          <div className="max-w-3xl text-white">
            <p className="animate-rise mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]"><Cpu className="h-3.5 w-3.5" /> {category?.name ?? "Hardware"}</p>
            <h1 className="animate-rise text-white" style={{ animationDelay: "0.06s" }}>{product.name}</h1>
            <p className="animate-rise mt-6 max-w-xl text-xl leading-relaxed text-white/80" style={{ animationDelay: "0.14s" }}>{product.tagline}</p>
            <div className="animate-rise mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.22s" }}>
              <Button asChild size="lg" className="bg-[var(--acc)] text-[var(--ink)] hover:opacity-90"><Link href={enquiry(product)}>Request a Quote <ArrowRight className="h-4 w-4" /></Link></Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-[var(--ink)]"><Link href="/contact">Ask Our Team</Link></Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <Section padding="none" className="py-24 md:py-32">
        <Container>
          <div data-reveal className="max-w-4xl">
            <div className="mb-6 h-px w-12 bg-[var(--acc)]" />
            <p className="font-display text-3xl font-medium leading-[1.25] text-navy md:text-[2.6rem]">{paras[0]}</p>
            {paras.slice(1).map((p, i) => <p key={i} className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary">{p}</p>)}
          </div>
        </Container>
      </Section>

      {/* Key features */}
      {product.keyFeatures.length > 0 && (
        <Section padding="none" className="border-y border-border bg-surface py-20 md:py-28">
          <Container>
            <div data-reveal className="mb-14 max-w-2xl"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">Highlights</p><h2 className="text-navy">Why choose this</h2></div>
            <div data-reveal className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {product.keyFeatures.map((f, i) => (
                <div key={i} className="bg-surface p-8">
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--acc)]/15 text-[var(--ink)]"><Check className="h-5 w-5" /></span>
                  <h3 className="mb-2 text-lg font-semibold text-navy">{f.title}</h3>
                  <p className="leading-relaxed text-text-muted">{f.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Specifications — centrepiece table */}
      {product.specifications.length > 0 && (
        <Section padding="none" className="py-24 md:py-32">
          <Container>
            <div data-reveal className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
              <div className="lg:sticky lg:top-24 lg:h-fit">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">Specifications</p>
                <h2 className="text-navy">The details</h2>
              </div>
              <dl className="divide-y divide-border border-y border-border">
                {product.specifications.map((s, i) => (
                  <div key={i} className="flex justify-between gap-6 py-5">
                    <dt className="text-text-muted">{s.label}</dt>
                    <dd className="text-right text-lg font-medium text-navy">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Container>
        </Section>
      )}

      {/* Audience */}
      {product.audience.length > 0 && (
        <Section padding="none" className="border-t border-border pb-24">
          <Container>
            <div data-reveal className="flex flex-wrap gap-3 pt-16 md:pt-24">
              <p className="mb-2 w-full text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">Ideal for</p>
              {product.audience.map((a, i) => (
                <span key={i} className="inline-flex items-center gap-2 border border-border bg-surface px-4 py-2.5 text-sm font-medium text-navy"><span className="h-1.5 w-1.5 rounded-full bg-[var(--acc)]" /> {a}</span>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <StatBand stats={[{ v: BUSINESS.experience, l: "In business" }, { v: BUSINESS.happyClients, l: "Businesses served" }, { v: "Install", l: "& setup included" }, { v: "UAE", l: "Nationwide" }]} />

      <div className="py-4" />
      <RelatedStrip related={related} />
      <CtaBanner heading={`Need ${product.name}?`} text="Tell us your requirements and our team will recommend, supply and install the right hardware." image={product.heroImage} />
    </article>
  );
}
