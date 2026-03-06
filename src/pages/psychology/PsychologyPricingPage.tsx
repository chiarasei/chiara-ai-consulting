import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import PsychologyLayout from "@/components/psychology/PsychologyLayout";
import { green, greenLight, textMuted, borderClr } from "@/components/psychology/PsychologyLayout";
import { usePsychLang } from "@/components/psychology/PsychLangContext";
import SEOHead from "@/components/SEOHead";

const PsychologyPricingPage = () => {
  const { t } = usePsychLang();

  const plans = [
    { title: t("Individual Therapy", "Individualterapi"), price: "1 000 SEK", duration: t("50 minutes", "50 minuter"), features: [t("Evidence-based approach", "Evidensbaserat tillvägagångssätt"), t("Confidential setting", "Konfidentiell miljö"), t("In-person or online", "På plats eller online"), t("Flexible scheduling", "Flexibel bokning"), t("Follow-up notes", "Uppföljningsanteckningar")] },
    { title: t("Couples Therapy", "Parterapi"), price: "1 400 SEK", duration: t("75 minutes", "75 minuter"), features: [t("Both partners participate", "Båda parter deltar"), t("Communication tools", "Kommunikationsverktyg"), t("Relationship strengthening", "Relationsstärkande"), t("In-person or online", "På plats eller online"), t("Structured exercises", "Strukturerade övningar")] },
  ];

  return (
    <PsychologyLayout>
      <SEOHead title="Pricing – Psykolog Praktiken" description="Transparent therapy session pricing. Individual therapy 1000 SEK, couples therapy 1400 SEK. Free initial consultation." keywords="therapy pricing, session cost, psychologist fees" canonicalPath="/demo/psychology/pricing" />
      <section className="py-16 md:py-24 px-5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-3 mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: green }}>{t("Pricing", "Priser")}</p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight" style={{ color: "#1a1a2e" }}>{t("Transparent pricing", "Transparenta priser")}</h1>
            <p className="max-w-lg mx-auto text-base" style={{ color: textMuted }}>{t("Clear and straightforward session fees with no hidden costs.", "Tydliga och raka sessionsavgifter utan dolda kostnader.")}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {plans.map(({ title, price, duration, features }) => (
              <div key={title} className="p-7 rounded-2xl border" style={{ background: "#fff", borderColor: borderClr }}>
                <h2 className="text-xl font-semibold mb-1" style={{ color: "#1a1a2e" }}>{title}</h2>
                <p className="text-sm mb-5" style={{ color: textMuted }}>{duration} {t("per session", "per session")}</p>
                <p className="text-4xl font-bold mb-6" style={{ color: green }}>{price}</p>
                <ul className="space-y-3">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: textMuted }}>
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: greenLight }}>
                        <Check className="w-3 h-3" style={{ color: green }} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/demo/psychology/contact" className="block text-center mt-6 py-2.5 rounded-xl text-sm font-semibold transition-all hover:shadow-md" style={{ background: green, color: "#fff" }}>
                  {t("Book Now", "Boka nu")}
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 p-6 rounded-2xl" style={{ background: greenLight }}>
            <p className="font-semibold mb-1" style={{ color: "#1a1a2e" }}>{t("Initial consultation is free", "Första konsultationen är kostnadsfri")}</p>
            <p className="text-sm" style={{ color: textMuted }}>{t("A 15-minute introductory call to discuss your needs — no commitment required.", "Ett 15 minuters introduktionssamtal för att diskutera dina behov — inget åtagande krävs.")}</p>
          </div>
        </div>
      </section>
    </PsychologyLayout>
  );
};

export default PsychologyPricingPage;
