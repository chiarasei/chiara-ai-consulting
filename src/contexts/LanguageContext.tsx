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
    "hero.title1": "Modern Websites & Smart Automation for",
    "hero.title2": "Service Businesses",
    "hero.description": "We help small businesses upgrade their websites and automate customer inquiries so they never miss a potential client.",
    "hero.cta": "Get a Free Website Review",
    "hero.cta2": "View Our Services",

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
    "home.voice.subtitle": "We also build AI voice assistants that can answer customer calls, provide information, and help route inquiries automatically.",

    // Home - CTA
    "home.cta.title": "Ready to Improve Your Website?",
    "home.cta.subtitle": "We offer a free website review where we analyze your current website and suggest improvements to help attract and convert more clients.",
    "home.cta.button": "Request Your Free Website Review",

    // Services
    "services.title": "Our Services",
    "services.subtitle": "We help service businesses get more clients with a better website and smarter automation.",
    "services.website.title": "Website Upgrade",
    "services.website.desc": "We modernize outdated websites with clean design, mobile optimization, and better performance.",
    "services.chatbot.title": "AI Chat Assistant",
    "services.chatbot.desc": "Add an AI chatbot to your website that answers common customer questions automatically.",
    "services.inquiry.title": "Customer Inquiry Automation",
    "services.inquiry.desc": "Automate responses to website messages and contact requests so you never miss potential customers.",
    "services.booking.title": "Booking Integration",
    "services.booking.desc": "Allow customers to easily request appointments or consultations online.",

    // Industries
    "industries.title": "Businesses We Help",
    "industries.subtitle": "Tailored solutions for service businesses that rely on customer inquiries.",
    "industries.therapists.title": "Therapists & Coaches",
    "industries.therapists.desc": "Online booking, automated intake forms, and instant answers to common patient questions — so you can focus on your clients.",
    "industries.wellness.title": "Wellness & Beauty Clinics",
    "industries.wellness.desc": "Modern websites that showcase your treatments, with chatbots that handle appointment requests and answer FAQs around the clock.",
    "industries.cleaning.title": "Cleaning Companies",
    "industries.cleaning.desc": "Professional websites with instant quote request forms and automated follow-ups that turn inquiries into booked jobs.",
    "industries.local.title": "Local Service Businesses",
    "industries.local.desc": "Whatever your trade — plumbing, landscaping, or home repair — we build you a website that works as hard as you do.",
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
    "nav.services": "Tjänster",
    "nav.industries": "Branscher",
    "nav.pricing": "Priser",

    // Hero
    "hero.title1": "Moderna Hemsidor & Smart Automation för",
    "hero.title2": "Tjänsteföretag",
    "hero.description": "Vi hjälper småföretag att uppgradera sina hemsidor och automatisera kundförfrågningar så att de aldrig missar en potentiell kund.",
    "hero.cta": "Få en Gratis Hemsideanalys",
    "hero.cta2": "Se Våra Tjänster",

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
    "home.voice.title": "AI-Röstassistent Demo",
    "home.voice.subtitle": "Vi bygger även AI-röstassistenter som kan svara på kundsamtal, ge information och hjälpa till att dirigera förfrågningar automatiskt.",

    // Home - CTA
    "home.cta.title": "Redo att Förbättra Din Hemsida?",
    "home.cta.subtitle": "Vi erbjuder en gratis hemsideanalys där vi analyserar din nuvarande hemsida och föreslår förbättringar för att hjälpa dig attrahera och konvertera fler kunder.",
    "home.cta.button": "Begär Din Gratis Hemsideanalys",

    // Services
    "services.title": "Våra Tjänster",
    "services.subtitle": "Vi hjälper tjänsteföretag att få fler kunder med en bättre hemsida och smartare automation.",
    "services.website.title": "Hemsideuppgradering",
    "services.website.desc": "Vi moderniserar föråldrade hemsidor med ren design, mobiloptimering och bättre prestanda.",
    "services.chatbot.title": "AI-Chattassistent",
    "services.chatbot.desc": "Lägg till en AI-chatbot på din hemsida som svarar på vanliga kundfrågor automatiskt.",
    "services.inquiry.title": "Automatisering av Kundförfrågningar",
    "services.inquiry.desc": "Automatisera svar på hemsidemeddelanden och kontaktförfrågningar så att du aldrig missar potentiella kunder.",
    "services.booking.title": "Bokningsintegration",
    "services.booking.desc": "Låt kunder enkelt begära tider eller konsultationer online.",

    // Industries
    "industries.title": "Företag Vi Hjälper",
    "industries.subtitle": "Skräddarsydda lösningar för tjänsteföretag som förlitar sig på kundförfrågningar.",
    "industries.therapists.title": "Terapeuter & Coacher",
    "industries.therapists.desc": "Online-bokning, automatiska intag-formulär och direkta svar på vanliga patientfrågor — så du kan fokusera på dina klienter.",
    "industries.wellness.title": "Hälso- & Skönhetskliniker",
    "industries.wellness.desc": "Moderna hemsidor som visar era behandlingar, med chatbottar som hanterar bokningsförfrågningar och svarar på FAQ dygnet runt.",
    "industries.cleaning.title": "Städföretag",
    "industries.cleaning.desc": "Professionella hemsidor med formulär för offertförfrågningar och automatiska uppföljningar som omvandlar förfrågningar till bokade jobb.",
    "industries.local.title": "Lokala Tjänsteföretag",
    "industries.local.desc": "Oavsett bransch — rörmokare, trädgård eller hemreparationer — bygger vi en hemsida som arbetar lika hårt som du.",
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
    "pricing.growth.name": "Hemsida + AI-Chattassistent",
    "pricing.growth.desc": "Hemsideuppgradering plus en AI-chatbot som svarar på vanliga kundfrågor automatiskt.",
    "pricing.growth.price": "Från 7 000 SEK",
    "pricing.premium.name": "Avancerad Automation",
    "pricing.premium.desc": "Hemsideuppgradering med AI-chatbot och valfri AI-röstassistent-automation.",
    "pricing.premium.price": "Från 10 000 SEK",

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
    "footer.chatbotSetup": "AI-Chattassistent",
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
