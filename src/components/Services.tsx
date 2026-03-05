import { Globe, Bot, CalendarCheck } from "lucide-react";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { icon: <Globe />, title: t("services.website.title"), description: t("services.website.desc") },
    { icon: <Bot />, title: t("services.chatbot.title"), description: t("services.chatbot.desc") },
    { icon: <CalendarCheck />, title: t("services.booking.title"), description: t("services.booking.desc") },
  ];

  return (
    <section id="services" className="py-12 md:py-20 px-4 md:px-6 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            {t("services.title1")}<span className="text-primary">{t("services.title2")}</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 rounded-xl border border-border bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {React.cloneElement(service.icon, { size: 22 })}
              </div>
              <h3 className="text-base md:text-lg font-bold text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
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
