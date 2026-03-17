import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollFade } from "@/hooks/use-scroll-fade";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  AlertTriangle,
  Clock,
  UserX,
  SmartphoneNfc,
  MessageCircleOff,
  Mic,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-consulting.jpg";


const TradeFairLanding = () => {
  const { t, language } = useLanguage();
  useScrollFade();

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Chiara AI Consulting – Modern Websites & Automation for Service Businesses"
        description="We help small businesses upgrade their websites and automate customer inquiries so they never miss a potential client. Free website review."
        keywords="website upgrade, chatbot automation, service business website, therapist website, wellness clinic website, cleaning company website"
        canonicalPath="/"
      />
      <Navigation />
      <main>
        {/* HERO */}
        <section className="relative min-h-[70vh] flex items-center pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero -z-10" />
          <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-primary/[0.06] rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-3xl -z-10" />

          <div className="container mx-auto max-w-6xl">
            <div className="animate-fade-in-up text-center space-y-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] tracking-tight text-balance max-w-4xl mx-auto">
                {t("hero.title1")}{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {t("hero.title2")}
                </span>
              </h1>

              <img
                src={heroImage}
                alt="Professional consulting team collaborating"
                className="rounded-2xl shadow-medium w-full object-cover max-h-[350px] md:max-h-[450px] max-w-4xl mx-auto"
                loading="eager"
              />

              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("hero.description")}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="text-base px-8 py-6 rounded-xl shadow-medium hover:shadow-glow transition-all duration-300 gap-2 w-full sm:w-auto">
                    {t("hero.cta")}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="text-base px-8 py-6 rounded-xl transition-all duration-300 gap-2 w-full sm:w-auto">
                    {t("hero.cta2")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>


        {/* VOICE ASSISTANT DEMO */}
        <section className="fade-in-section py-10 md:py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
              {t("home.voice.title")}
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              {t("home.voice.subtitle")}
            </p>
            <p className="text-xs text-muted-foreground italic">
              {language === "sv" ? "Tillgänglig på svenska och engelska" : "Available in Swedish and English"}
            </p>

            <div className="pt-4">
              <DemoVoiceCall />
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="fade-in-section py-10 md:py-16 px-4 md:px-6" style={{ background: 'hsl(222 47% 11%)' }}>
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-10 md:mb-12 space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
                {t("home.problem.title")}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("home.problem.subtitle")}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto">
              {[
                { icon: <AlertTriangle className="w-4 h-4" />, text: t("home.problem.p1") },
                { icon: <SmartphoneNfc className="w-4 h-4" />, text: t("home.problem.p2") },
                { icon: <UserX className="w-4 h-4" />, text: t("home.problem.p3") },
                { icon: <Clock className="w-4 h-4" />, text: t("home.problem.p4") },
                { icon: <MessageCircleOff className="w-4 h-4" />, text: t("home.problem.p5") },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ${
                    i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <p className="text-sm text-foreground font-medium">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground text-center mt-8 max-w-xl mx-auto">
              {t("home.problem.closing")}
            </p>
          </div>
        </section>

        {/* ABOUT */}
        <section className="fade-in-section py-10 md:py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-6 space-y-3">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
                {t("home.about.title")}
              </h2>
            </div>

            <div className="space-y-3 max-w-3xl mx-auto">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-center">
                {t("home.about.p1")}
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-center">
                {t("home.about.p2")}
              </p>

              <div className="grid sm:grid-cols-2 gap-3 md:gap-4 pt-4">
                {[
                  { title: t("home.about.v1.title"), desc: t("home.about.v1.desc") },
                  { title: t("home.about.v2.title"), desc: t("home.about.v2.desc") },
                  { title: t("home.about.v3.title"), desc: t("home.about.v3.desc") },
                  { title: t("home.about.v4.title"), desc: t("home.about.v4.desc") },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl border border-border bg-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                    <h3 className="text-sm font-bold text-card-foreground mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="fade-in-section py-10 md:py-16 px-4 md:px-6" style={{ background: 'hsl(222 47% 11%)' }}>
          <div className="container mx-auto max-w-3xl">
            <div className="relative rounded-2xl border border-primary/20 bg-card p-8 md:p-12 overflow-hidden text-center space-y-6">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/[0.05] rounded-full blur-3xl -z-0" />
              <div className="relative z-10 space-y-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
                  {t("home.cta.title")}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                  {t("home.cta.subtitle")}
                </p>

                <Link to="/contact">
                  <Button size="lg" className="text-base px-8 py-6 rounded-xl shadow-medium hover:shadow-glow transition-all duration-300 gap-2 mt-2">
                    {t("home.cta.button")}
                    <ArrowRight className="w-4 h-4" />
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

export default TradeFairLanding;
