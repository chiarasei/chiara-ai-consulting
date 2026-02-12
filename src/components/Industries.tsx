import { Stethoscope, Activity, Utensils, Scissors, Sparkles, Hotel, ShoppingBag, Palette, Dumbbell, Heart, Store } from "lucide-react";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Industries = () => {
  const { t } = useLanguage();

  const industries = [
    { icon: <Stethoscope />, title: t("industries.clinics.title"), useCase: t("industries.clinics.desc") },
    { icon: <Activity />, title: t("industries.physio.title"), useCase: t("industries.physio.desc") },
    { icon: <Utensils />, title: t("industries.restaurants.title"), useCase: t("industries.restaurants.desc") },
    { icon: <Scissors />, title: t("industries.hair.title"), useCase: t("industries.hair.desc") },
    { icon: <Sparkles />, title: t("industries.beauty.title"), useCase: t("industries.beauty.desc") },
    { icon: <Palette />, title: t("industries.nail.title"), useCase: t("industries.nail.desc") },
    { icon: <Heart />, title: t("industries.tattoo.title"), useCase: t("industries.tattoo.desc") },
    { icon: <Dumbbell />, title: t("industries.spa.title"), useCase: t("industries.spa.desc") },
    { icon: <Hotel />, title: t("industries.hotels.title"), useCase: t("industries.hotels.desc") },
    { icon: <ShoppingBag />, title: t("industries.retail.title"), useCase: t("industries.retail.desc") },
    { icon: <Store />, title: t("industries.all.title"), useCase: t("industries.all.desc") },
  ];

  return (
    <section id="industries" className="py-20 md:py-32 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            {t("industries.title1")}<span className="text-primary">{t("industries.title2")}</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("industries.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group p-5 md:p-6 rounded-xl border border-border bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5"
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
