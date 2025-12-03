import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast.success("Thank you for your message! We'll get back to you within 24 hours. Check your email for confirmation.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        business: "",
        message: ""
      });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-16 md:py-32 px-4 md:px-6 bg-gradient-to-b from-primary/5 via-accent/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 -z-10" />
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-20 space-y-3 md:space-y-5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">Transform</span> Your Business?
          </h2>
          <p className="text-base md:text-xl text-muted-foreground font-medium">
            Book a call or send us an email
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-16">
          <Card className="p-6 md:p-10 text-center border-2 border-primary/30 hover:border-primary bg-gradient-to-br from-card to-primary/5 hover:shadow-glow transition-all duration-500 hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-primary text-white mb-4 md:mb-6 shadow-medium">
              <Mail size={20} strokeWidth={2} className="md:w-6 md:h-6" />
            </div>
            <h3 className="font-bold mb-2 md:mb-3 text-card-foreground text-sm md:text-base">Email</h3>
            <a href="mailto:info@chiaraaiconsulting.se" className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium text-xs md:text-sm break-all">
              info@chiaraaiconsulting.se
            </a>
          </Card>

          <Card className="p-6 md:p-10 text-center border-2 border-accent/30 hover:border-accent bg-gradient-to-br from-card to-accent/5 hover:shadow-medium transition-all duration-500 hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-accent text-white mb-4 md:mb-6 shadow-medium">
              <Phone size={20} strokeWidth={2} className="md:w-6 md:h-6" />
            </div>
            <h3 className="font-bold mb-2 md:mb-3 text-card-foreground text-sm md:text-base">Phone</h3>
            <a href="tel:+46735316950" className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium text-xs md:text-sm">
              +46 73 531 69 50
            </a>
          </Card>

          <Card className="p-6 md:p-10 text-center border-2 border-primary/30 hover:border-primary bg-gradient-to-br from-card to-primary/5 hover:shadow-glow transition-all duration-500 hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-primary text-white mb-4 md:mb-6 shadow-medium">
              <MapPin size={20} strokeWidth={2} className="md:w-6 md:h-6" />
            </div>
            <h3 className="font-bold mb-2 md:mb-3 text-card-foreground text-sm md:text-base">Location</h3>
            <p className="text-muted-foreground font-medium text-xs md:text-sm">Gothenburg, Sweden</p>
          </Card>
        </div>

        <Card className="p-6 md:p-12 lg:p-16 max-w-3xl mx-auto border-2 border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 shadow-glow">
          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-7">
            <div className="grid md:grid-cols-2 gap-5 md:gap-7">
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

            <div className="grid md:grid-cols-2 gap-5 md:gap-7">
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

            <Button 
              type="submit" 
              size="lg" 
              disabled={isSubmitting}
              className="w-full h-14 bg-gradient-primary hover:shadow-glow text-white font-bold text-lg transition-all duration-500 hover:scale-[1.02] disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Inquiry"
              )}
            </Button>
          </form>
        </Card>
      </div>
    </section>;
};
export default Contact;