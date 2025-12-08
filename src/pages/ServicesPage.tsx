import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32" /> {/* Spacing for fixed navigation */}
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default ServicesPage;
