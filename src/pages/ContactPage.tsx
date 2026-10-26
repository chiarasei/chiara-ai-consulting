import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead title="Contact Us | Web & App Development in Gothenburg" description="Book a free call with ChiaraAI Consulting in Gothenburg to discuss your website, web app or digital product and get a fixed quote." canonicalPath="/contact" titleSv="Kontakta oss | Webbyrå i Göteborg | ChiaraAI" descriptionSv="Berätta om ditt projekt eller boka ett gratis samtal. Vi hjälper dig med hemsida, webbapp eller digital tjänst och ger dig ett fast pris." />
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
