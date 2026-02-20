"use client";

import * as React from "react";
import { motion } from "framer-motion";

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
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold font-outfit mb-12">Core Competencies</h2>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1, rotate: -2 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="px-6 py-3 rounded-full glass border border-accent/20 text-sm md:text-base font-medium shadow-sm hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] dark:hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
