import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import logoImage from "@/assets/chiara-ai-logo-brain.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("nav.home"), path: "/" },
    { label: t("nav.services"), path: "/services" },
    { label: t("nav.industries"), path: "/industries" },
    { label: t("nav.pricing"), path: "/pricing" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "sv" : "en");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-xl shadow-medium border-b border-primary/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-center md:justify-between">
          <Link
            to="/"
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
          </Link>

          <button
            className="md:hidden absolute right-6 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-foreground hover:text-primary font-bold text-sm gap-1.5"
            >
              <Globe size={16} />
              {language === "en" ? "EN" : "SV"}
            </Button>
            <Link to="/contact">
              <Button 
                className="bg-gradient-primary hover:shadow-glow text-white font-semibold transition-all duration-500 hover:scale-105"
              >
                {t("nav.bookConsultation")}
              </Button>
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center gap-6 mt-3 pt-3 border-t border-primary/10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-base font-bold transition-colors duration-300 ${
                isActive(link.path) ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-primary/20 shadow-lg z-50 px-6 py-6 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-left text-sm font-medium transition-colors duration-300 py-2 break-words ${
                  isActive(link.path) ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="w-full justify-start text-foreground hover:text-primary font-bold text-sm gap-1.5"
            >
              <Globe size={16} />
              {language === "en" ? "English" : "Svenska"}
            </Button>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 font-medium transition-all duration-300 whitespace-normal break-words"
              >
                {t("nav.bookConsultation")}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
