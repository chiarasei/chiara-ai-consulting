const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-16 md:py-32 px-4 md:px-6 bg-gradient-to-b from-primary/5 to-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 -z-10" />
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 md:space-y-8 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Custom</span> Pricing
          </h2>
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed font-medium">
            Pricing is customized based on your business needs. Every solution is tailored to deliver maximum value.
          </p>
          <div className="pt-4 md:pt-6">
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2 md:gap-3 text-primary hover:text-accent font-bold text-lg md:text-xl transition-all duration-500 relative"
            >
              <span className="relative">
                Get Your Custom Quote
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-500" />
              </span>
              <span className="group-hover:translate-x-2 transition-transform duration-500 text-xl md:text-2xl">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
