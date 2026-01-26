import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { AIChatWidget } from "@/components/AIChatWidget";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Footer />
      <AIChatWidget />
    </div>
  );
};

export default AboutPage;
