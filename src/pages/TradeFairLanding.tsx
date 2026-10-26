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
  const { language, lp } = useLanguage();
  const tr = (en: string, sv: string) => (language === "sv" ? sv : en);
  useScrollFade();


  type Project = {
    name: string;
    kind: string;
    description: string;
    href: string;
    domain: string;
    image: string;
    featured?: boolean;
    tags?: string[];
  };

  const selectedWork: Project[] = [
    {
      name: "mother.fm",
      kind: tr("Audio · Tracker · Journal", "Ljud · Tracker · Dagbok"),
      description: tr(
        "An audio companion for mothers, built for a UK founder and launched in October 2026. We built the full subscription platform: Stripe payments that unlock premium audio, a library streamed fast via Cloudflare R2, secure accounts with Supabase, gift codes, a personal tracker and journal, and an analytics dashboard for the founder.",
        "En ljudkompanion för mammor, byggd åt en brittisk grundare och lanserad i oktober 2026. Vi byggde hela prenumerationsplattformen: betalningar med Stripe som låser upp premiumljud, ett bibliotek som strömmar snabbt via Cloudflare R2, säkra konton med Supabase, presentkoder, en personlig tracker och dagbok, samt en analyspanel för grundaren."
      ),
      href: "https://mother.fm",
      domain: "mother.fm",
      image: motherImage,
      tags: ["Stripe", "Supabase", "Cloudflare R2", "Lovable"],
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
      <SEOHead title="Web & App Development in Gothenburg | ChiaraAI Consulting" description="Custom websites, web apps and digital products built in Gothenburg for startups and established businesses. Fixed quote, free first consultation." titleSv="Webbyrå i Göteborg: hemsida och webbapp för företag | ChiaraAI" descriptionSv="Vi bygger hemsidor för företag, webbappar och bokningssystem i Göteborg. Fast pris innan vi börjar och ett gratis första samtal." canonicalPath="/" jsonLd={localBusinessJsonLd} />
      <Navigation />
      <main>
        <section className="overflow-hidden px-5 pb-14 pt-28 md:px-8 md:pb-20 md:pt-36">
          <div className="container mx-auto px-0 sm:px-8 grid max-w-6xl items-center gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="animate-fade-in-up lg:col-span-6">
              <p className="eyebrow mb-7">{tr("Web & App Studio · Gothenburg · Working Worldwide", "Webbyrå · Göteborg · Kunder i hela världen")}</p>
              <h1 className="text-balance text-[2.6rem] leading-[1.08] text-foreground sm:text-5xl md:text-7xl">
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
                <Button asChild size="lg" className="h-12 w-full rounded-none px-8 sm:w-auto">
                  <Link to={lp("/contact")}>{tr("Start a project", "Starta ett projekt")} <ArrowRight /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 w-full rounded-none bg-transparent px-8 sm:w-auto">
                  <a href="#portfolio">{tr("See our work", "Se vårt arbete")}</a>
                </Button>
              </div>
              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <img src={lovableBadge} alt="Lovable Certified Expert badge" width={615} height={176} className="h-auto w-32 shrink-0" loading="eager" decoding="async" />
                <div>
                  <p className="text-sm font-medium leading-relaxed text-primary">{tr("Certified Lovable Website & App Expert · SaaS & Stripe payments · DevOps & cloud background", "Certifierad Lovable expert på webb och appar · SaaS & betalningar med Stripe · DevOps och molnbakgrund")}</p>
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
                <img src={motherImage} alt="" width={1280} height={800} decoding="async" className="aspect-[16/10] w-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-8 left-1 w-[38%] rotate-[-6deg] overflow-hidden rounded-xl border border-border bg-card shadow-xl md:-left-8">
                <img src={qrMenyImage} alt="" loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-10 right-1 w-[24%] rotate-[4deg] overflow-hidden rounded-[1.25rem] border-4 border-primary bg-card shadow-2xl md:-right-6">
                <img src={sheRisesImage} alt="" loading="lazy" decoding="async" className="aspect-[9/19] w-full object-cover object-[30%_40%]" />
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="fade-in-section scroll-mt-24 px-5 pb-16 pt-16 md:px-8 md:pb-20 md:pt-20">
          <div className="container mx-auto px-0 sm:px-8 max-w-6xl">
            <div className="mb-12 flex items-end justify-between border-t border-border pt-10">
              <div>
                <h2 className="text-4xl md:text-6xl">{tr("Portfolio", "Portfolio")}</h2>
              </div>
              <Link to={lp("/recent-work")} className="story-link hidden items-center gap-2 pb-1 text-sm sm:inline-flex">{tr("All projects", "Alla projekt")} <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="grid gap-16 md:gap-10">
              {selectedWork.map((project) => (
                <article
                  key={project.name}
                  className="group grid items-center gap-6 md:grid-cols-12 md:gap-16"
                >
                  <div className="min-w-0 md:col-span-7">
                    <ProjectBrowser src={project.image} alt={`${project.name} homepage`} href={project.href} domain={project.domain} priority={project.featured} />
                  </div>
                  <div className="min-w-0 md:col-span-5">
                    <p className="eyebrow mb-2">{project.kind}</p>
                    <h3 className={project.featured ? "text-4xl sm:text-5xl md:text-6xl" : "text-4xl md:text-5xl"}>{project.name}</h3>
                    <p className="mt-5 max-w-lg text-base font-light leading-relaxed text-foreground/75">{project.description}</p>
                    {project.tags && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-border bg-secondary px-3 py-1 text-[12px] font-medium tracking-wide text-foreground/70">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <a href={project.href} target="_blank" rel="noopener noreferrer" className="story-link mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium">
                      {tr("Visit " + project.domain, "Besök " + project.domain)} <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="fade-in-section border-t border-border px-5 py-16 md:px-8 md:py-20">
          <div className="container mx-auto px-0 sm:px-8 max-w-6xl">
            <div className="mb-10">
              <p className="eyebrow mb-4">{tr("What we build", "Vad vi bygger")}</p>
              <h2 className="text-balance text-4xl md:text-5xl">{tr("From a first website to a full product.", "Från första webbplatsen till en hel produkt.")}</h2>
            </div>
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
              {[
                {
                  t: tr("Websites", "Webbplatser"),
                  d: tr("Fast, mobile friendly websites that make your business look professional and bring in customers. Includes booking calendars, Google Maps, contact forms and WhatsApp buttons.", "Snabba, mobilvänliga webbplatser som får ditt företag att se professionellt ut och tar in kunder. Här ingår bokningskalendrar, Google Maps, kontaktformulär och knappar till WhatsApp."),
                  cls: "",
                },
                {
                  t: tr("Web apps & booking systems", "Webbappar & bokningssystem"),
                  d: tr("Online systems your customers or team log into, like client portals, booking systems and dashboards. Bookings sync with Google Calendar and confirmations go out automatically.", "Onlinesystem som dina kunder eller din personal loggar in i, som kundportaler, bokningssystem och dashboards. Bokningar synkas med Google Kalender och bekräftelser skickas automatiskt."),
                  cls: "",
                },
                {
                  t: tr("SaaS products", "Produkter för SaaS"),
                  d: tr("Complete subscription products, from idea to launch. User accounts, Stripe payments in several currencies, admin panels and automatic emails, all built to scale.", "Kompletta prenumerationsprodukter, från idé till lansering. Användarkonton, betalningar med Stripe i flera valutor, adminpaneler och automatiska mejl, allt byggt för att skala."),
                  cls: "",
                },
                {
                  t: tr("Business tools", "Affärsverktyg"),
                  d: tr("Custom tools that replace messy spreadsheets and paperwork. For example, a staff hours and inventory system where employees log hours from their phone and managers export monthly reports.", "Skreddarsydda verktyg som ersätter röriga kalkylblad och papper. Till exempel ett system för arbetstider och lager där personalen registrerar timmar från sin telefon och chefer exporterar månadsrapporter."),
                  cls: "",
                },
              ].map((item) => (
                <div key={item.t} className={`bg-background p-6 transition-colors duration-300 hover:bg-secondary sm:p-8 md:p-10 ${item.cls}`}>
                  <h3 className="mb-3 text-2xl">{item.t}</h3>
                  <p className="font-light leading-relaxed text-foreground/75">{item.d}</p>
                </div>
              ))}
              <div className="bg-background p-6 transition-colors duration-300 hover:bg-secondary sm:col-span-2 sm:p-8 md:p-10">
                <h3 className="mb-3 text-2xl">{tr("AI features", "Funktioner med AI")}</h3>
                <p className="font-light leading-relaxed text-foreground/75">
                  {tr(
                    "Practical AI built into your website or app, only where it genuinely saves time or helps your customers.",
                    "Praktisk AI inbyggd i din webbplats eller app, bara där den verkligen sparar tid eller hjälper dina kunder."
                  )}
                </p>
                <ul className="mt-5 grid gap-x-10 gap-y-2.5 sm:grid-cols-2">
                  {[
                    tr(
                      "Chat assistants that answer customer questions, summarise information, translate and analyse",
                      "Chatassistenter som svarar på kundfrågor, sammanfattar information, översätter och analyserar"
                    ),
                    tr(
                      "Smart search that finds answers in your own business information, such as prices, services and documents",
                      "Smart sökning som hittar svar i din egen verksamhetsinformation, som priser, tjänster och dokument"
                    ),
                    tr(
                      "Automatic sorting of incoming enquiries, so each one reaches the right person",
                      "Automatisk sortering av inkommande förfrågningar, så att varje förfrågan når rätt person"
                    ),
                    tr(
                      "Voice features: text read aloud, speech turned into text, and spoken conversations with an assistant",
                      "Röstfunktioner: text som läses upp, tal som omvandlas till text och talade samtal med en assistent"
                    ),
                    tr(
                      "Image creation and editing, such as product visuals and marketing images",
                      "Bildskapande och bildredigering, som produktbilder och marknadsföringsbilder"
                    ),
                  ].map((b, i) => (
                    <li key={b} className={`flex gap-2 text-sm leading-relaxed text-muted-foreground ${i === 4 ? "sm:col-span-2" : ""}`}>
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        <section className="fade-in-section bg-secondary px-5 py-16 md:px-8 md:py-20">
          <div className="container mx-auto px-0 sm:px-8 max-w-6xl">
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

        <section className="fade-in-section border-y border-border px-5 py-12 md:px-8 md:py-16">
          <div className="container mx-auto px-0 sm:px-8 grid max-w-6xl grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
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
          <div className="container mx-auto px-0 sm:px-8 grid max-w-6xl gap-10 md:grid-cols-12">
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
          <div className="container mx-auto px-0 sm:px-8 grid max-w-6xl items-end gap-8 bg-secondary p-6 sm:p-10 md:grid-cols-12 md:p-16">
            <h2 className="text-balance text-4xl md:col-span-8 md:text-6xl">{tr("Have something in mind?", "Har du något i tankarna?")} {" "}<em className="italic text-muted-foreground">{tr("Let's talk.", "Låt oss prata.")}</em></h2>
            <div className="md:col-span-4 md:text-right">
              <Button asChild size="lg" className="h-12 w-full rounded-none px-8 sm:w-auto"><Link to={lp("/contact")}>{tr("Get in touch", "Kontakta oss")} <ArrowRight /></Link></Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TradeFairLanding;