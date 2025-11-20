import { Coffee, Utensils, Scissors, Sparkles, Hotel, ShoppingBag, Palette, Dumbbell, Heart, Store } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: <Coffee className="w-10 h-10" />,
      title: "Kaféer",
      useCase: "AI-chatbot för menyfrågor och röstassistent för telefon­beställningar. Öka take-away försäljning.",
    },
    {
      icon: <Utensils className="w-10 h-10" />,
      title: "Restauranger",
      useCase: "Automatisk bordsbokning 24/7 och AI-assisterad kundsupport för allergifrågor och specialkost.",
    },
    {
      icon: <Scissors className="w-10 h-10" />,
      title: "Frisörsalonger",
      useCase: "Smart bokningssystem med automatiska påminnelser och lojalitetsprogram för stamkunder.",
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Skönhetssalonger",
      useCase: "Personliga behandlings­rekommendationer och automatiserad uppföljning efter besök.",
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Nagelsalonger",
      useCase: "Online-bokning med bildgalleri och automatisk påminnelse om tid för underhåll.",
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Tatueringsstudios",
      useCase: "Hantera konsultationer, portfolios och långtids­bokningar med AI-assistent.",
    },
    {
      icon: <Dumbbell className="w-10 h-10" />,
      title: "Spa & Wellness",
      useCase: "Paketbokningar, medlemskaps­hantering och personliga wellness­rekommendationer.",
    },
    {
      icon: <Hotel className="w-10 h-10" />,
      title: "Hotell",
      useCase: "Multilingual chatbot för gäst­frågor och automatiska check-in/check-out meddelanden.",
    },
    {
      icon: <ShoppingBag className="w-10 h-10" />,
      title: "Butiker",
      useCase: "Produkt­rekommendationer, lager­notifieringar och social media automation.",
    },
    {
      icon: <Store className="w-10 h-10" />,
      title: "Alla Småföretag",
      useCase: "Skräddarsydda lösningar för just din bransch. Kontakta oss för en gratis konsultation.",
    },
  ];

  return (
    <section id="industries" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Branscher Vi Hjälper
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Från kaféer till hotell – vi har erfarenhet av att automatisera verksamheter i många olika branscher
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-border bg-card hover:shadow-soft transition-all duration-300"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                {industry.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">{industry.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{industry.useCase}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
