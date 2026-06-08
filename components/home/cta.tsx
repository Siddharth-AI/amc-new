import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/business";

export function CtaBanner({
  heading = "Tell us what your business needs",
  text = "Share your requirements and our team will recommend the right solution — and handle setup, training and support.",
  image = "/images/about.jpg",
}: {
  heading?: string;
  text?: string;
  image?: string;
}) {
  const trust = [
    { value: BUSINESS.experience, label: "in business" },
    { value: BUSINESS.happyClients, label: "businesses served" },
    { value: "24/7", label: "support" },
  ];

  return (
    <Section padding="none" className="py-16 md:py-24">
      <Container>
        <div className="relative grid overflow-hidden bg-[var(--ink,#1e3358)] lg:grid-cols-2">
          {/* texture + accent glow (theme-aware) */}
          <div className="dots-pattern pointer-events-none absolute inset-0 opacity-[0.06]" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[var(--acc,#16a5a3)]/25 blur-[110px]" />

          {/* Content */}
          <div className="relative order-2 p-7 sm:p-10 lg:order-1 lg:p-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc,#5ec5c3)]">Get started</p>
            <h2 className="mb-5 max-w-md text-white">{heading}</h2>
            <p className="mb-9 max-w-md text-lg leading-relaxed text-white/70">
              {text}
            </p>
            <div className="mb-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[var(--acc,#16a5a3)] text-[var(--ink,#1e3358)] hover:opacity-90">
                <Link href="/enquiry">
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-[var(--ink,#1e3358)]">
                <Link href="/products">Explore Solutions</Link>
              </Button>
            </div>
          </div>

          {/* Image panel */}
          <div className="relative order-1 min-h-[200px] sm:min-h-[280px] lg:order-2 lg:min-h-[480px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* blend image into the panel (theme-aware) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink,#1e3358)] via-[var(--ink,#1e3358)]/40 to-transparent lg:bg-gradient-to-r lg:from-[var(--ink,#1e3358)] lg:via-[var(--ink,#1e3358)]/30 lg:to-transparent" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
