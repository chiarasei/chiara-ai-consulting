import { Award, Cloud, Code, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Resultatfokus",
      description: "Vi levererar mätbara resultat som gör verklig skillnad för din verksamhet.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Teknisk Expertis",
      description: "Djup erfarenhet inom DevOps, molntjänster och AI-automation.",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Skalbarhet",
      description: "Lösningar som växer med dig – från startup till etablerat företag.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Kvalitet & Support",
      description: "Pålitlig support och kontinuerlig optimering av dina AI-lösningar.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Om ChiaraAI Consulting
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                ChiaraAI Consulting grundades med en vision om att göra AI-automation tillgänglig och prisvärt för svenska småföretag. Vi förstår utmaningarna som små verksamheter står inför – tidsbrist, begränsade resurser och behovet av att konkurrera med större aktörer.
              </p>
              <p>
                Vår grundare har mångårig erfarenhet inom DevOps, molnarkitektur och automatisering av komplexa system. Nu använder vi denna expertis för att hjälpa lokala företag att växa genom smart AI-teknik.
              </p>
              <p>
                Vi tror på personlig service, långsiktiga relationer och lösningar som faktiskt fungerar i verkligheten – inte bara på papperet.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-border bg-card hover:shadow-soft transition-all"
              >
                <div className="text-primary mb-3">{value.icon}</div>
                <h3 className="font-semibold mb-2 text-card-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
