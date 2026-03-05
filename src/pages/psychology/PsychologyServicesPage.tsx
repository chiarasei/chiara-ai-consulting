import { Link } from "react-router-dom";
import { Heart, Users, Brain, Shield, ArrowRight } from "lucide-react";
import PsychologyLayout from "@/components/psychology/PsychologyLayout";
import { green, greenLight, textMuted, borderClr } from "@/components/psychology/PsychologyLayout";

const services = [
  { icon: Heart, title: "Individual Therapy", desc: "One‑on‑one sessions focused on your personal growth, helping you work through anxiety, depression, stress, and other challenges in a safe, confidential setting.", details: ["Anxiety & panic attacks", "Depression & low mood", "Life transitions & grief", "Self-esteem & personal growth"] },
  { icon: Users, title: "Couples Therapy", desc: "Strengthen your relationship by improving communication, resolving conflicts, and rebuilding trust with guided support for both partners.", details: ["Communication difficulties", "Conflict resolution", "Trust & intimacy", "Pre-marital counseling"] },
  { icon: Brain, title: "Stress & Anxiety Support", desc: "Learn practical, evidence‑based strategies to manage stress and anxiety so you can regain a sense of calm and control in daily life.", details: ["Workplace stress & burnout", "Generalized anxiety", "Social anxiety", "Relaxation techniques"] },
  { icon: Shield, title: "Trauma & Emotional Support", desc: "Gentle, structured therapy to help you process difficult experiences and trauma at your own pace, building resilience and emotional strength.", details: ["PTSD & complex trauma", "Emotional regulation", "Childhood experiences", "EMDR therapy"] },
];

const PsychologyServicesPage = () => (
  <PsychologyLayout>
    <section className="py-16 md:py-24 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-3 mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: green }}>Services</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight" style={{ color: "#1a1a2e" }}>How I can help</h1>
          <p className="max-w-lg mx-auto text-base" style={{ color: textMuted }}>Personalized therapy tailored to your unique needs and goals.</p>
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
            Book a Session <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  </PsychologyLayout>
);

export default PsychologyServicesPage;
