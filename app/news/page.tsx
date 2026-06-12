import type { Metadata } from "next";
import { PublicLayout } from "@/components/layout/PublicLayout";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock, Calendar } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/ui/smart-image";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/motion";
import { getNewsServer } from "@/lib/server-data";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "News & Insights",
  description:
    "Practical guides, industry insights and product news from AMC Systems — business software and hardware across the UAE.",
  alternates: { canonical: `${SITE_URL}/news` },
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function PostCard({
  a,
}: {
  a: ReturnType<typeof getNewsServer>[number];
}) {
  return (
    <Link
      href={`/news/${a.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden border border-border bg-surface transition-all duration-300 hover:border-navy/30 hover:shadow-[var(--shadow-glow)]">
      <div className="aspect-[16/10] overflow-hidden">
        <SmartImage
          src={a.featuredImage}
          alt={a.title}
          label={a.title}
          className="transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3 text-xs">
          <span className="font-semibold uppercase tracking-wider text-primary-700">
            {a.category}
          </span>
          <span className="flex items-center gap-1 text-text-muted">
            <Clock className="h-3 w-3" /> {a.readingTime} min
          </span>
        </div>
        <h3 className="mb-2 text-lg font-semibold leading-snug text-navy">
          {a.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-text-muted">
          {a.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-border pt-4 text-sm">
          <span className="text-text-muted">{a.author}</span>
          <span className="inline-flex items-center gap-1 font-medium text-primary-700">
            Read <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function NewsPage() {
  const news = getNewsServer();
  const [featured, ...rest] = news;
  const topics = Array.from(new Set(news.map((a) => a.category)));

  return (
    <PublicLayout>
      <main>
        {/* Hero — cinematic */}
        <section className="relative flex min-h-[58vh] items-center overflow-hidden bg-navy">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero/slide-2.jpg"
            alt=""
            className="animate-kenburns absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />
          <div className="dots-pattern absolute inset-0 opacity-[0.05]" />
          <Container className="relative z-10 py-28 md:py-32">
            <Reveal className="max-w-3xl text-white">
              <p className="eyebrow mb-4 text-primary-300">News &amp; Insights</p>
              <h1 className="mb-6 text-white">
                Ideas, guides and updates for UAE businesses
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-white/80">
                Practical thinking on hospitality, retail, finance and the
                technology that runs them — written by the AMC Systems team.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-9 flex flex-wrap gap-2.5">
              {topics.map((t) => (
                <span
                  key={t}
                  className="border border-white/20 bg-white/5 px-3.5 py-1.5 text-sm text-white/85">
                  {t}
                </span>
              ))}
            </Reveal>
          </Container>
        </section>

        {/* Featured */}
        {featured && (
          <Section padding="none" className="py-16 md:py-24">
            <Container>
              <Reveal className="mb-10">
                <p className="eyebrow mb-3">Featured</p>
                <h2 className="text-navy">Latest from the team</h2>
              </Reveal>
              <Reveal>
                <Link
                  href={`/news/${featured.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid overflow-hidden border border-border bg-surface transition-all duration-300 hover:border-navy/30 hover:shadow-[var(--shadow-glow)] lg:grid-cols-2">
                  <div className="relative aspect-[16/11] overflow-hidden lg:aspect-auto lg:min-h-[22rem]">
                    <SmartImage
                      src={featured.featuredImage}
                      alt={featured.title}
                      label={featured.title}
                      className="transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <span className="absolute left-5 top-5 border border-white/30 bg-navy/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
                      {featured.category}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center p-8 md:p-12">
                    <h3 className="text-2xl font-semibold leading-snug text-navy md:text-3xl">
                      {featured.title}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                      {featured.excerpt}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-text-muted">
                      <span>{featured.author}</span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />{" "}
                        {formatDate(featured.publishDate)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" /> {featured.readingTime} min
                        read
                      </span>
                    </div>
                    <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-700">
                      Read the article
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            </Container>
          </Section>
        )}

        {/* All insights */}
        {rest.length > 0 && (
          <Section
            padding="none"
            className="border-t border-border bg-surface py-16 md:py-24">
            <Container>
              <Reveal className="mb-10 max-w-2xl">
                <p className="eyebrow mb-3">All insights</p>
                <h2 className="text-navy">Browse every article</h2>
              </Reveal>
              <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((a) => (
                  <RevealItem key={a.slug}>
                    <PostCard a={a} />
                  </RevealItem>
                ))}
              </RevealGroup>
            </Container>
          </Section>
        )}
      </main>
    </PublicLayout>
  );
}
