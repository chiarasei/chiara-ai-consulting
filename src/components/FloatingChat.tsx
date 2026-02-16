import { useState, useEffect } from "react";
import { Headset } from "lucide-react";
import { DemoBotChat } from "./DemoBotChat";
import { useLanguage } from "@/contexts/LanguageContext";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handler = () => setIsOpen(true);
    document.addEventListener("open-chat", handler);
    return () => document.removeEventListener("open-chat", handler);
  }, []);

  const subtitle = language === "sv" ? "Vi pratar svenska & engelska" : "We speak English & Swedish";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="animate-fade-in w-[360px] max-w-[calc(100vw-2rem)] shadow-xl rounded-xl overflow-hidden">
          <DemoBotChat defaultOpen onClose={() => setIsOpen(false)} />
        </div>
      )}
      {!isOpen && (
        <div className="flex flex-col items-center gap-1.5">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            aria-label="Open chat"
          >
            <Headset size={24} />
          </button>
          <span className="text-[10px] text-muted-foreground font-medium bg-card/80 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm border border-border">
            {subtitle}
          </span>
        </div>
      )}
    </div>
  );
};

export default FloatingChat;
