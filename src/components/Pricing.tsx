const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
            Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-normal">
            Pricing is customized based on your business needs. Contact us for a free quote.
          </p>
          <div className="pt-4">
            <button
              onClick={scrollToContact}
              className="text-primary hover:text-primary/80 font-medium text-lg transition-colors duration-300 inline-flex items-center gap-2 group"
            >
              Get Your Custom Quote
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
