import { useConversation } from "@elevenlabs/react";
import { useState, useCallback } from "react";
import { Phone, PhoneOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const AGENT_ID = "agent_8801khrvbwckex3b9f8fjw6370fd";

const DemoVoiceCall = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const { language } = useLanguage();

  const conversation = useConversation({
    onConnect: () => console.log("Voice agent connected"),
    onDisconnect: () => console.log("Voice agent disconnected"),
    onError: (error) => console.error("Voice agent error:", error),
  });

  const startCall = useCallback(async () => {
    setIsConnecting(true);
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      await conversation.startSession({
        agentId: AGENT_ID,
        connectionType: "webrtc",
      });
    } catch (error) {
      console.error("Failed to start voice call:", error);
    } finally {
      setIsConnecting(false);
    }
  }, [conversation]);

  const endCall = useCallback(async () => {
    await conversation.endSession();
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
