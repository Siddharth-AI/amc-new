// ============================================================================
// SITE CONFIGURATION - Centralized URL and site settings
// ============================================================================

/**
 * Get the base URL for the site.
 * Priority:
 * 1. NEXT_PUBLIC_SITE_URL (explicitly set)
 * 2. VERCEL_URL (auto-set by Vercel for preview deployments)
 * 3. Production URL (fallback for builds)
 */
function getBaseUrl(): string {
  // Explicitly set site URL takes priority
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  // Vercel preview deployments
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // Production fallback - Update this with your actual domain
  return "https://amcsystems.ae";
}

export const SITE_URL = getBaseUrl();

// Export for use in metadata and structured data
export const siteConfig = {
  url: SITE_URL,
  name: "AMC Systems - Al Marwah Computers",
  shortName: "AMC Systems",
  description:
    "AMC Systems (Al Marwah Computer Systems), Sharjah UAE since 2003 — end-to-end business software and hardware: hotel, restaurant, retail and salon management, ERP & accounting, HR & payroll, POS hardware and more.",
  ogImage: `${SITE_URL}/og-image.jpg`,
  locale: "en_AE",
  defaultLanguage: "en",
} as const;

