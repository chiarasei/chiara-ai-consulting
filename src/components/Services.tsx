import { MessageCircle, Phone, Calendar, MessageSquare, TrendingUp, Share2, Gift, Workflow } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "AI Chatbots",
      description: "Intelligent chatbots that answer customer questions 24/7, increase sales, and improve customer service.",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "AI Voice Assistants",
      description: "Automate phone calls and handle bookings, orders, and customer inquiries with natural voice interaction.",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Automated Booking Systems",
      description: "Let customers book appointments anytime, reduce no-shows, and maximize your calendar.",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Customer Message Automation",
      description: "Send automatic reminders, confirmations, and follow-ups via SMS and email.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "AI-Powered Marketing",
      description: "Personalized campaigns and targeted offers based on customer behavior and preferences.",
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Automation",
      description: "Schedule posts, generate content, and respond to comments automatically.",
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Loyalty Programs",
      description: "Build customer loyalty with automated reward systems and personalized offers.",
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Workflow Automation",
      description: "Streamline administrative tasks, invoicing, and inventory management with AI.",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Our AI Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Custom solutions that help you automate, grow, and focus on what matters most
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
