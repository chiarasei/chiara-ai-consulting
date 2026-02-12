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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
  const toggleLanguage = () => setLanguage(language === "en" ? "sv" : "en");

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/90 backdrop-blur-xl shadow-soft border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          {/* Top row */}
          <div className="flex items-center justify-between h-16 md:h-18">
            <Link to="/" className="flex items-center gap-2.5 group">
              <img
                src={logoImage}
                alt="ChiaraAI Consulting Logo"
                className="h-10 w-10 md:h-12 md:w-12 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="hidden sm:block text-base md:text-lg font-bold text-foreground tracking-tight">
                chiaraAI<span className="text-primary">consulting</span>.se
              </span>
            </Link>

            <button
              className="md:hidden text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <div className="hidden md:flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="text-muted-foreground hover:text-foreground font-semibold text-sm gap-1.5 h-9"
              >
                <Globe size={15} />
                {language === "en" ? "EN" : "SV"}
              </Button>
              <Link to="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-10 px-5 shadow-soft transition-all duration-300 hover:shadow-medium">
                  {t("nav.bookConsultation")}
                </Button>
              </Link>
            </div>
          </div>

          {/* Nav links row */}
          <div className="hidden md:flex items-center justify-center gap-8 pb-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-semibold transition-colors duration-200 pb-1 ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-xl border-b border-border shadow-medium px-4 py-5 space-y-1 animate-fade-in">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-primary bg-primary/5"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-border mt-2 space-y-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleLanguage}
                  className="w-full justify-start text-muted-foreground font-semibold text-sm gap-1.5"
                >
                  <Globe size={15} />
                  {language === "en" ? "English" : "Svenska"}
                </Button>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    {t("nav.bookConsultation")}
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
