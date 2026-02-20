"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { supabase } from "@/lib/supabase";

export function Contact() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      // Basic Supabase insertion - Replace 'contact_messages' with your actual table
      // const { error } = await supabase.from('contact_messages').insert([data]);
      // if (error) throw error;

      // Simulating network request for now
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again or reach out on LinkedIn.");
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold font-outfit mb-4">Let&apos;s Connect</h2>
        <p className="text-lg text-foreground/80">
          Open for new opportunities, strategic collaborations, and technical discussions.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <GlassCard hoverEffect={false} className="p-8 md:p-12 border-accent/20 relative">
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-6 left-1/2 -translate-x-1/2 bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md"
            >
              Message sent successfully!
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-foreground/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all dark:border-white/10"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-foreground/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all dark:border-white/10"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-background/50 border border-foreground/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none dark:border-white/10"
                placeholder="How can we help each other?"
              />
            </div>

            <div className="pt-2">
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <Loader2 className="animate-spin mr-2" size={18} />
                ) : (
                  <Send className="mr-2" size={18} />
                )}
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </GlassCard>
      </motion.div>
    </section>
  );
}
