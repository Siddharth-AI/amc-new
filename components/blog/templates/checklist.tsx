import Link from "next/link";
import { ArrowRight, Check, ClipboardCheck, Quote, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/ui/smart-image";
import { CtaBanner } from "@/components/home/cta";
import {
  BlogTemplateProps,
  Byline,
  Tags,
  Takeaways,
  BlogFaqList,
  RelatedPosts,
  formatDate,
} from "./shared";

/* Printable-style grouped checklist with sharp square checkboxes. Theme via CSS vars set by shell. */
export function ChecklistTemplate({ article, related }: BlogTemplateProps) {
  const sections = article.sections ?? [];
  const stats = article.stats ?? [];

  return (
    <article>
      {/* Hero — typographic on background, staggered rise */}
      <Section padding="none" className="bg-background py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="animate-rise inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
              <ClipboardCheck className="h-4 w-4" />
              Checklist
            </p>
            <h1
              className="animate-rise mt-6 text-navy"
              style={{ animationDelay: "0.06s" }}>
              {article.title}
            </h1>
            {article.excerpt ? (
              <p
                className="animate-rise mt-6 max-w-2xl text-xl leading-relaxed text-text-secondary"
                style={{ animationDelay: "0.12s" }}>
                {article.excerpt}
              </p>
            ) : null}
            <div className="animate-rise mt-8" style={{ animationDelay: "0.18s" }}>
              <Byline article={article} />
            </div>
            <div className="animate-rise mt-6" style={{ animationDelay: "0.24s" }}>
              <Tags tags={article.tags} />
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured image band with subtle scrim */}
      <div className="relative aspect-[16/7] w-full overflow-hidden">
        <SmartImage
          src={article.featuredImage}
          alt={article.title}
          label={article.title}
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--ink)]/45 via-[var(--ink)]/10 to-transparent" />
      </div>

      {/* Intro — lead paragraph */}
      {article.lead ? (
        <Section padding="none" className="py-16 md:py-24">
          <Container>
            <div data-reveal className="mx-auto max-w-3xl">
              <div className="mb-6 h-px w-12 bg-[var(--acc)]" />
              <p className="font-display text-2xl font-medium leading-[1.3] text-navy md:text-3xl">
                {article.lead}
              </p>
              <p className="mt-6 text-sm text-text-muted">
                A practical, work-through checklist — published{" "}
                {formatDate(article.publishDate)} and kept current by our team.
              </p>
            </div>
          </Container>
        </Section>
      ) : null}

      {/* Body — grouped checkbox checklist cards */}
      {sections.length > 0 && (
        <Section
          padding="none"
          className="border-t border-border bg-background py-16 md:py-24">
          <Container>
            <div className="mx-auto flex max-w-3xl flex-col gap-8">
              {sections.map((s, i) => {
                const paragraphs = s.paragraphs ?? [];
                const bullets = s.bullets ?? [];
                const index = String(i + 1).padStart(2, "0");
                return (
                  <div
                    key={i}
                    data-reveal
                    className="border border-border bg-surface p-7 md:p-9">
                    {/* Group heading with accent index */}
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-2xl font-medium leading-none text-[var(--acc)]">
                        {index}
                      </span>
                      <h2 className="text-xl font-semibold text-navy md:text-2xl">
                        {s.heading}
                      </h2>
                    </div>

                    {/* Short intro paragraphs */}
                    {paragraphs.map((p, j) => (
                      <p
                        key={j}
                        className="mt-4 leading-relaxed text-text-secondary">
                        {p}
                      </p>
                    ))}

                    {/* Checklist items — sharp square checkboxes */}
                    {bullets.length > 0 ? (
                      <ul className="mt-6 divide-y divide-border border-t border-border">
                        {bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-4 py-4">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border-2 border-[var(--acc)]">
                              <Check className="h-3.5 w-3.5 text-[var(--acc)]" />
                            </span>
                            <span className="leading-relaxed text-navy">{b}</span>
                          </li>
                        ))}
                      </ul>
                    ) : paragraphs.length === 0 ? (
                      <p className="mt-4 leading-relaxed text-text-muted">
                        {s.heading}
                      </p>
                    ) : null}

                    {/* Optional inline stat */}
                    {s.stat ? (
                      <div className="mt-6 inline-flex items-center gap-3 border border-border bg-background px-5 py-3">
                        <TrendingUp className="h-5 w-5 text-[var(--acc)]" />
                        <span className="font-display text-2xl font-medium text-navy">
                          {s.stat.v}
                        </span>
                        <span className="text-sm text-text-muted">{s.stat.l}</span>
                      </div>
                    ) : null}

                    {/* Optional quote */}
                    {s.quote ? (
                      <figure className="mt-6 border-l-2 border-[var(--acc)] bg-background p-5">
                        <Quote className="h-5 w-5 text-[var(--acc)]" />
                        <blockquote className="mt-3 text-lg font-medium leading-relaxed text-navy">
                          {s.quote.text}
                        </blockquote>
                        {s.quote.by ? (
                          <figcaption className="mt-3 text-sm text-text-muted">
                            — {s.quote.by}
                          </figcaption>
                        ) : null}
                      </figure>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* Stats band */}
      {stats.length > 0 && (
        <Section
          padding="none"
          className="border-t border-border bg-surface py-16 md:py-24">
          <Container>
            <div
              data-reveal
              className="mx-auto grid max-w-3xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {stats.map((st, i) => (
                <div key={i} className="border-l-2 border-[var(--acc)] pl-5">
                  <p className="font-display text-4xl font-medium text-navy">
                    {st.v}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {st.l}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Closing prompt */}
      <Section padding="none" className="py-16 md:py-24">
        <Container>
          <div data-reveal className="mx-auto max-w-3xl">
            <div className="flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[var(--acc)] text-[var(--ink)] hover:opacity-90">
                <Link href="/enquiry">
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
            </div>
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
