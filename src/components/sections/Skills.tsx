"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  BarChart3,
  Cpu,
  Zap,
  TrendingUp,
  Settings,
  ShieldCheck,
  Activity
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

export function Skills() {
  return (
    <section id="skills" className="glass-section py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <Cpu className="text-accent" size={18} />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-accent">Technical Arsenal</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-outfit text-foreground tracking-tight">
            Architectural <span className="text-accent italic">Intelligence.</span>
          </h2>
        </motion.div>

        {/* High-Density Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr md:auto-rows-[160px]">

          {/* 1. Supply Chain Digitization (Large) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 md:row-span-2"
          >
            <GlassCard className="h-full p-6 border-foreground/10 bg-white/40 dark:bg-background/40 flex flex-col justify-between group hover:border-accent/30 transition-all duration-300">
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <TrendingUp size={24} />
                </div>
                <span className="text-[9px] font-mono font-bold text-accent px-2 py-1 rounded-full bg-accent/5 border border-accent/10 uppercase">Advanced Tier</span>
              </div>
              <div className="mt-4">
                <span className="text-[9px] font-mono font-bold text-foreground/30 uppercase tracking-widest block mb-1">SCM 4.0</span>
                <h3 className="text-2xl font-bold font-outfit mb-2">Supply Chain Digitization</h3>
                <p className="text-xs text-foreground/60 leading-relaxed font-inter italic">
                  Bridging raw data and operational intelligence through bespoke predictive analytics and automation dashboards.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* 2. Next.js & React */}
          <GlassCard className="p-5 border-foreground/10 bg-white/40 dark:bg-background/40 flex items-center gap-4 group md:col-span-2">
            <div className="text-4xl group-hover:rotate-12 transition-transform">⚛️</div>
            <div>
              <h3 className="text-lg font-bold font-outfit">Next.js & React</h3>
              <p className="text-[11px] text-foreground/50 font-inter leading-tight">SSR, Framer Motion, and high-performance frontend architecture.</p>
            </div>
          </GlassCard>

          {/* 3. SAP ERP */}
          <GlassCard className="p-4 border-foreground/10 bg-white/40 dark:bg-background/40 flex flex-col justify-center items-center text-center group">
            <span className="text-xl font-black font-outfit text-blue-500">SAP</span>
            <span className="text-[9px] font-mono font-bold text-foreground/30 uppercase mt-1">Enterprise ERP</span>
          </GlassCard>

          {/* 4. LEED / ESG */}
          <GlassCard className="p-4 border-foreground/10 bg-white/40 dark:bg-background/40 flex flex-col justify-center items-center text-center group">
            <span className="text-xl font-black font-outfit text-green-500">LEED</span>
            <span className="text-[9px] font-mono font-bold text-foreground/30 uppercase mt-1">Sustainability</span>
          </GlassCard>

          {/* 5. AI & Automation */}
          <GlassCard className="p-5 border-foreground/10 bg-white/40 dark:bg-background/40 flex items-center justify-between group md:col-span-2">
            <div className="space-y-0.5">
              <h3 className="text-lg font-bold font-outfit">AI & Automation</h3>
              <p className="text-[11px] text-foreground/50 font-inter">Autonomous logic & Data Scraping.</p>
            </div>
            <Zap size={20} className="text-purple-500 opacity-40 group-hover:opacity-100 transition-opacity" />
          </GlassCard>

          {/* 6. Strategic Sourcing */}
          <GlassCard className="p-5 border-foreground/10 bg-white/40 dark:bg-background/40 flex items-center justify-between group md:col-span-2">
            <div className="space-y-0.5">
              <h3 className="text-lg font-bold font-outfit">Strategic Sourcing</h3>
              <p className="text-[11px] text-foreground/50 font-inter">Contract negotiations & cost leadership.</p>
            </div>
            <ShieldCheck size={20} className="text-accent opacity-40" />
          </GlassCard>

          {/* 7. Strategy & Leadership */}
          <GlassCard className="p-5 border-foreground/10 bg-white/40 dark:bg-background/40 flex items-center gap-4 md:col-span-2 group">
            <BarChart3 size={20} className="text-accent" />
            <div>
              <h3 className="text-lg font-bold font-outfit">Strategy & Leadership</h3>
              <p className="text-[11px] text-foreground/50 font-inter leading-tight">Agile Management & Scalable Systems.</p>
            </div>
          </GlassCard>

          {/* 8. Global Perspective */}
          <GlassCard className="p-5 border-foreground/10 bg-white/40 dark:bg-background/40 flex items-center gap-4 md:col-span-2 group">
            <Globe size={20} className="text-blue-500" />
            <div>
              <h3 className="text-lg font-bold font-outfit">Global Perspective</h3>
              <p className="text-[11px] text-foreground/50 font-inter leading-tight">Inclusive Design & Social Impact Tech.</p>
            </div>
          </GlassCard>
        </div>

        {/* Matrix Table - Normalized Padding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-3xl border border-foreground/10 bg-white/40 dark:bg-background/40 backdrop-blur-xl"
        >
          <div className="px-6 py-4 border-b border-foreground/10 flex items-center justify-between bg-foreground/[0.02]">
            <h3 className="text-xs font-bold font-mono uppercase tracking-[0.2em] flex items-center gap-2">
              <Activity size={14} className="text-accent" />
              Strategic Tech Matrix
            </h3>
            <span className="text-[9px] font-mono text-foreground/30 font-bold uppercase">Efficiency Audit v1.0</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-foreground/5 text-[9px] uppercase font-mono font-bold text-foreground/40">
                  <th className="py-4 px-6">Strategy Objective</th>
                  <th className="py-4 px-6">Technology Vector</th>
                  <th className="py-4 px-6">Operational Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-foreground/5 font-inter">
                {[
                  { obj: "Immersive Sales", tech: "Three.js / React Fiber", res: "Retention Increase" },
                  { obj: "Rapid Scaling", tech: "Next.js / Vercel", res: "Market Speed" },
                  { obj: "Data Integrity", tech: "Node.js / MongoDB", res: "Business Intel" },
                  { obj: "Global Access", tech: "PWA / Localization", res: "Social Good" }
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-accent/[0.02] transition-colors text-xs">
                    <td className="py-4 px-6 font-bold text-foreground group-hover:text-accent">{row.obj}</td>
                    <td className="py-4 px-6 text-foreground/60 font-mono italic text-[10px]">{row.tech}</td>
                    <td className="py-4 px-6">
                      <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[9px] font-bold uppercase tracking-wider border border-accent/20">
                        {row.res}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}