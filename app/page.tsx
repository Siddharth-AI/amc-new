import type { Metadata } from "next";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { HomeHero } from "@/components/home/hero";
import { CompanyIntro, WhyChooseUs, Reviews } from "@/components/home/sections";
import { SolutionsBento } from "@/components/home/solutions-bento";
import { FeaturedSpotlight } from "@/components/home/featured-spotlight";
import { CtaBanner } from "@/components/home/cta";
import { getCategories, getFeaturedProducts } from "@/lib/catalog";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "AMC Systems — Business Software & Hardware in the UAE",
  description:
    "AMC Systems (Al Marwah Computer Systems), Sharjah since 2003. End-to-end business software and hardware — hotel, restaurant, retail and salon management, ERP, HR & payroll, and POS hardware. Trusted by 1000+ businesses.",
  alternates: { canonical: SITE_URL },
};

export default function Home() {
  const categories = getCategories();
  const featured = getFeaturedProducts(6);

  return (
    <PublicLayout>
      <main>
      <HomeHero />
      <CompanyIntro />
      <SolutionsBento categories={categories} />
      <FeaturedSpotlight products={featured} />
      <WhyChooseUs />
      <Reviews />
      <CtaBanner />
      </main>
    </PublicLayout>
  );
}
