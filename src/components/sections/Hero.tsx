"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Code, Server, Palette } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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
    <section className="relative min-h-[100dvh] flex flex-col justify-center py-28 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] bg-accent/10 dark:bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-900/10 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-screen" />

      <motion.div
        className="max-w-5xl mx-auto text-center flex flex-col items-center gap-6 md:gap-8 z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* PROFILE PHOTO BLOCK */}
        <motion.div variants={childVariants} className="relative inline-flex items-center justify-center shrink-0 mb-4 mt-8 md:mt-0">
          {/* Decorative Top Left Bracket */}
          <div className="absolute -top-4 -left-4 w-10 h-10 border-t-2 border-l-2 border-accent/60 rounded-tl-xl pointer-events-none" />
          {/* Decorative Bottom Right Bracket */}
          <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b-2 border-r-2 border-accent/60 rounded-br-xl pointer-events-none" />

          {/* Profile Image Container - Adjusted size and added shrink-0 to prevent overlap */}
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-white/10 dark:bg-black/20 backdrop-blur-sm border border-black/5 dark:border-white/10 shadow-2xl relative flex items-center justify-center shrink-0">
            <Image
              src="/profile.jpg"
              alt="Sohaib Latif"
              width={500}
              height={500}
              className="w-full h-full object-cover shrink-0 pointer-events-none"
              priority
            />
          </div>
        </motion.div>

        {/* TAGS BLOCK */}
        <motion.div variants={childVariants} className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-black/10 dark:border-white/20 bg-black/5 dark:bg-white/5 text-xs font-bold tracking-widest text-foreground/80 uppercase">
            <Code size={14} className="text-accent" /> Full-Stack Developer
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-black/10 dark:border-white/20 bg-black/5 dark:bg-white/5 text-xs font-bold tracking-widest text-foreground/80 uppercase">
            <Server size={14} className="text-accent" /> Systems Architect
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-black/10 dark:border-white/20 bg-black/5 dark:bg-white/5 text-xs font-bold tracking-widest text-foreground/80 uppercase">
            <Palette size={14} className="text-accent" /> Interactive UI
          </span>
        </motion.div>

        <motion.div variants={childVariants} className="space-y-4">

          {/* MASSIVE NAME FOCUS */}
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-extrabold font-outfit tracking-tight leading-none drop-shadow-lg">
            <span className="text-foreground">SOHAIB </span>
            <span className="text-[#3b82f6]">LATIF</span>
          </h1>

          {/* CLEAR DEVELOPER ROLE */}
          <h2 className="text-2xl md:text-4xl lg:text-[2.5rem] font-medium tracking-tight text-foreground/80 drop-shadow-sm mt-2">
            Full-Stack Web Developer.
          </h2>
        </motion.div>

        {/* PARAGRAPH BLOCK */}
        <motion.p
          variants={childVariants}
          className="text-lg md:text-2xl text-foreground/80 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-sm mt-6 mb-2"
        >
          Crafting immersive digital experiences through code and canvas. I specialize in building high-performance applications that blend efficient engineering with dynamic interactivity.
        </motion.p>

        {/* BUTTONS BLOCK - Using the overhauled Button API */}
        <motion.div variants={childVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-10">
          <Button
            size="lg"
            className="w-full sm:w-auto font-semibold px-8 py-4 text-lg tracking-wide rounded-full shadow-[0_4px_14px_0_rgba(59,130,246,0.39)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.23)] hover:bg-[#2563eb] transition duration-200"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Solutions
          </Button>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto font-semibold px-8 py-4 text-lg tracking-wide rounded-full border-black/10 dark:border-white/20 bg-transparent hover:bg-black/5 dark:bg-black/40 dark:hover:bg-black/60 text-foreground shadow-sm transition duration-200"
            >
              Download Resume
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}