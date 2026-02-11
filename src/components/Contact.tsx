import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-32 px-4 md:px-6 bg-gradient-to-b from-primary/5 via-accent/5 to-background relative overflow-hidden">
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

        <div className="max-w-3xl mx-auto">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfrecdm7q5R7w0vfZ70gxxBzJX2Px41jIWQzQi0ghufJgCfRA/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            className="rounded-xl border-2 border-primary/30 shadow-glow bg-card"
            title="Contact Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;