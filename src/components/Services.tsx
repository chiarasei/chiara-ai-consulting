import { MessageCircle, Phone, Calendar, MessageSquare, TrendingUp, Share2, Gift, Workflow } from "lucide-react";
import { Card } from "@/components/ui/card";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { icon: <MessageCircle className="w-8 h-8" />, title: t("services.chatbots.title"), description: t("services.chatbots.desc") },
    { icon: <Phone className="w-8 h-8" />, title: t("services.voice.title"), description: t("services.voice.desc") },
    { icon: <Calendar className="w-8 h-8" />, title: t("services.booking.title"), description: t("services.booking.desc") },
    { icon: <MessageSquare className="w-8 h-8" />, title: t("services.communication.title"), description: t("services.communication.desc") },
    { icon: <TrendingUp className="w-8 h-8" />, title: t("services.marketing.title"), description: t("services.marketing.desc") },
    { icon: <Share2 className="w-8 h-8" />, title: t("services.social.title"), description: t("services.social.desc") },
    { icon: <Gift className="w-8 h-8" />, title: t("services.loyalty.title"), description: t("services.loyalty.desc") },
    { icon: <Workflow className="w-8 h-8" />, title: t("services.workflow.title"), description: t("services.workflow.desc") },
  ];

  return (
    <section id="services" className="py-16 md:py-32 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-20 space-y-3 md:space-y-5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            {t("services.title1")}<span className="bg-gradient-primary bg-clip-text text-transparent">{t("services.title2")}</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-5 md:p-8 hover:shadow-glow transition-all duration-500 hover:-translate-y-1 border-2 border-primary/20 hover:border-primary/50 bg-gradient-to-br from-card to-primary/5 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              <div className="text-primary mb-3 md:mb-5 transition-transform duration-500 group-hover:scale-110 relative z-10">
                {React.cloneElement(service.icon, { strokeWidth: 2, className: "w-6 h-6 md:w-8 md:h-8" })}
              </div>
              <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3 text-card-foreground relative z-10">{service.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed relative z-10">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
