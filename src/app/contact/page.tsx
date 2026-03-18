"use client";

import { useState, useRef, useEffect, useCallback, type KeyboardEvent } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

/* ── Boot-up sequence phases ── */
const BOOT_LINES = [
  { text: "BEYOND_OS v4.1 initialising...", delay: 0 },
  { text: "Loading Infinity Engine core...", delay: 400 },
  { text: "Oracle agent online.", delay: 800 },
  { text: "Forge agent online.", delay: 1000 },
  { text: "Prism agent online.", delay: 1150 },
  { text: "Echo agent online.", delay: 1300 },
  { text: "Sentinel agent online.", delay: 1450 },
  { text: "Catalyst agent online.", delay: 1600 },
  { text: "All systems nominal.", delay: 2000 },
  { text: "Establishing secure channel...", delay: 2400 },
  { text: "READY.", delay: 2800 },
];

export default function ContactPage() {
  const [phase, setPhase] = useState<"boot" | "chat">("boot");
  const [bootIndex, setBootIndex] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [contactCaptured, setContactCaptured] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  /* ── Process SSE stream ── */
  const processStream = useCallback(async (res: Response, currentMessages: Message[]) => {
    const reader = res.body?.getReader();
    if (!reader) return;

    const decoder = new TextDecoder();
    let assistantText = "";

    const newMessages = [...currentMessages, { role: "assistant" as const, content: "" }];
    setMessages(newMessages);

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      const lines = chunk.split("\n");

      for (const line of lines) {
        if (!line.startsWith("data: ")) continue;
        const data = line.slice(6);
        if (data === "[DONE]") continue;

        try {
          const parsed = JSON.parse(data);
          if (parsed.text) {
            assistantText += parsed.text;
            const displayText = assistantText.replace(
              /<CONTACT_CAPTURED>[\s\S]*?<\/CONTACT_CAPTURED>/,
              ""
            );
            setMessages([
              ...currentMessages,
              { role: "assistant", content: displayText.trim() },
            ]);
          }
          if (parsed.contact) {
            setContactCaptured(true);
          }
        } catch {
          // Skip malformed chunks
        }
      }
    }
  }, []);

  /* ── Fetch greeting ── */
  const fetchGreeting = useCallback(async () => {
    setStreaming(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: "Hello" }],
        }),
      });

      if (!res.ok) throw new Error("API error");
      await processStream(res, []);
    } catch {
      setMessages([
        {
          role: "assistant",
          content:
            "Welcome to Beyond. Tell me about your challenge and I'll show you what's possible — or if you'd prefer, just say 'send a message' and I'll take your details right now.",
        },
      ]);
    }
    setStreaming(false);
  }, [processStream]);

  /* ── Boot sequence ── */
  useEffect(() => {
    if (phase !== "boot") return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    BOOT_LINES.forEach((line, i) => {
      timers.push(
        setTimeout(() => {
          setBootIndex(i + 1);
        }, line.delay)
      );
    });

    // Transition to chat after boot
    timers.push(
      setTimeout(() => {
        setPhase("chat");
        fetchGreeting();
      }, 3400)
    );

    return () => timers.forEach(clearTimeout);
  }, [phase, fetchGreeting]);

  /* ── Auto-scroll ── */
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, bootIndex]);

  /* ── Focus input when chat starts ── */
  useEffect(() => {
    if (phase === "chat" && inputRef.current) {
      inputRef.current.focus();
    }
  }, [phase, streaming]);

  /* ── Send a quick-action message directly ── */
  const sendQuickMessage = (text: string) => {
    if (streaming) return;
    const userMessage: Message = { role: "user", content: text };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setStreaming(true);
    doSend(updatedMessages);
  };

  /* ── Send message ── */
  const sendMessage = async () => {
    if (!input.trim() || streaming) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setStreaming(true);
    doSend(updatedMessages);
  };

  const doSend = async (updatedMessages: Message[]) => {
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!res.ok) throw new Error("API error");
      await processStream(res, updatedMessages);
    } catch {
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            "Connection interrupted. You can reach us directly at info@atbeyond.com.",
        },
      ]);
    }

    setStreaming(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* ── Animated background grid ── */}
      <div className="absolute inset-0 beyond-grid-bg opacity-[0.04] pointer-events-none" />

      {/* ── Scanning line ── */}
      {phase === "boot" && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="beyond-scan-line" />
        </div>
      )}

      {/* ── Radial glow ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(125,244,255,0.06) 0%, transparent 70%)",
        }}
      />

      {/* ── Main container ── */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 pt-32 pb-8 flex flex-col h-screen">
        {/* ── Header ── */}
        <div className={`text-center mb-8 transition-all duration-1000 ${phase === "chat" ? "opacity-100" : "opacity-0 translate-y-4"}`}>
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-beyond-tertiary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-beyond-tertiary" />
            </span>
            <span className="text-beyond-tertiary text-xs tracking-[0.3em] uppercase font-mono">
              Beyond AI — Live
            </span>
          </div>
          <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-beyond-on-surface">
            Talk to Beyond
          </h1>
        </div>

        {/* ── Boot sequence / Chat area ── */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto beyond-scrollbar"
        >
          {phase === "boot" && (
            <div className="font-mono text-sm space-y-1 max-w-lg mx-auto pt-8 beyond-boot-container">
              {BOOT_LINES.slice(0, bootIndex).map((line, i) => (
                <div
                  key={i}
                  className={`beyond-boot-line ${
                    line.text === "READY."
                      ? "text-beyond-tertiary font-bold text-lg mt-4"
                      : line.text.includes("online")
                      ? "text-beyond-tertiary/70"
                      : "text-beyond-on-surface-variant/60"
                  }`}
                >
                  <span className="text-beyond-tertiary/40 mr-2">{">"}</span>
                  {line.text}
                </div>
              ))}
              {bootIndex < BOOT_LINES.length && (
                <span className="inline-block w-2.5 h-5 bg-beyond-tertiary animate-pulse" />
              )}
            </div>
          )}

          {phase === "chat" && (
            <div className="space-y-6 pb-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} beyond-message-enter`}
                >
                  <div
                    className={`max-w-[85%] ${
                      msg.role === "user"
                        ? "bg-beyond-surface-highest text-beyond-on-surface rounded-2xl rounded-br-sm px-5 py-3.5"
                        : "text-beyond-on-surface"
                    }`}
                  >
                    {msg.role === "assistant" && (
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-beyond-tertiary/20 rounded-full flex items-center justify-center">
                          <span className="text-beyond-tertiary text-[10px] font-bold font-mono">B</span>
                        </div>
                        <span className="text-beyond-tertiary/60 text-[11px] font-mono tracking-wider uppercase">
                          Beyond
                        </span>
                      </div>
                    )}
                    <p className="leading-relaxed text-[15px] whitespace-pre-wrap">
                      {msg.content}
                    </p>
                  </div>
                </div>
              ))}

              {/* Quick action chips after first assistant message */}
              {messages.length === 1 && messages[0].role === "assistant" && !streaming && (
                <div className="flex flex-wrap gap-2 pl-8 beyond-message-enter">
                  <button
                    onClick={() => sendQuickMessage("I'd just like to send the team a quick message")}
                    className="px-4 py-2 text-sm border border-beyond-outline-variant/30 rounded-full text-beyond-on-surface-variant hover:border-beyond-tertiary/50 hover:text-beyond-tertiary transition-colors"
                  >
                    Just send a message
                  </button>
                  <button
                    onClick={() => sendQuickMessage("Tell me more about what Beyond does")}
                    className="px-4 py-2 text-sm border border-beyond-outline-variant/30 rounded-full text-beyond-on-surface-variant hover:border-beyond-tertiary/50 hover:text-beyond-tertiary transition-colors"
                  >
                    Tell me more
                  </button>
                </div>
              )}

              {streaming && messages[messages.length - 1]?.role !== "assistant" && (
                <div className="flex justify-start beyond-message-enter">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-beyond-tertiary/20 rounded-full flex items-center justify-center">
                      <span className="text-beyond-tertiary text-[10px] font-bold font-mono">B</span>
                    </div>
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-beyond-tertiary/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 rounded-full bg-beyond-tertiary/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 rounded-full bg-beyond-tertiary/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}

              {contactCaptured && (
                <div className="beyond-message-enter text-center py-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-beyond-tertiary/10 border border-beyond-tertiary/20 rounded-full">
                    <span className="material-symbols-outlined text-beyond-tertiary text-[18px]">
                      check_circle
                    </span>
                    <span className="text-beyond-tertiary text-sm font-medium">
                      Contact details captured — we&apos;ll be in touch
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ── Input area ── */}
        {phase === "chat" && (
          <div className="mt-4 beyond-input-enter">
            <div className="relative bg-beyond-surface-low border border-beyond-outline-variant/20 rounded-2xl overflow-hidden focus-within:border-beyond-tertiary/40 transition-colors">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                rows={1}
                disabled={streaming}
                className="w-full bg-transparent text-beyond-on-surface placeholder:text-beyond-on-surface-variant/40 px-5 py-4 pr-14 resize-none focus:outline-none text-[15px] disabled:opacity-50"
                style={{ minHeight: "56px", maxHeight: "150px" }}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || streaming}
                className="absolute right-3 bottom-3 w-9 h-9 rounded-xl bg-beyond-tertiary/20 text-beyond-tertiary flex items-center justify-center transition-all hover:bg-beyond-tertiary/30 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined text-[20px]">
                  arrow_upward
                </span>
              </button>
            </div>
            <p className="text-center text-beyond-on-surface-variant/30 text-[11px] mt-3 font-mono">
              Powered by the Infinity Engine
              <span className="mx-2">|</span>
              <a href="mailto:info@atbeyond.com" className="hover:text-beyond-tertiary transition-colors">
                info@atbeyond.com
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
