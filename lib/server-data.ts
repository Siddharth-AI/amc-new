/**
 * Server-side data utilities for news/insights (static generation).
 * Product and category data now come from `@/lib/catalog`.
 */

import { news } from "./data";
import type { NewsArticle } from "./types";

/** Get all news articles (server-side). */
export function getNewsServer(): NewsArticle[] {
  return news;
}

/** Get a news article by slug (server-side). */
export function getNewsBySlugServer(slug: string): NewsArticle | undefined {
  return news.find((article) => article.slug === slug);
}

/** Get related news articles by category (server-side). */
export function getRelatedNewsServer(
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

/** Helper to create a URL slug from a name and ID. */
export function createSlug(name: string, id: string): string {
  return `${name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")}-${id}`;
}

/** Helper to extract an ID from a slug. */
export function extractIdFromSlug(slug: string): string {
  const parts = slug.split("-");
  return parts[parts.length - 1] || slug;
}
