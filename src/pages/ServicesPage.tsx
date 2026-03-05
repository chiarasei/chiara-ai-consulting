import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Website & Automation Services for Service Businesses | ChiaraAI"
        description="Website upgrades, chatbot setup, and booking automation for therapists, wellness clinics, and cleaning companies in Sweden."
        keywords="website upgrade Sweden, chatbot for small business, booking automation, service business website"
        canonicalPath="/services"
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
