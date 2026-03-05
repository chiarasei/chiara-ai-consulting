import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PsychologyLayout from "@/components/psychology/PsychologyLayout";
import { green, greenLight, greenText, textMuted, borderClr } from "@/components/psychology/PsychologyLayout";

const steps = [
  { step: "01", title: "Book a Consultation", desc: "Start with a brief introductory call or send us a message. We'll discuss your needs and determine if we're a good fit. There's no commitment — just a chance to get to know each other.", extra: "This initial consultation is free and takes about 15 minutes." },
  { step: "02", title: "First Session", desc: "In your first full session, we explore your background, current challenges, and what you hope to achieve from therapy. This happens in a relaxed, non-judgmental environment where you set the pace.", extra: "Sessions are 50 minutes for individuals and 75 minutes for couples." },
  { step: "03", title: "Ongoing Therapy", desc: "We meet regularly — weekly or biweekly — using evidence-based approaches tailored to your goals. Together we track your progress and adjust the approach as needed.", extra: "You can choose between in-person sessions in Gothenburg or online video sessions." },
];

const PsychologyHowItWorksPage = () => (
  <PsychologyLayout>
    <section className="py-16 md:py-24 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-3 mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: green }}>Process</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight" style={{ color: "#1a1a2e" }}>How therapy works</h1>
          <p className="max-w-lg mx-auto text-base" style={{ color: textMuted }}>Starting therapy is a brave step. Here's what to expect.</p>
        </div>

        <div className="space-y-8">
          {steps.map(({ step, title, desc, extra }, i) => (
            <div key={step} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: greenLight, color: greenText }}>{step}</div>
                {i < steps.length - 1 && <div className="w-px flex-1 mt-3" style={{ background: borderClr }} />}
              </div>
              <div className="pb-8 space-y-2">
                <h2 className="text-xl font-semibold" style={{ color: "#1a1a2e" }}>{title}</h2>
                <p className="leading-relaxed" style={{ color: textMuted }}>{desc}</p>
                <p className="text-sm italic" style={{ color: green }}>{extra}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/demo/psychology/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold shadow-md transition-all hover:shadow-lg" style={{ background: green, color: "#fff" }}>
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  </PsychologyLayout>
);

export default PsychologyHowItWorksPage;
