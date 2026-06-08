import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { getCategories } from "@/lib/catalog";
import { BUSINESS } from "@/lib/business";

const COMPANY = [
  { name: "About Us", href: "/about" },
  { name: "Solutions", href: "/products" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
  { name: "Request a Quote", href: "/enquiry" },
];

export function Footer() {
  const categories = getCategories();
  const year = 2026;

  return (
    <footer className="border-t border-border bg-surface">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="AMC Systems" className="mb-5 h-9 w-auto" />
            <p className="max-w-xs text-sm leading-relaxed text-text-muted">
              {BUSINESS.tagline}. End-to-end business software and hardware, supplied and supported across the UAE since {BUSINESS.foundingYear}.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-navy">Solutions</h4>
            <ul className="space-y-2.5">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/products/${c.slug}`} className="text-sm text-text-muted transition-colors hover:text-navy">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-navy">Company</h4>
            <ul className="space-y-2.5">
              {COMPANY.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-text-muted transition-colors hover:text-navy">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-navy">Get in touch</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{BUSINESS.address.full}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href={`tel:${BUSINESS.phone}`} className="hover:text-navy">{BUSINESS.phoneDisplay}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-navy">{BUSINESS.email}</a>
              </li>
              <li>
                <a
                  href={BUSINESS.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-primary-700 hover:underline">
                  View on map <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 text-sm text-text-muted sm:flex-row">
          <p>© {year} {BUSINESS.legalName}. All rights reserved.</p>
          <p>{BUSINESS.location}</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
