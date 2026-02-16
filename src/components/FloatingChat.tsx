import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { DemoBotChat } from "./DemoBotChat";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsOpen(true);
    document.addEventListener("open-chat", handler);
    return () => document.removeEventListener("open-chat", handler);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="animate-fade-in w-[360px] max-w-[calc(100vw-2rem)] shadow-xl rounded-xl overflow-hidden">
          <DemoBotChat defaultOpen onClose={() => setIsOpen(false)} />
        </div>
      )}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
};

export default FloatingChat;
