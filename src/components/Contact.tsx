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
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Get Started Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book a free consultation and let's discuss how AI can help your specific business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 text-center border-border bg-card">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
              <Mail size={24} />
            </div>
            <h3 className="font-semibold mb-2 text-card-foreground">Email</h3>
            <a href="mailto:info@chiaraaiconsulting.se" className="text-primary hover:underline">
              info@chiaraaiconsulting.se
            </a>
          </Card>

          <Card className="p-6 text-center border-border bg-card">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
              <Phone size={24} />
            </div>
            <h3 className="font-semibold mb-2 text-card-foreground">Phone</h3>
            <a href="tel:+46735316950" className="text-primary hover:underline">
              +46 73 531 69 50
            </a>
          </Card>

          <Card className="p-6 text-center border-border bg-card">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="font-semibold mb-2 text-card-foreground">Location</h3>
            <p className="text-muted-foreground">Gothenburg, Sweden</p>
          </Card>
        </div>

        <Card className="p-8 md:p-12 max-w-3xl mx-auto border-border bg-card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-card-foreground">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-card-foreground">
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
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-card-foreground">
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 234 567 8900"
                />
              </div>
              <div>
                <label htmlFor="business" className="block text-sm font-medium mb-2 text-card-foreground">
                  Business/Industry
                </label>
                <Input
                  id="business"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  placeholder="e.g. Café, Salon"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-card-foreground">
                Tell us about your needs
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="What would you like to automate in your business?"
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-gradient-accent">
              Send Inquiry
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
