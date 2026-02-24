"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Send,
  Loader2,
  Mail,
  Linkedin,
  Globe,
  MessageSquareText,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export function Contact() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulated network request (Aligns with existing site logic)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSuccess(true);
    (e.target as HTMLFormElement).reset();
    setLoading(false);
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section id="contact" className="glass-section py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Tactical background glow (Matching Hero.tsx) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 relative z-10">

          {/* Left Side: Strategic Outreach Info (Matches Contact.tsx Structure) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-accent">Availability: Open</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold font-outfit text-foreground tracking-tight leading-none mb-6">
                Let&apos;s Architect <span className="text-accent italic">Solutions.</span>
              </h2>
              <p className="text-lg text-foreground/60 font-inter leading-relaxed">
                Available for strategic collaborations, industrial digitization consultancies, and high-stakes technical leadership.
              </p>
            </div>

            <div className="space-y-6 pt-8 border-t border-foreground/5">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono font-bold text-foreground/40">Direct Transmission</p>
                  <p className="text-sm font-bold">your-email@domain.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono font-bold text-foreground/40">Professional Network</p>
                  <p className="text-sm font-bold">linkedin.com/in/username</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Tactical Form (Matches Glassmorphic UI) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-8 md:p-10 border-foreground/10 bg-white/60 dark:bg-background/60">
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center space-y-4"
                >
                  <div className="flex justify-center">
                    <CheckCircle2 size={64} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold font-outfit">Transmission Received</h3>
                  <p className="text-foreground/60 font-inter max-w-xs mx-auto">
                    Your inquiry has been logged. I will respond within 24 business hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-mono font-bold text-foreground/40 ml-1">Identity / Name</label>
                      <input
                        name="name"
                        required
                        className="w-full px-5 py-4 rounded-xl bg-white/60 dark:bg-background/60 border border-foreground/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-foreground/20"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-mono font-bold text-foreground/40 ml-1">Contact / Email</label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full px-5 py-4 rounded-xl bg-white/60 dark:bg-background/60 border border-foreground/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-foreground/20"
                        placeholder="email@organization.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-mono font-bold text-foreground/40 ml-1">Project Brief / Inquiry</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full px-5 py-4 rounded-xl bg-white/60 dark:bg-background/60 border border-foreground/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none placeholder:text-foreground/20"
                      placeholder="Describe the scope of work or technical inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 rounded-xl bg-accent hover:bg-blue-600 text-white font-bold tracking-wide transition-all shadow-lg shadow-accent/10"
                    disabled={loading}
                  >
                    {loading ? (
                      <Loader2 className="animate-spin mr-2" size={20} />
                    ) : (
                      <MessageSquareText className="mr-2" size={20} />
                    )}
                    {loading ? "Processing Transmission..." : "Initialize Connection"}
                  </Button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}