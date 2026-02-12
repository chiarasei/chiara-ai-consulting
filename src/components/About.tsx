import { Target, Code, Cloud, Award, CheckCircle2 } from "lucide-react";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: <Target className="w-5 h-5" />, title: t("about.value1.title"), description: t("about.value1.desc") },
    { icon: <Code className="w-5 h-5" />, title: t("about.value2.title"), description: t("about.value2.desc") },
    { icon: <Cloud className="w-5 h-5" />, title: t("about.value3.title"), description: t("about.value3.desc") },
    { icon: <Award className="w-5 h-5" />, title: t("about.value4.title"), description: t("about.value4.desc") },
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: Story */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              {t("about.title1")}ChiaraAI{t("about.title2")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
              {t("about.title1")}<span className="text-primary">ChiaraAI</span>{t("about.title2")}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
            </div>
          </div>

          {/* Right: Value cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-5 md:p-6 rounded-xl border border-border bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="font-bold text-sm md:text-base text-card-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
