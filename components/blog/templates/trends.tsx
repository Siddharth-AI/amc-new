import Link from "next/link";
import { ArrowRight, ArrowUpRight, Quote, TrendingUp } from "lucide-react";
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
 * Forward-looking TRENDS template.
 * Signature = numbered trend cards. A dark typographic hero (no photo) opens
 * the piece with an accent glow + dots texture, then a light standfirst lead,
 * then each section is rendered as a full-width alternating TREND BLOCK with a
 * large accent index number, navy heading and accent-marked bullets. The
 * secondary image lands mid-list as a full-width ink-scrimmed band.
 */
export function TrendsTemplate({ article, related }: BlogTemplateProps) {
  const sections = article.sections ?? [];
  const stats = article.stats ?? [];
  // Drop the band roughly mid-way through the list when a secondary image exists.
  const bandAfter =
    article.secondaryImage && sections.length > 1
      ? Math.ceil(sections.length / 2)
      : -1;

  return (
    <article>
      {/* ── HERO: dark typographic masthead — no photo ──────────────── */}
      <Section
        padding="none"
        className="relative overflow-hidden bg-[var(--ink)] py-16 text-white md:py-24">
        {/* accent glow + dotted texture */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[var(--acc)]/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-[var(--acc)]/20 blur-[120px]" />
        <div className="dots-pattern pointer-events-none absolute inset-0 opacity-[0.07]" />

        <Container className="relative">
          <div className="max-w-4xl">
            <p
              className="animate-rise inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--acc)]"
              style={{ animationDelay: "0ms", animationFillMode: "both" }}>
              <TrendingUp className="h-4 w-4" /> Trends
            </p>
            <h1
              className="animate-rise mt-5 text-balance font-display text-white"
              style={{ animationDelay: "80ms", animationFillMode: "both" }}>
              {article.title}
            </h1>
            {article.excerpt ? (
              <p
                className="animate-rise mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
                style={{ animationDelay: "160ms", animationFillMode: "both" }}>
                {article.excerpt}
              </p>
            ) : null}
            <div
              className="animate-rise mt-9"
              style={{ animationDelay: "240ms", animationFillMode: "both" }}>
              <Byline article={article} tone="dark" />
            </div>
            {article.tags && article.tags.length > 0 ? (
              <div
                className="animate-rise mt-6"
                style={{ animationDelay: "320ms", animationFillMode: "both" }}>
                <Tags tags={article.tags} />
              </div>
            ) : null}
          </div>
        </Container>
      </Section>

      {/* ── INTRO: standfirst lead ──────────────────────────────────── */}
      {article.lead ? (
        <Section padding="none" className="py-16 md:py-24">
          <Container>
            <p
              data-reveal
              className="mx-auto max-w-3xl text-xl leading-relaxed text-navy md:text-2xl">
              {article.lead}
            </p>
          </Container>
        </Section>
      ) : null}

      {/* ── SIGNATURE: numbered trend blocks ────────────────────────── */}
      {sections.length > 0 ? (
        <Section padding="none" className="pb-16 md:pb-24">
          <Container>
            <div className="mx-auto max-w-4xl">
              {sections.map((section, i) => (
                <div key={i}>
                  <div
                    data-reveal
                    className="border-t border-border py-12 md:py-16">
                    <div className="md:flex md:items-start md:gap-10">
                      <div className="font-display text-5xl leading-none text-[var(--acc)] md:text-6xl">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="mt-4 min-w-0 flex-1 md:mt-0">
                        <h2 className="text-2xl text-navy">{section.heading}</h2>

                        {section.stat ? (
                          <p className="mt-3 flex items-baseline gap-3">
                            <span className="font-display text-3xl text-[var(--acc)]">
                              {section.stat.v}
                            </span>
                            <span className="text-sm uppercase tracking-[0.12em] text-text-muted">
                              {section.stat.l}
                            </span>
                          </p>
                        ) : null}

                        {section.paragraphs?.map((p, pi) => (
                          <p
                            key={pi}
                            className="mt-4 leading-relaxed text-text-secondary">
                            {p}
                          </p>
                        ))}

                        {section.bullets && section.bullets.length > 0 ? (
                          <ul className="mt-5 grid gap-2.5">
                            {section.bullets.map((b, bi) => (
                              <li
                                key={bi}
                                className="flex items-start gap-3 text-text-secondary">
                                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[var(--acc)]" />
                                <span className="leading-relaxed">{b}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}

                        {section.quote ? (
                          <figure className="mt-6 border-l-2 border-[var(--acc)] pl-5">
                            <Quote className="h-5 w-5 text-[var(--acc)]" />
                            <blockquote className="mt-2 text-lg leading-relaxed text-navy">
                              {section.quote.text}
                            </blockquote>
                            {section.quote.by ? (
                              <figcaption className="mt-2 text-sm text-text-muted">
                                — {section.quote.by}
                              </figcaption>
                            ) : null}
                          </figure>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  {/* mid-list full-width image band */}
                  {i + 1 === bandAfter && article.secondaryImage ? (
                    <div
                      data-reveal
                      className="relative isolate my-4 aspect-[21/9] w-full overflow-hidden">
                      <SmartImage
                        src={article.secondaryImage}
                        alt={article.title}
                        label={article.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/40 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                        <p className="max-w-2xl text-balance text-lg font-medium text-white md:text-xl">
                          {article.excerpt || article.title}
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {/* ── STATS strip ─────────────────────────────────────────────── */}
      {stats.length > 0 ? (
        <Section
          padding="none"
          className="border-t border-border bg-surface py-16 md:py-24">
          <Container>
            <div
              data-reveal
              className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {stats.map((s, i) => (
                <div key={i} className="border-l-2 border-[var(--acc)] pl-5">
                  <div className="font-display text-4xl text-navy md:text-5xl">
                    {s.v}
                  </div>
                  <p className="mt-2 text-sm uppercase tracking-[0.12em] text-text-muted">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {/* ── Secondary CTA → /contact ────────────────────────────────── */}
      <Section padding="none" className="border-t border-border py-16 md:py-24">
        <Container>
          <div
            data-reveal
            className="mx-auto flex max-w-3xl flex-col items-start gap-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
              {formatDate(article.publishDate)}
            </p>
            <p className="text-lg leading-relaxed text-text-secondary">
              Planning ahead for any of these trends? Our team can help you
              choose, supply, install and support the right setup for what comes
              next.
            </p>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">
                Talk to us <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

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
