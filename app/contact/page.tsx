import type { Metadata } from "next";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { BUSINESS } from "@/lib/business";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with AMC Systems in Sharjah, UAE. Call, email or send us a message — our team is ready to help with software, hardware and support.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <PublicLayout>
      <main>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your business"
        subtitle="Reach out and our team will help you find the right solution — and handle setup, training and support."
        crumbs={[{ name: "Home", href: "/" }, { name: "Contact" }]}
        watermark="HELLO"
      />

      <Section padding="none" className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* Info */}
            <div>
              <p className="eyebrow mb-3">Get in touch</p>
              <h2 className="mb-8 text-navy">We're here to help</h2>
              <ul className="space-y-7">
                <li className="flex gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary-700"><MapPin className="h-5 w-5" /></span>
                  <div>
                    <div className="font-medium text-navy">Visit us</div>
                    <p className="text-text-muted">{BUSINESS.address.full}</p>
                    <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-primary-700 hover:underline">
                      View on map <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary-700"><Phone className="h-5 w-5" /></span>
                  <div>
                    <div className="font-medium text-navy">Call / WhatsApp</div>
                    <a href={`tel:${BUSINESS.phone}`} className="text-text-muted hover:text-navy">{BUSINESS.phoneDisplay}</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary-700"><Mail className="h-5 w-5" /></span>
                  <div>
                    <div className="font-medium text-navy">Email</div>
                    <a href={`mailto:${BUSINESS.email}`} className="text-text-muted hover:text-navy">{BUSINESS.email}</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary-700"><Clock className="h-5 w-5" /></span>
                  <div>
                    <div className="font-medium text-navy">Working hours</div>
                    <p className="text-text-muted">Mon–Fri: {BUSINESS.hours.monday}</p>
                    <p className="text-text-muted">Sat: {BUSINESS.hours.saturday} · Sun: Closed</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </Container>
      </Section>
      </main>
    </PublicLayout>
  );
}
