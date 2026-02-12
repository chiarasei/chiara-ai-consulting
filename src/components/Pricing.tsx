import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Pricing = () => {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-20 md:py-32 px-4 md:px-6 bg-muted/50">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            <span className="text-primary">{t("pricing.title1")}</span>{t("pricing.title2")}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {t("pricing.subtitle")}
          </p>
          <div className="pt-2">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 shadow-soft hover:shadow-medium transition-all duration-300 gap-2"
              >
                {t("pricing.cta")}
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
