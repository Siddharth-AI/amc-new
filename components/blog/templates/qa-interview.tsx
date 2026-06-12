import Link from "next/link";
import { MessageSquareQuote } from "lucide-react";
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
  RelatedPosts,
  formatDate,
} from "./shared";

/**
 * Magazine-style Q&A interview.
 * Signature = the `faqs` array rendered as the main interview spine — a
 * single centered column of Q/A pairs (not an accordion). The author is the
 * interviewee. No text+image hero split; a full-width featured-image band
 * sits below the centered hero masthead.
 */
export function QaInterviewTemplate({ article, related }: BlogTemplateProps) {
  return (
    <article>
      {/* ── HERO: centered interview masthead ───────────────────────── */}
      <Section padding="none" className="bg-background pt-16 md:pt-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="animate-rise text-xs font-semibold uppercase tracking-[0.22em] text-[var(--acc)]"
              style={{ animationDelay: "0ms" }}>
              In conversation
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

      {/* ── INTRO: editor's note + brief context ────────────────────── */}
      <Section padding="none" className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* Editor's intro (italic) */}
            {article.lead ? (
              <p
                data-reveal
                className="border-l-2 border-[var(--acc)] pl-6 text-lg italic leading-relaxed text-text-secondary md:text-xl">
                {article.lead}
              </p>
            ) : null}

            {/* Brief context blocks */}
            {article.sections?.map((section, i) => (
              <div key={i} data-reveal>
                <h2 className="mt-12 text-navy md:mt-14">{section.heading}</h2>
                {section.paragraphs?.map((p, j) => (
                  <p
                    key={j}
                    className="mt-5 leading-relaxed text-text-secondary">
                    {p}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 ? (
                  <ul className="mt-6 grid gap-3">
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
              </div>
            ))}

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
          </div>
        </Container>
      </Section>

      {/* ── SIGNATURE: the interview Q&A spine ──────────────────────── */}
      {article.faqs && article.faqs.length > 0 ? (
        <Section
          padding="none"
          className="border-t border-border bg-surface py-16 md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl">
              <div data-reveal className="mb-10 flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center bg-[var(--acc)] text-[var(--ink)]">
                  <MessageSquareQuote className="h-5 w-5" aria-hidden />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--acc)]">
                  The interview
                </p>
              </div>

              <div data-reveal className="divide-y divide-border border-y border-border">
                {article.faqs.map((item, i) => (
                  <div key={i} className="py-10 first:pt-0 last:pb-0">
                    {/* Question */}
                    <div className="flex items-start gap-4">
                      <span
                        aria-hidden
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--acc)] text-sm font-semibold text-[var(--ink)]">
                        Q
                      </span>
                      <p className="pt-0.5 text-lg font-semibold leading-snug text-navy">
                        {item.q}
                      </p>
                    </div>

                    {/* Answer */}
                    <div className="mt-5 flex items-start gap-4">
                      <span
                        aria-hidden
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--acc)]/40 text-sm font-semibold text-[var(--acc)]">
                        A
                      </span>
                      <div className="space-y-4 leading-relaxed text-text-secondary">
                        {item.a
                          .split(/\n{2,}/)
                          .filter((para) => para.trim().length > 0)
                          .map((para, j) => (
                            <p key={j}>{para.trim()}</p>
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Closing meta */}
              <div
                data-reveal
                className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-sm text-text-muted">
                <span>
                  Interview with {article.author}
                  {article.authorRole ? ` · ${article.authorRole}` : ""} ·{" "}
                  {formatDate(article.publishDate)}
                </span>
                <Button asChild variant="outline" size="sm">
                  <Link href="/enquiry">Start a conversation</Link>
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      {/* ── REQUIRED CLOSING SEQUENCE (no BlogFaqList — Q&A is the body) ── */}
      <Section padding="none" className="pb-4">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Takeaways items={article.takeaways} />
          </div>
        </Container>
      </Section>
      <RelatedPosts related={related} />
      <CtaBanner
        heading="Talk to AMC Systems"
        text="Tell us about your business and our team will recommend the right software or hardware — supplied, installed and supported across the UAE."
        image={article.secondaryImage || article.featuredImage}
      />
    </article>
  );
}
