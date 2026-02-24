"use client";

import * as React from "react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import { GlassCard } from "@/components/ui/GlassCard";
import { useTheme } from "next-themes";
import { Globe, Users, TrendingUp, Cpu, Activity } from "lucide-react";

function GlobalImpactGlobe({ color, isDark }: { color: string; isDark: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => random.inSphere(new Float32Array(9000), { radius: 1.5 }) as Float32Array);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta / 20;
      ref.current.rotation.x += delta / 30;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          opacity={isDark ? 0.4 : 0.8}
          color={color}
          size={isDark ? 0.015 : 0.025}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

const dimensions = [
  {
    category: "Strategic Scalability",
    icon: <TrendingUp size={20} />,
    angle: "Code is a Business Asset",
    text: "Applying management frameworks like Agile and Lean to the software lifecycle. Every architectural decision is filtered through the lens of technical debt reduction and long-term business ROI.",
  },
  {
    category: "Inclusive Design",
    icon: <Users size={20} />,
    angle: "Global Reach via Empathy",
    text: "Building for the 'Next Billion Users' by creating high-performance, lightweight web experiences that remain functional in low-bandwidth regions and on legacy hardware.",
  },
  {
    category: "Industrial Precision",
    icon: <Cpu size={20} />,
    angle: "Actionable Intelligence",
    text: "Transforming raw data into actionable insights using Three.js and AI visualizers, simplifying complex global supply chain constraints into intuitive dashboards.",
  }
];

export function Impact() {
  const { theme, resolvedTheme } = useTheme();
  // Ensure we compute the correct theme even if set to 'system'
  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";
  const globeColor = isDark ? "#60a5fa" : "#2563eb"; // Darker blue for light mode contrast
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} className="glass-section py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">

        {/* Header - Aligned with CaseStudies.tsx */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Globe className="text-accent animate-spin-slow" size={20} />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-accent">Global Footprint</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-outfit text-foreground tracking-tight leading-tight">
            Bridging the <span className="text-accent italic">Digital Divide.</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl font-inter mt-4">
            Leveraging the intersection of Engineering, Business, and Humanity to build resilient solutions for global challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Left: 3D Visualization Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 h-[500px] relative rounded-[2rem] border border-foreground/10 bg-white/40 dark:bg-background/40 overflow-hidden group"
          >
            <div className="absolute inset-0 z-0">
              <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
                <GlobalImpactGlobe color={globeColor} isDark={isDark} />
              </Canvas>
            </div>

            {/* Tactical HUD Overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-10 space-y-3">
              <div className="p-4 rounded-xl bg-background/80 backdrop-blur-md border border-foreground/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-accent uppercase tracking-widest">Connectivity Status</span>
                  <Activity size={12} className="text-accent animate-pulse" />
                </div>
                <p className="text-xs text-foreground/60 leading-relaxed font-mono italic">
                  &gt; Simulating global data synchronization across 9,000+ nodes in real-time...
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Dimension Cards */}
          <div className="lg:col-span-3 space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {dimensions.map((dim, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <GlassCard className="flex flex-col md:flex-row gap-6 p-8 border-foreground/5 bg-white/40 dark:bg-background/40 group hover:border-accent/20 transition-all">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                      {dim.icon}
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold text-foreground/40 uppercase tracking-[0.2em]">
                        {dim.category}
                      </span>
                      <h3 className="text-xl font-bold font-outfit text-foreground group-hover:text-accent transition-colors">
                        &quot;{dim.angle}&quot;
                      </h3>
                      <p className="text-sm text-foreground/60 leading-relaxed font-inter">
                        {dim.text}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            {/* Bottom Matrix - Aligned with the Profit/Planet/People section in Impact.tsx */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {['PROFIT', 'PLANET', 'PEOPLE'].map((item) => (
                <div key={item} className="text-center p-4 rounded-2xl border border-foreground/5 bg-white/40 dark:bg-background/60">
                  <span className="text-[10px] font-mono text-foreground/40 font-bold tracking-[0.3em]">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}