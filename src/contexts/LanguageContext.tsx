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
  const [language, setLanguage] = useState<Language>("sv");

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
    "nav.services": "Services",
    "nav.industries": "Industries",
    "nav.pricing": "Pricing",

    // Hero
    "hero.title1": "Modern Websites That Help Service Businesses",
    "hero.title2": "Get More Clients",
    "hero.description": "We upgrade your website and add smart automation so you never miss customer inquiries.",
    "hero.cta": "Get Your Free Website Review",

    // Home - Problem
    "home.problem.title1": "Your Website Could Be",
    "home.problem.title2": "Costing You Clients",
    "home.problem.subtitle": "Many small service businesses lose customers every week — not because of bad service, but because of an outdated online presence.",
    "home.problem.p1": "Outdated websites that don't build trust or convert visitors",
    "home.problem.p2": "Slow or no responses to customer inquiries — leads go cold",
    "home.problem.p3": "Potential clients choose competitors with better online experiences",

    // Home - Services
    "home.services.title1": "What We",
    "home.services.title2": "Do for You",
    "home.services.subtitle": "A better website and smarter systems — so you can focus on your clients, not admin.",

    // Home - Industries
    "home.industries.title1": "Built for",
    "home.industries.title2": "Service Businesses",
    "home.industries.subtitle": "We understand the challenges of running a local service business — our solutions are built specifically for you.",

    // Home - CTA
    "home.cta.title1": "Get a Free",
    "home.cta.title2": "Website Review",
    "home.cta.subtitle": "We'll review your current website and show you exactly how to improve it — no cost, no commitment.",
    "home.cta.point1": "Honest assessment of your site",
    "home.cta.point2": "Actionable improvement tips",
    "home.cta.point3": "Automation opportunities",
    "home.cta.point4": "No obligation whatsoever",
    "home.cta.button": "Request Your Free Review",

    // Services
    "services.title1": "Our ",
    "services.title2": "Services",
    "services.subtitle": "We help service businesses get more clients with a better website and smarter automation.",
    "services.website.title": "Website Upgrade",
    "services.website.desc": "A modern, mobile-friendly website designed to build trust and convert visitors into paying clients.",
    "services.chatbot.title": "Chatbot for Customer Questions",
    "services.chatbot.desc": "An intelligent chatbot that answers common questions 24/7 — so no inquiry goes unanswered.",
    "services.booking.title": "Booking & Contact Automation",
    "services.booking.desc": "Simple systems that let customers book appointments or send inquiries without friction.",

    // Industries
    "industries.title1": "Industries We ",
    "industries.title2": "Serve",
    "industries.subtitle": "Tailored solutions for service businesses that rely on customer inquiries.",
    "industries.therapists.title": "Therapists",
    "industries.therapists.desc": "Online booking, automated intake forms, and instant answers to common patient questions — so you can focus on your clients.",
    "industries.wellness.title": "Wellness Clinics",
    "industries.wellness.desc": "Modern websites that showcase your treatments, with chatbots that handle appointment requests and answer FAQs around the clock.",
    "industries.cleaning.title": "Cleaning Companies",
    "industries.cleaning.desc": "Professional websites with instant quote request forms and automated follow-ups that turn inquiries into booked jobs.",
    "industries.local.title": "Local Service Businesses",
    "industries.local.desc": "Whatever your trade — plumbing, landscaping, or home repair — we build you a website that works as hard as you do.",

    // Pricing
    "pricing.title1": "Our",
    "pricing.title2": " Packages",
    "pricing.subtitle": "Choose the package that fits your business. Every solution is tailored to deliver maximum value.",
    "pricing.cta": "Get Started",
    "pricing.popular": "Most Popular",
    "pricing.outcome": "Outcome",
    "pricing.starter.name": "Starter",
    "pricing.starter.subtitle": "Online Presence",
    "pricing.starter.best": "Best for businesses that need a professional website",
    "pricing.starter.f1": "Professional website (up to 5 pages)",
    "pricing.starter.f2": "Mobile-optimized design",
    "pricing.starter.f3": "Contact form integration",
    "pricing.starter.f4": "Basic SEO setup",
    "pricing.starter.f5": "Google Maps integration",
    "pricing.starter.outcome": "You get a professional online presence that builds trust and captures new leads.",
    "pricing.growth.name": "Growth",
    "pricing.growth.subtitle": "Website + Automation",
    "pricing.growth.best": "Best for businesses that want to automate customer inquiries",
    "pricing.growth.includes": "Includes everything in Starter, plus:",
    "pricing.growth.f1": "AI chatbot for customer questions",
    "pricing.growth.f2": "Automated booking or contact system",
    "pricing.growth.f3": "Email or SMS follow-up automation",
    "pricing.growth.f4": "Advanced SEO optimization",
    "pricing.growth.outcome": "You capture more leads automatically and never miss a customer inquiry.",
    "pricing.premium.name": "Premium",
    "pricing.premium.subtitle": "Full Digital Growth",
    "pricing.premium.best": "Best for businesses that want a complete digital solution",
    "pricing.premium.includes": "Includes everything in Growth, plus:",
    "pricing.premium.f1": "Custom-designed website with advanced features",
    "pricing.premium.f2": "Multi-channel chatbot (website + social media)",
    "pricing.premium.f3": "Facebook & Instagram ad setup",
    "pricing.premium.f4": "Social media content automation",
    "pricing.premium.f5": "Priority support & ongoing optimization",
    "pricing.premium.outcome": "Your business runs a fully automated client acquisition system.",

    // Contact
    "contact.title1": "Ready to ",
    "contact.title2": "Upgrade",
    "contact.title3": " Your Business?",
    "contact.subtitle": "Book a call or send us an email",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.locationValue": "Gothenburg, Sweden",

    // Footer
    "footer.description": "We help service businesses get more clients with modern websites and smart automation.",
    "footer.navigation": "Navigation",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.websiteUpgrade": "Website Upgrade",
    "footer.chatbotSetup": "Chatbot Setup",
    "footer.bookingAutomation": "Booking Automation",
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
    "nav.services": "Tjänster",
    "nav.industries": "Branscher",
    "nav.pricing": "Priser",

    // Hero
    "hero.title1": "Moderna Hemsidor Som Hjälper Tjänsteföretag",
    "hero.title2": "Få Fler Kunder",
    "hero.description": "Vi uppgraderar din hemsida och lägger till smart automation så att du aldrig missar en kundförfrågan.",
    "hero.cta": "Få Din Gratis Hemsideanalys",

    // Home - Problem
    "home.problem.title1": "Din Hemsida Kan",
    "home.problem.title2": "Kosta Dig Kunder",
    "home.problem.subtitle": "Många små tjänsteföretag förlorar kunder varje vecka — inte på grund av dålig service, utan på grund av en föråldrad närvaro online.",
    "home.problem.p1": "Föråldrade hemsidor som inte bygger förtroende eller konverterar besökare",
    "home.problem.p2": "Långsamma eller uteblivna svar på kundförfrågningar — leads kallnar",
    "home.problem.p3": "Potentiella kunder väljer konkurrenter med bättre upplevelse online",

    // Home - Services
    "home.services.title1": "Vad Vi",
    "home.services.title2": "Gör för Dig",
    "home.services.subtitle": "En bättre hemsida och smartare system — så att du kan fokusera på dina kunder, inte administration.",

    // Home - Industries
    "home.industries.title1": "Byggt för",
    "home.industries.title2": "Tjänsteföretag",
    "home.industries.subtitle": "Vi förstår utmaningarna med att driva ett lokalt tjänsteföretag — våra lösningar är byggda specifikt för dig.",

    // Home - CTA
    "home.cta.title1": "Få en Gratis",
    "home.cta.title2": "Hemsideanalys",
    "home.cta.subtitle": "Vi granskar din nuvarande hemsida och visar exakt hur du kan förbättra den — utan kostnad, utan åtaganden.",
    "home.cta.point1": "Ärlig bedömning av din sida",
    "home.cta.point2": "Konkreta förbättringstips",
    "home.cta.point3": "Automatiseringsmöjligheter",
    "home.cta.point4": "Helt utan förpliktelser",
    "home.cta.button": "Begär Din Gratis Analys",

    // Services
    "services.title1": "Våra ",
    "services.title2": "Tjänster",
    "services.subtitle": "Vi hjälper tjänsteföretag att få fler kunder med en bättre hemsida och smartare automation.",
    "services.website.title": "Hemsideuppgradering",
    "services.website.desc": "En modern, mobilanpassad hemsida designad för att bygga förtroende och konvertera besökare till betalande kunder.",
    "services.chatbot.title": "Chatbot för Kundfrågor",
    "services.chatbot.desc": "En intelligent chatbot som svarar på vanliga frågor dygnet runt — så att ingen förfrågan blir obesvarad.",
    "services.booking.title": "Boknings- & Kontaktautomation",
    "services.booking.desc": "Enkla system som låter kunder boka tid eller skicka förfrågningar utan krångel.",

    // Industries
    "industries.title1": "Branscher Vi ",
    "industries.title2": "Betjänar",
    "industries.subtitle": "Skräddarsydda lösningar för tjänsteföretag som förlitar sig på kundförfrågningar.",
    "industries.therapists.title": "Terapeuter",
    "industries.therapists.desc": "Online-bokning, automatiska intag-formulär och direkta svar på vanliga patientfrågor — så du kan fokusera på dina klienter.",
    "industries.wellness.title": "Hälsokliniker",
    "industries.wellness.desc": "Moderna hemsidor som visar era behandlingar, med chatbottar som hanterar bokningsförfrågningar och svarar på FAQ dygnet runt.",
    "industries.cleaning.title": "Städföretag",
    "industries.cleaning.desc": "Professionella hemsidor med formulär för offertförfrågningar och automatiska uppföljningar som omvandlar förfrågningar till bokade jobb.",
    "industries.local.title": "Lokala Tjänsteföretag",
    "industries.local.desc": "Oavsett bransch — rörmokare, trädgård eller hemreparationer — bygger vi en hemsida som arbetar lika hårt som du.",

    // Pricing
    "pricing.title1": "Våra",
    "pricing.title2": " Paket",
    "pricing.subtitle": "Välj paketet som passar ditt företag. Varje lösning skräddarsys för att ge maximalt värde.",
    "pricing.cta": "Kom Igång",
    "pricing.popular": "Mest Populär",
    "pricing.outcome": "Resultat",
    "pricing.starter.name": "Starter",
    "pricing.starter.subtitle": "Närvaro Online",
    "pricing.starter.best": "Bäst för företag som behöver en professionell hemsida",
    "pricing.starter.f1": "Professionell hemsida (upp till 5 sidor)",
    "pricing.starter.f2": "Mobiloptimerad design",
    "pricing.starter.f3": "Kontaktformulär",
    "pricing.starter.f4": "Grundläggande SEO-setup",
    "pricing.starter.f5": "Google Maps-integration",
    "pricing.starter.outcome": "Du får en professionell närvaro online som bygger förtroende och fångar nya leads.",
    "pricing.growth.name": "Tillväxt",
    "pricing.growth.subtitle": "Hemsida + Automation",
    "pricing.growth.best": "Bäst för företag som vill automatisera kundförfrågningar",
    "pricing.growth.includes": "Inkluderar allt i Starter, plus:",
    "pricing.growth.f1": "AI-chatbot för kundfrågor",
    "pricing.growth.f2": "Automatiskt boknings- eller kontaktsystem",
    "pricing.growth.f3": "E-post- eller SMS-uppföljningsautomation",
    "pricing.growth.f4": "Avancerad SEO-optimering",
    "pricing.growth.outcome": "Du fångar fler leads automatiskt och missar aldrig en kundförfrågan.",
    "pricing.premium.name": "Premium",
    "pricing.premium.subtitle": "Full Digital Tillväxt",
    "pricing.premium.best": "Bäst för företag som vill ha en komplett digital lösning",
    "pricing.premium.includes": "Inkluderar allt i Tillväxt, plus:",
    "pricing.premium.f1": "Skräddarsydd hemsida med avancerade funktioner",
    "pricing.premium.f2": "Flerkanals chatbot (hemsida + sociala medier)",
    "pricing.premium.f3": "Facebook & Instagram-annonsering",
    "pricing.premium.f4": "Social media-innehållsautomation",
    "pricing.premium.f5": "Prioriterad support & löpande optimering",
    "pricing.premium.outcome": "Ditt företag kör ett helautomatiserat kundvärvningssystem.",

    // Contact
    "contact.title1": "Redo att ",
    "contact.title2": "Uppgradera",
    "contact.title3": " Ditt Företag?",
    "contact.subtitle": "Boka ett samtal eller skicka ett mejl",
    "contact.email": "E-post",
    "contact.phone": "Telefon",
    "contact.location": "Plats",
    "contact.locationValue": "Göteborg, Sverige",

    // Footer
    "footer.description": "Vi hjälper tjänsteföretag att få fler kunder med moderna hemsidor och smart automation.",
    "footer.navigation": "Navigation",
    "footer.services": "Tjänster",
    "footer.contact": "Kontakt",
    "footer.websiteUpgrade": "Hemsideuppgradering",
    "footer.chatbotSetup": "Chatbot-installation",
    "footer.bookingAutomation": "Bokningsautomation",
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
