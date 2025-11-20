const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-secondary/50 to-primary/10 py-20 px-6 border-t-2 border-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-primary/5 -z-10" />
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-xl mb-5 bg-gradient-primary bg-clip-text text-transparent">ChiaraAI Consulting</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              Professional AI automation for small businesses. We help you save time and grow with effective solutions.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-5 text-foreground">Navigation</h4>
            <ul className="space-y-3 text-sm">
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
            <h4 className="font-bold mb-5 text-foreground">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-medium">
              <li>AI Chatbots</li>
              <li>Voice Assistants</li>
              <li>Booking Systems</li>
              <li>Marketing Automation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-5 text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-medium">
              <li>info@chiaraaiconsulting.se</li>
              <li>+46 73 531 69 50</li>
              <li>Gothenburg, Sweden</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-primary/20 text-center text-sm text-muted-foreground font-medium">
          <p>© 2025 ChiaraAI Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
