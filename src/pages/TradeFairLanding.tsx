import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollFade } from "@/hooks/use-scroll-fade";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  PhoneOff,
  Clock,
  MessageSquareWarning,
  MonitorX,
  Globe,
  Bot,
  Mic,
  CalendarCheck,
  QrCode,
  Languages,
  Utensils,
  Smartphone,
  UtensilsCrossed,
  Coffee,
  Scissors,
  Stethoscope,
  Wrench,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-consulting.jpg";

const TradeFairLanding = () => {
  const { language } = useLanguage();
  const tr = (en: string, sv: string) => (language === "sv" ? sv : en);
  useScrollFade();

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="ChiaraAI Consulting – AI Automation, Booking & QR Solutions for SMEs"
        description="We build modern websites, AI chat & voice agents, automated booking, and QR-Meny restaurant solutions so service businesses never miss a customer."
        keywords="AI automation, booking system, voice agent, QR menu, restaurant technology, small business AI, Gothenburg"
        canonicalPath="/"
      />
      <Navigation />
      <main>
        {/* 1. HERO */}
        <section className="relative pt-24 md:pt-28 pb-12 md:pb-16 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero -z-10" />
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/[0.07] rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-accent/[0.05] rounded-full blur-3xl -z-10" />

          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
              <div className="animate-fade-in-up space-y-5 md:space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide">
                  <Sparkles className="w-3.5 h-3.5" />
                  {tr("Built for Service Businesses", "Byggd för serviceföretag")}
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] tracking-tight text-balance">
                  {tr("Stop Losing Customers.", "Sluta tappa kunder.")}{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    {tr("Start Getting More Bookings.", "Få fler bokningar.")}
                  </span>
                </h1>

                <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  {tr(
                    "We help service businesses reply faster, get more bookings, and never miss customer inquiries.",
                    "Vi hjälper serviceföretag att svara snabbare, få fler bokningar och aldrig missa en kundförfrågan."
                  )}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Link to="/contact">
                    <Button size="lg" className="text-base px-7 py-6 rounded-xl shadow-medium hover:shadow-glow transition-all duration-300 gap-2 w-full sm:w-auto">
                      {tr("Book a Free Demo", "Boka en gratis demo")}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 justify-center lg:justify-start pt-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5"><Bot className="w-3.5 h-3.5 text-primary" /> AI Chat</div>
                  <div className="flex items-center gap-1.5"><Mic className="w-3.5 h-3.5 text-primary" /> Voice Agents</div>
                  <div className="flex items-center gap-1.5"><CalendarCheck className="w-3.5 h-3.5 text-primary" /> Booking</div>
                </div>
              </div>

              <div className="relative animate-fade-in-up">
                <div className="relative rounded-2xl overflow-hidden shadow-medium border border-border">
                  <img
                    src={heroImage}
                    alt="ChiaraAI Consulting solutions for service businesses"
                    className="w-full object-cover aspect-[4/3]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>
                {/* Floating UI cards */}
                <div className="hidden md:flex absolute -left-4 top-8 items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-card/95 backdrop-blur border border-border shadow-soft">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center"><Bot className="w-4 h-4" /></div>
                  <div>
                    <p className="text-[11px] font-semibold text-foreground leading-tight">AI Assistant</p>
                    <p className="text-[10px] text-muted-foreground">{tr("Replied in 2s", "Svarade på 2s")}</p>
                  </div>
                </div>
                <div className="hidden md:flex absolute -right-4 bottom-8 items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-card/95 backdrop-blur border border-border shadow-soft">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center"><CalendarCheck className="w-4 h-4" /></div>
                  <div>
                    <p className="text-[11px] font-semibold text-foreground leading-tight">{tr("New Booking", "Ny bokning")}</p>
                    <p className="text-[10px] text-muted-foreground">{tr("Confirmed automatically", "Bekräftad automatiskt")}</p>
                  </div>
                </div>
                <div className="hidden lg:flex absolute right-6 -top-3 items-center gap-2 px-3 py-2 rounded-xl bg-card/95 backdrop-blur border border-border shadow-soft">
                  <QrCode className="w-4 h-4 text-primary" />
                  <p className="text-[11px] font-semibold text-foreground">QR-Meny</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PROBLEM */}
        <section className="fade-in-section py-14 md:py-20 px-4 md:px-6 relative overflow-hidden" style={{ background: 'hsl(222 47% 11%)' }}>
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="text-center mb-10 md:mb-12 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide">
                <MessageSquareWarning className="w-3.5 h-3.5" />
                {tr("The Problem", "Problemet")}
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight text-balance leading-[1.05]">
                {tr("Right Now, You're Losing Customers", "Just nu förlorar du kunder")}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: <PhoneOff className="w-5 h-5" />, title: tr("Missed Calls", "Missade samtal"), text: tr("Customers contact competitors when nobody answers.", "Kunder kontaktar konkurrenter när ingen svarar.") },
                { icon: <Clock className="w-5 h-5" />, title: tr("Slow Responses", "Långsamma svar"), text: tr("Potential clients leave while waiting for replies.", "Potentiella kunder försvinner medan de väntar på svar.") },
                { icon: <MessageSquareWarning className="w-5 h-5" />, title: tr("Repetitive Questions", "Återkommande frågor"), text: tr("You waste hours answering the same questions manually.", "Du slösar timmar på att svara på samma frågor manuellt.") },
                { icon: <MonitorX className="w-5 h-5" />, title: tr("Outdated Websites", "Föråldrade webbplatser"), text: tr("Customers lose trust before they even contact you.", "Kunder tappar förtroende innan de ens kontaktar dig.") },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl border border-border bg-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center mb-3">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-base text-card-foreground mb-1.5">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="text-base md:text-lg text-foreground text-center mt-10 max-w-2xl mx-auto font-semibold">
              {tr("Every missed message is money left on the table.", "Varje missat meddelande är pengar du lämnar på bordet.")}
            </p>
          </div>
        </section>

        {/* 3. SOLUTION */}
        <section className="fade-in-section py-14 md:py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-10 md:mb-12 space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance max-w-3xl mx-auto">
                {tr("We Make Sure You Never Miss Another Customer", "Vi ser till att du aldrig missar en kund igen")}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {tr(
                  "We help businesses reply faster, get more bookings, and make customer communication easier so you can focus on your work.",
                  "Vi hjälper företag att svara snabbare, få fler bokningar och göra kundkommunikationen enklare så att du kan fokusera på ditt arbete."
                )}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
              {[
                { icon: <Globe className="w-5 h-5" />, title: tr("Modern Website", "Modern webbplats"), desc: tr("A fast, professional site that builds trust and turns visitors into customers.", "En snabb, professionell webbplats som bygger förtroende och omvandlar besökare till kunder.") },
                { icon: <Bot className="w-5 h-5" />, title: tr("AI Chat Assistant", "AI-chattassistent"), desc: tr("Replies to customer questions instantly, 24/7, in multiple languages.", "Svarar på kundfrågor direkt, dygnet runt, på flera språk.") },
                { icon: <Mic className="w-5 h-5" />, title: tr("Voice Assistants", "Röstassistenter"), desc: tr("Answers calls, takes bookings, and never lets a phone ring out.", "Svarar i telefon, tar emot bokningar och låter aldrig en telefon ringa obesvarad.") },
                { icon: <CalendarCheck className="w-5 h-5" />, title: tr("Booking Systems", "Bokningssystem"), desc: tr("Customers book themselves around the clock with confirmations and reminders.", "Kunder bokar själva dygnet runt med bekräftelser och påminnelser.") },
              ].map((item, i) => (
                <div key={i} className="p-5 md:p-6 rounded-2xl border border-border bg-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-base text-card-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. FEATURED PRODUCT — QR-MENY */}
        <section className="fade-in-section py-14 md:py-20 px-4 md:px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-background to-primary/[0.04] -z-10" />
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/[0.08] rounded-full blur-3xl -z-10" />

          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary text-primary-foreground text-xs md:text-sm font-semibold tracking-wide">
                  <Sparkles className="w-3.5 h-3.5" />
                  {tr("Featured Product", "Utvalt produkt")}
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">QR-Meny</span>
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {tr(
                    "A standalone QR menu platform built for restaurants that want guests to access menus instantly from their tables.",
                    "En fristående QR-menyplattform byggd för restauranger som vill att gäster ska kunna se menyn direkt från bordet."
                  )}
                </p>

                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  {[
                    { icon: <QrCode className="w-4 h-4" />, text: tr("QR menus directly on tables", "QR-menyer direkt på bordet") },
                    { icon: <Languages className="w-4 h-4" />, text: tr("Swedish & English support", "Stöd för svenska & engelska") },
                    { icon: <Utensils className="w-4 h-4" />, text: tr("Static & daily lunch menus", "Statiska & dagliga lunchmenyer") },
                    { icon: <Smartphone className="w-4 h-4" />, text: tr("Mobile-friendly experience", "Mobilanpassad upplevelse") },
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl border border-border bg-card">
                      <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">{f.icon}</div>
                      <p className="text-xs md:text-sm font-medium text-card-foreground">{f.text}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-3">
                  <a href="https://qr-meny.se" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="text-base px-7 py-5 rounded-xl shadow-medium hover:shadow-glow transition-all duration-300 gap-2 w-full sm:w-auto">
                      {tr("Visit QR-Meny", "Besök QR-Meny")}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                  <Link to="/recent-work">
                    <Button size="lg" variant="outline" className="text-base px-7 py-5 rounded-xl w-full sm:w-auto">
                      {tr("View Demo", "Se demo")}
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Visual mockup */}
              <div className="relative">
                <div className="relative rounded-3xl border border-border bg-card p-6 md:p-8 shadow-medium">
                  <div className="grid grid-cols-5 gap-4 items-center">
                    {/* Phone mockup */}
                    <div className="col-span-3 mx-auto w-full max-w-[220px]">
                      <div className="rounded-[2rem] border-4 border-foreground/80 bg-background overflow-hidden shadow-medium aspect-[9/19] flex flex-col">
                        <div className="bg-primary text-primary-foreground px-3 py-2 text-[10px] font-bold flex items-center justify-between">
                          <span>QR-Meny</span>
                          <Utensils className="w-3 h-3" />
                        </div>
                        <div className="p-3 space-y-2 flex-1 overflow-hidden">
                          <p className="text-[10px] font-bold text-foreground">{tr("Today's Lunch", "Dagens lunch")}</p>
                          {[
                            { n: tr("Pasta Pesto", "Pasta Pesto"), p: "129 kr" },
                            { n: tr("Salmon Bowl", "Laxbowl"), p: "149 kr" },
                            { n: tr("Veggie Burger", "Veg Burgare"), p: "139 kr" },
                            { n: tr("Caesar Salad", "Caesarsallad"), p: "119 kr" },
                          ].map((item, i) => (
                            <div key={i} className="flex justify-between items-center pb-1.5 border-b border-border">
                              <span className="text-[9px] text-foreground">{item.n}</span>
                              <span className="text-[9px] font-semibold text-primary">{item.p}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* QR code visual */}
                    <div className="col-span-2 space-y-3">
                      <div className="aspect-square rounded-xl bg-background border-2 border-border p-2 grid grid-cols-8 grid-rows-8 gap-px">
                        {Array.from({ length: 64 }).map((_, i) => {
                          const corners = [0,1,2,5,6,7,8,9,10,13,14,15,16,17,18,21,22,23,40,41,42,45,46,47,48,49,50,53,54,55,56,57,58];
                          const on = corners.includes(i) || (i * 7) % 3 === 0;
                          return <div key={i} className={on ? "bg-foreground rounded-[1px]" : ""} />;
                        })}
                      </div>
                      <p className="text-[10px] text-center text-muted-foreground font-medium">{tr("Scan to view menu", "Skanna för meny")}</p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex absolute -bottom-4 -left-4 items-center gap-2 px-3 py-2 rounded-xl bg-card border border-border shadow-soft">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <p className="text-xs font-semibold text-foreground">{tr("Live in restaurants", "Lever i restauranger")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. BUILT FROM REAL BUSINESS PROBLEMS */}
        <section className="fade-in-section py-14 md:py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-3xl text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide">
              {tr("Our Approach", "Vårt förhållningssätt")}
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
              {tr("Built From Real Business Problems", "Byggt utifrån verkliga affärsproblem")}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {tr(
                "We build practical digital systems based on real operational problems observed directly with small businesses and restaurants in Gothenburg from missed customer inquiries to overloaded restaurant staff during busy hours.",
                "Vi bygger praktiska digitala system baserat på verkliga driftproblem som vi sett hos småföretag och restauranger i Göteborg från missade kundförfrågningar till överbelastad restaurangpersonal under rusningstid."
              )}
            </p>
          </div>
        </section>

        {/* 6. INDUSTRIES */}
        <section className="fade-in-section py-14 md:py-20 px-4 md:px-6" style={{ background: 'hsl(222 47% 11%)' }}>
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-10 md:mb-12 space-y-3">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                {tr("Who We Help", "Vilka vi hjälper")}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
                {tr("Practical AI and automation tailored for local service businesses.", "Praktisk AI och automatisering anpassad för lokala serviceföretag.")}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
              {[
                { icon: <UtensilsCrossed className="w-5 h-5" />, title: tr("Restaurants", "Restauranger"), desc: tr("Menus, bookings, table flow.", "Menyer, bokningar, bordsflöde.") },
                { icon: <Coffee className="w-5 h-5" />, title: tr("Cafés", "Caféer"), desc: tr("Daily menus & quick orders.", "Dagliga menyer & snabba beställningar.") },
                { icon: <Scissors className="w-5 h-5" />, title: tr("Salons", "Salonger"), desc: tr("24/7 booking automation.", "Bokning dygnet runt.") },
                { icon: <Stethoscope className="w-5 h-5" />, title: tr("Clinics", "Kliniker"), desc: tr("Appointments & reminders.", "Tidsbokning & påminnelser.") },
                { icon: <Wrench className="w-5 h-5" />, title: tr("Local Services", "Lokala tjänster"), desc: tr("Quotes, calls, follow-ups.", "Offerter, samtal, uppföljning.") },
              ].map((item, i) => (
                <div key={i} className="p-4 md:p-5 rounded-2xl border border-border bg-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 text-center group">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-sm text-card-foreground mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. HOW IT WORKS */}
        <section className="fade-in-section py-14 md:py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12 space-y-3">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                {tr("How It Works", "Så fungerar det")}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5 md:gap-6 relative">
              <div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              {[
                { step: "1", title: tr("Book a Free Demo", "Boka en gratis demo"), desc: tr("We listen, understand your business, and identify quick wins.", "Vi lyssnar, förstår din verksamhet och identifierar snabba vinster.") },
                { step: "2", title: tr("We Build Everything", "Vi bygger allt"), desc: tr("Website, AI, voice, booking, automation — set up end to end.", "Webbplats, AI, röst, bokning, automatisering — uppsatt från start till mål.") },
                { step: "3", title: tr("You Get More Customers", "Du får fler kunder"), desc: tr("Your systems work 24/7 so you focus on running the business.", "Dina system jobbar dygnet runt så du kan fokusera på verksamheten.") },
              ].map((item, i) => (
                <div key={i} className="relative text-center space-y-3 p-5 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center mx-auto text-lg font-bold shadow-medium relative z-10">
                    {item.step}
                  </div>
                  <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. FINAL CTA */}
        <section className="fade-in-section py-14 md:py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl border border-border p-8 md:p-14 text-center bg-gradient-to-br from-primary/[0.08] via-card to-primary/[0.04]">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative space-y-5">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
                  {tr("Ready to Modernize Your Business?", "Redo att modernisera din verksamhet?")}
                </h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  {tr(
                    "Reply faster, get more bookings, and never miss another customer inquiry.",
                    "Svara snabbare, få fler bokningar och missa aldrig en kundförfrågan."
                  )}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <Link to="/contact">
                    <Button size="lg" className="text-base px-8 py-6 rounded-xl shadow-medium hover:shadow-glow transition-all duration-300 gap-2 w-full sm:w-auto">
                      {tr("Book a Call", "Boka ett samtal")}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button size="lg" variant="outline" className="text-base px-8 py-6 rounded-xl w-full sm:w-auto">
                      {tr("Explore Solutions", "Utforska lösningar")}
                    </Button>
                  </Link>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs md:text-sm font-medium animate-pulse mt-3">
                  <MessageCircle className="w-4 h-4" />
                  {tr("Or ask our AI assistant anything", "Eller fråga vår AI-assistent vad som helst")}
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

export default TradeFairLanding;
