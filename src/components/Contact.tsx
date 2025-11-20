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
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to an API
    toast.success("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      business: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-32 px-6 bg-gradient-to-b from-primary/5 via-accent/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 -z-10" />
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20 space-y-5">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">Transform</span> Your Business?
          </h2>
          
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-10 text-center border-2 border-primary/30 hover:border-primary bg-gradient-to-br from-card to-primary/5 hover:shadow-glow transition-all duration-500 hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white mb-6 shadow-medium">
              <Mail size={24} strokeWidth={2} />
            </div>
            <h3 className="font-bold mb-3 text-card-foreground">Email</h3>
            <a href="mailto:info@chiaraaiconsulting.se" className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium">
              info@chiaraaiconsulting.se
            </a>
          </Card>

          <Card className="p-10 text-center border-2 border-accent/30 hover:border-accent bg-gradient-to-br from-card to-accent/5 hover:shadow-medium transition-all duration-500 hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-accent text-white mb-6 shadow-medium">
              <Phone size={24} strokeWidth={2} />
            </div>
            <h3 className="font-bold mb-3 text-card-foreground">Phone</h3>
            <a href="tel:+46735316950" className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium">
              +46 73 531 69 50
            </a>
          </Card>

          <Card className="p-10 text-center border-2 border-primary/30 hover:border-primary bg-gradient-to-br from-card to-primary/5 hover:shadow-glow transition-all duration-500 hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-luxury text-white mb-6 shadow-medium">
              <MapPin size={24} strokeWidth={2} />
            </div>
            <h3 className="font-bold mb-3 text-card-foreground">Location</h3>
            <p className="text-muted-foreground font-medium">Gothenburg, Sweden</p>
          </Card>
        </div>

        <Card className="p-12 md:p-16 max-w-3xl mx-auto border-2 border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 shadow-glow">
          <form onSubmit={handleSubmit} className="space-y-7">
            <div className="grid md:grid-cols-2 gap-7">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-3 text-card-foreground">
                  Name *
                </label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className="h-12" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-3 text-card-foreground">
                  Email *
                </label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" className="h-12" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-7">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-3 text-card-foreground">
                  Phone
                </label>
                <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+46 123 456 789" className="h-12" />
              </div>
              <div>
                <label htmlFor="business" className="block text-sm font-medium mb-3 text-card-foreground">
                  Business/Industry
                </label>
                <Input id="business" name="business" value={formData.business} onChange={handleChange} placeholder="e.g. Café, Salon" className="h-12" />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-3 text-card-foreground">
                Tell us about your needs
              </label>
              <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="What would you like to automate in your business?" className="resize-none" />
            </div>

            <Button type="submit" size="lg" className="w-full h-14 bg-gradient-primary hover:shadow-glow text-white font-bold text-lg transition-all duration-500 hover:scale-[1.02]">
              Send Inquiry
            </Button>
          </form>
        </Card>
      </div>
    </section>;
};
export default Contact;