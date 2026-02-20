"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Globe, BarChart } from "lucide-react";

const skills = [
  "Artificial Intelligence (AI)",
  "Supply Chain Digitization",
  "AI Integration",
  "React.js",
  "Next.js",
  "SAP",
  "Strategic Sourcing",
  "Sustainability & ESG",
  "LEED",
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent dark:via-accent/10 pointer-events-none -z-10" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">Technical Arsenal</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">The tools and technologies I use to architect intelligent systems and optimize high-stakes operations.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto md:auto-rows-[180px]">

          {/* Featured Skill: Supply Chain Digitization (Large Box) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-accent/20 to-purple-500/10 backdrop-blur-md border border-foreground/10 dark:border-white/10 rounded-3xl p-8 flex flex-col justify-between group hover:border-accent/50 transition-all shadow-lg"
          >
            <div className="flex justify-between items-start">
              <div className="p-3 bg-background/50 dark:bg-white/5 rounded-2xl text-accent">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              </div>
              <span className="text-xs font-mono text-accent/70 px-2 py-1 rounded bg-accent/10 border border-accent/20">ADVANCED</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Supply Chain Digitization</h3>
              <p className="text-foreground/70 text-sm">Bridging raw data and operational intelligence through bespoke predictive analytics and automation dashboards.</p>
            </div>
          </motion.div>

          {/* Core Stack (Medium Box) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 bg-foreground/5 dark:bg-white/5 backdrop-blur-md border border-foreground/10 dark:border-white/10 rounded-3xl p-6 flex items-center gap-6 hover:bg-foreground/10 dark:hover:bg-white/10 transition-all shadow-lg"
          >
            <div className="text-4xl text-accent">⚛️</div>
            <div>
              <h3 className="text-xl font-bold">Next.js & React</h3>
              <p className="text-foreground/60 text-xs mt-1">SSR, Framer Motion, and high-performance frontend architecture.</p>
            </div>
          </motion.div>

          {/* SAP ERP (Small Box) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 bg-foreground/5 dark:bg-white/5 backdrop-blur-md border border-foreground/10 dark:border-white/10 rounded-3xl p-6 flex flex-col justify-center items-center hover:scale-[1.02] transition-transform shadow-lg"
          >
            <span className="text-blue-500 dark:text-blue-400 font-bold text-xl mb-1">SAP</span>
            <p className="text-foreground/50 text-[10px] uppercase tracking-widest">Enterprise ERP</p>
          </motion.div>

          {/* LEED / ESG (Small Box) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-1 bg-foreground/5 dark:bg-white/5 backdrop-blur-md border border-foreground/10 dark:border-white/10 rounded-3xl p-6 flex flex-col justify-center items-center hover:scale-[1.02] transition-transform shadow-lg"
          >
            <span className="text-green-600 dark:text-green-400 font-bold text-xl mb-1">LEED</span>
            <p className="text-foreground/50 text-[10px] uppercase tracking-widest">Sustainability</p>
          </motion.div>

          {/* AI & Automation (Medium Box) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-2 bg-gradient-to-r from-purple-500/10 to-pink-500/5 backdrop-blur-md border border-foreground/10 dark:border-white/10 rounded-3xl p-6 flex justify-between items-center group shadow-lg"
          >
            <div>
              <h3 className="text-lg font-bold">AI Integration & Automation</h3>
              <p className="text-foreground/60 text-xs mt-1">Autonomous logic, Data Scraping, & Predictive Models.</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:rotate-12 transition-transform text-xl">
              ✨
            </div>
          </motion.div>

          {/* Strategic Sourcing (Medium Box) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="md:col-span-2 bg-foreground/5 dark:bg-white/5 backdrop-blur-md border border-foreground/10 dark:border-white/10 rounded-3xl p-6 flex justify-between items-center group shadow-lg"
          >
            <div>
              <h3 className="text-lg font-bold">Strategic Sourcing</h3>
              <p className="text-foreground/60 text-xs mt-1">Multimillion-dollar contract negotiations & cost leadership.</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform text-xl">
              📈
            </div>
          </motion.div>

          {/* Strategy & Leadership (Medium Box) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="md:col-span-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/5 backdrop-blur-md border border-foreground/10 dark:border-white/10 rounded-3xl p-6 flex justify-between items-center group shadow-lg"
          >
            <div>
              <h3 className="text-lg font-bold">Strategy & Leadership</h3>
              <p className="text-foreground/60 text-xs mt-1">Engineering MBA: Agile Management, Product Strategy, and Scalable Systems.</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:-translate-y-1 transition-transform text-accent">
              <BarChart size={24} />
            </div>
          </motion.div>

          {/* Global Perspective (Medium Box) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="md:col-span-2 bg-foreground/5 dark:bg-white/5 backdrop-blur-md border border-foreground/10 dark:border-white/10 rounded-3xl p-6 flex justify-between items-center group shadow-lg"
          >
            <div>
              <h3 className="text-lg font-bold">Global Perspective</h3>
              <p className="text-foreground/60 text-xs mt-1">International Development: Inclusive Design, Localization, and Tech for Social Good.</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:rotate-180 transition-transform duration-700 text-blue-400">
              <Globe size={24} />
            </div>
          </motion.div>

        </div>

        {/* MBA Tech Stack Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24"
        >
          <h3 className="text-2xl font-semibold font-outfit mb-8 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-accent" /> Strategic Tech Stack Matrix
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-foreground/10 dark:border-white/10 text-foreground/50 text-xs uppercase tracking-widest font-mono">
                  <th className="py-4 px-6">Strategy</th>
                  <th className="py-4 px-6">Technology</th>
                  <th className="py-4 px-6">Business Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-foreground/5 dark:divide-white/5">
                <tr className="hover:bg-foreground/5 dark:hover:bg-white/5 transition-colors group">
                  <td className="py-4 px-6 font-semibold group-hover:text-accent transition-colors">Immersive Sales</td>
                  <td className="py-4 px-6 text-foreground/80">Three.js / React Three Fiber</td>
                  <td className="py-4 px-6 text-foreground/60 text-sm">Increases user retention and &quot;Time on Page.&quot;</td>
                </tr>
                <tr className="hover:bg-foreground/5 dark:hover:bg-white/5 transition-colors group">
                  <td className="py-4 px-6 font-semibold group-hover:text-accent transition-colors">Rapid Scaling</td>
                  <td className="py-4 px-6 text-foreground/80">Next.js / Vercel</td>
                  <td className="py-4 px-6 text-foreground/60 text-sm">Decreases Time-to-Market and SEO costs.</td>
                </tr>
                <tr className="hover:bg-foreground/5 dark:hover:bg-white/5 transition-colors group">
                  <td className="py-4 px-6 font-semibold group-hover:text-accent transition-colors">Data Integrity</td>
                  <td className="py-4 px-6 text-foreground/80">Node.js / MongoDB</td>
                  <td className="py-4 px-6 text-foreground/60 text-sm">Ensures secure, scalable business intelligence.</td>
                </tr>
                <tr className="hover:bg-foreground/5 dark:hover:bg-white/5 transition-colors group">
                  <td className="py-4 px-6 font-semibold group-hover:text-accent transition-colors">Global Access</td>
                  <td className="py-4 px-6 text-foreground/80">PWA / Edge Functions</td>
                  <td className="py-4 px-6 text-foreground/60 text-sm">Minimizes latency for international users.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
