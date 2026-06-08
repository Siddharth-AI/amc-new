import Link from "next/link";
import { ArrowRight, WifiOff, ShieldCheck, Zap, Server } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/ui/smart-image";
import { CtaBanner } from "@/components/home/cta";
import { BUSINESS } from "@/lib/business";
import { TemplateProps, enquiry, RelatedStrip, FaqList, StatBand } from "./shared";

/* Offline-first desktop restaurant POS · full-bleed rugged hero · feature bento mosaic (theme via shell vars) */
export function OfflineReliabilityTemplate({ product, category, related }: TemplateProps) {
  const paras = product.description.split("\n").filter(Boolean);
  const features = product.keyFeatures;

  return (
    <article>
      {/* Hero — full-bleed image, content lower-left, ink scrim */}
      <section className="relative min-h-[88vh] overflow-hidden bg-[var(--ink)]">
        <div className="absolute inset-0">
          <SmartImage src={product.heroImage} alt={product.name} label={product.name} priority />
        </div>
        {/* bottom-up ink scrim so overlaid text matches the theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/70 to-transparent" />

        <Container className="relative flex min-h-[88vh] flex-col justify-end pb-16 pt-32 md:pb-24">
          <div className="max-w-2xl">
            <span
              className="animate-rise inline-flex items-center gap-2 border border-[var(--acc)]/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]"
              style={{ animationDelay: "0.08s" }}>
              <WifiOff className="h-3.5 w-3.5" /> Works offline
            </span>
            <h1
              className="animate-rise mt-6 text-white"
              style={{ animationDelay: "0.14s" }}>
              {product.name}
            </h1>
            <p
              className="animate-rise mt-5 max-w-xl text-xl leading-relaxed text-white/75"
              style={{ animationDelay: "0.22s" }}>
              {product.tagline}
            </p>
            <div
              className="animate-rise mt-10 flex flex-wrap gap-4"
              style={{ animationDelay: "0.22s" }}>
              <Button asChild size="lg" className="bg-[var(--acc)] text-[var(--ink)] hover:opacity-90">
                <Link href={enquiry(product)}>Get a Quote <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-[var(--ink)]">
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
            </div>
            <p className="mt-8 text-xs uppercase tracking-[0.18em] text-white/40">
              {category?.name ?? "Solution"}{product.deploymentType ? ` · ${product.deploymentType}` : ""}
            </p>
          </div>
        </Container>
      </section>

      {/* Bold one-line statement */}
      <Section padding="none" className="bg-background py-24 md:py-32">
        <Container>
          <div data-reveal className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-7 h-px w-12 bg-[var(--acc)]" />
            <p className="font-display text-3xl font-medium leading-[1.25] text-navy md:text-5xl">
              Your floor never stops — even when the internet does.
            </p>
            {paras[0] && (
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary">{paras[0]}</p>
            )}
          </div>
        </Container>
      </Section>

      {/* SIGNATURE — feature bento mosaic */}
      {(features.length > 0 || product.highlights.length > 0) && (
        <Section padding="none" className="border-t border-border bg-surface py-24 md:py-32">
          <Container>
            <div data-reveal className="mb-14 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">Built rugged</p>
              <h2 className="text-navy">Engineered to keep serving</h2>
              {paras[1] && <p className="mt-5 text-lg leading-relaxed text-text-muted">{paras[1]}</p>}
            </div>

            <div data-reveal className="grid auto-rows-[minmax(180px,auto)] grid-cols-2 gap-4 lg:grid-cols-3">
              {/* Accent statement tile — large */}
              <div className="col-span-2 row-span-2 flex flex-col justify-between border border-border bg-[var(--ink)] p-8 text-white md:p-10">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--acc)]/20 text-[var(--acc)]">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium leading-snug text-white md:text-3xl">
                    Every order, every receipt — stored locally and synced the moment you reconnect.
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
                    No spinner, no lost tickets, no waiting on the cloud. The till runs on the machine in front of you.
                  </p>
                </div>
              </div>

              {/* Image tile using /a.jpg */}
              <div className="relative col-span-2 row-span-2 overflow-hidden border border-border lg:col-span-1">
                <SmartImage
                  src={`/images/products/${product.slug}/a.jpg`}
                  alt={`${product.name} in use`}
                  label={product.name}
                  className="transition-transform duration-700 ease-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/80 via-[var(--ink)]/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-sm font-medium text-white">On the counter, day in, day out.</p>
                </div>
              </div>

              {/* Key feature text tiles */}
              {features.map((f, i) => {
                const wide = i % 5 === 0;
                return (
                  <div
                    key={i}
                    className={`flex flex-col justify-between border border-border bg-background p-7 ${wide ? "col-span-2" : ""}`}>
                    <div className="font-display text-3xl font-medium text-[var(--acc)]">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-6">
                      <h3 className="mb-2 text-lg font-semibold text-navy">{f.title}</h3>
                      <p className="text-sm leading-relaxed text-text-muted">{f.description}</p>
                    </div>
                  </div>
                );
              })}

              {/* Highlights as compact tiles */}
              {product.highlights.map((h, i) => (
                <div key={`h-${i}`} className="flex items-center gap-3 border border-border bg-background p-7">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--acc)]/15 text-[var(--ink)]">
                    <Zap className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-medium leading-snug text-navy">{h}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <StatBand stats={[{ v: BUSINESS.experience, l: "In business" }, { v: BUSINESS.happyClients, l: "Businesses served" }, { v: "24/7", l: "Support" }, { v: "UAE", l: "Nationwide" }]} />

      {/* Specs — clean two-column dl */}
      {product.specifications.length > 0 && (
        <Section padding="none" className="py-24 md:py-32">
          <Container>
            <div data-reveal className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">At a glance</p>
                <h2 className="text-navy">The hardware-grade detail</h2>
                {(product.integrations.length > 0 || product.audience.length > 0) && (
                  <div className="mt-8 space-y-6">
                    {product.integrations.length > 0 && (
                      <div>
                        <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                          <Server className="h-3.5 w-3.5 text-[var(--acc)]" /> Integrations
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {product.integrations.map((it, i) => (
                            <span key={i} className="inline-flex items-center border border-border bg-surface px-3 py-1.5 text-sm text-navy">{it}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    {product.audience.length > 0 && (
                      <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">Built for</p>
                        <ul className="space-y-2">
                          {product.audience.map((a, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                              <span className="h-1.5 w-1.5 rounded-full bg-[var(--acc)]" /> {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <dl className="divide-y divide-border border-y border-border">
                {product.specifications.map((s, i) => (
                  <div key={i} className="flex justify-between gap-6 py-4">
                    <dt className="text-text-muted">{s.label}</dt>
                    <dd className="text-right font-medium text-navy">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Container>
        </Section>
      )}

      <FaqList product={product} />
      <RelatedStrip related={related} />
      <CtaBanner
        heading={`Run ${product.name} that never goes down`}
        text="Tell us about your restaurant and our team will tailor the right offline-first POS setup — with installation, training and support."
        image={`/images/products/${product.slug}/a.jpg`}
      />
    </article>
  );
}
