import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center pt-36 md:pt-44 pb-16 md:pb-24 px-4 md:px-6 overflow-hidden">
      {/* Professional gradient background with animated glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/30 to-accent/10 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent -z-10 animate-pulse" style={{ animationDuration: '4s' }} />
      
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-8 md:space-y-12 animate-fade-in-up">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-gradient-primary text-white text-xs md:text-sm font-semibold tracking-wide shadow-glow">
              <Sparkles size={16} strokeWidth={2} className="animate-pulse" />
              AI Automation for Small Businesses
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] md:leading-[1.05] tracking-tight px-2">
              Automate Your Business
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                With AI Solutions
              </span>
            </h1>
            
            <p className="text-base md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium px-2">
              We help hotels, restaurants, cafés, and salons automate customer communication with AI chatbots, AI assistants, and voice agents — so you never miss a booking, call, or message again.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto px-2">
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground/80 leading-relaxed">
              From answering guest questions 24/7 to handling bookings and phone calls automatically, our AI solutions reduce manual workload, improve customer experience, and support your staff — without complex systems or expensive software.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-5 pt-4 md:pt-6">
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base md:text-lg px-8 md:px-12 py-6 md:py-8 font-semibold border-2 border-primary/30 hover:bg-primary/5 hover:border-primary transition-all duration-500 w-full sm:w-auto"
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
