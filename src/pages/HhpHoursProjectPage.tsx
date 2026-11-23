import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectBrowser from "@/components/ProjectBrowser";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import hhpReportingAsset from "@/assets/projects/hhp-hours-reporting.png.asset.json";
import hhpAdminAsset from "@/assets/projects/hhp-hours-admin.png.asset.json";
import hhpCategoriesAsset from "@/assets/projects/hhp-hours-categories.png.asset.json";

const HhpHoursProjectPage = () => {
  const { language, lp } = useLanguage();
  const tr = (en: string, sv: string) => (language === "sv" ? sv : en);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const builtPoints = [
    tr("Each worker has their own login and only sees their own hours", "Varje arbetare har egen inloggning och ser bara sina egna timmar"),
    tr("Workers log hours in quarter hour steps under the right company, with the address where they worked", "Arbetarna rapporterar timmar i kvartssteg under rätt bolag, med adressen där de jobbade"),
    tr("At the end of the month workers submit their hours, and the month locks", "I slutet av månaden skickar arbetarna in sina timmar och månaden låses"),
    tr("The owners see everyone's hours in one overview and can correct entries", "Ägarna ser allas timmar i en översikt och kan rätta poster"),
    tr("Monthly PDFs per worker, grouped by company and location, with totals", "Månads-PDF:er per arbetare, grupperade efter bolag och arbetsplats, med summor"),
    tr("An invoicing report that shows hours per company and per location, so the owners can invoice each client without recalculating anything", "En faktureringsrapport som visar timmar per bolag och per arbetsplats, så att ägarna kan fakturera varje kund utan att räkna om något"),
    tr("Available in English and Swedish", "Finns på svenska och engelska"),
  ];

  const gallery = [
    {
      src: hhpReportingAsset.url,
      alt: tr("HHP Hours time reporting table with company totals", "Tidrapportering i HHP Hours med summor per bolag"),
      caption: tr("Hours by company and location, with monthly totals, PDF download and month submission", "Timmar per bolag och arbetsplats, med månadssummor, PDF nedladdning och inlämning av månaden"),
    },
    {
      src: hhpAdminAsset.url,
      alt: tr("HHP Hours admin form for inviting a worker", "Adminformulär i HHP Hours för att bjuda in en arbetare"),
      caption: tr("Owners invite workers and choose their role and language", "Ägarna bjuder in arbetare och väljer deras roll och språk"),
    },
    {
      src: hhpCategoriesAsset.url,
      alt: tr("HHP Hours company categories and hour types in English and Swedish", "Bolagskategorier och timtyper på svenska och engelska i HHP Hours"),
      caption: tr("Company categories and hour types, managed in English and Swedish", "Bolagskategorier och timtyper som hanteras på svenska och engelska"),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="HHP Hours: time reporting app | ChiaraAI Consulting"
        description="A private time reporting web app we built for HHP Service i Hisings Backa AB in Gothenburg. Workers log hours on their phones and the owners get ready made invoicing reports."
        canonicalPath="/projects/hhp-hours"
        titleSv="HHP Hours: app för tidrapportering | ChiaraAI Consulting"
        descriptionSv="En privat webapp för tidrapportering som vi byggde åt HHP Service i Hisings Backa AB i Göteborg. Arbetarna rapporterar timmar i mobilen och ägarna får färdiga faktureringsunderlag."
      />
      <Navigation />
      <main>
        <section className="px-5 pb-10 pt-36 md:px-8 md:pt-48">
          <div className="container mx-auto max-w-6xl">
            <Link to={lp("/recent-work")} className="story-link inline-flex min-h-11 items-center gap-2 text-sm">
              <ArrowLeft className="h-4 w-4" /> {tr("All projects", "Alla projekt")}
            </Link>
            <p className="eyebrow mb-6 mt-10">{tr("Time reporting · Web app · Gothenburg", "Tidrapportering · Webbapp · Göteborg")}</p>
            <h1 className="max-w-4xl text-balance text-5xl text-foreground md:text-7xl">HHP Hours</h1>
            <p className="mt-6 text-lg font-light text-muted-foreground">
              {tr("For HHP Service i Hisings Backa AB, Gothenburg", "Åt HHP Service i Hisings Backa AB, Göteborg")}
            </p>
            <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
              {tr(
                "A simple time reporting app that replaced a broken Excel system for a cleaning and construction services company. Workers log their hours on their phones, and the owners get ready made reports for invoicing.",
                "En enkel tidrapporteringsapp som ersatte ett trasigt Excel system åt ett städ och byggföretag. Arbetarna rapporterar timmar i mobilen och ägarna får färdiga underlag för fakturering."
              )}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Lovable", "Supabase"].map((tag) => (
                <span key={tag} className="rounded-full border border-border bg-secondary px-3 py-1 text-[12px] font-medium tracking-wide text-foreground/70">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild className="rounded-none">
                <a href="https://hhphours.se" target="_blank" rel="noopener noreferrer">
                  {tr("Live app, staff login only", "Live app, bara för personal")} <ExternalLink />
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-none bg-transparent">
                <Link to={lp("/contact")}>{tr("Want something like this?", "Vill du ha något liknande?")} <ArrowRight /></Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="px-5 pb-16 md:px-8 md:pb-20">
          <div className="container mx-auto max-w-6xl">
            <ProjectBrowser src={hhpReportingAsset.url} alt={gallery[0].alt} href="https://hhphours.se" domain="hhphours.se" priority fullImage />
          </div>
        </section>

        <section className="border-t border-border px-5 py-16 md:px-8 md:py-20">
          <div className="container mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-4">{tr("The challenge", "Utmaningen")}</p>
              <h2 className="text-3xl md:text-4xl">{tr("One Excel file, four companies", "En Excel fil, fyra bolag")}</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
                {tr(
                  "The company tracked hours for workers across four companies in one large Excel file. Totals did not add up, the file only worked on a computer, and every month the owners spent hours separating hours by company and location before they could invoice their clients.",
                  "Företaget rapporterade timmar för arbetare i fyra bolag i en stor Excel fil. Summorna stämde inte, filen fungerade bara på dator och varje månad lade ägarna timmar på att sortera timmarna per bolag och arbetsplats innan de kunde fakturera sina kunder."
                )}
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-border px-5 py-16 md:px-8 md:py-20">
          <div className="container mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-4">{tr("What I built", "Vad jag byggde")}</p>
              <h2 className="text-3xl md:text-4xl">{tr("A private app for the whole team", "En privat app för hela teamet")}</h2>
              <p className="mt-5 max-w-sm font-light leading-relaxed text-muted-foreground">
                {tr(
                  "A private web app that works on phones and laptops and can be saved to the home screen like a normal app.",
                  "En privat webapp som fungerar på mobil och dator och kan sparas på hemskärmen som en vanlig app."
                )}
              </p>
            </div>
            <div className="lg:col-span-8">
              <ul className="max-w-2xl space-y-4">
                {builtPoints.map((point) => (
                  <li key={point} className="flex gap-4 text-lg font-light leading-relaxed text-muted-foreground">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brass))]" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-border px-5 py-16 md:px-8 md:py-20">
          <div className="container mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-4">{tr("The result", "Resultatet")}</p>
              <h2 className="text-3xl md:text-4xl">{tr("Ready when the month ends", "Klart när månaden tar slut")}</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
                {tr(
                  "Hours are entered once, on the day, and the invoicing numbers are ready the moment the month is submitted.",
                  "Timmarna rapporteras en gång, samma dag, och faktureringsunderlaget är klart så fort månaden skickats in."
                )}
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-border px-5 py-16 md:px-8 md:py-20">
          <div className="container mx-auto max-w-6xl">
            <p className="eyebrow mb-4">{tr("Screens", "Skärmar")}</p>
            <h2 className="text-3xl md:text-4xl">{tr("Inside the app", "Så här ser appen ut")}</h2>
            <div className="mt-12 grid gap-10 md:grid-cols-2">
              {gallery.map((shot, i) => (
                <figure key={shot.alt} className={i === 0 ? "md:col-span-2" : ""}>
                  <ProjectBrowser src={shot.src} alt={shot.alt} href="https://hhphours.se" domain="hhphours.se" fullImage />
                  <figcaption className="mt-4 text-sm font-light text-muted-foreground">{shot.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[image:var(--gradient-primary)] px-5 py-20 text-primary-foreground md:px-8 md:py-24">
          <div className="container mx-auto max-w-6xl">
            <p className="eyebrow mb-6">{tr("Your turn", "Din tur")}</p>
            <h2 className="max-w-3xl text-balance text-4xl md:text-5xl">
              {tr("Still tracking hours in Excel?", "Rapporterar du fortfarande timmar i Excel?")}
            </h2>
            <p className="mt-6 max-w-xl font-light leading-relaxed text-primary-foreground/70">
              {tr(
                "Tell us how your team works today and we will show you what a simple tool could look like for you.",
                "Berätta hur ditt team jobbar i dag så visar vi hur ett enkelt verktyg skulle kunna se ut för er."
              )}
            </p>
            <Button asChild variant="outline" className="mt-8 rounded-none border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to={lp("/contact")}>{tr("Start a project", "Starta ett projekt")} <ArrowRight /></Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HhpHoursProjectPage;
