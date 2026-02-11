import { Award, Cloud, Code, Target } from "lucide-react";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: <Target className="w-8 h-8" />, title: t("about.value1.title"), description: t("about.value1.desc") },
    { icon: <Code className="w-8 h-8" />, title: t("about.value2.title"), description: t("about.value2.desc") },
    { icon: <Cloud className="w-8 h-8" />, title: t("about.value3.title"), description: t("about.value3.desc") },
    { icon: <Award className="w-8 h-8" />, title: t("about.value4.title"), description: t("about.value4.desc") },
  ];

  return (
    <section id="about" className="py-16 md:py-32 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10" />
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="space-y-5 md:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              {t("about.title1")}<span className="bg-gradient-primary bg-clip-text text-transparent">ChiaraAI</span>{t("about.title2")}
            </h2>
            <div className="space-y-4 md:space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base lg:text-lg font-medium">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-4 md:p-8 rounded-xl border-2 border-primary/20 hover:border-accent/40 bg-gradient-to-br from-card to-primary/5 hover:shadow-medium transition-all duration-500 hover:-translate-y-1 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="text-primary group-hover:text-accent mb-3 md:mb-4 transition-colors duration-500 relative z-10">
                  {React.cloneElement(value.icon, { strokeWidth: 2, className: "w-6 h-6 md:w-8 md:h-8" })}
                </div>
                <h3 className="font-bold mb-2 md:mb-3 text-card-foreground text-sm md:text-base relative z-10">{value.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed relative z-10">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
