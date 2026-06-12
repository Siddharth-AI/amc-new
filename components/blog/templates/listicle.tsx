import Link from "next/link";
import { ArrowUpRight, ArrowRight, Quote } from "lucide-react";
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

export function ListicleTemplate({ article, related }: BlogTemplateProps) {
  const sections = article.sections ?? [];
  const stats = article.stats ?? [];

  return (
    <article>
      {/* HERO — full-bleed featured image, content lower-left */}
      <header className="relative isolate flex min-h-[78vh] items-end overflow-hidden bg-[var(--ink)]">
        <div className="absolute inset-0 -z-10">
          <SmartImage
            src={article.featuredImage}
            alt={article.title}
            label={article.title}
            priority
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/70 to-[var(--ink)]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/70 to-transparent" />
        </div>

        <Container>
          <div className="max-w-3xl py-16 md:py-24">
            <p
              className="animate-rise text-xs font-semibold uppercase tracking-[0.22em] text-[var(--acc)] [animation-delay:80ms]"
              style={{ animationFillMode: "both" }}>
              {article.category}
            </p>
            <h1
              className="animate-rise mt-5 text-balance text-white [animation-delay:160ms]"
              style={{ animationFillMode: "both" }}>
              {article.title}
            </h1>
            {article.excerpt ? (
              <p
                className="animate-rise mt-6 max-w-2xl text-lg leading-relaxed text-white/75 [animation-delay:240ms]"
                style={{ animationFillMode: "both" }}>
                {article.excerpt}
              </p>
            ) : null}
            <div
              className="animate-rise mt-8 [animation-delay:320ms]"
              style={{ animationFillMode: "both" }}>
              <Byline article={article} tone="dark" />
            </div>
            <div
              className="animate-rise mt-6 [animation-delay:400ms]"
              style={{ animationFillMode: "both" }}>
              <Tags tags={article.tags} />
            </div>
          </div>
        </Container>
      </header>

      {/* INTRO — lead paragraph */}
      {article.lead ? (
        <Section padding="none" className="py-16 md:py-24">
          <Container>
            <p
              data-reveal
              className="mx-auto max-w-3xl text-xl leading-relaxed text-text-secondary md:text-2xl">
              {article.lead}
            </p>
          </Container>
        </Section>
      ) : null}

      {/* BODY — oversized numbered list-item blocks */}
      {sections.length > 0 ? (
        <Section padding="none" className="pb-16 md:pb-24">
          <Container>
            <div className="mx-auto max-w-4xl">
              {sections.map((section, i) => {
                const alt = i % 2 === 1;
                return (
                  <div
                    key={i}
                    data-reveal
                    className={`border-t border-border py-12 md:py-16 ${
                      alt ? "bg-surface" : "bg-background"
                    }`}>
                    <div className="md:flex md:items-start md:gap-8">
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
                );
              })}
            </div>
          </Container>
        </Section>
      ) : null}

      {/* STATS strip */}
      {stats.length > 0 ? (
        <Section padding="none" className="border-t border-border bg-surface py-16 md:py-24">
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

      {/* Secondary CTA → /contact */}
      <Section padding="none" className="border-t border-border py-16 md:py-24">
        <Container>
          <div data-reveal className="mx-auto flex max-w-3xl flex-col items-start gap-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
              {formatDate(article.publishDate)}
            </p>
            <p className="text-lg leading-relaxed text-text-secondary">
              Have a question about anything covered here? Our team is happy to help
              you choose, supply, install and support the right setup.
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
