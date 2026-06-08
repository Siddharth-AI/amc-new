import Link from "next/link";
import { ArrowRight, Check, Printer, Factory, Monitor, Tags } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/ui/smart-image";
import { CtaBanner } from "@/components/home/cta";
import { BUSINESS } from "@/lib/business";
import { TemplateProps, enquiry, RelatedStrip, StatBand } from "./shared";

/* Barcode & label printers · full-bleed image hero · Desktop-vs-Industrial types comparison centrepiece (theme via shell vars) */
export function HardwareCompareTemplate({ product, category, related }: TemplateProps) {
  const paras = product.description.split("\n").filter(Boolean);

  const types = [
    {
      icon: Monitor,
      label: "Desktop",
      blurb: "Compact, low-volume label printing for the front counter and back office.",
      fits: [
        "Retail shelf, price and barcode labels",
        "Shipping and address labels for e-commerce",
        "Light to medium daily print runs",
        "Limited counter or desk space",
      ],
    },
    {
      icon: Factory,
      label: "Industrial",
      blurb: "Rugged, high-throughput printing built for warehouses and production lines.",
      fits: [
        "Continuous, high-volume label batches",
        "Warehouse, logistics and pallet labelling",
        "Harsh, dusty or 24/7 shift environments",
        "Larger media rolls and wider label widths",
      ],
    },
  ];

  return (
    <article>
      {/* Hero — full-bleed image */}
      <section className="relative flex min-h-[80vh] items-end overflow-hidden bg-[var(--ink)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.heroImage} alt="" className="animate-kenburns absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/60 to-[var(--ink)]/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/85 to-transparent" />
        <Container className="relative z-10 pb-16 pt-40 md:pb-20">
          <div className="max-w-3xl text-white">
            <p className="animate-rise mb-5 inline-flex items-center gap-2 border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
              <Printer className="h-3.5 w-3.5" /> {category?.name ?? "Barcode & Label Printers"}
            </p>
            <h1 className="animate-rise text-white" style={{ animationDelay: "0.06s" }}>{product.name}</h1>
            <p className="animate-rise mt-6 max-w-xl text-xl leading-relaxed text-white/80" style={{ animationDelay: "0.14s" }}>{product.tagline}</p>
            <div className="animate-rise mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.22s" }}>
              <Button asChild size="lg" className="bg-[var(--acc)] text-[var(--ink)] hover:opacity-90"><Link href={enquiry(product)}>Request a Quote <ArrowRight className="h-4 w-4" /></Link></Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-[var(--ink)]"><Link href="/contact">Ask Our Team</Link></Button>
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

      {/* SIGNATURE — Desktop vs Industrial types comparison */}
      <Section padding="none" className="border-y border-border bg-surface py-20 md:py-28">
        <Container>
          <div data-reveal className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">Choose your type</p>
            <h2 className="text-navy">Desktop or industrial?</h2>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">Two families of label printer, built for very different workloads. Here is which one fits your operation.</p>
          </div>
          <div data-reveal className="grid gap-8 md:grid-cols-2">
            {types.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.label} className="flex flex-col border border-border bg-white p-8 md:p-10">
                  <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--acc)]/15 text-[var(--ink)]"><Icon className="h-6 w-6" /></span>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">{t.label}</p>
                  <h3 className="text-2xl font-semibold text-navy">{t.label} label printers</h3>
                  <p className="mt-3 leading-relaxed text-text-muted">{t.blurb}</p>
                  <p className="mt-8 mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-navy">Best suited to</p>
                  <ul className="space-y-3">
                    {t.fits.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-text-secondary">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--acc)]" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Key features — icon cards grid */}
      {product.keyFeatures.length > 0 && (
        <Section padding="none" className="py-20 md:py-28">
          <Container>
            <div data-reveal className="mb-14 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">Highlights</p>
              <h2 className="text-navy">Built to keep labelling</h2>
            </div>
            <div data-reveal className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {product.keyFeatures.map((f, i) => (
                <div key={i} className="bg-surface p-8">
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--acc)]/15 text-[var(--ink)]"><Tags className="h-5 w-5" /></span>
                  <h3 className="mb-2 text-lg font-semibold text-navy">{f.title}</h3>
                  <p className="leading-relaxed text-text-muted">{f.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Product imagery */}
      <Section padding="none" className="pb-20 md:pb-28">
        <Container>
          <div data-reveal className="grid gap-6 md:grid-cols-2">
            <div className="aspect-[4/3] overflow-hidden border border-border">
              <SmartImage src={`/images/products/${product.slug}/a.jpg`} alt={product.name} label={product.name} />
            </div>
            <div className="aspect-[4/3] overflow-hidden border border-border">
              <SmartImage src={`/images/products/${product.slug}/b.jpg`} alt={product.name} label={product.name} />
            </div>
          </div>
        </Container>
      </Section>

      {/* Specifications — two-column dl */}
      {product.specifications.length > 0 && (
        <Section padding="none" className="border-t border-border py-24 md:py-32">
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

      {/* Ideal for — audience chips */}
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
      <CtaBanner heading={`Need ${product.name}?`} text="Tell us your label volumes and environment, and our team will recommend, supply and install the right printer." image={`/images/products/${product.slug}/a.jpg`} />
    </article>
  );
}
