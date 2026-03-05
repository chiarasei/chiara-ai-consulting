import Navigation from "@/components/Navigation";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const PricingPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Simple Packages for Small Businesses | ChiaraAI Consulting"
        description="Affordable website upgrade and automation packages starting from 5,000 SEK. Website redesign, AI chat assistant, and advanced automation for service businesses."
        keywords="website upgrade price, AI chatbot pricing, small business website Sweden, automation packages"
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
