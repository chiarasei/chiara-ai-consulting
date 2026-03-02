import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Globe, Search, Megaphone, Clock, Users, Eye, Mail, TrendingUp, Sparkles, CheckCircle2, CalendarCheck, Target } from "lucide-react";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfrecdm7q5R7w0vfZ70gxxBzJX2Px41jIWQzQi0ghufJgCfRA/viewform?usp=header";

const TradeFairLanding = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Chiara AI Consulting – Get More Customers Without Hiring More Staff"
        description="We help small businesses respond faster, improve visibility, and turn more website visitors into paying customers. Book your free 20-minute Growth Session today."
        keywords="small business growth Sweden, customer automation, digital marketing Sweden, business growth session, trade fair special"
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              Trade Fair Special – Limited Availability
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.08] tracking-tight text-balance">
              Get More Customers{" "}
              <br className="hidden sm:block" />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Without Hiring More Staff
              </span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We help small businesses respond faster, improve visibility, and turn more website visitors into paying customers.
            </p>

            <div className="pt-2">
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-base px-8 py-6 rounded-xl shadow-medium hover:shadow-glow transition-all duration-300 gap-2">
                  Book Your Free Growth Session
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <p className="text-xs text-muted-foreground mt-3">Free 20-minute session · No commitment</p>
            </div>
          </div>
        </section>

        {/* THE PROBLEM */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
                Does This Sound Like{" "}
                <span className="text-primary">Your Business?</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {[
                { icon: <Users className="w-5 h-5" />, text: "You want more customers" },
                { icon: <Mail className="w-5 h-5" />, text: "You sometimes miss messages from potential customers" },
                { icon: <Clock className="w-5 h-5" />, text: "You don't have time to reply quickly" },
                { icon: <Eye className="w-5 h-5" />, text: "Your website isn't bringing enough enquiries" },
                { icon: <TrendingUp className="w-5 h-5" />, text: "Social media isn't turning into real sales" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:shadow-soft transition-all duration-300 ${
                    i === 4 ? "sm:col-span-2 sm:max-w-md sm:mx-auto" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-sm md:text-base text-foreground font-medium pt-1.5">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE SOLUTION */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12 md:mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
                We Set Up Your{" "}
                <span className="text-primary">Customer Growth System</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Smart technology works behind the scenes to save you time and bring in more customers — so you can focus on what you do best.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {[
                {
                  icon: <MessageCircle className="w-5 h-5" />,
                  title: "24/7 Automatic Replies",
                  desc: "Never miss a customer message on Instagram & WhatsApp — even outside business hours.",
                },
                {
                  icon: <Globe className="w-5 h-5" />,
                  title: "Modern Website That Converts",
                  desc: "A professional website designed to turn visitors into paying customers.",
                },
                {
                  icon: <Mail className="w-5 h-5" />,
                  title: "Enquiry Collection Systems",
                  desc: "Simple systems that capture every customer enquiry automatically.",
                },
                {
                  icon: <Search className="w-5 h-5" />,
                  title: "Better Google Visibility",
                  desc: "Get found by more customers searching for your services online.",
                },
                {
                  icon: <Megaphone className="w-5 h-5" />,
                  title: "Smart Advertising",
                  desc: "Targeted ads on Facebook, Instagram & Google that bring real customers — not just clicks.",
                },
                {
                  icon: <Sparkles className="w-5 h-5" />,
                  title: "Time-Saving Automation",
                  desc: "Intelligent systems that handle repetitive tasks so you can focus on growing your business.",
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="group p-5 md:p-6 rounded-xl border border-border bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-card-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRADE FAIR SPECIAL */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/50">
          <div className="container mx-auto max-w-4xl">
            <div className="relative rounded-2xl border border-primary/20 bg-card p-8 md:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/[0.05] rounded-full blur-3xl -z-0" />

              <div className="relative z-10 text-center space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold">
                  <CalendarCheck className="w-3.5 h-3.5" />
                  Trade Fair Special
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
                  Free Business Growth Session
                </h2>

                <p className="text-base text-muted-foreground max-w-xl mx-auto">
                  Book a free 20-minute session where we:
                </p>

                <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
                  {[
                    "Review your current setup",
                    "Identify missed opportunities",
                    "Suggest practical improvements",
                    "Show how automation can save time and increase sales",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-muted-foreground italic">
                  ⚡ Limited availability after the event
                </p>

                <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="text-base px-8 py-6 rounded-xl shadow-medium hover:shadow-glow transition-all duration-300 gap-2">
                    Claim My Free Session
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="container mx-auto max-w-3xl text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              <Target className="w-3.5 h-3.5" />
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
              Helping Swedish Businesses{" "}
              <span className="text-primary">Grow Smarter</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Chiara AI Consulting helps Swedish businesses grow using smart digital systems that save time and increase revenue. We make technology simple, practical, and focused on real results.
            </p>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/50">
          <div className="container mx-auto max-w-3xl text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Let's Help You{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Grow.</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              Start with a free 20-minute Growth Session — no commitment, just practical advice for your business.
            </p>
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-base px-8 py-6 rounded-xl shadow-medium hover:shadow-glow transition-all duration-300 gap-2 mt-2">
                Book Your Free Growth Session
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TradeFairLanding;
