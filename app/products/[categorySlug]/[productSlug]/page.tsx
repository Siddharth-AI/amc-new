import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProductBySlug,
  getCategoryBySlug,
  getRelatedProducts,
  getProducts,
} from "@/lib/catalog";
import { ProductPage } from "@/components/catalog/templates";
import { getTheme } from "@/components/catalog/templates/shared";
import { MicrositeShell } from "@/components/layout/MicrositeShell";
import { SITE_URL } from "@/lib/site-config";

export const dynamicParams = false;

interface PageProps {
  params: Promise<{ categorySlug: string; productSlug: string }>;
}

export function generateStaticParams() {
  return getProducts().map((p) => ({
    categorySlug: p.categorySlug,
    productSlug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { productSlug } = await params;
  const product = getProductBySlug(productSlug);
  if (!product) return { title: "Not Found", robots: { index: false } };

  const url = `${SITE_URL}/products/${product.categorySlug}/${product.slug}`;
  return {
    title: product.name,
    description: product.shortDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${product.name} | AMC Systems`,
      description: product.shortDescription,
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { categorySlug, productSlug } = await params;
  const product = getProductBySlug(productSlug);

  if (!product || product.categorySlug !== categorySlug) {
    notFound();
  }

  const category = getCategoryBySlug(product.categorySlug);
  const related = getRelatedProducts(product);

  return (
    <MicrositeShell title={product.name} backHref="/products" backLabel="All Solutions" theme={getTheme(product)}>
      <ProductPage product={product} category={category} related={related} />
    </MicrositeShell>
  );
}
