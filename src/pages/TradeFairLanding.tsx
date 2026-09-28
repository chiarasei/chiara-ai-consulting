import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollFade } from "@/hooks/use-scroll-fade";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const TradeFairLanding = () => {
  const { language } = useLanguage();
  const tr = (en: string, sv: string) => (language === "sv" ? sv : en);
  useScrollFade();

  const capabilities = [
    { n: "01", t: tr("Websites", "Webbplatser"), d: tr("Considered, fast and beautifully typeset sites for companies that care how they are seen.", "Genomtänkta, snabba och vackert typsatta webbplatser för företag som bryr sig om hur de uppfattas.") },
    { n: "02", t: tr("Web Apps & SaaS", "Webbappar & SaaS"), d: tr("Full products with accounts, subscriptions and payments, built to launch and to scale.", "Kompletta produkter med konton, prenumerationer och betalningar, byggda för att lanseras och växa.") },
    { n: "03", t: tr("Business Tools", "Affärsverktyg"), d: tr("Dashboards, booking, forms and integrations that quietly remove manual work.", "Dashboards, bokning, formulär och integrationer som tyst tar bort manuellt arbete.") },
    { n: "04", t: tr("AI Where It Helps", "AI där det hjälper"), d: tr("Practical AI features, only where they genuinely improve the product.", "Praktiska AI-funktioner, bara där de verkligen förbättrar produkten.") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="ChiaraAI Consulting – Web & App Development"
        description="A web and app development consultancy in Gothenburg building custom websites, SaaS products and business tools for any kind of client."
        keywords="web development, app development, SaaS, custom software, Gothenburg, consultancy"
        canonicalPath="/"
      />
      <Navigation />
      <main>
        {/* HERO */}
        <section className="pt-32 md:pt-44 pb-20 md:pb-28 px-5 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <p className="eyebrow mb-8 animate-fade-in-up">{tr("Web & App Development Studio · Gothenburg", "Studio för webb- och apputveckling · Göteborg")}</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-foreground max-w-5xl text-balance animate-fade-in-up">
              {tr("Digital products,", "Digitala produkter,")}{" "}
              <em className="italic text-muted-foreground">{tr("built with care.", "byggda med omsorg.")}</em>
            </h1>
            <div className="mt-12 grid md:grid-cols-12 gap-8 items-end">
              <p className="md:col-span-6 text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                {tr(
                  "We design and build custom websites, apps and business tools for founders, startups and established companies, from first idea to live product.",
                  "Vi designar och bygger skräddarsydda webbplatser, appar och affärsverktyg för grundare, startups och etablerade företag, från första idé till färdig produkt."
                )}
              </p>
              <div className="md:col-span-6 flex flex-col sm:flex-row gap-3 md:justify-end">
                <Link to="/contact">
                  <Button size="lg" className="rounded-none px-8 h-12 gap-2 w-full sm:w-auto">
                    {tr("Start a project", "Starta ett projekt")} <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/recent-work">
                  <Button size="lg" variant="outline" className="rounded-none px-8 h-12 w-full sm:w-auto bg-transparent">
                    {tr("See our work", "Se vårt arbete")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FLAGSHIP */}
        <section className="fade-in-section px-5 md:px-8 pb-20 md:pb-28">
          <div className="container mx-auto max-w-6xl border-t border-border pt-12">
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-4">
                <p className="eyebrow mb-4">{tr("Featured work", "Utvalt arbete")}</p>
                <h2 className="text-4xl md:text-5xl text-foreground">mother.fm</h2>
              </div>
              <div className="md:col-span-8 space-y-6">
                <p className="text-xl md:text-2xl font-serif leading-snug text-foreground">
                  {tr(
                    "A postnatal wellness platform guiding new mothers through a monthly content journey.",
                    "En plattform för postnatalt välmående som guidar nyblivna mammor genom en månatlig innehållsresa."
                  )}
                </p>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {tr(
                    "Live Stripe payments with monthly and lifetime memberships, secure member-only content access, and fast audio streaming from cloud storage.",
                    "Stripe-betalningar live med månads- och livstidsmedlemskap, säker åtkomst till medlemsinnehåll och snabb ljudströmning från molnlagring."
                  )}
                </p>
                <a href="https://mother.fm" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium border-b border-accent pb-1 hover:text-accent transition-colors">
                  {tr("Visit mother.fm", "Besök mother.fm")} <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="fade-in-section bg-primary text-primary-foreground px-5 md:px-8 py-20 md:py-28">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-12 gap-10 mb-14">
              <p className="eyebrow md:col-span-4">{tr("What we do", "Vad vi gör")}</p>
              <h2 className="md:col-span-8 text-4xl md:text-6xl text-balance">
                {tr("One studio for the whole build.", "En studio för hela bygget.")}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 border-t border-primary-foreground/15">
              {capabilities.map((c, i) => (
                <div key={c.n} className={`py-10 pr-8 border-b border-primary-foreground/15 ${i % 2 === 0 ? "sm:border-r sm:pr-12" : "sm:pl-12"}`}>
                  <span className="text-xs tracking-[0.2em] text-accent">{c.n}</span>
                  <h3 className="text-3xl mt-3 mb-3">{c.t}</h3>
                  <p className="text-primary-foreground/70 font-light leading-relaxed max-w-md">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section className="fade-in-section px-5 md:px-8 py-20 md:py-28">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-end justify-between mb-10">
              <h2 className="text-4xl md:text-5xl">{tr("Selected work", "Utvalda projekt")}</h2>
              <Link to="/recent-work" className="hidden sm:inline-flex items-center gap-2 text-sm border-b border-foreground pb-1">
                {tr("All projects", "Alla projekt")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="divide-y divide-border border-y border-border">
              {[
                { name: "mother.fm", kind: tr("Membership platform", "Medlemsplattform"), href: "https://mother.fm" },
                { name: "QR-Meny", kind: tr("SaaS product", "SaaS-produkt"), href: "https://qrmeny.online" },
                { name: "OPECON", kind: tr("Business website", "Företagswebbplats"), href: "https://opecon.org" },
              ].map((p) => (
                <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-7">
                  <span className="font-serif text-3xl md:text-4xl group-hover:italic transition-all">{p.name}</span>
                  <span className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="hidden sm:inline">{p.kind}</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:text-accent transition-colors" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="fade-in-section px-5 md:px-8 pb-20 md:pb-28">
          <div className="container mx-auto max-w-6xl grid md:grid-cols-12 gap-10">
            <p className="eyebrow md:col-span-4">{tr("How we work", "Så arbetar vi")}</p>
            <div className="md:col-span-8 grid sm:grid-cols-3 gap-8">
              {[
                { t: tr("Understand", "Förstå"), d: tr("We start with your goals, your users and what success looks like.", "Vi börjar med dina mål, dina användare och hur framgång ser ut.") },
                { t: tr("Design & build", "Design & bygge"), d: tr("Short cycles, working previews and honest progress throughout.", "Korta cykler, fungerande förhandsvisningar och ärliga framsteg.") },
                { t: tr("Launch & grow", "Lansera & växa"), d: tr("We ship, measure and keep improving after go live.", "Vi lanserar, mäter och fortsätter förbättra efter lansering.") },
              ].map((s) => (
                <div key={s.t} className="border-t border-foreground pt-5">
                  <h3 className="text-2xl mb-2">{s.t}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="fade-in-section px-5 md:px-8 pb-24">
          <div className="container mx-auto max-w-6xl bg-secondary p-10 md:p-16 grid md:grid-cols-12 gap-8 items-end">
            <h2 className="md:col-span-8 text-4xl md:text-6xl text-balance">
              {tr("Have something in mind?", "Har du något i tankarna?")}{" "}
              <em className="italic text-muted-foreground">{tr("Let's talk.", "Låt oss prata.")}</em>
            </h2>
            <div className="md:col-span-4 md:text-right">
              <Link to="/contact">
                <Button size="lg" className="rounded-none px-8 h-12 gap-2">
                  {tr("Get in touch", "Kontakta oss")} <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TradeFairLanding;
