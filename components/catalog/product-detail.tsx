import Link from "next/link";
import {
  ArrowRight,
  Check,
  Plug,
  Users,
  ChevronDown,
  Layers,
  MapPin,
  Headset,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/ui/smart-image";
import { CtaBanner } from "@/components/home/cta";
import type { Category, Product, SectionKey } from "@/types/catalog";

interface Props {
  product: Product;
  category?: Category;
  related: Product[];
}

const enquiryHref = (p: Product) =>
  `/enquiry?product=${encodeURIComponent(p.slug)}`;

/* ---------------------------------------------------------------- Blocks */

function Hero({
  product,
  category,
}: {
  product: Product;
  category?: Category;
}) {
  const facts = [
    product.deploymentType && {
      icon: Layers,
      label: "Deployment",
      value: product.deploymentType,
    },
    category && { icon: MapPin, label: "Category", value: category.name },
    product.integrations.length > 0 && {
      icon: Plug,
      label: "Integrations",
      value: `${product.integrations.length}+ available`,
    },
    { icon: Headset, label: "Support", value: "24/7 included" },
  ].filter(Boolean) as { icon: typeof Layers; label: string; value: string }[];

  return (
    <section className="relative flex min-h-[88vh] items-end overflow-hidden">
      {/* full-bleed image with slow zoom */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={product.heroImage}
        alt=""
        className="animate-kenburns absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-navy/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
      <div className="dots-pattern pointer-events-none absolute inset-0 opacity-[0.05]" />

      <Container className="relative z-10 pb-12 pt-28 md:pb-16">
        <nav className="animate-rise mb-7 flex flex-wrap items-center gap-2 text-sm text-white/55">
          <Link href="/products" className="hover:text-white">
            Solutions
          </Link>
          <span>/</span>
          {category && (
            <>
              <Link
                href={`/products/${category.slug}`}
                className="hover:text-white">
                {category.name}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="text-white/85">{product.name}</span>
        </nav>

        <div className="max-w-6xl text-white">
          {product.deploymentType && (
            <span
              className="animate-rise mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur"
              style={{ animationDelay: "0.05s" }}>
              {product.deploymentType}
            </span>
          )}
          <h1
            className="animate-rise mb-6 text-white"
            style={{ animationDelay: "0.12s" }}>
            {product.name}
          </h1>
          <p
            className="animate-rise mb-9 max-w-xl text-lg leading-relaxed text-white/80"
            style={{ animationDelay: "0.2s" }}>
            {product.tagline}
          </p>
          <div
            className="animate-rise flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.28s" }}>
            <Button asChild size="lg" variant="accent">
              <Link href={enquiryHref(product)}>
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-navy">
              <Link href="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>

        {/* glass meta facts */}
        <div
          className="animate-rise mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:max-w-4xl"
          style={{ animationDelay: "0.36s" }}>
          {facts.map((f) => (
            <div
              key={f.label}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur-sm">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-primary-300">
                <f.icon className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-[0.65rem] font-semibold uppercase tracking-wider text-white/50">
                  {f.label}
                </span>
                <span className="block text-sm font-medium text-white">
                  {f.value}
                </span>
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function BlockHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div data-reveal className="mb-10 max-w-2xl">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-navy">{title}</h2>
    </div>
  );
}

function Overview({
  product,
  category,
}: {
  product: Product;
  category?: Category;
}) {
  return (
    <Section padding="none" className="py-16 md:py-24">
      <Container>
        <div
          data-reveal
          className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-3">Overview</p>
            <h2 className="mb-8 text-navy">What it does</h2>
            <div className="rounded-2xl border border-border bg-surface p-7 lg:sticky lg:top-28">
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-text-muted">
                Key facts
              </p>
              <dl className="space-y-4">
                {product.deploymentType && (
                  <div className="flex justify-between gap-4 border-b border-border pb-4">
                    <dt className="text-sm text-text-muted">Deployment</dt>
                    <dd className="text-sm font-medium text-navy">
                      {product.deploymentType}
                    </dd>
                  </div>
                )}
                {category && (
                  <div className="flex justify-between gap-4 border-b border-border pb-4">
                    <dt className="text-sm text-text-muted">Category</dt>
                    <dd className="text-sm font-medium text-navy">
                      {category.name}
                    </dd>
                  </div>
                )}
                {product.audience[0] && (
                  <div className="flex justify-between gap-4">
                    <dt className="text-sm text-text-muted">Best for</dt>
                    <dd className="max-w-[60%] text-right text-sm font-medium text-navy">
                      {product.audience[0]}
                    </dd>
                  </div>
                )}
              </dl>
              <Button asChild variant="primary" className="mt-6 w-full">
                <Link href={enquiryHref(product)}>
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-5">
            {product.description
              .split("\n")
              .filter(Boolean)
              .map((para, i) => (
                <p
                  key={i}
                  className="text-lg leading-relaxed text-text-secondary">
                  {para}
                </p>
              ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Highlights({ product }: { product: Product }) {
  if (!product.highlights.length) return null;
  return (
    <Section padding="none" className="pb-4">
      <Container>
        <div
          data-reveal
          className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {product.highlights.map((h, i) => (
            <div key={i} className="bg-surface p-8">
              <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary-700">
                <Check className="h-4 w-4" />
              </span>
              <p className="text-base font-medium leading-snug text-navy">
                {h}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Features({ product }: { product: Product }) {
  if (!product.keyFeatures.length) return null;
  return (
    <Section
      padding="none"
      className="border-t border-border bg-surface py-16 md:py-24">
      <Container>
        <BlockHeading eyebrow="Capabilities" title="Key features" />
        <div data-reveal className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {product.keyFeatures.map((f, i) => (
            <div
              key={i}
              className="group flex gap-5 border-t border-border pt-7">
              <span className="font-display text-2xl font-medium text-primary/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-navy">
                  {f.title}
                </h3>
                <p className="leading-relaxed text-text-muted">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Specifications({ product }: { product: Product }) {
  if (!product.specifications.length) return null;
  return (
    <Section padding="none" className="py-16 md:py-20">
      <Container>
        <BlockHeading eyebrow="At a glance" title="Specifications" />
        <dl
          data-reveal
          className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {product.specifications.map((s, i) => (
            <div key={i} className="bg-surface px-7 py-6">
              <dt className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                {s.label}
              </dt>
              <dd className="mt-1 text-lg text-navy">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}

function Integrations({ product }: { product: Product }) {
  if (!product.integrations.length) return null;
  return (
    <Section padding="none" className="py-16 md:py-20">
      <Container>
        <div
          data-reveal
          className="relative overflow-hidden rounded-3xl bg-navy px-8 py-12 md:px-14 md:py-16">
          <div className="dots-pattern absolute inset-0 opacity-[0.06]" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/25 blur-[100px]" />
          <div className="relative">
            <p className="eyebrow mb-3 text-primary-300">Integrations</p>
            <h2 className="mb-8 max-w-2xl text-white">
              Works with the tools you rely on
            </h2>
            <div className="flex flex-wrap gap-3">
              {product.integrations.map((it, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90">
                  <Plug className="h-3.5 w-3.5 text-primary-300" />
                  {it}
                </span>
              ))}
            </div>
            <p className="mt-8 text-sm text-white/60">
              Need integration details for your setup?{" "}
              <Link
                href="/contact"
                className="font-medium text-primary-300 underline-offset-4 hover:underline">
                Get in touch with our team
              </Link>
              .
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Gallery({ product }: { product: Product }) {
  if (!product.gallery.length) return null;
  return (
    <Section padding="none" className="py-12">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {product.gallery.map((src, i) => (
            <div
              key={i}
              className="aspect-[4/3] overflow-hidden rounded-xl border border-border">
              <SmartImage
                src={src}
                alt={`${product.name} screenshot ${i + 1}`}
                label={product.name}
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function VideoBlock({ product }: { product: Product }) {
  if (!product.videoUrl) return null;
  return (
    <Section padding="none" className="py-12">
      <Container>
        <div className="aspect-video overflow-hidden rounded-2xl border border-border bg-navy">
          <iframe
            src={product.videoUrl}
            title={`${product.name} video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </Container>
    </Section>
  );
}

function Audience({ product }: { product: Product }) {
  if (!product.audience.length) return null;
  return (
    <Section padding="none" className="py-16 md:py-20">
      <Container>
        <div
          data-reveal
          className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-3">Who it&apos;s for</p>
            <h2 className="text-navy">Built for your business</h2>
          </div>
          <ul className="space-y-4">
            {product.audience.map((a, i) => (
              <li
                key={i}
                className="flex items-start gap-3 border-b border-border pb-4 text-lg text-text-secondary">
                <Users className="mt-1 h-5 w-5 shrink-0 text-primary" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

function Faq({ product }: { product: Product }) {
  if (!product.faqs.length) return null;
  return (
    <Section
      padding="none"
      className="border-t border-border bg-surface py-16 md:py-24">
      <Container>
        <BlockHeading eyebrow="Questions" title="Frequently asked" />
        <div
          data-reveal
          className="mx-auto max-w-3xl divide-y divide-border border-y border-border">
          {product.faqs.map((f, i) => (
            <details key={i} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-navy">
                {f.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-text-muted transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 leading-relaxed text-text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Related({ related }: { related: Product[] }) {
  if (!related.length) return null;
  return (
    <Section padding="none" className="py-16 md:py-20">
      <Container>
        <BlockHeading eyebrow="Explore more" title="Related solutions" />
        <div data-reveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.categorySlug}/${p.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden border border-border bg-surface transition-all hover:border-navy/30 hover:shadow-[var(--shadow-glow)]">
              <div className="aspect-[16/10] overflow-hidden">
                <SmartImage
                  src={p.heroImage}
                  alt={p.name}
                  label={p.name}
                  className="transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-1 text-lg font-semibold text-navy">
                  {p.name}
                </h3>
                <p className="mb-4 line-clamp-2 text-sm text-text-muted">
                  {p.tagline}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary-700">
                  Learn more{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Cta({ product }: { product: Product }) {
  return (
    <CtaBanner
      heading={`Interested in ${product.name}?`}
      text="Tell us about your business and our team will tailor the right setup — with installation, training and support."
      image={product.heroImage}
    />
  );
}

/* ------------------------------------------------------------- Renderer */

export function ProductDetail({ product, category, related }: Props) {
  const render: Record<SectionKey, React.ReactNode> = {
    hero: <Hero key="hero" product={product} category={category} />,
    overview: <Overview key="overview" product={product} category={category} />,
    highlights: <Highlights key="highlights" product={product} />,
    features: <Features key="features" product={product} />,
    specifications: <Specifications key="specifications" product={product} />,
    integrations: <Integrations key="integrations" product={product} />,
    gallery: <Gallery key="gallery" product={product} />,
    video: <VideoBlock key="video" product={product} />,
    audience: <Audience key="audience" product={product} />,
    faq: <Faq key="faq" product={product} />,
    related: <Related key="related" related={related} />,
    cta: <Cta key="cta" product={product} />,
  };

  return <article>{product.sections.map((key) => render[key])}</article>;
}
