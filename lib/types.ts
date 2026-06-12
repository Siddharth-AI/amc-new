export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  slug: string;
  title: string;
  brand?: string;
  categoryId: string;
  categorySlug: string;
  description: string;
  shortDescription: string;
  price?: number;
  currency?: string;
  images?: Array<{
    id: string;
    base_url: string;
    img_name: string;
    is_primary?: boolean;
  }>;
  keyFeatures: string[];
  specifications: Record<string, string>;
  warranty: string;
}

export interface Company {
  story: string;
  mission: string;
  vision: string;
  values: string[];
  timeline: TimelineEvent[];
  team: TeamMember[];
  certifications: string[];
  partnerships: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  quote?: { text: string; by?: string };
  stat?: { v: string; l: string };
}

export interface BlogFaq {
  q: string;
  a: string;
}

export interface BlogStat {
  v: string;
  l: string;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  featuredImage: string;
  readingTime: number;

  /** Rich blog fields (microsite templates) — optional, backward compatible. */
  authorRole?: string;
  tags?: string[];
  design?: string;
  theme?: { acc: string; ink: string };
  secondaryImage?: string;
  lead?: string;
  sections?: BlogSection[];
  takeaways?: string[];
  stats?: BlogStat[];
  faqs?: BlogFaq[];
  relatedSlugs?: string[];
}

