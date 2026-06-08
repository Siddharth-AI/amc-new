"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  ShieldCheck,
  Headset,
  Zap,
  TrendingUp,
  Users,
  Quote,
  Star,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/business";

const EASE = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};
const viewport = { once: true, margin: "-80px" } as const;

/* ----------------------------------------------------------- Company Intro */
export function CompanyIntro() {
  return (
    <Section padding="none" className="py-14 md:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/about.jpg" alt="The AMC Systems team" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-glow)] sm:block">
              <div className="flex items-center gap-4">
                <span className="font-display text-5xl font-medium text-navy">{BUSINESS.foundingYear}</span>
                <div>
                  <div className="font-medium text-navy">Established</div>
                  <div className="text-sm text-text-muted">in Sharjah, UAE</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
            <motion.p variants={fadeUp} className="eyebrow mb-3">About AMC Systems</motion.p>
            <motion.h2 variants={fadeUp} className="mb-6 text-navy">{BUSINESS.tagline}</motion.h2>
            <motion.p variants={fadeUp} className="mb-5 text-lg leading-relaxed text-text-secondary">
              {BUSINESS.companyDescription}
            </motion.p>
            <motion.p variants={fadeUp} className="mb-8 leading-relaxed text-text-muted">
              {BUSINESS.philosophy}
            </motion.p>
            <motion.div variants={fadeUp} className="mb-8 flex flex-wrap items-center gap-6">
              {[
                { icon: ShieldCheck, label: `${BUSINESS.experience}` },
                { icon: Award, label: "Trusted partner" },
                { icon: Users, label: `${BUSINESS.happyClients} clients` },
              ].map((t) => (
                <span key={t.label} className="flex items-center gap-2 text-sm font-medium text-navy">
                  <t.icon className="h-4 w-4 text-primary" /> {t.label}
                </span>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="primary">
                <a href="/about">More About Us <ArrowRight className="h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/contact">Contact Us</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------- Why Choose */
const FEATURES = [
  { icon: Award, title: `${BUSINESS.experience}`, desc: "Two decades of delivering end-to-end business solutions across the UAE." },
  { icon: ShieldCheck, title: "Trusted partner", desc: "A reliable partner with a proven track record and deep industry expertise." },
  { icon: Headset, title: "24/7 support", desc: "Round-the-clock on-site and online assistance whenever you need it." },
  { icon: Zap, title: "Fast deployment", desc: "Quick setup and integration with minimal disruption to your business." },
  { icon: TrendingUp, title: "Scalable solutions", desc: "Systems that grow with you — from a single outlet to a nationwide chain." },
  { icon: Users, title: "Expert team", desc: "Dedicated specialists committed to your success, before and after rollout." },
];

export function WhyChooseUs() {
  return (
    <Section padding="none" className="border-y border-border bg-surface py-20 md:py-28">
      <Container>
        <motion.div
          initial="hidden" whileInView="show" viewport={viewport}
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}>
          <motion.div variants={fadeUp} className="mb-14 max-w-2xl">
            <p className="eyebrow mb-3">Why AMC Systems</p>
            <h2 className="mb-4 text-navy">A partner built for excellence</h2>
            <p className="text-lg leading-relaxed text-text-secondary">
              We don't just supply technology — we partner with you for sustainable growth and long-term success.
            </p>
          </motion.div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <motion.div key={f.title} variants={fadeUp} className="group bg-surface p-8 transition-colors hover:bg-surface-sunken">
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary-700 transition-colors group-hover:bg-primary group-hover:text-white">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mb-2 text-lg font-semibold text-navy">{f.title}</h3>
                <p className="leading-relaxed text-text-muted">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

/* ----------------------------------------------------------------- Reviews */
const REVIEWS = [
  { name: "Ahmed Al Mansoori", role: "CEO, Dubai Retail Group", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80", text: "Working with AMC Systems for over a decade has been transformational. Their experience shows in every solution they deliver." },
  { name: "Sarah Johnson", role: "Operations Director, Tech Solutions LLC", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80", text: "The depth of their industry knowledge is invaluable. They know exactly what works and what doesn't." },
  { name: "Mohammed Hassan", role: "Store Manager, SuperMart UAE", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80", text: "The best business solutions provider in the UAE — reliable, battle-tested systems and brilliant support." },
];

export function Reviews() {
  return (
    <Section padding="none" className="py-20 md:py-28">
      <Container>
        <motion.div
          initial="hidden" whileInView="show" viewport={viewport}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}>
          <motion.div variants={fadeUp} className="mb-14 max-w-2xl">
            <p className="eyebrow mb-3">Trusted across the UAE</p>
            <h2 className="text-navy">What our clients say</h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <motion.figure key={r.name} variants={fadeUp} className="flex flex-col rounded-2xl border border-border bg-surface p-8">
                <Quote className="mb-5 h-7 w-7 text-primary/40" />
                <blockquote className="mb-6 flex-1 text-lg leading-relaxed text-navy">{r.text}</blockquote>
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <figcaption className="flex items-center gap-3 border-t border-border pt-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.avatar} alt={r.name} className="h-11 w-11 rounded-full object-cover" />
                  <div>
                    <div className="font-medium text-navy">{r.name}</div>
                    <div className="text-sm text-text-muted">{r.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
