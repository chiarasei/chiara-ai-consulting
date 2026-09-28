export const SITE_URL = "https://chiaraaiconsulting.se";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ChiaraAI Consulting",
  url: SITE_URL,
  logo: `${SITE_URL}/chiara-favicon.png`,
  image: OG_IMAGE,
  description:
    "A Gothenburg-based web and app development consultancy building custom websites, web apps and digital products.",
  email: "info@chiaraaiconsulting.se",
  telephone: "+46 73 531 69 50",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gothenburg",
    addressCountry: "SE",
  },
  areaServed: [
    { "@type": "City", name: "Gothenburg" },
    { "@type": "Country", name: "Sweden" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: ["Websites", "Web Apps", "Online Booking", "Payments & E-commerce"].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};
