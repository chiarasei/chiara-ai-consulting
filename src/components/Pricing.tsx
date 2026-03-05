import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Pricing = () => {
  const { t } = useLanguage();

  const packages = [
    {
      name: t("pricing.starter.name"),
      desc: t("pricing.starter.desc"),
      price: t("pricing.starter.price"),
      highlighted: false,
    },
    {
      name: t("pricing.growth.name"),
      desc: t("pricing.growth.desc"),
      price: t("pricing.growth.price"),
      highlighted: true,
    },
    {
      name: t("pricing.premium.name"),
      desc: t("pricing.premium.desc"),
      price: t("pricing.premium.price"),
      highlighted: false,
    },
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
              <h3 className="text-lg font-bold mb-2">{pkg.name}</h3>
              <p className={`text-sm mb-6 leading-relaxed flex-1 ${pkg.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {pkg.desc}
              </p>
              <p className={`text-lg font-bold mb-6 ${pkg.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                {pkg.price}
              </p>
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

        <div className="mt-8 text-center p-5 rounded-xl border border-border bg-card">
          <p className="text-sm font-semibold text-foreground mb-1">{t("pricing.maintenance.title")}</p>
          <p className="text-lg font-bold text-primary">{t("pricing.maintenance.price")}</p>
          <p className="text-xs text-muted-foreground mt-1">{t("pricing.maintenance.desc")}</p>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-6">
          {t("pricing.note")}
        </p>
      </div>
    </section>
  );
};

export default Pricing;
