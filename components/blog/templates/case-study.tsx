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
 * Case-study template.
 * Signature = a results stat band on ink directly under a full-bleed hero,
 * then a staged Challenge → Approach → Rollout → Results narrative where each
 * section carries an accent stage kicker (e.g. "01 · Challenge").
 * No text+image split hero — the hero is a single full-bleed image with scrim.
 */
export function CaseStudyTemplate({ article, related }: BlogTemplateProps) {
  const stats = article.stats?.slice(0, 4) ?? [];

  return (
    <article>
      {/* ── HERO: full-bleed featured image + ink scrim, content lower-left ── */}
      <Section padding="none">
        <div className="relative min-h-[72vh] w-full overflow-hidden">
          <SmartImage
            src={article.featuredImage}
            alt={article.title}
            label={article.title}
            priority
            className="animate-rise absolute inset-0"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/55 to-[var(--ink)]/10" />
          <Container className="relative flex min-h-[72vh] flex-col justify-end py-16 md:py-24">
            <div className="max-w-3xl">
              <p
                className="animate-rise text-xs font-semibold uppercase tracking-[0.22em] text-[var(--acc)]"
                style={{ animationDelay: "0ms" }}>
                Case study
              </p>
              <h1
                className="animate-rise mt-5 font-display text-white"
                style={{ animationDelay: "80ms" }}>
                {article.title}
              </h1>
              {article.excerpt ? (
                <p
                  className="animate-rise mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl"
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
        </div>
      </Section>

      {/* ── SIGNATURE: results stat band on ink ─────────────────────────── */}
      {stats.length > 0 ? (
        <Section padding="none" className="bg-[var(--ink)] text-white">
          <Container className="py-16 md:py-24">
            <p
              data-reveal
              className="mb-10 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--acc)]">
              The results at a glance
            </p>
            <div
              data-reveal
              className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s, i) => (
                <div key={i} className="bg-[var(--ink)] p-8">
                  <p className="font-display text-4xl font-medium text-[var(--acc)] md:text-5xl">
                    {s.v}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {/* ── BODY: standfirst + staged narrative ─────────────────────────── */}
      <Section padding="none" className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* Lead / standfirst */}
            {article.lead ? (
              <p
                data-reveal
                className="border-l-2 border-[var(--acc)] pl-6 text-xl leading-relaxed text-text-secondary md:text-2xl">
                {article.lead}
              </p>
            ) : null}

            {/* Staged sections */}
            {article.sections?.map((section, i) => (
              <div key={i} data-reveal className="mt-14 md:mt-20">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                  {String(i + 1).padStart(2, "0")} · {section.heading}
                </p>
                <h2 className="mt-3 text-navy">{section.heading}</h2>

                {section.paragraphs?.map((p, j) => (
                  <p
                    key={j}
                    className="mt-6 leading-relaxed text-text-secondary">
                    {p}
                  </p>
                ))}

                {section.bullets && section.bullets.length > 0 ? (
                  <ul className="mt-7 grid gap-3 border-l border-border pl-6">
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
                  <figure className="my-12 border-l-2 border-[var(--acc)] pl-6 md:my-14">
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
          </div>
        </Container>
      </Section>

      {/* ── MID-BODY: full-width secondary figure ───────────────────────── */}
      {article.secondaryImage ? (
        <Section padding="none" className="pb-16 md:pb-24">
          <Container maxWidth="full" className="px-0 sm:px-0 lg:px-0">
            <figure data-reveal className="w-full">
              <div className="aspect-[16/8] w-full overflow-hidden">
                <SmartImage
                  src={article.secondaryImage}
                  alt={article.title}
                  label={article.title}
                />
              </div>
              <figcaption className="mx-auto max-w-3xl px-4 pt-4 text-sm text-text-muted sm:px-6 lg:px-8">
                {article.title} — supplied, installed and supported by AMC Systems.
              </figcaption>
            </figure>
          </Container>
        </Section>
      ) : null}

      {/* ── BODY OUTRO: meta + CTA link ─────────────────────────────────── */}
      <Section padding="none" className="pb-16 md:pb-24">
        <Container>
          <div
            data-reveal
            className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-sm text-text-muted">
            <span>
              Published {formatDate(article.publishDate)} · {article.readingTime} min read
            </span>
            <Button asChild variant="outline" size="sm">
              <Link href="/enquiry">
                Talk to us <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── REQUIRED CLOSING SEQUENCE ───────────────────────────────────── */}
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
