import { Sparkles } from "lucide-react";
import { DemoBotChat } from "./DemoBotChat";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-36 md:pt-44 pb-16 md:pb-24 px-4 md:px-6 overflow-hidden">
      {/* Professional gradient background with animated glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/30 to-accent/10 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent -z-10 animate-pulse" style={{ animationDuration: '4s' }} />
      
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-8 md:space-y-10 animate-fade-in-up">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-gradient-primary text-white text-xs md:text-sm font-semibold tracking-wide shadow-glow">
              <Sparkles size={16} strokeWidth={2} className="animate-pulse" />
              AI Automation for Small Businesses
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] md:leading-[1.05] tracking-tight px-2">
              Automate Your Business
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                With AI Solutions
              </span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium px-2">
              We help hotels, restaurants, cafés, and salons save time and serve customers better with intelligent AI chatbots and voice agents. From answering questions around the clock to handling bookings and sending reminders — our multilingual solutions work seamlessly in Swedish and English, so you can focus on what you do best.
            </p>
          </div>
          
          {/* Demo Bot */}
          <div className="pt-4">
            <DemoBotChat />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
