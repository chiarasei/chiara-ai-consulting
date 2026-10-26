import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { switchLanguagePath } from "@/lib/i18nRoutes";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, MessageCircle, ChevronDown } from "lucide-react";
import { serviceGroups, serviceText } from "@/lib/serviceCatalog";
import { trackConversion } from "@/lib/conversions";
import logoImage from "@/assets/chiara-ai-logo-brain.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { language, t, lp } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    setServicesOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (window.matchMedia("(min-width: 768px)").matches && event.target instanceof Node && !servicesRef.current?.contains(event.target)) setServicesOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const serviceColumns = (mobile: boolean) => serviceGroups.map((group) => (
    <div key={group.en} className="min-w-0">
      <h3 className={`${mobile ? "text-xl px-3 mb-1" : "text-2xl mb-3"} text-primary`}>{language === "sv" ? group.sv : group.en}</h3>
      <ul className="space-y-1">
        {group.services.map((service) => {
          const Icon = service.icon;
          return (
            <li key={service.id}>
              <Link to={`${lp("/services")}#${service.id}`} onClick={() => { setServicesOpen(false); setIsMobileMenuOpen(false); }}
                className="flex min-h-11 items-center gap-3 rounded px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <Icon size={17} className="shrink-0 text-accent" aria-hidden="true" />
                <span>{serviceText(service, language).title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  ));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("nav.home"), path: lp("/") },
    { label: t("nav.services"), path: lp("/services") },
    { label: t("nav.recentwork"), path: lp("/recent-work") },
    { label: t("nav.pricing"), path: lp("/pricing") },
    { label: t("nav.contact"), path: lp("/contact") },
  ];

  const isActive = (path: string) => location.pathname === path;
  const toggleLanguage = () => {
    setIsMobileMenuOpen(false);
    navigate(switchLanguagePath(location.pathname, language === "en" ? "sv" : "en") + location.hash);
  };

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
            <Link to={lp("/")} className="flex items-center gap-2.5 group" aria-label="ChiaraAI Consulting - Home">
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

            <Button variant="ghost" size="icon"
              className="md:hidden -mr-2 h-11 w-11 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={language === "sv" ? "Öppna meny" : "Toggle menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>

            <div className="hidden md:flex items-center gap-2">
              <a
                href="https://wa.me/46735316950"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion("whatsapp_click")}
                className="flex h-9 items-center gap-1.5 px-3 text-sm font-semibold text-primary hover:text-[hsl(var(--brass))]"
              >
                <MessageCircle size={15} />
                +46 73 531 69 50
              </a>
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
          <div className="relative hidden md:flex items-center justify-center gap-8 pb-3">
            {navLinks.map((link) => link.path === lp("/services") ? (
              <div key={link.path} ref={servicesRef} className="static"
                onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}
                onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false); }}>
                <div className="flex items-center">
                  <Link to={link.path} onFocus={() => setServicesOpen(true)} onClick={() => setServicesOpen(false)} className={`text-sm font-semibold py-1 ${isActive(link.path) ? "text-accent" : "text-primary/80 hover:text-accent"}`}>{link.label}</Link>
                  <Button variant="ghost" size="icon" className="h-7 w-7" aria-label={language === "sv" ? "Visa tjänster" : "Show services"} aria-expanded={servicesOpen} aria-controls="desktop-services" onClick={() => setServicesOpen(!servicesOpen)}>
                    <ChevronDown className={servicesOpen ? "rotate-180" : ""} />
                  </Button>
                </div>
                {servicesOpen && <div id="desktop-services" className="absolute top-[calc(100%-0.75rem)] left-0 right-0 pt-3">
                  <div className="grid grid-cols-3 gap-5 border border-border bg-card p-6 lg:p-8 shadow-medium rounded-b-lg">{serviceColumns(false)}</div>
                </div>}
              </div>
            ) : (
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
            className={`md:hidden absolute top-full left-0 right-0 grid bg-card shadow-medium ${
              isMobileMenuOpen ? "grid-rows-[1fr] opacity-100 border-b border-border" : "grid-rows-[0fr] opacity-0 pointer-events-none"
            }`}
            aria-hidden={!isMobileMenuOpen}
          >
            <div className="overflow-hidden" hidden={!isMobileMenuOpen}>
              <div className="px-4 py-4 space-y-1 max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain">
                {navLinks.map((link) => link.path === lp("/services") ? (
                  <div key={link.path}>
                    <div className="flex items-center">
                      <Link to={link.path} onClick={() => setIsMobileMenuOpen(false)} className={`flex min-h-12 flex-1 items-center px-3 text-base font-medium ${isActive(link.path) ? "text-accent" : "text-foreground"}`}>{link.label}</Link>
                      <Button variant="ghost" size="icon" className="h-12 w-12" aria-label={language === "sv" ? "Visa tjänster" : "Show services"} aria-expanded={servicesOpen} aria-controls="mobile-services" onClick={() => setServicesOpen(!servicesOpen)}><ChevronDown className={servicesOpen ? "rotate-180" : ""} /></Button>
                    </div>
                    {servicesOpen && <div id="mobile-services" className="space-y-5 border-l border-border ml-3 py-3">{serviceColumns(true)}</div>}
                  </div>
                ) : (
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
      <a
        href="https://wa.me/46735316950"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackConversion("whatsapp_click")}
        aria-label={language === "sv" ? "Skriv till oss på WhatsApp" : "Message us on WhatsApp"}
        className="md:hidden fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-medium"
      >
        <MessageCircle size={26} />
      </a>
    </header>
  );
};

export default Navigation;
