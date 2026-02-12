import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import logoImage from "@/assets/chiara-ai-logo-brain.png";

const Footer = () => {
  const { t } = useLanguage();

  const navItems = [
    { label: t("footer.home"), path: "/" },
    { label: t("footer.services"), path: "/services" },
    { label: t("footer.industries"), path: "/industries" },
    { label: t("footer.pricing"), path: "/pricing" },
    { label: t("footer.contact"), path: "/contact" },
  ];

  return (
    <footer className="bg-card border-t border-border py-12 md:py-16 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImage} alt="ChiaraAI Logo" className="h-8 w-8 object-contain" />
              <span className="font-bold text-foreground">
                chiaraAI<span className="text-primary">consulting</span>
              </span>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground text-sm">{t("footer.navigation")}</h4>
            <ul className="space-y-2.5 text-xs md:text-sm">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground text-sm">{t("footer.services")}</h4>
            <ul className="space-y-2.5 text-xs md:text-sm text-muted-foreground">
              <li>{t("footer.aiChatbots")}</li>
              <li>{t("footer.voiceAssistants")}</li>
              <li>{t("footer.bookingSystems")}</li>
              <li>{t("footer.marketingAutomation")}</li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold mb-4 text-foreground text-sm">{t("footer.contact")}</h4>
            <ul className="space-y-2.5 text-xs md:text-sm text-muted-foreground">
              <li>chiarasei.27@gmail.com</li>
              <li>+46 73 531 69 50</li>
              <li>{t("contact.locationValue")}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-xs text-muted-foreground">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
