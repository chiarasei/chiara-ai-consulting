import Navigation from "@/components/Navigation";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const IndustriesPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="How We Work – Any Business, Any Stage | ChiaraAI Consulting"
        description="We build for every business and every stage: launching, growing, building a product, or modernising an established company's website and systems."
        keywords="website for startups, business website Sweden, web app development, custom software, website modernisation"
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
