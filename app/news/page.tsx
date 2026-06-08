import type { Metadata } from "next";
import { PublicLayout } from "@/components/layout/PublicLayout";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { SmartImage } from "@/components/ui/smart-image";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/motion";
import { getNewsServer } from "@/lib/server-data";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "News & Insights",
  description:
    "News, product updates and industry insights from AMC Systems — business technology, software and hardware across the UAE.",
  alternates: { canonical: `${SITE_URL}/news` },
};

function formatDate(d: string) {
  const date = new Date(d);
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export default function NewsPage() {
  const news = getNewsServer();

  return (
    <PublicLayout>
      <main>
      <PageHero
        eyebrow="News & Insights"
        title="What's new at AMC Systems"
        subtitle="Product updates, announcements and insights from the world of business technology."
        crumbs={[{ name: "Home", href: "/" }, { name: "News" }]}
        watermark="NEWS"
      />

      <Section padding="none" className="py-16 md:py-24">
        <Container>
          {news.length === 0 ? (
            <p className="text-text-muted">No articles yet — check back soon.</p>
          ) : (
            <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {news.map((a) => (
                <RevealItem key={a.slug}>
                  <Link
                    href={`/news/${a.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:border-navy/30 hover:shadow-[var(--shadow-glow)]">
                    <div className="aspect-[16/10] overflow-hidden">
                      <SmartImage
                        src={a.featuredImage}
                        alt={a.title}
                        label={a.title}
                        className="transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-3 flex items-center gap-3 text-xs text-text-muted">
                        <span className="rounded-full bg-primary/10 px-2.5 py-1 font-medium text-primary-700">{a.category}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {a.readingTime} min</span>
                      </div>
                      <h3 className="mb-2 text-lg font-semibold leading-snug text-navy">{a.title}</h3>
                      <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-text-muted">{a.excerpt}</p>
                      <div className="mt-auto flex items-center justify-between border-t border-border pt-4 text-sm">
                        <span className="text-text-muted">{formatDate(a.publishDate)}</span>
                        <span className="inline-flex items-center gap-1 font-medium text-primary-700">
                          Read <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
          )}
        </Container>
      </Section>
      </main>
    </PublicLayout>
  );
}
