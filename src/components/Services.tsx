import { MessageCircle, Phone, Calendar, MessageSquare, TrendingUp, Share2, Gift, Workflow } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "AI-Chatbots",
      description: "Intelligent chatbots som svarar på kundfrågor dygnet runt, ökar försäljningen och förbättrar kundservice.",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "AI-Röstassistenter",
      description: "Automatisera telefonsamtal och hantera bokningar, beställningar och kundförfrågningar med naturlig röstinteraktion.",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Automatiska Bokningssystem",
      description: "Låt kunderna boka tider själva när som helst, minska no-shows och maximera din kalender.",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Automatisering av Kundmeddelanden",
      description: "Skicka automatiska påminnelser, bekräftelser och uppföljningar via SMS och e-post.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "AI-Driven Marknadsföring",
      description: "Personaliserade kampanjer och riktade erbjudanden baserade på kundbeteende och preferenser.",
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Automatisering av Sociala Medier",
      description: "Schemalägg inlägg, generera innehåll och svara på kommentarer automatiskt.",
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Lojalitetsprogram",
      description: "Bygg kundlojalitet med automatiserade belöningssystem och personliga erbjudanden.",
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Arbetsflödesautomation",
      description: "Effektivisera administrativa uppgifter, fakturering och lagerhantering med AI.",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Våra AI-Tjänster
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Skräddarsydda lösningar som hjälper dig att automatisera, växa och fokusera på det som är viktigt
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
