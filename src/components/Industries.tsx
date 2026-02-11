import { Coffee, Utensils, Scissors, Sparkles, Hotel, ShoppingBag, Palette, Dumbbell, Heart, Store } from "lucide-react";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Industries = () => {
  const { t } = useLanguage();

  const industries = [
    { icon: <Coffee className="w-10 h-10" />, title: t("industries.cafes.title"), useCase: t("industries.cafes.desc") },
    { icon: <Utensils className="w-10 h-10" />, title: t("industries.restaurants.title"), useCase: t("industries.restaurants.desc") },
    { icon: <Scissors className="w-10 h-10" />, title: t("industries.hair.title"), useCase: t("industries.hair.desc") },
    { icon: <Sparkles className="w-10 h-10" />, title: t("industries.beauty.title"), useCase: t("industries.beauty.desc") },
    { icon: <Palette className="w-10 h-10" />, title: t("industries.nail.title"), useCase: t("industries.nail.desc") },
    { icon: <Heart className="w-10 h-10" />, title: t("industries.tattoo.title"), useCase: t("industries.tattoo.desc") },
    { icon: <Dumbbell className="w-10 h-10" />, title: t("industries.spa.title"), useCase: t("industries.spa.desc") },
    { icon: <Hotel className="w-10 h-10" />, title: t("industries.hotels.title"), useCase: t("industries.hotels.desc") },
    { icon: <ShoppingBag className="w-10 h-10" />, title: t("industries.retail.title"), useCase: t("industries.retail.desc") },
    { icon: <Store className="w-10 h-10" />, title: t("industries.all.title"), useCase: t("industries.all.desc") },
  ];

  return (
    <section id="industries" className="py-16 md:py-32 px-4 md:px-6 bg-gradient-to-b from-secondary/40 to-accent/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 -z-10" />
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-20 space-y-3 md:space-y-5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            {t("industries.title1")}<span className="bg-gradient-accent bg-clip-text text-transparent">{t("industries.title2")}</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            {t("industries.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group p-5 md:p-8 rounded-xl border-2 border-primary/20 hover:border-accent/50 bg-gradient-to-br from-card to-accent/5 hover:shadow-medium transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              <div className="text-primary group-hover:text-accent mb-3 md:mb-5 group-hover:scale-110 transition-all duration-500 relative z-10">
                {React.cloneElement(industry.icon, { strokeWidth: 2, className: "w-8 h-8 md:w-10 md:h-10" })}
              </div>
              <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3 text-card-foreground relative z-10">{industry.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed relative z-10">{industry.useCase}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
