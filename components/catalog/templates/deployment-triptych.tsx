import Link from "next/link";
import { ArrowRight, Zap, WifiOff, CloudCog, Store } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/ui/smart-image";
import { CtaBanner } from "@/components/home/cta";
import { BUSINESS } from "@/lib/business";
import { TemplateProps, enquiry, RelatedStrip, FaqList, StatBand } from "./shared";

/* Full-bleed hero · deployment-mode triptych (Real-Time / Offline / Cloud Sync) · industry chips · editorial features (theme via shell vars) */
export function DeploymentTriptychTemplate({ product, category, related }: TemplateProps) {
  const paras = product.description.split("\n").filter(Boolean);

  const modes = [
    {
      icon: Zap,
      title: "Real-Time",
      copy: "Every sale, refund and stock change posts the instant it happens — registers, back office and dashboards always in sync.",
    },
    {
      icon: WifiOff,
      title: "Offline Terminal",
      copy: "Keep ringing up customers through internet drops; transactions queue locally and reconcile automatically once you reconnect.",
    },
    {
      icon: CloudCog,
      title: "Cloud Sync",
      copy: "Prices, products and reports flow across every branch from one secure cloud — manage the whole estate from anywhere.",
    },
  ];

  return (
    <article>
      {/* Hero — full-bleed image, content lower-left */}
      <section className="relative flex min-h-[78vh] items-end overflow-hidden border-b border-border bg-[var(--ink)] pt-28 md:min-h-[86vh] md:pt-32">
        <div className="absolute inset-0">
          <SmartImage src={product.heroImage} alt={product.name} label={product.name} priority className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--ink)] via-[var(--ink)]/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--ink)] to-transparent" />
        <Container className="relative z-10 pb-16 md:pb-24">
          <div className="max-w-2xl">
            <p className="animate-rise mb-5 inline-flex items-center gap-2 border border-white/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
              <Store className="h-3.5 w-3.5 text-[var(--acc)]" />
              {category?.name ?? "Solution"}{product.deploymentType ? ` · ${product.deploymentType}` : ""}
            </p>
            <h1 className="animate-rise text-white" style={{ animationDelay: "0.06s" }}>{product.name}</h1>
            <p className="animate-rise mt-6 max-w-xl text-xl leading-relaxed text-white/80" style={{ animationDelay: "0.14s" }}>{product.tagline}</p>
            <div className="animate-rise mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.22s" }}>
              <Button asChild size="lg" className="bg-[var(--acc)] text-[var(--ink)] hover:opacity-90"><Link href={enquiry(product)}>Get a Quote <ArrowRight className="h-4 w-4" /></Link></Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/5 text-white hover:bg-white/15"><Link href="/contact">Talk to an Expert</Link></Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Intro statement */}
      <Section padding="none" className="py-24 md:py-32">
        <Container>
          <div data-reveal className="max-w-4xl">
            <div className="mb-6 h-px w-12 bg-[var(--acc)]" />
            <p className="font-display text-3xl font-medium leading-[1.25] text-navy md:text-[2.6rem]">{paras[0]}</p>
            {paras.slice(1).map((p, i) => <p key={i} className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary">{p}</p>)}
          </div>
        </Container>
      </Section>

      {/* SIGNATURE — deployment-mode triptych */}
      <Section padding="none" className="border-y border-border bg-surface py-24 md:py-32">
        <Container>
          <div data-reveal className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">Deployment modes</p>
            <h2 className="text-navy">One register, three ways to run it</h2>
          </div>
          <div data-reveal className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            {modes.map((m, i) => {
              const Icon = m.icon;
              return (
                <div key={m.title} className="flex flex-col bg-surface p-10 md:p-12">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-display text-5xl font-medium text-[var(--acc)] md:text-6xl">{String(i + 1).padStart(2, "0")}</span>
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center border border-border bg-background text-[var(--ink)]"><Icon className="h-6 w-6" /></span>
                  </div>
                  <h3 className="text-2xl font-semibold text-navy md:text-3xl">{m.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-text-muted">{m.copy}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Industries we serve — chip / card grid */}
      {product.audience.length > 0 && (
        <Section padding="none" className="py-24 md:py-32">
          <Container>
            <div data-reveal className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">Industries</p>
              <h2 className="text-navy">Industries we serve</h2>
            </div>
            <div data-reveal className="flex flex-wrap gap-3">
              {product.audience.map((a, i) => (
                <span key={i} className="inline-flex items-center gap-2 border border-border bg-surface px-5 py-3 text-base font-medium text-navy transition-colors hover:border-[var(--acc)]">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--acc)]" />
                  {a}
                </span>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Features — editorial numbered list */}
      {product.keyFeatures.length > 0 && (
        <Section padding="none" className="border-t border-border bg-surface py-24 md:py-32">
          <Container>
            <div data-reveal className="mb-14 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">Capabilities</p>
              <h2 className="text-navy">Everything the counter needs</h2>
            </div>
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

      {/* Full-width showcase image band */}
      <section className="relative overflow-hidden bg-[var(--ink)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/images/products/${product.slug}/a.jpg`} alt="" className="h-[55vh] w-full object-cover md:h-[65vh]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/40 to-transparent" />
        <Container className="absolute inset-x-0 bottom-0 z-10 pb-12">
          <p className="max-w-lg font-display text-2xl font-medium text-white md:text-3xl">Reliable at the till, connected across the business.</p>
        </Container>
      </section>

      <StatBand stats={[{ v: BUSINESS.experience, l: "In business" }, { v: BUSINESS.happyClients, l: "Businesses served" }, { v: "24/7", l: "Support" }, { v: "UAE", l: "Nationwide" }]} />

      {/* Specs — inline */}
      {product.specifications.length > 0 && (
        <Section padding="none" className="py-24 md:py-32">
          <Container>
            <div data-reveal className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">At a glance</p>
              <h2 className="text-navy">Specifications</h2>
            </div>
            <dl data-reveal className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {product.specifications.map((s, i) => (
                <div key={i} className="bg-surface px-7 py-6">
                  <dt className="text-xs font-semibold uppercase tracking-widest text-text-muted">{s.label}</dt>
                  <dd className="mt-1 text-lg text-navy">{s.value}</dd>
                </div>
              ))}
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
