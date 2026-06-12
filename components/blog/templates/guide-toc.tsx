import Link from "next/link";
import { ListOrdered, Quote, ArrowUpRight } from "lucide-react";
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
 * Complete-guide layout.
 * Signature = sticky numbered Table of Contents beside a long anchored guide.
 * The left column lists every section heading as a `#s-{i}` anchor link and
 * stays pinned while the reader scrolls the right-hand body. No text+image
 * hero split — a centered masthead sits above a full-width featured band.
 */
export function GuideTocTemplate({ article, related }: BlogTemplateProps) {
  const sections = article.sections ?? [];

  return (
    <article>
      {/* ── HERO: centered masthead ──────────────────────────────────── */}
      <Section padding="none" className="bg-background pt-16 md:pt-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="animate-rise text-xs font-semibold uppercase tracking-[0.22em] text-[var(--acc)]"
              style={{ animationDelay: "0ms" }}>
              Complete guide
            </p>
            <h1
              className="animate-rise mt-5 font-display text-navy"
              style={{ animationDelay: "80ms" }}>
              {article.title}
            </h1>
            {article.excerpt ? (
              <p
                className="animate-rise mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl"
                style={{ animationDelay: "160ms" }}>
                {article.excerpt}
              </p>
            ) : null}
            <div
              className="animate-rise mt-9 flex justify-center"
              style={{ animationDelay: "240ms" }}>
              <Byline article={article} />
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

      {/* ── FEATURED IMAGE BAND (full-width, subtle ink scrim) ───────── */}
      <Section padding="none" className="pt-12 md:pt-16">
        <Container maxWidth="full" className="px-0 sm:px-0 lg:px-0">
          <div className="relative aspect-[16/7] w-full overflow-hidden">
            <SmartImage
              src={article.featuredImage}
              alt={article.title}
              label={article.title}
              priority
              className="animate-rise"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--ink)]/45 to-transparent" />
          </div>
        </Container>
      </Section>

      {/* ── BODY: sticky TOC + anchored sections ─────────────────────── */}
      <Section padding="none" className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.3fr_0.7fr] lg:gap-16">
            {/* LEFT — sticky Table of Contents */}
            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <nav
                data-reveal
                aria-label="On this page"
                className="border border-border bg-surface p-6 lg:border-0 lg:bg-transparent lg:p-0">
                <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                  <ListOrdered className="h-4 w-4" />
                  On this page
                </p>
                <ol className="grid gap-1">
                  {sections.map((section, i) => (
                    <li key={i}>
                      <Link
                        href={`#s-${i}`}
                        className="group flex items-start gap-3 py-1.5 text-sm leading-snug text-text-muted transition-colors hover:text-navy">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border text-[11px] font-semibold text-text-muted transition-colors group-hover:border-[var(--acc)] group-hover:bg-[var(--acc)] group-hover:text-[var(--ink)]">
                          {i + 1}
                        </span>
                        <span>{section.heading}</span>
                      </Link>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            {/* RIGHT — the guide body */}
            <div>
              {article.lead ? (
                <p
                  data-reveal
                  className="text-xl leading-relaxed text-text-secondary md:text-2xl">
                  {article.lead}
                </p>
              ) : null}

              {sections.map((section, i) => (
                <section
                  key={i}
                  id={`s-${i}`}
                  data-reveal
                  className="scroll-mt-28">
                  <h2 className="mt-14 flex items-baseline gap-3 text-navy md:mt-16">
                    <span className="font-display text-lg font-medium text-[var(--acc)]">
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

                  {section.bullets && section.bullets.length > 0 ? (
                    <ul className="mt-7 grid gap-px border border-border bg-border">
                      {section.bullets.map((b, k) => (
                        <li
                          key={k}
                          className="flex items-start gap-3 bg-background p-4 leading-relaxed text-text-secondary">
                          <span
                            aria-hidden
                            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--acc)]"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {section.quote ? (
                    <figure className="my-10 border-l-2 border-[var(--acc)] bg-surface p-7 md:p-8">
                      <Quote
                        aria-hidden
                        className="mb-4 h-7 w-7 text-[var(--acc)]/40"
                      />
                      <blockquote className="font-display text-xl font-medium italic leading-snug text-navy md:text-2xl">
                        {section.quote.text}
                      </blockquote>
                      {section.quote.by ? (
                        <figcaption className="mt-4 text-sm font-medium uppercase tracking-[0.14em] text-text-muted">
                          — {section.quote.by}
                        </figcaption>
                      ) : null}
                    </figure>
                  ) : null}

                  {section.stat ? (
                    <div className="my-10 border border-border bg-surface p-7 md:p-8">
                      <p className="font-display text-4xl font-medium text-[var(--acc)] md:text-5xl">
                        {section.stat.v}
                      </p>
                      <p className="mt-2 leading-relaxed text-text-secondary">
                        {section.stat.l}
                      </p>
                    </div>
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

              {/* Closing meta + secondary image */}
              <div
                data-reveal
                className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-sm text-text-muted">
                <span>
                  Published {formatDate(article.publishDate)} ·{" "}
                  {article.readingTime} min read
                </span>
                <Button asChild variant="outline" size="sm">
                  <Link href="/enquiry">
                    Talk to us <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {article.secondaryImage ? (
                <div
                  data-reveal
                  className="mt-12 aspect-[16/9] w-full overflow-hidden">
                  <SmartImage
                    src={article.secondaryImage}
                    alt={article.title}
                    label={article.title}
                  />
                </div>
              ) : null}
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
