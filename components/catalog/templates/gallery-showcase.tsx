import Link from "next/link";
import { ArrowRight, Sparkles, Wand2, Palette, Rocket } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/ui/smart-image";
import { CtaBanner } from "@/components/home/cta";
import { BUSINESS } from "@/lib/business";
import {
  TemplateProps,
  enquiry,
  RelatedStrip,
  FaqList,
  StatBand,
  VideoGallery,
} from "./shared";

/* Website builder for hotels & restaurants · visual / creative · browser-mockup hero + template gallery */
export function GalleryShowcaseTemplate({
  product,
  category,
  related,
}: TemplateProps) {
  const paras = product.description.split("\n").filter(Boolean);
  const a = `/images/products/${product.slug}/a.jpg`;
  const b = `/images/products/${product.slug}/b.jpg`;

  // Template-thumbnail gallery — hero/a/b cycled into "ready-made" designs.
  const thumbs = [
    { src: product.heroImage, label: "Boutique Hotel" },
    { src: a, label: "Fine Dining" },
    { src: b, label: "Café & Bar" },
    { src: a, label: "Resort & Spa" },
    { src: b, label: "Bistro" },
    { src: product.heroImage, label: "Rooftop Lounge" },
  ];

  const steps = [
    { t: "Pick a template", d: "Start from a design crafted for hospitality." },
    { t: "Make it yours", d: "Drop in your brand, photos and menu." },
    { t: "Connect bookings", d: "Wire up reservations and online orders." },
    { t: "Go live", d: "Publish in a click — on any device." },
  ];

  return (
    <article>
      {/* Hero — clean light, headline + CTAs, then a full-width browser mockup band */}
      <Section padding="none" className="bg-background pt-16 pb-16 md:pb-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="animate-rise mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
              <Sparkles className="h-3.5 w-3.5" />
              {category?.name ?? "Website Builder"}
              {product.deploymentType ? ` · ${product.deploymentType}` : ""}
            </p>
            <h1
              className="animate-rise text-navy"
              style={{ animationDelay: "0.08s" }}>
              {product.name}
            </h1>
            <p
              className="animate-rise mx-auto mt-6 max-w-xl text-xl leading-relaxed text-text-muted"
              style={{ animationDelay: "0.16s" }}>
              {product.tagline}
            </p>
            <div
              className="animate-rise mt-10 flex flex-wrap items-center justify-center gap-4"
              style={{ animationDelay: "0.24s" }}>
              <Button
                asChild
                size="lg"
                className="bg-[var(--acc)] text-[var(--ink)] hover:opacity-90">
                <Link href={enquiry(product)}>
                  Start Building <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Book a Demo</Link>
              </Button>
            </div>
          </div>
        </Container>

        {/* Browser-window mockup framing the hero image */}
        <Container className="mt-16 md:mt-20">
          <div
            className="animate-rise overflow-hidden border border-border bg-surface shadow-[var(--shadow-glow)]"
            style={{ animationDelay: "0.32s" }}>
            <div className="flex items-center gap-2 border-b border-border bg-background px-4 py-3">
              <span className="h-3 w-3 rounded-full border border-border" />
              <span className="h-3 w-3 rounded-full border border-border" />
              <span className="h-3 w-3 rounded-full border border-border" />
              <span className="ml-4 hidden h-5 flex-1 max-w-md items-center border border-border bg-surface px-3 text-xs text-text-muted sm:flex">
                yourrestaurant.com
              </span>
            </div>
            <div className="aspect-[16/9] w-full overflow-hidden">
              <SmartImage
                src={product.heroImage}
                alt={product.name}
                label={product.name}
                priority
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Intro statement */}
      <Section padding="none" className="py-16 md:py-24">
        <Container>
          <div data-reveal className="max-w-4xl">
            <p className="eyebrow mb-6">Overview</p>
            <p className="font-display text-3xl font-medium leading-[1.25] text-navy md:text-[2.6rem]">
              {paras[0]}
            </p>
            {paras.slice(1).map((p, i) => (
              <p
                key={i}
                className="mt-8 max-w-2xl text-lg leading-relaxed text-text-muted">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      {/* SIGNATURE — Template gallery */}
      <Section
        padding="none"
        className="border-t border-border bg-surface py-16 md:py-24">
        <Container>
          <div data-reveal className="mb-14 max-w-2xl">
            <p className="eyebrow mb-3">Template library</p>
            <h2 className="text-navy">Beautiful templates, ready to launch</h2>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              Hand-designed for hotels and restaurants — every layout is
              mobile-ready, fast and fully yours to edit.
            </p>
          </div>
          <div data-reveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {thumbs.map((t, i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] overflow-hidden border border-border bg-background">
                <SmartImage
                  src={t.src}
                  alt={t.label}
                  label={t.label}
                  className="transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/85 via-[var(--ink)]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                    Template
                  </span>
                  <p className="mt-1 text-lg font-semibold text-white">
                    {t.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Features — clean card grid */}
      {product.keyFeatures.length > 0 && (
        <Section padding="none" className="py-16 md:py-24">
          <Container>
            <div data-reveal className="mb-14 max-w-2xl">
              <p className="eyebrow mb-3">What you get</p>
              <h2 className="text-navy">Everything to run a site that sells</h2>
            </div>
            <div
              data-reveal
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {product.keyFeatures.map((f, i) => {
                const Icon = [Wand2, Palette, Rocket, Sparkles][i % 4];
                return (
                  <div
                    key={i}
                    className="border border-border bg-surface p-7 transition-all hover:border-navy/30 hover:shadow-[var(--shadow-glow)]">
                    <span className="inline-flex h-11 w-11 items-center justify-center border border-border text-[var(--acc)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-navy">
                      {f.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-muted">
                      {f.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* Highlights chips (if any) */}
      {product.highlights.length > 0 && (
        <Section padding="none" className="pb-16 md:pb-24">
          <Container>
            <div data-reveal className="flex flex-wrap gap-3">
              {product.highlights.map((h, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 border border-border bg-surface px-4 py-2 text-sm text-navy">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--acc)]" />
                  {h}
                </span>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* How it works — 4-step row */}
      <Section
        padding="none"
        className="border-t border-border bg-surface py-16 md:py-24">
        <Container>
          <div data-reveal className="mb-14 max-w-2xl">
            <p className="eyebrow mb-3">How it works</p>
            <h2 className="text-navy">Live in four simple steps</h2>
          </div>
          <div
            data-reveal
            className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={i} className="bg-surface p-8">
                <span className="font-display text-4xl font-medium text-[var(--acc)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy">{s.t}</h3>
                <p className="mt-2 leading-relaxed text-text-muted">{s.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <StatBand
        stats={[
          { v: BUSINESS.experience, l: "In business" },
          { v: BUSINESS.happyClients, l: "Businesses served" },
          { v: "24/7", l: "Support" },
          { v: "UAE", l: "Nationwide" },
        ]}
      />

      {/* Specs (inline) + audience */}
      <Section padding="none" className="py-16 md:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            {product.specifications.length > 0 && (
              <div data-reveal>
                <p className="eyebrow mb-6">At a glance</p>
                <dl className="divide-y divide-border border-t border-border">
                  {product.specifications.map((s, i) => (
                    <div key={i} className="flex justify-between gap-6 py-4">
                      <dt className="text-text-muted">{s.label}</dt>
                      <dd className="text-right font-medium text-navy">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
            <div className="flex flex-col gap-12">
              {product.integrations.length > 0 && (
                <div data-reveal>
                  <p className="eyebrow mb-6">Integrations</p>
                  <div className="flex flex-wrap gap-3">
                    {product.integrations.map((it, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-2 border border-border bg-surface px-4 py-2 text-sm text-navy">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--acc)]" />
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {product.audience.length > 0 && (
                <div data-reveal>
                  <p className="eyebrow mb-6">Made for</p>
                  <ul className="divide-y divide-border border-t border-border">
                    {product.audience.map((aud, i) => (
                      <li key={i} className="py-3 text-navy">
                        {aud}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm text-text-muted">
                    Not sure which fits?{" "}
                    <Link
                      href="/contact"
                      className="font-medium text-[var(--acc)] hover:underline">
                      Talk to our team
                    </Link>
                    .
                  </p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      <VideoGallery product={product} />
      <FaqList product={product} />
      <RelatedStrip related={related} />
      <CtaBanner
        heading={`Ready to launch ${product.name}?`}
        text="Tell us about your hotel or restaurant and we'll get your site live — with design, setup, training and support."
        image={`/images/products/${product.slug}/a.jpg`}
      />
    </article>
  );
}
