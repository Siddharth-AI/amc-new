import type { Metadata } from "next";
import { PublicLayout } from "@/components/layout/PublicLayout";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/catalog/product-card";
import { SmartImage } from "@/components/ui/smart-image";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/motion";
import { getCatalog, getFeaturedProducts } from "@/lib/catalog";
import { BUSINESS } from "@/lib/business";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore AMC Systems' full range of business software and hardware — hotel, restaurant, retail and salon management, ERP & accounting, HR & payroll, time & attendance and POS hardware.",
  alternates: { canonical: `${SITE_URL}/products` },
};

export default function ProductsPage() {
  const catalog = getCatalog();
  const totalProducts = catalog.reduce((n, c) => n + c.products.length, 0);
  const featured = getFeaturedProducts().slice(0, 3);

  const stats = [
    { v: String(catalog.length), l: "Solution categories" },
    { v: `${totalProducts}+`, l: "Products & systems" },
    { v: BUSINESS.experience, l: "Years in the UAE" },
    { v: BUSINESS.happyClients, l: "Businesses served" },
  ];

  return (
    <PublicLayout>
      <main>
        {/* Hero — cinematic full-bleed image */}
        <section className="relative flex min-h-[82vh] items-center overflow-hidden bg-navy">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero/home.jpg"
            alt=""
            className="animate-kenburns absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/40" />
          <div className="dots-pattern absolute inset-0 opacity-[0.03]" />
          <Container className="relative z-10 py-28">
            <Reveal className="max-w-5xl text-white">
              <p className="eyebrow mb-4 text-primary-300">Our Solutions</p>
              <h1 className="mb-6 text-white">
                Everything your business runs on, in one place
              </h1>
              <p className="max-w-4xl text-lg leading-relaxed text-white/80">
                Industry-proven software and reliable hardware for hospitality,
                retail and back-office — supplied, installed and supported
                across the UAE.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
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
                  <Link href="#directory">
                    Browse solutions <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
            <Reveal
              delay={0.1}
              className="mt-14 grid grid-cols-2 gap-px overflow-hidden border border-white/15 bg-white/10 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.l}
                  className="bg-white/[0.06] px-6 py-7 backdrop-blur-md">
                  <div className="font-display text-3xl font-medium text-white md:text-4xl">
                    {s.v}
                  </div>
                  <div className="mt-1 text-sm text-white/60">{s.l}</div>
                </div>
              ))}
            </Reveal>
          </Container>
        </section>

        {/* Solutions directory — category cards */}
        <span id="directory" className="block scroll-mt-24" />
        <Section padding="none" className="py-16 md:py-24">
          <Container>
            <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className="eyebrow mb-3">Browse by category</p>
                <h2 className="text-navy">Pick the area you want to improve</h2>
              </div>
              <Button asChild variant="outline">
                <Link href="/contact">
                  Not sure what fits? Ask us <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </Reveal>

            <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {catalog.map(({ category, products }) => (
                <RevealItem key={category.slug}>
                  <Link
                    href={`/products/${category.slug}`}
                    className="group flex h-full flex-col overflow-hidden border border-border bg-surface transition-all duration-300 hover:border-navy/30 hover:shadow-[var(--shadow-glow)]">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <SmartImage
                        src={category.image}
                        alt={category.name}
                        label={category.name}
                        className="transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
                      <span className="absolute left-4 top-4 border border-white/30 bg-navy/40 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-wider text-white backdrop-blur">
                        {category.productType}
                      </span>
                      <h3 className="absolute inset-x-0 bottom-0 p-5 text-lg font-semibold leading-snug text-white">
                        {category.name}
                      </h3>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="line-clamp-2 text-sm leading-relaxed text-text-muted">
                        {category.tagline}
                      </p>
                      <span className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm font-medium text-primary-700">
                        {products.length} solution
                        {products.length !== 1 ? "s" : ""}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </Section>

        {/* Featured solutions */}
        {featured.length > 0 && (
          <Section
            padding="none"
            className="border-t border-border bg-surface py-16 md:py-24">
            <Container>
              <Reveal className="mb-12 max-w-2xl">
                <p className="eyebrow mb-3">Most popular</p>
                <h2 className="text-navy">Where businesses start with us</h2>
              </Reveal>
              <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featured.map((p) => (
                  <RevealItem key={p.slug}>
                    <ProductCard product={p} />
                  </RevealItem>
                ))}
              </RevealGroup>
            </Container>
          </Section>
        )}

        {/* CTA */}
        <Section
          padding="none"
          className="border-t border-border py-16 md:py-24">
          <Container>
            <Reveal className="relative overflow-hidden border border-border bg-navy px-8 py-16 text-center md:px-12 md:py-20">
              <div className="dots-pattern absolute inset-0 opacity-[0.06]" />
              <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
                <p className="eyebrow text-primary-300">Not sure what fits?</p>
                <h2 className="text-white">Tell us about your business</h2>
                <p className="text-white/70">
                  Our team will recommend the right software and hardware for
                  your needs — and handle supply, installation, training and
                  support.
                </p>
                <div className="mt-2 flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" variant="primary">
                    <Link href="/enquiry">
                      Request a Quote <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white hover:text-navy">
                    <Link href="/contact">
                      Talk to an Expert <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </Container>
        </Section>
      </main>
    </PublicLayout>
  );
}
