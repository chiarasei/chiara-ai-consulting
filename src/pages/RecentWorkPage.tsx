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

const RecentWorkPage = () => {
  const { t, language } = useLanguage();
  const tr = (en: string, sv: string) => (language === "sv" ? sv : en);

  useEffect(() => window.scrollTo(0, 0), []);

  const liveProjects = [
    {
      name: "mother.fm",
      badge: tr("Audio · Tracker · Journal", "Ljud · Tracker · Dagbok"),
      description: tr("A motherhood audio companion offering pocket-sized pep talks, with a tracker and journal to support mothers day to day.", "En ljudledd följeslagare för mammor som erbjuder korta pep talks i fickformat, med en tracker och dagbok som stöttar mamman i vardagen."),
      href: "https://mother.fm",
      domain: "mother.fm",
      image: motherImage,
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
      <SEOHead title="Recent Work – ChiaraAI Consulting" description="Explore mother.fm, QR-Meny, She Rises and selected product demos by ChiaraAI Consulting." keywords="portfolio, recent work, websites, SaaS, web apps, Gothenburg" canonicalPath="/recent-work" />
      <Navigation />
      <main>
        <section className="px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-48">
          <div className="container mx-auto max-w-6xl">
            <p className="eyebrow mb-6">{tr("Selected work", "Utvalda projekt")}</p>
            <h1 className="max-w-4xl text-balance text-5xl text-foreground md:text-7xl">{t("recentwork.title")}</h1>
            <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">{t("recentwork.subtitle")}</p>
          </div>
        </section>

        <section className="px-5 pb-28 md:px-8 md:pb-36">
          <div className="container mx-auto max-w-6xl space-y-24 md:space-y-36">
            {liveProjects.map((project, index) => (
              <article key={project.name} className="grid items-center gap-10 md:grid-cols-12 md:gap-16">
                <div className={`md:col-span-7 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <ProjectBrowser src={project.image} alt={`${project.name} website homepage`} href={project.href} domain={project.domain} priority={index === 0} />
                </div>
                <div className={`md:col-span-5 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <p className="eyebrow mb-4">{project.badge}</p>
                  <h2 className="text-4xl md:text-5xl">{project.name}</h2>
                  <p className="mt-5 font-light leading-relaxed text-muted-foreground">{project.description}</p>
                  <Button asChild className="mt-7 rounded-none">
                    <a href={project.href} target="_blank" rel="noopener noreferrer">{tr("Visit project", "Besök projektet")} <ExternalLink /></a>
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
                { icon: Leaf, title: t("recentwork.psych.title"), description: t("recentwork.psych.desc"), href: "/demo/psychology" },
              ].map((demo) => (
                <article key={demo.href} className="group bg-primary p-8 transition-colors duration-300 hover:bg-primary/80 md:p-10">
                  <demo.icon className="h-5 w-5 text-accent" />
                  <h3 className="mt-8 text-3xl">{demo.title}</h3>
                  <p className="mt-4 max-w-lg font-light leading-relaxed text-primary-foreground/70">{demo.description}</p>
                  <Button asChild variant="outline" className="mt-7 rounded-none border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    <Link to={demo.href}>{t("recentwork.viewproject")} <ExternalLink /></Link>
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