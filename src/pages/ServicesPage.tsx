import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { servicesJsonLd } from "@/lib/seoData";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="AI Automation Services – Chatbots, Voice & Booking | ChiaraAI"
        description="Explore ChiaraAI's AI automation services: custom chatbots, voice assistants, automated booking, marketing automation and more for Swedish small businesses."
        keywords="AI services Sweden, AI chatbot service, voice assistant business, automated booking system, AI marketing automation, AI consultant Sweden"
        canonicalPath="/services"
        jsonLd={servicesJsonLd}
      />
      <Navigation />
      <main>
        <div className="pt-32" />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
