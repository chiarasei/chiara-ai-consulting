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
    { label: t("nav.recentwork"), path: "/recent-work" },
    { label: t("nav.services"), path: "/services" },
    { label: t("nav.pricing"), path: "/pricing" },
    { label: t("nav.contact"), path: "/contact" },
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
            <Link to="/" className="flex items-center gap-2.5 group" aria-label="ChiaraAI Consulting - Home">
              <img
                src={logoImage}
                alt="ChiaraAI Consulting Logo"
                width={200}
                height={200}
                loading="eager"
                decoding="async"
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
                <span className="hidden sm:block text-base md:text-lg font-bold tracking-tight">
                  chiaraAI<span className="text-[hsl(var(--brass))]">consulting</span>
                  <span className="text-foreground/60">.se</span>
                </span>
            </Link>

            <button
              className="md:hidden -mr-2 flex h-11 w-11 items-center justify-center text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                    ? "text-[hsl(var(--brass))]"
                    : "text-primary/80 hover:text-[hsl(var(--brass))]"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[hsl(var(--brass))] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu */}
          <div
            className={`md:hidden absolute top-full left-0 right-0 grid bg-card/98 backdrop-blur-xl shadow-medium transition-all duration-300 ease-out ${
              isMobileMenuOpen ? "grid-rows-[1fr] opacity-100 border-b border-border" : "grid-rows-[0fr] opacity-0 pointer-events-none"
            }`}
            aria-hidden={!isMobileMenuOpen}
          >
            <div className="overflow-hidden">
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    tabIndex={isMobileMenuOpen ? 0 : -1}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex min-h-12 items-center px-3 rounded-lg text-base font-medium transition-colors ${
                      isActive(link.path)
                        ? "text-[hsl(var(--brass))] bg-primary/5"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-2 border-t border-border mt-2">
                  <Button
                    variant="ghost"
                    onClick={toggleLanguage}
                    tabIndex={isMobileMenuOpen ? 0 : -1}
                    className="h-12 w-full justify-start text-muted-foreground font-semibold text-base gap-2"
                  >
                    <Globe size={16} />
                    {language === "en" ? "English" : "Svenska"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
