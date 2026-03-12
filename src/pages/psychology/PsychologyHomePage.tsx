import { useState } from "react";
import { Link } from "react-router-dom";
import { Bot, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import PsychologyLayout from "@/components/psychology/PsychologyLayout";
import { green, greenLight, greenText, textMuted, borderClr } from "@/components/psychology/PsychologyLayout";
import { usePsychLang } from "@/components/psychology/PsychLangContext";
import SEOHead from "@/components/SEOHead";
import PsychologyChat from "@/components/psychology/PsychologyChat";
import therapyHero from "@/assets/therapy-hero.jpg";
import therapistPortrait from "@/assets/therapist-portrait.jpg";

const DemoPsychologyHome = () => {
  const { t } = usePsychLang();
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <PsychologyLayout>
      <SEOHead
        title="Psykolog Praktiken – Professional Psychotherapy in Gothenburg"
        description="Licensed psychologist offering individual therapy, couples therapy, stress and trauma support in Gothenburg. Book your free consultation today."
        keywords="psychologist Gothenburg, therapy, CBT, couples therapy, anxiety treatment, psykolog Göteborg"
        canonicalPath="/demo/psychology"
      />
      <section className="relative overflow-hidden min-h-[70vh] md:min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img src={therapyHero} alt="Therapy session — therapist listening to client in a calm office" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(250,250,248,0.85) 0%, rgba(250,250,248,0.6) 30%, rgba(250,250,248,0.3) 60%, rgba(250,250,248,0.7) 100%)" }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-5 py-20 md:py-32 w-full text-center flex flex-col items-center">
          <div className="max-w-lg space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide" style={{ background: "rgba(255,255,255,0.85)", color: greenText }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: green }} />
              {t("Licensed Psychologist in Gothenburg", "Legitimerad psykolog i Göteborg")}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight break-words" style={{ color: "#1a1a2e" }}>
              {t("Professional Psychotherapy", "Professionell psykoterapi")}
              <br />
              <span style={{ color: green }}>{t("in Gothenburg", "i Göteborg")}</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: textMuted }}>
              {t(
                "A safe and supportive space to talk about anxiety, stress, relationships, and life challenges.",
                "Ett tryggt och stödjande utrymme för att prata om ångest, stress, relationer och livets utmaningar."
              )}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link to="/demo/psychology/contact" className="px-7 py-3 rounded-full text-sm font-semibold shadow-md transition-all hover:shadow-lg" style={{ background: green, color: "#fff" }}>
                {t("Book Your First Session", "Boka ditt första samtal")}
              </Link>
              <button onClick={() => setChatOpen(true)} className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold shadow-lg transition-all hover:shadow-xl" style={{ background: green, color: "#fff" }}>
                <Bot className="w-5 h-5" />
                {t("Ask Our AI Assistant", "Fråga vår AI-assistent")}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-5" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: green }}>{t("About", "Om oss")}</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: "#1a1a2e" }}>
              {t("Warm, professional care for your mental well‑being", "Varm, professionell omsorg för ditt psykiska välbefinnande")}
            </h2>
            <p className="leading-relaxed" style={{ color: textMuted }}>
              {t(
                "With over 10 years of experience as a licensed psychologist, I help clients navigate anxiety, stress, depression, relationship difficulties, and major life transitions. My approach is grounded in empathy, evidence‑based methods, and a genuine commitment to your growth.",
                "Med över 10 års erfarenhet som legitimerad psykolog hjälper jag klienter att navigera ångest, stress, depression, relationsproblem och stora livsförändringar. Mitt tillvägagångssätt grundas i empati, evidensbaserade metoder och ett genuint engagemang för din utveckling."
              )}
            </p>
            <p className="leading-relaxed" style={{ color: textMuted }}>
              {t(
                "I believe therapy should feel safe and collaborative. Together, we work at your pace to build understanding and create meaningful change in your life.",
                "Jag tror att terapi ska kännas trygg och samarbetsinriktad. Tillsammans arbetar vi i din takt för att skapa förståelse och meningsfull förändring i ditt liv."
              )}
            </p>
            <div className="pt-2">
              <p className="font-semibold text-lg" style={{ color: "#1a1a2e" }}>Dr. Anna Lindqvist</p>
              <p className="text-sm" style={{ color: textMuted }}>{t("Licensed Psychologist", "Legitimerad psykolog")} · CBT · {t("Psychodynamic Therapy", "Psykodynamisk terapi")} · EMDR</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={therapistPortrait} alt="Dr. Anna Lindqvist" className="w-full h-auto object-cover aspect-square" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-5" style={{ background: "#FAFAF8" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: "#1a1a2e" }}>{t("Explore our practice", "Utforska vår mottagning")}</h2>
            <p style={{ color: textMuted }}>{t("Learn more about how therapy can help you.", "Läs mer om hur terapi kan hjälpa dig.")}</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { title: t("Our Services", "Våra tjänster"), desc: t("Individual therapy, couples therapy, stress support, and trauma care.", "Individualterapi, parterapi, stresshantering och traumavård."), path: "/demo/psychology/services" },
              { title: t("How It Works", "Så fungerar det"), desc: t("Three simple steps from first consultation to ongoing support.", "Tre enkla steg från första konsultation till löpande stöd."), path: "/demo/psychology/how-it-works" },
              { title: t("Pricing", "Priser"), desc: t("Transparent, straightforward session fees with no hidden costs.", "Transparenta, tydliga sessionsavgifter utan dolda kostnader."), path: "/demo/psychology/pricing" },
            ].map(({ title, desc, path }) => (
              <Link key={path} to={path} className="block p-6 rounded-2xl border transition-all hover:shadow-md group" style={{ background: "#fff", borderColor: borderClr }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#1a1a2e" }}>{title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: textMuted }}>{desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium" style={{ color: green }}>
                  {t("Learn more", "Läs mer")} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-5" style={{ background: "linear-gradient(145deg, hsl(165, 35%, 94%), hsl(200, 25%, 93%))" }}>
        <div className="max-w-2xl mx-auto text-center space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: "#1a1a2e" }}>{t("Take the first step today", "Ta det första steget idag")}</h2>
          <p style={{ color: textMuted }}>{t("Reaching out is the hardest part. I'm here to listen, support, and guide you towards a healthier, more fulfilling life.", "Att ta kontakt är det svåraste steget. Jag finns här för att lyssna, stödja och vägleda dig mot ett hälsosammare, mer meningsfullt liv.")}</p>
          <Link to="/demo/psychology/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold shadow-md transition-all hover:shadow-lg" style={{ background: green, color: "#fff" }}>
            {t("Book Your Free Consultation", "Boka din kostnadsfria konsultation")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PsychologyLayout>
  );
};

export default DemoPsychologyHome;
