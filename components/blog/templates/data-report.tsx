import Link from "next/link";
import { ArrowRight, BarChart3, TrendingUp, Quote } from "lucide-react";
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
 * Dark analytics / data report.
 * Signature = an ink-dark report body opening with a prominent STATS BAND of
 * large white figures, then a standfirst lead and sharp-cornered sections with
 * inline accent stat figures, dark "key figures" boxes and accent pull-quotes.
 * Closing components (Takeaways / FAQ / Related) are light for contrast.
 */
export function DataReportTemplate({ article, related }: BlogTemplateProps) {
  const stats = article.stats?.slice(0, 4) ?? [];

  return (
    <article>
      {/* ── HERO: dark report masthead ──────────────────────────────── */}
      <Section
        padding="none"
        className="relative overflow-hidden bg-[var(--ink)] py-16 text-white md:py-24">
        {/* accent glow + texture */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[var(--acc)]/20 blur-[120px]" />
        <div className="dots-pattern pointer-events-none absolute inset-0 opacity-[0.07]" />

        <Container className="relative">
          <div className="max-w-3xl">
            <p
              className="animate-rise inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--acc)]"
              style={{ animationDelay: "0ms" }}>
              <BarChart3 className="h-4 w-4" /> Report
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

      {/* ── DARK ARTICLE BODY ───────────────────────────────────────── */}
      <div className="bg-[var(--ink)] text-white">
        {/* SIGNATURE: prominent stats band ─────────────────────────── */}
        {stats.length > 0 ? (
          <Section padding="none" className="border-t border-white/10 pb-4">
            <Container>
              <div
                data-reveal
                className="grid grid-cols-1 gap-px border-b border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="relative bg-[var(--ink)] p-8 md:p-10">
                    <span
                      aria-hidden
                      className="absolute inset-x-8 top-0 h-px bg-[var(--acc)] md:inset-x-10"
                    />
                    <p className="font-display text-5xl font-medium leading-none text-white md:text-6xl">
                      {s.v}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-white/60">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </Container>
          </Section>
        ) : null}

        {/* Reading column ──────────────────────────────────────────── */}
        <Section padding="none" className="py-16 md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl">
              {/* Standfirst lead */}
              {article.lead ? (
                <p
                  data-reveal
                  className="text-xl leading-relaxed text-white/85 md:text-2xl">
                  {article.lead}
                </p>
              ) : null}

              {/* Sections */}
              {article.sections?.map((section, i) => (
                <div key={i} data-reveal>
                  <h2 className="mt-14 text-white md:mt-16">
                    {section.heading}
                  </h2>

                  {section.paragraphs?.map((p, j) => (
                    <p key={j} className="mt-6 leading-relaxed text-white/65">
                      {p}
                    </p>
                  ))}

                  {/* Inline accent stat figure beside the text */}
                  {section.stat ? (
                    <div className="mt-8 flex items-baseline gap-5 border-t border-white/10 pt-7">
                      <p className="font-display text-5xl font-medium leading-none text-[var(--acc)] md:text-6xl">
                        {section.stat.v}
                      </p>
                      <p className="leading-relaxed text-white/60">
                        {section.stat.l}
                      </p>
                    </div>
                  ) : null}

                  {/* Dark "key figures" box */}
                  {section.bullets && section.bullets.length > 0 ? (
                    <div className="mt-8 border border-white/10 bg-white/[0.04] p-7 md:p-8">
                      <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                        <TrendingUp className="h-4 w-4" /> Key figures
                      </p>
                      <ul className="grid gap-3">
                        {section.bullets.map((b, k) => (
                          <li
                            key={k}
                            className="flex items-start gap-3 leading-relaxed text-white/70">
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

                  {/* Dark accent pull-quote */}
                  {section.quote ? (
                    <figure className="my-12 border-l-2 border-[var(--acc)] bg-white/[0.04] py-6 pl-7 pr-6 md:my-14">
                      <Quote
                        aria-hidden
                        className="mb-4 h-7 w-7 text-[var(--acc)]/50"
                      />
                      <blockquote className="font-display text-2xl font-medium leading-snug text-white md:text-3xl">
                        {section.quote.text}
                      </blockquote>
                      {section.quote.by ? (
                        <figcaption className="mt-5 text-sm font-medium uppercase tracking-[0.14em] text-white/55">
                          — {section.quote.by}
                        </figcaption>
                      ) : null}
                    </figure>
                  ) : null}
                </div>
              ))}

              {/* Mid-body framed figure */}
              {article.secondaryImage ? (
                <figure
                  data-reveal
                  className="mt-16 border border-white/10 bg-white/[0.04] p-3">
                  <div className="aspect-[16/9] w-full overflow-hidden">
                    <SmartImage
                      src={article.secondaryImage}
                      alt={article.title}
                      label={article.title}
                    />
                  </div>
                  <figcaption className="mt-3 px-1 text-sm text-white/50">
                    {article.title}
                  </figcaption>
                </figure>
              ) : null}

              {/* Closing meta row */}
              <div
                data-reveal
                className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/55">
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
      </div>

      {/* ── REQUIRED CLOSING SEQUENCE (light, for contrast) ─────────── */}
      <Section
        padding="none"
        className="bg-background pb-4 pt-16 md:pt-24">
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
