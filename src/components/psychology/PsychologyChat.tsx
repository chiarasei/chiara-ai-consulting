import { useState, useRef, useEffect } from "react";
import { Bot, Globe, Send, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { green, borderClr, textMuted } from "./PsychologyLayout";

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/psychology-chat`;

type ChatMessage = { role: "user" | "assistant"; content: string };

const PsychologyChat = () => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: "Hello! 👋 I'm here to answer your questions about our therapy services. How can I help you today?" },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const [chatLang, setChatLang] = useState<"en" | "sv">("en");
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const handleChatLangSwitch = () => {
    const newLang = chatLang === "en" ? "sv" : "en";
    setChatLang(newLang);
    setChatMessages([{
      role: "assistant",
      content: newLang === "sv"
        ? "Hej! 👋 Jag är här för att svara på dina frågor om våra terapitjänster. Hur kan jag hjälpa dig idag?"
        : "Hello! 👋 I'm here to answer your questions about our therapy services. How can I help you today?",
    }]);
  };

  const streamChat = async (allMessages: ChatMessage[]) => {
    const resp = await fetch(CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ messages: allMessages.slice(1) }),
    });
    if (!resp.ok || !resp.body) throw new Error("Failed");

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let assistantContent = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      let idx: number;
      while ((idx = buffer.indexOf("\n")) !== -1) {
        let line = buffer.slice(0, idx);
        buffer = buffer.slice(idx + 1);
        if (line.endsWith("\r")) line = line.slice(0, -1);
        if (!line.startsWith("data: ")) continue;
        const json = line.slice(6).trim();
        if (json === "[DONE]") break;
        try {
          const parsed = JSON.parse(json);
          const content = parsed.choices?.[0]?.delta?.content;
          if (content) {
            assistantContent += content;
            setChatMessages((prev) => {
              const last = prev[prev.length - 1];
              if (last?.role === "assistant" && prev.length > 1) {
                return prev.map((m, i) => i === prev.length - 1 ? { ...m, content: assistantContent } : m);
              }
              return [...prev, { role: "assistant", content: assistantContent }];
            });
          }
        } catch {
          buffer = line + "\n" + buffer;
          break;
        }
      }
    }
  };

  const handleChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || chatLoading) return;
    const userMsg: ChatMessage = { role: "user", content: chatInput.trim() };
    const newMessages = [...chatMessages, userMsg];
    setChatMessages(newMessages);
    setChatInput("");
    setChatLoading(true);
    try {
      await streamChat(newMessages);
    } catch {
      setChatMessages((prev) => [...prev, { role: "assistant", content: "Sorry, something went wrong. Please try again." }]);
    } finally {
      setChatLoading(false);
    }
  };

  const suggestions = chatLang === "en"
    ? ["How do I book?", "What can therapy help with?", "Do you offer online therapy?", "Session prices?"]
    : ["Hur bokar jag?", "Vad kan terapi hjälpa med?", "Erbjuder ni onlineterapi?", "Sessionspriser?"];

  return (
    <div className="max-w-lg mx-auto rounded-2xl shadow-xl border overflow-hidden" style={{ background: "#fff", borderColor: borderClr }}>
      <div className="px-4 py-3 flex items-center justify-between" style={{ background: green }}>
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-white" />
          <span className="text-sm font-semibold text-white">Chat Assistant</span>
        </div>
        <div className="flex items-center gap-1">
          <button onClick={handleChatLangSwitch} className="text-white/80 hover:text-white text-xs font-semibold px-2 py-1 rounded hover:bg-white/10 transition-colors">
            {chatLang === "en" ? "EN" : "SV"}
          </button>
          <Globe className="w-3.5 h-3.5 text-white/60" />
        </div>
      </div>

      <div className="px-4 pt-3 flex flex-wrap gap-2">
        {suggestions.map((q) => (
          <button key={q} onClick={() => setChatInput(q)} className="text-xs px-3 py-1.5 rounded-full border transition-colors hover:bg-gray-50" style={{ borderColor: borderClr, color: textMuted }}>
            {q}
          </button>
        ))}
      </div>

      <div ref={chatContainerRef} className="h-72 overflow-y-auto p-4 space-y-3" style={{ background: "hsl(165, 40%, 97%)" }}>
        {chatMessages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className="max-w-[80%] px-3 py-2 rounded-xl text-sm" style={{
              background: msg.role === "user" ? green : "#fff",
              color: msg.role === "user" ? "#fff" : "#1a1a2e",
              border: msg.role === "assistant" ? `1px solid ${borderClr}` : undefined,
            }}>
              {msg.role === "assistant" ? (
                <div className="prose prose-sm max-w-none [&>p]:my-1"><ReactMarkdown>{msg.content}</ReactMarkdown></div>
              ) : msg.content}
            </div>
          </div>
        ))}
        {chatLoading && chatMessages[chatMessages.length - 1]?.role === "user" && (
          <div className="flex justify-start">
            <div className="px-3 py-2 rounded-xl" style={{ background: "#fff", border: `1px solid ${borderClr}` }}>
              <Loader2 className="w-4 h-4 animate-spin" style={{ color: textMuted }} />
            </div>
          </div>
        )}
        
      </div>

      <form onSubmit={handleChat} className="flex border-t" style={{ borderColor: borderClr }}>
        <input value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder={chatLang === "en" ? "Ask a question..." : "Ställ en fråga..."} disabled={chatLoading} className="flex-1 px-4 py-3 text-sm outline-none" style={{ background: "#fff" }} />
        <button type="submit" disabled={!chatInput.trim() || chatLoading} className="px-4 disabled:opacity-40" style={{ color: green }}>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};

export default PsychologyChat;
