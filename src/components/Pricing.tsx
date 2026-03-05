import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Pricing = () => {
  const { t } = useLanguage();

  const packages = [
    {
      name: t("pricing.starter.name"),
      subtitle: t("pricing.starter.subtitle"),
      best: t("pricing.starter.best"),
      features: [
        t("pricing.starter.f1"),
        t("pricing.starter.f2"),
        t("pricing.starter.f3"),
        t("pricing.starter.f4"),
        t("pricing.starter.f5"),
      ],
      outcome: t("pricing.starter.outcome"),
      highlighted: false,
    },
    {
      name: t("pricing.growth.name"),
      subtitle: t("pricing.growth.subtitle"),
      best: t("pricing.growth.best"),
      includes: t("pricing.growth.includes"),
      features: [
        t("pricing.growth.f1"),
        t("pricing.growth.f2"),
        t("pricing.growth.f3"),
        t("pricing.growth.f4"),
      ],
      outcome: t("pricing.growth.outcome"),
      highlighted: true,
    },
    {
      name: t("pricing.premium.name"),
      subtitle: t("pricing.premium.subtitle"),
      best: t("pricing.premium.best"),
      includes: t("pricing.premium.includes"),
      features: [
        t("pricing.premium.f1"),
        t("pricing.premium.f2"),
        t("pricing.premium.f3"),
        t("pricing.premium.f4"),
        t("pricing.premium.f5"),
      ],
      outcome: t("pricing.premium.outcome"),
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-12 md:py-20 px-4 md:px-6 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            <span className="text-primary">{t("pricing.title1")}</span>{t("pricing.title2")}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                pkg.highlighted
                  ? "bg-primary text-primary-foreground shadow-medium ring-2 ring-primary"
                  : "bg-card text-card-foreground shadow-soft border border-border"
              }`}
            >
              {pkg.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-4 py-1 rounded-full">
                  {t("pricing.popular")}
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold">{pkg.name}</h3>
                <p className={`text-sm mt-1 ${pkg.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {pkg.subtitle}
                </p>
              </div>

              <p className={`text-sm font-medium mb-4 ${pkg.highlighted ? "text-primary-foreground/90" : "text-foreground/80"}`}>
                {pkg.best}
              </p>

              {pkg.includes && (
                <p className={`text-xs italic mb-3 ${pkg.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {pkg.includes}
                </p>
              )}

              <ul className="space-y-3 flex-1 mb-8">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm">
                    <Check size={16} className={`mt-0.5 shrink-0 ${pkg.highlighted ? "text-primary-foreground" : "text-primary"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className={`rounded-xl p-4 mb-6 text-sm ${
                pkg.highlighted ? "bg-primary-foreground/10" : "bg-muted"
              }`}>
                <span className="font-semibold">{t("pricing.outcome")}: </span>
                {pkg.outcome}
              </div>

              <Link to="/contact" className="mt-auto">
                <Button
                  className={`w-full font-semibold h-12 gap-2 ${
                    pkg.highlighted
                      ? "bg-background text-primary hover:bg-background/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  {t("pricing.cta")}
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
