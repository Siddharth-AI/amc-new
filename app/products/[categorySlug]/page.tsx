import type { Metadata } from "next";
import { PublicLayout } from "@/components/layout/PublicLayout";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ShieldCheck,
  GraduationCap,
  Headset,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/ui/smart-image";
import { ProductCard } from "@/components/catalog/product-card";
import { CtaBanner } from "@/components/home/cta";
import {
  getCategoryBySlug,
  getCategorySlugs,
  getProductsByCategory,
} from "@/lib/catalog";
import { SITE_URL } from "@/lib/site-config";

export const dynamicParams = false;

interface PageProps {
  params: Promise<{ categorySlug: string }>;
}

export function generateStaticParams() {
  return getCategorySlugs().map((categorySlug) => ({ categorySlug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return { title: "Not Found", robots: { index: false } };

  const url = `${SITE_URL}/products/${category.slug}`;
  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${category.name} | AMC Systems`,
      description: category.description,
    },
  };
}

const ASSURANCES = [
  {
    icon: ShieldCheck,
    title: "Supplied & installed",
    desc: "We specify, deliver and set everything up on site.",
  },
  {
    icon: GraduationCap,
    title: "Trained for go-live",
    desc: "Onsite and online training so your team is ready day one.",
  },
  {
    icon: Headset,
    title: "24/7 support",
    desc: "Annual support plans that keep your business running.",
  },
];

export default async function CategoryPage({ params }: PageProps) {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  const products = getProductsByCategory(categorySlug);
  const [lead, ...rest] = products;
  const deployments = Array.from(
    new Set(products.map((p) => p.deploymentType).filter(Boolean)),
  ) as string[];

  return (
    <PublicLayout>
      <main>
        {/* Hero — full-bleed category image */}
        <section className="relative flex min-h-[64vh] items-end overflow-hidden bg-navy">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={category.image}
            alt=""
            className="animate-kenburns absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/20 via-black/70 to-black/30" />
          <div className="absolute inset-0 bg-navy/20" />
          <Container className="relative z-10 pb-14 pt-36 md:pb-20">
            <nav className="mb-6 flex items-center gap-2 text-sm text-white/60">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <Link href="/products" className="hover:text-white">
                Solutions
              </Link>
              <span>/</span>
              <span className="text-white">{category.name}</span>
            </nav>
            <p className="animate-rise mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-300">
              {category.productType}
            </p>
            <h1
              className="animate-rise max-w-3xl text-white"
              style={{ animationDelay: "0.06s" }}>
              {category.name}
            </h1>
            <p
              className="animate-rise mt-6 max-w-2xl text-lg leading-relaxed text-white/80"
              style={{ animationDelay: "0.14s" }}>
              {category.description}
            </p>
            <div
              className="animate-rise mt-9 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "0.2s" }}>
              <span className="border border-white/20 px-4 py-2 text-sm text-white/90">
                {products.length} Solution{products.length !== 1 ? "s" : ""}
              </span>
              {deployments.map((d) => (
                <span
                  key={d}
                  className="border border-white/20 px-4 py-2 text-sm text-white/90">
                  {d}
                </span>
              ))}
            </div>
            <div
              className="animate-rise mt-9 flex flex-wrap gap-4"
              style={{ animationDelay: "0.26s" }}>
              <Button asChild size="lg" variant="primary">
                <Link href="/enquiry">
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-navy">
                <Link href="/contact">Not sure what fits? Ask us</Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* Featured lead solution */}
        {lead && (
          <Section padding="none" className="py-16 md:py-24">
            <Container>
              <div className="mb-10 flex items-end justify-between gap-6">
                <div>
                  <p className="eyebrow mb-3">Featured</p>
                  <h2 className="text-navy">Where most teams start</h2>
                </div>
                {rest.length > 0 && (
                  <Link
                    href="#all"
                    className="hidden items-center gap-1 text-sm font-medium text-primary-700 hover:text-navy sm:inline-flex">
                    See all {products.length}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
              <Link
                href={`/products/${lead.categorySlug}/${lead.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                data-reveal
                className="group grid overflow-hidden border border-border bg-surface transition-all duration-300 hover:border-navy/30 hover:shadow-[var(--shadow-glow)] lg:grid-cols-2">
                <div className="relative aspect-[16/11] overflow-hidden lg:aspect-auto lg:min-h-[24rem]">
                  <SmartImage
                    src={lead.heroImage}
                    alt={lead.name}
                    label={lead.name}
                    className="transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {lead.deploymentType && (
                    <span className="absolute left-5 top-5 border border-white/30 bg-navy/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
                      {lead.deploymentType}
                    </span>
                  )}
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <h3 className="text-2xl font-semibold leading-snug text-navy md:text-3xl">
                    {lead.name}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                    {lead.tagline}
                  </p>
                  {lead.highlights && lead.highlights.length > 0 && (
                    <ul className="mt-6 grid gap-2.5">
                      {lead.highlights.slice(0, 4).map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-navy">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-700" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-700">
                    View solution
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Container>
          </Section>
        )}

        {/* Full range grid */}
        {rest.length > 0 && (
          <>
            <span id="all" className="block scroll-mt-24" />
            <Section
              padding="none"
              className="border-t border-border bg-surface py-16 md:py-24">
              <Container>
                <div data-reveal className="mb-10 max-w-2xl">
                  <p className="eyebrow mb-3">The full range</p>
                  <h2 className="text-navy">Explore every solution</h2>
                </div>
                <div
                  data-reveal
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((p) => (
                    <ProductCard key={p.slug} product={p} />
                  ))}
                </div>
              </Container>
            </Section>
          </>
        )}

        {/* Assurance strip */}
        <Section
          padding="none"
          className="border-t border-border py-14 md:py-16">
          <Container>
            <div
              data-reveal
              className="grid gap-px border border-border bg-border sm:grid-cols-3">
              {ASSURANCES.map((s) => (
                <div
                  key={s.title}
                  className="flex items-start gap-4 bg-background p-7">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-border text-primary-700">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-navy">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-muted">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <CtaBanner
          heading={`Bring ${category.name} to your business`}
          text="Tell us your requirements and our team will recommend the right fit — with supply, installation, training and support across the UAE."
          image={category.image}
        />
      </main>
    </PublicLayout>
  );
}
