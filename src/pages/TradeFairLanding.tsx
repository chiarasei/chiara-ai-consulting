import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Globe,
  MessageCircle,
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

const CONTACT_FORM_URL = "/contact";

const TradeFairLanding = () => {
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
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-3xl -z-10" />

          <div className="container mx-auto max-w-4xl text-center space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.08] tracking-tight text-balance">
              Modern Websites That Help Service Businesses{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Get More Clients
              </span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We upgrade your website and add smart automation so you never miss customer inquiries.
            </p>

            <div className="pt-2">
              <a href={CONTACT_FORM_URL}>
                <Button size="lg" className="text-base px-8 py-6 rounded-xl shadow-medium hover:shadow-glow transition-all duration-300 gap-2">
                  Get Your Free Website Review
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
                Your Website Could Be{" "}
                <span className="text-primary">Costing You Clients</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Many small service businesses lose customers every week — not because of bad service, but because of an outdated online presence.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                { icon: <AlertTriangle className="w-5 h-5" />, text: "Outdated websites that don't build trust or convert visitors" },
                { icon: <Clock className="w-5 h-5" />, text: "Slow or no responses to customer inquiries — leads go cold" },
                { icon: <UserX className="w-5 h-5" />, text: "Potential clients choose competitors with better online experiences" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center gap-4 p-6 rounded-xl border border-border bg-card hover:shadow-soft transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-sm md:text-base text-foreground font-medium">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12 md:mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
                What We{" "}
                <span className="text-primary">Do for You</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                A better website and smarter systems — so you can focus on your clients, not admin.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  icon: <Globe className="w-5 h-5" />,
                  title: "Website Upgrade",
                  desc: "A modern, mobile-friendly website designed to build trust and convert visitors into paying clients.",
                },
                {
                  icon: <Bot className="w-5 h-5" />,
                  title: "Chatbot for Customer Questions",
                  desc: "An intelligent chatbot that answers common questions 24/7 — so no inquiry goes unanswered.",
                },
                {
                  icon: <CalendarCheck className="w-5 h-5" />,
                  title: "Booking & Contact Automation",
                  desc: "Simple systems that let customers book appointments or send inquiries without friction.",
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="group p-6 md:p-8 rounded-xl border border-border bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-card-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/50">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12 md:mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
                Built for{" "}
                <span className="text-primary">Service Businesses</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                We understand the challenges of running a local service business — our solutions are built specifically for you.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <Stethoscope className="w-6 h-6" />, title: "Therapists" },
                { icon: <Heart className="w-6 h-6" />, title: "Wellness Clinics" },
                { icon: <Sparkles className="w-6 h-6" />, title: "Cleaning Companies" },
                { icon: <Wrench className="w-6 h-6" />, title: "Local Service Businesses" },
              ].map((industry, i) => (
                <div
                  key={i}
                  className="group flex flex-col items-center text-center gap-3 p-6 rounded-xl border border-border bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-card-foreground">
                    {industry.title}
                  </h3>
                </div>
              ))}
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
                  Get a Free{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Website Review
                  </span>
                </h2>
                <p className="text-base text-muted-foreground max-w-xl mx-auto">
                  We'll review your current website and show you exactly how to improve it — no cost, no commitment.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 max-w-lg mx-auto text-left">
                  {[
                    "Honest assessment of your site",
                    "Actionable improvement tips",
                    "Automation opportunities",
                    "No obligation whatsoever",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <a href={CONTACT_FORM_URL}>
                  <Button size="lg" className="text-base px-8 py-6 rounded-xl shadow-medium hover:shadow-glow transition-all duration-300 gap-2 mt-2">
                    Request Your Free Review
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
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
