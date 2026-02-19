import { useConversation } from "@elevenlabs/react";
import { useState, useCallback } from "react";
import { Phone, PhoneOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "@/hooks/use-toast";

const AGENT_ID = "agent_8801khrvbwckex3b9f8fjw6370fd";

const DemoVoiceCall = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const { language } = useLanguage();

  const conversation = useConversation({
    onConnect: () => {
      console.log("Voice agent connected");
      setIsConnecting(false);
    },
    onDisconnect: () => {
      console.log("Voice agent disconnected");
      setIsConnecting(false);
    },
    onError: (error) => {
      console.error("Voice agent error:", error);
      setIsConnecting(false);
      toast({
        variant: "destructive",
        title: language === "sv" ? "Anslutningsfel" : "Connection Error",
        description: language === "sv"
          ? "Kunde inte ansluta till röstagenten. Försök igen."
          : "Failed to connect to voice agent. Please try again.",
      });
    },
  });

  const startCall = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isConnecting) return;
    setIsConnecting(true);

    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (error) {
      console.error("Microphone access denied:", error);
      toast({
        variant: "destructive",
        title: language === "sv" ? "Mikrofon krävs" : "Microphone Required",
        description: language === "sv"
          ? "Aktivera mikrofonen för att använda röstsamtal."
          : "Please enable microphone access to use voice calls.",
      });
      setIsConnecting(false);
      return;
    }

    try {
      await conversation.startSession({
        agentId: AGENT_ID,
        connectionType: "webrtc",
        overrides: {
          agent: {
            firstMessage: language === "sv"
              ? "Hej! Jag är Chiara, din AI-assistent. Hur kan jag hjälpa dig idag?"
              : "Hi! I'm Chiara, your AI assistant. How can I help you today?",
            language: language === "sv" ? "sv" : "en",
          },
        },
      });
    } catch (error) {
      console.error("Failed to start voice call:", error);
      toast({
        variant: "destructive",
        title: language === "sv" ? "Fel" : "Error",
        description: language === "sv"
          ? "Kunde inte starta samtalet. Försök igen."
          : "Failed to start the call. Please try again.",
      });
    } finally {
      setIsConnecting(false);
    }
  }, [conversation, isConnecting, language]);

  const endCall = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await conversation.endSession();
    } catch (error) {
      console.error("Failed to end call:", error);
    }
  }, [conversation]);

  const isActive = conversation.status === "connected";

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-sm font-semibold text-muted-foreground tracking-wide uppercase">
        {language === "sv" ? "Demo röstsamtal" : "Demo Voice Call"}
      </p>

      {isActive ? (
        <div className="flex flex-col items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-destructive/20 animate-ping" />
            <Button
              onClick={endCall}
              size="lg"
              className="relative rounded-full w-16 h-16 bg-destructive hover:bg-destructive/90 text-destructive-foreground shadow-lg"
            >
              <PhoneOff size={24} />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            {conversation.isSpeaking
              ? language === "sv" ? "AI:n pratar..." : "AI is speaking..."
              : language === "sv" ? "Lyssnar..." : "Listening..."}
          </p>
        </div>
      ) : (
        <Button
          onClick={startCall}
          disabled={isConnecting}
          size="lg"
          className="rounded-full px-8 py-6 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-medium transition-all duration-300 gap-2"
        >
          {isConnecting ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              {language === "sv" ? "Ansluter..." : "Connecting..."}
            </>
          ) : (
            <>
              <Phone size={20} />
              {language === "sv" ? "Starta samtal" : "Start a call"}
            </>
          )}
        </Button>
      )}
    </div>
  );
};

export default DemoVoiceCall;
