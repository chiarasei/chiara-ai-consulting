const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">ChiaraAI Consulting</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI automation for small businesses. We help you save time and grow.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Services", "Industries", "Pricing", "About", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase() === "home" ? "hero" : item.toLowerCase())}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>AI Chatbots</li>
              <li>Voice Assistants</li>
              <li>Booking Systems</li>
              <li>Marketing Automation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>info@chiaraaiconsulting.se</li>
              <li>+46 73 531 69 50</li>
              <li>Gothenburg, Sweden</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 ChiaraAI Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
