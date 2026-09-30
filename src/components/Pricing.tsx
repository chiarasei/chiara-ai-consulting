import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import lovableBadge from "@/assets/lovable-certified-expert-badge.png.asset.json";

const Pricing = () => {
  const { language } = useLanguage();
  const sv = language === "sv";
  const L = (en: string, s: string) => (sv ? s : en);

  const plans = [
    {
      key: "website",
      name: L("Website", "Webbplats"),
      desc: L("A professional website that makes your business look its best.", "En professionell webbplats som får ditt företag att synas från sin bästa sida."),
      price: L("from 14,900 kr", "från 14 900 kr"),
      timeline: L("2–3 weeks", "2–3 veckor"),
      label: L("Includes", "Ingår"),
      features: [
        L("Custom design (not a template)", "Egen design (ingen mall)"),
        L("Up to 5 pages", "Upp till 5 sidor"),
        L("Mobile-optimised and fast", "Mobilanpassad och snabb"),
        L("Basic SEO so customers can find you", "Grundläggande SEO så att kunder hittar dig"),
        L("Contact form", "Kontaktformulär"),
        L("Online booking synced with Google Calendar", "Onlinebokning synkad med Google Kalender"),
        L("Domain and hosting setup in your own accounts", "Domän och hosting i dina egna konton"),
        L("Launch support", "Stöd vid lansering"),
      ],
      cta: L("Start a project", "Starta ett projekt"),
      highlighted: false,
      order: "order-2 md:order-1",
    },
    {
      key: "webapp",
      name: L("Web App", "Webbapp"),
      desc: L("Turn your idea into a working product people can use.", "Gör din idé till en fungerande produkt som människor kan använda."),
      price: L("from 49,900 kr", "från 49 900 kr"),
      timeline: L("4–8 weeks", "4–8 veckor"),
      label: L("Can include", "Kan inkludera"),
      features: [
        L("User accounts and login", "Användarkonton och inloggning"),
        L("Database and admin panel", "Databas och adminpanel"),
        L("Stripe payments and subscriptions", "Stripe betalningar och prenumerationer"),
        L("Gift codes and discount codes", "Presentkoder och rabattkoder"),
        L("Audio and video library", "Ljud och videobibliotek"),
        L("File and media storage (e.g. Cloudflare)", "Fil och medialagring (t.ex. Cloudflare)"),
        L("Analytics dashboard", "Statistikpanel"),
        L("Hosting and infrastructure setup in your own accounts", "Hosting och infrastruktur i dina egna konton"),
        L("Built to launch and grow", "Byggd för att lanseras och växa"),
      ],
      cta: L("Book a free call", "Boka ett gratis samtal"),
      highlighted: true,
      order: "order-1 md:order-2",
    },
    {
      key: "custom",
      name: L("Custom Product", "Skräddarsydd produkt"),
      desc: L("For larger platforms, mobile apps and complex systems.", "För större plattformar, mobilappar och komplexa system."),
      price: L("Custom quote", "Offert"),
      timeline: L("Agreed after consultation", "Bestäms efter konsultation"),
      label: L("Includes", "Ingår"),
      features: [
        L("Mobile apps", "Mobilappar"),
        L("Platforms and marketplaces", "Plattformar och marknadsplatser"),
        L("Integrations with existing systems", "Integrationer med befintliga system"),
        L("Ongoing development", "Löpande utveckling"),
      ],
      cta: L("Get a quote", "Få en offert"),
      highlighted: false,
      order: "order-3",
    },
  ];

  return (
    <section id="pricing" className="py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-12 md:mb-14">
          <p className="eyebrow">{L("Pricing", "Priser")}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground text-balance">
            {L("Clear prices, no surprises", "Tydliga priser, inga överraskningar")}
          </h2>
          <p className="text-base md:text-lg text-foreground/75 max-w-2xl mx-auto">
            {L(
              "Every project starts with a free consultation. You get a fixed quote before any work begins.",
              "Varje projekt börjar med en kostnadsfri konsultation. Du får en fast offert innan arbetet börjar."
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 md:items-stretch">
          {plans.map((p) => (
            <div
              key={p.key}
              className={`${p.order} relative rounded-lg p-7 md:p-8 lg:p-10 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                p.highlighted
                  ? "bg-primary text-primary-foreground shadow-medium"
                  : "bg-card text-card-foreground border border-border shadow-soft"
              }`}
            >
              {p.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-accent text-accent-foreground text-[13px] font-semibold tracking-[0.08em] uppercase px-4 py-1 rounded-full">
                  {L("Most popular", "Mest populär")}
                </span>
              )}
              <h3 className="text-3xl mb-2">{p.name}</h3>
              <p className={`text-sm leading-relaxed mb-6 ${p.highlighted ? "text-primary-foreground/80" : "text-foreground/70"}`}>
                {p.desc}
              </p>
              <p className="text-3xl lg:text-4xl font-medium whitespace-nowrap tracking-tight">{p.price}</p>
              <p className={`text-sm mt-1 mb-6 ${p.highlighted ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                {p.timeline}
              </p>
              <div className={`h-px mb-6 ${p.highlighted ? "bg-primary-foreground/15" : "bg-border"}`} />
              <p className={`text-[13px] font-semibold uppercase tracking-[0.12em] mb-4 ${p.highlighted ? "text-accent" : "text-[hsl(39_49%_36%)]"}`}>
                {p.label}
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm leading-snug">
                    <Check size={16} className={`mt-0.5 flex-shrink-0 ${p.highlighted ? "text-accent" : "text-[hsl(var(--brass))]"}`} />
                    <span className={p.highlighted ? "text-primary-foreground/90" : "text-foreground/80"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={`w-full h-12 gap-2 font-semibold ${
                  p.highlighted
                    ? "bg-background text-primary hover:bg-background/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                <Link to="/contact">
                  {p.cta}
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-border bg-card p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-2xl md:text-3xl mb-2">
              {L("Care plan – 500 kr/mån", "Serviceavtal – 500 kr/mån")}
            </h3>
            <p className="text-sm text-foreground/75 max-w-2xl">
              {L(
                "Hosting, security updates, backups and small changes every month, so your website or app keeps running smoothly.",
                "Hosting, säkerhetsuppdateringar, backup och mindre ändringar varje månad, så att din webbplats eller app fortsätter fungera smidigt."
              )}
            </p>
          </div>
          <Link to="/contact" className="text-sm font-semibold text-[hsl(39_49%_36%)] hover:underline whitespace-nowrap">
            {L("Ask about care plans →", "Fråga om serviceavtal →")}
          </Link>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-6 max-w-3xl mx-auto leading-relaxed">
          {L(
            "All prices exkl. moms · Fixed quote before we start · 50% at start, 50% at launch · Hosting and storage run on the client's own accounts or are included in a care plan · Support without a care plan: 700 kr/h",
            "Alla priser exkl. moms · Fast offert innan vi börjar · 50% vid start, 50% vid lansering · Hosting och lagring körs på kundens egna konton eller ingår i ett serviceavtal · Support utan serviceavtal: 700 kr/tim"
          )}
        </p>

        <div className="mt-10 flex justify-center">
          <img
            src={lovableBadge.url}
            alt="Lovable Certified Expert Website Builder 2026"
            width={150}
            height={68}
            loading="lazy"
            className="w-[150px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
