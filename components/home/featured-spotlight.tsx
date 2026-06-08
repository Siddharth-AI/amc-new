import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SmartImage } from "@/components/ui/smart-image";
import type { Product } from "@/types/catalog";

export function FeaturedSpotlight({ products }: { products: Product[] }) {
  if (products.length === 0) return null;
  const [lead, ...rest] = products;
  const list = rest.slice(0, 4);

  return (
    <Section padding="none" className="bg-surface pb-20 md:pb-28">
      <Container>
        <div
          data-reveal
          className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Popular</p>
            <h2 className="text-navy">Most-requested solutions</h2>
          </div>
          <Link
            href="/products"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary-700 hover:underline">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div data-reveal className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Lead / spotlight */}
          <Link
            href={`/products/${lead.categorySlug}/${lead.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden border border-border bg-background transition-all duration-300 hover:border-navy/30 hover:shadow-[var(--shadow-glow)]">
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-[16/11]">
              <SmartImage
                src={lead.heroImage}
                alt={lead.name}
                label={lead.name}
                className="transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {lead.deploymentType && (
                <span className="absolute left-4 top-4 bg-surface/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy backdrop-blur">
                  {lead.deploymentType}
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-7">
              <h3 className="mb-2 text-2xl font-semibold text-navy">
                {lead.name}
              </h3>
              <p className="mb-5 text-text-muted line-clamp-2">
                {lead.shortDescription}
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary-700">
                View solution{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          {/* List */}
          <ul className="flex flex-col overflow-hidden border border-border bg-background">
            {list.map((p, i) => (
              <li
                key={p.slug}
                className={i > 0 ? "border-t border-border" : ""}>
                <Link
                  href={`/products/${p.categorySlug}/${p.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-5 transition-colors hover:bg-surface-sunken">
                  <div className="relative h-20 w-28 shrink-0 overflow-hidden ">
                    <SmartImage
                      src={p.heroImage}
                      alt={p.name}
                      label={p.name}
                      className="transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-base font-semibold text-navy">
                      {p.name}
                    </h3>
                    <p className="line-clamp-1 text-sm text-text-muted">
                      {p.tagline}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-text-muted transition-all group-hover:translate-x-1 group-hover:text-primary-700" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
