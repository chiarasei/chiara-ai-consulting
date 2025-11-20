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
              AI-automation för svenska småföretag. Vi hjälper dig att spara tid och växa.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {["Hem", "Tjänster", "Branscher", "Priser", "Om Oss", "Kontakt"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-") === "hem" ? "hero" : item.toLowerCase().replace(" ", "-").replace("å", "a"))}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Tjänster</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>AI-Chatbots</li>
              <li>Röstassistenter</li>
              <li>Bokningssystem</li>
              <li>Marknadsautomation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Kontakt</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>info@chiaraaiconsulting.se</li>
              <li>+46 70 123 45 67</li>
              <li>Stockholm, Sverige</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 ChiaraAI Consulting. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
