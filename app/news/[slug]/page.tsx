import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SmartImage } from "@/components/ui/smart-image";
import { getNewsServer, getNewsBySlugServer, getRelatedNewsServer } from "@/lib/server-data";
import { MicrositeShell } from "@/components/layout/MicrositeShell";
import { SITE_URL } from "@/lib/site-config";

export const dynamicParams = false;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getNewsServer().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlugServer(slug);
  if (!article) return { title: "Not Found", robots: { index: false } };
  const url = `${SITE_URL}/news/${slug}`;
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title: article.title, description: article.excerpt, images: [article.featuredImage] },
  };
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getNewsBySlugServer(slug);
  if (!article) notFound();

  const related = getRelatedNewsServer(article.id, article.category, 3);

  return (
    <MicrositeShell title="News & Insights" backHref="/news" backLabel="All Articles">
      {/* Header */}
      <Section padding="none" className="relative overflow-hidden bg-navy pt-36 pb-14 md:pt-44 md:pb-16">
        <div className="dots-pattern absolute inset-0 opacity-[0.06]" />
        <Container className="relative">
          <Link href="/news" className="mb-6 inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to News
          </Link>
          <span className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-300">
            {article.category}
          </span>
          <h1 className="max-w-3xl text-white">{article.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/60">
            <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> {article.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {formatDate(article.publishDate)}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {article.readingTime} min read</span>
          </div>
        </Container>
      </Section>

      <Section padding="none" className="py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 aspect-[16/9] overflow-hidden rounded-2xl border border-border">
              <SmartImage src={article.featuredImage} alt={article.title} label={article.title} priority />
            </div>
            <div className="space-y-5">
              {article.content.split("\n").filter(Boolean).map((para, i) => (
                <p key={i} className="text-lg leading-relaxed text-text-secondary">{para}</p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section padding="none" className="border-t border-border bg-surface py-16">
          <Container>
            <h2 className="mb-8 text-3xl text-navy">More from {article.category}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a) => (
                <Link key={a.slug} href={`/news/${a.slug}`} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all hover:border-navy/30">
                  <div className="aspect-[16/10] overflow-hidden">
                    <SmartImage src={a.featuredImage} alt={a.title} label={a.title} className="transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-1 text-base font-semibold text-navy">{a.title}</h3>
                    <p className="line-clamp-2 text-sm text-text-muted">{a.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </MicrositeShell>
  );
}
