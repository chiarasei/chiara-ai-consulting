import { MessageCircle, Phone, Calendar, MessageSquare, TrendingUp, Share2, Gift, Workflow } from "lucide-react";
import { Card } from "@/components/ui/card";
import React from "react";

const Services = () => {
  const services = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "AI Chatbots",
      description: "24/7 intelligent chatbots that handle customer questions, process orders, and provide instant support on your website. Increase conversions while reducing response time.",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "AI Voice Assistants",
      description: "Human-like voice agents that answer phone calls, manage bookings, take orders, and handle customer inquiries with natural conversation. Never miss a call again, even during busy hours.",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Automated Booking Systems",
      description: "Smart scheduling that lets customers book appointments 24/7 through voice, chat, or web. Automatic reminders reduce no-shows by up to 70%, and intelligent calendar management maximizes your availability.",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Customer Communication",
      description: "Automated SMS and email campaigns for appointment reminders, order confirmations, follow-ups, and personalized offers. Build stronger customer relationships without manual effort.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "AI-Powered Marketing",
      description: "Intelligent marketing automation that analyzes customer behavior, sends personalized campaigns, and optimizes timing for maximum engagement. Increase repeat business automatically.",
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Automation",
      description: "AI-generated content, scheduled posting, and automated responses to comments and messages. Maintain an active social presence without spending hours online.",
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Loyalty & Rewards Programs",
      description: "Automated customer loyalty systems that track visits, offer personalized rewards, and send timely promotions. Turn one-time customers into regulars.",
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Business Workflow Automation",
      description: "Streamline invoicing, inventory tracking, staff scheduling, and administrative tasks. Free up hours each week to focus on growing your business instead of paperwork.",
    },
  ];

  return (
    <section id="services" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20 space-y-5">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
            Our AI Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-normal">
            Custom solutions that help you automate, grow, and focus on what matters most
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-soft transition-all duration-500 hover:-translate-y-0.5 border border-border bg-card group"
            >
              <div className="text-primary mb-5 transition-transform duration-500 group-hover:scale-105">
                {React.cloneElement(service.icon, { strokeWidth: 1.5 })}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-card-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
