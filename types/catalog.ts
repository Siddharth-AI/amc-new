// ============================================================================
// CATALOG TYPES — JSON-driven product catalog (no DB, no admin)
// All page data is read from lib/data/catalog/*.json at build time (SSG).
// ============================================================================

export type ProductType = "Software" | "Hardware";
export type ProductTemplate = "software" | "hardware";
export type DeploymentType =
  | "Cloud"
  | "Desktop"
  | "Cloud / On-Premise"
  | "On-Premise"
  | null;

/** Ordered content blocks a product detail page renders. */
export type SectionKey =
  | "hero"
  | "overview"
  | "highlights"
  | "features"
  | "specifications"
  | "integrations"
  | "gallery"
  | "video"
  | "audience"
  | "faq"
  | "related"
  | "cta";

export interface Category {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  productType: ProductType;
  /** Local image path under /public, e.g. "/images/categories/hotel.jpg" */
  image: string;
  displayOrder: number;
  isActive: boolean;
}

export interface KeyFeature {
  title: string;
  description: string;
}

export interface Specification {
  label: string;
  value: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Product {
  id: string;
  slug: string;
  categorySlug: string;
  name: string;
  productType: ProductType;
  template: ProductTemplate;
  /** Layout template key (which template file renders this product). */
  design?: string;
  /** Per-product colour theme (accent + dark ink) — makes every page distinct. */
  theme?: { acc: string; ink: string };
  deploymentType: DeploymentType;

  /** Short marketing line (hero subtitle). */
  tagline: string;
  /** 40–60 word answer-first summary (meta description + AEO answer block). */
  shortDescription: string;
  /** Full description, 1–3 short paragraphs (plain text). */
  description: string;

  /** Local /public image paths. */
  heroImage: string;
  gallery: string[];

  highlights: string[];
  keyFeatures: KeyFeature[];
  specifications: Specification[];
  /** Integration headings ONLY (no detail) — per client requirement. */
  integrations: string[];
  audience: string[];
  faqs: Faq[];

  /** YouTube embed URL (client supplies later); null = no video block. */
  videoUrl: string | null;

  /** Product demo videos (YouTube). Rendered as a "See it in action" block. */
  videos?: { title: string; youtubeId: string }[];

  /** Block order for the detail page. */
  sections: SectionKey[];

  relatedSlugs: string[];
  isFeatured: boolean;
  displayOrder: number;
  updatedAt: string;
}
