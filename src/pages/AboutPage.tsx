import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { localBusinessJsonLd } from "@/lib/seoData";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="ChiaraAI Consulting – AI Automation for Small Businesses in Sweden"
        description="ChiaraAI Consulting helps small businesses in Sweden grow with custom AI chatbots, voice assistants, booking systems and marketing automation. Book a free consultation."
        keywords="AI consulting Sweden, AI automation for small businesses, AI consultant Sweden, AI chatbot Sweden, business automation Sweden"
        canonicalPath="/"
        jsonLd={localBusinessJsonLd}
      />
      <Navigation />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
