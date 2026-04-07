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
  MessageCircle,
  Globe,
  Bot,
  CalendarCheck,
  TrendingUp,
  Zap,
  BarChart3,
  Monitor,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-consulting.jpg";

const TradeFairLanding = () => {
  const { t } = useLanguage();
  useScrollFade();

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Chiara AI Consulting – More Bookings, Fewer Missed Customers"
        description="We help small service businesses respond to every customer, automate inquiries, and get more bookings with modern websites and AI chat assistants."
        keywords="website upgrade, chatbot automation, service business website, AI booking, customer automation"
        canonicalPath="/"
      />
      <Navigation />
      <main>
        {/* 1. HERO */}
        <section className="relative min-h-[70vh] flex items-center pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero -z-10" />
          <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-primary/[0.06] rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-3xl -z-10" />

          <div className="container mx-auto max-w-6xl">
            <div className="animate-fade-in-up text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {t("hero.badge")}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] tracking-tight text-balance max-w-4xl mx-auto">
                {t("hero.title1")}{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {t("hero.title2")}
                </span>
              </h1>

              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("hero.description")}
              </p>

              <img
                src={heroImage}
                alt="Professional consulting team collaborating"
                className="rounded-2xl shadow-medium w-full object-cover max-h-[350px] md:max-h-[450px] max-w-4xl mx-auto"
                loading="eager"
              />

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

        {/* 2. PROBLEM */}
        <section className="fade-in-section py-12 md:py-20 px-4 md:px-6 relative overflow-hidden" style={{ background: 'hsl(222 47% 11%)' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent -z-0" />
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="text-center mb-10 md:mb-12 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide mb-2 animate-pulse">
                <AlertTriangle className="w-3.5 h-3.5" />
                {t("home.problem.title")}
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
                {t("home.problem.title")}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
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

            <p className="text-sm text-muted-foreground text-center mt-8 max-w-xl mx-auto font-medium">
              {t("home.problem.closing")}
            </p>
          </div>
        </section>

        {/* 3. SOLUTION */}
        <section className="fade-in-section py-10 md:py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-10 md:mb-12 space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
                {t("home.solution.title")}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("home.solution.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {[
                { icon: <Globe className="w-5 h-5" />, title: t("home.solution.s1.title"), desc: t("home.solution.s1.desc") },
                { icon: <Bot className="w-5 h-5" />, title: t("home.solution.s2.title"), desc: t("home.solution.s2.desc") },
                { icon: <CalendarCheck className="w-5 h-5" />, title: t("home.solution.s3.title"), desc: t("home.solution.s3.desc") },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl border border-border bg-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-card-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. BENEFITS */}
        <section className="fade-in-section py-10 md:py-16 px-4 md:px-6" style={{ background: 'hsl(222 47% 11%)' }}>
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
                {t("home.benefits.title")}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
              {[
                { icon: <TrendingUp className="w-5 h-5" />, title: t("home.benefits.b1.title"), desc: t("home.benefits.b1.desc") },
                { icon: <Zap className="w-5 h-5" />, title: t("home.benefits.b2.title"), desc: t("home.benefits.b2.desc") },
                { icon: <BarChart3 className="w-5 h-5" />, title: t("home.benefits.b3.title"), desc: t("home.benefits.b3.desc") },
                { icon: <Monitor className="w-5 h-5" />, title: t("home.benefits.b4.title"), desc: t("home.benefits.b4.desc") },
              ].map((item, i) => (
                <div key={i} className="p-5 md:p-6 rounded-xl border border-border bg-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-sm md:text-base text-card-foreground mb-2">{item.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. HOW IT WORKS */}
        <section className="fade-in-section py-10 md:py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-10 md:mb-12 space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
                {t("home.howitworks.title")}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                {t("home.howitworks.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto">
              {[
                { step: "1", title: t("home.howitworks.step1.title"), desc: t("home.howitworks.step1.desc") },
                { step: "2", title: t("home.howitworks.step2.title"), desc: t("home.howitworks.step2.desc") },
                { step: "3", title: t("home.howitworks.step3.title"), desc: t("home.howitworks.step3.desc") },
              ].map((item, i) => (
                <div key={i} className="text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto text-lg font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ASK US ANYTHING */}
        <section className="fade-in-section py-10 md:py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
              {t("home.ask.title")}
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              {t("home.ask.subtitle")}
            </p>
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium animate-pulse">
              <MessageCircle className="w-4 h-4" />
              {t("home.ask.hint")}
            </div>
          </div>
        </section>

        {/* 6. CTA */}
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
