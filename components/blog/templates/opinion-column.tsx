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
 * Op-ed / opinion column.
 * Signature = a NARROW reading column with DRAMATIC breakout pull-quotes.
 * The hero is purely typographic (no big image) so the columnist's voice
 * leads. Each `section.quote` breaks out wider than the column as a large
 * accented pull-quote — the visual signature of the format.
 */
export function OpinionColumnTemplate({ article, related }: BlogTemplateProps) {
  return (
    <article>
      {/* ── HERO: typographic op-ed masthead (no big image) ─────────── */}
      <Section padding="none" className="bg-background py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="animate-rise text-xs font-semibold uppercase tracking-[0.22em] text-[var(--acc)]"
              style={{ animationDelay: "0ms" }}>
              Opinion
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
            {article.authorRole ? (
              <p
                className="animate-rise mt-5 text-sm italic text-text-muted"
                style={{ animationDelay: "300ms" }}>
                {article.author} writes a regular column for AMC Systems —{" "}
                {article.authorRole}.
              </p>
            ) : null}
            {article.tags && article.tags.length > 0 ? (
              <div
                className="animate-rise mt-6 flex justify-center"
                style={{ animationDelay: "360ms" }}>
                <Tags tags={article.tags} />
              </div>
            ) : null}
            {/* Thin accent rule under the hero */}
            <div
              className="animate-rise mx-auto mt-10 h-px w-16 bg-[var(--acc)]"
              style={{ animationDelay: "420ms" }}
            />
          </div>
        </Container>
      </Section>

      {/* ── BODY: narrow column + dramatic breakout pull-quotes ─────── */}
      <Section padding="none" className="pb-16 md:pb-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            {/* Lead — the opening argument */}
            {article.lead ? (
              <p
                data-reveal
                className="text-xl leading-relaxed text-text-secondary md:text-2xl">
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
                    className="mt-6 text-lg leading-relaxed text-text-secondary">
                    {p}
                  </p>
                ))}

                {section.bullets && section.bullets.length > 0 ? (
                  <ul className="mt-7 grid gap-3">
                    {section.bullets.map((b, k) => (
                      <li
                        key={k}
                        className="flex items-start gap-3 text-lg leading-relaxed text-text-secondary">
                        <span
                          aria-hidden
                          className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--acc)]"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {/* SIGNATURE: dramatic breakout pull-quote */}
                {section.quote ? (
                  <figure className="relative -mx-4 my-14 sm:-mx-12 md:my-16 lg:-mx-24">
                    <Quote
                      aria-hidden
                      className="absolute -top-6 left-2 h-16 w-16 text-[var(--acc)]/20 md:-top-8 md:h-20 md:w-20"
                    />
                    <blockquote className="relative border-l-4 border-[var(--acc)] pl-6 font-display text-3xl font-medium italic leading-[1.15] text-navy md:pl-10 md:text-4xl">
                      {section.quote.text}
                    </blockquote>
                    {section.quote.by ? (
                      <figcaption className="mt-5 pl-6 text-sm font-medium uppercase tracking-[0.14em] text-[var(--acc)] md:pl-10">
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
                    <p className="mt-2 text-lg leading-relaxed text-text-secondary">
                      {section.stat.l}
                    </p>
                  </div>
                ) : null}
              </div>
            ))}

            {/* Modest inset figure (secondary image) */}
            {article.secondaryImage ? (
              <figure data-reveal className="mt-14">
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <SmartImage
                    src={article.secondaryImage}
                    alt={article.title}
                    label={article.title}
                  />
                </div>
              </figure>
            ) : null}

            {/* Inline stat strip */}
            {article.stats && article.stats.length > 0 ? (
              <div
                data-reveal
                className="mt-14 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3">
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

            {/* Columnist sign-off */}
            <div
              data-reveal
              className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-sm text-text-muted">
              <span className="inline-flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--acc)]/15 font-display text-base font-medium text-[var(--acc)]">
                  {(article.author ?? "AMC").trim().charAt(0).toUpperCase()}
                </span>
                <span>
                  <span className="font-medium text-navy">{article.author}</span>
                  {article.authorRole ? ` · ${article.authorRole}` : ""} ·{" "}
                  {formatDate(article.publishDate)}
                </span>
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
