import { MessageCircle, Phone, Calendar, MessageSquare, TrendingUp, Share2, Gift, Workflow } from "lucide-react";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { icon: <MessageCircle />, title: t("services.chatbots.title"), description: t("services.chatbots.desc") },
    { icon: <Phone />, title: t("services.voice.title"), description: t("services.voice.desc") },
    { icon: <Calendar />, title: t("services.booking.title"), description: t("services.booking.desc") },
    { icon: <MessageSquare />, title: t("services.communication.title"), description: t("services.communication.desc") },
    { icon: <TrendingUp />, title: t("services.marketing.title"), description: t("services.marketing.desc") },
    { icon: <Share2 />, title: t("services.social.title"), description: t("services.social.desc") },
    { icon: <Gift />, title: t("services.loyalty.title"), description: t("services.loyalty.desc") },
    { icon: <Workflow />, title: t("services.workflow.title"), description: t("services.workflow.desc") },
  ];

  return (
    <section id="services" className="py-20 md:py-32 px-4 md:px-6 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            {t("services.title1")}<span className="text-primary">{t("services.title2")}</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-5 md:p-6 rounded-xl border border-border bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {React.cloneElement(service.icon, { size: 20 })}
              </div>
              <h3 className="text-sm md:text-base font-bold text-card-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
