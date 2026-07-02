import companyData from "./company.json";
import newsData from "./news.json";
import type { Company, NewsArticle } from "../types";

export const company: Company = companyData as Company;
export const news: NewsArticle[] = newsData as NewsArticle[];

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return news.find((article) => article.slug === slug);
}

export function getRelatedNews(
  articleId: string,
  category: string,
  limit = 3
): NewsArticle[] {
  return news
    .filter(
      (article) => article.id !== articleId && article.category === category
    )
    .slice(0, limit);
}
