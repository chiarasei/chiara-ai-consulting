import { useState, useRef, useEffect } from "react";
import { Heart, Brain, Users, Shield, MessageCircle, Phone, Mail, MapPin, Send, Leaf, ArrowRight, Loader2, Bot, Globe } from "lucide-react";
import ReactMarkdown from "react-markdown";
import therapyHero from "@/assets/therapy-hero.jpg";
import therapistPortrait from "@/assets/therapist-portrait.jpg";

const NAV_LINKS = ["About", "Services", "How It Works", "Pricing", "Contact"];

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/psychology-chat`;

type ChatMessage = { role: "user" | "assistant"; content: string };

const DemoPsychologyPractice = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Chat state
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: "Hello! 👋 I'm here to answer your questions about our therapy services. How can I help you today?" },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const [chatLang, setChatLang] = useState<"en" | "sv">("en");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;
    setFormSubmitted(true);
  };

  const handleChatLangSwitch = () => {
    const newLang = chatLang === "en" ? "sv" : "en";
    setChatLang(newLang);
    setChatMessages([{
      role: "assistant",
      content: newLang === "sv"
        ? "Hej! 👋 Jag är här för att svara på dina frågor om våra terapitjänster. Hur kan jag hjälpa dig idag?"
        : "Hello! 👋 I'm here to answer your questions about our therapy services. How can I help you today?",
    }]);
  };

  const streamChat = async (allMessages: ChatMessage[]) => {
    const resp = await fetch(CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ messages: allMessages.slice(1) }), // skip welcome
    });

    if (!resp.ok) throw new Error("Failed to get response");
    if (!resp.body) throw new Error("No response body");

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let assistantContent = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });

      let idx: number;
      while ((idx = buffer.indexOf("\n")) !== -1) {
        let line = buffer.slice(0, idx);
        buffer = buffer.slice(idx + 1);
        if (line.endsWith("\r")) line = line.slice(0, -1);
        if (!line.startsWith("data: ")) continue;
        const json = line.slice(6).trim();
        if (json === "[DONE]") break;
        try {
          const parsed = JSON.parse(json);
          const content = parsed.choices?.[0]?.delta?.content;
          if (content) {
            assistantContent += content;
            setChatMessages((prev) => {
              const last = prev[prev.length - 1];
              if (last?.role === "assistant" && prev.length > 1) {
                return prev.map((m, i) => i === prev.length - 1 ? { ...m, content: assistantContent } : m);
              }
              return [...prev, { role: "assistant", content: assistantContent }];
            });
          }
        } catch {
          buffer = line + "\n" + buffer;
          break;
        }
      }
    }
  };

  const handleChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || chatLoading) return;
    const userMsg: ChatMessage = { role: "user", content: chatInput.trim() };
    const newMessages = [...chatMessages, userMsg];
    setChatMessages(newMessages);
    setChatInput("");
    setChatLoading(true);

    try {
      await streamChat(newMessages);
    } catch {
      setChatMessages((prev) => [...prev, { role: "assistant", content: "Sorry, something went wrong. Please try again or use the contact form below." }]);
    } finally {
      setChatLoading(false);
    }
  };

  const green = "hsl(165, 45%, 42%)";
  const greenLight = "hsl(165, 40%, 92%)";
  const greenText = "hsl(165, 50%, 35%)";
  const textMain = "#1a1a2e";
  const textMuted = "hsl(200, 10%, 45%)";
  const borderClr = "hsl(160, 15%, 88%)";
  const bgOff = "#FAFAF8";

  return (
    <div className="font-sans" style={{ fontFamily: "'DM Sans', 'Outfit', sans-serif", background: bgOff, color: textMain }}>
      {/* Demo banner */}
      <div className="text-center text-xs py-2 font-medium tracking-wide" style={{ background: greenLight, color: greenText }}>
        Portfolio Demo — Built by <a href="/" className="underline font-semibold hover:opacity-80">ChiaraAI Consulting</a>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{ background: "rgba(250,250,248,0.92)", borderColor: borderClr }}>
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
          <button onClick={() => scrollToSection("hero")} className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <Leaf className="w-5 h-5" style={{ color: green }} />
            <span>Psykolog Praktiken</span>
          </button>
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <button key={link} onClick={() => scrollToSection(link.toLowerCase().replace(/ /g, "-"))} className="text-sm font-medium transition-colors hover:opacity-70" style={{ color: textMuted }}>{link}</button>
            ))}
            <button onClick={() => scrollToSection("contact")} className="text-sm font-semibold px-5 py-2 rounded-full transition-all hover:shadow-md" style={{ background: green, color: "#fff" }}>Book a Session</button>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
            <div className="space-y-1.5">
              <span className={`block w-5 h-0.5 transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} style={{ background: textMain }} />
              <span className={`block w-5 h-0.5 transition-all ${mobileMenuOpen ? "opacity-0" : ""}`} style={{ background: textMain }} />
              <span className={`block w-5 h-0.5 transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{ background: textMain }} />
            </div>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t px-5 py-4 space-y-3" style={{ borderColor: borderClr }}>
            {NAV_LINKS.map((link) => (
              <button key={link} onClick={() => scrollToSection(link.toLowerCase().replace(/ /g, "-"))} className="block w-full text-left text-sm font-medium py-2" style={{ color: textMuted }}>{link}</button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero with image */}
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={therapyHero} alt="Therapy session in a calm, professional office" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(250,250,248,0.95) 0%, rgba(250,250,248,0.7) 50%, rgba(250,250,248,0.3) 100%)" }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-5 py-24 md:py-36 lg:py-44">
          <div className="max-w-xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide" style={{ background: "rgba(255,255,255,0.8)", color: greenText }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: green }} />
              Licensed Psychologist in Gothenburg
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight">
              Professional Psychotherapy
              <br />
              <span style={{ color: green }}>in Gothenburg</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: textMuted }}>
              A safe and supportive space to talk about anxiety, stress, relationships, and life challenges.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-3 pt-2">
              <button onClick={() => scrollToSection("contact")} className="px-7 py-3 rounded-full text-sm font-semibold shadow-md transition-all hover:shadow-lg" style={{ background: green, color: "#fff" }}>
                Book Your First Session
              </button>
              <button onClick={() => scrollToSection("chat-assistant")} className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold border transition-all hover:shadow-sm" style={{ borderColor: borderClr, color: textMain }}>
                <Bot className="w-4 h-4" style={{ color: green }} />
                Ask Our Assistant
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About with portrait */}
      <section id="about" className="py-16 md:py-24 px-5" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: green }}>About</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Warm, professional care for your mental well‑being</h2>
            <p className="leading-relaxed" style={{ color: textMuted }}>
              With over 10 years of experience as a licensed psychologist, I help clients navigate anxiety, stress, depression, relationship difficulties, and major life transitions. My approach is grounded in empathy, evidence‑based methods, and a genuine commitment to your growth.
            </p>
            <p className="leading-relaxed" style={{ color: textMuted }}>
              I believe therapy should feel safe and collaborative. Together, we work at your pace to build understanding and create meaningful change in your life.
            </p>
            <div className="pt-2">
              <p className="font-semibold text-lg">Dr. Anna Lindqvist</p>
              <p className="text-sm" style={{ color: textMuted }}>Licensed Psychologist · CBT · Psychodynamic Therapy · EMDR</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={therapistPortrait} alt="Dr. Anna Lindqvist, licensed psychologist" className="w-full h-auto object-cover aspect-square" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24 px-5" style={{ background: bgOff }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: green }}>Services</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How I can help</h2>
            <p className="max-w-lg mx-auto" style={{ color: textMuted }}>Personalized therapy tailored to your unique needs and goals.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { icon: Heart, title: "Individual Therapy", desc: "One‑on‑one sessions focused on your personal growth, helping you work through anxiety, depression, stress, and other challenges in a safe, confidential setting." },
              { icon: Users, title: "Couples Therapy", desc: "Strengthen your relationship by improving communication, resolving conflicts, and rebuilding trust with guided support for both partners." },
              { icon: Brain, title: "Stress & Anxiety Support", desc: "Learn practical, evidence‑based strategies to manage stress and anxiety so you can regain a sense of calm and control in daily life." },
              { icon: Shield, title: "Trauma & Emotional Support", desc: "Gentle, structured therapy to help you process difficult experiences and trauma at your own pace, building resilience and emotional strength." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl border transition-shadow hover:shadow-md" style={{ background: "#fff", borderColor: borderClr }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: greenLight }}>
                  <Icon className="w-5 h-5" style={{ color: green }} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: textMuted }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24 px-5" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: green }}>Process</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How therapy works</h2>
            <p className="max-w-lg mx-auto" style={{ color: textMuted }}>Starting therapy is a brave step. Here's what to expect.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Book a Consultation", desc: "A brief introductory call where we discuss your needs and determine if we're a good fit. No commitment required." },
              { step: "02", title: "First Session", desc: "We explore your background, current challenges, and what you hope to achieve from therapy in a relaxed, non‑judgmental environment." },
              { step: "03", title: "Ongoing Therapy", desc: "Regular sessions tailored to your goals, using evidence‑based approaches. Together we track progress and adjust as needed." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center space-y-3">
                <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center text-sm font-bold" style={{ background: greenLight, color: greenText }}>{step}</div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: textMuted }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-24 px-5" style={{ background: bgOff }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: green }}>Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Transparent pricing</h2>
            <p className="max-w-lg mx-auto" style={{ color: textMuted }}>Clear and straightforward session fees with no hidden costs.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "Individual Therapy", price: "1,000 SEK", duration: "50 minutes", features: ["Evidence-based approach", "Confidential setting", "In-person or online"] },
              { title: "Couples Therapy", price: "1,400 SEK", duration: "75 minutes", features: ["Both partners participate", "Communication tools", "Relationship strengthening"] },
            ].map(({ title, price, duration, features }) => (
              <div key={title} className="p-7 rounded-2xl border" style={{ background: "#fff", borderColor: borderClr }}>
                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                <p className="text-sm mb-4" style={{ color: textMuted }}>{duration} per session</p>
                <p className="text-3xl font-bold mb-5" style={{ color: green }}>{price}</p>
                <ul className="space-y-2">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm" style={{ color: textMuted }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: green }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Embedded Chat Assistant */}
      <section id="chat-assistant" className="py-16 md:py-24 px-5" style={{ background: "linear-gradient(145deg, hsl(165, 35%, 94%), hsl(200, 25%, 93%))" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Have a question? Ask our assistant</h2>
            <p style={{ color: textMuted }}>
              Get instant answers about our services, booking, and therapy process — in English or Swedish.
            </p>
          </div>

          {/* Embedded Chat */}
          <div className="max-w-lg mx-auto rounded-2xl shadow-xl border overflow-hidden" style={{ background: "#fff", borderColor: borderClr }}>
            {/* Chat header */}
            <div className="px-4 py-3 flex items-center justify-between" style={{ background: green }}>
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-white" />
                <span className="text-sm font-semibold text-white">Chat Assistant</span>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={handleChatLangSwitch} className="text-white/80 hover:text-white text-xs font-semibold px-2 py-1 rounded hover:bg-white/10 transition-colors">
                  {chatLang === "en" ? "EN" : "SV"}
                </button>
                <Globe className="w-3.5 h-3.5 text-white/60" />
              </div>
            </div>

            {/* Suggestion chips */}
            <div className="px-4 pt-3 flex flex-wrap gap-2">
              {(chatLang === "en"
                ? ["How do I book?", "What issues can therapy help with?", "Do you offer online therapy?", "Session prices?"]
                : ["Hur bokar jag?", "Vad kan terapi hjälpa med?", "Erbjuder ni onlineterapi?", "Sessionspriser?"]
              ).map((q) => (
                <button
                  key={q}
                  onClick={() => { setChatInput(q); }}
                  className="text-xs px-3 py-1.5 rounded-full border transition-colors hover:bg-gray-50"
                  style={{ borderColor: borderClr, color: textMuted }}
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto p-4 space-y-3" style={{ background: "hsl(165, 40%, 97%)" }}>
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] px-3 py-2 rounded-xl text-sm`} style={{
                    background: msg.role === "user" ? green : "#fff",
                    color: msg.role === "user" ? "#fff" : textMain,
                    border: msg.role === "assistant" ? `1px solid ${borderClr}` : undefined,
                  }}>
                    {msg.role === "assistant" ? (
                      <div className="prose prose-sm max-w-none [&>p]:my-1">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                    ) : msg.content}
                  </div>
                </div>
              ))}
              {chatLoading && chatMessages[chatMessages.length - 1]?.role === "user" && (
                <div className="flex justify-start">
                  <div className="px-3 py-2 rounded-xl" style={{ background: "#fff", border: `1px solid ${borderClr}` }}>
                    <Loader2 className="w-4 h-4 animate-spin" style={{ color: textMuted }} />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleChat} className="flex border-t" style={{ borderColor: borderClr }}>
              <input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder={chatLang === "en" ? "Ask a question..." : "Ställ en fråga..."}
                disabled={chatLoading}
                className="flex-1 px-4 py-3 text-sm outline-none"
                style={{ background: "#fff" }}
              />
              <button type="submit" disabled={!chatInput.trim() || chatLoading} className="px-4 disabled:opacity-40" style={{ color: green }}>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          <p className="text-center text-xs mt-4" style={{ color: textMuted }}>
            We speak English and Swedish · Powered by AI
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 px-5" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: green }}>Contact</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Book your first consultation</h2>
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
                <p className="font-semibold text-lg mb-1">Thank you for reaching out</p>
                <p className="text-sm" style={{ color: textMuted }}>We'll be in touch soon to schedule your session.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {[
                  { name: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map(({ name, label, type, placeholder }) => (
                  <div key={name}>
                    <label className="block text-sm font-medium mb-1.5">{label}</label>
                    <input type={type} placeholder={placeholder} required value={formData[name as keyof typeof formData]} onChange={(e) => setFormData((p) => ({ ...p, [name]: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2" style={{ borderColor: borderClr, background: bgOff }} />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea placeholder="Tell me a little about what you're looking for..." required rows={4} value={formData.message} onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2 resize-none" style={{ borderColor: borderClr, background: bgOff }} />
                </div>
                <button type="submit" className="w-full py-3 rounded-xl text-sm font-semibold transition-all hover:shadow-md" style={{ background: green, color: "#fff" }}>
                  Book Your Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-5 border-t" style={{ borderColor: borderClr, background: "#fff" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-semibold">
            <Leaf className="w-4 h-4" style={{ color: green }} />
            Psykolog Praktiken
          </div>
          <p className="text-xs" style={{ color: textMuted }}>© 2025 Psykolog Praktiken. All rights reserved.</p>
          <p className="text-xs" style={{ color: textMuted }}>
            Demo by <a href="/" className="underline hover:opacity-70">ChiaraAI Consulting</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DemoPsychologyPractice;
