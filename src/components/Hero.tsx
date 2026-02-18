import { useLanguage } from "@/contexts/LanguageContext";
import DemoVoiceCall from "./DemoVoiceCall";
import VoiceCallErrorBoundary from "./VoiceCallErrorBoundary";

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

          <VoiceCallErrorBoundary>
            <DemoVoiceCall />
          </VoiceCallErrorBoundary>
        </div>
      </div>
    </section>
  );
};

export default Hero;
