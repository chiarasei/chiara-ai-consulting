const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-secondary/50 to-primary/10 py-12 md:py-20 px-4 md:px-6 border-t-2 border-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-primary/5 -z-10" />
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-bold text-lg md:text-xl mb-4 md:mb-5 bg-gradient-primary bg-clip-text text-transparent">ChiaraAI Consulting</h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-medium">
              Professional AI automation for small businesses. We help you save time and grow with effective solutions.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3 md:mb-5 text-foreground text-sm md:text-base">Navigation</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              {["Home", "Services", "Industries", "Pricing", "About", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase() === "home" ? "hero" : item.toLowerCase())}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 md:mb-5 text-foreground text-sm md:text-base">Services</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-muted-foreground font-medium">
              <li>AI Chatbots</li>
              <li>Voice Assistants</li>
              <li>Booking Systems</li>
              <li>Marketing Automation</li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold mb-3 md:mb-5 text-foreground text-sm md:text-base">Contact</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-muted-foreground font-medium">
              <li>info@chiaraaiconsulting.se</li>
              <li>+46 73 531 69 50</li>
              <li>Gothenburg, Sweden</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 md:pt-10 border-t border-primary/20 text-center text-xs md:text-sm text-muted-foreground font-medium">
          <p>© 2025 ChiaraAI Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
