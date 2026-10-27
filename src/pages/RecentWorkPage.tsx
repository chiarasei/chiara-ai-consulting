import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Leaf, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectBrowser from "@/components/ProjectBrowser";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import motherImage from "@/assets/projects/mother-fm.webp";
import qrMenyImage from "@/assets/projects/qr-meny.webp";
import sheRisesImage from "@/assets/projects/she-rises.webp";
import klarvyiImage from "@/assets/projects/klarvyi.webp";

const RecentWorkPage = () => {
  const { t, language } = useLanguage();
  const tr = (en: string, sv: string) => (language === "sv" ? sv : en);

  useEffect(() => window.scrollTo(0, 0), []);

  type LiveProject = {
    name: string;
    badge: string;
    description: string;
    href: string;
    domain: string;
    image: string;
    tags?: string[];
    visitLabel?: string;
  };

  const liveProjects: LiveProject[] = [
    {
      name: "mother.fm",
      badge: tr("Audio · Tracker · Journal", "Ljud · Tracker · Dagbok"),
      description: tr(
        "An audio companion for mothers, built for a UK founder and launched in October 2026. We built the full subscription platform: Stripe payments that unlock premium audio, a library streamed fast via Cloudflare R2, secure accounts with Supabase, gift codes, a personal tracker and journal, and an analytics dashboard for the founder.",
        "En ljudkompanion för mammor, byggd åt en brittisk grundare och lanserad i oktober 2026. Vi byggde hela prenumerationsplattformen: betalningar med Stripe som låser upp premiumljud, ett bibliotek som strömmar snabbt via Cloudflare R2, säkra konton med Supabase, presentkoder, en personlig tracker och dagbok, samt en analyspanel för grundaren."
      ),
      href: "https://mother.fm",
      domain: "mother.fm",
      image: motherImage,
      tags: ["Stripe", "Supabase", "Cloudflare R2", "Lovable"],
    },
    {
      name: "Klarvyi Bilservice",
      badge: tr("Car care · Online booking · Local business", "Bilvård · Onlinebokning · Lokalt företag"),
      description: tr(
        "A website for a car care, workshop and tyre service in Hisings Backa, Gothenburg. Customers see all services with photos and prices, book a time online and get a confirmation by email. Every booking lands straight in the owners' Google Calendar, so they never double book. Includes Google Maps directions, WhatsApp contact and Swedish and English versions.",
        "En hemsida för bilvård, verkstad och däckservice i Hisings Backa, Göteborg. Kunderna ser alla tjänster med bilder och priser, bokar en tid direkt på sidan och får en bekräftelse via mejl. Varje bokning hamnar direkt i ägarnas Google Kalender, så att det aldrig blir dubbelbokat. Med vägbeskrivning via Google Maps, kontakt via WhatsApp och versioner på svenska och engelska."
      ),
      href: "https://klarvyibilservice.se",
      domain: "klarvyibilservice.se",
      image: klarvyiImage,
      tags: ["Lovable", "Supabase", "Google Calendar", "Google Maps"],
      visitLabel: tr("Visit klarvyibilservice.se", "Besök klarvyibilservice.se"),
    },
    {
      name: "QR-Meny",
      badge: tr("SaaS product", "SaaS-produkt"),
      description: tr("A digital menu and ordering platform for restaurants, bars and cafés. Guests scan at the table and browse instantly on their phone.", "En digital meny- och beställningsplattform för restauranger, barer och kaféer. Gäster skannar vid bordet och ser menyn direkt i mobilen."),
      href: "https://qrmeny.online",
      domain: "qrmeny.online",
      image: qrMenyImage,
    },
    {
      name: "She Rises",
      badge: tr("Faith-based wellness app", "App för tro och välmående"),
      description: tr("A warm daily companion for women rebuilding their lives, with devotionals, encouragement, reflection, sign-in and personal accounts.", "En varm daglig följeslagare för kvinnor som bygger upp sina liv, med andakter, uppmuntran, reflektion, inloggning och personliga konton."),
      href: "https://sherises.online",
      domain: "sherises.online",
      image: sheRisesImage,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Portfolio: Websites & Web Apps | ChiaraAI Consulting" description="Websites and web apps we built in Gothenburg, including mother.fm, QR-Meny and She Rises. See our web and app development work." canonicalPath="/recent-work" titleSv="Våra projekt: hemsidor och webbappar | ChiaraAI Göteborg" descriptionSv="Hemsidor och webbappar vi har byggt, bland annat mother.fm, QR-Meny och She Rises. Se vad vår webbyrå i Göteborg kan bygga åt dig." />
      <Navigation />
      <main>
        <section className="px-5 pb-8 pt-36 md:px-8 md:pb-12 md:pt-48">
          <div className="container mx-auto max-w-6xl">
            <p className="eyebrow mb-6">{tr("Selected work", "Utvalda projekt")}</p>
            <h1 className="max-w-4xl text-balance text-5xl text-foreground md:text-7xl">{t("recentwork.title")}</h1>
            <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">{t("recentwork.subtitle")}</p>
          </div>
        </section>

        <section className="px-5 pb-28 md:px-8 md:pb-36">
          <div className="container mx-auto max-w-6xl space-y-16 lg:space-y-24">
            {liveProjects.map((project, index) => (
              <article key={project.name} className="grid items-start gap-8 lg:grid-cols-12 lg:gap-16">
                <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <ProjectBrowser src={project.image} alt={`${project.name} website homepage`} href={project.href} domain={project.domain} priority={index === 0} />
                </div>
                <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="eyebrow mb-4">{project.badge}</p>
                  <h2 className="text-4xl md:text-5xl">{project.name}</h2>
                  <p className="mt-5 font-light leading-relaxed text-muted-foreground">{project.description}</p>
                  {project.tags && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-border bg-secondary px-3 py-1 text-[12px] font-medium tracking-wide text-foreground/70">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <Button asChild className="mt-7 rounded-none">
                    <a href={project.href} target="_blank" rel="noopener noreferrer">{project.visitLabel ?? tr("Visit project", "Besök projektet")} <ExternalLink /></a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[image:var(--gradient-primary)] px-5 py-20 text-primary-foreground md:px-8 md:py-24">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-10 grid gap-6 md:grid-cols-12">
              <p className="eyebrow md:col-span-4">{tr("Product demos", "Produktdemos")}</p>
              <h2 className="text-4xl md:col-span-8 md:text-5xl">{tr("Ideas you can experience.", "Idéer du kan uppleva.")}</h2>
            </div>
            <div className="grid gap-px overflow-hidden rounded-md bg-primary-foreground/15">
              {[
                { icon: Leaf, title: t("recentwork.psych.title"), description: t("recentwork.psych.desc"), href: lp("/demos/psychology") },
              ].map((demo) => (
                <article key={demo.href} className="group bg-primary p-8 transition-colors duration-300 hover:bg-primary/80 md:p-10">
                  <demo.icon className="h-5 w-5 text-accent" />
                  <h3 className="mt-8 text-3xl">{demo.title}</h3>
                  <p className="mt-4 max-w-lg font-light leading-relaxed text-primary-foreground/70">{demo.description}</p>
                  <Button asChild variant="outline" className="mt-7 rounded-none border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    <Link to={demo.href}>{tr("View demo →", "Visa demo →")}</Link>
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RecentWorkPage;