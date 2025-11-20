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
    toast.success("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", business: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-32 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20 space-y-5">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
            Get Started Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-normal">
            Book a free consultation and let's discuss how AI can help your specific business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center border border-border bg-card hover:shadow-soft transition-all duration-500">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/5 text-primary mb-5">
              <Mail size={22} strokeWidth={1.5} />
            </div>
            <h3 className="font-semibold mb-3 text-card-foreground">Email</h3>
            <a href="mailto:info@chiaraaiconsulting.se" className="text-primary hover:text-primary/80 transition-colors duration-300">
              info@chiaraaiconsulting.se
            </a>
          </Card>

          <Card className="p-8 text-center border border-border bg-card hover:shadow-soft transition-all duration-500">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/5 text-primary mb-5">
              <Phone size={22} strokeWidth={1.5} />
            </div>
            <h3 className="font-semibold mb-3 text-card-foreground">Phone</h3>
            <a href="tel:+46735316950" className="text-primary hover:text-primary/80 transition-colors duration-300">
              +46 73 531 69 50
            </a>
          </Card>

          <Card className="p-8 text-center border border-border bg-card hover:shadow-soft transition-all duration-500">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/5 text-primary mb-5">
              <MapPin size={22} strokeWidth={1.5} />
            </div>
            <h3 className="font-semibold mb-3 text-card-foreground">Location</h3>
            <p className="text-muted-foreground">Gothenburg, Sweden</p>
          </Card>
        </div>

        <Card className="p-10 md:p-14 max-w-3xl mx-auto border border-border bg-card">
          <form onSubmit={handleSubmit} className="space-y-7">
            <div className="grid md:grid-cols-2 gap-7">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-3 text-card-foreground">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="h-12"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-3 text-card-foreground">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="h-12"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-7">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-3 text-card-foreground">
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+46 123 456 789"
                  className="h-12"
                />
              </div>
              <div>
                <label htmlFor="business" className="block text-sm font-medium mb-3 text-card-foreground">
                  Business/Industry
                </label>
                <Input
                  id="business"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  placeholder="e.g. Café, Salon"
                  className="h-12"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-3 text-card-foreground">
                Tell us about your needs
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="What would you like to automate in your business?"
                className="resize-none"
              />
            </div>

            <Button type="submit" size="lg" className="w-full h-12 bg-primary hover:bg-primary/90 font-medium transition-all duration-300">
              Send Inquiry
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
