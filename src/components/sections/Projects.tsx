"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Code2,
  Smartphone,
  TerminalSquare,
  ChevronRight,
  Activity,
  Target,
  ShieldCheck,
  Gauge
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const projects = [
  {
    id: "chroma-div",
    title: "Chroma Div",
    subtitle: "AI-Driven Digital Agency Engine",
    status: "Operational",
    desc: "Autonomous AI and algorithmic e-commerce growth systems focusing on high-speed web tech and scalable infrastructure.",
    metrics: [
      { label: "Performance", value: "99/100", icon: <Gauge size={12} /> },
      { label: "Architecture", value: "Scalable", icon: <Activity size={12} /> },
    ],
    tags: ["Next.js", "AI Logic", "Growth Systems"],
    icon: <Code2 className="w-6 h-6 text-purple-400" />,
    className: "lg:col-span-2",
    demoLink: "https://chromadiv.com/",
    color: "text-purple-400",
  },
  {
    id: "quran-go",
    title: "QuranGo",
    subtitle: "Modern Educational Platform",
    status: "Live",
    desc: "A high-performance study platform designed with Universal Design principles for the global Ummah.",
    metrics: [
      { label: "Load Time", value: "<1.2s", icon: <Activity size={12} /> },
      { label: "UX Rating", value: "A+", icon: <Target size={12} /> },
    ],
    tags: ["React", "Global Reach", "Inclusivity"],
    icon: <Smartphone className="w-6 h-6 text-sky-400" />,
    className: "lg:col-span-1 lg:row-span-2",
    demoLink: "https://quran-go-sand.vercel.app/",
    color: "text-sky-400",
  },
  {
    id: "rmsys",
    title: "RMSys",
    subtitle: "Supply Chain & Restaurant ERP",
    status: "Production",
    desc: "AI-powered restaurant management featuring live analytics, supply chain automation, and customer insights.",
    metrics: [
      { label: "Automation", value: "40%", icon: <Activity size={12} /> },
      { label: "Analytics", value: "Real-time", icon: <ShieldCheck size={12} /> },
    ],
    tags: ["ERP", "Supply Chain", "AI"],
    icon: <TerminalSquare className="w-6 h-6 text-accent" />,
    className: "lg:col-span-1",
    demoLink: "https://mintcream-zebra-738412.hostingersite.com/",
    color: "text-accent",
  },
  {
    id: "greenbuild",
    title: "GreenBuild Ledger",
    subtitle: "Industrial Compliance & ERP",
    status: "Operational",
    desc: "Sustainable construction ledger for managing material efficiency and LEED/Estidama alignment.",
    metrics: [
      { label: "Waste Red.", value: "12%", icon: <Activity size={12} /> },
      { label: "Compliance", value: "LEED Gold", icon: <ShieldCheck size={12} /> },
    ],
    tags: ["Sustainability", "QA/QC", "ISO"],
    icon: <Code2 className="w-6 h-6 text-green-400" />,
    className: "lg:col-span-1",
    demoLink: "https://green-build-nu.vercel.app/",
    color: "text-green-400",
  },
];

export function Projects() {
  return (
    <section id="projects" className="glass-section py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">

        {/* Header - Matching CaseStudies.tsx style */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <TerminalSquare className="text-accent animate-pulse" size={20} />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-accent">Technical Projects</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-outfit text-foreground tracking-tight leading-none">
            Featured <span className="text-accent italic">Engineering.</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl font-inter mt-4 leading-relaxed">
            Showcasing systems that bridge the gap between high-performance software and industrial business logic.
          </p>
        </motion.div>

        {/* Tactical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={project.className}
            >
              <GlassCard className="h-full flex flex-col p-8 border-foreground/10 bg-white/40 dark:bg-background/40 hover:border-accent/30 transition-all duration-500 group relative">

                {/* Status Indicator */}
                <div className="flex items-center justify-between mb-8">
                  <div className={`p-3 rounded-xl bg-background/60 border border-foreground/5 ${project.color}`}>
                    {project.icon}
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10">
                    <div className={`w-1.5 h-1.5 rounded-full ${project.id === 'quran-go' ? 'bg-sky-400' : 'bg-accent'} animate-pulse`} />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-foreground/40">{project.status}</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-grow space-y-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-accent uppercase tracking-[0.2em] mb-1 block">
                      {project.subtitle}
                    </span>
                    <h3 className="text-3xl font-bold font-outfit text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-foreground/60 leading-relaxed font-inter">
                    {project.desc}
                  </p>

                  {/* Project Metrics Strip */}
                  <div className="grid grid-cols-2 gap-4 py-6 border-y border-foreground/5">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex items-center gap-2 text-foreground/30">
                          {m.icon}
                          <span className="text-[9px] font-mono font-bold uppercase tracking-tighter">{m.label}</span>
                        </div>
                        <p className="text-sm font-bold font-outfit">{m.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer / Actions */}
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[9px] font-mono px-2 py-0.5 rounded bg-foreground/5 text-foreground/40 italic">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {project.demoLink && (
                    <motion.a
                      whileHover={{ x: 5 }}
                      href={project.demoLink}
                      target="_blank"
                      className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest ${project.color}`}
                    >
                      Access Control <ChevronRight size={14} />
                    </motion.a>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}