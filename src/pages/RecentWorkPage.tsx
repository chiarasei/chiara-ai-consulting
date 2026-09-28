import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Leaf, Zap, Headphones, QrCode, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
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
        description="See our latest projects: mother.fm, QR-Meny, She Rises and demo websites."
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

        {/* mother.fm */}
        <section className="py-10 md:py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="p-6 md:p-10 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  <Headphones className="w-3.5 h-3.5" />
                  Featured · Membership Platform
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-card-foreground tracking-tight">mother.fm</h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                  A postnatal wellness platform that guides new mothers through a monthly content journey. Built with live Stripe payments for monthly and lifetime memberships, secure member-only access powered by Supabase, and fast audio delivery from Cloudflare R2 storage.
                </p>
                <a href="https://mother.fm" target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2 mt-2">
                    Visit mother.fm
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* QR-Meny */}
        <section className="py-4 md:py-6 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="p-6 md:p-10 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  <QrCode className="w-3.5 h-3.5" />
                  SaaS Product
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-card-foreground tracking-tight">
                  QR-Meny
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                  A digital menu system for Swedish restaurants. Customers scan a QR code on the table and see the full menu instantly on their phone, no waiting for menu books, no interrupting staff. Built and launched in 2 days using AI-powered development.
                </p>
                <a href="https://qrmeny.online" target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2 mt-2 ">
                    Visit qrmeny.online
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Psychology Practice — Audio Demo */}
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

        {/* She Rises */}
        <section className="py-4 md:py-6 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="p-6 md:p-10 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  <Globe className="w-3.5 h-3.5" />
                  Live Product
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-card-foreground tracking-tight">
                  She Rises – Daily Devotional for Women
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                  A daily companion app for women rebuilding their lives, offering gentle devotionals, encouragement, and reflection. Built as a full member platform with sign-in, personal accounts, and a calm, warm reading experience designed for everyday use.
                </p>
                <a href="https://sherises.online" target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2 mt-2 ">
                    Visit sherises.online
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Electrician Company Demo */}
        <section className="py-4 md:py-6 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="p-6 md:p-10 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  <Zap className="w-3.5 h-3.5" />
                  {t("recentwork.electrician.badge")}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-card-foreground tracking-tight">
                  {t("recentwork.electrician.title")}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                  {t("recentwork.electrician.desc")}
                </p>
                <Link to="/demo/electrician">
                  <Button variant="outline" className="gap-2 mt-2">
                    {t("recentwork.viewproject")}
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </Link>
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
