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
      {/* Minimal background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background -z-10" />
      
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-12 animate-fade-in-up">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-foreground text-sm font-medium tracking-wide">
              <Sparkles size={16} strokeWidth={1.5} />
              AI Automation for Small Businesses
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.1] tracking-tight">
              Automate Your Business
              <br />
              <span className="text-primary">
                With AI Solutions
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-normal">
              We help cafés, restaurants, salons, and other small businesses save time and increase customer satisfaction with custom AI chatbots, voice assistants, and automated booking systems.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg px-10 py-7 font-medium transition-all duration-300"
              onClick={scrollToContact}
            >
              Book Free Consultation
              <ArrowRight className="ml-2" size={18} strokeWidth={2} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-7 font-medium border-2 hover:bg-secondary transition-all duration-300"
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
