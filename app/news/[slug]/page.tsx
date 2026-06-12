import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MicrositeShell } from "@/components/layout/MicrositeShell";
import { BlogPage } from "@/components/blog/templates";
import { getBlogTheme } from "@/components/blog/templates/shared";
import { getNewsServer, getNewsBySlugServer } from "@/lib/server-data";
import type { NewsArticle } from "@/lib/types";
import { SITE_URL } from "@/lib/site-config";

export const dynamicParams = false;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getNewsServer().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlugServer(slug);
  if (!article) return { title: "Not Found", robots: { index: false } };
  const url = `${SITE_URL}/news/${slug}`;
  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.tags,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: article.title,
      description: article.excerpt,
      images: [article.featuredImage],
      publishedTime: article.publishDate,
      authors: [article.author],
    },
  };
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getNewsBySlugServer(slug);
  if (!article) notFound();

  const all = getNewsServer();
  const bySlug = new Map(all.map((a) => [a.slug, a]));
  let related: NewsArticle[] = (article.relatedSlugs ?? [])
    .map((s) => bySlug.get(s))
    .filter((a): a is NewsArticle => Boolean(a));
  if (related.length === 0) {
    related = all
      .filter((a) => a.slug !== slug && a.category === article.category)
      .slice(0, 3);
  }

  return (
    <MicrositeShell
      title={article.title}
      backHref="/news"
      backLabel="All Insights"
      theme={getBlogTheme(article)}>
      <BlogPage article={article} related={related} />
    </MicrositeShell>
  );
}
