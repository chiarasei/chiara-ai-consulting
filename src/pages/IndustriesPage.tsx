import Navigation from "@/components/Navigation";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const IndustriesPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Businesses We Help – Therapists, Clinics, Coaches & More | ChiaraAI"
        description="Website upgrades and smart automation for therapists, coaches, wellness clinics, cleaning companies, and local service businesses across Sweden."
        keywords="therapist website, wellness clinic website, cleaning company website, consultant website, service business automation Sweden"
        canonicalPath="/industries"
      />
      <Navigation />
      <main>
        <div className="pt-20" />
        <Industries />
      </main>
      <Footer />
    </div>
  );
};

export default IndustriesPage;
