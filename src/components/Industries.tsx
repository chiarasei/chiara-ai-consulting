import { Stethoscope, Heart, Sparkles, Wrench } from "lucide-react";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Industries = () => {
  const { t } = useLanguage();

  const industries = [
    { icon: <Stethoscope />, title: t("industries.therapists.title"), useCase: t("industries.therapists.desc") },
    { icon: <Heart />, title: t("industries.wellness.title"), useCase: t("industries.wellness.desc") },
    { icon: <Sparkles />, title: t("industries.cleaning.title"), useCase: t("industries.cleaning.desc") },
    { icon: <Wrench />, title: t("industries.local.title"), useCase: t("industries.local.desc") },
  ];

  return (
    <section id="industries" className="py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            {t("industries.title1")}<span className="text-primary">{t("industries.title2")}</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("industries.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 rounded-xl border border-border bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                {React.cloneElement(industry.icon, { size: 22 })}
              </div>
              <h3 className="text-base md:text-lg font-bold text-card-foreground mb-3">
                {industry.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {industry.useCase}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
