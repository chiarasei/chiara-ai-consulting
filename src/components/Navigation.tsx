import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImage from "@/assets/chiara-ai-logo-brain.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "Services", id: "services" },
    { label: "Industries", id: "industries" },
    { label: "Pricing", id: "pricing" },
    { label: "About", id: "about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-xl shadow-medium border-b border-primary/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        {/* Top Row: Logo and Company Name */}
        <div className="flex items-center justify-center md:justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300"
          >
            <img 
              src={logoImage} 
              alt="ChiaraAI Consulting Logo" 
              className="h-16 w-16 object-contain drop-shadow-[0_0_12px_hsl(var(--primary)/0.5)] transition-all duration-300 hover:drop-shadow-[0_0_18px_hsl(var(--primary)/0.7)]"
            />
            <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent tracking-tight">
              chiaraAIconsulting.se
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute right-6 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>

          {/* Desktop CTA Button */}
          <Button 
            onClick={() => scrollToSection("contact")} 
            className="hidden md:inline-flex bg-gradient-primary hover:shadow-glow text-white font-semibold transition-all duration-500 hover:scale-105"
          >
            Book Free Consultation
          </Button>
        </div>

        {/* Bottom Row: Desktop Navigation Links */}
        <div className="hidden md:flex items-center justify-center gap-6 mt-3 pt-3 border-t border-primary/10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-base font-bold text-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-primary/20 shadow-lg z-50 px-6 py-6 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 py-2 break-words"
              >
                {link.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection("contact")} 
              className="w-full bg-primary hover:bg-primary/90 font-medium transition-all duration-300 whitespace-normal break-words"
            >
              Book Free Consultation
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
