import Link from "next/link";
import { ArrowRight, Shield, ShieldCheck, Fingerprint, Lock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/ui/smart-image";
import { CtaBanner } from "@/components/home/cta";
import { BUSINESS } from "@/lib/business";
import { TemplateProps, enquiry, RelatedStrip } from "./shared";

/* Biometric & access-control hardware · full-bleed dark hero · security vibe */
export function SecurityFocusTemplate({ product, category, related }: TemplateProps) {
  const paras = product.description.split("\n").filter(Boolean);
  const featureIcons = [ShieldCheck, Fingerprint, Lock];
  const stats = [
    { v: BUSINESS.experience, l: "In business" },
    { v: BUSINESS.happyClients, l: "Businesses served" },
    { v: "Install", l: "& setup included" },
    { v: "UAE", l: "Nationwide" },
  ];

  return (
    <article className="bg-[var(--ink)] text-white">
      {/* Hero — full-bleed image, heavy scrim, content lower-left */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-[var(--ink)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.heroImage} alt="" className="animate-kenburns absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/70 to-[var(--ink)]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)] via-[var(--ink)]/45 to-transparent" />
        <Container className="relative z-10 pb-20 pt-40 md:pb-28">
          <div className="max-w-3xl">
            <p className="animate-rise mb-5 inline-flex items-center gap-2 border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)] backdrop-blur-sm">
              <Shield className="h-3.5 w-3.5" /> {category?.name ?? "Access control"}
            </p>
            <h1 className="animate-rise text-white" style={{ animationDelay: "0.06s" }}>{product.name}</h1>
            <p className="animate-rise mt-6 max-w-xl text-xl leading-relaxed text-white/70" style={{ animationDelay: "0.14s" }}>{product.tagline}</p>
            <div className="animate-rise mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.22s" }}>
              <Button asChild size="lg" className="bg-[var(--acc)] text-[var(--ink)] hover:opacity-90"><Link href={enquiry(product)}>Request a Quote <ArrowRight className="h-4 w-4" /></Link></Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-[var(--ink)]"><Link href="/contact">Ask Our Team</Link></Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Secure-by-design statement band */}
      <Section padding="none" className="border-t border-white/10 py-24 md:py-32">
        <Container>
          <div data-reveal className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center bg-[var(--acc)]/10 text-[var(--acc)]"><Fingerprint className="h-5 w-5" /></span>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">Secure by design</p>
            </div>
            <p className="font-display text-3xl font-medium leading-[1.25] text-white md:text-[2.6rem]">{paras[0]}</p>
            {paras.slice(1).map((p, i) => <p key={i} className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">{p}</p>)}
          </div>
        </Container>
      </Section>

      {/* Signature — security feature list on dark, 2-col */}
      {product.keyFeatures.length > 0 && (
        <Section padding="none" className="border-y border-white/10 bg-white/[0.03] py-20 md:py-28">
          <Container>
            <div data-reveal className="mb-14 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">Protection</p>
              <h2 className="text-white">Built for security</h2>
            </div>
            <div data-reveal className="grid gap-x-12 gap-y-10 md:grid-cols-2">
              {product.keyFeatures.map((f, i) => {
                const Icon = featureIcons[i % featureIcons.length];
                return (
                  <div key={i} className="flex gap-5 border-t border-white/10 pt-8">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center bg-[var(--acc)]/10 text-[var(--acc)]"><Icon className="h-5 w-5" /></span>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-white">{f.title}</h3>
                      <p className="leading-relaxed text-white/55">{f.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* Hardware imagery */}
      <Section padding="none" className="py-20 md:py-28">
        <Container>
          <div data-reveal className="grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
              <SmartImage src={`/images/products/${product.slug}/a.jpg`} alt={product.name} label={product.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/40 to-transparent" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
              <SmartImage src={`/images/products/${product.slug}/b.jpg`} alt={product.name} label={product.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/40 to-transparent" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Specifications — dark spec table */}
      {product.specifications.length > 0 && (
        <Section padding="none" className="border-t border-white/10 py-24 md:py-32">
          <Container>
            <div data-reveal className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
              <div className="lg:sticky lg:top-24 lg:h-fit">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">Specifications</p>
                <h2 className="text-white">The technical details</h2>
                {product.deploymentType && (
                  <p className="mt-6 inline-flex items-center gap-2 border border-white/15 px-4 py-2 text-sm text-white/70"><Lock className="h-4 w-4 text-[var(--acc)]" /> {product.deploymentType}</p>
                )}
              </div>
              <dl data-reveal className="grid gap-px overflow-hidden bg-white/10">
                {product.specifications.map((s, i) => (
                  <div key={i} className="flex flex-col gap-1 bg-[var(--ink)] p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                    <dt className="text-sm uppercase tracking-wide text-white/55">{s.label}</dt>
                    <dd className="text-lg font-medium text-white sm:text-right">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Container>
        </Section>
      )}

      {/* Ideal for — audience chips on dark */}
      {product.audience.length > 0 && (
        <Section padding="none" className="border-t border-white/10 pb-24">
          <Container>
            <div data-reveal className="flex flex-wrap gap-3 pt-16 md:pt-24">
              <p className="mb-2 w-full text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">Ideal for</p>
              {product.audience.map((a, i) => (
                <span key={i} className="inline-flex items-center gap-2 border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-white"><span className="h-1.5 w-1.5 rounded-full bg-[var(--acc)]" /> {a}</span>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Inline dark stat band */}
      <Section padding="none" className="border-t border-white/10 bg-[var(--ink)]">
        <Container>
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-16 sm:grid-cols-4 md:py-24">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="mb-5 h-px w-10 bg-[var(--acc)]" />
                <div className="font-display text-4xl font-medium text-white md:text-5xl">{s.v}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/55">{s.l}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <RelatedStrip related={related} />
      <CtaBanner heading={`Need ${product.name}?`} text="Tell us your access-control requirements and our team will recommend, supply and install the right biometric hardware." image={`/images/products/${product.slug}/a.jpg`} />
    </article>
  );
}
