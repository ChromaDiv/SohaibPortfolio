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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6 transition-all duration-500 pointer-events-none"
      >
        <div
          className={cn(
            "relative z-50 flex items-center justify-between transition-all duration-500 pointer-events-auto group/nav",
            // Unscrolled State: Full width, clean, flat bottom, no pill
            !isScrolled && "w-full max-w-7xl py-4 px-6 md:px-8 bg-transparent border-b border-white/10 dark:border-white/5",
            // Scrolled State: Tighter pill shape with glassmorphism + ambient modern glow
            isScrolled && "w-[95%] max-w-4xl py-2.5 px-5 md:px-6 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-black/10 dark:border-white/20 translate-y-2 md:translate-y-0 shadow-[0_0_15px_rgba(var(--accent-rgb),0.15)] dark:shadow-[0_0_15px_rgba(var(--accent-rgb),0.2)]",
            // Interactive Glow (applied on hover when scrolled)
            isScrolled && "hover:border-accent/50 hover:shadow-[0_0_30px_rgba(var(--accent-rgb),0.4)] hover:bg-white/15 dark:hover:bg-black/30"
          )}
        >
          {/* Internal Subtle Glow for Glass Effect (Only active when scrolled) */}
          {isScrolled && (
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 rounded-full pointer-events-none -z-10 opacity-50 group-hover/nav:opacity-100 transition-opacity duration-300" />
          )}

          {/* Logo */}
          <Link href="/" className="relative z-10 group flex items-center gap-2">
            <div className={cn(
              "flex items-center justify-center rounded-full bg-accent/20 border border-accent/30 group-hover:bg-accent/40 group-hover:scale-110 transition-all duration-300 shadow-[0_0_10px_rgba(var(--accent-rgb),0.2)] group-hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.4)]",
              isScrolled ? "w-8 h-8" : "w-10 h-10"
            )}>
              <span className={cn("font-outfit font-bold text-accent drop-shadow-md", isScrolled ? "text-xs" : "text-sm")}>SL</span>
            </div>
            <span className={cn(
              "font-outfit font-bold tracking-tighter transition-all group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-[#00f2ff] drop-shadow-sm",
              isScrolled ? "text-lg" : "text-xl md:text-2xl"
            )}>
              Sohaib<span className="text-accent group-hover:text-transparent">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 relative ml-auto mr-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full",
                  hoveredIndex === index ? "text-foreground" : "text-foreground/80"
                )}
              >
                <span className="relative z-10 drop-shadow-sm">{link.name}</span>
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="nav-hover"
                    className="absolute inset-0 bg-white/10 dark:bg-white/5 border border-white/10 rounded-full z-0 shadow-inner"
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
          <div className="flex items-center gap-3 md:gap-4 relative z-10">
            {/* Desktop Socials */}
            <div className="hidden lg:flex items-center flex-row gap-3 border-r border-white/20 pr-4">
              <motion.a
                whileHover={{ y: -2, scale: 1.1 }}
                href="https://linkedin.com/in/sohaiblatif"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-accent drop-shadow-sm transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={isScrolled ? 18 : 20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -2, scale: 1.1 }}
                href="https://github.com/sohaiblatif"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-accent drop-shadow-sm transition-colors"
                aria-label="Github"
              >
                <Github size={isScrolled ? 18 : 20} />
              </motion.a>
            </div>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={cn(
                  "flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-110 active:scale-95 shadow-sm hover:border-accent/40",
                  isScrolled ? "w-8 h-8" : "w-10 h-10"
                )}
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun size={isScrolled ? 16 : 18} /> : <Moon size={isScrolled ? 16 : 18} />}
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button
              className={cn(
                "lg:hidden flex items-center justify-center rounded-full bg-accent/10 hover:bg-accent/20 border border-accent/20 transition-all active:scale-95 text-accent shadow-sm",
                isScrolled ? "w-8 h-8" : "w-10 h-10"
              )}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={isScrolled ? 18 : 20} /> : <Menu size={isScrolled ? 18 : 20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-background/80 dark:bg-black/60 backdrop-blur-2xl pt-32 px-6 flex flex-col lg:hidden pointer-events-auto border-b border-white/10"
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
                    className="group flex justify-center items-center w-full text-xl font-bold font-outfit py-4 rounded-2xl bg-white/5 dark:bg-black/40 shadow-inner active:scale-95 hover:bg-white/10 hover:border-accent/50 active:bg-accent/20 transition-all duration-300 border border-white/10"
                  >
                    <span className="text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-[#00f2ff] transition-all duration-300 tracking-wide drop-shadow-sm">
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
              <a href="https://linkedin.com/in/sohaiblatif" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 text-foreground/80 active:scale-95 active:bg-accent/20 hover:text-accent hover:border-accent/40 shadow-lg transition-all">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/sohaiblatif" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 text-foreground/80 active:scale-95 active:bg-accent/20 hover:text-accent hover:border-accent/40 shadow-lg transition-all">
                <Github size={24} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}