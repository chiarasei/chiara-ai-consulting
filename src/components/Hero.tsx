import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-24 px-6 overflow-hidden">
      {/* Luxury gradient background with animated glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/30 to-accent/10 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent -z-10 animate-pulse" style={{ animationDuration: '4s' }} />
      
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-12 animate-fade-in-up">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-white text-sm font-semibold tracking-wide shadow-glow">
              <Sparkles size={18} strokeWidth={2} className="animate-pulse" />
              AI Automation for Small Businesses
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] tracking-tight">
              Automate Your Business
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                With Luxury AI Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
              Transform your café, restaurant, or salon with premium AI voice agents and intelligent automation that work 24/7
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow text-white text-lg px-12 py-8 font-semibold transition-all duration-500 shadow-medium hover:scale-105"
              onClick={scrollToContact}
            >
              Book Free Consultation
              <ArrowRight className="ml-2" size={20} strokeWidth={2.5} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-12 py-8 font-semibold border-2 border-primary/30 hover:bg-primary/5 hover:border-primary transition-all duration-500"
              onClick={() => {
                const element = document.getElementById("services");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
