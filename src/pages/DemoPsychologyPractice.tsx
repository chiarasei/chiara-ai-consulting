import { useState, useRef } from "react";
import { Heart, Brain, Users, Shield, MessageCircle, Phone, Mail, MapPin, ChevronDown, Send, Leaf, ArrowRight } from "lucide-react";

const NAV_LINKS = ["About", "Services", "How It Works", "Pricing", "Contact"];

const DemoPsychologyPractice = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
    { role: "bot", text: "Hello! I'm here to answer your questions about therapy. Feel free to ask me anything." },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;
    setFormSubmitted(true);
  };

  const handleChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg = chatInput.trim().toLowerCase();
    setChatMessages((prev) => [...prev, { role: "user", text: chatInput.trim() }]);
    setChatInput("");

    let reply = "That's a great question. I'd recommend reaching out directly for more details. You can use the contact form on this page.";
    if (userMsg.includes("book") || userMsg.includes("first session") || userMsg.includes("boka")) {
      reply = "To book your first session, simply fill out the contact form below or call us directly. We'll get back to you within 24 hours to schedule your initial consultation.";
    } else if (userMsg.includes("help with") || userMsg.includes("issues") || userMsg.includes("what can")) {
      reply = "Therapy can help with a wide range of concerns including anxiety, depression, stress, relationship difficulties, grief, trauma, and life transitions. Every person's journey is unique.";
    } else if (userMsg.includes("how long") || userMsg.includes("duration") || userMsg.includes("session length")) {
      reply = "A standard therapy session is 50 minutes. Couples therapy sessions are typically 75 minutes. The initial consultation is also 50 minutes.";
    } else if (userMsg.includes("price") || userMsg.includes("cost") || userMsg.includes("pris")) {
      reply = "Individual therapy sessions are 1,000 SEK and couples therapy is 1,400 SEK per session.";
    } else if (userMsg.includes("online") || userMsg.includes("video")) {
      reply = "Yes, I offer both in-person sessions in Gothenburg and online video sessions for those who prefer the flexibility of remote therapy.";
    }

    setTimeout(() => {
      setChatMessages((prev) => [...prev, { role: "bot", text: reply }]);
      setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    }, 600);
  };

  return (
    <div className="font-sans" style={{ fontFamily: "'DM Sans', 'Outfit', sans-serif", background: "#FAFAF8", color: "#2D3436" }}>
      {/* Top demo banner */}
      <div className="bg-primary/10 text-primary text-center text-xs py-2 font-medium tracking-wide" style={{ background: "hsl(165, 40%, 92%)", color: "hsl(165, 50%, 30%)" }}>
        Portfolio Demo — Built by <a href="/" className="underline font-semibold hover:opacity-80">ChiaraAI Consulting</a>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{ background: "rgba(250,250,248,0.92)", borderColor: "hsl(160, 15%, 88%)" }}>
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
          <button onClick={() => scrollToSection("hero")} className="flex items-center gap-2 text-lg font-bold tracking-tight" style={{ color: "#2D3436" }}>
            <Leaf className="w-5 h-5" style={{ color: "hsl(165, 50%, 40%)" }} />
            <span>Psykolog Praktiken</span>
          </button>

          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link.toLowerCase().replace(/ /g, "-"))}
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: "hsl(200, 10%, 40%)" }}
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-semibold px-5 py-2 rounded-full transition-all hover:shadow-md"
              style={{ background: "hsl(165, 45%, 42%)", color: "#fff" }}
            >
              Book a Session
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
            <div className="space-y-1.5">
              <span className={`block w-5 h-0.5 transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} style={{ background: "#2D3436" }} />
              <span className={`block w-5 h-0.5 transition-all ${mobileMenuOpen ? "opacity-0" : ""}`} style={{ background: "#2D3436" }} />
              <span className={`block w-5 h-0.5 transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{ background: "#2D3436" }} />
            </div>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t px-5 py-4 space-y-3" style={{ borderColor: "hsl(160, 15%, 88%)" }}>
            {NAV_LINKS.map((link) => (
              <button key={link} onClick={() => scrollToSection(link.toLowerCase().replace(/ /g, "-"))} className="block w-full text-left text-sm font-medium py-2" style={{ color: "hsl(200, 10%, 40%)" }}>
                {link}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="hero" className="min-h-[80vh] flex items-center px-5 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide" style={{ background: "hsl(165, 40%, 92%)", color: "hsl(165, 50%, 35%)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "hsl(165, 50%, 40%)" }} />
            Licensed Psychologist in Gothenburg
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight" style={{ color: "#1a1a2e" }}>
            Professional Psychotherapy
            <br />
            <span style={{ color: "hsl(165, 45%, 38%)" }}>in Gothenburg</span>
          </h1>
          <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "hsl(200, 10%, 45%)" }}>
            A safe space to explore your thoughts, emotions, and life challenges with professional support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button onClick={() => scrollToSection("contact")} className="px-7 py-3 rounded-full text-sm font-semibold shadow-md transition-all hover:shadow-lg" style={{ background: "hsl(165, 45%, 42%)", color: "#fff" }}>
              Book Your First Session
            </button>
            <button onClick={() => scrollToSection("services")} className="px-7 py-3 rounded-full text-sm font-semibold border transition-all hover:shadow-sm" style={{ borderColor: "hsl(160, 15%, 82%)", color: "hsl(200, 10%, 35%)" }}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 md:py-24 px-5" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "hsl(165, 50%, 40%)" }}>About</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: "#1a1a2e" }}>
              Warm, professional care for your mental well‑being
            </h2>
            <p className="leading-relaxed" style={{ color: "hsl(200, 10%, 42%)" }}>
              With over 10 years of experience as a licensed psychologist, I help clients navigate anxiety, stress, depression, relationship difficulties, and major life transitions. My approach is grounded in empathy, evidence‑based methods, and a genuine commitment to your growth.
            </p>
            <p className="leading-relaxed" style={{ color: "hsl(200, 10%, 42%)" }}>
              I believe therapy should feel safe and collaborative. Together, we work at your pace to build understanding and create meaningful change in your life.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/5] flex items-center justify-center" style={{ background: "linear-gradient(145deg, hsl(165, 35%, 92%), hsl(200, 25%, 90%))" }}>
            <div className="text-center space-y-3 p-8">
              <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center" style={{ background: "hsl(165, 40%, 85%)" }}>
                <Brain className="w-9 h-9" style={{ color: "hsl(165, 45%, 38%)" }} />
              </div>
              <p className="font-semibold text-lg" style={{ color: "#1a1a2e" }}>Dr. Anna Lindqvist</p>
              <p className="text-sm" style={{ color: "hsl(200, 10%, 50%)" }}>Licensed Psychologist</p>
              <p className="text-xs" style={{ color: "hsl(200, 10%, 55%)" }}>CBT · Psychodynamic Therapy · EMDR</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24 px-5" style={{ background: "#FAFAF8" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "hsl(165, 50%, 40%)" }}>Services</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: "#1a1a2e" }}>How I can help</h2>
            <p className="max-w-lg mx-auto" style={{ color: "hsl(200, 10%, 45%)" }}>Personalized therapy tailored to your unique needs and goals.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { icon: Heart, title: "Individual Therapy", desc: "One‑on‑one sessions focused on your personal growth, helping you work through anxiety, depression, stress, and other challenges in a safe, confidential setting." },
              { icon: Users, title: "Couples Therapy", desc: "Strengthen your relationship by improving communication, resolving conflicts, and rebuilding trust with guided support for both partners." },
              { icon: Brain, title: "Stress & Anxiety Support", desc: "Learn practical, evidence‑based strategies to manage stress and anxiety so you can regain a sense of calm and control in daily life." },
              { icon: Shield, title: "Trauma & Emotional Support", desc: "Gentle, structured therapy to help you process difficult experiences and trauma at your own pace, building resilience and emotional strength." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl border transition-shadow hover:shadow-md" style={{ background: "#fff", borderColor: "hsl(160, 15%, 90%)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "hsl(165, 40%, 92%)" }}>
                  <Icon className="w-5 h-5" style={{ color: "hsl(165, 45%, 38%)" }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#1a1a2e" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(200, 10%, 45%)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24 px-5" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "hsl(165, 50%, 40%)" }}>Process</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: "#1a1a2e" }}>How therapy works</h2>
            <p className="max-w-lg mx-auto" style={{ color: "hsl(200, 10%, 45%)" }}>Starting therapy is a brave step. Here's what to expect.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Initial Consultation", desc: "A brief introductory call where we discuss your needs and determine if we're a good fit. No commitment required." },
              { step: "02", title: "First Session", desc: "We explore your background, current challenges, and what you hope to achieve from therapy in a relaxed, non‑judgmental environment." },
              { step: "03", title: "Ongoing Therapy", desc: "Regular sessions tailored to your goals, using evidence‑based approaches. Together we track progress and adjust as needed." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center space-y-3">
                <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center text-sm font-bold" style={{ background: "hsl(165, 40%, 92%)", color: "hsl(165, 50%, 35%)" }}>
                  {step}
                </div>
                <h3 className="text-lg font-semibold" style={{ color: "#1a1a2e" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(200, 10%, 45%)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-24 px-5" style={{ background: "#FAFAF8" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "hsl(165, 50%, 40%)" }}>Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: "#1a1a2e" }}>Transparent pricing</h2>
            <p className="max-w-lg mx-auto" style={{ color: "hsl(200, 10%, 45%)" }}>Clear and straightforward session fees with no hidden costs.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "Individual Therapy", price: "1,000 SEK", duration: "50 minutes", features: ["Evidence-based approach", "Confidential setting", "In-person or online"] },
              { title: "Couples Therapy", price: "1,400 SEK", duration: "75 minutes", features: ["Both partners participate", "Communication tools", "Relationship strengthening"] },
            ].map(({ title, price, duration, features }) => (
              <div key={title} className="p-7 rounded-2xl border" style={{ background: "#fff", borderColor: "hsl(160, 15%, 90%)" }}>
                <h3 className="text-lg font-semibold mb-1" style={{ color: "#1a1a2e" }}>{title}</h3>
                <p className="text-sm mb-4" style={{ color: "hsl(200, 10%, 50%)" }}>{duration} per session</p>
                <p className="text-3xl font-bold mb-5" style={{ color: "hsl(165, 45%, 38%)" }}>{price}</p>
                <ul className="space-y-2">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "hsl(200, 10%, 42%)" }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "hsl(165, 50%, 50%)" }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 px-5" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "hsl(165, 50%, 40%)" }}>Contact</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3" style={{ color: "#1a1a2e" }}>Get in touch</h2>
              <p style={{ color: "hsl(200, 10%, 45%)" }}>Ready to take the first step? Send a message and I'll get back to you within 24 hours.</p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "kontakt@psykologpraktiken.se" },
                { icon: Phone, label: "+46 70 123 4567" },
                { icon: MapPin, label: "Gothenburg, Sweden" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "hsl(165, 40%, 92%)" }}>
                    <Icon className="w-4 h-4" style={{ color: "hsl(165, 45%, 38%)" }} />
                  </div>
                  <span className="text-sm" style={{ color: "hsl(200, 10%, 40%)" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            {formSubmitted ? (
              <div className="rounded-2xl p-8 text-center border" style={{ background: "hsl(165, 40%, 96%)", borderColor: "hsl(165, 30%, 88%)" }}>
                <Heart className="w-10 h-10 mx-auto mb-3" style={{ color: "hsl(165, 45%, 42%)" }} />
                <p className="font-semibold text-lg mb-1" style={{ color: "#1a1a2e" }}>Thank you for reaching out</p>
                <p className="text-sm" style={{ color: "hsl(200, 10%, 45%)" }}>I'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {[
                  { name: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map(({ name, label, type, placeholder }) => (
                  <div key={name}>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "#1a1a2e" }}>{label}</label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      required
                      value={formData[name as keyof typeof formData]}
                      onChange={(e) => setFormData((p) => ({ ...p, [name]: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2"
                      style={{ borderColor: "hsl(160, 15%, 88%)", background: "#FAFAF8" }}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "#1a1a2e" }}>Message</label>
                  <textarea
                    placeholder="Tell me a little about what you're looking for..."
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2 resize-none"
                    style={{ borderColor: "hsl(160, 15%, 88%)", background: "#FAFAF8" }}
                  />
                </div>
                <button type="submit" className="w-full py-3 rounded-xl text-sm font-semibold transition-all hover:shadow-md" style={{ background: "hsl(165, 45%, 42%)", color: "#fff" }}>
                  Send Message
                </button>
                <p className="text-xs text-center" style={{ color: "hsl(200, 10%, 55%)" }}>You can expect a response within 24 hours.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-5" style={{ background: "linear-gradient(145deg, hsl(165, 35%, 94%), hsl(200, 25%, 93%))" }}>
        <div className="max-w-2xl mx-auto text-center space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: "#1a1a2e" }}>
            Take the first step today
          </h2>
          <p style={{ color: "hsl(200, 10%, 42%)" }}>
            Reaching out is the hardest part. I'm here to listen, support, and guide you towards a healthier, more fulfilling life.
          </p>
          <button onClick={() => scrollToSection("contact")} className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold shadow-md transition-all hover:shadow-lg" style={{ background: "hsl(165, 45%, 42%)", color: "#fff" }}>
            Book Your Free Consultation <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-5 border-t" style={{ borderColor: "hsl(160, 15%, 90%)", background: "#fff" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-semibold" style={{ color: "#1a1a2e" }}>
            <Leaf className="w-4 h-4" style={{ color: "hsl(165, 50%, 40%)" }} />
            Psykolog Praktiken
          </div>
          <p className="text-xs" style={{ color: "hsl(200, 10%, 55%)" }}>© 2025 Psykolog Praktiken. All rights reserved.</p>
          <p className="text-xs" style={{ color: "hsl(200, 10%, 60%)" }}>
            Demo by <a href="/" className="underline hover:opacity-70">ChiaraAI Consulting</a>
          </p>
        </div>
      </footer>

      {/* Chat Widget */}
      <div className="fixed bottom-5 right-5 z-50">
        {chatOpen && (
          <div className="mb-3 w-80 rounded-2xl shadow-xl border overflow-hidden" style={{ background: "#fff", borderColor: "hsl(160, 15%, 88%)" }}>
            <div className="px-4 py-3 flex items-center justify-between" style={{ background: "hsl(165, 45%, 42%)" }}>
              <span className="text-sm font-semibold text-white">Chat Assistant</span>
              <button onClick={() => setChatOpen(false)} className="text-white/80 hover:text-white text-lg leading-none">×</button>
            </div>
            <div className="h-64 overflow-y-auto p-4 space-y-3" style={{ background: "hsl(165, 40%, 97%)" }}>
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[75%] px-3 py-2 rounded-xl text-sm ${msg.role === "user" ? "text-white" : ""}`} style={{
                    background: msg.role === "user" ? "hsl(165, 45%, 42%)" : "#fff",
                    color: msg.role === "user" ? "#fff" : "hsl(200, 10%, 35%)",
                    border: msg.role === "bot" ? "1px solid hsl(160, 15%, 88%)" : undefined,
                  }}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <form onSubmit={handleChat} className="flex border-t" style={{ borderColor: "hsl(160, 15%, 88%)" }}>
              <input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 px-4 py-2.5 text-sm outline-none"
                style={{ background: "#fff" }}
              />
              <button type="submit" className="px-4" style={{ color: "hsl(165, 45%, 42%)" }}>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105"
          style={{ background: "hsl(165, 45%, 42%)" }}
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default DemoPsychologyPractice;
