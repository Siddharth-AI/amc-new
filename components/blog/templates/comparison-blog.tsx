import Link from "next/link";
import { ArrowRight, Quote, GitCompareArrows, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/ui/smart-image";
import { CtaBanner } from "@/components/home/cta";
import {
  type BlogTemplateProps,
  Byline,
  Tags,
  Takeaways,
  BlogFaqList,
  RelatedPosts,
  formatDate,
} from "./shared";

/**
 * Side-by-side comparison blog.
 * Signature = dark typographic hero + A-vs-B comparison cards + verdict box.
 * No hero photo, no text+image split hero. Sharp corners throughout.
 */
export function ComparisonBlogTemplate({ article, related }: BlogTemplateProps) {
  const sections = article.sections ?? [];
  const verdictSection =
    sections.length > 0 ? sections[sections.length - 1] : undefined;
  const verdictText =
    (verdictSection?.paragraphs && verdictSection.paragraphs[0]) ||
    article.excerpt;

  return (
    <article>
      {/* ── HERO: dark typographic, centered ────────────────────────── */}
      <Section
        padding="none"
        className="relative overflow-hidden bg-[var(--ink)] py-16 text-white md:py-24">
        {/* accent glow + texture (do not set CSS vars) */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--acc)]/25 blur-[120px]" />
        <div className="dots-pattern pointer-events-none absolute inset-0 opacity-[0.07]" />

        <Container>
          <div className="relative mx-auto max-w-3xl text-center">
            <p
              className="animate-rise inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--acc)]"
              style={{ animationDelay: "0ms" }}>
              <GitCompareArrows className="h-4 w-4" /> Compared
            </p>
            <h1
              className="animate-rise mt-5 font-display text-white"
              style={{ animationDelay: "80ms" }}>
              {article.title}
            </h1>
            {article.excerpt ? (
              <p
                className="animate-rise mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
                style={{ animationDelay: "160ms" }}>
                {article.excerpt}
              </p>
            ) : null}
            <div
              className="animate-rise mt-9 flex justify-center"
              style={{ animationDelay: "240ms" }}>
              <Byline article={article} tone="dark" />
            </div>
            {article.tags && article.tags.length > 0 ? (
              <div
                className="animate-rise mt-6 flex justify-center"
                style={{ animationDelay: "320ms" }}>
                <Tags tags={article.tags} />
              </div>
            ) : null}
          </div>
        </Container>
      </Section>

      {/* ── INTRO: lead paragraph ───────────────────────────────────── */}
      {article.lead ? (
        <Section padding="none" className="bg-background pt-16 md:pt-24">
          <Container>
            <p
              data-reveal
              className="mx-auto max-w-3xl text-xl leading-relaxed text-text-secondary md:text-2xl">
              {article.lead}
            </p>
          </Container>
        </Section>
      ) : null}

      {/* ── BODY ────────────────────────────────────────────────────── */}
      <Section padding="none" className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            {sections.map((section, i) => {
              const hasBullets = section.bullets && section.bullets.length > 0;
              const bullets = section.bullets ?? [];
              const mid = Math.ceil(bullets.length / 2);
              const colA = bullets.slice(0, mid);
              const colB = bullets.slice(mid);

              return (
                <div key={i} className={i > 0 ? "mt-16 md:mt-20" : undefined}>
                  <div data-reveal>
                    <h2 className="text-navy">{section.heading}</h2>
                    {section.paragraphs?.map((p, j) => (
                      <p
                        key={j}
                        className="mt-6 leading-relaxed text-text-secondary">
                        {p}
                      </p>
                    ))}
                  </div>

                  {/* Side-by-side comparison cards for bullet sections */}
                  {hasBullets ? (
                    <div
                      data-reveal
                      className="relative mt-9 grid gap-px border border-border bg-border md:grid-cols-2">
                      {/* central divider accent */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[var(--acc)]/40 md:block"
                      />
                      <ComparisonCard
                        label="Option A"
                        items={colA}
                      />
                      <ComparisonCard
                        label="Option B"
                        items={colB.length > 0 ? colB : colA}
                      />
                    </div>
                  ) : null}

                  {/* Pull-quote */}
                  {section.quote ? (
                    <figure
                      data-reveal
                      className="mx-auto my-12 max-w-2xl border-l-2 border-[var(--acc)] bg-surface p-7 md:my-14 md:p-8">
                      <Quote
                        aria-hidden
                        className="mb-4 h-7 w-7 text-[var(--acc)]/40"
                      />
                      <blockquote className="font-display text-2xl font-medium leading-snug text-navy md:text-3xl">
                        {section.quote.text}
                      </blockquote>
                      {section.quote.by ? (
                        <figcaption className="mt-5 text-sm font-medium uppercase tracking-[0.14em] text-text-muted">
                          — {section.quote.by}
                        </figcaption>
                      ) : null}
                    </figure>
                  ) : null}

                  {/* Inline stat */}
                  {section.stat ? (
                    <div
                      data-reveal
                      className="my-12 border-l-2 border-[var(--acc)] bg-surface p-7 md:my-14 md:p-8">
                      <p className="font-display text-4xl font-medium text-[var(--acc)] md:text-5xl">
                        {section.stat.v}
                      </p>
                      <p className="mt-2 leading-relaxed text-text-secondary">
                        {section.stat.l}
                      </p>
                    </div>
                  ) : null}
                </div>
              );
            })}

            {/* Comparison stat strip */}
            {article.stats && article.stats.length > 0 ? (
              <div
                data-reveal
                className="mt-16 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3">
                {article.stats.map((s, i) => (
                  <div key={i} className="bg-background p-7 text-center">
                    <p className="font-display text-3xl font-medium text-navy md:text-4xl">
                      {s.v}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}

            {/* ── THE VERDICT ─────────────────────────────────────────── */}
            {verdictText ? (
              <div
                data-reveal
                className="mt-16 border-l-4 border-[var(--acc)] bg-surface p-7 md:p-9">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                  The verdict
                </p>
                <p className="text-lg leading-relaxed text-navy md:text-xl">
                  {verdictText}
                </p>
              </div>
            ) : null}

            {/* Closing meta */}
            <div
              data-reveal
              className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-sm text-text-muted">
              <span>
                Published {formatDate(article.publishDate)} ·{" "}
                {article.readingTime} min read
              </span>
              <Button asChild variant="outline" size="sm">
                <Link href="/enquiry">
                  Talk to us <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── REQUIRED CLOSING SEQUENCE ───────────────────────────────── */}
      <Section padding="none" className="pb-4">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Takeaways items={article.takeaways} />
          </div>
        </Container>
      </Section>
      <BlogFaqList faqs={article.faqs} />
      <RelatedPosts related={related} />
      <CtaBanner
        heading="Talk to AMC Systems"
        text="Tell us about your business and our team will recommend the right software or hardware — supplied, installed and supported across the UAE."
        image={article.secondaryImage || article.featuredImage}
      />
    </article>
  );
}

/** Single comparison column card (accent header + checklist). */
function ComparisonCard({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="bg-background p-7 md:p-8">
      <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
        <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-[var(--acc)]/15 px-2 text-[var(--acc)]">
          {label}
        </span>
      </p>
      <ul className="grid gap-3">
        {items.map((b, k) => (
          <li
            key={k}
            className="flex items-start gap-3 leading-relaxed text-text-secondary">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--acc)]" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
