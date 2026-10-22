import { Globe, Bot, MessageSquare, CalendarCheck } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

type Card = { icon: React.ReactElement; title: string; description: string; example?: string; bullets: string[] };
type ServiceContent = { cards: Card[]; cta: string; ctaLink: string };

const content: Record<string, ServiceContent> = {
  en: {
    cards: [
      {
        icon: <Globe />,
        title: "Modern Website",
        description: "A clean, professional website that looks great on mobile and makes it easy for customers to find you, contact you or book an appointment.",
        bullets: [
          "Booking calendar built in, so customers pick a time that suits them",
          "Google Maps so visitors can find your location in one click",
          "Contact forms, WhatsApp and click to call buttons",
          "Fast loading, SEO basics and ready for Google Business",
          "Swedish and English versions available",
        ],
      },
      {
        icon: <Bot />,
        title: "Web Apps & SaaS",
        description: "Complete online products where your users sign up, log in and pay, from membership platforms and client portals to restaurant ordering systems like our own QR-Meny.",
        bullets: [
          "User accounts and secure login",
          "Subscriptions and one off payments with Stripe, in multiple currencies",
          "Admin panel to manage users, content and orders",
          "Automatic emails, receipts and notifications",
          "Built on a reliable database and ready to grow with you",
        ],
      },
      {
        icon: <MessageSquare />,
        title: "Business Tools",
        description: "Custom tools that replace messy spreadsheets, paper notes and manual follow ups, built around how your team actually works.",
        example: "Example: a staff hours and inventory system. Employees log their working hours from their phone in seconds, sorted by client or job. Managers see everything in one dashboard, track stock and materials, and export monthly reports ready for invoicing or payroll. No more broken Excel sheets.",
        bullets: [
          "Dashboards and reports",
          "Time tracking, stock and inventory",
          "Quote calculators and order forms",
          "Integrations with the tools you already use",
        ],
      },
      {
        icon: <CalendarCheck />,
        title: "Online Booking",
        description: "Let customers book appointments directly on your website, 24/7, without phone calls or emailing back and forth.",
        bullets: [
          "Live calendar showing your available times",
          "Automatic confirmation and reminder emails",
          "Online payment or deposit at booking (optional)",
          "Syncs with Google Calendar",
          "Easy for you to block days, set opening hours and manage bookings",
        ],
      },
    ],
    cta: "Not sure what you need?",
    ctaLink: "Book a free consultation and we'll suggest the simplest solution.",
  },
  sv: {
    cards: [
      {
        icon: <Globe />,
        title: "Modern Hemsida",
        description: "En ren, professionell hemsida som ser bra ut i mobilen och gör det enkelt för kunder att hitta dig, kontakta dig eller boka tid.",
        bullets: [
          "Inbyggd bokningskalender där kunder väljer en tid som passar",
          "Google Maps så att besökare hittar dig med ett klick",
          "Kontaktformulär, WhatsApp och knappar för att ringa direkt",
          "Snabb laddning, grundläggande SEO och redo för Google Business",
          "Svensk och engelsk version finns",
        ],
      },
      {
        icon: <Bot />,
        title: "Webbappar & SaaS",
        description: "Kompletta digitala produkter där dina användare registrerar sig, loggar in och betalar, från medlemsplattformar och kundportaler till beställningssystem för restauranger som vår egen QR-Meny.",
        bullets: [
          "Användarkonton och säker inloggning",
          "Prenumerationer och engångsbetalningar med Stripe, i flera valutor",
          "Adminpanel för användare, innehåll och beställningar",
          "Automatiska mejl, kvitton och notiser",
          "Byggt på en pålitlig databas och redo att växa med dig",
        ],
      },
      {
        icon: <MessageSquare />,
        title: "Affärsverktyg",
        description: "Skräddarsydda verktyg som ersätter röriga kalkylark, papperslappar och manuell uppföljning, byggda efter hur ditt team faktiskt arbetar.",
        example: "Exempel: ett system för arbetstid och lager. Medarbetare rapporterar sina timmar från mobilen på några sekunder, sorterat per kund eller uppdrag. Chefer ser allt i en översikt, håller koll på lager och material och exporterar månadsrapporter klara för fakturering eller lön. Slut på trasiga Excelark.",
        bullets: [
          "Översikter och rapporter",
          "Tidrapportering, lager och inventering",
          "Offertkalkylatorer och beställningsformulär",
          "Kopplingar till verktygen du redan använder",
        ],
      },
      {
        icon: <CalendarCheck />,
        title: "Onlinebokning",
        description: "Låt kunder boka tid direkt på din hemsida, dygnet runt, utan telefonsamtal eller mejl fram och tillbaka.",
        bullets: [
          "Kalender som visar dina lediga tider i realtid",
          "Automatiska bekräftelser och påminnelser via mejl",
          "Betalning eller handpenning vid bokning (valfritt)",
          "Synkas med Google Kalender",
          "Enkelt att blockera dagar, ställa in öppettider och hantera bokningar",
        ],
      },
    ],
    cta: "Osäker på vad du behöver?",
    ctaLink: "Boka en kostnadsfri konsultation så föreslår vi den enklaste lösningen.",
  },
};

// Validate runtime content too: TypeScript alone cannot protect missing translations.
export const normalizeServiceContent = (value: unknown): ServiceContent => {
  const fallback = content.en;
  const candidate = value && typeof value === "object" ? value as Partial<ServiceContent> : {};
  const cards = Array.isArray(candidate.cards) ? candidate.cards : fallback.cards;
  const text = (value: unknown, fallbackText: string) =>
    typeof value === "string" && value.trim() ? value : fallbackText;

  return {
    cta: text(candidate.cta, fallback.cta),
    ctaLink: text(candidate.ctaLink, fallback.ctaLink),
    cards: fallback.cards.map((defaultCard, index) => {
      const card = cards[index] && typeof cards[index] === "object" ? cards[index] : defaultCard;
      return {
        icon: React.isValidElement(card.icon) ? card.icon : defaultCard.icon,
        title: text(card.title, defaultCard.title),
        description: text(card.description, defaultCard.description),
        example: defaultCard.example ? text(card.example, defaultCard.example) : undefined,
        bullets: Array.isArray(card.bullets)
          ? card.bullets.filter((bullet): bullet is string => typeof bullet === "string" && Boolean(bullet.trim()))
          : defaultCard.bullets,
      };
    }),
  };
};

export const getServiceContent = (language: string): ServiceContent => normalizeServiceContent(content[language]);

const Services = () => {
  const { t, language } = useLanguage();
  const c = getServiceContent(language);

  return (
    <section id="services" className="py-12 md:py-20 px-4 md:px-6 bg-muted/50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
            {t("services.title")}
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {c.cards.map((service, index) => (
            <div
              key={index}
              className="group p-5 md:p-7 rounded-xl border border-border bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {React.cloneElement(service.icon, { size: 20 })}
              </div>
              <h3 className="text-sm md:text-base font-bold text-card-foreground mb-2">{service.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              {service.example && (
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed italic">{service.example}</p>
              )}
              <ul className="mt-4 space-y-1.5">
                {service.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-xs text-muted-foreground leading-relaxed">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          {c.cta}{" "}
          <Link to="/contact" className="font-medium text-foreground underline underline-offset-4 hover:text-accent">
            {c.ctaLink}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Services;
