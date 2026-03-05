import { Stethoscope, Heart, Sparkles, Wrench, Users } from "lucide-react";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Industries = () => {
  const { t } = useLanguage();

  const industries = [
    { icon: <Stethoscope />, title: t("industries.therapists.title"), useCase: t("industries.therapists.desc") },
    { icon: <Heart />, title: t("industries.wellness.title"), useCase: t("industries.wellness.desc") },
    { icon: <Sparkles />, title: t("industries.cleaning.title"), useCase: t("industries.cleaning.desc") },
    { icon: <Wrench />, title: t("industries.local.title"), useCase: t("industries.local.desc") },
    { icon: <Users />, title: t("industries.consultants.title"), useCase: t("industries.consultants.desc") },
  ];

  return (
    <section id="industries" className="py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
            {t("industries.title")}
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            {t("industries.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`group p-5 md:p-7 rounded-xl border border-border bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5 ${
                index >= 3 ? "lg:col-span-1" : ""
              } ${index === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                {React.cloneElement(industry.icon, { size: 20 })}
              </div>
              <h3 className="text-sm md:text-base font-bold text-card-foreground mb-2">
                {industry.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
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
