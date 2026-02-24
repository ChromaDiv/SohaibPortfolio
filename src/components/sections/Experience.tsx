"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  Briefcase,
  GraduationCap,
  Zap,
  BarChart3,
  ShieldCheck,
  Boxes,
  Settings,
  Globe,
  FileSearch,
  Target
} from "lucide-react";

const timeline = [
  {
    role: "Supply Chain Analyst",
    company: "Government of Pakistan",
    period: "May 2020 - Jan 2026",
    skills: ["Strategic Sourcing", "ROI Optimization", "React/Next.js", "TCO Modeling"],
    desc: [
      { label: "Cost Leadership", text: "Spearheaded multimillion-dollar contract negotiations, delivering a 15% reduction in costs for the 2024 fiscal year." },
      { label: "Digital Transformation", text: "Developed custom data visualization and demand forecasting dashboards to replace legacy tracking." },
      { label: "Resilience", text: "Managed high-stakes procurement-to-delivery workflows, ensuring zero operational downtime." },
    ],
  },
  {
    role: "Operations Manager",
    company: "Government of Pakistan",
    period: "May 2017 - May 2020",
    skills: ["Production Planning", "QA/QC Protocols", "ISO Standards"],
    desc: [
      { label: "Production", text: "Directed daily production planning in high-pressure environments, meeting output targets consistently." },
      { label: "Quality Assurance", text: "Oversaw end-to-end QC and QA protocols, ensuring 100% adherence to international standards." },
      { label: "Asset Strategy", text: "Optimized inventory control and preventive maintenance schedules." },
    ],
  },
  {
    role: "Assistant Manager (Planning)",
    company: "Packages Limited",
    period: "Jan 2014 - Jul 2014",
    skills: ["SAP ERP", "Demand Planning", "Manufacturing"],
    desc: [
      { label: "Service Levels", text: "Maintained a 99% service level by synchronizing complex manufacturing constraints." },
      { label: "ERP Logic", text: "Utilized SAP for strategic material requirement analysis and real-time operational reporting." },
    ],
  },
];

const education = [
  { degree: "MPhil in International Development", year: "2025", school: "Iqra University (IU)", focus: "Sustainable Policy" },
  { degree: "MBA", year: "2021", school: "Iqra University (IU)", focus: "Strategic Management" },
  { degree: "BE in Mechanical Engineering", year: "2013", school: "NUST", focus: "Industrial Systems" },
];

export function Experience() {
  return (
    <section id="about" className="glass-section py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background Glow (Consistency with Hero.tsx) */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Executive Summary Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Settings className="text-accent animate-spin-slow" size={20} />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-accent">Technical Persona</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-outfit text-foreground tracking-tight leading-none mb-6">
              Engineering <span className="text-accent italic">ROI.</span>
            </h2>
            <p className="text-lg text-foreground/60 font-inter leading-relaxed max-w-xl">
              I bridge the gap between <span className="text-foreground font-semibold italic">Industrial Intelligence</span> and scalable software. Every line of code is architected with business scalability and global impact in mind.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {[
              { icon: <Zap size={18} />, title: "Discovery", sub: "Analyzing ROI" },
              { icon: <Boxes size={18} />, title: "Architecture", sub: "Scalable Infrastructure" },
              { icon: <Target size={18} />, title: "Development", sub: "Active Engineering" },
              { icon: <Globe size={18} />, title: "Impact", sub: "Global Deployment" },
            ].map((item, i) => (
              <GlassCard key={i} className="p-4 flex items-center gap-4 border-foreground/5 bg-white/40 dark:bg-background/40">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">{item.icon}</div>
                <div>
                  <h4 className="text-sm font-bold">{item.title}</h4>
                  <p className="text-[10px] uppercase font-mono text-foreground/40">{item.sub}</p>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Timeline (Work History) */}
          <div className="lg:col-span-2 space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <Briefcase className="text-accent" size={24} />
              <h3 className="text-2xl font-bold font-outfit uppercase tracking-wider">Professional Trajectory</h3>
            </div>

            <div className="space-y-12 relative border-l border-foreground/10 ml-4 pl-8">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-[-36px] top-2 w-3 h-3 rounded-full bg-accent border-4 border-background shadow-[0_0_10px_rgba(var(--accent-rgb),0.5)]" />

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h4 className="text-2xl font-bold font-outfit">{item.role}</h4>
                      <p className="text-accent font-medium">{item.company}</p>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-3 py-1 bg-foreground/5 rounded-full border border-foreground/10">
                      {item.period}
                    </span>
                  </div>

                  <div className="grid gap-4 mb-6">
                    {item.desc.map((point, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="mt-1.5"><Zap size={14} className="text-accent/40" /></div>
                        <div>
                          <span className="text-[10px] uppercase font-mono font-bold text-foreground/40 block mb-0.5">{point.label}</span>
                          <p className="text-sm text-foreground/70 leading-relaxed">{point.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map(skill => (
                      <span key={skill} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/60 dark:bg-background/60 border border-foreground/5 text-foreground/50 italic">
                        #{skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar (Education) */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <GraduationCap className="text-accent" size={24} />
              <h3 className="text-2xl font-bold font-outfit uppercase tracking-wider">Academic Foundation</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="p-6 border-foreground/5 bg-white/40 dark:bg-background/40 hover:border-accent/30 transition-colors">
                    <span className="text-[10px] font-mono font-bold text-accent uppercase tracking-widest block mb-2">{edu.year}</span>
                    <h4 className="text-lg font-bold font-outfit leading-tight mb-1">{edu.degree}</h4>
                    <p className="text-xs text-foreground/60 mb-4">{edu.school}</p>

                    <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-accent/5 rounded text-[10px] font-bold text-accent uppercase tracking-tighter">
                      Major: {edu.focus}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}