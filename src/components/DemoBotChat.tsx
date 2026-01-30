import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Globe, Loader2, Bot, X } from "lucide-react";
import ReactMarkdown from "react-markdown";

type Message = { role: "user" | "assistant"; content: string };
type Language = "en" | "sv";

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;

const translations = {
  en: {
    title: "Chat with us",
    placeholder: "Write a message...",
    welcome: "Hi! I'm your ChiaraAI Assistant 👋\n\nWe help small businesses like **hotels, restaurants, cafés, and salons** work smarter with:\n\n• **AI Chatbots** – Answer customer questions 24/7\n• **Voice Assistants** – Never miss a call again\n• **Automated Bookings** – Let customers book anytime\n• **Smart Marketing** – Grow without extra effort\n\nHow can I help your business today?",
    currentLang: "EN",
    openButton: "Chat with our bot",
    subtitle: "We speak English and Swedish",
  },
  sv: {
    title: "Chatta med oss",
    placeholder: "Skriv ett meddelande...",
    welcome: "Hej! Jag är din ChiaraAI-assistent 👋\n\nVi hjälper småföretag som **hotell, restauranger, kaféer och salonger** att jobba smartare med:\n\n• **AI-chatbottar** – Svara på kundfrågor dygnet runt\n• **Röstassistenter** – Missa aldrig ett samtal igen\n• **Automatiska bokningar** – Låt kunder boka när som helst\n• **Smart marknadsföring** – Väx utan extra arbete\n\nHur kan jag hjälpa ditt företag idag?",
    currentLang: "SV",
    openButton: "Chatta med vår bot",
    subtitle: "Vi pratar svenska och engelska",
  },
};

export const DemoBotChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("en");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const t = translations[language];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: "assistant", content: t.welcome }]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleLanguageSwitch = () => {
    const newLang = language === "en" ? "sv" : "en";
    setLanguage(newLang);
    setMessages([{ role: "assistant", content: translations[newLang].welcome }]);
  };

  const streamChat = async (userMessages: Message[]) => {
    const resp = await fetch(CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ messages: userMessages, language }),
    });

    if (!resp.ok) {
      const error = await resp.json();
      throw new Error(error.error || "Failed to get response");
    }

    if (!resp.body) throw new Error("No response body");

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let textBuffer = "";
    let assistantContent = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      textBuffer += decoder.decode(value, { stream: true });

      let newlineIndex: number;
      while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
        let line = textBuffer.slice(0, newlineIndex);
        textBuffer = textBuffer.slice(newlineIndex + 1);

        if (line.endsWith("\r")) line = line.slice(0, -1);
        if (line.startsWith(":") || line.trim() === "") continue;
        if (!line.startsWith("data: ")) continue;

        const jsonStr = line.slice(6).trim();
        if (jsonStr === "[DONE]") break;

        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content;
          if (content) {
            assistantContent += content;
            setMessages((prev) => {
              const last = prev[prev.length - 1];
              if (last?.role === "assistant" && prev.length > 1) {
                return prev.map((m, i) =>
                  i === prev.length - 1 ? { ...m, content: assistantContent } : m
                );
              }
              return [...prev, { role: "assistant", content: assistantContent }];
            });
          }
        } catch {
          textBuffer = line + "\n" + textBuffer;
          break;
        }
      }
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      await streamChat(newMessages.filter((m) => m.content !== translations.en.welcome && m.content !== translations.sv.welcome));
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            language === "sv"
              ? "Tyvärr, något gick fel. Försök igen."
              : "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <div className="w-full max-w-md mx-auto text-center px-4">
        <Button
          size="lg"
          onClick={() => setIsOpen(true)}
          className="text-sm md:text-base px-6 md:px-10 py-5 md:py-6 font-semibold bg-gradient-primary hover:opacity-90 transition-all duration-500 shadow-glow w-full sm:w-auto"
        >
          <Bot className="w-4 h-4 md:w-5 md:h-5 mr-2" />
          {t.openButton}
        </Button>
        <p className="text-xs md:text-sm text-muted-foreground mt-2">{t.subtitle}</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto px-2 sm:px-4 animate-fade-in">
      <div className="bg-background/95 backdrop-blur-sm border border-border rounded-xl md:rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-primary text-white p-3 md:p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot size={18} className="md:w-5 md:h-5" />
            <h3 className="font-semibold text-sm md:text-base">{t.title}</h3>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLanguageSwitch}
              className="text-white hover:bg-white/20 text-base md:text-lg h-8 w-8 p-0"
            >
              {t.currentLang}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 h-8 w-8"
            >
              <X size={16} className="md:w-[18px] md:h-[18px]" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="h-[220px] sm:h-[260px] md:h-[300px] p-3 md:p-4" ref={scrollRef}>
          <div className="space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[88%] rounded-xl md:rounded-2xl px-3 md:px-4 py-2 text-xs md:text-sm ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-muted text-foreground rounded-bl-sm"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <div className="prose prose-xs md:prose-sm dark:prose-invert max-w-none [&>p]:my-1 [&>ul]:my-1 [&>ol]:my-1">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}
            {isLoading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-xl md:rounded-2xl rounded-bl-sm px-3 md:px-4 py-2">
                  <Loader2 className="w-3 h-3 md:w-4 md:h-4 animate-spin text-muted-foreground" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="p-3 md:p-4 border-t border-border">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t.placeholder}
              disabled={isLoading}
              className="flex-1 text-sm md:text-base h-10 md:h-11"
            />
            <Button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              size="icon"
              className="bg-gradient-primary hover:opacity-90 h-10 w-10 md:h-11 md:w-11 shrink-0"
            >
              <Send size={16} className="md:w-[18px] md:h-[18px]" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
