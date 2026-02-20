"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

const timeline = [
  {
    role: "Supply Chain Analyst",
    company: "Government of Pakistan",
    period: "May 2020 - Jan 2026",
    desc: (
      <ul className="list-disc list-inside space-y-2 mt-2 text-sm md:text-base">
        <li><strong>Strategic Sourcing & Cost Leadership:</strong> Spearheaded multimillion-dollar contract negotiations, delivering a 15% reduction in costs for the 2024 fiscal year.</li>
        <li><strong>Operational Digitization:</strong> Developed custom data visualization and demand forecasting dashboards using React/Next.js.</li>
        <li><strong>Supply Chain Resilience:</strong> Managed high-stakes procurement-to-delivery workflows, ensuring zero downtime.</li>
        <li><strong>Process Optimization:</strong> Led cross-functional approvals for technical and commercial offers.</li>
      </ul>
    ),
  },
  {
    role: "Operations Manager",
    company: "Government of Pakistan",
    period: "May 2017 - May 2020",
    desc: (
      <ul className="list-disc list-inside space-y-2 mt-2 text-sm md:text-base">
        <li><strong>Production Excellence:</strong> Directed daily production planning in high-pressure environments, meeting output targets consistently.</li>
        <li><strong>Quality & Compliance:</strong> Oversaw end-to-end QC and QA protocols, ensuring 100% adherence to international standards.</li>
        <li><strong>Asset & Resource Strategy:</strong> Optimized inventory control and preventive maintenance schedules.</li>
      </ul>
    ),
  },
  {
    role: "Assistant Manager (Planning)",
    company: "Packages Limited",
    period: "Jan 2014 - Jul 2014",
    desc: (
      <ul className="list-disc list-inside space-y-2 mt-2 text-sm md:text-base">
        <li><strong>Service Level Optimization:</strong> Maintained a 99% service level by synchronizing complex manufacturing constraints.</li>
        <li><strong>ERP & Inventory Management:</strong> Utilized SAP for strategic material requirement analysis and real-time operational reporting.</li>
      </ul>
    ),
  },
];

const education = [
  { degree: "MPhil in International Development", year: "2025", school: "Iqra University (IU), Pakistan" },
  { degree: "MBA", year: "2021", school: "Iqra University (IU), Pakistan" },
  { degree: "BE in Mechanical Engineering", year: "2013", school: "NUST" },
  { degree: "FSc (Pre Engineering)", year: "2009", school: "Punjab College of Information Technology" },
];

export function Experience() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 max-w-3xl"
      >
        <div className="space-y-4 text-foreground/80 leading-relaxed text-justify max-w-4xl mx-auto md:mx-0">
          <p>
            I am a Full-Stack Engineer with an Engineering MBA and a background in International Development Studies. This unique trifecta allows me to approach software not just as a coder, but as a strategic problem-solver.
          </p>
          <p>
            While I specialize in the MERN stack and Immersive 3D (Three.js), my MBA background ensures that every line of code I write is aligned with business scalability and ROI. Having studied International Development, I am deeply committed to inclusive design and building digital solutions that are accessible and impactful on a global scale.
          </p>
          <p>
            Whether I am architecting a complex backend or managing a product lifecycle, my goal is the same: Building technology that bridges the gap between human needs and business growth.
          </p>
        </div>
      </motion.div>

      {/* Engineering & MBA Process */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-20 max-w-7xl"
      >
        <h3 className="text-2xl font-semibold font-outfit mb-8 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-accent" /> The Development Lifecycle
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Discovery", desc: "Analyzing business requirements and ROI." },
            { step: "02", title: "Architecture", desc: "Planning scalable infrastructures and systems." },
            { step: "03", title: "Development", desc: "High-performance coding and active engineering." },
            { step: "04", title: "Global Impact", desc: "Testing for accessibility and worldwide deployment." }
          ].map((item, i) => (
            <div key={i} className="glass p-6 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 font-mono text-4xl font-black text-foreground/5 transition-colors group-hover:text-accent/10">{item.step}</div>
              <h4 className="text-lg font-bold text-accent mb-2">{item.title}</h4>
              <p className="text-sm text-foreground/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Timeline */}
        <div id="experience" className="lg:col-span-2 space-y-6 scroll-mt-32">
          <h3 className="text-2xl font-semibold font-outfit mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-accent" /> Work History
          </h3>
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
            >
              <GlassCard className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h4 className="text-xl font-bold text-accent">{item.role}</h4>
                    <span className="text-foreground/90 font-medium">{item.company}</span>
                  </div>
                  <span className="text-sm font-mono px-3 py-1 bg-foreground/5 dark:bg-white/10 rounded-full w-fit">
                    {item.period}
                  </span>
                </div>
                <div className="text-foreground/80">{item.desc}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold font-outfit mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-accent" /> Education
          </h3>
          <div className="space-y-6 relative before:absolute before:-left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-accent/40 before:to-transparent ml-4">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="relative glass p-6 md:p-8 rounded-2xl"
              >
                <h5 className="font-bold text-lg leading-tight">{edu.degree}</h5>
                <span className="text-foreground/70 text-sm mt-2 block">{edu.school}</span>
                <span className="text-accent text-sm font-mono mt-1 block">Class of {edu.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
