import Link from "next/link";
import { ChevronDown, Play } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SmartImage } from "@/components/ui/smart-image";
import type { Category, Product } from "@/types/catalog";

export interface TemplateProps {
  product: Product;
  category?: Category;
  related: Product[];
}

export const enquiry = (p: Product) =>
  `/enquiry?product=${encodeURIComponent(p.slug)}`;

/** Per-template colour theme (accent + dark ink). Keep in sync with each template's article style. */
export interface Theme {
  acc: string;
  ink: string;
}
export const DEFAULT_THEME: Theme = { acc: "#16a5a3", ink: "#1e3358" };
export const THEMES: Record<string, Theme> = {
  "split-benefit": { acc: "#c2a36a", ink: "#16233c" },
  comparison: { acc: "#48b78a", ink: "#0f1f1b" },
  "business-cards": { acc: "#bd8aa0", ink: "#2a2530" },
};
export function getTheme(product: Product): Theme {
  return (
    product.theme || (product.design && THEMES[product.design]) || DEFAULT_THEME
  );
}

/** Related-products strip (shared across templates). */
export function RelatedStrip({ related }: { related: Product[] }) {
  if (!related.length) return null;
  return (
    <Section padding="none" className="border-t border-border py-16 md:py-20">
      <Container>
        <h2 data-reveal className="mb-8 text-3xl text-navy">
          Related solutions
        </h2>
        <div data-reveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.categorySlug}/${p.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden border border-border bg-surface transition-all hover:border-navy/30 hover:shadow-[var(--shadow-glow)]">
              <div className="aspect-[16/10] overflow-hidden">
                <SmartImage
                  src={p.heroImage}
                  alt={p.name}
                  label={p.name}
                  className="transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-lg font-semibold text-navy">
                  {p.name}
                </h3>
                <p className="line-clamp-2 text-sm text-text-muted">
                  {p.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/** Light FAQ accordion (shared). */
export function FaqList({ product }: { product: Product }) {
  if (!product.faqs.length) return null;
  return (
    <Section padding="none" className="py-16 md:py-24">
      <Container>
        <div
          data-reveal
          className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-3">Questions</p>
            <h2 className="text-navy">Frequently asked</h2>
          </div>
          <div
            data-reveal
            className="divide-y divide-border border-y border-border">
            {product.faqs.map((f, i) => (
              <details key={i} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-navy">
                  {f.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-text-muted transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 leading-relaxed text-text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

/** "See it in action" — product demo videos (YouTube embeds), themed. */
export function VideoGallery({ product }: { product: Product }) {
  const videos = product.videos ?? [];
  if (videos.length === 0) return null;
  const single = videos.length === 1;
  return (
    <Section
      padding="none"
      className="border-t border-border bg-surface py-16 md:py-24">
      <Container>
        <div data-reveal className="mb-10 max-w-2xl">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
            <Play className="h-3.5 w-3.5" /> Watch
          </p>
          <h2 className="text-navy">See it in action</h2>
        </div>
        <div
          data-reveal
          className={`grid gap-6 ${single ? "mx-auto max-w-4xl" : "md:grid-cols-2"}`}>
          {videos.map((v) => (
            <figure
              key={v.youtubeId}
              className="overflow-hidden border border-border bg-[var(--ink)]">
              <div className="relative aspect-video w-full">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <figcaption className="flex items-center gap-2.5 px-5 py-4 text-sm font-medium text-navy">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--acc)]/15 text-[var(--acc)]">
                  <Play className="h-3.5 w-3.5" />
                </span>
                {v.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/** Elegant stats band, themed via the article's --acc / --ink CSS vars. */
export function StatBand({ stats }: { stats: { v: string; l: string }[] }) {
  return (
    <Section padding="none" className="bg-[var(--ink)]">
      <Container>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-16 sm:grid-cols-4 md:py-24">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="mb-5 h-px w-10 bg-[var(--acc)]" />
              <div className="font-display text-4xl font-medium text-white md:text-5xl">
                {s.v}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
