"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Smartphone, TerminalSquare } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const projects = [
  {
    id: "chroma-div",
    title: "Chroma Div",
    desc: "A digital agency platform focusing on high-speed web tech, autonomous AI, and algorithmic e-commerce growth systems.",
    icon: <Code2 className="w-10 h-10 mb-4 text-purple-400" />,
    className: "md:col-span-2 md:row-span-1",
    demoLink: "https://chromadiv.com/",
  },
  {
    id: "quran-go",
    title: "QuranGo",
    desc: "A modern Quran study platform with a comprehensive surah index designed for the Ummah.",
    icon: <Smartphone className="w-10 h-10 mb-4 text-sky-400" />,
    className: "md:col-span-1 md:row-span-2",
    demoLink: "https://quran-go-sand.vercel.app/",
  },
  {
    id: "rmsys",
    title: "RMSys",
    desc: "AI-powered restaurant management system featuring live analytics, supply chain automation, and customer insights.",
    icon: <TerminalSquare className="w-10 h-10 mb-4 text-emerald-400" />,
    className: "md:col-span-1 md:row-span-1",
    demoLink: "https://mintcream-zebra-738412.hostingersite.com/",
  },
  {
    id: "greenbuild",
    title: "GreenBuild Ledger",
    desc: "A sustainable construction and ERP ledger platform for managing material efficiency.",
    icon: <Code2 className="w-10 h-10 mb-4 text-green-400" />,
    className: "md:col-span-1 md:row-span-1",
    demoLink: "https://green-build-nu.vercel.app/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold font-outfit mb-4">Featured Work</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Showcasing a blend of sophisticated engineering, design, and business logic.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            className={project.className}
          >
            <GlassCard className="h-full flex flex-col justify-between group cursor-pointer hover:border-accent/40 transition-colors">
              <div>
                {project.icon}
                <h3 className="text-2xl font-bold font-outfit mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/80 line-clamp-3">
                  {project.desc}
                </p>
              </div>

              <div className="flex items-center gap-4 mt-6 transition-all duration-300">
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-accent">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
