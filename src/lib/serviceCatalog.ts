import { Globe, RefreshCw, Wrench, FileText, ShoppingBag, CalendarCheck, Layers, BriefcaseBusiness, Sparkles, ShieldCheck, Server, PenTool } from "lucide-react";

type Service = {
  id: string;
  icon: typeof Globe;
  en: { title: string; description: string };
  sv: { title: string; description: string };
};

export const serviceGroups: { en: string; sv: string; services: Service[] }[] = [
  {
    en: "Websites", sv: "Hemsidor",
    services: [
      { id: "new-website", icon: Globe, en: { title: "New website", description: "A professional website built around your business and your customers. We handle design, development and launch so you can focus on what you do best." }, sv: { title: "Ny hemsida", description: "En professionell hemsida som passar ditt företag och dina kunder. Vi tar hand om design, utveckling och lansering så att du kan fokusera på din verksamhet." } },
      { id: "rebuild-website", icon: RefreshCw, en: { title: "Rebuild my old website", description: "Give your existing website a fresh design and a clearer structure. We keep what works and improve the content, speed and experience on mobile." }, sv: { title: "Gör om min gamla hemsida", description: "Ge din befintliga hemsida en ny design och en tydligare struktur. Vi behåller det som fungerar och förbättrar innehåll, hastighet och upplevelsen i mobilen." } },
      { id: "fix-website", icon: Wrench, en: { title: "Fix a broken website", description: "We investigate errors, broken forms and pages that do not work as they should. Then we fix the underlying problem and check that your site works properly again." }, sv: { title: "Laga en trasig hemsida", description: "Vi undersöker fel, trasiga formulär och sidor som inte fungerar som de ska. Sedan åtgärdar vi orsaken och kontrollerar att hemsidan fungerar igen." } },
      { id: "landing-pages", icon: FileText, en: { title: "Landing pages", description: "A focused page for your campaign, product or new offer. We give visitors a clear reason to get in touch, sign up or buy." }, sv: { title: "Landningssidor", description: "En fokuserad sida för din kampanj, produkt eller ett nytt erbjudande. Vi gör det tydligt för besökaren varför de ska kontakta dig, registrera sig eller köpa." } },
      { id: "online-store", icon: ShoppingBag, en: { title: "Online store", description: "Sell your products through a store that is easy to browse and manage. We set up product pages, secure payments and a smooth checkout." }, sv: { title: "Webbutik", description: "Sälj dina produkter i en webbutik som är enkel att använda och sköta. Vi ordnar produktsidor, säkra betalningar och en smidig kassa." } },
    ],
  },
  {
    en: "Apps and products", sv: "Appar och produkter",
    services: [
      { id: "booking-systems", icon: CalendarCheck, en: { title: "Booking systems", description: "Let customers choose an available time and book online. We connect calendars, confirmations and payments to suit your business." }, sv: { title: "Bokningssystem", description: "Låt kunder välja en ledig tid och boka direkt på nätet. Vi anpassar kalendrar, bekräftelser och betalningar efter din verksamhet." } },
      { id: "web-apps", icon: Layers, en: { title: "Web apps and SaaS", description: "Turn your idea into an online product with accounts, subscriptions and secure payments. We build the experience your users need and the tools you need to manage it." }, sv: { title: "Webbappar och SaaS", description: "Gör din idé till en digital produkt med konton, prenumerationer och säkra betalningar. Vi bygger både upplevelsen för användarna och verktygen du behöver för att sköta tjänsten." } },
      { id: "business-tools", icon: BriefcaseBusiness, en: { title: "Business tools", description: "Replace manual tasks and scattered spreadsheets with tools built around your team. Manage your work, reporting and information in one place." }, sv: { title: "Affärsverktyg", description: "Ersätt manuella uppgifter och utspridda kalkylark med verktyg som passar ditt team. Samla arbete, rapportering och information på ett ställe." } },
      { id: "ai-features", icon: Sparkles, en: { title: "AI features", description: "Practical AI built into your website or app where it genuinely saves time or helps customers. We can add useful search, customer support and automation without making things complicated." }, sv: { title: "AI funktioner", description: "Praktisk AI i din hemsida eller app där den faktiskt sparar tid eller hjälper kunderna. Vi kan lägga till smart sökning, kundsupport och automatisering utan att krångla till det." } },
    ],
  },
  {
    en: "Support", sv: "Support",
    services: [
      { id: "care-plans", icon: ShieldCheck, en: { title: "Care plans and maintenance", description: "Keep your website reliable with ongoing updates and practical support. We help with routine maintenance and small changes as your business evolves." }, sv: { title: "Serviceavtal och underhåll", description: "Håll hemsidan i gott skick med löpande uppdateringar och hjälp när du behöver den. Vi tar hand om underhåll och mindre ändringar när din verksamhet utvecklas." } },
      { id: "domain-hosting-email", icon: Server, en: { title: "Domain, hosting and email setup", description: "Get your domain, hosting and business email connected correctly. We handle the setup and help you understand what you need to keep everything running." }, sv: { title: "Domän, webbhotell och epost", description: "Få din domän, ditt webbhotell och företagets epost att fungera tillsammans. Vi sköter inställningarna och hjälper dig förstå vad som behövs för att allt ska fortsätta fungera." } },
      { id: "logo-design", icon: PenTool, en: { title: "Logo design", description: "A clear, distinctive logo that reflects your business. We prepare versions you can use on your website, social profiles and printed materials." }, sv: { title: "Logotypdesign", description: "En tydlig och personlig logotyp som speglar ditt företag. Vi tar fram versioner för hemsidan, sociala medier och tryckt material." } },
    ],
  },
];

export const existingServiceIds = ["new-website", "web-apps", "business-tools", "booking-systems"];
export const serviceText = (service: Service, language: string) => language === "sv" ? service.sv : service.en;