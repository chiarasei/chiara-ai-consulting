import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail, MapPin, Star, CheckCircle2, Sparkles, Home, Building2, CalendarDays, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { DemoBotChat } from "@/components/DemoBotChat";
import cleaningHero from "@/assets/cleaning-hero.jpg";

const SERVICES = [
  { id: "home", label: "Hemstädning", icon: Home, desc: "Regelbunden städning av ditt hem" },
  { id: "deep", label: "Storstädning", icon: Sparkles, desc: "Grundlig rengöring från golv till tak" },
  { id: "office", label: "Kontorsstädning", icon: Building2, desc: "Professionell kontorsstädning" },
  { id: "move", label: "Flyttstädning", icon: Home, desc: "Komplett städning vid flytt" },
];

const TIME_SLOTS = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"];

const DAYS_OF_WEEK = ["Mån", "Tis", "Ons", "Tor", "Fre", "Lör", "Sön"];

const getWeekDates = (weekOffset: number) => {
  const today = new Date();
  const startOfWeek = new Date(today);
  const dayOfWeek = today.getDay();
  const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  startOfWeek.setDate(today.getDate() + diff + weekOffset * 7);

  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    return date;
  });
};

const isDatePast = (date: Date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
};

const isSunday = (date: Date) => date.getDay() === 0;

// Simulate some booked slots
const getBookedSlots = (dateStr: string) => {
  const hash = dateStr.split("").reduce((a, b) => a + b.charCodeAt(0), 0);
  return TIME_SLOTS.filter((_, i) => (hash + i) % 4 === 0);
};

const REVIEWS = [
  { name: "Anna L.", text: "Fantastisk städning varje gång! Rekommenderar varmt.", rating: 5 },
  { name: "Erik S.", text: "Flyttstädningen var perfekt. Fick tillbaka hela depositionen.", rating: 5 },
  { name: "Maria K.", text: "Bra priser och alltid punktliga. Har använt dem i ett år nu.", rating: 5 },
];

const CleaningDemoPage = () => {
  const [selectedService, setSelectedService] = useState("");
  const [weekOffset, setWeekOffset] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const weekDates = getWeekDates(weekOffset);
  const selectedDateStr = selectedDate?.toISOString().split("T")[0] ?? "";
  const bookedSlots = selectedDateStr ? getBookedSlots(selectedDateStr) : [];

  const handleBook = () => {
    if (!selectedService || !selectedDate || !selectedTime || !name.trim() || !address.trim()) {
      toast({ title: "Fyll i alla fält", description: "Vänligen välj tjänst, datum, tid och fyll i dina uppgifter.", variant: "destructive" });
      return;
    }
    toast({
      title: "Bokning bekräftad! ✓",
      description: `${SERVICES.find(s => s.id === selectedService)?.label} den ${selectedDate.toLocaleDateString("sv-SE")} kl ${selectedTime}. Vi återkommer med bekräftelse.`,
    });
    setSelectedService("");
    setSelectedDate(null);
    setSelectedTime("");
    setName("");
    setAddress("");
    setPhone("");
  };

  const formatMonth = (date: Date) => date.toLocaleDateString("sv-SE", { month: "long", year: "numeric" });

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Back banner */}
      <div className="bg-sky-600 text-white py-2 px-4 text-center text-sm">
        <Link to="/recent-work" className="inline-flex items-center gap-1.5 hover:underline font-medium">
          <ArrowLeft className="w-3.5 h-3.5" />
          This is a demo by ChiaraAI Consulting — Back to Our Work
        </Link>
      </div>

      {/* Nav */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="container mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-sky-600" />
            <span className="text-lg font-bold text-gray-900">Göteborg Clean Services</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-sky-600 transition-colors">Tjänster</a>
            <a href="#booking" className="hover:text-sky-600 transition-colors">Boka</a>
            <a href="#reviews" className="hover:text-sky-600 transition-colors">Omdömen</a>
            <a href="#contact" className="hover:text-sky-600 transition-colors">Kontakt</a>
          </div>
          <a href="#booking">
            <Button className="bg-sky-600 hover:bg-sky-700 text-white text-sm">Boka Städning</Button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={cleaningHero} alt="Professionell städning" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/40 to-transparent" />
        </div>
        <div className="relative container mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="max-w-md space-y-4">
            <div className="inline-flex items-center gap-2 bg-sky-600/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              <Star className="w-3.5 h-3.5 fill-current" />
              Göteborgs mest pålitliga städfirma
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              Professionell städning i Göteborg
            </h1>
            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
              Boka online på under en minut. Hemstädning, kontor och flytt med RUT-avdrag.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#booking">
                <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white text-sm w-full sm:w-auto">
                  <CalendarDays className="w-4 h-4 mr-2" />
                  Boka Online
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-sm"
                onClick={() => setShowChat(true)}
              >
                Fråga oss i chatten
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Våra Tjänster</h2>
            <p className="text-gray-500 mt-2">Välj den tjänst som passar dig</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((service) => (
              <a
                key={service.id}
                href="#booking"
                onClick={() => setSelectedService(service.id)}
                className={`p-5 rounded-xl border-2 transition-all cursor-pointer hover:shadow-md ${
                  selectedService === service.id
                    ? "border-sky-600 bg-sky-50"
                    : "border-gray-200 bg-white hover:border-sky-300"
                }`}
              >
                <service.icon className={`w-8 h-8 mb-3 ${selectedService === service.id ? "text-sky-600" : "text-gray-400"}`} />
                <h3 className="font-semibold text-gray-900">{service.label}</h3>
                <p className="text-sm text-gray-500 mt-1">{service.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Boka Din Städning</h2>
            <p className="text-gray-500 mt-2">Välj tid, fyll i dina uppgifter, klart!</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Step 1: Service */}
            <div className="p-5 md:p-6 border-b border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-sky-600 text-white text-xs font-bold flex items-center justify-center">1</span>
                <h3 className="font-semibold text-gray-900">Välj tjänst</h3>
              </div>
              <Select value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger className="w-full max-w-sm border-gray-300 text-gray-900">
                  <SelectValue placeholder="Välj en tjänst..." />
                </SelectTrigger>
                <SelectContent>
                  {SERVICES.map((s) => (
                    <SelectItem key={s.id} value={s.id}>{s.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Step 2: Calendar */}
            <div className="p-5 md:p-6 border-b border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-sky-600 text-white text-xs font-bold flex items-center justify-center">2</span>
                <h3 className="font-semibold text-gray-900">Välj datum och tid</h3>
              </div>

              {/* Week navigator */}
              <div className="flex items-center justify-between mb-3">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setWeekOffset(Math.max(0, weekOffset - 1))}
                  disabled={weekOffset === 0}
                  className="text-gray-600"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <span className="text-sm font-medium text-gray-700 capitalize">
                  {formatMonth(weekDates[0])}
                  {formatMonth(weekDates[0]) !== formatMonth(weekDates[6]) && ` – ${formatMonth(weekDates[6])}`}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setWeekOffset(Math.min(4, weekOffset + 1))}
                  disabled={weekOffset >= 4}
                  className="text-gray-600"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Day selector */}
              <div className="grid grid-cols-7 gap-1.5 mb-5">
                {weekDates.map((date, i) => {
                  const past = isDatePast(date);
                  const sunday = isSunday(date);
                  const disabled = past || sunday;
                  const isSelected = selectedDate?.toDateString() === date.toDateString();
                  const isToday = new Date().toDateString() === date.toDateString();

                  return (
                    <button
                      key={i}
                      disabled={disabled}
                      onClick={() => { setSelectedDate(date); setSelectedTime(""); }}
                      className={`flex flex-col items-center py-2 px-1 rounded-lg text-xs transition-all ${
                        disabled
                          ? "opacity-30 cursor-not-allowed"
                          : isSelected
                            ? "bg-sky-600 text-white shadow-md"
                            : "hover:bg-sky-50 text-gray-700 border border-gray-200"
                      } ${isToday && !isSelected ? "ring-2 ring-sky-300" : ""}`}
                    >
                      <span className="font-medium">{DAYS_OF_WEEK[i]}</span>
                      <span className={`text-lg font-bold ${isSelected ? "text-white" : "text-gray-900"}`}>
                        {date.getDate()}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Time slots */}
              {selectedDate && (
                <div className="space-y-2">
                  <p className="text-sm text-gray-500 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    Lediga tider {selectedDate.toLocaleDateString("sv-SE", { weekday: "long", day: "numeric", month: "long" })}
                  </p>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                    {TIME_SLOTS.map((time) => {
                      const booked = bookedSlots.includes(time);
                      const isSelected = selectedTime === time;
                      return (
                        <button
                          key={time}
                          disabled={booked}
                          onClick={() => setSelectedTime(time)}
                          className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                            booked
                              ? "bg-gray-100 text-gray-300 cursor-not-allowed line-through"
                              : isSelected
                                ? "bg-sky-600 text-white shadow-md"
                                : "bg-white border border-gray-200 text-gray-700 hover:border-sky-400 hover:bg-sky-50"
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                  {bookedSlots.length > 0 && (
                    <p className="text-xs text-gray-400">Överstrukna tider är redan bokade</p>
                  )}
                </div>
              )}
            </div>

            {/* Step 3: Details */}
            <div className="p-5 md:p-6 border-b border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-sky-600 text-white text-xs font-bold flex items-center justify-center">3</span>
                <h3 className="font-semibold text-gray-900">Dina uppgifter</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
                <div>
                  <Label htmlFor="name" className="text-gray-700 text-sm">Namn</Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ditt namn" className="mt-1 border-gray-300 text-gray-900" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-700 text-sm">Telefon</Label>
                  <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="070-XXX XX XX" className="mt-1 border-gray-300 text-gray-900" />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="address" className="text-gray-700 text-sm">Adress</Label>
                  <Input id="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Gatuadress, Göteborg" className="mt-1 border-gray-300 text-gray-900" />
                </div>
              </div>
            </div>

            {/* Summary & Book */}
            <div className="p-5 md:p-6 bg-gray-50">
              {selectedService && selectedDate && selectedTime ? (
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <p className="font-semibold text-gray-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      Redo att boka
                    </p>
                    <p className="text-sm text-gray-500">
                      {SERVICES.find(s => s.id === selectedService)?.label} · {selectedDate.toLocaleDateString("sv-SE")} · kl {selectedTime}
                    </p>
                  </div>
                  <Button onClick={handleBook} size="lg" className="bg-sky-600 hover:bg-sky-700 text-white w-full sm:w-auto">
                    Bekräfta Bokning
                  </Button>
                </div>
              ) : (
                <p className="text-sm text-gray-400 text-center">Välj tjänst, datum och tid för att boka</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 px-4 bg-sky-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">Varför välja oss?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "RUT-avdrag", desc: "Vi hjälper dig med RUT-avdraget. Du betalar bara halva priset." },
              { title: "Enkel bokning", desc: "Boka online när det passar dig. Ingen väntan i telefon." },
              { title: "100% nöjd-garanti", desc: "Inte nöjd? Vi kommer tillbaka och städar om utan extra kostnad." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-sky-100">
                <CheckCircle2 className="w-6 h-6 text-sky-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">Vad våra kunder säger</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {REVIEWS.map((review, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-3">"{review.text}"</p>
                <p className="text-xs font-semibold text-gray-900">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Kontakta Oss</h2>
          <p className="text-gray-300 max-w-lg mx-auto">Har du frågor? Kontakta oss eller använd chatten för snabba svar.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-300">
            <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> 031-123 45 67</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@goteborgclean.se</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Göteborg, Sverige</span>
          </div>
          <Button onClick={() => setShowChat(true)} size="lg" className="bg-sky-600 hover:bg-sky-700 text-white">
            Chatta med oss
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-500 text-xs text-center py-6 px-4">
        <p>© 2025 Göteborg Clean Services — Demo av <Link to="/recent-work" className="text-sky-400 hover:underline">ChiaraAI Consulting</Link></p>
      </footer>

      {/* Chat toggle bubble + panel */}
      {showChat ? (
        <div className="fixed bottom-4 right-4 z-50 w-[340px] max-w-[calc(100vw-2rem)]">
          <DemoBotChat defaultOpen onClose={() => setShowChat(false)} />
        </div>
      ) : (
        <button
          onClick={() => setShowChat(true)}
          className="fixed bottom-4 right-4 z-50 bg-sky-600 hover:bg-sky-700 text-white rounded-full p-3.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          aria-label="Öppna chatt"
        >
          <Bot className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default CleaningDemoPage;
