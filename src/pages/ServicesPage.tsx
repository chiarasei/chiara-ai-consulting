import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Website & Automation Services | ChiaraAI Consulting"
        description="Website upgrades, AI chat assistants, inquiry automation, and booking integration for therapists, wellness clinics, and service businesses."
        keywords="website upgrade Sweden, AI chatbot, customer inquiry automation, booking integration, service business website"
        canonicalPath="/services"
      />
      <Navigation />
      <main>
        <div className="pt-20" />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
