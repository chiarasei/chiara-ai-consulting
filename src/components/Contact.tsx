import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to an API
    toast.success("Tack för ditt meddelande! Vi återkommer inom 24 timmar.");
    setFormData({ name: "", email: "", phone: "", business: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Kom Igång Idag
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Boka en kostnadsfri konsultation så går vi igenom hur AI kan hjälpa just ditt företag
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 text-center border-border bg-card">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
              <Mail size={24} />
            </div>
            <h3 className="font-semibold mb-2 text-card-foreground">E-post</h3>
            <a href="mailto:info@chiaraaiconsulting.se" className="text-primary hover:underline">
              info@chiaraaiconsulting.se
            </a>
          </Card>

          <Card className="p-6 text-center border-border bg-card">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
              <Phone size={24} />
            </div>
            <h3 className="font-semibold mb-2 text-card-foreground">Telefon</h3>
            <a href="tel:+46701234567" className="text-primary hover:underline">
              +46 70 123 45 67
            </a>
          </Card>

          <Card className="p-6 text-center border-border bg-card">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="font-semibold mb-2 text-card-foreground">Plats</h3>
            <p className="text-muted-foreground">Stockholm, Sverige</p>
          </Card>
        </div>

        <Card className="p-8 md:p-12 max-w-3xl mx-auto border-border bg-card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-card-foreground">
                  Namn *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ditt namn"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-card-foreground">
                  E-post *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="din@email.se"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-card-foreground">
                  Telefon
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+46 70 123 45 67"
                />
              </div>
              <div>
                <label htmlFor="business" className="block text-sm font-medium mb-2 text-card-foreground">
                  Företag/Bransch
                </label>
                <Input
                  id="business"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  placeholder="T.ex. Café, Salong"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-card-foreground">
                Berätta om ditt behov
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Vad vill du automatisera i din verksamhet?"
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-gradient-accent">
              Skicka Förfrågan
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
