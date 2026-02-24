import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";

// Dynamically import below-the-fold components to reduce initial bundle size
const Experience = dynamic(() => import("@/components/sections/Experience").then(mod => mod.Experience));
const Projects = dynamic(() => import("@/components/sections/Projects").then(mod => mod.Projects));
const Skills = dynamic(() => import("@/components/sections/Skills").then(mod => mod.Skills));
const Impact = dynamic(() => import("@/components/sections/Impact").then(mod => mod.Impact));
const Contact = dynamic(() => import("@/components/sections/Contact").then(mod => mod.Contact));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-hidden">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Impact />
      <Contact />
    </main>
  );
}
