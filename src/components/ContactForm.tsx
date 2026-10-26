import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackConversion } from "@/lib/conversions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const NEEDS = [
  ["website", "A website", "En hemsida"],
  ["webapp", "A web app or booking system", "En webbapp eller ett bokningssystem"],
  ["saas", "A SaaS product", "En SaaS tjänst"],
  ["tool", "A business tool", "Ett verktyg för verksamheten"],
  ["fix", "Help with an existing site or app", "Hjälp med en befintlig sida eller app"],
  ["other", "Something else", "Något annat"],
] as const;

const BUDGETS = [
  ["", "Not sure yet", "Vet inte än"],
  ["under-15k", "Under 15 000 kr", "Under 15 000 kr"],
  ["15k-50k", "15 000 to 50 000 kr", "15 000 till 50 000 kr"],
  ["50k-150k", "50 000 to 150 000 kr", "50 000 till 150 000 kr"],
  ["150k+", "Over 150 000 kr", "Över 150 000 kr"],
] as const;

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(120),
  need: z.string().min(1),
  budget: z.string().max(60),
  message: z.string().trim().min(1).max(2000),
});

type Fields = z.infer<typeof schema>;
const empty: Fields = { name: "", email: "", company: "", need: "", budget: "", message: "" };

const selectCls =
  "flex h-11 w-full rounded-md border border-input bg-background px-3 text-base md:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const ContactForm = () => {
  const { language } = useLanguage();
  const tr = (en: string, sv: string) => (language === "sv" ? sv : en);
  const [f, setF] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(f);
    if (!r.success) {
      const msg: Record<string, string> = {
        name: tr("Please enter your name", "Skriv ditt namn"),
        email: tr("Please enter a valid email address", "Skriv en giltig mejladress"),
        need: tr("Please choose what you need", "Välj vad du behöver"),
        message: tr("Please write a short message", "Skriv ett kort meddelande"),
      };
      const next: typeof errors = {};
      r.error.issues.forEach((i) => {
        const k = i.path[0] as keyof Fields;
        next[k] = msg[k] ?? tr("Please check this field", "Kontrollera fältet");
      });
      setErrors(next);
      return;
    }
    setErrors({});
    setStatus("sending");
    const needLabel = NEEDS.find((n) => n[0] === r.data.need)?.[1] ?? r.data.need;
    const budgetLabel = BUDGETS.find((b) => b[0] === r.data.budget)?.[1] ?? "";
    const { error } = await supabase.functions.invoke("send-contact-email", {
      body: { ...r.data, need: needLabel, budget: budgetLabel, language },
    });
    if (error) {
      setStatus("error");
      return;
    }
    trackConversion("contact_form_submit", { need: r.data.need, language });
    setStatus("sent");
    setF(empty);
  };

  if (status === "sent") {
    return (
      <div role="status" className="rounded-xl border border-border bg-card p-8 text-center shadow-soft md:p-12">
        <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-[hsl(var(--brass))]" />
        <h3 className="mb-2 text-2xl md:text-3xl">{tr("Thank you, your message is sent!", "Tack, ditt meddelande är skickat!")}</h3>
        <p className="mx-auto max-w-md text-muted-foreground">
          {tr("We have received your enquiry and will reply by email within one working day.", "Vi har fått din förfrågan och svarar via mejl inom en arbetsdag.")}
        </p>
        <Button variant="outline" className="mt-6 h-11" onClick={() => setStatus("idle")}>
          {tr("Send another message", "Skicka ett till meddelande")}
        </Button>
      </div>
    );
  }

  const err = (k: keyof Fields) => errors[k] && <p className="text-sm text-destructive">{errors[k]}</p>;

  return (
    <form onSubmit={submit} noValidate className="space-y-5 rounded-xl border border-border bg-card p-6 shadow-soft md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="cf-name">{tr("Name", "Namn")}</Label>
          <Input id="cf-name" className="h-11" autoComplete="name" maxLength={100} value={f.name} onChange={set("name")} aria-invalid={!!errors.name} />
          {err("name")}
        </div>
        <div className="space-y-2">
          <Label htmlFor="cf-email">{tr("Email", "Mejl")}</Label>
          <Input id="cf-email" type="email" className="h-11" autoComplete="email" maxLength={255} value={f.email} onChange={set("email")} aria-invalid={!!errors.email} />
          {err("email")}
        </div>
        <div className="space-y-2">
          <Label htmlFor="cf-company">{tr("Company (optional)", "Företag (valfritt)")}</Label>
          <Input id="cf-company" className="h-11" autoComplete="organization" maxLength={120} value={f.company} onChange={set("company")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cf-need">{tr("What do you need?", "Vad behöver du?")}</Label>
          <select id="cf-need" className={selectCls} value={f.need} onChange={set("need")} aria-invalid={!!errors.need}>
            <option value="">{tr("Choose one", "Välj ett alternativ")}</option>
            {NEEDS.map(([v, en, sv]) => <option key={v} value={v}>{tr(en, sv)}</option>)}
          </select>
          {err("need")}
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="cf-budget">{tr("Budget (optional)", "Budget (valfritt)")}</Label>
          <select id="cf-budget" className={selectCls} value={f.budget} onChange={set("budget")}>
            {BUDGETS.map(([v, en, sv]) => <option key={v || "none"} value={v}>{tr(en, sv)}</option>)}
          </select>
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="cf-message">{tr("Message", "Meddelande")}</Label>
          <Textarea id="cf-message" rows={5} maxLength={2000} value={f.message} onChange={set("message")} aria-invalid={!!errors.message}
            placeholder={tr("Tell us a little about your project and your timeline.", "Berätta kort om ditt projekt och när du vill komma igång.")} />
          {err("message")}
        </div>
      </div>
      {status === "error" && (
        <p className="text-sm text-destructive">
          {tr("Something went wrong. Please try again or email info@chiaraaiconsulting.se.", "Något gick fel. Försök igen eller mejla info@chiaraaiconsulting.se.")}
        </p>
      )}
      <Button type="submit" size="lg" className="h-12 w-full sm:w-auto" disabled={status === "sending"}>
        {status === "sending" && <Loader2 className="animate-spin" />}
        {tr("Send message", "Skicka meddelande")}
      </Button>
    </form>
  );
};

export default ContactForm;
