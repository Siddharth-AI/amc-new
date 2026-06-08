// ============================================================================
// BUSINESS DATA - Centralized business information for SEO
// ============================================================================

import { SITE_URL } from "./site-config";
import { company } from "./data";

export const BUSINESS = {
  name: "AMC Systems",
  fullName: "Al Marwah Computers",
  legalName: "Al Marwah Computer Systems",
  tagline: "True Destination to The Solution",
  shortName: "AMC Systems",

  // UPDATED CONTACT INFO
  phone: "+97165359571",
  phoneDisplay: "+971 65359571",
  whatsapp: "97165359571",
  email: "sales@amc-uae.com",
  supportEmail: "sales@amc-uae.com",
  website: "www.amc-uae.com",

  // UPDATED ADDRESS - Sharjah Location
  address: {
    street: "Al Fardan Center - Buhairah - B-Block, Office 313/315 Corniche St",
    area: "Al Majaz 3",
    city: "Sharjah",
    state: "Sharjah",
    stateFullName: "Sharjah",
    zip: "",
    country: "UAE",
    full: "Al Fardan Center - Buhairah - B-Block, Office 313/315 Corniche St - Al Majaz 3 - Sharjah",
  },

  // Updated Geo Coordinates - Sharjah Location
  geo: {
    latitude: 25.3548,
    longitude: 55.3928,
  },

  // Google Maps URL
  mapUrl: "https://maps.app.goo.gl/ttg7sPhb16XzJyyC9",

  // URLs
  url: SITE_URL,
  bookingUrl: `${SITE_URL}/contact`,
  productsUrl: `${SITE_URL}/products`,

  // Business Hours
  hours: {
    monday: "9:00 AM - 6:00 PM",
    tuesday: "9:00 AM - 6:00 PM",
    wednesday: "9:00 AM - 6:00 PM",
    thursday: "9:00 AM - 6:00 PM",
    friday: "9:00 AM - 6:00 PM",
    saturday: "9:00 AM - 1:00 PM",
    sunday: "Closed",
  },

  // Schema.org formatted hours
  openingHoursSpecification: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],

  // UPDATED SOCIAL MEDIA
  social: {
    main: "https://solo.to/amcsystems",
    facebook: "https://solo.to/amcsystems",
    linkedin: "https://solo.to/amcsystems",
    twitter: "https://solo.to/amcsystems",
    instagram: "https://solo.to/amcsystems",
  },

  // UPDATED COMPANY STATS
  foundingYear: 2003,
  experience: "20+ years strong",
  happyClients: "1000+",
  softwareSolutions: "20+",
  location: "Sharjah, UAE",

  // Company Philosophy
  philosophy: "AMC Systems always strive for the inclusion of more products, solution and new technologies, so that we can better serve customers and enter new markets. We always feel the need for social value and improve the lives of our customers. We take the role of being our customers' advocate seriously.",

  // Company Description
  companyDescription: "Al Marwah Computer Systems (known as AMC Systems) was started in the year 2003 with the goal of giving end-to-end solutions to end users. AMC Systems is a young and dynamic company with many years of experience behind them.",

  // Service Areas
  serviceAreas: [
    "Sharjah",
    "Dubai", 
    "Abu Dhabi",
    "Ajman",
    "Umm Al Quwain",
    "Ras Al Khaimah",
    "Fujairah",
    "UAE",
  ],

  // Price Range
  priceRange: "$$$",
} as const;

// ============================================================================
// SEO KEYWORDS - Common keywords used across pages
// ============================================================================

export const LOCATION_KEYWORDS = [
  "sharjah",
  "uae", 
  "united arab emirates",
  "dubai",
  "abu dhabi",
  "pos systems uae",
  "retail solutions sharjah",
  "software solutions uae",
  "business solutions sharjah",
] as const;

export const BRAND_KEYWORDS = [
  "amc systems",
  "al marwah computers",
  "amc systems uae",
  "amc pos systems",
  "al marwah computer systems",
  "true destination solution",
] as const;

