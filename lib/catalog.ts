// ============================================================================
// CATALOG ACCESSORS — single source of truth for product/category data.
// Reads static JSON (lib/data/catalog/*.json). Safe in Server Components,
// generateStaticParams and generateMetadata. No DB, no client fetch.
// ============================================================================

import categoriesData from "./data/catalog/categories.json";
import productsData from "./data/catalog/products.json";
import type { Category, Product } from "@/types/catalog";

const categories = categoriesData as Category[];
const products = productsData as Product[];

const byOrder = <T extends { displayOrder: number }>(a: T, b: T) =>
  a.displayOrder - b.displayOrder;

// ---------------------------------------------------------------- Categories
export function getCategories(): Category[] {
  return categories.filter((c) => c.isActive).sort(byOrder);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug && c.isActive);
}

export function getCategorySlugs(): string[] {
  return categories.filter((c) => c.isActive).map((c) => c.slug);
}

// ------------------------------------------------------------------ Products
export function getProducts(): Product[] {
  return [...products].sort(byOrder);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug).sort(byOrder);
}

export function getFeaturedProducts(limit?: number): Product[] {
  const featured = products.filter((p) => p.isFeatured).sort(byOrder);
  return typeof limit === "number" ? featured.slice(0, limit) : featured;
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  const related = product.relatedSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is Product => Boolean(p));
  return related.slice(0, limit);
}

/** All product slugs for generateStaticParams. */
export function getProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

/** Category + its products, for category pages and nav. */
export function getCategoryWithProducts(
  slug: string
): { category: Category; products: Product[] } | undefined {
  const category = getCategoryBySlug(slug);
  if (!category) return undefined;
  return { category, products: getProductsByCategory(slug) };
}

export function getCatalog(): { category: Category; products: Product[] }[] {
  return getCategories().map((category) => ({
    category,
    products: getProductsByCategory(category.slug),
  }));
}
