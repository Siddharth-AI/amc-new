import type { Metadata } from "next";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { ShieldCheck, Clock, Headset } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { getProducts, getProductBySlug } from "@/lib/catalog";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Tell AMC Systems what your business needs and get a tailored quote. Software, hardware and support — supplied, installed and serviced across the UAE.",
  alternates: { canonical: `${SITE_URL}/enquiry` },
};

interface PageProps {
  searchParams: Promise<{ product?: string }>;
}

const PERKS = [
  { icon: Clock, title: "Quick response", desc: "We reply to enquiries fast — usually within one business day." },
  { icon: ShieldCheck, title: "No obligation", desc: "A free, no-pressure recommendation for your business." },
  { icon: Headset, title: "End-to-end", desc: "From advice to setup, training and ongoing support." },
];

export default async function EnquiryPage({ searchParams }: PageProps) {
  const { product: productSlug } = await searchParams;
  const products = getProducts().map((p) => ({ value: p.slug, label: p.name }));
  const preset = productSlug ? getProductBySlug(productSlug) : undefined;

  return (
    <PublicLayout>
      <main>
      <PageHero
        eyebrow="Request a Quote"
        title={preset ? `Enquire about ${preset.name}` : "Tell us what your business needs"}
        subtitle="Share a few details and our team will recommend the right solution and prepare a tailored quote."
        crumbs={[{ name: "Home", href: "/" }, { name: "Request a Quote" }]}
        watermark="QUOTE"
      />

      <Section padding="none" className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <p className="eyebrow mb-3">Why enquire</p>
              <h2 className="mb-8 text-navy">Straightforward, helpful, fast</h2>
              <ul className="space-y-7">
                {PERKS.map((p) => (
                  <li key={p.title} className="flex gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary-700">
                      <p.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-medium text-navy">{p.title}</div>
                      <p className="text-text-muted">{p.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <EnquiryForm products={products} defaultProduct={preset?.name ?? ""} />
          </div>
        </Container>
      </Section>
      </main>
    </PublicLayout>
  );
}
