import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Check, Clock, MapPin, ShieldCheck, Video, CalendarDays, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { switchLanguagePath } from "@/lib/i18nRoutes";
import SEOHead from "@/components/SEOHead";
import heroImg from "@/assets/therapy-hero.jpg";
import portraitImg from "@/assets/therapist-portrait.jpg";

const ADDRESS = "Vasagatan 1, 411 24 Göteborg";
const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&z=15&output=embed`;
const DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;

type Service = { id: string; en: string; sv: string; minutes: number; price: number; enText: string; svText: string };
const SERVICES: Service[] = [
  { id: "individual", en: "Individual therapy", sv: "Individuell samtalsterapi", minutes: 50, price: 1200, enText: "Talk therapy for anxiety, stress, low mood or life changes.", svText: "Samtalsterapi vid oro, stress, nedstämdhet eller livsförändringar." },
  { id: "couples", en: "Couples therapy", sv: "Parterapi", minutes: 75, price: 1600, enText: "Room for both of you to be heard and find new ways forward.", svText: "Utrymme för er båda att bli lyssnade på och hitta nya vägar framåt." },
  { id: "online", en: "Online session by video", sv: "Onlinesamtal via video", minutes: 50, price: 1100, enText: "The same care from home, through a secure video link.", svText: "Samma stöd hemifrån, via en säker videolänk." },
  { id: "first", en: "First assessment session", sv: "Första bedömningssamtal", minutes: 30, price: 600, enText: "A calm first meeting to see what kind of support suits you.", svText: "Ett lugnt första möte för att se vilket stöd som passar dig." },
];

const SLOTS = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"];

// Some slots are already taken, decided by a stable pattern so the demo looks lived in.
const isTaken = (date: Date, slot: string) => (date.getDate() * 7 + SLOTS.indexOf(slot) * 3) % 5 < 2;

const nextWeekdays = (count: number) => {
  const days: Date[] = [];
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  while (days.length < count) {
    d.setDate(d.getDate() + 1);
    if (d.getDay() !== 0 && d.getDay() !== 6) days.push(new Date(d));
  }
  return days;
};

const formatPrice = (n: number) => `${n.toLocaleString("sv-SE").replace(/\u00a0/g, " ")} kr`;

const StillaDemoPage = () => {
  const { language, lp } = useLanguage();
  const sv = language === "sv";
  const tr = (en: string, s: string) => (sv ? s : en);
  const { pathname } = useLocation();

  useEffect(() => {
    const id = "stilla-fonts";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Lora:wght@400;500&family=Nunito+Sans:wght@300;400;600&display=swap";
    document.head.appendChild(link);
  }, []);

  // Booking state
  const days = useMemo(() => nextWeekdays(10), []);
  const [serviceId, setServiceId] = useState<string | null>(null);
  const [dayIdx, setDayIdx] = useState<number | null>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const service = SERVICES.find((s) => s.id === serviceId);
  const day = dayIdx !== null ? days[dayIdx] : null;
  const dateLabel = (d: Date, long = false) =>
    d.toLocaleDateString(sv ? "sv-SE" : "en-GB", long ? { weekday: "long", day: "numeric", month: "long" } : { weekday: "short", day: "numeric", month: "short" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (form.name.trim().length < 2) errs.name = tr("Please enter your name", "Skriv ditt namn");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = tr("Please enter a valid email", "Skriv en giltig e‑postadress".replace("‑", ""));
    if (form.phone.replace(/\D/g, "").length < 6) errs.phone = tr("Please enter a phone number", "Skriv ett telefonnummer");
    setErrors(errs);
    if (Object.keys(errs).length === 0) setDone(true);
  };

  const reset = () => {
    setServiceId(null); setDayIdx(null); setSlot(null); setForm({ name: "", email: "", phone: "" }); setDone(false);
  };

  const scrollToBooking = () => document.getElementById("boka")?.scrollIntoView({ behavior: "smooth" });

  const faqs = [
    { q: tr("What happens at the first meeting?", "Hur går första samtalet till?"), a: tr("We talk about what brings you here and what you hope to change. You decide how much you want to share, and together we see if we are a good fit.", "Vi pratar om vad som fått dig att söka hjälp och vad du vill förändra. Du bestämmer själv hur mycket du vill berätta, och tillsammans ser vi om vi passar varandra.") },
    { q: tr("What is your cancellation policy?", "Vad gäller vid avbokning?"), a: tr("You can cancel or move your time free of charge up to 24 hours before. Later cancellations are charged in full.", "Du kan avboka eller flytta din tid kostnadsfritt fram till 24 timmar innan. Vid senare avbokning debiteras hela avgiften.") },
    { q: tr("Is what I say confidential?", "Har ni tystnadsplikt?"), a: tr("Yes. As a licensed psychologist I am bound by professional confidentiality, and your records are kept securely.", "Ja. Som legitimerad psykolog har jag tystnadsplikt, och din journal förvaras säkert.") },
    { q: tr("How do online sessions work?", "Hur fungerar onlinesamtal?"), a: tr("You get a secure video link by email before your session. All you need is a quiet room and a phone or computer.", "Du får en säker videolänk via mejl innan samtalet. Det enda du behöver är ett lugnt rum och en mobil eller dator.") },
  ];

  const inputCls = "mt-1 w-full rounded-xl border border-stilla-line bg-stilla-ivory px-4 py-3 text-stilla-ink outline-none focus:border-stilla-sage focus:ring-2 focus:ring-stilla-sage/20";

  return (
    <div className="stilla min-h-screen bg-stilla-ivory text-stilla-ink">
      <SEOHead
        localized
        canonicalPath="/demos/psychology"
        title="Psychology practice demo website | ChiaraAI Consulting"
        description="A demo website for a psychology practice with services, prices, online booking and Google Maps, built by ChiaraAI Consulting."
        titleSv="Demohemsida för psykologmottagning | ChiaraAI Consulting"
        descriptionSv="En demohemsida för en psykologmottagning med tjänster, priser, onlinebokning och Google Maps, byggd av ChiaraAI Consulting."
      />

      {/* Back bar */}
      <div className="sticky top-0 z-50 flex h-11 items-center justify-between bg-stilla-ink px-4 text-sm text-stilla-ivory md:px-8">
        <Link to={lp("/recent-work")} className="inline-flex min-h-[44px] items-center gap-2 hover:opacity-80">
          <ArrowLeft className="h-4 w-4" /> {tr("Back", "Tillbaka")}
        </Link>
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-stilla-ivory/30 px-3 py-0.5 text-xs">{tr("Demo website", "Demohemsida")}</span>
          <Link to={switchLanguagePath(pathname, sv ? "en" : "sv")} className="inline-flex min-h-[44px] items-center text-xs font-semibold hover:opacity-80">
            {sv ? "EN" : "SV"}
          </Link>
        </div>
      </div>

      {/* Practice header */}
      <header className="border-b border-stilla-line bg-stilla-ivory/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <span className="st-serif text-xl">Stilla <span className="text-stilla-muted">{tr("Psychology", "Psykologmottagning")}</span></span>
          <nav className="hidden gap-6 text-sm text-stilla-muted md:flex">
            <a href="#om" className="hover:text-stilla-ink">{tr("About", "Om mig")}</a>
            <a href="#tjanster" className="hover:text-stilla-ink">{tr("Services", "Tjänster")}</a>
            <a href="#hitta" className="hover:text-stilla-ink">{tr("Find us", "Hitta hit")}</a>
            <a href="#fragor" className="hover:text-stilla-ink">{tr("FAQ", "Frågor")}</a>
          </nav>
          <button onClick={scrollToBooking} className="min-h-[44px] rounded-full bg-stilla-sage px-5 text-sm font-semibold text-stilla-ivory hover:bg-stilla-sage-dark">
            {tr("Book a time", "Boka tid")}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:px-8 md:py-20">
        <div>
          <h1 className="st-serif text-4xl leading-tight md:text-6xl">{tr("A safe place to feel better", "En trygg plats att må bättre")}</h1>
          <p className="mt-5 max-w-md text-lg font-light leading-relaxed text-stilla-muted">
            {tr("Therapy in central Gothenburg or online. Calm, warm conversations at your own pace, with a licensed psychologist.", "Samtalsterapi mitt i Göteborg eller online. Lugna, varma samtal i din egen takt, med en legitimerad psykolog.")}
          </p>
          <button onClick={scrollToBooking} className="mt-8 min-h-[48px] rounded-full bg-stilla-sage px-8 font-semibold text-stilla-ivory hover:bg-stilla-sage-dark">
            {tr("Book a time", "Boka tid")}
          </button>
          <ul className="mt-8 space-y-3 text-stilla-ink">
            {[
              { icon: ShieldCheck, label: tr("Licensed psychologist", "Legitimerad psykolog") },
              { icon: Video, label: tr("Sessions in person or online", "Samtal på plats eller online") },
              { icon: Clock, label: tr("Reply within 24 hours", "Svar inom 24 timmar") },
            ].map((p) => (
              <li key={p.label} className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-stilla-sage-soft text-stilla-sage-dark"><p.icon className="h-4 w-4" /></span>
                {p.label}
              </li>
            ))}
          </ul>
        </div>
        <img src={heroImg} alt={tr("Calm therapy room with soft daylight", "Lugnt terapirum i mjukt dagsljus")} className="aspect-[4/5] w-full rounded-[2rem] object-cover md:aspect-[4/5]" />
      </section>

      {/* About */}
      <section id="om" className="scroll-mt-14 bg-stilla-beige/60 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-[2fr_3fr] md:px-8">
          <img src={portraitImg} alt="Anna Lindqvist" loading="lazy" className="aspect-square w-full max-w-sm rounded-[2rem] object-cover" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-stilla-sage">{tr("About me", "Om mig")}</p>
            <h2 className="st-serif mt-3 text-3xl md:text-4xl">Anna Lindqvist, {tr("licensed psychologist", "legitimerad psykolog")}</h2>
            <p className="mt-5 font-light leading-relaxed text-stilla-muted">
              {tr("I have worked as a psychologist for over twelve years, in healthcare and in private practice. I meet people in all stages of life, often around stress, anxiety, grief and relationships. My aim is that you leave each session feeling a little lighter and more understood.", "Jag har arbetat som psykolog i över tolv år, inom vården och på egen mottagning. Jag möter människor i alla skeden av livet, ofta kring stress, oro, sorg och relationer. Mitt mål är att du ska gå från varje samtal med en känsla av att vara lite lättare och mer förstådd.")}
            </p>
            <p className="mt-4 font-light leading-relaxed text-stilla-muted">
              {tr("I work with KBT (cognitive behavioural therapy) and ACT (acceptance and commitment therapy), both well researched methods that give you practical tools for everyday life.", "Jag arbetar med KBT (kognitiv beteendeterapi) och ACT (acceptans och engagemangsterapi), två väl beprövade metoder som ger dig konkreta verktyg i vardagen.")}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["KBT", "ACT"].map((m) => <span key={m} className="rounded-full bg-stilla-sage-soft px-4 py-1.5 text-sm text-stilla-sage-dark">{m}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="tjanster" className="mx-auto max-w-6xl scroll-mt-14 px-5 py-16 md:px-8 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-stilla-sage">{tr("Services and prices", "Tjänster och priser")}</p>
        <h2 className="st-serif mt-3 text-3xl md:text-4xl">{tr("Support that fits you", "Stöd som passar dig")}</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <article key={s.id} className="flex flex-col rounded-3xl border border-stilla-line bg-stilla-ivory p-7">
              <h3 className="st-serif text-2xl">{sv ? s.sv : s.en}</h3>
              <p className="mt-2 flex-1 font-light text-stilla-muted">{sv ? s.svText : s.enText}</p>
              <div className="mt-6 flex items-end justify-between">
                <span className="text-sm text-stilla-muted">{s.minutes} min</span>
                <span className="st-serif text-2xl text-stilla-sage-dark">{formatPrice(s.price)}</span>
              </div>
              <button onClick={() => { setServiceId(s.id); setDone(false); scrollToBooking(); }} className="mt-5 min-h-[44px] rounded-full border border-stilla-sage px-5 text-sm font-semibold text-stilla-sage-dark hover:bg-stilla-sage hover:text-stilla-ivory">
                {tr("Book this", "Boka")}
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Booking */}
      <section id="boka" className="scroll-mt-14 bg-stilla-sage-soft/60 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-stilla-sage">{tr("Online booking", "Onlinebokning")}</p>
          <h2 className="st-serif mt-3 text-3xl md:text-4xl">{tr("Book a time", "Boka tid")}</h2>
          <div className="mt-8 rounded-3xl bg-stilla-ivory p-6 md:p-10">
            {done && service && day && slot ? (
              <div className="text-center" role="status">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-stilla-sage text-stilla-ivory"><Check className="h-7 w-7" /></span>
                <h3 className="st-serif mt-5 text-3xl">{tr("Thank you,", "Tack,")} {form.name.trim().split(" ")[0]}!</h3>
                <p className="mt-3 text-stilla-muted">{sv ? service.sv : service.en} · {dateLabel(day, true)} {tr("at", "kl.")} {slot}</p>
                <p className="mx-auto mt-6 max-w-md rounded-2xl bg-stilla-beige px-5 py-4 text-sm">
                  {tr("This is a demo, no real appointment was booked.", "Detta är en demo, ingen riktig tid har bokats.")}
                </p>
                <button onClick={reset} className="mt-6 min-h-[44px] rounded-full border border-stilla-sage px-6 text-sm font-semibold text-stilla-sage-dark hover:bg-stilla-sage hover:text-stilla-ivory">
                  {tr("Make another booking", "Gör en ny bokning")}
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold">1. {tr("Choose a service", "Välj tjänst")}</h3>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {SERVICES.map((s) => (
                      <button key={s.id} onClick={() => setServiceId(s.id)} aria-pressed={serviceId === s.id}
                        className={`min-h-[44px] rounded-2xl border px-4 py-3 text-left text-sm transition-colors ${serviceId === s.id ? "border-stilla-sage bg-stilla-sage text-stilla-ivory" : "border-stilla-line hover:border-stilla-sage"}`}>
                        <span className="block font-semibold">{sv ? s.sv : s.en}</span>
                        <span className="opacity-80">{s.minutes} min · {formatPrice(s.price)}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {service && (
                  <div>
                    <h3 className="flex items-center gap-2 font-semibold"><CalendarDays className="h-4 w-4" /> 2. {tr("Choose a date", "Välj datum")}</h3>
                    <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5">
                      {days.map((d, i) => (
                        <button key={i} onClick={() => { setDayIdx(i); setSlot(null); }} aria-pressed={dayIdx === i}
                          className={`min-h-[44px] rounded-2xl border px-2 py-2 text-sm capitalize ${dayIdx === i ? "border-stilla-sage bg-stilla-sage text-stilla-ivory" : "border-stilla-line hover:border-stilla-sage"}`}>
                          {dateLabel(d)}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {service && day && (
                  <div>
                    <h3 className="font-semibold">3. {tr("Choose a free time", "Välj en ledig tid")}</h3>
                    <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
                      {SLOTS.map((t) => {
                        const taken = isTaken(day, t);
                        return (
                          <button key={t} disabled={taken} onClick={() => setSlot(t)} aria-pressed={slot === t}
                            className={`min-h-[44px] rounded-2xl border text-sm ${taken ? "cursor-not-allowed border-stilla-line bg-stilla-beige/50 text-stilla-muted line-through opacity-60" : slot === t ? "border-stilla-sage bg-stilla-sage text-stilla-ivory" : "border-stilla-line hover:border-stilla-sage"}`}>
                            {t}
                          </button>
                        );
                      })}
                    </div>
                    <p className="mt-2 text-xs text-stilla-muted">{tr("Crossed out times are already booked. Weekdays 09:00 to 17:00.", "Överstrukna tider är redan bokade. Vardagar 09:00 till 17:00.")}</p>
                  </div>
                )}

                {service && day && slot && (
                  <form onSubmit={submit} noValidate>
                    <h3 className="font-semibold">4. {tr("Your details", "Dina uppgifter")}</h3>
                    <div className="mt-3 grid gap-4 sm:grid-cols-2">
                      {([
                        { k: "name", label: tr("Name", "Namn"), type: "text", auto: "name" },
                        { k: "email", label: tr("Email", "Mejl"), type: "email", auto: "email" },
                        { k: "phone", label: tr("Phone", "Telefon"), type: "tel", auto: "tel" },
                      ] as const).map((f) => (
                        <label key={f.k} className={`block text-sm ${f.k === "name" ? "sm:col-span-2" : ""}`}>
                          {f.label}
                          <input type={f.type} autoComplete={f.auto} maxLength={100} value={form[f.k]}
                            onChange={(e) => setForm({ ...form, [f.k]: e.target.value })} className={inputCls} />
                          {errors[f.k] && <span className="mt-1 block text-xs text-destructive">{errors[f.k]}</span>}
                        </label>
                      ))}
                    </div>
                    <p className="mt-4 text-xs text-stilla-muted">{tr("Please do not share health information here. Nothing is saved in this demo.", "Skriv inga uppgifter om din hälsa här. Inget sparas i denna demo.")}</p>
                    <button type="submit" className="mt-6 min-h-[48px] w-full rounded-full bg-stilla-sage px-8 font-semibold text-stilla-ivory hover:bg-stilla-sage-dark sm:w-auto">
                      {tr("Confirm booking", "Bekräfta bokning")}
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Find us */}
      <section id="hitta" className="mx-auto grid max-w-6xl scroll-mt-14 gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-stilla-sage">{tr("Find us", "Hitta hit")}</p>
          <h2 className="st-serif mt-3 text-3xl md:text-4xl">{tr("In the heart of Vasastan", "Mitt i Vasastan")}</h2>
          <p className="mt-5 flex items-start gap-3"><MapPin className="mt-1 h-4 w-4 shrink-0 text-stilla-sage" /> {ADDRESS} ({tr("demo address", "demoadress")})</p>
          <dl className="mt-6 space-y-2 text-sm">
            <div className="flex justify-between border-b border-stilla-line pb-2"><dt>{tr("Monday to Friday", "Måndag till fredag")}</dt><dd>09:00 to 17:00</dd></div>
            <div className="flex justify-between border-b border-stilla-line pb-2"><dt>{tr("Saturday and Sunday", "Lördag och söndag")}</dt><dd>{tr("Closed", "Stängt")}</dd></div>
          </dl>
          <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-[48px] items-center rounded-full bg-stilla-sage px-8 font-semibold text-stilla-ivory hover:bg-stilla-sage-dark">
            {tr("Get directions", "Vägbeskrivning")} ↗
          </a>
        </div>
        <iframe title={tr("Map of Vasagatan, Gothenburg", "Karta över Vasagatan, Göteborg")} src={MAP_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          className="h-80 w-full rounded-3xl border-0 md:h-full md:min-h-[360px]" />
      </section>

      {/* FAQ */}
      <section id="fragor" className="scroll-mt-14 bg-stilla-beige/60 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <h2 className="st-serif text-3xl md:text-4xl">{tr("Common questions", "Vanliga frågor")}</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-stilla-ivory px-6 py-4">
                <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {f.q}<ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-2 font-light leading-relaxed text-stilla-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-stilla-ink px-5 py-10 text-center text-sm text-stilla-ivory/70">
        <p className="st-serif text-lg text-stilla-ivory">Stilla {tr("Psychology", "Psykologmottagning")}</p>
        <p className="mt-2">{tr("A fictional practice. Demo website by ChiaraAI Consulting.", "En påhittad mottagning. Demohemsida av ChiaraAI Consulting.")}</p>
      </footer>
    </div>
  );
};

export default StillaDemoPage;
