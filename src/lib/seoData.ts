export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "ChiaraAI Consulting",
  "url": "https://chiaraaiconsulting.se",
  "logo": "https://chiaraaiconsulting.se/chiara-favicon.png",
  "description": "AI-chattassistenter och röstassistenter för bokningar och kundkommunikation. Skräddarsydda AI-automationslösningar för företag i Sverige.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "SE"
  },
  "telephone": "+46735316950",
  "email": "chiarasei.27@gmail.com",
  "areaServed": {
    "@type": "Country",
    "name": "Sweden"
  },
  "serviceType": [
    "AI Chatbots",
    "AI Voice Assistants",
    "Automated Booking Systems",
    "AI Marketing Automation",
    "Social Media Automation",
    "Workflow Automation"
  ],
  "priceRange": "$$"
};

export const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "AI Automation Services",
  "itemListElement": [
    { "@type": "Service", "position": 1, "name": "AI Chatbots", "description": "Custom AI chatbots for customer service automation" },
    { "@type": "Service", "position": 2, "name": "AI Voice Assistants", "description": "Intelligent voice assistants for business communication" },
    { "@type": "Service", "position": 3, "name": "Automated Booking Systems", "description": "AI-powered booking and scheduling automation" },
    { "@type": "Service", "position": 4, "name": "AI Marketing Automation", "description": "Data-driven marketing with AI optimization" },
    { "@type": "Service", "position": 5, "name": "Social Media Automation", "description": "Automated social media management and content" },
    { "@type": "Service", "position": 6, "name": "Workflow Automation", "description": "End-to-end business workflow automation" }
  ]
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What AI automation services does ChiaraAI offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ChiaraAI offers AI chatbots, voice assistants, automated booking systems, marketing automation, social media automation, loyalty programs, and workflow automation for small businesses in Sweden."
      }
    },
    {
      "@type": "Question",
      "name": "Which industries does ChiaraAI serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ChiaraAI specializes in AI automation for cafés, restaurants, salons, retail shops, and other small businesses across Sweden."
      }
    }
  ]
};
