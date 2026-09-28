import Navigation from "@/components/Navigation";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const PricingPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead title="Website & Web App Pricing in Gothenburg | ChiaraAI" description="Websites from 14,900 kr and web apps from 49,900 kr, built in Gothenburg. Fixed quote before we start and care plans from 500 kr/mån." canonicalPath="/pricing" />
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
