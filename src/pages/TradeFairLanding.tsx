import { localBusinessJsonLd } from "@/lib/seoData";
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
import lovableBadge from "@/assets/lovable-certified-expert-badge.png";

const TradeFairLanding = () => {
  const { language } = useLanguage();
  const tr = (en: string, sv: string) => (language === "sv" ? sv : en);
  useScrollFade();

  const capabilities = [
    { n: "01", t: tr("Websites", "Webbplatser"), d: tr("Considered, fast and beautifully typeset sites for companies that care how they are seen.", "Genomtänkta, snabba och vackert typsatta webbplatser för företag som bryr sig om hur de uppfattas.") },
    { n: "02", t: tr("Web Apps & SaaS", "Webbappar & SaaS"), d: tr("Full products with accounts, subscriptions and payments, built to launch and to scale.", "Kompletta produkter med konton, prenumerationer och betalningar, byggda för att lanseras och växa.") },
    { n: "03", t: tr("Business Tools", "Affärsverktyg"), d: tr("Dashboards, booking, forms and integrations that quietly remove manual work.", "Dashboards, bokning, formulär och integrationer som tyst tar bort manuellt arbete.") },
    { n: "04", t: tr("AI Where It Helps", "AI där det hjälper"), d: tr("Practical AI features, only where they genuinely improve the product.", "Praktiska funktioner med AI, bara där de verkligen förbättrar produkten.") },
  ];

  const selectedWork = [
    {
      name: "mother.fm",
      kind: tr("Audio · Tracker · Journal", "Ljud · Tracker · Dagbok"),
      description: tr("A motherhood audio companion offering pep talks in your pocket, with a tracker and journal to support mothers day to day.", "En ljudledd följeslagare för mammor som erbjuder korta pep talks i fickformat, med en tracker och dagbok som stöttar mamman i vardagen."),
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
      kind: tr("Faith and wellness", "Tro och välmående"),
      description: tr("A warm daily companion for women, with devotionals, reflection and personal accounts.", "En varm daglig följeslagare för kvinnor, med andakter, reflektion och personliga konton."),
      href: "https://sherises.online",
      domain: "sherises.online",
      image: sheRisesImage,
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SEOHead title="Web & App Development in Gothenburg | ChiaraAI Consulting" description="Custom websites, web apps and digital products built in Gothenburg for startups and established businesses. Fixed quote, free first consultation." canonicalPath="/" jsonLd={localBusinessJsonLd} />
      <Navigation />
      <main>
        <section className="overflow-hidden px-5 pb-14 pt-28 md:px-8 md:pb-20 md:pt-36">
          <div className="container mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="animate-fade-in-up lg:col-span-6">
              <p className="eyebrow mb-7">{tr("Web & App Studio · Gothenburg · Working Worldwide", "Webbyrå · Göteborg · Kunder i hela världen")}</p>
              <h1 className="text-balance text-5xl text-foreground md:text-7xl">
                {tr("Digital products,", "Digitala produkter,")}{" "}
                <em className="italic text-muted-foreground">{tr("built with care.", "byggda med omsorg.")}</em>
              </h1>
              <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-foreground/75 md:text-lg">
                {tr(
                  "We design and build custom websites, web apps and SaaS products with Stripe payments for founders, startups and established companies. Backed by real DevOps experience, so what we build is fast, secure and ready to scale.",
                  "Vi designar och bygger skräddarsydda webbplatser, webbappar och produkter för SaaS med betalningar via Stripe för grundare, startups och etablerade företag. Med verklig erfarenhet inom DevOps i ryggen blir det vi bygger snabbt, säkert och redo att skala."
                )}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 rounded-none px-8">
                  <Link to="/contact">{tr("Start a project", "Starta ett projekt")} <ArrowRight /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 rounded-none bg-transparent px-8">
                  <a href="#portfolio">{tr("See our work", "Se vårt arbete")}</a>
                </Button>
              </div>
              <div className="mt-9 flex items-center gap-4">
                <img src={lovableBadge} alt="Lovable Certified Expert badge" className="h-auto w-28 shrink-0 md:w-32" loading="eager" />
                <div>
                  <p className="text-sm font-medium text-primary">{tr("Certified Lovable Website & App Expert · SaaS & Stripe payments · DevOps & cloud background", "Certifierad Lovable expert på webb och appar · SaaS & betalningar med Stripe · DevOps och molnbakgrund")}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{tr("Trusted by clients in Sweden and the UK", "Anlitad av kunder i Sverige och Storbritannien")}</p>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl animate-fade-in-up [animation-delay:200ms] lg:col-span-6" aria-hidden="true">
              <div className="rotate-[-2deg] overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
                <div className="flex items-center gap-1.5 border-b border-border bg-secondary px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                  <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                  <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                </div>
                <img src={motherImage} alt="" className="aspect-[16/10] w-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-8 -left-3 w-[38%] rotate-[-6deg] overflow-hidden rounded-xl border border-border bg-card shadow-xl md:-left-8">
                <img src={qrMenyImage} alt="" className="aspect-[4/3] w-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-10 -right-2 w-[24%] rotate-[4deg] overflow-hidden rounded-[1.25rem] border-4 border-primary bg-card shadow-2xl md:-right-6">
                <img src={sheRisesImage} alt="" className="aspect-[9/19] w-full object-cover object-[30%_40%]" />
              </div>
            </div>
          </div>
        </section>

        <section className="fade-in-section border-t border-border px-5 py-16 md:px-8 md:py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-10">
              <p className="eyebrow mb-4">{tr("What we build", "Vad vi bygger")}</p>
              <h2 className="text-balance text-4xl md:text-5xl">{tr("From a first website to a full product.", "Från första webbplatsen till en hel produkt.")}</h2>
            </div>
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
              {[
                {
                  t: tr("Websites", "Webbplatser"),
                  d: tr("Fast sites built for mobile that bring in customers.", "Snabba, mobilanpassade webbplatser som tar in kunder."),
                },
                {
                  t: tr("Web apps & booking systems", "Webbappar & bokningssystem"),
                  d: tr("Client portals, bookings, dashboards.", "Kundportaler, bokningar, dashboards."),
                },
                {
                  t: tr("SaaS products", "Produkter för SaaS"),
                  d: tr("User accounts, subscriptions and payments with Stripe, support for several currencies, admin panels.", "Användarkonton, prenumerationer och betalningar med Stripe, stöd för flera valutor, adminpaneler."),
                },
                {
                  t: tr("Business tools", "Affärsverktyg"),
                  d: tr("Inventory, staff hours and time tracking that replace messy spreadsheets.", "Lager, arbetstider och tidsregistrering som ersätter röriga kalkylblad."),
                },
              ].map((item) => (
                <div key={item.t} className="bg-background p-8 transition-colors duration-300 hover:bg-secondary md:p-10">
                  <h3 className="mb-3 text-2xl">{item.t}</h3>
                  <p className="font-light leading-relaxed text-foreground/75">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="fade-in-section bg-secondary px-5 py-16 md:px-8 md:py-20">
          <div className="container mx-auto max-w-6xl">
            <p className="eyebrow mb-4">{tr("Built on solid foundations", "Byggt på stadig grund")}</p>
            <p className="max-w-3xl text-lg font-light leading-relaxed text-foreground/80">
              {tr(
                "Before building products, our founder worked in DevOps, with CI/CD pipelines, Kubernetes, monitoring and secure cloud infrastructure. That means your product isn't just beautiful; it's reliable, secure and built to grow.",
                "Innan vi började bygga produkter arbetade vår grundare med DevOps, med pipelines för CI/CD, Kubernetes, övervakning och säker molninfrastruktur. Det betyder att din produkt inte bara ser bra ut; den är pålitlig, säker och byggd för att växa."
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Lovable", "React", "Supabase", "Stripe", "Cloudflare", "GitHub Actions", "Kubernetes"].map((tag) => (
                <span key={tag} className="rounded-full border border-border bg-background px-4 py-1.5 text-[13px] font-medium tracking-wide text-foreground/70">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="fade-in-section scroll-mt-24 px-5 pb-24 pt-12 md:px-8 md:pb-32 md:pt-14">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12 flex items-end justify-between border-t border-border pt-10">
              <div>
                <h2 className="text-4xl md:text-6xl">{tr("Portfolio", "Portfolio")}</h2>
              </div>
              <Link to="/recent-work" className="story-link hidden items-center gap-2 pb-1 text-sm sm:inline-flex">{tr("All projects", "Alla projekt")} <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="grid gap-14 md:gap-10">
              {selectedWork.map((project) => (
                <article
                  key={project.name}
                  className="group grid items-center gap-10 md:grid-cols-12 md:gap-16"
                >
                  <div className="md:col-span-7">
                    <ProjectBrowser src={project.image} alt={`${project.name} homepage`} href={project.href} domain={project.domain} priority={project.featured} />
                  </div>
                  <div className="md:col-span-5">
                    <p className="eyebrow mb-2">{project.kind}</p>
                    <h3 className={project.featured ? "text-5xl md:text-6xl" : "text-4xl md:text-5xl"}>{project.name}</h3>
                    <p className="mt-5 max-w-lg font-light leading-relaxed text-foreground/75">{project.description}</p>
                    <a href={project.href} target="_blank" rel="noopener noreferrer" className="story-link mt-7 inline-flex items-center gap-2 pb-1 text-sm font-medium">
                      {tr("Visit " + project.domain, "Besök " + project.domain)} <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
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
                  <span className="text-[13px] font-semibold tracking-[0.12em] text-accent">{capability.n}</span>
                  <h3 className="mb-3 mt-3 text-3xl transition-transform duration-300 group-hover:translate-x-1">{capability.t}</h3>
                  <p className="max-w-md font-light leading-relaxed text-primary-foreground/70">{capability.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="fade-in-section border-y border-border px-5 py-12 md:px-8 md:py-16">
          <div className="container mx-auto grid max-w-6xl grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              { value: "3", label: tr("Live products", "Liveprodukter") },
              { value: "2", label: tr("Demos ready for clients", "Kundklara demos") },
              { value: "EN + SV", label: tr("Bilingual builds", "Tvåspråkiga byggen") },
            ].map((stat) => (
              <div key={stat.label} className="px-6 py-7 text-center sm:py-3">
                <p className="font-serif text-4xl text-foreground md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">{stat.label}</p>
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