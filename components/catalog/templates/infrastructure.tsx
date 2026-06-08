import Link from "next/link";
import {
  ArrowRight,
  Network,
  Server,
  Monitor,
  BatteryCharging,
  Boxes,
  Wrench,
  LifeBuoy,
  Check,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/ui/smart-image";
import { CtaBanner } from "@/components/home/cta";
import { BUSINESS } from "@/lib/business";
import { TemplateProps, enquiry, RelatedStrip, StatBand } from "./shared";

/* Office automation & networking · infrastructure — full-bleed hero · categories grid · supply/install/support */
export function InfrastructureTemplate({ product, category, related }: TemplateProps) {
  const paras = product.description.split("\n").filter(Boolean);

  // SIGNATURE — the four pillars of business infrastructure. Descriptions are
  // derived from keyFeatures where available, otherwise sensible defaults.
  const categories = [
    {
      icon: Server,
      title: "Servers",
      desc: "Reliable, business-grade servers sized for your workloads — storage, virtualisation and everyday operations.",
    },
    {
      icon: Monitor,
      title: "Desktops",
      desc: "Workstations and desktops configured, imaged and ready for your team to be productive from day one.",
    },
    {
      icon: BatteryCharging,
      title: "UPS & Power",
      desc: "Uninterruptible power and surge protection that keeps critical systems online through outages.",
    },
    {
      icon: Network,
      title: "Networking",
      desc: "Switches, routers and structured cabling for fast, secure connectivity across every desk and floor.",
    },
  ].map((c, i) => {
    const f = product.keyFeatures[i];
    return f ? { ...c, desc: f.description || c.desc } : c;
  });

  const steps = [
    {
      icon: Boxes,
      title: "Supply",
      desc: "We source the right hardware for your needs — genuine, warrantied and matched to your budget.",
    },
    {
      icon: Wrench,
      title: "Install",
      desc: "On-site delivery, setup, cabling and configuration — fully commissioned and tested before handover.",
    },
    {
      icon: LifeBuoy,
      title: "Support",
      desc: "Ongoing maintenance and responsive support across the UAE to keep your infrastructure running.",
    },
  ];

  return (
    <article>
      {/* Hero — full-bleed image, content lower-left */}
      <section className="relative flex min-h-[88vh] flex-col justify-end overflow-hidden bg-[var(--ink)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.heroImage} alt="" className="animate-kenburns absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/60 to-[var(--ink)]/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/80 via-[var(--ink)]/25 to-transparent" />
        <Container className="relative z-10 pb-16 pt-40 md:pb-24">
          <div className="max-w-3xl text-white">
            <p className="animate-rise mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
              <Network className="h-3.5 w-3.5" /> {category?.name ?? "Infrastructure"}
              {product.deploymentType ? ` · ${product.deploymentType}` : ""}
            </p>
            <h1 className="animate-rise text-white" style={{ animationDelay: "0.08s" }}>{product.name}</h1>
            <p className="animate-rise mt-6 max-w-xl text-xl leading-relaxed text-white/80" style={{ animationDelay: "0.16s" }}>{product.tagline}</p>
            <div className="animate-rise mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.24s" }}>
              <Button asChild size="lg" className="bg-[var(--acc)] text-[var(--ink)] hover:opacity-90"><Link href={enquiry(product)}>Get a Quote <ArrowRight className="h-4 w-4" /></Link></Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-[var(--ink)]"><Link href="/contact">Talk to an Expert</Link></Button>
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
            {paras.slice(1).map((p, i) => (
              <p key={i} className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary">{p}</p>
            ))}
          </div>
        </Container>
      </Section>

      {/* SIGNATURE — infrastructure categories grid */}
      <Section padding="none" className="border-y border-border bg-surface py-20 md:py-28">
        <Container>
          <div data-reveal className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">Categories</p>
            <h2 className="text-navy">The infrastructure your business runs on</h2>
          </div>
          <div data-reveal className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <div key={c.title} className="group flex flex-col bg-surface p-8 transition-colors hover:bg-surface-sunken">
                <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--acc)]/15 text-[var(--ink)] transition-colors group-hover:bg-[var(--acc)] group-hover:text-white">
                  <c.icon className="h-5.5 w-5.5" />
                </span>
                <h3 className="mb-2 text-lg font-semibold text-navy">{c.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{c.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Supply · Install · Support — 3-step services band */}
      <Section padding="none" className="bg-[var(--ink)] py-20 md:py-28">
        <Container>
          <div data-reveal className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">How we work</p>
            <h2 className="text-white">Supply · Install · Support</h2>
          </div>
          <div data-reveal className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="bg-[var(--ink)] p-8 md:p-10">
                <div className="mb-6 flex items-center gap-4">
                  <span className="font-display text-4xl font-medium text-[var(--acc)]">{String(i + 1).padStart(2, "0")}</span>
                  <s.icon className="h-6 w-6 text-white/70" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">{s.title}</h3>
                <p className="leading-relaxed text-white/65">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Key features — two-column list */}
      {product.keyFeatures.length > 0 && (
        <Section padding="none" className="py-20 md:py-28">
          <Container>
            <div data-reveal className="mb-14 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">Capabilities</p>
              <h2 className="text-navy">What sets it apart</h2>
            </div>
            <div data-reveal className="grid gap-x-16 gap-y-10 border-t border-border pt-10 md:grid-cols-2">
              {product.keyFeatures.map((f, i) => (
                <div key={i} className="flex gap-5">
                  <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--acc)]/15 text-[var(--ink)]"><Check className="h-4 w-4" /></span>
                  <div>
                    <h3 className="mb-1.5 text-lg font-semibold text-navy">{f.title}</h3>
                    <p className="leading-relaxed text-text-muted">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Specifications — two-column dl */}
      {product.specifications.length > 0 && (
        <Section padding="none" className="border-t border-border py-20 md:py-24">
          <Container>
            <div data-reveal className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">Details</p>
              <h2 className="text-navy">Specifications</h2>
            </div>
            <dl data-reveal className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
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

      {/* Ideal for — audience chips */}
      {product.audience.length > 0 && (
        <Section padding="none" className="border-t border-border bg-surface py-20 md:py-24">
          <Container>
            <div data-reveal className="mb-10 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">Who it's for</p>
              <h2 className="text-navy">Ideal for</h2>
            </div>
            <div data-reveal className="flex flex-wrap gap-3">
              {product.audience.map((a, i) => (
                <span key={i} className="inline-flex items-center gap-2 border border-border bg-background px-5 py-2.5 text-sm font-medium text-navy">
                  <Check className="h-3.5 w-3.5 text-[var(--acc)]" /> {a}
                </span>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <StatBand stats={[{ v: BUSINESS.experience, l: "In business" }, { v: BUSINESS.happyClients, l: "Businesses served" }, { v: "Install", l: "& setup included" }, { v: "UAE", l: "Nationwide" }]} />

      <RelatedStrip related={related} />
      <CtaBanner heading={`Need ${product.name}?`} text="Tell us about your office and our team will supply, install and support the right infrastructure — across the UAE." image={`/images/products/${product.slug}/a.jpg`} />
    </article>
  );
}
