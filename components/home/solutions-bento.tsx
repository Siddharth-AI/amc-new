import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SmartImage } from "@/components/ui/smart-image";
import type { Category } from "@/types/catalog";

function Tile({
  category,
  big = false,
}: {
  category: Category;
  big?: boolean;
}) {
  return (
    <Link
      href={`/products/${category.slug}`}
      className={`group relative flex flex-col justify-end overflow-hidden border border-border ${
        big
          ? "col-span-2 min-h-[18rem] lg:row-span-2 lg:min-h-0"
          : "min-h-[12rem] lg:min-h-0"
      }`}>
      <div className="absolute inset-0">
        <SmartImage
          src={category.image}
          alt={category.name}
          label={category.name}
          className="transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/45 to-navy/5" />
      </div>
      <div className={`relative ${big ? "p-7 md:p-8" : "p-5"}`}>
        <span className="mb-1.5 inline-block text-[0.65rem] font-semibold uppercase tracking-widest text-primary-300">
          {category.productType}
        </span>
        <h3
          className={`font-semibold text-white ${big ? "text-2xl md:text-3xl" : "text-lg"}`}>
          {category.name}
        </h3>
        {big && (
          <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75 line-clamp-2">
            {category.tagline}
          </p>
        )}
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-white">
          Explore{" "}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}

export function SolutionsBento({ categories }: { categories: Category[] }) {
  // Curated for the landing — show a few, link out to the rest.
  const featured = categories.slice(0, 4);

  return (
    <Section
      padding="none"
      className="border-t border-border bg-surface py-20 md:py-28">
      <Container>
        <div
          data-reveal
          className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">What we do</p>
            <h2 className="text-navy">
              Solutions for every part of your business
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary-700 hover:underline">
            View all solutions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div
          data-reveal
          className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:auto-rows-[210px]">
          {featured.map((c, i) => (
            <Tile key={c.slug} category={c} big={i === 0} />
          ))}

          {/* View-all tile */}
          <Link
            href="/products"
            className="group relative col-span-2 flex min-h-[12rem] flex-col justify-between overflow-hidden bg-navy p-6 lg:col-span-1 lg:min-h-0">
            <div className="dots-pattern absolute inset-0 opacity-[0.08]" />
            <span className="relative text-[0.65rem] font-semibold uppercase tracking-widest text-primary-300">
              {categories.length}+ solutions
            </span>
            <div className="relative">
              <h3 className="text-xl font-semibold text-white">
                See everything we offer
              </h3>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-white">
                Browse all{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
