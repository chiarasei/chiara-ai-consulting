import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-6 overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-background to-accent/[0.04] -z-10" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-8 animate-fade-in-up">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {t("hero.badge")}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.08] tracking-tight text-balance">
              {t("hero.title1")}
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {t("hero.title2")}
              </span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("hero.description")}
            </p>
          </div>

          <div className="pt-2">
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); document.dispatchEvent(new CustomEvent('open-chat')); }}
              className="inline-flex items-center gap-2 text-sm md:text-base px-8 py-3 md:py-4 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-medium transition-all duration-300 rounded-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
              {t("hero.chatButton")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
