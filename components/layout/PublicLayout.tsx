/**
 * Public Layout Wrapper — always renders Header + Footer.
 * Server component (no admin routing needed anymore).
 */

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getCategories } from "@/lib/catalog";

export function PublicLayout({ children }: { children: React.ReactNode }) {
  const categories = getCategories().map((c) => ({
    slug: c.slug,
    name: c.name,
    tagline: c.tagline,
    productType: c.productType,
  }));

  return (
    <div className="flex min-h-screen flex-col">
      <Header categories={categories} />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
