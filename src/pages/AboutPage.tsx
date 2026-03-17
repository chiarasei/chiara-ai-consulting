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
        title="ChiaraAI Consulting – AI-automation för företag"
        description="ChiaraAI Consulting erbjuder AI-chattassistenter och röstassistenter för bokningar och kundkommunikation. Skräddarsydda AI-lösningar för företag."
        keywords="AI-automation, AI-chattbot, röstassistent, automatiserad bokning, AI-konsult, chiaraaiconsulting.se"
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
