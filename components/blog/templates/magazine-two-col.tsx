import Link from "next/link";
import { Quote, ArrowRight } from "lucide-react";
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

/**
 * MAGAZINE FEATURE — full-bleed photographic hero over a strong ink scrim,
 * then a journalistic two-column body with a sticky standfirst sidebar.
 * Signature = sticky standfirst sidebar beside a long-form body column.
 */
export function MagazineTwoColTemplate({ article, related }: BlogTemplateProps) {
  const sections = article.sections ?? [];
  const firstSections = sections.slice(0, 2);
  const restSections = sections.slice(2);
  const showMidFigure = Boolean(article.secondaryImage) && sections.length > 2;

  function renderSection(s: (typeof sections)[number], i: number) {
    return (
      <div data-reveal key={i} className="border-t border-border pt-10">
        <h2 className="text-navy">{s.heading}</h2>
        {s.paragraphs.map((p, pi) => (
          <p
            key={pi}
            className="mt-5 text-lg leading-relaxed text-text-secondary">
            {p}
          </p>
        ))}

        {s.bullets && s.bullets.length > 0 ? (
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {s.bullets.map((b, bi) => (
              <li key={bi} className="flex items-start gap-3 py-3 text-navy">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--acc)]" />
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {s.quote ? (
          <figure className="mt-8 border-l-2 border-[var(--acc)] bg-surface py-6 pl-7 pr-6">
            <Quote className="h-6 w-6 text-[var(--acc)]" />
            <blockquote className="mt-3 font-display text-2xl font-medium leading-snug text-navy">
              {s.quote.text}
            </blockquote>
            {s.quote.by ? (
              <figcaption className="mt-4 text-sm font-medium text-text-muted">
                — {s.quote.by}
              </figcaption>
            ) : null}
          </figure>
        ) : null}

        {s.stat ? (
          <div className="mt-8 flex items-baseline gap-4 border border-border bg-surface px-6 py-5">
            <span className="font-display text-4xl font-medium text-[var(--acc)]">
              {s.stat.v}
            </span>
            <span className="text-sm leading-snug text-text-muted">
              {s.stat.l}
            </span>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <article>
      {/* HERO — full-bleed feature image + ink scrim, content lower-left */}
      <Section padding="none" className="relative">
        <div className="absolute inset-0">
          <SmartImage
            src={article.featuredImage}
            alt={article.title}
            label={article.title}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/70 to-[var(--ink)]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/60 to-transparent" />
        </div>

        <Container className="relative flex min-h-[72vh] items-end py-16 md:py-24">
          <div className="max-w-3xl">
            <p
              className="animate-rise text-xs font-semibold uppercase tracking-[0.2em] text-[var(--acc)]"
              style={{ animationDelay: "0.04s" }}>
              {article.category}
            </p>
            <h1
              className="animate-rise mt-5 text-white"
              style={{ animationDelay: "0.12s" }}>
              {article.title}
            </h1>
            {article.excerpt ? (
              <p
                className="animate-rise mt-6 max-w-2xl text-lg leading-relaxed text-white/75"
                style={{ animationDelay: "0.2s" }}>
                {article.excerpt}
              </p>
            ) : null}
            <div
              className="animate-rise mt-8"
              style={{ animationDelay: "0.28s" }}>
              <Byline article={article} tone="dark" />
            </div>
            <div
              className="animate-rise mt-6"
              style={{ animationDelay: "0.36s" }}>
              <Tags tags={article.tags} />
            </div>
          </div>
        </Container>
      </Section>

      {/* BODY — sticky standfirst sidebar + journalistic body column */}
      <Section padding="none" className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.34fr_0.66fr] lg:gap-16">
            {/* LEFT — sticky standfirst sidebar */}
            <aside
              data-reveal
              className="lg:sticky lg:top-28 lg:h-fit">
              <div className="h-px w-16 bg-[var(--acc)]" />
              {article.excerpt ? (
                <p className="mt-6 text-lg leading-relaxed text-navy">
                  {article.excerpt}
                </p>
              ) : null}
              <div className="mt-8">
                <Byline article={article} />
              </div>
              <div className="mt-6">
                <Tags tags={article.tags} />
              </div>
            </aside>

            {/* RIGHT — body column */}
            <div className="min-w-0">
              {article.lead ? (
                <p data-reveal className="text-xl leading-relaxed text-navy">
                  {article.lead}
                </p>
              ) : null}

              <div className="mt-12 grid gap-12">
                {firstSections.map((s, i) => renderSection(s, i))}

                {showMidFigure ? (
                  <figure data-reveal>
                    <div className="aspect-[16/8] w-full overflow-hidden border border-border bg-surface">
                      <SmartImage
                        src={article.secondaryImage}
                        alt={article.title}
                        label={article.title}
                      />
                    </div>
                    <figcaption className="mt-3 text-sm leading-relaxed text-text-muted">
                      {article.title} — supplied, installed and supported by AMC
                      Systems across the UAE. Published{" "}
                      {formatDate(article.publishDate)}.
                    </figcaption>
                  </figure>
                ) : null}

                {restSections.map((s, i) =>
                  renderSection(s, firstSections.length + i)
                )}
              </div>

              {/* In-body CTA to keep the journey inside the microsite */}
              <div
                data-reveal
                className="mt-12 flex flex-wrap items-center gap-4 border-t border-border pt-10">
                <Button
                  asChild
                  size="lg"
                  className="bg-[var(--acc)] text-[var(--ink)] hover:opacity-90">
                  <Link href="/enquiry">
                    Get a recommendation <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Talk to our team</Link>
                </Button>
              </div>
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
