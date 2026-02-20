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
        <h2 className="text-4xl font-bold font-outfit mb-6">Experience & Background</h2>
        <div className="space-y-4 text-foreground/80 leading-relaxed text-justify max-w-4xl mx-auto md:mx-0">
          <p>
            I am a multi-disciplinary professional with over 12 years of experience driving operational excellence at the intersection of Mechanical Engineering, Business Strategy, and International Development. My career is defined by a commitment to optimizing complex supply chains and ensuring 100% material quality and on-time delivery in high-stakes environments.
          </p>
          <p>
            In my current role as a Supply Chain Analyst for the Government of Pakistan, I managed multimillion-dollar contract negotiations, achieving a 15% cost reduction in the 2024 fiscal year. However, my unique value lies in <strong className="text-accent">Supply Chain Digitization</strong>. Beyond traditional logistics, I leverage my background in React, Next.js, and AI to develop custom &apos;Smart Supply Chain&apos; solutions. By building bespoke predictive analytics dashboards, I bridge the gap between raw data and actionable operational intelligence, significantly increasing demand forecasting accuracy.
          </p>
          <p>
            As a LEED Green Associate (In Progress), I am deeply focused on the future of Sustainability and ESG. I specialize in material efficiency analysis and waste reduction initiatives to ensure that operational growth aligns with global environmental standards.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Timeline */}
        <div className="lg:col-span-2 space-y-6">
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
