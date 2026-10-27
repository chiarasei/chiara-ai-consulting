import { Mail, Phone, MessageCircle, MapPin, Calendar, MessageSquare, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";
import ContactForm from "@/components/ContactForm";
import { trackConversion, listenForCalendlyBookings, type ConversionEvent } from "@/lib/conversions";

const Contact = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"book" | "message" | null>("message");
  useEffect(() => {
    listenForCalendlyBookings();
  }, []);

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: t("contact.email"),
      value: "info@chiaraaiconsulting.se",
      href: "mailto:info@chiaraaiconsulting.se",
      event: "email_click" as ConversionEvent,
    },
    {
      icon: <Phone size={20} />,
      label: t("contact.phone"),
      value: "+46 73 531 69 50",
      href: "tel:+46735316950",
      event: "phone_click" as ConversionEvent,
    },
    {
      icon: <MessageCircle size={20} />,
      label: "WhatsApp",
      value: "+46 73 531 69 50",
      href: "https://wa.me/46735316950",
      event: "whatsapp_click" as ConversionEvent,
    },
    {
      icon: <MapPin size={20} />,
      label: t("contact.location"),
      value: t("contact.locationValue"),
      href: undefined as string | undefined,
      event: undefined as ConversionEvent | undefined,
    },
  ];

  return (
    <section id="contact" className="py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 md:mb-14 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            {t("contact.title1")}<span className="text-primary">{t("contact.title2")}</span>{t("contact.title3")}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            {t("contact.subtitle")}
          </p>
        </div>

        {/* Action buttons */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => setActiveTab(activeTab === "book" ? null : "book")}
              className={`flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                activeTab === "book"
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "bg-card text-foreground border-border hover:border-primary/50 hover:shadow-md"
              }`}
            >
              <Calendar size={18} />
              {t("contact.bookCall")}
              {activeTab === "book" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <button
              onClick={() => setActiveTab(activeTab === "message" ? null : "message")}
              className={`flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                activeTab === "message"
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "bg-card text-foreground border-border hover:border-primary/50 hover:shadow-md"
              }`}
            >
              <MessageSquare size={18} />
              {t("contact.sendMessage")}
              {activeTab === "message" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>

          {activeTab === "book" && (
            <div className="rounded-xl border border-border shadow-soft bg-card overflow-hidden animate-in slide-in-from-top-2 duration-300">
              <iframe
                src="https://calendly.com/chiarasei-27/30min?hide_gdpr_banner=1"
                width="100%"
                frameBorder={0}
                title="Book a Call"
                className="w-full h-[550px] md:h-[700px]"
              />
            </div>
          )}

          {activeTab === "message" && (
            <div className="animate-in slide-in-from-top-2 duration-300">
              <p className="mb-3 text-center text-sm font-medium text-primary">
                {language === "sv" ? "Vi svarar inom 24 timmar, oftast samma dag." : "We reply within 24 hours, usually the same day."}
              </p>
              <ContactForm />
            </div>
          )}
        </div>

        {/* Contact info cards below */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
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
                  onClick={() => item.event && trackConversion(item.event)}
                  {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
      </div>
    </section>
  );
};

export default Contact;
