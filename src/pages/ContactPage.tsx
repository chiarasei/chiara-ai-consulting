import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Contact ChiaraAI – Book a Free AI Consultation"
        description="Get in touch with ChiaraAI Consulting for a free AI automation consultation. We help small businesses in Sweden implement AI chatbots, voice assistants and more."
        keywords="contact AI consultant Sweden, free AI consultation, book AI consultation, ChiaraAI contact, AI automation help Sweden"
        canonicalPath="/contact"
      />
      <Navigation />
      <main>
        <div className="pt-32" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
