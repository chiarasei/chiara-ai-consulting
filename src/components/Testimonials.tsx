import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Anna Bergström",
      business: "Café Solsidan, Stockholm",
      text: "Tack vare ChiaraAI:s chatbot har vi ökat våra take-away beställningar med 40%. Kunderna älskar att kunna beställa när som helst!",
      rating: 5,
    },
    {
      name: "Erik Johansson",
      business: "Studio Ink, Göteborg",
      text: "Bokningssystemet har sparat mig timmar varje vecka. Klienterna gillar att de kan se ledig tid och boka direkt online.",
      rating: 5,
    },
    {
      name: "Maria Lindqvist",
      business: "Skönhet & Harmoni, Malmö",
      text: "AI-röstassistenten svarar på samtal när vi är upptagna med kunder. Perfekt lösning för en liten salong som vår.",
      rating: 5,
    },
    {
      name: "Johan Svensson",
      business: "Bistro Hemma, Uppsala",
      text: "Automatiska påminnelser har minskat no-shows med 60%. Enkel integration och fantastisk support!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Vad Våra Kunder Säger
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Svenska småföretag som redan har börjat sin AI-resa med oss
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 border-border bg-card">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-card-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.business}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
