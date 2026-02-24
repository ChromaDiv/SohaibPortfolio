"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

const SYSTEM_PROMPT = `You are Sohaib Latif's AI assistant, embedded in his portfolio website. Your goal is to help visitors understand Sohaib's unique blend of Engineering, Supply Chain, and Full-Stack Software Development expertise. 

Use the following information about Sohaib to answer questions accurately:
- **Role:** Full-Stack Web Developer & Supply Chain Analyst. He bridges the gap between Industrial Intelligence and scalable software.
- **Experience:**
  - Supply Chain Analyst at Government of Pakistan (May 2020 - Jan 2026): Cost leadership (15% reduction), digital transformation via Next.js dashboards.
  - Operations Manager at Gov of Pakistan (May 2017 - May 2020): Production, QA/QC (ISO Standards), Asset Strategy.
  - Assistant Manager (Planning) at Packages Limited (Jan 2014 - Jul 2014): SAP ERP, service levels.
- **Education:**
  - MPhil in International Development (Sustainable Policy) - Iqra University, 2025
  - MBA (Strategic Management) - Iqra University, 2021
  - BE in Mechanical Engineering - NUST, 2013
- **Key Skills:** Next.js & React, SAP ERP, LEED / ESG, AI & Automation, Strategic Sourcing.
- **Featured Projects:**
  - Chroma Div: AI-Driven Digital Agency Engine (Next.js, AI Logic).
  - QuranGo: Modern Educational Platform (React, Global Reach).
  - RMSys: Supply Chain & Restaurant ERP (AI, Analytics).
  - GreenBuild Ledger: Industrial Compliance & ERP (Sustainability, LEED Gold).

Tone: Professional, knowledgeable, concise, and helpful. Always emphasize how his engineering and supply chain background makes his software architecture robust and ROI-driven. Do NOT invent information. Steer unrelated questions back to his professional background.`;

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const AnimatedBot = ({ isProcessing = false }: { isProcessing?: boolean }) => {
  return (
    <motion.div
      animate={{ y: [0, -3, 0] }}
      transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      className={`relative w-8 h-8 min-w-[32px] rounded-full flex items-center justify-center bg-accent/20 border border-accent/20 ${isProcessing ? "shadow-[0_0_15px_rgba(59,130,246,0.5)]" : ""
        }`}
    >
      <div className="w-4 h-3 bg-accent/40 rounded-sm relative flex items-center justify-center gap-1 overflow-hidden">
        <motion.div
          animate={{ scaleY: [1, 0.1, 1], opacity: [1, 0.8, 1] }}
          transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.2 }}
          className={`w-1 h-1 rounded-full flex-shrink-0 ${isProcessing ? "bg-white shadow-[0_0_5px_white]" : "bg-accent"}`}
        />
        <motion.div
          animate={{ scaleY: [1, 0.1, 1], opacity: [1, 0.8, 1] }}
          transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.2 }}
          className={`w-1 h-1 rounded-full flex-shrink-0 ${isProcessing ? "bg-white shadow-[0_0_5px_white]" : "bg-accent"}`}
        />
      </div>
      <div className="absolute -top-1.5 w-0.5 h-1.5 bg-accent/50 rounded-full" />
    </motion.div>
  );
};

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hello! I am Sohaib's AI Assistant. I can answer questions about his software projects, supply chain experience, or technical skills. What would you like to know?"
    }
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom of the chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputVal.trim()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputVal("");
    setIsLoading(true);

    try {
      if (!API_KEY) {
        throw new Error("Missing API Key. Please ensure NEXT_PUBLIC_GEMINI_API_KEY is set in your environment variables.");
      }

      // Structure history for Gemini
      const contents = messages.slice(1).map(msg => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }]
      }));

      // Add the new user message
      contents.push({
        role: "user",
        parts: [{ text: userMessage.content }]
      });

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: SYSTEM_PROMPT }]
          },
          contents: contents
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`${response.status}: ${errorText}`);
      }

      const data = await response.json();
      const aiResponseText = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (aiResponseText) {
        setMessages((prev) => [
          ...prev,
          { id: Date.now().toString(), role: "assistant", content: aiResponseText }
        ]);
      }
    } catch (error: any) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content: `Error: ${error.message}`
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { setIsOpen(true); setHasOpened(true); }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-2 py-2 pr-5 rounded-full bg-background/90 backdrop-blur-xl border border-white/10 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-accent/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-500 group overflow-hidden"
          >
            {/* Subtle inner hover glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center p-0.5">
              <AnimatedBot />
              {!hasOpened && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent shadow-[0_0_5px_rgba(59,130,246,1)]"></span>
                </span>
              )}
            </div>

            <div className="relative z-10 flex flex-col items-start justify-center pt-0.5 mr-2">
              <span className="font-outfit font-bold text-sm tracking-wide bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-accent transition-all duration-500">
                Sohaib's AI
              </span>
              <span className="text-[9px] font-mono text-foreground/50 uppercase tracking-widest -mt-0.5 group-hover:text-foreground/80 transition-colors duration-300">
                Ask me anything
              </span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            style={{ transformOrigin: "bottom right" }}
            className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] md:w-[380px] h-[550px] max-h-[85vh] flex flex-col shadow-2xl rounded-2xl group border border-foreground/10 dark:border-white/10 hover:border-accent/50 transition-colors duration-500"
          >
            {/* Ambient Background Gradient Pulse */}
            <motion.div
              animate={isLoading ? { opacity: [0.3, 0.7, 0.3], scale: [1, 1.02, 1] } : { opacity: [0.1, 0.3, 0.1] }}
              transition={{ repeat: Infinity, duration: isLoading ? 1.5 : 3, ease: "easeInOut" }}
              className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-2xl blur-xl pointer-events-none -z-10"
            />

            {/* Inner Content Wrapper */}
            <div className="relative z-10 w-full h-full flex flex-col overflow-hidden bg-background/95 backdrop-blur-2xl rounded-2xl">
              {/* Header */}
              <div className="flex-none items-center justify-between p-4 border-b border-foreground/10 bg-accent/5 flex">
                <div className="flex items-center gap-3">
                  <AnimatedBot isProcessing={isLoading} />
                  <div>
                    <h3 className="font-bold font-outfit text-sm text-foreground">AI Assistant</h3>
                    <div className="flex items-center gap-1">
                      <p className="text-[10px] text-accent font-mono uppercase tracking-wider">
                        {isLoading ? "Processing" : "Online"}
                      </p>
                      {isLoading && (
                        <div className="flex gap-0.5 mt-0.5">
                          <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0 }} className="w-1 h-1 bg-accent rounded-full" />
                          <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }} className="w-1 h-1 bg-accent rounded-full" />
                          <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 1 }} className="w-1 h-1 bg-accent rounded-full" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-foreground/5 text-foreground/50 hover:text-foreground transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Messages Container */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    layout
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-foreground/10 text-foreground/70' : 'bg-transparent text-accent'}`}>
                      {msg.role === 'user' ? <User size={16} /> : <AnimatedBot />}
                    </div>

                    <div className={`px-4 py-3 rounded-2xl max-w-[80%] text-sm leading-relaxed ${msg.role === 'user'
                      ? 'bg-foreground/10 text-foreground rounded-tr-sm'
                      : 'bg-accent/10 border border-accent/10 text-foreground/90 rounded-tl-sm'
                      }`}>
                      <ReactMarkdown
                        components={{
                          strong: ({ node, ...props }: any) => <strong className="font-bold text-foreground" {...props} />
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    </div>
                  </motion.div>
                ))}

                {isLoading && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    className="flex gap-3"
                  >
                    <div className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-accent">
                      <AnimatedBot isProcessing={true} />
                    </div>
                    <div className="px-5 py-4 rounded-2xl bg-accent/5 border border-accent/10 rounded-tl-sm flex gap-1 items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/50 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Footer */}
              <div className="mt-auto p-4 border-t border-foreground/10 bg-background flex-none rounded-b-2xl">
                <form onSubmit={handleSend} className="relative flex items-center">
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="Ask about Sohaib's experience..."
                    disabled={isLoading}
                    className="w-full bg-foreground/5 border border-foreground/10 rounded-full pl-5 pr-12 py-3 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all disabled:opacity-50"
                  />
                  <motion.button
                    whileTap={{ scale: 0.8 }}
                    type="submit"
                    disabled={!inputVal.trim() || isLoading}
                    className="absolute right-2 p-2 rounded-full bg-accent text-white hover:bg-blue-500 disabled:opacity-50 disabled:hover:bg-accent transition-colors"
                  >
                    {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
