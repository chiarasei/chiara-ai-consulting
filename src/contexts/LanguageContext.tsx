import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "sv";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language]?.[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.recentwork": "Our Work",
    "nav.services": "Services",
    "nav.industries": "Industries",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",

    // Recent Work Page
    "recentwork.title": "Our Work & Demos",
    "recentwork.subtitle": "Live projects and interactive demos showcasing what we build for service businesses.",
    "recentwork.viewproject": "View Project",
    "recentwork.visitsite": "Visit Live Site",
    "recentwork.psych.badge": "Demo Website",
    "recentwork.psych.title": "Psychology Practice – Demo Website",
    "recentwork.psych.desc": "A demo showcasing the type of website we build for therapists and healthcare providers. Features a calm, professional design, online booking integration, and an AI chat assistant that answers client questions instantly.",
    "recentwork.shopify.badge": "Live Project",
    "recentwork.shopify.title": "Zoe & Co – Custom Shopify Store",
    "recentwork.shopify.desc": "A live e-commerce store we built for Zoe & Co, featuring a custom Shopify theme, optimized product pages, and a seamless shopping experience.",
    "recentwork.voice.badge": "Live Demo",
    "recentwork.voice.title": "AI Voice Assistant – Live Demo",
    "recentwork.voice.desc": "Try our AI voice assistant live. This is the same technology we integrate into client websites to help answer customer calls and inquiries automatically.",

    // Hero
    "hero.title1": "Modern Websites, Booking Systems & Smart Automation for",
    "hero.title2": "Service Businesses",
    "hero.description": "We design and upgrade professional websites for small businesses and service providers. From building a new website to redesigning an existing one, we help businesses make it easier for customers to book appointments, ask questions, and connect with them online. We can add booking calendars, chat assistants that answer common questions automatically, and optional voice assistants to help handle customer inquiries.",
    "hero.trust": "Free Website Review for Local Businesses",
    "hero.cta": "Get a Free Website Review",
    "hero.cta2": "View Our Services",

    // Home - Recent Work
    "home.recent.title": "Recent Work",
    "home.recent.project.title": "Custom Shopify E-commerce Store",
    "home.recent.project.desc": "A modern online store designed with a clean layout, optimized for mobile devices and a smooth customer shopping experience.",
    "home.recent.project.button": "View Project",
    "home.recent.project2.title": "Psychology Practice Website",
    "home.recent.project2.desc": "A calm, professional one-page website for a private psychology practice, featuring a welcoming design, service overview, and integrated chat assistant.",

    // Home - Problem
    "home.problem.title": "Is Your Website Losing Potential Customers?",
    "home.problem.subtitle": "Many small business websites miss opportunities because customers cannot quickly find answers or contact the business.",
    "home.problem.p1": "Outdated websites that don't build trust",
    "home.problem.p2": "Slow mobile performance",
    "home.problem.p3": "Unanswered customer questions",
    "home.problem.p4": "Missed inquiries after business hours",
    "home.problem.p5": "No automated responses for visitors",
    "home.problem.closing": "We help businesses solve these problems by upgrading their website and adding smart automation.",

    // Home - Services
    "home.services.title": "Our Services",

    // Home - Pricing
    "home.pricing.title": "Simple Packages for Small Businesses",
    "home.pricing.note": "Final pricing depends on website size and automation requirements.",
    "home.pricing.cta": "Request a Free Website Review",

    // Home - Industries
    "home.industries.title": "Businesses We Help",

    // Home - Voice
    "home.voice.badge": "Live Demo",
    "home.voice.title": "AI Voice Assistant Demo",
    "home.voice.subtitle": "We also build voice assistants that can answer customer calls, provide information, and help businesses respond to inquiries automatically.",

    // Home - CTA
    "home.cta.title": "Ready to Improve Your Website?",
    "home.cta.subtitle": "We offer a free website review where we analyze your current website and suggest improvements to help attract and convert more clients.",
    "home.cta.button": "Request Your Free Website Review",

    // Home - About
    "home.about.title": "About Chiara AI Consulting",
    "home.about.p1": "At Chiara AI Consulting, we help small service businesses improve their online presence and respond to customer inquiries more efficiently. Many small businesses have websites that are outdated or do not make it easy for potential clients to ask questions or request services. We help solve this by modernizing websites and adding smart tools such as chat assistants and automated inquiry systems.",
    "home.about.p2": "Our goal is simple: help businesses respond faster, capture more inquiries, and create a better experience for their customers. With a background in technology, automation, and modern web tools, we combine website design with practical automation solutions that help businesses operate more efficiently. Whether it's upgrading an existing website or adding automated customer support, we focus on building solutions that are simple, effective, and tailored to small businesses.",
    "home.about.v1.title": "Technical Expertise",
    "home.about.v1.desc": "Deep experience in DevOps, cloud architecture, and AI automation.",
    "home.about.v2.title": "Results Focused",
    "home.about.v2.desc": "We deliver measurable improvements that make a real difference.",
    "home.about.v3.title": "Scalable Solutions",
    "home.about.v3.desc": "Solutions that grow with your business, from startup to established company.",
    "home.about.v4.title": "Ongoing Support",
    "home.about.v4.desc": "Reliable support and continuous optimization of your digital systems.",

    // Services
    "services.title": "Our Services",
    "services.subtitle": "We help service businesses modernize their websites and automate customer inquiries using chat assistants and smart automation tools.",
    "services.website.title": "Website Upgrade",
    "services.website.desc": "We modernize outdated websites with clean design, mobile optimization, and better performance.",
    "services.chatbot.title": "AI Chat Assistant",
    "services.chatbot.desc": "Add an AI chatbot to your website that answers common customer questions automatically.",
    "services.inquiry.title": "Customer Inquiry Automation",
    "services.inquiry.desc": "Automate responses to website messages and contact requests so you never miss potential customers.",
    "services.booking.title": "Booking Integration",
    "services.booking.desc": "Allow customers to easily request appointments or consultations online.",
    "services.voice.title": "AI Voice Assistant",
    "services.voice.desc": "An intelligent voice assistant that answers customer calls, provides information, and helps handle inquiries automatically.",

    "industries.title": "Businesses We Help",
    "industries.subtitle": "Tailored solutions for service businesses that rely on customer inquiries.",
    "industries.therapists.title": "Therapists & Coaches",
    "industries.therapists.desc": "Online booking, automated intake forms, and instant answers to common patient questions so you can focus on your clients.",
    "industries.wellness.title": "Wellness & Beauty Clinics",
    "industries.wellness.desc": "Modern websites that showcase your treatments, with chatbots that handle appointment requests and answer FAQs around the clock.",
    "industries.cleaning.title": "Cleaning Companies",
    "industries.cleaning.desc": "Professional websites with instant quote request forms and automated follow-ups that turn inquiries into booked jobs.",
    "industries.local.title": "Local Service Businesses",
    "industries.local.desc": "Whatever your trade, whether plumbing, landscaping, or home repair, we build you a website that works as hard as you do.",
    "industries.consultants.title": "Consultants",
    "industries.consultants.desc": "Professional online presence with automated scheduling and client intake to streamline your consulting practice.",

    // Pricing
    "pricing.title": "Simple Packages for Small Businesses",
    "pricing.subtitle": "Choose the package that fits your business needs.",
    "pricing.cta": "Get Started",
    "pricing.popular": "Most Popular",
    "pricing.note": "Final pricing depends on website size and automation requirements.",
    "pricing.starter.name": "Website Upgrade",
    "pricing.starter.desc": "Modern redesign of your existing website with improved mobile performance and structure.",
    "pricing.starter.price": "Starting from 5,000 SEK",
    "pricing.growth.name": "Website + AI Chat Assistant",
    "pricing.growth.desc": "Website upgrade plus an AI chatbot that answers common customer questions automatically.",
    "pricing.growth.price": "Starting from 7,000 SEK",
    "pricing.premium.name": "Advanced Automation",
    "pricing.premium.desc": "Website upgrade with AI chatbot and optional AI voice assistant automation.",
    "pricing.premium.price": "Starting from 10,000 SEK",
    "pricing.maintenance.title": "Optional Maintenance",
    "pricing.maintenance.price": "400 SEK/month",
    "pricing.maintenance.desc": "Ongoing support, updates, and optimization for your website and automation tools.",

    // Contact
    "contact.title1": "Ready to ",
    "contact.title2": "Upgrade",
    "contact.title3": " Your Business?",
    "contact.subtitle": "Book a call or send us an email",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.locationValue": "Gothenburg, Sweden",
    "contact.bookCall": "Book a Call",
    "contact.sendMessage": "Send a Message",

    // Footer
    "footer.description": "We help service businesses get more clients with modern websites and smart automation.",
    "footer.navigation": "Navigation",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.websiteUpgrade": "Website Upgrade",
    "footer.chatbotSetup": "AI Chat Assistant",
    "footer.inquiryAutomation": "Inquiry Automation",
    "footer.bookingIntegration": "Booking Integration",
    "footer.copyright": "© 2025 ChiaraAI Consulting. All rights reserved.",
    "footer.home": "Home",
    "footer.industries": "Industries",
    "footer.pricing": "Pricing",
    "footer.about": "About",

    // NotFound
    "notfound.title": "404",
    "notfound.message": "Oops! Page not found",
    "notfound.link": "Return to Home",
  },
  sv: {
    // Nav
    "nav.home": "Hem",
    "nav.recentwork": "Vårt Arbete",
    "nav.services": "Tjänster",
    "nav.industries": "Branscher",
    "nav.pricing": "Priser",
    "nav.contact": "Kontakt",

    // Recent Work Page
    "recentwork.title": "Vårt Arbete & Demos",
    "recentwork.subtitle": "Liveprojekt och interaktiva demos som visar vad vi bygger för tjänsteföretag.",
    "recentwork.viewproject": "Visa Projekt",
    "recentwork.visitsite": "Besök Hemsidan",
    "recentwork.psych.badge": "Demohemsida",
    "recentwork.psych.title": "Psykologmottagning – Demohemsida",
    "recentwork.psych.desc": "En demo som visar vilken typ av hemsida vi bygger för terapeuter och vårdgivare. Med lugn, professionell design, onlinebokning och en AI-chattassistent som svarar på klientfrågor direkt.",
    "recentwork.shopify.badge": "Liveprojekt",
    "recentwork.shopify.title": "Zoe & Co – Skräddarsydd Shopify-butik",
    "recentwork.shopify.desc": "En live e-handelsbutik vi byggt för Zoe & Co, med skräddarsytt Shopify-tema, optimerade produktsidor och en smidig shoppingupplevelse.",
    "recentwork.voice.badge": "Live Demo",
    "recentwork.voice.title": "AI-röstassistent – Live Demo",
    "recentwork.voice.desc": "Prova vår AI-röstassistent live. Detta är samma teknik vi integrerar i kunders hemsidor för att hjälpa till att svara på kundsamtal och förfrågningar automatiskt.",

    // Hero
    "hero.title1": "Moderna Hemsidor, Bokningssystem & Smart Automation för",
    "hero.title2": "Tjänsteföretag",
    "hero.description": "Vi designar och uppgraderar professionella hemsidor för småföretag och tjänsteleverantörer. Från att bygga en ny hemsida till att designa om en befintlig, hjälper vi företag att göra det enklare för kunder att boka tider, ställa frågor och ta kontakt online. Vi kan lägga till bokningskalendrar, chattassistenter som svarar på vanliga frågor automatiskt och valfria röstassistenter för att hantera kundförfrågningar.",
    "hero.trust": "Gratis Hemsideanalys för Lokala Företag",
    "hero.cta": "Få en Gratis Hemsideanalys",
    "hero.cta2": "Se Våra Tjänster",

    // Home - Recent Work
    "home.recent.title": "Senaste Projekt",
    "home.recent.project.title": "Skräddarsydd Shopify E-handelsbutik",
    "home.recent.project.desc": "En modern webbutik designad med en ren layout, optimerad för mobila enheter och en smidig shoppingupplevelse.",
    "home.recent.project.button": "Visa Projekt",
    "home.recent.project2.title": "Psykologmottagning Hemsida",
    "home.recent.project2.desc": "En lugn, professionell one-page hemsida för en privat psykologmottagning, med välkomnande design, tjänsteöversikt och integrerad chattassistent.",

    // Home - Problem
    "home.problem.title": "Förlorar Din Hemsida Potentiella Kunder?",
    "home.problem.subtitle": "Många småföretags hemsidor missar möjligheter för att kunder inte snabbt kan hitta svar eller kontakta företaget.",
    "home.problem.p1": "Föråldrade hemsidor som inte bygger förtroende",
    "home.problem.p2": "Långsam mobilprestanda",
    "home.problem.p3": "Obesvarade kundfrågor",
    "home.problem.p4": "Missade förfrågningar efter kontorstid",
    "home.problem.p5": "Inga automatiska svar för besökare",
    "home.problem.closing": "Vi hjälper företag lösa dessa problem genom att uppgradera hemsidan och lägga till smart automation.",

    // Home - Services
    "home.services.title": "Våra Tjänster",

    // Home - Pricing
    "home.pricing.title": "Enkla Paket för Småföretag",
    "home.pricing.note": "Slutpris beror på hemsidans storlek och automationskrav.",
    "home.pricing.cta": "Begär en Gratis Hemsideanalys",

    // Home - Industries
    "home.industries.title": "Företag Vi Hjälper",

    // Home - Voice
    "home.voice.badge": "Live Demo",
    "home.voice.title": "AI Röstassistent Demo",
    "home.voice.subtitle": "Vi bygger även röstassistenter som kan svara på kundsamtal, ge information och hjälpa företag att svara på förfrågningar automatiskt.",

    // Home - CTA
    "home.cta.title": "Redo att Förbättra Din Hemsida?",
    "home.cta.subtitle": "Vi erbjuder en gratis hemsideanalys där vi analyserar din nuvarande hemsida och föreslår förbättringar för att hjälpa dig attrahera och konvertera fler kunder.",
    "home.cta.button": "Begär Din Gratis Hemsideanalys",

    // Home - About
    "home.about.title": "Om Chiara AI Consulting",
    "home.about.p1": "På Chiara AI Consulting hjälper vi små tjänsteföretag att förbättra sin närvaro online och svara på kundförfrågningar mer effektivt. Många småföretag har hemsidor som är föråldrade eller som inte gör det enkelt för potentiella kunder att ställa frågor eller begära tjänster. Vi löser detta genom att modernisera hemsidor och lägga till smarta verktyg som chattassistenter och automatiserade förfrågningssystem.",
    "home.about.p2": "Vårt mål är enkelt: hjälpa företag att svara snabbare, fånga fler förfrågningar och skapa en bättre upplevelse för sina kunder. Med bakgrund inom teknik, automation och moderna webbverktyg kombinerar vi webbdesign med praktiska automationslösningar som hjälper företag att arbeta mer effektivt. Oavsett om det handlar om att uppgradera en befintlig hemsida eller lägga till automatiserad kundsupport, fokuserar vi på att bygga lösningar som är enkla, effektiva och anpassade för småföretag.",
    "home.about.v1.title": "Teknisk Expertis",
    "home.about.v1.desc": "Djup erfarenhet inom DevOps, molnarkitektur och AI-automation.",
    "home.about.v2.title": "Resultatfokuserade",
    "home.about.v2.desc": "Vi levererar mätbara förbättringar som gör verklig skillnad.",
    "home.about.v3.title": "Skalbara Lösningar",
    "home.about.v3.desc": "Lösningar som växer med ditt företag, från nystartad till etablerat.",
    "home.about.v4.title": "Löpande Support",
    "home.about.v4.desc": "Pålitlig support och kontinuerlig optimering av dina digitala system.",

    // Services
    "services.title": "Våra Tjänster",
    "services.subtitle": "Vi hjälper tjänsteföretag att modernisera sina hemsidor och automatisera kundförfrågningar med chattassistenter och smarta automationsverktyg.",
    "services.website.title": "Hemsideuppgradering",
    "services.website.desc": "Vi moderniserar föråldrade hemsidor med ren design, mobiloptimering och bättre prestanda.",
    "services.chatbot.title": "AI Chattassistent",
    "services.chatbot.desc": "Lägg till en AI chatbot på din hemsida som svarar på vanliga kundfrågor automatiskt.",
    "services.inquiry.title": "Automatisering av Kundförfrågningar",
    "services.inquiry.desc": "Automatisera svar på hemsidemeddelanden och kontaktförfrågningar så att du aldrig missar potentiella kunder.",
    "services.booking.title": "Bokningsintegration",
    "services.booking.desc": "Låt kunder enkelt begära tider eller konsultationer online.",
    "services.voice.title": "AI-röstassistent",
    "services.voice.desc": "En intelligent röstassistent som svarar på kundsamtal, ger information och hjälper till att hantera förfrågningar automatiskt.",

    "industries.title": "Företag Vi Hjälper",
    "industries.subtitle": "Skräddarsydda lösningar för tjänsteföretag som förlitar sig på kundförfrågningar.",
    "industries.therapists.title": "Terapeuter & Coacher",
    "industries.therapists.desc": "Online-bokning, automatiska intag-formulär och direkta svar på vanliga patientfrågor så att du kan fokusera på dina klienter.",
    "industries.wellness.title": "Hälso och Skönhetskliniker",
    "industries.wellness.desc": "Moderna hemsidor som visar era behandlingar, med chatbottar som hanterar bokningsförfrågningar och svarar på FAQ dygnet runt.",
    "industries.cleaning.title": "Städföretag",
    "industries.cleaning.desc": "Professionella hemsidor med formulär för offertförfrågningar och automatiska uppföljningar som omvandlar förfrågningar till bokade jobb.",
    "industries.local.title": "Lokala Tjänsteföretag",
    "industries.local.desc": "Oavsett bransch, vare sig det är rörmokeri, trädgård eller hemreparationer, bygger vi en hemsida som arbetar lika hårt som du.",
    "industries.consultants.title": "Konsulter",
    "industries.consultants.desc": "Professionell närvaro online med automatisk schemaläggning och kundintag för att effektivisera din konsultverksamhet.",

    // Pricing
    "pricing.title": "Enkla Paket för Småföretag",
    "pricing.subtitle": "Välj paketet som passar ditt företags behov.",
    "pricing.cta": "Kom Igång",
    "pricing.popular": "Mest Populär",
    "pricing.note": "Slutpris beror på hemsidans storlek och automationskrav.",
    "pricing.starter.name": "Hemsideuppgradering",
    "pricing.starter.desc": "Modern omdesign av din befintliga hemsida med förbättrad mobilprestanda och struktur.",
    "pricing.starter.price": "Från 5 000 SEK",
    "pricing.growth.name": "Hemsida + AI Chattassistent",
    "pricing.growth.desc": "Hemsideuppgradering plus en AI chatbot som svarar på vanliga kundfrågor automatiskt.",
    "pricing.growth.price": "Från 7 000 SEK",
    "pricing.premium.name": "Avancerad Automation",
    "pricing.premium.desc": "Hemsideuppgradering med AI-chatbot och valfri AI-röstassistent.",
    "pricing.premium.price": "Från 10 000 SEK",
    "pricing.maintenance.title": "Valfritt Underhåll",
    "pricing.maintenance.price": "400 SEK/månad",
    "pricing.maintenance.desc": "Löpande support, uppdateringar och optimering av din hemsida och automationsverktyg.",

    // Contact
    "contact.title1": "Redo att ",
    "contact.title2": "Uppgradera",
    "contact.title3": " Ditt Företag?",
    "contact.subtitle": "Boka ett samtal eller skicka ett mejl",
    "contact.email": "E-post",
    "contact.phone": "Telefon",
    "contact.location": "Plats",
    "contact.locationValue": "Göteborg, Sverige",
    "contact.bookCall": "Boka ett samtal",
    "contact.sendMessage": "Skicka ett meddelande",

    // Footer
    "footer.description": "Vi hjälper tjänsteföretag att få fler kunder med moderna hemsidor och smart automation.",
    "footer.navigation": "Navigation",
    "footer.services": "Tjänster",
    "footer.contact": "Kontakt",
    "footer.websiteUpgrade": "Hemsideuppgradering",
    "footer.chatbotSetup": "AI Chattassistent",
    "footer.inquiryAutomation": "Förfrågningsautomation",
    "footer.bookingIntegration": "Bokningsintegration",
    "footer.copyright": "© 2025 ChiaraAI Consulting. Alla rättigheter förbehållna.",
    "footer.home": "Hem",
    "footer.industries": "Branscher",
    "footer.pricing": "Priser",
    "footer.about": "Om Oss",

    // NotFound
    "notfound.title": "404",
    "notfound.message": "Hoppsan! Sidan hittades inte",
    "notfound.link": "Tillbaka till startsidan",
  },
};
