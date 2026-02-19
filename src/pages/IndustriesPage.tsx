import Navigation from "@/components/Navigation";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { faqJsonLd } from "@/lib/seoData";

const IndustriesPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Industries We Serve – AI for Cafés, Salons & Shops | ChiaraAI"
        description="ChiaraAI provides tailored AI automation for cafés, restaurants, salons, retail shops and more across Sweden. See how AI can transform your industry."
        keywords="AI for restaurants Sweden, AI for salons, AI for cafés, AI for retail, AI automation industries, small business AI Sweden"
        canonicalPath="/industries"
        jsonLd={faqJsonLd}
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
