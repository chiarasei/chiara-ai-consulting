import { Globe, Bot, MessageSquare, CalendarCheck, Mic } from "lucide-react";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { icon: <Globe />, title: t("services.website.title"), description: t("services.website.desc") },
    { icon: <Bot />, title: t("services.chatbot.title"), description: t("services.chatbot.desc") },
    { icon: <MessageSquare />, title: t("services.inquiry.title"), description: t("services.inquiry.desc") },
    { icon: <CalendarCheck />, title: t("services.booking.title"), description: t("services.booking.desc") },
    { icon: <Mic />, title: t("services.voice.title"), description: t("services.voice.desc") },
  ];

  return (
    <section id="services" className="py-12 md:py-20 px-4 md:px-6 bg-muted/50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
            {t("services.title")}
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-5 md:p-7 rounded-xl border border-border bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5"
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
