import Navigation from "@/components/Navigation";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const PricingPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32" /> {/* Spacing for fixed navigation */}
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default PricingPage;
