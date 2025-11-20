const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Pricing is customized based on your business needs. Contact us for a free quote.
          </p>
          <div className="pt-4">
            <button
              onClick={scrollToContact}
              className="text-primary hover:underline font-medium text-lg"
            >
              Get Your Custom Quote →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
