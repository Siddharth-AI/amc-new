import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SmartImage } from "@/components/ui/smart-image";
import type { Category } from "@/types/catalog";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/products/${category.slug}`}
      className="group relative flex min-h-[18rem] flex-col justify-end overflow-hidden rounded-2xl border border-border">
      <div className="absolute inset-0">
        <SmartImage
          src={category.image}
          alt={category.name}
          label={category.name}
          className="transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/55 to-navy/10" />
      </div>
      <div className="relative p-7">
        <span className="mb-2 inline-block text-[0.7rem] font-semibold uppercase tracking-widest text-primary-300">
          {category.productType}
        </span>
        <h3 className="mb-2 text-2xl font-semibold text-white">{category.name}</h3>
        <p className="mb-4 max-w-sm text-sm leading-relaxed text-white/75 line-clamp-2">
          {category.tagline}
        </p>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white">
          Explore
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
