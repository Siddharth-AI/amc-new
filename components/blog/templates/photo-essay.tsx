import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
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
 * PHOTO ESSAY — image-forward, gallery-feel editorial.
 * Full-bleed photographic hero over an ink scrim, a large centered
 * standfirst, then each section rendered as a "scene": a big full-width
 * photograph paired with a short caption block whose alignment alternates
 * left / centered / right. Heavy whitespace, big imagery.
 * Signature = alternating big photographs + short caption "scenes".
 */
export function PhotoEssayTemplate({ article, related }: BlogTemplateProps) {
  const sections = article.sections ?? [];
  const figures = [article.featuredImage, article.secondaryImage].filter(
    (src): src is string => Boolean(src)
  );
  const figurePool = figures.length > 0 ? figures : [article.featuredImage];

  // Alternate the caption alignment across scenes for an editorial rhythm.
  const aligns = ["items-start text-left", "items-center text-center", "items-end text-right"];

  return (
    <article>
      {/* ── HERO: full-bleed featured image + ink scrim, content lower-bottom ── */}
      <Section padding="none" className="relative">
        <div className="absolute inset-0">
          <SmartImage
            src={article.featuredImage}
            alt={article.title}
            label={article.title}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/65 to-[var(--ink)]/15" />
        </div>

        <Container className="relative flex min-h-[78vh] items-end py-16 md:py-24">
          <div className="max-w-3xl">
            <p
              className="animate-rise text-xs font-semibold uppercase tracking-[0.22em] text-[var(--acc)]"
              style={{ animationDelay: "40ms" }}>
              Photo essay
            </p>
            <h1
              className="animate-rise mt-5 font-display text-4xl leading-[1.05] text-white md:text-6xl"
              style={{ animationDelay: "120ms" }}>
              {article.title}
            </h1>
            {article.excerpt ? (
              <p
                className="animate-rise mt-6 max-w-2xl text-lg leading-relaxed text-white/75"
                style={{ animationDelay: "200ms" }}>
                {article.excerpt}
              </p>
            ) : null}
            <div
              className="animate-rise mt-8"
              style={{ animationDelay: "280ms" }}>
              <Byline article={article} tone="dark" />
            </div>
            <div
              className="animate-rise mt-6"
              style={{ animationDelay: "360ms" }}>
              <Tags tags={article.tags} />
            </div>
          </div>
        </Container>
      </Section>

      {/* ── INTRO: large centered standfirst ───────────────────────────── */}
      {article.lead ? (
        <Section padding="none" className="py-16 md:py-24">
          <Container>
            <p
              data-reveal
              className="mx-auto max-w-2xl text-center text-xl leading-relaxed text-navy">
              {article.lead}
            </p>
          </Container>
        </Section>
      ) : null}

      {/* ── SCENES: alternating big photographs + short caption blocks ──── */}
      {sections.length > 0 ? (
        <Section padding="none" className="pb-16 md:pb-24">
          <Container>
            <div className="grid gap-20 md:gap-28">
              {sections.map((section, i) => {
                const figureSrc = figurePool[i % figurePool.length];
                const align = aligns[i % aligns.length];
                const wide = i % 2 === 0; // alternate 16:9 and 3:2 crops
                return (
                  <div key={i} data-reveal className="grid gap-8 md:gap-10">
                    {/* Large full-width image figure */}
                    <figure className="w-full">
                      <div
                        className={
                          wide
                            ? "aspect-[16/9] w-full overflow-hidden"
                            : "aspect-[3/2] w-full overflow-hidden"
                        }>
                        <SmartImage
                          src={figureSrc}
                          alt={section.heading}
                          label={section.heading}
                          className="transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
                        />
                      </div>
                    </figure>

                    {/* Caption block — narrow column, alternating alignment */}
                    <div
                      className={`flex flex-col gap-4 ${align}`}>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--acc)]">
                        {section.heading}
                      </p>
                      <div className="max-w-xl">
                        {section.paragraphs?.map((p, pi) => (
                          <p
                            key={pi}
                            className="mt-3 leading-relaxed text-text-secondary first:mt-0">
                            {p}
                          </p>
                        ))}

                        {section.bullets && section.bullets.length > 0 ? (
                          <ul className="mt-6 grid gap-3 text-left">
                            {section.bullets.map((b, bi) => (
                              <li
                                key={bi}
                                className="flex items-start gap-3 leading-relaxed text-text-secondary">
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
                          <figure className="mt-8 border-l-2 border-[var(--acc)] bg-surface py-6 pl-7 pr-6 text-left">
                            <Quote
                              aria-hidden
                              className="h-6 w-6 text-[var(--acc)]/50"
                            />
                            <blockquote className="mt-3 font-display text-2xl font-medium leading-snug text-navy">
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
                          <div className="mt-8 border-l-2 border-[var(--acc)] bg-surface p-7 text-left md:p-8">
                            <p className="font-display text-4xl font-medium text-[var(--acc)] md:text-5xl">
                              {section.stat.v}
                            </p>
                            <p className="mt-2 leading-relaxed text-text-secondary">
                              {section.stat.l}
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>
      ) : null}

      {/* ── STAT STRIP (optional) ──────────────────────────────────────── */}
      {article.stats && article.stats.length > 0 ? (
        <Section padding="none" className="pb-16 md:pb-24">
          <Container>
            <div
              data-reveal
              className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3">
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
          </Container>
        </Section>
      ) : null}

      {/* ── CLOSING META ───────────────────────────────────────────────── */}
      <Section padding="none" className="pb-16 md:pb-24">
        <Container>
          <div
            data-reveal
            className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-sm text-text-muted">
            <span>
              Published {formatDate(article.publishDate)} · {article.readingTime}{" "}
              min read
            </span>
            <Button asChild variant="outline" size="sm">
              <Link href="/enquiry">
                Talk to us <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── REQUIRED CLOSING SEQUENCE ──────────────────────────────────── */}
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
