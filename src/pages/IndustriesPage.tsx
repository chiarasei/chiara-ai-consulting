import Navigation from "@/components/Navigation";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const IndustriesPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Industries We Serve – Therapists, Clinics & More | ChiaraAI"
        description="ChiaraAI provides website upgrades and automation for therapists, wellness clinics, cleaning companies, and local service businesses across Sweden."
        keywords="therapist website Sweden, wellness clinic website, cleaning company website, service business automation"
        canonicalPath="/industries"
      />
      <Navigation />
      <main>
        <div className="pt-40 md:pt-44" />
        <Industries />
      </main>
      <Footer />
    </div>
  );
};

export default IndustriesPage;
