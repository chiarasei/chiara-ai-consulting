import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Globe,
  Bot,
  CalendarCheck,
  AlertTriangle,
  Clock,
  UserX,
  Stethoscope,
  Heart,
  Sparkles,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-consulting.jpg";
import chatbotImage from "@/assets/chatbot-illustration.jpg";
import industriesImage from "@/assets/industries-illustration.jpg";

const TradeFairLanding = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Chiara AI Consulting – Modern Websites for Service Businesses"
        description="We upgrade your website and add smart automation so you never miss customer inquiries. Free website review for therapists, clinics & service businesses."
        keywords="website upgrade, chatbot automation, service business website, therapist website, wellness clinic website, cleaning company website"
        canonicalPath="/"
      />
      <Navigation />
      <main>
        {/* HERO */}
        <section className="relative min-h-[85vh] flex items-center pt-28 md:pt-36 pb-16 md:pb-24 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-background to-accent/[0.04] -z-10" />
          <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-3xl -z-10" />

          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="space-y-8 animate-fade-in-up text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-foreground leading-[1.08] tracking-tight text-balance">
                  {t("hero.title1")}{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    {t("hero.title2")}
                  </span>
                </h1>

                <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  {t("hero.description")}
                </p>

                <div>
                  <Link to="/contact">
                    <Button size="lg" className="text-base px-8 py-6 rounded-xl shadow-medium hover:shadow-glow transition-all duration-300 gap-2">
                      {t("hero.cta")}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block">
                <img
                  src={heroImage}
                  alt="Modern website on laptop"
                  className="rounded-2xl shadow-medium w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
                {t("home.problem.title1")}{" "}
                <span className="text-primary">{t("home.problem.title2")}</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("home.problem.subtitle")}
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                { icon: <AlertTriangle className="w-5 h-5" />, text: t("home.problem.p1") },
                { icon: <Clock className="w-5 h-5" />, text: t("home.problem.p2") },
                { icon: <UserX className="w-5 h-5" />, text: t("home.problem.p3") },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center gap-4 p-6 rounded-xl border border-border bg-card hover:shadow-soft transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-sm md:text-base text-foreground font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 md:mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
                {t("home.services.title1")}{" "}
                <span className="text-primary">{t("home.services.title2")}</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("home.services.subtitle")}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="grid gap-4 md:gap-5">
                {[
                  {
                    icon: <Globe className="w-5 h-5" />,
                    title: t("services.website.title"),
                    desc: t("services.website.desc"),
                  },
                  {
                    icon: <Bot className="w-5 h-5" />,
                    title: t("services.chatbot.title"),
                    desc: t("services.chatbot.desc"),
                  },
                  {
                    icon: <CalendarCheck className="w-5 h-5" />,
                    title: t("services.booking.title"),
                    desc: t("services.booking.desc"),
                  },
                ].map((service, i) => (
                  <div
                    key={i}
                    className="group p-5 md:p-6 rounded-xl border border-border bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-sm md:text-base font-bold text-card-foreground mb-1">
                          {service.title}
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hidden lg:flex justify-center">
                <img
                  src={chatbotImage}
                  alt="Chatbot automation illustration"
                  className="rounded-2xl w-full max-w-sm object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="hidden lg:flex justify-center order-1">
                <img
                  src={industriesImage}
                  alt="Modern booking system for service businesses"
                  className="rounded-2xl w-full max-w-sm object-cover"
                  loading="lazy"
                />
              </div>

              <div className="order-2">
                <div className="text-center lg:text-left mb-8 space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
                    {t("home.industries.title1")}{" "}
                    <span className="text-primary">{t("home.industries.title2")}</span>
                  </h2>
                  <p className="text-base text-muted-foreground max-w-xl">
                    {t("home.industries.subtitle")}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Stethoscope className="w-5 h-5" />, title: t("industries.therapists.title") },
                    { icon: <Heart className="w-5 h-5" />, title: t("industries.wellness.title") },
                    { icon: <Sparkles className="w-5 h-5" />, title: t("industries.cleaning.title") },
                    { icon: <Wrench className="w-5 h-5" />, title: t("industries.local.title") },
                  ].map((industry, i) => (
                    <div
                      key={i}
                      className="group flex flex-col items-center text-center gap-3 p-5 rounded-xl border border-border bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                        {industry.icon}
                      </div>
                      <h3 className="text-sm md:text-base font-bold text-card-foreground">
                        {industry.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="container mx-auto max-w-3xl">
            <div className="relative rounded-2xl border border-primary/20 bg-card p-8 md:p-12 overflow-hidden text-center space-y-6">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/[0.05] rounded-full blur-3xl -z-0" />
              <div className="relative z-10 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
                  {t("home.cta.title1")}{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    {t("home.cta.title2")}
                  </span>
                </h2>
                <p className="text-base text-muted-foreground max-w-xl mx-auto">
                  {t("home.cta.subtitle")}
                </p>

                <div className="grid sm:grid-cols-2 gap-3 max-w-lg mx-auto text-left">
                  {[
                    t("home.cta.point1"),
                    t("home.cta.point2"),
                    t("home.cta.point3"),
                    t("home.cta.point4"),
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

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
