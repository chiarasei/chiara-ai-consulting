import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: t("contact.email"),
      value: "info@chiaraaiconsulting.se",
      href: "mailto:info@chiaraaiconsulting.se",
    },
    {
      icon: <Phone size={20} />,
      label: t("contact.phone"),
      value: "+46 73 531 69 50",
      href: "tel:+46735316950",
    },
    {
      icon: <MapPin size={20} />,
      label: t("contact.location"),
      value: t("contact.locationValue"),
    },
  ];

  return (
    <section id="contact" className="py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            {t("contact.title1")}<span className="text-primary">{t("contact.title2")}</span>{t("contact.title3")}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5 mb-12">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="p-6 md:p-8 text-center rounded-xl border border-border bg-card hover:shadow-medium transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="font-bold text-sm text-card-foreground mb-2">{item.label}</h3>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-primary hover:text-primary/80 transition-colors text-sm font-medium break-all"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-muted-foreground text-sm font-medium">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfrecdm7q5R7w0vfZ70gxxBzJX2Px41jIWQzQi0ghufJgCfRA/viewform?usp=header&embedded=true"
            width="100%"
            height="800"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            className="rounded-xl border border-border shadow-soft bg-card"
            title="Contact Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
