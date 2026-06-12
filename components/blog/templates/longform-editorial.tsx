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
 * Classic editorial longform.
 * Signature = centered reading column with a drop-cap lead and large
 * editorial blockquotes. No text+image hero split — single centered hero
 * above a full-width featured-image band.
 */
export function LongformEditorialTemplate({ article, related }: BlogTemplateProps) {
  return (
    <article>
      {/* ── HERO: centered editorial masthead ───────────────────────── */}
      <Section padding="none" className="bg-background pt-16 md:pt-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="animate-rise text-xs font-semibold uppercase tracking-[0.22em] text-[var(--acc)]"
              style={{ animationDelay: "0ms" }}>
              {article.category}
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
          <div className="relative aspect-[16/8] w-full overflow-hidden">
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

      {/* ── BODY: single centered reading column ────────────────────── */}
      <Section padding="none" className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* Lead paragraph with drop-cap */}
            {article.lead ? (
              <p
                data-reveal
                className="text-xl leading-relaxed text-text-secondary first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:font-medium first-letter:leading-[0.8] first-letter:text-[var(--acc)]">
                {article.lead}
              </p>
            ) : null}

            {/* Sections */}
            {article.sections?.map((section, i) => (
              <div key={i} data-reveal>
                <h2 className="mt-14 text-navy md:mt-16">{section.heading}</h2>

                {section.paragraphs?.map((p, j) => (
                  <p
                    key={j}
                    className="mt-6 leading-relaxed text-text-secondary">
                    {p}
                  </p>
                ))}

                {section.bullets && section.bullets.length > 0 ? (
                  <ul className="mt-7 grid gap-3">
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
                ) : null}

                {section.quote ? (
                  <figure className="mx-auto my-12 max-w-2xl text-center md:my-14">
                    <div className="mx-auto mb-6 h-px w-12 bg-[var(--acc)]" />
                    <Quote
                      aria-hidden
                      className="mx-auto mb-5 h-7 w-7 text-[var(--acc)]/40"
                    />
                    <blockquote className="font-display text-2xl font-medium italic leading-snug text-navy md:text-3xl">
                      {section.quote.text}
                    </blockquote>
                    {section.quote.by ? (
                      <figcaption className="mt-5 text-sm font-medium uppercase tracking-[0.14em] text-text-muted">
                        — {section.quote.by}
                      </figcaption>
                    ) : null}
                  </figure>
                ) : null}

                {section.stat ? (
                  <div className="my-12 border-l-2 border-[var(--acc)] bg-surface p-7 md:my-14 md:p-8">
                    <p className="font-display text-4xl font-medium text-[var(--acc)] md:text-5xl">
                      {section.stat.v}
                    </p>
                    <p className="mt-2 leading-relaxed text-text-secondary">
                      {section.stat.l}
                    </p>
                  </div>
                ) : null}
              </div>
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
                Published {formatDate(article.publishDate)} · {article.readingTime} min read
              </span>
              <Button asChild variant="outline" size="sm">
                <Link href="/enquiry">
                  Talk to us <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {article.secondaryImage ? (
              <div data-reveal className="mt-12 aspect-[16/9] w-full overflow-hidden">
                <SmartImage
                  src={article.secondaryImage}
                  alt={article.title}
                  label={article.title}
                />
              </div>
            ) : null}
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
