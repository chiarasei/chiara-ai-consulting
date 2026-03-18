import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Clock, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Pricing = () => {
  const { t } = useLanguage();

  const packages = [
    {
      name: t("pricing.starter.name"),
      price: t("pricing.starter.price"),
      tagline: t("pricing.starter.tagline"),
      choose: t("pricing.starter.choose"),
      includes: null,
      features: [
        t("pricing.starter.f1"),
        t("pricing.starter.f2"),
      ],
      result: t("pricing.starter.result"),
      highlighted: false,
    },
    {
      name: t("pricing.growth.name"),
      price: t("pricing.growth.price"),
      tagline: t("pricing.growth.tagline"),
      choose: null,
      includes: null,
      features: [
        t("pricing.growth.f1"),
        t("pricing.growth.f2"),
        t("pricing.growth.f3"),
        t("pricing.growth.f4"),
      ],
      result: t("pricing.growth.result"),
      highlighted: true,
    },
    {
      name: t("pricing.premium.name"),
      price: t("pricing.premium.price"),
      tagline: t("pricing.premium.tagline"),
      choose: null,
      includes: t("pricing.premium.includes"),
      features: [
        t("pricing.premium.f1"),
        t("pricing.premium.f2"),
        t("pricing.premium.f3"),
      ],
      result: t("pricing.premium.result"),
      highlighted: false,
    },
  ];

  const maintenanceFeatures = [
    t("pricing.maintenance.f1"),
    t("pricing.maintenance.f2"),
    t("pricing.maintenance.f3"),
    t("pricing.maintenance.f4"),
  ];

  return (
    <section id="pricing" className="py-12 md:py-20 px-4 md:px-6 bg-muted/50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            {t("pricing.title")}
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-6 md:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
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
              <h3 className="text-lg font-bold mb-1">{pkg.name}</h3>
              <p className={`text-2xl font-bold mb-2 ${pkg.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                {pkg.price}
              </p>
              <p className={`text-sm mb-4 ${pkg.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                👉 {pkg.tagline}
              </p>

              {pkg.choose && (
                <p className={`text-xs font-semibold mb-2 ${pkg.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {pkg.choose}
                </p>
              )}

              {pkg.includes && (
                <p className={`text-xs font-semibold mb-2 ${pkg.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {pkg.includes}
                </p>
              )}

              <ul className="space-y-2.5 mb-5 flex-1">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm leading-snug">
                    <Check
                      size={15}
                      className={`mt-0.5 flex-shrink-0 ${pkg.highlighted ? "text-primary-foreground/90" : "text-primary"}`}
                    />
                    <span className={pkg.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Result line */}
              <div className={`flex items-start gap-2 text-sm font-medium mb-5 p-3 rounded-lg ${
                pkg.highlighted
                  ? "bg-primary-foreground/10 text-primary-foreground"
                  : "bg-muted text-foreground"
              }`}>
                <Zap size={15} className="mt-0.5 flex-shrink-0" />
                <span>{pkg.result}</span>
              </div>

              <div className={`flex items-center gap-1.5 text-xs mb-4 ${pkg.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                <Clock size={13} />
                {t("pricing.delivery")}
              </div>

              <Link to="/contact" className="mt-auto">
                <Button
                  className={`w-full font-semibold h-11 gap-2 ${
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

        <div className="mt-8 p-6 rounded-xl border-2 border-primary/20 bg-primary/5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-1">
            <div>
              <p className="text-sm font-semibold text-foreground">{t("pricing.maintenance.title")}</p>
              <p className="text-lg font-bold text-primary">{t("pricing.maintenance.price")}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-4">{t("pricing.maintenance.subtitle")}</p>
          <ul className="grid sm:grid-cols-2 gap-2">
            {maintenanceFeatures.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check size={14} className="text-primary flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-6">
          {t("pricing.note")}
        </p>
      </div>
    </section>
  );
};

export default Pricing;
