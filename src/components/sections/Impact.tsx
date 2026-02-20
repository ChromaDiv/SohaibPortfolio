"use client";

import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import { GlassCard } from "@/components/ui/GlassCard";
import { useTheme } from "next-themes";

function GlobalImpactGlobe() {
  const { theme } = useTheme();
  const ref = useRef<THREE.Points>(null);
  // Generate 5000 points (x, y, z) inside a sphere shape
  const [sphere] = useState(() => random.inSphere(new Float32Array(15000), { radius: 2 }) as Float32Array);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent={theme === "dark"}
          opacity={1}
          color={theme === "light" ? "#064e3b" : "#10b981"} // Extremely dark green for max contrast in light mode
          size={theme === "light" ? 0.025 : 0.015} // Slightly larger in light mode to stand out
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

const dimensions = [
  {
    category: "The Engineering MBA (Scalability)",
    angle: "Code is a business asset.",
    text: "I apply management frameworks like Agile and Lean to the software lifecycle. My focus is on reducing technical debt and ensuring that the tech stack (MERN) evolves with the company's growth targets.",
  },
  {
    category: "International Development (Inclusivity)",
    angle: "Global reach requires empathy.",
    text: "My studies in International Development inform my commitment to Universal Design. I specialize in creating lightweight, high-performance web experiences that remain functional in regions with limited connectivity or aging hardware.",
  },
  {
    category: "Technical Execution (Precision)",
    angle: "Immersive, not distracting.",
    text: "Using Three.js and AI, I build interfaces that simplify complex data. Whether it's an Amazon scraper or a 3D visualizer, the goal is always clear: Transforming raw data into actionable business intelligence.",
  }
];

export function Impact() {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax for the Globe container
  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4 text-emerald-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-emerald-400 dark:to-emerald-200">
          Bridging the Digital Divide: Tech for Global Impact
        </h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Building solutions for the Next Billion Users, leveraging the intersection of Engineering, Business, and Humanity.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
        {/* Left Column: 3D Global Perspective (with scroll parallax) */}
        <motion.div
          style={{ y: yParallax }}
          className="h-[400px] lg:h-[600px] w-full relative rounded-3xl overflow-hidden glass border-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.05)]"
        >
          <div className="absolute inset-0 z-[-1] bg-gradient-to-br from-background via-emerald-50/50 to-emerald-100/50 dark:via-[#050a05] dark:to-emerald-900/10" />
          {!isMobile && (
            <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
              <GlobalImpactGlobe />
            </Canvas>
          )}
          {isMobile && (
            <div className="flex items-center justify-center h-full">
              <div className="text-6xl animate-pulse delay-75">🌍</div>
            </div>
          )}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-white/95 dark:bg-[#050a05]/90 backdrop-blur-xl border border-emerald-500/20 p-4 rounded-xl shadow-[0_8px_30px_rgba(16,185,129,0.15)]">
              <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.2em] font-bold">Data Connectivity</span>
              <p className="text-sm text-slate-800 dark:text-foreground/80 mt-1 font-medium">Simulating global data points and network connectivity in real-time.</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Strategic Dimensions */}
        <div className="space-y-6">
          {dimensions.map((dim, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
            >
              <GlassCard className="p-6 md:p-8 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] group transition-all duration-500">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-500 uppercase tracking-[0.15em] mb-1 opacity-80 group-hover:opacity-100 transition-opacity">
                    {dim.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-emerald-700 dark:group-hover:text-emerald-50 transition-colors">
                    &quot;{dim.angle}&quot;
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{dim.text}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
