"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { type: "spring", damping: 20, stiffness: 100 },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 dark:bg-accent/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/20 dark:bg-purple-900/20 rounded-full blur-[100px] pointer-events-none -z-10" />

      <motion.div
        className="max-w-4xl mx-auto text-center space-y-8 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={childVariants} className="inline-block">
          <span className="px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium tracking-wide">
            Portfolio 2026
          </span>
        </motion.div>

        <motion.h1
          variants={childVariants}
          className="text-5xl md:text-7xl font-extrabold font-outfit tracking-tighter leading-tight"
        >
          Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500 dark:from-sky-400 dark:to-accent">Sohaib Latif</span>
        </motion.h1>

        <motion.p
          variants={childVariants}
          className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Supply Chain Analyst | Bridging Engineering, Business, and International Development | Driving Operational Excellence, Sustainability & ESG | LEED Green Associate (In Progress)
        </motion.p>

        <motion.div variants={childVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View Projects
          </Button>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline">
              Download Resume
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
