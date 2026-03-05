import { Link } from "react-router-dom";
import { Heart, Users, Brain, Shield, ArrowRight } from "lucide-react";
import PsychologyLayout from "@/components/psychology/PsychologyLayout";
import { green, greenLight, textMuted, borderClr } from "@/components/psychology/PsychologyLayout";
import { usePsychLang } from "@/components/psychology/PsychLangContext";

const PsychologyServicesPage = () => {
  const { t } = usePsychLang();

  const services = [
    { icon: Heart, title: t("Individual Therapy", "Individualterapi"), desc: t("One‑on‑one sessions focused on your personal growth, helping you work through anxiety, depression, stress, and other challenges in a safe, confidential setting.", "Enskilda sessioner fokuserade på din personliga utveckling, som hjälper dig att arbeta igenom ångest, depression, stress och andra utmaningar i en trygg, konfidentiell miljö."), details: t("Anxiety & panic attacks,Depression & low mood,Life transitions & grief,Self-esteem & personal growth", "Ångest & panikattacker,Depression & nedstämdhet,Livsförändringar & sorg,Självkänsla & personlig utveckling").split(",") },
    { icon: Users, title: t("Couples Therapy", "Parterapi"), desc: t("Strengthen your relationship by improving communication, resolving conflicts, and rebuilding trust with guided support for both partners.", "Stärk er relation genom att förbättra kommunikationen, lösa konflikter och bygga upp förtroendet igen med vägledning för båda parter."), details: t("Communication difficulties,Conflict resolution,Trust & intimacy,Pre-marital counseling", "Kommunikationssvårigheter,Konflikthantering,Tillit & intimitet,Föräktenskaplig rådgivning").split(",") },
    { icon: Brain, title: t("Stress & Anxiety Support", "Stress- & ångesthantering"), desc: t("Learn practical, evidence‑based strategies to manage stress and anxiety so you can regain a sense of calm and control in daily life.", "Lär dig praktiska, evidensbaserade strategier för att hantera stress och ångest så att du kan återfå lugn och kontroll i vardagen."), details: t("Workplace stress & burnout,Generalized anxiety,Social anxiety,Relaxation techniques", "Arbetsrelaterad stress & utbrändhet,Generaliserad ångest,Social ångest,Avslappningstekniker").split(",") },
    { icon: Shield, title: t("Trauma & Emotional Support", "Trauma- & emotionellt stöd"), desc: t("Gentle, structured therapy to help you process difficult experiences and trauma at your own pace, building resilience and emotional strength.", "Skonsam, strukturerad terapi för att hjälpa dig bearbeta svåra upplevelser och trauma i din egen takt, och bygga motståndskraft och emotionell styrka."), details: t("PTSD & complex trauma,Emotional regulation,Childhood experiences,EMDR therapy", "PTSD & komplext trauma,Emotionell reglering,Barndomsupplevelser,EMDR-terapi").split(",") },
  ];

  return (
    <PsychologyLayout>
      <section className="py-16 md:py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-3 mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: green }}>{t("Services", "Tjänster")}</p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight" style={{ color: "#1a1a2e" }}>{t("How I can help", "Hur jag kan hjälpa")}</h1>
            <p className="max-w-lg mx-auto text-base" style={{ color: textMuted }}>{t("Personalized therapy tailored to your unique needs and goals.", "Personlig terapi anpassad efter dina unika behov och mål.")}</p>
          </div>

          <div className="space-y-6">
            {services.map(({ icon: Icon, title, desc, details }) => (
              <div key={title} className="p-6 md:p-8 rounded-2xl border transition-shadow hover:shadow-md" style={{ background: "#fff", borderColor: borderClr }}>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: greenLight }}>
                      <Icon className="w-6 h-6" style={{ color: green }} />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <h2 className="text-xl font-semibold" style={{ color: "#1a1a2e" }}>{title}</h2>
                    <p className="leading-relaxed" style={{ color: textMuted }}>{desc}</p>
                    <ul className="grid sm:grid-cols-2 gap-2 pt-2">
                      {details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-sm" style={{ color: textMuted }}>
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: green }} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link to="/demo/psychology/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold shadow-md transition-all hover:shadow-lg" style={{ background: green, color: "#fff" }}>
              {t("Book a Session", "Boka en session")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PsychologyLayout>
  );
};

export default PsychologyServicesPage;
