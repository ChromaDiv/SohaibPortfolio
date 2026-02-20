"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Github, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 pointer-events-none"
    >
      <div className={cn(
        "relative z-50 flex items-center justify-between transition-all duration-500 w-full pointer-events-auto",
        isScrolled
          ? "max-w-4xl mt-2 md:mt-4 py-3 px-5 md:px-6 glass rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.12)] bg-background/80 dark:bg-[#050a05]/80 backdrop-blur-3xl border border-foreground/10 dark:border-emerald-500/20"
          : "max-w-7xl mt-0 py-4 md:py-6 px-4 md:px-8 bg-transparent border-transparent"
      )}>
        {/* Logo */}
        <Link href="/" className="relative z-10 group flex items-center gap-1">
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
            <span className="font-outfit text-sm font-bold text-accent">SL</span>
          </div>
          <span className="font-outfit text-xl font-bold tracking-tighter transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-purple-500 ml-1">
            Sohaib<span className="text-accent group-hover:text-transparent">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 relative">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors duration-300",
                hoveredIndex === index ? "text-foreground" : "text-foreground/70"
              )}
            >
              <span className="relative z-10">{link.name}</span>
              {hoveredIndex === index && (
                <motion.div
                  layoutId="nav-hover"
                  className="absolute inset-0 bg-foreground/5 dark:bg-white/10 rounded-full z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Actions & Mobile Toggle */}
        <div className="flex items-center gap-4 relative z-10">
          <div className="hidden md:flex items-center flex-row gap-3 mr-2 border-r border-foreground/10 dark:border-white/10 pr-4">
            <motion.a
              whileHover={{ y: -2 }}
              href="https://linkedin.com/in/sohaiblatif"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="https://github.com/sohaiblatif"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-accent transition-colors"
              aria-label="Github"
            >
              <Github size={18} />
            </motion.a>
          </div>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full md:bg-transparent bg-foreground/5 dark:bg-white/5 border md:border-transparent border-foreground/10 dark:border-white/10 hover:bg-foreground/10 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}

          <button
            className="md:hidden p-2 rounded-full bg-foreground/5 dark:bg-white/5 border border-foreground/10 dark:border-white/10 active:bg-emerald-500/20 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-background/95 dark:bg-[#050a05]/95 backdrop-blur-3xl pt-32 px-6 flex flex-col md:hidden pointer-events-auto"
          >
            <div className="flex flex-col gap-4 items-center w-full max-w-sm mx-auto flex-1 mt-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex justify-center items-center w-full text-2xl font-bold font-outfit py-4 rounded-full bg-foreground/5 dark:bg-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] active:scale-95 hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-teal-500/20 active:from-emerald-500/30 active:to-teal-500/30 transition-all duration-300 border border-foreground/10 dark:border-white/10"
                  >
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-300 dark:to-teal-300 bg-clip-text text-transparent group-hover:from-emerald-500 group-hover:to-teal-200 transition-all duration-300 tracking-wide">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pb-12 pt-8 w-full flex justify-center gap-6 mt-auto"
            >
              <a href="https://linkedin.com/in/sohaiblatif" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-foreground/5 dark:bg-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border border-foreground/10 dark:border-white/10 text-foreground/70 active:scale-95 active:bg-emerald-500/20 hover:text-emerald-400 transition-all">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/sohaiblatif" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-foreground/5 dark:bg-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border border-foreground/10 dark:border-white/10 text-foreground/70 active:scale-95 active:bg-emerald-500/20 hover:text-emerald-400 transition-all">
                <Github size={24} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
