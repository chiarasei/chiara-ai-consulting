import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Leaf, ShoppingBag, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import DemoVoiceCall from "@/components/DemoVoiceCall";
import { useLanguage } from "@/contexts/LanguageContext";

const RecentWorkPage = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Recent Work – ChiaraAI Consulting"
        description="See our latest projects: psychology practice websites, Shopify e-commerce stores, and AI voice assistant demos for service businesses."
        keywords="portfolio, recent work, website projects, AI chatbot demo, Shopify store, psychology website"
        canonicalPath="/recent-work"
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-24 md:pt-32 pb-4 md:pb-6 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl text-center space-y-3">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
              {t("recentwork.title")}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("recentwork.subtitle")}
            </p>
          </div>
        </section>

        {/* Psychology Practice */}
        <section className="py-4 md:py-6 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="p-6 md:p-10 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  <Leaf className="w-3.5 h-3.5" />
                  {t("recentwork.psych.badge")}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-card-foreground tracking-tight">
                  {t("recentwork.psych.title")}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                  {t("recentwork.psych.desc")}
                </p>
                <Link to="/demo/psychology">
                  <Button variant="outline" className="gap-2 mt-2">
                    {t("recentwork.viewproject")}
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Shopify Store */}
        <section className="py-4 md:py-6 px-4 md:px-6 bg-muted/50">
          <div className="container mx-auto max-w-4xl">
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="p-6 md:p-10 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  <ShoppingBag className="w-3.5 h-3.5" />
                  {t("recentwork.shopify.badge")}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-card-foreground tracking-tight">
                  {t("recentwork.shopify.title")}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                  {t("recentwork.shopify.desc")}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/demo/shopify">
                    <Button variant="outline" className="gap-2 mt-2">
                      {t("recentwork.viewproject")}
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </Link>
                  <a href="https://zoeandco.se" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="gap-2 mt-2">
                      {t("recentwork.visitsite")}
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Voice AI Demo */}
        <section className="py-4 md:py-6 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="p-6 md:p-10 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  <Mic className="w-3.5 h-3.5" />
                  {t("recentwork.voice.badge")}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-card-foreground tracking-tight">
                  {t("recentwork.voice.title")}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                  {t("recentwork.voice.desc")}
                </p>
                <div className="pt-4">
                  <DemoVoiceCall />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RecentWorkPage;
