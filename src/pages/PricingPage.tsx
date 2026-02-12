import Navigation from "@/components/Navigation";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const PricingPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="AI Automation Pricing – Affordable Plans | ChiaraAI Consulting"
        description="Transparent and affordable AI automation pricing for small businesses in Sweden. Choose the right plan for chatbots, voice assistants and booking automation."
        keywords="AI automation pricing, AI consulting cost Sweden, affordable AI solutions, AI chatbot pricing, small business automation cost"
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
