import Navigation from "@/components/Navigation";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const PricingPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Website & Automation Packages | ChiaraAI Consulting"
        description="Affordable website upgrade and automation packages for service businesses in Sweden. From a professional website to full digital growth."
        keywords="website packages Sweden, automation pricing, small business website cost, chatbot pricing"
        canonicalPath="/pricing"
      />
      <Navigation />
      <main>
        <div className="pt-32" />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
