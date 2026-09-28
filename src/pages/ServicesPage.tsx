import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead title="Web & App Development Services in Gothenburg" description="Websites, web apps, online booking and payments built in Gothenburg. Custom design and development for businesses at every stage." canonicalPath="/services" />
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
