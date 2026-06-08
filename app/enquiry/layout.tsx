import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote - AMC Systems | Free Quote",
  description:
    "Get your free quote for business solutions and technology systems. Tell us about your requirements and we'll provide a customized solution for your business.",
  keywords: [
    "business systems quote",
    "technology solutions quote",
    "free quote AMC Systems",
    "business solutions quote",
    "UAE business quote",
  ],
  openGraph: {
    title: "Request a Quote - AMC Systems",
    description:
      "Tell us about your requirements and we'll provide a customized solution",
    url: "/enquiry",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Request a Quote - AMC Systems",
      },
    ],
    siteName: "AMC Systems",
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Quote - AMC Systems",
    description: "Get your free quote for business systems",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/enquiry",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EnquiryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

