import { Link } from "react-router-dom";
import { Bot, ArrowRight } from "lucide-react";
import PsychologyLayout from "@/components/psychology/PsychologyLayout";
import { green, greenLight, greenText, textMuted, borderClr } from "@/components/psychology/PsychologyLayout";
import therapyHero from "@/assets/therapy-hero.jpg";
import therapistPortrait from "@/assets/therapist-portrait.jpg";

const DemoPsychologyHome = () => {
  return (
    <PsychologyLayout>
      {/* Hero with image — text on left, image visible on right */}
      <section className="relative overflow-hidden min-h-[70vh] md:min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img src={therapyHero} alt="Therapy session in a calm, professional office" className="w-full h-full object-cover object-right" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(250,250,248,0.97) 0%, rgba(250,250,248,0.85) 40%, rgba(250,250,248,0.2) 70%, transparent 100%)" }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-5 py-20 md:py-32 w-full">
          <div className="max-w-md space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide" style={{ background: "rgba(255,255,255,0.85)", color: greenText }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: green }} />
              Licensed Psychologist in Gothenburg
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight" style={{ color: "#1a1a2e" }}>
              Professional Psychotherapy
              <br />
              <span style={{ color: green }}>in Gothenburg</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: textMuted }}>
              A safe and supportive space to talk about anxiety, stress, relationships, and life challenges.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-3 pt-2">
              <Link to="/demo/psychology/contact" className="px-7 py-3 rounded-full text-sm font-semibold shadow-md transition-all hover:shadow-lg" style={{ background: green, color: "#fff" }}>
                Book Your First Session
              </Link>
              <Link to="/demo/psychology/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold border transition-all hover:shadow-sm" style={{ borderColor: borderClr, color: "#1a1a2e" }}>
                <Bot className="w-4 h-4" style={{ color: green }} />
                Ask Our Assistant
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-16 md:py-24 px-5" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: green }}>About</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: "#1a1a2e" }}>
              Warm, professional care for your mental well‑being
            </h2>
            <p className="leading-relaxed" style={{ color: textMuted }}>
              With over 10 years of experience as a licensed psychologist, I help clients navigate anxiety, stress, depression, relationship difficulties, and major life transitions. My approach is grounded in empathy, evidence‑based methods, and a genuine commitment to your growth.
            </p>
            <p className="leading-relaxed" style={{ color: textMuted }}>
              I believe therapy should feel safe and collaborative. Together, we work at your pace to build understanding and create meaningful change in your life.
            </p>
            <div className="pt-2">
              <p className="font-semibold text-lg" style={{ color: "#1a1a2e" }}>Dr. Anna Lindqvist</p>
              <p className="text-sm" style={{ color: textMuted }}>Licensed Psychologist · CBT · Psychodynamic Therapy · EMDR</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={therapistPortrait} alt="Dr. Anna Lindqvist, licensed psychologist" className="w-full h-auto object-cover aspect-square" />
          </div>
        </div>
      </section>

      {/* Quick overview cards linking to pages */}
      <section className="py-16 md:py-24 px-5" style={{ background: "#FAFAF8" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: "#1a1a2e" }}>Explore our practice</h2>
            <p style={{ color: textMuted }}>Learn more about how therapy can help you.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { title: "Our Services", desc: "Individual therapy, couples therapy, stress support, and trauma care.", path: "/demo/psychology/services" },
              { title: "How It Works", desc: "Three simple steps from first consultation to ongoing support.", path: "/demo/psychology/how-it-works" },
              { title: "Pricing", desc: "Transparent, straightforward session fees with no hidden costs.", path: "/demo/psychology/pricing" },
            ].map(({ title, desc, path }) => (
              <Link key={path} to={path} className="block p-6 rounded-2xl border transition-all hover:shadow-md group" style={{ background: "#fff", borderColor: borderClr }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#1a1a2e" }}>{title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: textMuted }}>{desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium transition-colors" style={{ color: green }}>
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-5" style={{ background: "linear-gradient(145deg, hsl(165, 35%, 94%), hsl(200, 25%, 93%))" }}>
        <div className="max-w-2xl mx-auto text-center space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: "#1a1a2e" }}>Take the first step today</h2>
          <p style={{ color: textMuted }}>Reaching out is the hardest part. I'm here to listen, support, and guide you towards a healthier, more fulfilling life.</p>
          <Link to="/demo/psychology/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold shadow-md transition-all hover:shadow-lg" style={{ background: green, color: "#fff" }}>
            Book Your Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PsychologyLayout>
  );
};

export default DemoPsychologyHome;
