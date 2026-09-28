import { Sprout, TrendingUp, Blocks, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Industries = () => {
  const { language } = useLanguage();
  const sv = language === "sv";
  const L = (en: string, s: string) => (sv ? s : en);

  const cards = [
    {
      icon: <Sprout size={20} />,
      title: L("Starting out", "Nystart"),
      text: L(
        "Launching a business? Get a professional website that makes you look established from day one.",
        "Ska du starta företag? Få en professionell webbplats som får dig att verka etablerad från dag ett."
      ),
    },
    {
      icon: <TrendingUp size={20} />,
      title: L("Growing", "Växer"),
      text: L(
        "Ready for more customers? Add online booking, payments and a site that works as hard as you do.",
        "Redo för fler kunder? Lägg till onlinebokning, betalningar och en webbplats som jobbar lika hårt som du."
      ),
    },
    {
      icon: <Blocks size={20} />,
      title: L("Building a product", "Bygger en produkt"),
      text: L(
        "Have an idea for an app or platform? We turn it into a working product people can sign up for and pay for.",
        "En idé för en app eller plattform? Vi gör den till en fungerande produkt som människor kan registrera sig i och betala för."
      ),
    },
    {
      icon: <Building2 size={20} />,
      title: L("Established companies", "Etablerade företag"),
      text: L(
        "Outgrown your current site or tools? We modernise your website and build custom systems around how you work.",
        "Växt ur din nuvarande webbplats eller era verktyg? Vi moderniserar din webbplats och bygger skräddarsydda system runt hur du arbetar."
      ),
    },
  ];

  return (
    <section id="industries" className="py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10 md:mb-14 space-y-4">
          <p className="eyebrow">{L("Who we build for", "För vem vi bygger")}</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
            {L("Any business, any stage", "Alla företag, alla stadier")}
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            {L(
              "Whatever you do and wherever you are, we build the website or app that fits where your business is going.",
              "Oavsett vad du gör och var du befinner dig, bygger vi webbplatsen eller appen som passar vart ditt företag är på väg."
            )}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group p-5 md:p-7 rounded-xl border border-border bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                {card.icon}
              </div>
              <h3 className="text-sm md:text-base font-bold text-card-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/contact"
            className="text-sm font-semibold text-[hsl(39_49%_36%)] hover:underline"
          >
            {L("Not sure where you fit? Book a free call →", "Osäker på var du passar in? Boka ett gratis samtal →")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Industries;
