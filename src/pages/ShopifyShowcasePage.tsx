import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, ShoppingBag, Palette, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const ShopifyShowcasePage = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#FAFAF8", color: "#1a1a2e", fontFamily: "'DM Sans', 'Outfit', sans-serif" }}>
      <SEOHead
        title="Zoe & Co – Custom Shopify Store | ChiaraAI Consulting"
        description="A modern Shopify e-commerce store built for Zoe & Co, featuring custom design, optimized checkout, and seamless brand experience."
        keywords="shopify store, e-commerce, custom shopify design, zoe and co"
        canonicalPath="/demo/shopify"
      />

      {/* Demo banner */}
      <div
        className="text-center text-xs py-2.5 font-medium tracking-wide flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 px-4"
        style={{ background: "#1a1a2e", color: "rgba(255,255,255,0.85)" }}
      >
        <span>🛍️ Custom Shopify e-commerce store built for Zoe & Co.</span>
        <Link to="/" className="inline-flex items-center gap-1 underline font-semibold hover:opacity-80 text-white">
          <ArrowLeft className="w-3 h-3" />
          Built by ChiaraAI Consulting
        </Link>
      </div>

      {/* Main content */}
      <main className="flex-1">
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style={{ background: "hsl(165, 40%, 92%)", color: "hsl(165, 50%, 35%)" }}>
              <ShoppingBag className="w-4 h-4" />
              E-Commerce Project
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Zoe & Co
            </h1>

            <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto" style={{ color: "hsl(200, 10%, 45%)" }}>
              A beautifully designed Shopify store with a custom theme, optimized product pages, and a seamless shopping experience that reflects the Zoe & Co brand identity.
            </p>

            <a href="https://zoeandco.se" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-base px-8 py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 gap-2 mt-2">
                View Live Website
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 md:py-16 px-4 md:px-6" style={{ background: "hsl(160, 10%, 95%)" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-10">
              What We Built
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: <Palette className="w-5 h-5" />, title: "Custom Design", desc: "Tailored theme matching the brand's aesthetic and identity." },
                { icon: <ShoppingBag className="w-5 h-5" />, title: "Product Catalog", desc: "Organized product pages with clean layouts and easy navigation." },
                { icon: <Globe className="w-5 h-5" />, title: "SEO Optimized", desc: "Built with search engine visibility and performance in mind." },
                { icon: <Zap className="w-5 h-5" />, title: "Fast Checkout", desc: "Streamlined checkout flow for higher conversion rates." },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-xl border bg-white" style={{ borderColor: "hsl(160, 15%, 88%)" }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: "hsl(165, 40%, 92%)", color: "hsl(165, 50%, 35%)" }}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "hsl(200, 10%, 45%)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 px-5 border-t" style={{ borderColor: "hsl(160, 15%, 88%)", background: "#fff" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-semibold">
            <ShoppingBag className="w-4 h-4" style={{ color: "hsl(165, 45%, 42%)" }} />
            Zoe & Co
          </div>
          <p className="text-xs" style={{ color: "hsl(200, 10%, 45%)" }}>
            Demo by <Link to="/" className="underline hover:opacity-70">ChiaraAI Consulting</Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ShopifyShowcasePage;
