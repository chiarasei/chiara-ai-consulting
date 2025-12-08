import Navigation from "@/components/Navigation";
import Industries from "@/components/Industries";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const IndustriesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32" /> {/* Spacing for fixed navigation */}
      <Industries />
      <Contact />
      <Footer />
    </div>
  );
};

export default IndustriesPage;
