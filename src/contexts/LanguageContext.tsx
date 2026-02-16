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
    "nav.bookConsultation": "Book Free Consultation",

    // Hero
    "hero.badge": "AI Automation for Small Businesses",
    "hero.title1": "Automate Your Business",
    "hero.title2": "With AI Solutions",
    "hero.description": "We help hotels, restaurants, clinics, physiotherapists, salons, and all small businesses that receive calls and answer customer questions regularly save time and serve customers better with intelligent AI chatbots and voice agents. From answering questions around the clock to handling bookings and sending reminders, our multilingual solutions work seamlessly in Swedish and English so you can focus on what you do best.",
    "hero.chatButton": "Chat with our AI assistant",

    // About
    "about.title1": "About ",
    "about.title2": " Consulting",
    "about.p1": "ChiaraAI Consulting was founded with a vision to make professional AI automation accessible and affordable for small businesses. We understand the challenges small businesses face – time constraints, limited resources, and the need to compete with larger players.",
    "about.p2": "Our founder has extensive experience in DevOps, cloud architecture, and automation of complex systems. Now we use this expertise to help local businesses grow through advanced AI technology.",
    "about.p3": "We believe in personal service, long-term relationships, and solutions that deliver real results – not just promises.",
    "about.value1.title": "Results Focused",
    "about.value1.desc": "We deliver measurable results that make a real difference to your business.",
    "about.value2.title": "Technical Expertise",
    "about.value2.desc": "Deep experience in DevOps, cloud services, and AI automation.",
    "about.value3.title": "Scalability",
    "about.value3.desc": "Solutions that grow with you – from startup to established business.",
    "about.value4.title": "Quality & Support",
    "about.value4.desc": "Reliable support and continuous optimization of your AI solutions.",

    // Services
    "services.title1": "Professional ",
    "services.title2": "AI Services",
    "services.subtitle": "Smart automation solutions that help you grow and focus on what matters most",
    "services.chatbots.title": "AI Chatbots",
    "services.chatbots.desc": "24/7 intelligent chatbots that handle customer questions, process orders, and provide instant support on your website. Increase conversions while reducing response time.",
    "services.voice.title": "AI Voice Assistants",
    "services.voice.desc": "Human-like voice agents that answer phone calls, manage bookings, take orders, and handle customer inquiries with natural conversation. Never miss a call again, even during busy hours.",
    "services.booking.title": "Automated Booking Systems",
    "services.booking.desc": "Smart scheduling that lets customers book appointments 24/7 through voice, chat, or web. Automatic reminders reduce no-shows by up to 70%, and intelligent calendar management maximizes your availability.",
    "services.communication.title": "Customer Communication",
    "services.communication.desc": "Automated SMS and email campaigns for appointment reminders, order confirmations, follow-ups, and personalized offers. Build stronger customer relationships without manual effort.",
    "services.website.title": "Website Development",
    "services.website.desc": "Professional, fast-loading websites built for conversions. From landing pages to full business sites, we create modern designs optimized for SEO, mobile responsiveness, and user experience that turns visitors into customers.",
    "services.ads.title": "Digital Advertising",
    "services.ads.desc": "Targeted ad campaigns on Facebook, Instagram, and TikTok that reach your ideal customers. We handle strategy, creative, audience targeting, and optimization to maximize your return on ad spend.",
    "services.social.title": "Social Media Automation",
    "services.social.desc": "AI-generated content, scheduled posting, and automated responses to comments and messages. Maintain an active social presence without spending hours online.",
    "services.loyalty.title": "Loyalty & Rewards Programs",
    "services.loyalty.desc": "Automated customer loyalty systems that track visits, offer personalized rewards, and send timely promotions. Turn one-time customers into regulars.",
    "services.workflow.title": "Business Workflow Automation",
    "services.workflow.desc": "Streamline invoicing, inventory tracking, staff scheduling, and administrative tasks. Free up hours each week to focus on growing your business instead of paperwork.",

    // Industries
    "industries.title1": "Industries We ",
    "industries.title2": "Transform",
    "industries.subtitle": "Bringing professional AI automation to businesses across multiple sectors",
    "industries.clinics.title": "Clinics",
    "industries.clinics.desc": "AI voice assistant handles appointment scheduling, answers patient questions about services and availability, and sends automated appointment reminders. Reduce missed appointments and free up reception staff to focus on patient care.",
    "industries.physio.title": "Physiotherapists",
    "industries.physio.desc": "Smart booking system lets patients schedule sessions 24/7 via phone or chat. AI assistant answers common questions about treatments, pricing, and insurance. Automated follow-up reminders for ongoing treatment plans keep patients on track.",
    "industries.restaurants.title": "Restaurants",
    "industries.restaurants.desc": "24/7 voice-powered table booking system that handles reservations, special requests, and modifications. AI assistant answers questions about allergens, ingredients, and daily specials. Reduce no-shows with automated reminders.",
    "industries.hair.title": "Hair Salons",
    "industries.hair.desc": "Voice booking system available after hours. Clients call anytime to book, reschedule, or check availability. Automated appointment reminders reduce no-shows by 70%. Smart loyalty program tracks visits and offers personalized rewards.",
    "industries.beauty.title": "Beauty Salons",
    "industries.beauty.desc": "AI voice assistant helps clients book treatments, explains services, and recommends personalized beauty routines. Automated follow-ups after treatments with care tips. Smart rebooking reminders at optimal intervals.",
    "industries.nail.title": "Nail Salons",
    "industries.nail.desc": "Voice-enabled booking with natural conversation flow. AI shows available slots based on preferred stylist and service type. Image gallery integration for design inspiration. Automated maintenance reminders every 2-3 weeks.",
    "industries.tattoo.title": "Tattoo Studios",
    "industries.tattoo.desc": "AI voice assistant handles initial consultations, explains process and pricing, manages complex multi-session bookings. Portfolio showcase through chatbot. Automated care instructions and healing progress check-ins.",
    "industries.spa.title": "Spa & Wellness",
    "industries.spa.desc": "Voice booking for multiple services and package deals. AI assistant recommends treatment combinations based on client needs. Membership management and automatic renewal reminders. Personalized wellness tips between visits.",
    "industries.hotels.title": "Hotels",
    "industries.hotels.desc": "Multilingual AI voice concierge answers guest questions 24/7. Automated check-in reminders, room service ordering, and local recommendations. Post-stay follow-up for reviews. Handle high call volumes during peak season.",
    "industries.retail.title": "Retail Shops",
    "industries.retail.desc": "AI assistant answers product questions, checks inventory in real-time, and processes phone orders. Automated notifications when requested items are back in stock. Personalized shopping recommendations based on purchase history.",
    "industries.all.title": "All Small Businesses",
    "industries.all.desc": "Whatever your industry, AI voice agents and automation can handle customer communications, reduce admin workload, and increase sales. We design custom solutions tailored to your specific business needs and workflow.",

    // Pricing
    "pricing.title1": "Our",
    "pricing.title2": " Packages",
    "pricing.subtitle": "Choose the package that fits your business. Every solution is tailored to deliver maximum value.",
    "pricing.cta": "Get Started",
    "pricing.popular": "Most Popular",
    "pricing.outcome": "Outcome",
    "pricing.starter.name": "Starter Package",
    "pricing.starter.subtitle": "Foundation",
    "pricing.starter.best": "Best for small businesses starting their digital presence",
    "pricing.starter.f1": "Professional business website (up to 5 pages)",
    "pricing.starter.f2": "Mobile-optimized design",
    "pricing.starter.f3": "Contact form integration",
    "pricing.starter.f4": "Basic SEO setup",
    "pricing.starter.f5": "Google Maps integration",
    "pricing.starter.f6": "1 AI chatbot (basic customer questions)",
    "pricing.starter.outcome": "You get a professional online presence and can capture new customers.",
    "pricing.growth.name": "Growth Package",
    "pricing.growth.subtitle": "Automation & Visibility",
    "pricing.growth.best": "Best for businesses that want more customers and automation",
    "pricing.growth.includes": "Includes everything in Starter, plus:",
    "pricing.growth.f1": "Advanced AI chatbot (booking, FAQs, lead capture)",
    "pricing.growth.f2": "Automated booking system",
    "pricing.growth.f3": "Social media automation (content + scheduling)",
    "pricing.growth.f4": "Facebook or Instagram ad setup",
    "pricing.growth.f5": "Email or SMS automation",
    "pricing.growth.outcome": "You attract more customers and automate daily tasks.",
    "pricing.premium.name": "Premium Package",
    "pricing.premium.subtitle": "Full AI Business Automation",
    "pricing.premium.best": "Best for businesses that want full automation and rapid growth",
    "pricing.premium.includes": "Includes everything in Growth, plus:",
    "pricing.premium.f1": "Custom AI voice assistant (answers calls)",
    "pricing.premium.f2": "Full workflow automation",
    "pricing.premium.f3": "TikTok, Facebook & Instagram ad management",
    "pricing.premium.f4": "Loyalty & rewards system",
    "pricing.premium.f5": "Priority support",
    "pricing.premium.f6": "Custom integrations",
    "pricing.premium.outcome": "Your business runs efficiently with AI handling customer interactions and growth.",

    // Contact
    "contact.title1": "Ready to ",
    "contact.title2": "Transform",
    "contact.title3": " Your Business?",
    "contact.subtitle": "Book a call or send us an email",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.locationValue": "Gothenburg, Sweden",

    // Footer
    "footer.description": "Professional AI automation for small businesses. We help you save time and grow with effective solutions.",
    "footer.navigation": "Navigation",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.aiChatbots": "AI Chatbots",
    "footer.voiceAssistants": "Voice Assistants",
    "footer.bookingSystems": "Booking Systems",
    "footer.marketingAutomation": "Marketing Automation",
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
    "nav.bookConsultation": "Boka Gratis Konsultation",

    // Hero
    "hero.badge": "AI-Automatisering för Småföretag",
    "hero.title1": "Automatisera Ditt Företag",
    "hero.title2": "Med AI-Lösningar",
    "hero.description": "Vi hjälper hotell, restauranger, kliniker, fysioterapeuter, salonger och alla småföretag som tar emot samtal och svarar på kundfrågor regelbundet spara tid och ge bättre kundservice med intelligenta AI-chatbottar och röstassistenter. Från att besvara frågor dygnet runt till att hantera bokningar och skicka påminnelser, våra flerspråkiga lösningar fungerar sömlöst på svenska och engelska så att du kan fokusera på det du gör bäst.",
    "hero.chatButton": "Chatta med vår AI-assistent",

    // About
    "about.title1": "Om ",
    "about.title2": " Consulting",
    "about.p1": "ChiaraAI Consulting grundades med visionen att göra professionell AI-automatisering tillgänglig och prisvärd för småföretag. Vi förstår de utmaningar som småföretag möter – tidsbrist, begränsade resurser och behovet av att konkurrera med större aktörer.",
    "about.p2": "Vår grundare har gedigen erfarenhet av DevOps, molnarkitektur och automatisering av komplexa system. Nu använder vi denna expertis för att hjälpa lokala företag att växa genom avancerad AI-teknologi.",
    "about.p3": "Vi tror på personlig service, långsiktiga relationer och lösningar som levererar verkliga resultat – inte bara löften.",
    "about.value1.title": "Resultatfokuserade",
    "about.value1.desc": "Vi levererar mätbara resultat som gör verklig skillnad för ditt företag.",
    "about.value2.title": "Teknisk Expertis",
    "about.value2.desc": "Djup erfarenhet inom DevOps, molntjänster och AI-automatisering.",
    "about.value3.title": "Skalbarhet",
    "about.value3.desc": "Lösningar som växer med dig – från nystartad till etablerat företag.",
    "about.value4.title": "Kvalitet & Support",
    "about.value4.desc": "Pålitlig support och kontinuerlig optimering av dina AI-lösningar.",

    // Services
    "services.title1": "Professionella ",
    "services.title2": "AI-Tjänster",
    "services.subtitle": "Smarta automationslösningar som hjälper dig växa och fokusera på det viktigaste",
    "services.chatbots.title": "AI-Chatbottar",
    "services.chatbots.desc": "Intelligenta chatbottar som svarar på kundfrågor, hanterar beställningar och ger omedelbar support på din webbplats dygnet runt. Öka konverteringar och minska svarstider.",
    "services.voice.title": "AI-Röstassistenter",
    "services.voice.desc": "Människoliknande röstassistenter som svarar i telefon, hanterar bokningar, tar emot beställningar och besvarar kundfrågor med naturligt samtal. Missa aldrig ett samtal igen, inte ens under rusningstid.",
    "services.booking.title": "Automatiska Bokningssystem",
    "services.booking.desc": "Smart schemaläggning som låter kunder boka tider dygnet runt via röst, chatt eller webb. Automatiska påminnelser minskar uteblivna besök med upp till 70%, och intelligent kalenderhantering maximerar din tillgänglighet.",
    "services.communication.title": "Kundkommunikation",
    "services.communication.desc": "Automatiserade SMS- och e-postkampanjer för bokningspåminnelser, orderbekräftelser, uppföljningar och personliga erbjudanden. Bygg starkare kundrelationer utan manuellt arbete.",
    "services.website.title": "Webbutveckling",
    "services.website.desc": "Professionella, snabbladdade webbplatser byggda för konverteringar. Från landningssidor till kompletta företagssajter skapar vi modern design optimerad för SEO, mobilanpassning och användarupplevelse som förvandlar besökare till kunder.",
    "services.ads.title": "Digital Annonsering",
    "services.ads.desc": "Riktade annonskampanjer på Facebook, Instagram och TikTok som når dina idealkunder. Vi hanterar strategi, kreativt material, målgruppsoptimering och analys för att maximera din avkastning på annonsutgifter.",
    "services.social.title": "Social Media-Automation",
    "services.social.desc": "AI-genererat innehåll, schemalagd publicering och automatiserade svar på kommentarer och meddelanden. Behåll en aktiv närvaro på sociala medier utan att spendera timmar online.",
    "services.loyalty.title": "Lojalitets- & Belöningsprogram",
    "services.loyalty.desc": "Automatiserade kundlojalitetssystem som spårar besök, erbjuder personliga belöningar och skickar kampanjer i rätt tid. Förvandla engångskunder till stamkunder.",
    "services.workflow.title": "Automatisering av Arbetsflöden",
    "services.workflow.desc": "Effektivisera fakturering, lagerhantering, personalschemaläggning och administrativa uppgifter. Frigör timmar varje vecka för att fokusera på att växa ditt företag istället för pappersarbete.",

    // Industries
    "industries.title1": "Branscher Vi ",
    "industries.title2": "Förändrar",
    "industries.subtitle": "Vi tar professionell AI-automatisering till företag inom flera sektorer",
    "industries.clinics.title": "Kliniker",
    "industries.clinics.desc": "AI-röstassistent hanterar tidsbokning, svarar på patientfrågor om tjänster och tillgänglighet, och skickar automatiska bokningspåminnelser. Minska uteblivna besök och frigör receptionspersonal för patientvård.",
    "industries.physio.title": "Fysioterapeuter",
    "industries.physio.desc": "Smart bokningssystem låter patienter boka sessioner dygnet runt via telefon eller chatt. AI-assistent svarar på vanliga frågor om behandlingar, priser och försäkringar. Automatiska uppföljningspåminnelser för pågående behandlingsplaner.",
    "industries.restaurants.title": "Restauranger",
    "industries.restaurants.desc": "Röststyrt bordsbokningssystem dygnet runt som hanterar reservationer, speciella önskemål och ändringar. AI-assistent svarar på frågor om allergener, ingredienser och dagens rätt. Minska uteblivna besök med automatiska påminnelser.",
    "industries.hair.title": "Frisörsalonger",
    "industries.hair.desc": "Röstbokningssystem tillgängligt efter stängningstid. Kunder ringer när som helst för att boka, omboka eller kolla tillgänglighet. Automatiska bokningspåminnelser minskar uteblivna besök med 70%.",
    "industries.beauty.title": "Skönhetssalonger",
    "industries.beauty.desc": "AI-röstassistent hjälper kunder att boka behandlingar, förklarar tjänster och rekommenderar personliga skönhetsrutiner. Automatiska uppföljningar efter behandlingar med tips.",
    "industries.nail.title": "Nagelsalonger",
    "industries.nail.desc": "Röstaktiverad bokning med naturligt samtalsflöde. AI visar lediga tider baserat på önskad stylist och tjänstetyp. Automatiska underhållspåminnelser var 2-3:e vecka.",
    "industries.tattoo.title": "Tatueringsstudior",
    "industries.tattoo.desc": "AI-röstassistent hanterar inledande konsultationer, förklarar process och priser, hanterar komplexa fleressionsbokningar. Portföljvisning via chatbot. Automatiska vårdinstruktioner.",
    "industries.spa.title": "Spa & Wellness",
    "industries.spa.desc": "Röstbokning för flera tjänster och paketlösningar. AI-assistent rekommenderar behandlingskombinationer baserat på kundens behov. Medlemshantering och automatiska förnyelsepåminnelser.",
    "industries.hotels.title": "Hotell",
    "industries.hotels.desc": "Flerspråkig AI-röstconcierge svarar på gästfrågor dygnet runt. Automatiska incheckningspåminnelser, rumsservice och lokala rekommendationer. Hantera hög samtalsvolym under högsäsong.",
    "industries.retail.title": "Butiker",
    "industries.retail.desc": "AI-assistent svarar på produktfrågor, kollar lagersaldo i realtid och hanterar telefonbeställningar. Automatiska notifieringar när efterfrågade varor finns i lager igen.",
    "industries.all.title": "Alla Småföretag",
    "industries.all.desc": "Oavsett bransch kan AI-röstassistenter och automation hantera kundkommunikation, minska administrativt arbete och öka försäljningen. Vi designar skräddarsydda lösningar för just ditt företag.",

    // Pricing
    "pricing.title1": "Våra",
    "pricing.title2": " Paket",
    "pricing.subtitle": "Välj paketet som passar ditt företag. Varje lösning skräddarsys för att ge maximalt värde.",
    "pricing.cta": "Kom Igång",
    "pricing.popular": "Mest Populär",
    "pricing.outcome": "Resultat",
    "pricing.starter.name": "Startpaket",
    "pricing.starter.subtitle": "Grund",
    "pricing.starter.best": "Bäst för småföretag som startar sin digitala närvaro",
    "pricing.starter.f1": "Professionell företagswebbplats (upp till 5 sidor)",
    "pricing.starter.f2": "Mobiloptimerad design",
    "pricing.starter.f3": "Kontaktformulär-integration",
    "pricing.starter.f4": "Grundläggande SEO-setup",
    "pricing.starter.f5": "Google Maps-integration",
    "pricing.starter.f6": "1 AI-chatbot (grundläggande kundfrågor)",
    "pricing.starter.outcome": "Du får en professionell närvaro online och kan fånga nya kunder.",
    "pricing.growth.name": "Tillväxtpaket",
    "pricing.growth.subtitle": "Automation & Synlighet",
    "pricing.growth.best": "Bäst för företag som vill ha fler kunder och automation",
    "pricing.growth.includes": "Inkluderar allt i Startpaketet, plus:",
    "pricing.growth.f1": "Avancerad AI-chatbot (bokning, FAQ, lead capture)",
    "pricing.growth.f2": "Automatiserat bokningssystem",
    "pricing.growth.f3": "Social media-automation (innehåll + schemaläggning)",
    "pricing.growth.f4": "Facebook- eller Instagram-annonsering",
    "pricing.growth.f5": "E-post- eller SMS-automation",
    "pricing.growth.outcome": "Du attraherar fler kunder och automatiserar dagliga uppgifter.",
    "pricing.premium.name": "Premiumpaket",
    "pricing.premium.subtitle": "Full AI-Affärsautomation",
    "pricing.premium.best": "Bäst för företag som vill ha full automation och snabb tillväxt",
    "pricing.premium.includes": "Inkluderar allt i Tillväxtpaketet, plus:",
    "pricing.premium.f1": "Anpassad AI-röstassistent (svarar i telefon)",
    "pricing.premium.f2": "Full arbetsflödesautomation",
    "pricing.premium.f3": "TikTok, Facebook & Instagram-annonshantering",
    "pricing.premium.f4": "Lojalitets- & belöningssystem",
    "pricing.premium.f5": "Prioriterad support",
    "pricing.premium.f6": "Anpassade integrationer",
    "pricing.premium.outcome": "Ditt företag drivs effektivt med AI som hanterar kundinteraktioner och tillväxt.",

    // Contact
    "contact.title1": "Redo att ",
    "contact.title2": "Förvandla",
    "contact.title3": " Ditt Företag?",
    "contact.subtitle": "Boka ett samtal eller skicka ett mejl",
    "contact.email": "E-post",
    "contact.phone": "Telefon",
    "contact.location": "Plats",
    "contact.locationValue": "Göteborg, Sverige",

    // Footer
    "footer.description": "Professionell AI-automatisering för småföretag. Vi hjälper dig spara tid och växa med effektiva lösningar.",
    "footer.navigation": "Navigation",
    "footer.services": "Tjänster",
    "footer.contact": "Kontakt",
    "footer.aiChatbots": "AI-Chatbottar",
    "footer.voiceAssistants": "Röstassistenter",
    "footer.bookingSystems": "Bokningssystem",
    "footer.marketingAutomation": "Marknadsautomation",
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
