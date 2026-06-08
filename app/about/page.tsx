import type { Metadata } from "next";
import { PublicLayout } from "@/components/layout/PublicLayout";
import {
  Users,
  Target,
  Heart,
  ShieldCheck,
  Server,
  GraduationCap,
  UserCheck,
  FileCheck,
  Headset,
  CalendarClock,
  LayoutGrid,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/home/cta";
import { Reveal } from "@/components/ui/motion";
import { BUSINESS } from "@/lib/business";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Al Marwah Computer Systems (AMC Systems) has delivered end-to-end business technology in the UAE since 2003 — software, hardware and support trusted by 1000+ businesses.",
  alternates: { canonical: `${SITE_URL}/about` },
};

const STATS = [
  { icon: CalendarClock, value: BUSINESS.experience, label: "In business" },
  { icon: Users, value: BUSINESS.happyClients, label: "Businesses served" },
  { icon: LayoutGrid, value: BUSINESS.softwareSolutions, label: "Software solutions" },
  { icon: MapPin, value: "7", label: "Emirates covered" },
];

const SERVICES = [
  { icon: Server, title: "IT Infrastructure", desc: "Servers, networks and devices — specified, installed and managed." },
  { icon: GraduationCap, title: "Online & Onsite Training", desc: "Hands-on training so your team is productive from day one." },
  { icon: UserCheck, title: "Dedicated Account Manager", desc: "A single point of contact who knows your business." },
  { icon: FileCheck, title: "Support Contracts", desc: "Flexible annual maintenance plans that keep you running." },
  { icon: Headset, title: "24/7 Online & Phone Support", desc: "Round-the-clock help whenever you need it, however you reach us." },
];

const VALUES = [
  {
    icon: Users,
    title: "People",
    desc: "An environment where individual ideas and work are respected — ensuring long-term success for our clients and team.",
  },
  {
    icon: Target,
    title: "Clients",
    desc: "Understanding and building responsive solutions around our clients' needs, and growing through mutually beneficial relationships.",
  },
  {
    icon: Heart,
    title: "Respect",
    desc: "Creating and maintaining an environment of trust, empowerment and teamwork through mutual respect.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Operating to the highest standards of professionalism and ethical values in everything we do.",
  },
];

export default function AboutPage() {
  return (
    <PublicLayout>
      <main>
      <PageHero
        eyebrow="About AMC Systems"
        title={BUSINESS.tagline}
        subtitle={`Al Marwah Computer Systems — delivering end-to-end business technology across the UAE since ${BUSINESS.foundingYear}.`}
        crumbs={[{ name: "Home", href: "/" }, { name: "About" }]}
        watermark="AMC"
        meta={[
          { value: String(BUSINESS.foundingYear), label: "Established" },
          { value: "Sharjah", label: "Headquarters" },
          { value: BUSINESS.happyClients, label: "Businesses served" },
        ]}
      />

      {/* Story */}
      <Section padding="none" className="py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/about.jpg"
                    alt="The AMC Systems team"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-glow)] sm:block">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-5xl font-medium text-navy">
                      {BUSINESS.foundingYear}
                    </span>
                    <div>
                      <div className="font-medium text-navy">Established</div>
                      <div className="text-sm text-text-muted">
                        in Sharjah, UAE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <p className="eyebrow mb-3">Our company</p>
              <h2 className="mb-5 text-navy">
                A young, dynamic company with decades of experience
              </h2>
              <p className="mb-5 text-lg leading-relaxed text-text-secondary">
                {BUSINESS.companyDescription}
              </p>
              <p className="leading-relaxed text-text-muted">
                {BUSINESS.philosophy}
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Stats */}
      <Section padding="none" className="bg-navy">
        <Container>
          <div className="grid grid-cols-2 divide-x divide-y divide-white/10 sm:grid-cols-4 sm:divide-y-0">
            {STATS.map((s) => (
              <div key={s.label} className="px-5 py-10 sm:px-8 sm:py-16">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-primary-300">
                  <s.icon className="h-5 w-5" />
                </span>
                <div className="font-display text-4xl font-medium text-white md:text-5xl">{s.value}</div>
                <div className="mt-1 text-sm text-white/55">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services / what we deliver */}
      <Section padding="none" className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow mb-3">Beyond the product</p>
                <h2 className="mb-4 text-navy">Service and support, end to end</h2>
                <p className="text-lg leading-relaxed text-text-secondary">
                  We don&apos;t just supply technology — we install it, train your team and stay with you after go-live.
                </p>
              </div>
            </Reveal>
            <Reveal className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
              {SERVICES.map((s) => (
                <div
                  key={s.title}
                  className="group flex items-start gap-5 p-6 transition-colors hover:bg-surface-sunken">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-700 transition-colors group-hover:bg-primary group-hover:text-white">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-navy">{s.title}</h3>
                    <p className="text-text-muted">{s.desc}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Core values — numbered editorial */}
      <Section
        padding="none"
        className="border-t border-border bg-surface py-16 md:py-24">
        <Container>
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow mb-3">What we stand for</p>
            <h2 className="text-navy">Our core values</h2>
          </Reveal>
          <Reveal className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="flex gap-6 border-t border-border pt-7">
                <span className="font-display text-4xl font-medium text-primary/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="mb-1.5 flex items-center gap-2">
                    <v.icon className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold text-navy">
                      {v.title}
                    </h3>
                  </div>
                  <p className="leading-relaxed text-text-muted">{v.desc}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      <CtaBanner
        heading="Let's build something reliable together"
        text="Talk to our team about the software and hardware your business needs."
        image="/images/hero/slide-1.jpg"
      />
      </main>
    </PublicLayout>
  );
}
