"use client";

import * as React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-12 border-t border-foreground/10 dark:border-white/10 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start space-y-2">
          <Link href="/" className="font-outfit text-xl font-bold tracking-tighter">
            S.L<span className="text-accent">.</span>
          </Link>
          <p className="text-sm text-foreground/70 text-center md:text-left">
            Bridging Engineering, Business, and AI.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <motion.a
            whileHover={{ y: -3 }}
            href="https://linkedin.com/in/sohaiblatif" // Replace with actual LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            href="https://github.com/sohaiblatif" // Replace with actual Github
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-accent transition-colors"
            aria-label="Github"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            href="mailto:contact@sohaiblatif.com" // Replace with actual email
            className="text-foreground/80 hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </motion.a>
        </div>

        {/* The Signature */}
        <div className="w-full text-center mt-12 mb-6">
          <p className="font-outfit text-xl md:text-xl text-foreground font-medium italic opacity-90">
            &quot;I don&apos;t just build apps; I build systems that empower people.&quot;
          </p>
        </div>

        <div className="w-full text-center text-xs text-foreground/50 mt-4">
          © {new Date().getFullYear()} Sohaib Latif. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
