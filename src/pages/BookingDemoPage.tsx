import { useEffect, useMemo, useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock, Check, Sparkles, Wrench, Zap, ShieldCheck, Home } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

type Service = {
  id: string;
  name: string;
  duration: string;
  price: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

const SERVICES: Service[] = [
  {
    id: "install",
    name: "Electrical Installation",
    duration: "2 h",
    price: "From 1 490 SEK",
    description: "New outlets, lighting, or fixtures professionally installed.",
    icon: Zap,
  },
  {
    id: "inspection",
    name: "Safety Inspection",
    duration: "1 h",
    price: "From 890 SEK",
    description: "Full home electrical check with a written report.",
    icon: ShieldCheck,
  },
  {
    id: "repair",
    name: "Repair & Troubleshooting",
    duration: "1.5 h",
    price: "From 1 190 SEK",
    description: "Diagnose and fix faults, breakers, and wiring issues.",
    icon: Wrench,
  },
  {
    id: "smart",
    name: "Smart Home Setup",
    duration: "3 h",
    price: "From 2 290 SEK",
    description: "Install smart switches, thermostats, and lighting.",
    icon: Home,
  },
];

const TIME_SLOTS = ["08:00", "09:30", "11:00", "13:00", "14:30", "16:00"];

const BookingDemoPage = () => {
  const [serviceId, setServiceId] = useState<string>(SERVICES[0].id);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const service = useMemo(
    () => SERVICES.find((s) => s.id === serviceId)!,
    [serviceId]
  );

  const canSubmit = date && time && name.trim() && email.trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) {
      toast.error("Please complete every field to confirm your booking.");
      return;
    }
    setSubmitted(true);
    toast.success("Booking confirmed", {
      description: `${service.name} on ${format(date!, "PPP")} at ${time}.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Booking Demo – ChiaraAI Consulting"
        description="Live demo of a service booking layout with an integrated calendar for local service businesses."
        keywords="booking demo, online booking, service calendar, appointment scheduling"
        canonicalPath="/demo/booking"
      />
      <Navigation />

      <main className="pt-24 md:pt-28 pb-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center space-y-3 mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Live Demo
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Book a Service
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              A clean booking layout we ship with client websites. Pick a service, choose a time, done.
            </p>
          </div>

          {submitted ? (
            <div className="max-w-xl mx-auto rounded-2xl border border-border bg-card p-8 text-center space-y-4 shadow-soft">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Check className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-semibold text-card-foreground">Booking Confirmed</h2>
              <p className="text-sm text-muted-foreground">
                {service.name} on <strong>{format(date!, "PPP")}</strong> at <strong>{time}</strong>.
                <br />
                A confirmation has been sent to {email}.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSubmitted(false);
                  setTime(null);
                }}
              >
                Book another
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6"
            >
              {/* Services list */}
              <aside className="space-y-3">
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                  Choose a service
                </h2>
                <div className="space-y-2">
                  {SERVICES.map((s) => {
                    const Icon = s.icon;
                    const active = s.id === serviceId;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setServiceId(s.id)}
                        className={cn(
                          "w-full text-left rounded-xl border p-4 transition-all",
                          active
                            ? "border-primary bg-primary/5 shadow-soft"
                            : "border-border bg-card hover:border-primary/50"
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={cn(
                              "w-9 h-9 rounded-lg flex items-center justify-center shrink-0",
                              active ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                            )}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-semibold text-sm text-card-foreground">
                                {s.name}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                              {s.description}
                            </p>
                            <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                              <span className="inline-flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {s.duration}
                              </span>
                              <span className="font-medium text-foreground">{s.price}</span>
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </aside>

              {/* Calendar + slots + details */}
              <section className="space-y-6">
                <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <div className="flex items-center gap-2 mb-3">
                    <CalendarIcon className="w-4 h-4 text-primary" />
                    <h2 className="text-sm font-semibold text-card-foreground uppercase tracking-wide">
                      Pick a date
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(d) => {
                        setDate(d);
                        setTime(null);
                      }}
                      disabled={(d) => {
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        return d < today || d.getDay() === 0;
                      }}
                      initialFocus
                      className={cn("p-0 pointer-events-auto")}
                    />
                    <div>
                      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        Available times {date && `– ${format(date, "EEE d MMM")}`}
                      </h3>
                      <div className="grid grid-cols-3 gap-2">
                        {TIME_SLOTS.map((slot) => {
                          const active = time === slot;
                          return (
                            <button
                              key={slot}
                              type="button"
                              disabled={!date}
                              onClick={() => setTime(slot)}
                              className={cn(
                                "py-2 rounded-lg border text-sm font-medium transition-all",
                                active
                                  ? "border-primary bg-primary text-primary-foreground"
                                  : "border-border bg-card text-card-foreground hover:border-primary/50",
                                !date && "opacity-50 cursor-not-allowed"
                              )}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Customer details */}
                <div className="rounded-2xl border border-border bg-card p-5 shadow-soft space-y-4">
                  <h2 className="text-sm font-semibold text-card-foreground uppercase tracking-wide">
                    Your details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name">Full name</Label>
                      <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="space-y-1.5 md:col-span-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                  </div>
                </div>

                {/* Summary + submit */}
                <div className="rounded-2xl border border-border bg-card p-5 shadow-soft flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="text-sm">
                    <div className="font-semibold text-card-foreground">{service.name}</div>
                    <div className="text-muted-foreground">
                      {date ? format(date, "PPP") : "Pick a date"} {time ? `at ${time}` : ""} · {service.duration} · {service.price}
                    </div>
                  </div>
                  <Button type="submit" disabled={!canSubmit} className="md:w-auto">
                    Confirm booking
                  </Button>
                </div>
              </section>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookingDemoPage;
