import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
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

export function NewsBriefTemplate({ article, related }: BlogTemplateProps) {
  const sections = article.sections ?? [];
  const stats = article.stats ?? [];

  // "At a glance" points — prefer takeaways, fall back to section headings.
  const glance =
    article.takeaways && article.takeaways.length > 0
      ? article.takeaways
      : sections.map((s) => s.heading).filter(Boolean);

  return (
    <article>
      {/* HERO — compact, on bg-background (short news) */}
      <header className="bg-background">
        <Container>
          <div className="max-w-3xl py-16 md:py-24">
            <div
              className="animate-rise flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--acc)] [animation-delay:80ms]"
              style={{ animationFillMode: "both" }}>
              <span className="inline-flex items-center rounded-full bg-[var(--acc)]/12 px-2.5 py-1">
                News
              </span>
              {article.category ? <span>{article.category}</span> : null}
              <span aria-hidden className="text-text-muted">
                ·
              </span>
              <span className="text-text-muted">
                {formatDate(article.publishDate)}
              </span>
            </div>

            <h1
              className="animate-rise mt-5 text-balance text-navy [animation-delay:160ms]"
              style={{ animationFillMode: "both" }}>
              {article.title}
            </h1>

            {article.excerpt ? (
              <p
                className="animate-rise mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary [animation-delay:240ms]"
                style={{ animationFillMode: "both" }}>
                {article.excerpt}
              </p>
            ) : null}

            <div
              className="animate-rise mt-7 [animation-delay:320ms]"
              style={{ animationFillMode: "both" }}>
              <Byline article={article} />
            </div>

            {article.tags && article.tags.length > 0 ? (
              <div
                className="animate-rise mt-5 [animation-delay:400ms]"
                style={{ animationFillMode: "both" }}>
                <Tags tags={article.tags} />
              </div>
            ) : null}
          </div>
        </Container>
      </header>

      {/* FEATURED-IMAGE BAND */}
      {article.featuredImage ? (
        <Section padding="none" className="pb-4">
          <Container>
            <div
              data-reveal
              className="aspect-[16/7] overflow-hidden border border-border bg-surface">
              <SmartImage
                src={article.featuredImage}
                alt={article.title}
                label={article.title}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </Container>
        </Section>
      ) : null}

      {/* BODY — tight, scannable brief */}
      <Section padding="none" className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* Standfirst */}
            {article.lead ? (
              <p
                data-reveal
                className="text-xl font-bold leading-relaxed text-navy">
                {article.lead}
              </p>
            ) : null}

            {/* SIGNATURE — "At a glance" accent box */}
            {glance.length > 0 ? (
              <div
                data-reveal
                className="mt-8 border-l-2 border-[var(--acc)] bg-surface p-6 md:p-7">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                  At a glance
                </p>
                <ul className="grid gap-2.5">
                  {glance.slice(0, 5).map((g, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-text-secondary">
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[var(--acc)]" />
                      <span className="leading-relaxed">{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* SECTIONS — tight kicker + sub-heading blocks */}
            {sections.length > 0 ? (
              <div className="mt-12 grid gap-10">
                {sections.map((section, i) => (
                  <div key={i} data-reveal>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                      {String(i + 1).padStart(2, "0")} / Detail
                    </p>
                    <h2 className="mt-2 text-xl font-bold text-navy md:text-2xl">
                      {section.heading}
                    </h2>

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
                        className="mt-3 leading-relaxed text-text-secondary">
                        {p}
                      </p>
                    ))}

                    {section.bullets && section.bullets.length > 0 ? (
                      <ul className="mt-4 grid gap-2">
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
                      <figure className="mt-5 border-l-2 border-[var(--acc)] pl-5">
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
                ))}
              </div>
            ) : null}

            {/* STATS — compact inline row */}
            {stats.length > 0 ? (
              <div
                data-reveal
                className="mt-12 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
                {stats.map((s, i) => (
                  <div key={i} className="border-l-2 border-[var(--acc)] pl-4">
                    <div className="font-display text-3xl text-navy">{s.v}</div>
                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-text-muted">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}

            {/* Inline link back to the newsroom */}
            <div data-reveal className="mt-12 border-t border-border pt-8">
              <Link
                href="/news"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--acc)] hover:underline">
                More news <ArrowRight className="h-4 w-4" />
              </Link>
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
