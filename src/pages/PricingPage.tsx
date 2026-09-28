import Navigation from "@/components/Navigation";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const PricingPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Pricing: Websites, Web Apps and Custom Products | ChiaraAI Consulting"
        description="Clear prices with a fixed quote before work begins. Websites from 14,900 kr, web apps from 49,900 kr, and custom products."
        keywords="website upgrade price, AI chatbot pricing, small business website Sweden, automation packages"
        canonicalPath="/pricing"
      />
      <Navigation />
      <main>
        <div className="pt-20" />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
