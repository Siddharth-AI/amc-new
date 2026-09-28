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
  { name: "Jeddah", role: "Business Owner", avatar: "https://ui-avatars.com/api/?name=Jeddah&background=0B5563&color=fff&size=200", text: "We are very satisfied with the software and especially with the way it was taught to us. Sir Dave explained everything and specifically, making sure we understood each step. He was extremely patient and always ready to guide us whenever we need help. The training became smoother and more effective. Both of them were always available whenever we had questions or needed assistance. Their dedication and professionalism truly made a big difference. Highly recommend!" },
  { name: "Anjienet Asanulla", role: "Business Manager", avatar: "https://ui-avatars.com/api/?name=Anjienet+Asanulla&background=0B5563&color=fff&size=200", text: "Hi I would like to give a feedback and good experience with this company. My experience is excellent, the data is friendly user and the management is easy to reach out specially sir Dave. Every time I have concerns or question he solve my concern in just a minute. I highly recommend this company." },
  { name: "Kimberly Thorne", role: "Client", avatar: "https://ui-avatars.com/api/?name=Kimberly+Thorne&background=0B5563&color=fff&size=200", text: "Dave has been incredible to work with, always super responsive, accommodating, and genuinely friendly. No matter the situation, he goes out of his way to help and make things easier. It's rare to find someone so consistent, communicative, and kind. Truly a pleasure every time! Highly recommend working with him." },
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
          <motion.div variants={fadeUp} className="mt-10 flex justify-center">
            <Button asChild size="lg" variant="outline">
              <a href="https://www.google.com/maps/place/AMC+Systems/@25.3238423,55.3823568,17z/data=!4m8!3m7!1s0x3e5f5f269ea94e35:0x49ec981b9e1f92dd!8m2!3d25.3238423!4d55.3823568!9m1!1b1!16s%2Fg%2F11bbwxcrdz" target="_blank" rel="noopener noreferrer">
                View all reviews on Google <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
