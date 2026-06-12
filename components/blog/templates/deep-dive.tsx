import Link from "next/link";
import { Layers, Info, ArrowRight } from "lucide-react";
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
 * Technical deep-dive layout.
 * Signature = numbered sections with monospace accent indices, a bordered
 * "Key points" box per section and an accent-bordered "Note" callout for
 * pull-quotes. A dark masthead opens above a full-width featured-image band;
 * the reading column stays narrow (max-w-3xl) and light for legibility.
 */
export function DeepDiveTemplate({ article, related }: BlogTemplateProps) {
  const sections = article.sections ?? [];

  return (
    <article>
      {/* ── HERO: dark masthead ──────────────────────────────────────── */}
      <Section
        padding="none"
        className="relative overflow-hidden bg-[var(--ink)] py-16 text-white md:py-24">
        {/* accent glow + texture */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[var(--acc)]/20 blur-[120px]" />
        <div className="dots-pattern pointer-events-none absolute inset-0 opacity-[0.07]" />

        <Container className="relative">
          <div className="mx-auto max-w-3xl">
            <p
              className="animate-rise inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--acc)]"
              style={{ animationDelay: "0ms" }}>
              <Layers className="h-4 w-4" /> Deep dive
            </p>
            <h1
              className="animate-rise mt-5 font-display text-white"
              style={{ animationDelay: "80ms" }}>
              {article.title}
            </h1>
            {article.excerpt ? (
              <p
                className="animate-rise mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
                style={{ animationDelay: "160ms" }}>
                {article.excerpt}
              </p>
            ) : null}
            <div
              className="animate-rise mt-9"
              style={{ animationDelay: "240ms" }}>
              <Byline article={article} tone="dark" />
            </div>
            {article.tags && article.tags.length > 0 ? (
              <div
                className="animate-rise mt-6"
                style={{ animationDelay: "320ms" }}>
                <Tags tags={article.tags} />
              </div>
            ) : null}
          </div>
        </Container>
      </Section>

      {/* ── FEATURED IMAGE BAND (full-width, subtle ink scrim) ────────── */}
      <Section padding="none">
        <Container maxWidth="full" className="px-0 sm:px-0 lg:px-0">
          <div className="relative aspect-[16/7] w-full overflow-hidden">
            <SmartImage
              src={article.featuredImage}
              alt={article.title}
              label={article.title}
              priority
              className="animate-rise"
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[var(--ink)]/45 to-transparent" />
          </div>
        </Container>
      </Section>

      {/* ── BODY: numbered sections + callout boxes ──────────────────── */}
      <Section padding="none" className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* Standfirst lead */}
            {article.lead ? (
              <p
                data-reveal
                className="text-xl leading-relaxed text-text-secondary md:text-2xl">
                {article.lead}
              </p>
            ) : null}

            {/* Numbered sections */}
            {sections.map((section, i) => (
              <section key={i} data-reveal className="scroll-mt-28">
                <h2 className="mt-14 flex items-baseline gap-4 text-navy md:mt-16">
                  <span className="font-mono text-sm text-[var(--acc)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{section.heading}</span>
                </h2>

                {section.paragraphs?.map((p, j) => (
                  <p
                    key={j}
                    className="mt-6 leading-relaxed text-text-secondary">
                    {p}
                  </p>
                ))}

                {/* Inline stat figure */}
                {section.stat ? (
                  <div className="mt-8 flex items-baseline gap-5 border-t border-border pt-7">
                    <p className="font-display text-4xl font-medium leading-none text-[var(--acc)] md:text-5xl">
                      {section.stat.v}
                    </p>
                    <p className="leading-relaxed text-text-muted">
                      {section.stat.l}
                    </p>
                  </div>
                ) : null}

                {/* Bordered "Key points" box */}
                {section.bullets && section.bullets.length > 0 ? (
                  <div className="mt-8 border border-border bg-surface p-7 md:p-8">
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                      Key points
                    </p>
                    <ul className="grid gap-3">
                      {section.bullets.map((b, k) => (
                        <li
                          key={k}
                          className="flex items-start gap-3 leading-relaxed text-text-secondary">
                          <span
                            aria-hidden
                            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--acc)]"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {/* "Note" callout — accent left border */}
                {section.quote ? (
                  <figure className="my-10 border-l-2 border-[var(--acc)] bg-surface py-6 pl-7 pr-6 md:my-12">
                    <figcaption className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                      <Info className="h-4 w-4" /> Note
                    </figcaption>
                    <blockquote className="font-display text-xl font-medium leading-snug text-navy md:text-2xl">
                      {section.quote.text}
                    </blockquote>
                    {section.quote.by ? (
                      <p className="mt-4 text-sm font-medium uppercase tracking-[0.14em] text-text-muted">
                        — {section.quote.by}
                      </p>
                    ) : null}
                  </figure>
                ) : null}
              </section>
            ))}

            {/* Inline stat strip */}
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

            {/* Mid-body framed figure */}
            {article.secondaryImage ? (
              <figure
                data-reveal
                className="mt-16 border border-border bg-surface p-3">
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <SmartImage
                    src={article.secondaryImage}
                    alt={article.title}
                    label={article.title}
                  />
                </div>
                <figcaption className="mt-3 px-1 text-sm text-text-muted">
                  {article.title}
                </figcaption>
              </figure>
            ) : null}

            {/* Closing meta row */}
            <div
              data-reveal
              className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-sm text-text-muted">
              <span>
                Published {formatDate(article.publishDate)} ·{" "}
                {article.readingTime} min read
              </span>
              <Button
                asChild
                size="sm"
                className="bg-[var(--acc)] text-[var(--ink)] hover:opacity-90">
                <Link href="/enquiry">
                  Talk to us <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── REQUIRED CLOSING SEQUENCE ────────────────────────────────── */}
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
