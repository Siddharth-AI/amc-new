"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const EASE = [0.22, 1, 0.36, 1] as const;

interface Slide {
  image: string;
  badge: string;
  title: string;
  subtitle: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}

const SLIDES: Slide[] = [
  {
    image: "/images/hero/slide-1.jpg",
    badge: "Business Solutions · Since 2003",
    title: "True Destination to The Solution",
    subtitle:
      "End-to-end software, hardware and support for businesses across the UAE — trusted by 1000+ companies.",
    primary: { label: "Explore Solutions", href: "/products" },
    secondary: { label: "Talk to Us", href: "/contact" },
  },
  {
    image: "/images/hero/slide-2.jpg",
    badge: "Hospitality",
    title: "Software that runs your hotel",
    subtitle:
      "Property management, channel manager, booking engine and revenue tools — on the cloud or on-premise.",
    primary: {
      label: "View Hotel Solutions",
      href: "/products/hotel-management",
    },
    secondary: { label: "Get a Quote", href: "/enquiry" },
  },
  {
    image: "/images/hero/slide-3.jpg",
    badge: "Restaurants & F&B",
    title: "Faster service, tighter control",
    subtitle:
      "Cloud and desktop restaurant POS for dine-in, takeaway, delivery and multi-outlet chains.",
    primary: {
      label: "View Restaurant POS",
      href: "/products/restaurant-management",
    },
    secondary: { label: "Get a Quote", href: "/enquiry" },
  },
  {
    image: "/images/hero/slide-4.jpg",
    badge: "Retail",
    title: "One POS for every store",
    subtitle:
      "Billing, inventory and accounting for supermarkets, pharmacies, fashion, electronics and more.",
    primary: {
      label: "View Retail Solutions",
      href: "/products/retail-management",
    },
    secondary: { label: "Get a Quote", href: "/enquiry" },
  },
  {
    image: "/images/hero/slide-5.jpg",
    badge: "Hardware & Support",
    title: "Reliable hardware, local support",
    subtitle:
      "POS terminals, printers, scanners, biometric devices and 24/7 support across the UAE.",
    primary: { label: "View Hardware", href: "/products/pos-hardware" },
    secondary: { label: "Contact Us", href: "/contact" },
  },
];

export function HomeHero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi],
  );
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-navy">
      <div ref={emblaRef} className="h-full">
        <div className="flex h-full">
          {SLIDES.map((slide, i) => (
            <div key={i} className="relative h-full flex-[0_0_100%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* directional scrim: dark-left for legible text, image stays visible on the right */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/55 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
            </div>
          ))}
        </div>
      </div>

      {/* Content overlay (animates per active slide) */}
      <div className="pointer-events-none absolute inset-0 flex items-center">
        <Container>
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="pointer-events-auto max-w-3xl text-white">
              <span className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
                {SLIDES[selected].badge}
              </span>
              <h1 className="mb-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.05] text-white">
                {SLIDES[selected].title}
              </h1>
              <p className="mb-9 max-w-xl text-lg leading-relaxed text-white/80">
                {SLIDES[selected].subtitle}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild size="lg" variant="accent">
                  <a href={SLIDES[selected].primary.href}>
                    {SLIDES[selected].primary.label}{" "}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white hover:text-navy">
                  <a href={SLIDES[selected].secondary.href}>
                    {SLIDES[selected].secondary.label}
                  </a>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </Container>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === selected
                      ? "w-10 bg-primary"
                      : "w-2.5 bg-white/40 hover:bg-white/70",
                  )}
                />
              ))}
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <button
                onClick={scrollPrev}
                aria-label="Previous slide"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-navy">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={scrollNext}
                aria-label="Next slide"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-navy">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
