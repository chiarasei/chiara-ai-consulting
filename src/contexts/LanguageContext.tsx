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
    "recentwork.subtitle": "Real projects and live demos showing how we help service businesses get more bookings.",
    "recentwork.viewproject": "View Project",
    "recentwork.visitsite": "Visit Live Site",
    "recentwork.psych.badge": "Demo Website",
    "recentwork.psych.title": "Psychology Practice – Demo Website",
    "recentwork.psych.desc": "A demo showing the kind of website we build for therapists and healthcare providers. Includes a calm, professional design, online booking, and an AI chat assistant that answers patient questions instantly.",
    "recentwork.shopify.badge": "Live Project",
    "recentwork.shopify.title": "Zoe & Co – Custom Shopify Store",
    "recentwork.shopify.desc": "A live e-commerce store we built for Zoe & Co with a custom Shopify theme, optimized product pages, and a smooth checkout experience.",
    "recentwork.voice.badge": "Live Demo",
    "recentwork.voice.title": "AI Voice Assistant – Live Demo",
    "recentwork.voice.desc": "Try our AI voice assistant live. This is the same technology we add to client websites to answer customer calls automatically.",

    // Hero
    "hero.title1": "Stop Losing Customers.",
    "hero.title2": "Start Getting Bookings.",
    "hero.description": "Most small businesses miss calls, lose leads, and waste hours on repetitive questions. We fix that with a modern website, AI chat assistant, and automated booking, so every customer gets a fast response, even at 2 AM.",
    "hero.badge": "Built for Service Businesses",
    "hero.trust": "Free Website Review for Local Businesses",
    "hero.cta": "Book a Free Demo",
    "hero.cta2": "See How It Works",

    // Home - Problem
    "home.problem.title": "Right Now, You're Losing Customers",
    "home.problem.subtitle": "While you're busy working, potential customers are reaching out, and leaving when no one answers.",
    "home.problem.p1": "A customer calls while you're with a client. They hang up and call your competitor.",
    "home.problem.p2": "Someone visits your website at 9 PM. No chat, no booking option. They leave.",
    "home.problem.p3": "An inquiry sits in your inbox for 2 days. By then, they've already booked elsewhere.",
    "home.problem.p4": "You spend your evenings replying to the same questions over and over.",
    "home.problem.p5": "Your website looks outdated. Customers don't trust it enough to reach out.",
    "home.problem.closing": "Every missed message is money left on the table. Let's fix that.",

    // Home - Solution
    "home.solution.title": "We Make Sure You Never Miss Another Customer",
    "home.solution.subtitle": "We set up your business with a modern website, an AI assistant that answers questions instantly, and a booking system that works 24/7. You focus on your work. We handle the rest.",
    "home.solution.s1.title": "Modern Website",
    "home.solution.s1.desc": "A clean, professional site that builds trust and makes it easy for customers to take action.",
    "home.solution.s2.title": "AI Chat Assistant",
    "home.solution.s2.desc": "Answers customer questions instantly, captures leads, and guides visitors to book, day or night.",
    "home.solution.s3.title": "Automated Booking",
    "home.solution.s3.desc": "Customers book directly on your site. No phone tag, no back-and-forth emails.",

    // Home - Benefits
    "home.benefits.title": "What Changes When You Work With Us",
    "home.benefits.b1.title": "More Bookings",
    "home.benefits.b1.desc": "Customers can schedule appointments 24/7 without waiting for a callback.",
    "home.benefits.b2.title": "Faster Response Time",
    "home.benefits.b2.desc": "AI responds in seconds, not hours. No customer left waiting.",
    "home.benefits.b3.title": "Less Repetitive Work",
    "home.benefits.b3.desc": "Stop answering the same questions manually. Let automation handle it.",
    "home.benefits.b4.title": "A Website That Actually Converts",
    "home.benefits.b4.desc": "Not just a pretty page, but a tool that turns visitors into paying customers.",

    // Home - How It Works
    "home.howitworks.title": "How It Works",
    "home.howitworks.subtitle": "Three simple steps to start getting more bookings.",
    "home.howitworks.step1.title": "Book a Free Demo",
    "home.howitworks.step1.desc": "We'll review your current setup and show you exactly what we can improve.",
    "home.howitworks.step2.title": "We Build Everything",
    "home.howitworks.step2.desc": "Website, chatbot, booking system, all set up and customized for your business in days.",
    "home.howitworks.step3.title": "You Get More Customers",
    "home.howitworks.step3.desc": "Your business responds to every inquiry automatically. You focus on doing great work.",

    // Home - CTA
    "home.cta.title": "Ready to Stop Losing Customers?",
    "home.cta.subtitle": "Book a free 15-minute demo. We'll show you exactly how your business can respond faster, book more clients, and save hours every week.",
    "home.cta.button": "Book a Free Demo",

    // Home - Ask
    "home.ask.title": "Ask Us Anything About Your Business",
    "home.ask.subtitle": "Use the chat below to ask questions about how you can get more bookings, improve your website, or automate customer responses.",
    "home.ask.hint": "Click the chat in the corner to get instant answers",

    // Services
    "services.title": "What We Do",
    "services.subtitle": "Everything your business needs to respond faster, get more bookings, and never miss a customer.",
    "services.website.title": "Modern Website",
    "services.website.desc": "A clean, professional website that looks great on mobile and makes it easy for customers to contact you or book an appointment.",
    "services.chatbot.title": "AI Chat Assistant",
    "services.chatbot.desc": "A chat assistant on your website that answers common customer questions instantly, even outside business hours.",
    "services.inquiry.title": "Automated Inquiry Handling",
    "services.inquiry.desc": "Every message and contact request gets an automatic reply so no potential customer slips through the cracks.",
    "services.booking.title": "Online Booking",
    "services.booking.desc": "Let customers book appointments directly on your website without calling or emailing back and forth.",
    "services.voice.title": "AI Voice Assistant",
    "services.voice.desc": "An AI assistant that answers customer calls, provides information, and takes messages when you can't pick up the phone.",

    "industries.title": "Businesses We Help",
    "industries.subtitle": "We work with service businesses that rely on customer bookings and inquiries.",
    "industries.therapists.title": "Therapists & Coaches",
    "industries.therapists.desc": "Let clients book sessions online and get instant answers to common questions, so you can focus on your practice.",
    "industries.wellness.title": "Wellness & Beauty Clinics",
    "industries.wellness.desc": "A professional website that showcases your treatments, with a chat assistant that handles booking requests around the clock.",
    "industries.cleaning.title": "Cleaning Companies",
    "industries.cleaning.desc": "Get more quote requests with a modern website and automatic follow-ups that turn inquiries into booked jobs.",
    "industries.local.title": "Local Service Businesses",
    "industries.local.desc": "Whether you're a plumber, electrician, or gardener, we build a website that brings in customers while you're out on the job.",
    "industries.consultants.title": "Consultants",
    "industries.consultants.desc": "A professional online presence with automated scheduling so new clients can find you and book without friction.",

    // Pricing
    "pricing.title": "Simple Packages for Small Businesses",
    "pricing.subtitle": "Choose the package that fits your needs. No hidden fees.",
    "pricing.cta": "Get Started",
    "pricing.popular": "Most Popular",
    "pricing.note": "Final pricing may vary depending on number of pages, e-commerce needs, and automation complexity.",
    "pricing.delivery": "Delivery time: 3–5 days",
    "pricing.starter.name": "Starter",
    "pricing.starter.price": "2,999 SEK",
    "pricing.starter.tagline": "Simple setup to start getting customers",
    "pricing.starter.choose": "Choose ONE:",
    "pricing.starter.f1": "Booking system (customers can book online)",
    "pricing.starter.f2": "OR Chatbot (answers questions + captures leads)",
    "pricing.starter.result": "Start getting inquiries or bookings without manual work",
    "pricing.growth.name": "Growth",
    "pricing.growth.price": "5,999 SEK",
    "pricing.growth.tagline": "Get more customers and never miss an inquiry",
    "pricing.growth.includes": "",
    "pricing.growth.f1": "Booking system",
    "pricing.growth.f2": "Chatbot",
    "pricing.growth.f3": "Chatbot answers common questions",
    "pricing.growth.f4": "Chatbot collects customer details",
    "pricing.growth.result": "More inquiries, faster responses, more bookings",
    "pricing.premium.name": "Pro",
    "pricing.premium.price": "9,500 – 12,000 SEK",
    "pricing.premium.tagline": "Full solution with custom website",
    "pricing.premium.includes": "Everything in Growth plus:",
    "pricing.premium.f1": "Custom website redesign tailored to your business",
    "pricing.premium.f2": "Modern, clean design (not template-based)",
    "pricing.premium.f3": "Fully integrated booking + chatbot",
    "pricing.premium.result": "A complete system that converts visitors into customers",
    "pricing.maintenance.title": "Monthly Maintenance & Support",
    "pricing.maintenance.price": "300 – 500 SEK / month",
    "pricing.maintenance.subtitle": "Included with all packages to keep everything running smoothly.",
    "pricing.maintenance.f1": "Bot & automation kept running smoothly",
    "pricing.maintenance.f2": "Ongoing technical support",
    "pricing.maintenance.f3": "Security & performance monitoring",
    "pricing.maintenance.f4": "Updates and improvements",

    // Contact
    "contact.title1": "Ready to ",
    "contact.title2": "Get Started",
    "contact.title3": "?",
    "contact.subtitle": "Book a call or send us an email. No commitment required.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.locationValue": "Gothenburg, Sweden",
    "contact.bookCall": "Book a Call",
    "contact.sendMessage": "Send a Message",

    // Footer
    "footer.description": "We help service businesses get more bookings with modern websites and smart automation.",
    "footer.navigation": "Navigation",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.websiteUpgrade": "Modern Website",
    "footer.chatbotSetup": "AI Chat Assistant",
    "footer.inquiryAutomation": "Inquiry Automation",
    "footer.bookingIntegration": "Online Booking",
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
    "recentwork.subtitle": "Riktiga projekt och live-demos som visar hur vi hjälper tjänsteföretag att få fler bokningar.",
    "recentwork.viewproject": "Visa Projekt",
    "recentwork.visitsite": "Besök Hemsidan",
    "recentwork.psych.badge": "Demohemsida",
    "recentwork.psych.title": "Psykologmottagning – Demohemsida",
    "recentwork.psych.desc": "En demo som visar vilken typ av hemsida vi bygger för terapeuter och vårdgivare. Med lugn, professionell design, onlinebokning och en AI-chattassistent som svarar på patientfrågor direkt.",
    "recentwork.shopify.badge": "Liveprojekt",
    "recentwork.shopify.title": "Zoe & Co – Skräddarsydd Shopify-butik",
    "recentwork.shopify.desc": "En live e-handelsbutik vi byggt för Zoe & Co med skräddarsytt tema, optimerade produktsidor och en smidig köpupplevelse.",
    "recentwork.voice.badge": "Live Demo",
    "recentwork.voice.title": "AI-röstassistent – Live Demo",
    "recentwork.voice.desc": "Testa vår AI-röstassistent live. Samma teknik vi lägger till på kunders hemsidor för att svara på kundsamtal automatiskt.",

    // Hero
    "hero.title1": "Få Fler Bokningar och Missa Aldrig en Kund Med",
    "hero.title2": "Smart Automation",
    "hero.description": "Vi hjälper små tjänsteföretag att svara på varje kundförfrågan, även utanför kontorstid. Med en modern hemsida, AI-chattassistent och bokningsintegration kan dina kunder alltid nå dig, ställa frågor och boka tid.",
    "hero.trust": "Gratis Hemsideanalys för Lokala Företag",
    "hero.cta": "Boka en Gratis Demo",
    "hero.cta2": "Se Hur Det Fungerar",

    // Home - Recent Work
    "home.recent.title": "Senaste Projekt",
    "home.recent.project.title": "Skräddarsydd Shopify E-handelsbutik",
    "home.recent.project.desc": "En modern webbutik med ren design, optimerad för mobil och byggd för en smidig kundupplevelse.",
    "home.recent.project.button": "Visa Projekt",
    "home.recent.project2.title": "Psykologmottagning Hemsida",
    "home.recent.project2.desc": "En professionell hemsida för en privatpraktik med onlinebokning och en AI-chattassistent som svarar på patientfrågor automatiskt.",

    // Home - Problem
    "home.problem.title": "Hur Många Kunder Förlorar Du Just Nu?",
    "home.problem.subtitle": "De flesta småföretag tappar potentiella kunder varje vecka för att de inte hinner svara tillräckligt snabbt.",
    "home.problem.p1": "Missade samtal när du är upptagen med en kund",
    "home.problem.p2": "Kunder lämnar din hemsida utan att boka",
    "home.problem.p3": "Frågor förblir obesvarade i timmar eller dagar",
    "home.problem.p4": "Ingen svarar på förfrågningar kvällar och helger",
    "home.problem.p5": "Du lägger för mycket tid på att svara på samma frågor",
    "home.problem.closing": "Varje obesvarad förfrågan är en förlorad bokning. Vi hjälper dig att lösa det.",

    // Home - Services
    "home.services.title": "Vad Vi Gör",

    // Home - Pricing
    "home.pricing.title": "Enkla Paket för Småföretag",
    "home.pricing.note": "Slutpris beror på hemsidans storlek och automationskrav.",
    "home.pricing.cta": "Boka en Gratis Demo",

    // Home - Industries
    "home.industries.title": "Företag Vi Hjälper",

    // Home - Ask
    "home.ask.title": "Fråga Oss Vad Som Helst Om Ditt Företag",
    "home.ask.subtitle": "Använd chatten nedan för att ställa frågor om hur du kan få fler bokningar, förbättra din hemsida eller automatisera kundsvar.",
    "home.ask.hint": "Klicka på chatten i hörnet för snabba svar",

    // Recent Work - Advanced Demo
    "recentwork.advanceddemo.badge": "Avancerad Demo",
    "recentwork.advanceddemo.title": "Avancerad AI-demo",
    "recentwork.advanceddemo.desc": "Utforska hur röst-AI kan hantera kundförfrågningar och guida bokningar automatiskt. Testa själv — prata med assistenten och se hur den hanterar riktiga frågor.",

    // Recent Work - Electrician Demo
    "recentwork.cleaning.badge": "Demo-webbplats",
    "recentwork.cleaning.title": "Göteborg El & Service – Elektriker Demo",
    "recentwork.cleaning.desc": "En demo som visar hur en elfirma kan effektivisera jobbförfrågningar med ett online-bokningssystem, tjänstval och AI-chattbot som hjälper kunder beskriva sina behov och boka besök.",

    // Home - CTA
    "home.cta.title": "Se Hur Det Fungerar för Ditt Företag",
    "home.cta.subtitle": "Boka en gratis 15-minuters demo. Vi visar hur ditt företag kan svara på varje kund, få fler bokningar och spara timmar varje vecka.",
    "home.cta.button": "Boka en Gratis Demo",

    // Home - About
    "home.about.title": "Om Chiara AI Consulting",
    "home.about.p1": "Vi hjälper små tjänsteföretag att sluta tappa kunder på grund av sena svar och missade samtal. Många företag har föråldrade hemsidor som gör det svårt för kunder att få svar eller boka tid. Vi löser det med moderna hemsidor och enkla automationsverktyg som fungerar dygnet runt.",
    "home.about.p2": "Vårt arbetssätt är enkelt: vi ger ditt företag en professionell hemsida med en chattassistent som svarar på kundfrågor direkt, ett bokningssystem där kunder kan boka online, och automation som hanterar förfrågningar även när du är upptagen. Resultatet är fler bokningar, snabbare svar och mindre tid på repetitiva uppgifter.",
    "home.about.v1.title": "Fler Bokningar",
    "home.about.v1.desc": "Kunder kan boka tid dygnet runt utan att ringa eller vänta på svar.",
    "home.about.v2.title": "Snabbare Svar",
    "home.about.v2.desc": "AI-chatten svarar på vanliga frågor direkt, så ingen kund behöver vänta.",
    "home.about.v3.title": "Mindre Manuellt Arbete",
    "home.about.v3.desc": "Automation hanterar rutinförfrågningar så du kan fokusera på ditt riktiga arbete.",
    "home.about.v4.title": "Löpande Support",
    "home.about.v4.desc": "Vi ser till att allt fungerar smidigt med uppdateringar, övervakning och support.",

    // Services
    "services.title": "Vad Vi Gör",
    "services.subtitle": "Allt ditt företag behöver för att svara snabbare, få fler bokningar och aldrig missa en kund.",
    "services.website.title": "Modern Hemsida",
    "services.website.desc": "En ren, professionell hemsida som ser bra ut på mobilen och gör det enkelt för kunder att kontakta dig eller boka tid.",
    "services.chatbot.title": "AI-chattassistent",
    "services.chatbot.desc": "En chattassistent på din hemsida som svarar på vanliga kundfrågor direkt, även utanför kontorstid.",
    "services.inquiry.title": "Automatisk Förfrågningshantering",
    "services.inquiry.desc": "Varje meddelande och kontaktförfrågan får ett automatiskt svar, så ingen potentiell kund faller mellan stolarna.",
    "services.booking.title": "Onlinebokning",
    "services.booking.desc": "Låt kunder boka tid direkt på din hemsida, utan att behöva ringa eller mejla fram och tillbaka.",
    "services.voice.title": "AI-röstassistent",
    "services.voice.desc": "En AI-assistent som svarar på kundsamtal, ger information och tar meddelanden när du inte kan svara i telefon.",

    "industries.title": "Företag Vi Hjälper",
    "industries.subtitle": "Vi arbetar med tjänsteföretag som förlitar sig på kundbokningar och förfrågningar.",
    "industries.therapists.title": "Terapeuter & Coacher",
    "industries.therapists.desc": "Låt klienter boka sessioner online och få direkta svar på vanliga frågor, så du kan fokusera på din praktik.",
    "industries.wellness.title": "Hälso- och Skönhetskliniker",
    "industries.wellness.desc": "En professionell hemsida som visar era behandlingar, med en chattassistent som hanterar bokningsförfrågningar dygnet runt.",
    "industries.cleaning.title": "Städföretag",
    "industries.cleaning.desc": "Få fler offertförfrågningar med en modern hemsida och automatiska uppföljningar som omvandlar förfrågningar till bokade jobb.",
    "industries.local.title": "Lokala Tjänsteföretag",
    "industries.local.desc": "Oavsett om du är rörmokare, elektriker eller trädgårdsmästare, bygger vi en hemsida som tar in kunder medan du är ute på jobb.",
    "industries.consultants.title": "Konsulter",
    "industries.consultants.desc": "En professionell närvaro online med automatisk bokning, så nya kunder kan hitta dig och boka utan krångel.",

    // Pricing
    "pricing.title": "Enkla Paket för Småföretag",
    "pricing.subtitle": "Välj paketet som passar dina behov. Inga dolda avgifter.",
    "pricing.cta": "Kom Igång",
    "pricing.popular": "Mest Populär",
    "pricing.note": "Slutpris kan variera beroende på antal sidor, e-handelsbehov och automationens komplexitet.",
    "pricing.delivery": "Leveranstid: 3–5 dagar",
    "pricing.starter.name": "Starter",
    "pricing.starter.price": "2 999 SEK",
    "pricing.starter.tagline": "Enkel setup för att börja få kunder",
    "pricing.starter.choose": "Välj EN:",
    "pricing.starter.f1": "Bokningssystem (kunder kan boka online)",
    "pricing.starter.f2": "ELLER Chatbot (svarar på frågor + fångar leads)",
    "pricing.starter.result": "Börja få förfrågningar eller bokningar utan manuellt arbete",
    "pricing.growth.name": "Growth",
    "pricing.growth.price": "5 999 SEK",
    "pricing.growth.tagline": "Få fler kunder och missa aldrig en förfrågan",
    "pricing.growth.includes": "",
    "pricing.growth.f1": "Bokningssystem",
    "pricing.growth.f2": "Chatbot",
    "pricing.growth.f3": "Chatbot svarar på vanliga frågor",
    "pricing.growth.f4": "Chatbot samlar kunduppgifter",
    "pricing.growth.result": "Fler förfrågningar, snabbare svar, fler bokningar",
    "pricing.premium.name": "Pro",
    "pricing.premium.price": "9 500 – 12 000 SEK",
    "pricing.premium.tagline": "Komplett lösning med skräddarsydd hemsida",
    "pricing.premium.includes": "Allt i Growth plus:",
    "pricing.premium.f1": "Skräddarsydd hemsida anpassad för ditt företag",
    "pricing.premium.f2": "Modern, ren design (inte mall-baserad)",
    "pricing.premium.f3": "Fullt integrerat bokningssystem + chatbot",
    "pricing.premium.result": "Ett komplett system som omvandlar besökare till kunder",
    "pricing.maintenance.title": "Månatligt Underhåll & Support",
    "pricing.maintenance.price": "300 – 500 SEK / månad",
    "pricing.maintenance.subtitle": "Ingår i alla paket för att hålla allt igång smidigt.",
    "pricing.maintenance.f1": "Bot & automation hålls igång smidigt",
    "pricing.maintenance.f2": "Löpande teknisk support",
    "pricing.maintenance.f3": "Säkerhet & prestandaövervakning",
    "pricing.maintenance.f4": "Uppdateringar och förbättringar",

    // Contact
    "contact.title1": "Redo att ",
    "contact.title2": "Komma Igång",
    "contact.title3": "?",
    "contact.subtitle": "Boka ett samtal eller skicka ett mejl. Helt utan åtagande.",
    "contact.email": "E-post",
    "contact.phone": "Telefon",
    "contact.location": "Plats",
    "contact.locationValue": "Göteborg, Sverige",
    "contact.bookCall": "Boka ett samtal",
    "contact.sendMessage": "Skicka ett meddelande",

    // Footer
    "footer.description": "Vi hjälper tjänsteföretag att få fler bokningar med moderna hemsidor och smart automation.",
    "footer.navigation": "Navigation",
    "footer.services": "Tjänster",
    "footer.contact": "Kontakt",
    "footer.websiteUpgrade": "Modern Hemsida",
    "footer.chatbotSetup": "AI-chattassistent",
    "footer.inquiryAutomation": "Förfrågningsautomation",
    "footer.bookingIntegration": "Onlinebokning",
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
