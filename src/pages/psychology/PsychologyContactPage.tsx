import { useState } from "react";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import PsychologyLayout from "@/components/psychology/PsychologyLayout";
import PsychologyChat from "@/components/psychology/PsychologyChat";
import { green, greenLight, textMuted, borderClr } from "@/components/psychology/PsychologyLayout";

const PsychologyContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;
    setFormSubmitted(true);
  };

  return (
    <PsychologyLayout>
      {/* Chat assistant section */}
      <section className="py-16 md:py-20 px-5" style={{ background: "linear-gradient(145deg, hsl(165, 35%, 94%), hsl(200, 25%, 93%))" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-10">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight" style={{ color: "#1a1a2e" }}>Have a question? Ask our assistant</h1>
            <p style={{ color: textMuted }}>Get instant answers about our services, booking, and therapy process — in English or Swedish.</p>
          </div>
          <PsychologyChat />
          <p className="text-center text-xs mt-4" style={{ color: textMuted }}>We speak English and Swedish · Powered by AI</p>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-16 md:py-24 px-5" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: green }}>Contact</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3" style={{ color: "#1a1a2e" }}>Book your first consultation</h2>
              <p style={{ color: textMuted }}>Ready to take the first step? Send a message or call us directly to schedule your session.</p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "kontakt@psykologpraktiken.se" },
                { icon: Phone, label: "+46 70 123 4567" },
                { icon: MapPin, label: "Gothenburg, Sweden" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: greenLight }}>
                    <Icon className="w-4 h-4" style={{ color: green }} />
                  </div>
                  <span className="text-sm" style={{ color: textMuted }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            {formSubmitted ? (
              <div className="rounded-2xl p-8 text-center border" style={{ background: greenLight, borderColor: borderClr }}>
                <Heart className="w-10 h-10 mx-auto mb-3" style={{ color: green }} />
                <p className="font-semibold text-lg mb-1" style={{ color: "#1a1a2e" }}>Thank you for reaching out</p>
                <p className="text-sm" style={{ color: textMuted }}>We'll be in touch soon to schedule your session.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {[
                  { name: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map(({ name, label, type, placeholder }) => (
                  <div key={name}>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "#1a1a2e" }}>{label}</label>
                    <input type={type} placeholder={placeholder} required value={formData[name as keyof typeof formData]} onChange={(e) => setFormData((p) => ({ ...p, [name]: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2" style={{ borderColor: borderClr, background: "#FAFAF8" }} />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "#1a1a2e" }}>Message</label>
                  <textarea placeholder="Tell me a little about what you're looking for..." required rows={4} value={formData.message} onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2 resize-none" style={{ borderColor: borderClr, background: "#FAFAF8" }} />
                </div>
                <button type="submit" className="w-full py-3 rounded-xl text-sm font-semibold transition-all hover:shadow-md" style={{ background: green, color: "#fff" }}>
                  Book Your Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PsychologyLayout>
  );
};

export default PsychologyContactPage;
