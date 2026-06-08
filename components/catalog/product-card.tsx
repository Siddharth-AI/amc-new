import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SmartImage } from "@/components/ui/smart-image";
import type { Product } from "@/types/catalog";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.categorySlug}/${product.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden border border-border bg-surface transition-all duration-300 hover:border-navy/30 hover:shadow-[var(--shadow-glow)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <SmartImage
          src={product.heroImage}
          alt={product.name}
          label={product.name}
          className="transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {product.deploymentType && (
          <span className="absolute left-4 top-4 rounded-full bg-surface/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy backdrop-blur">
            {product.deploymentType}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-semibold leading-snug text-navy">{product.name}</h3>
        <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-text-muted">{product.tagline}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary-700">
          View solution
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
