import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectBrowser from "@/components/ProjectBrowser";
import { useScrollFade } from "@/hooks/use-scroll-fade";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import motherImage from "@/assets/projects/mother-fm.webp";
import qrMenyImage from "@/assets/projects/qr-meny.webp";
import sheRisesImage from "@/assets/projects/she-rises.webp";

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

  const selectedWork = [
    {
      name: "mother.fm",
      kind: tr("Flagship · Postnatal wellness", "Flaggskepp · Postnatalt välmående"),
      description: tr("A postnatal wellness platform guiding new mothers through a monthly content journey, with live payments, monthly and lifetime memberships, secure member access and fast audio streaming.", "En plattform för postnatalt välmående som guidar nyblivna mammor genom en månatlig innehållsresa, med livebetalningar, månads- och livstidsmedlemskap, säker medlemsåtkomst och snabb ljudströmning."),
      href: "https://mother.fm",
      domain: "mother.fm",
      image: motherImage,
      featured: true,
    },
    {
      name: "QR-Meny",
      kind: tr("Restaurant SaaS", "SaaS för restauranger"),
      description: tr("A bilingual QR menu and ordering platform built for restaurants, bars and cafés.", "En tvåspråkig QR-meny och beställningsplattform för restauranger, barer och kaféer."),
      href: "https://qrmeny.online",
      domain: "qrmeny.online",
      image: qrMenyImage,
    },
    {
      name: "She Rises",
      kind: tr("Faith-based wellness", "Tro och välmående"),
      description: tr("A warm daily companion for women, with devotionals, reflection and personal accounts.", "En varm daglig följeslagare för kvinnor, med andakter, reflektion och personliga konton."),
      href: "https://sherises.online",
      domain: "sherises.online",
      image: sheRisesImage,
    },
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
        <section className="px-5 pb-28 pt-36 md:px-8 md:pb-40 md:pt-52">
          <div className="container mx-auto max-w-6xl">
            <p className="eyebrow mb-8 animate-fade-in-up">{tr("Web & App Development Studio · Gothenburg", "Studio för webb- och apputveckling · Göteborg")}</p>
            <h1 className="max-w-5xl text-balance text-5xl text-foreground animate-fade-in-up md:text-7xl lg:text-8xl">
              {tr("Digital products,", "Digitala produkter,")} {" "}
              <em className="italic text-muted-foreground">{tr("built with care.", "byggda med omsorg.")}</em>
            </h1>
            <div className="mt-14 grid items-end gap-9 md:grid-cols-12 md:mt-20">
              <p className="text-base font-light leading-relaxed text-muted-foreground md:col-span-6 md:text-lg">
                {tr("We design and build custom websites, apps and business tools for founders, startups and established companies, from first idea to live product.", "Vi designar och bygger skräddarsydda webbplatser, appar och affärsverktyg för grundare, startups och etablerade företag, från första idé till färdig produkt.")}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row md:col-span-6 md:justify-end">
                <Button asChild size="lg" className="h-12 rounded-none px-8">
                  <Link to="/contact">{tr("Start a project", "Starta ett projekt")} <ArrowRight /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 rounded-none bg-transparent px-8">
                  <Link to="/recent-work">{tr("See our work", "Se vårt arbete")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="fade-in-section px-5 pb-28 md:px-8 md:pb-40">
          <div className="container mx-auto max-w-6xl border-t border-border pt-14 md:pt-20">
            <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <p className="eyebrow mb-5">{tr("Featured work", "Utvalt arbete")}</p>
                <h2 className="text-5xl text-foreground md:text-6xl">mother.fm</h2>
                <p className="mt-7 font-serif text-2xl leading-snug text-foreground md:text-3xl">
                  {tr("A postnatal wellness platform guiding new mothers through a monthly content journey.", "En plattform för postnatalt välmående som guidar nyblivna mammor genom en månatlig innehållsresa.")}
                </p>
                <p className="mt-5 font-light leading-relaxed text-muted-foreground">
                  {tr("Live payments, monthly and lifetime memberships, secure member access and fast audio streaming.", "Livebetalningar, månads- och livstidsmedlemskap, säker medlemsåtkomst och snabb ljudströmning.")}
                </p>
                <a href="https://mother.fm" target="_blank" rel="noopener noreferrer" className="story-link mt-7 inline-flex items-center gap-2 pb-1 text-sm font-medium">
                  {tr("Visit mother.fm", "Besök mother.fm")} <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <div className="md:col-span-7">
                <ProjectBrowser src={motherImage} alt="mother.fm postnatal wellness platform homepage" href="https://mother.fm" domain="mother.fm" priority />
              </div>
            </div>
          </div>
        </section>

        <section className="fade-in-section bg-[image:var(--gradient-primary)] px-5 py-20 text-primary-foreground md:px-8 md:py-24">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12 grid gap-8 md:grid-cols-12">
              <p className="eyebrow md:col-span-4">{tr("What we do", "Vad vi gör")}</p>
              <h2 className="text-balance text-4xl md:col-span-8 md:text-6xl">{tr("One studio for the whole build.", "En studio för hela bygget.")}</h2>
            </div>
            <div className="grid border-t border-primary-foreground/15 sm:grid-cols-2">
              {capabilities.map((capability, index) => (
                <div key={capability.n} className={`group py-9 pr-8 transition-colors duration-300 hover:bg-primary-foreground/[0.035] sm:px-8 ${index % 2 === 0 ? "sm:border-r sm:border-primary-foreground/15" : ""} border-b border-primary-foreground/15`}>
                  <span className="text-xs tracking-[0.2em] text-accent">{capability.n}</span>
                  <h3 className="mb-3 mt-3 text-3xl transition-transform duration-300 group-hover:translate-x-1">{capability.t}</h3>
                  <p className="max-w-md font-light leading-relaxed text-primary-foreground/70">{capability.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="fade-in-section px-5 py-24 md:px-8 md:py-36">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-14 flex items-end justify-between">
              <div>
                <p className="eyebrow mb-4">{tr("Portfolio", "Portfolio")}</p>
                <h2 className="text-4xl md:text-6xl">{tr("Selected work", "Utvalda projekt")}</h2>
              </div>
              <Link to="/recent-work" className="story-link hidden items-center gap-2 pb-1 text-sm sm:inline-flex">{tr("All projects", "Alla projekt")} <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="grid gap-14 md:grid-cols-2 md:gap-8">
              {selectedWork.map((project) => (
                <article key={project.name} className="group">
                  <ProjectBrowser src={project.image} alt={`${project.name} website homepage`} href={project.href} domain={project.domain} />
                  <div className="mt-6 flex items-start justify-between gap-6">
                    <div>
                      <p className="mb-2 text-xs uppercase tracking-[0.18em] text-accent">{project.kind}</p>
                      <h3 className="text-3xl md:text-4xl">{project.name}</h3>
                      <p className="mt-3 max-w-lg font-light leading-relaxed text-muted-foreground">{project.description}</p>
                    </div>
                    <ArrowUpRight className="mt-8 h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="fade-in-section border-y border-border px-5 py-12 md:px-8 md:py-16">
          <div className="container mx-auto grid max-w-6xl grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              { value: "3", label: tr("Live products", "Liveprodukter") },
              { value: "2", label: tr("Client-ready demos", "Kundklara demos") },
              { value: "EN + SV", label: tr("Bilingual builds", "Tvåspråkiga byggen") },
            ].map((stat) => (
              <div key={stat.label} className="px-6 py-7 text-center sm:py-3">
                <p className="font-serif text-4xl text-foreground md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="fade-in-section px-5 py-20 md:px-8 md:py-24">
          <div className="container mx-auto grid max-w-6xl gap-10 md:grid-cols-12">
            <p className="eyebrow md:col-span-4">{tr("How we work", "Så arbetar vi")}</p>
            <div className="grid gap-8 sm:grid-cols-3 md:col-span-8">
              {[
                { t: tr("Understand", "Förstå"), d: tr("We start with your goals, your users and what success looks like.", "Vi börjar med dina mål, dina användare och hur framgång ser ut.") },
                { t: tr("Design & build", "Design & bygge"), d: tr("Short cycles, working previews and honest progress throughout.", "Korta cykler, fungerande förhandsvisningar och ärliga framsteg.") },
                { t: tr("Launch & grow", "Lansera & växa"), d: tr("We ship, measure and keep improving after go live.", "Vi lanserar, mäter och fortsätter förbättra efter lansering.") },
              ].map((step) => (
                <div key={step.t} className="group border-t border-foreground pt-5 transition-transform duration-300 hover:-translate-y-1">
                  <h3 className="mb-2 text-2xl">{step.t}</h3>
                  <p className="text-sm font-light leading-relaxed text-muted-foreground">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="fade-in-section px-5 pb-24 md:px-8 md:pb-32">
          <div className="container mx-auto grid max-w-6xl items-end gap-8 bg-secondary p-10 md:grid-cols-12 md:p-16">
            <h2 className="text-balance text-4xl md:col-span-8 md:text-6xl">{tr("Have something in mind?", "Har du något i tankarna?")} {" "}<em className="italic text-muted-foreground">{tr("Let's talk.", "Låt oss prata.")}</em></h2>
            <div className="md:col-span-4 md:text-right">
              <Button asChild size="lg" className="h-12 rounded-none px-8"><Link to="/contact">{tr("Get in touch", "Kontakta oss")} <ArrowRight /></Link></Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TradeFairLanding;