import { useState, useEffect } from "react";
import { Bot, Mail, Phone, ChevronDown, ChevronUp } from "lucide-react";
import PsychologyLayout from "@/components/psychology/PsychologyLayout";
import PsychologyChat from "@/components/psychology/PsychologyChat";
import { green, greenLight, textMuted, borderClr } from "@/components/psychology/PsychologyLayout";
import { usePsychLang } from "@/components/psychology/PsychLangContext";
import SEOHead from "@/components/SEOHead";

const PsychologyContactPage = () => {
  const { t } = usePsychLang();
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PsychologyLayout>
      <SEOHead title="Contact – Psykolog Praktiken" description="Book a free consultation with our licensed psychologist in Gothenburg. Online booking calendar and AI assistant available." keywords="book therapy, contact psychologist, Gothenburg therapy booking" canonicalPath="/demo/psychology/contact" />
      {/* Calendly Booking Section */}
      <section className="py-16 md:py-20 px-5" style={{ background: "linear-gradient(145deg, hsl(165, 35%, 94%), hsl(200, 25%, 93%))" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4 mb-8">
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: green }}>
              {t("Example booking calendar for therapy sessions", "Exempel på bokningskalender för terapisessioner")}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight" style={{ color: "#1a1a2e" }}>
              {t("Book a Free Consultation", "Boka en kostnadsfri konsultation")}
            </h1>
            <p style={{ color: textMuted }}>
              {t("Choose a time that works for you and book your first session directly.", "Välj en tid som passar dig och boka din första session direkt.")}
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border shadow-lg" style={{ borderColor: borderClr, background: "#fff" }}>
            <iframe
              src="https://calendly.com/chiarasei-27/30min?hide_gdpr_banner=1"
              width="100%"
              frameBorder="0"
              title="Book a consultation"
              className="w-full h-[500px] md:h-[700px]"
            />
          </div>
        </div>
      </section>

      {/* AI Assistant Section - Collapsed by default */}
      <section className="py-16 md:py-20 px-5" style={{ background: "#fff" }}>
        <div className="max-w-lg mx-auto">
          <div className="text-center space-y-3 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: "#1a1a2e" }}>
              {t("Have a question? Ask our assistant", "Har du en fråga? Fråga vår assistent")}
            </h2>
            <p className="text-sm" style={{ color: textMuted }}>
              {t("Get instant answers about our services, booking, and therapy process.", "Få omedelbara svar om våra tjänster, bokning och terapiprocess.")}
            </p>
          </div>

          {!chatOpen ? (
            <button
              onClick={() => setChatOpen(true)}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl shadow-md border transition-all hover:shadow-lg"
              style={{ background: green, borderColor: green, color: "#fff" }}
            >
              <Bot className="w-5 h-5" />
              <span className="text-sm font-semibold">{t("Open Chat Assistant", "Öppna chattassistenten")}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          ) : (
            <div className="space-y-3">
              <button
                onClick={() => setChatOpen(false)}
                className="w-full flex items-center justify-center gap-2 text-sm font-medium py-2 transition-colors hover:opacity-70"
                style={{ color: textMuted }}
              >
                {t("Close chat", "Stäng chatten")} <ChevronUp className="w-4 h-4" />
              </button>
              <PsychologyChat />
              <p className="text-center text-xs" style={{ color: textMuted }}>
                {t("We speak English and Swedish · Powered by AI", "Vi pratar engelska och svenska · Drivs av AI")}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Fallback contact info */}
      <section className="py-12 px-5" style={{ background: "#FAFAF8" }}>
        <div className="max-w-md mx-auto text-center space-y-4">
          <p className="text-sm" style={{ color: textMuted }}>
            {t("Unable to book online? Reach us directly:", "Kan du inte boka online? Kontakta oss direkt:")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:kontakt@psykologpraktiken.se" className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-70" style={{ color: green }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: greenLight }}>
                <Mail className="w-4 h-4" style={{ color: green }} />
              </div>
              kontakt@psykologpraktiken.se
            </a>
            <a href="tel:+46735316950" className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-70" style={{ color: green }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: greenLight }}>
                <Phone className="w-4 h-4" style={{ color: green }} />
              </div>
              +46 73 531 69 50
            </a>
          </div>
        </div>
      </section>
    </PsychologyLayout>
  );
};

export default PsychologyContactPage;
