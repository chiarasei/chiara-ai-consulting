import Navigation from "@/components/Navigation";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const IndustriesPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead title="How We Work | Web Development in Gothenburg" description="From startups to established companies, we build websites and web apps in Gothenburg that fit where your business is going." canonicalPath="/industries" />
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
