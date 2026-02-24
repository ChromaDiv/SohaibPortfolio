"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", leftIcon, rightIcon, children, ...props }, ref) => {
    const variants = {
      primary:
        "bg-[#3b82f6] text-white shadow-md hover:bg-[#2563eb] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 border border-transparent",
      secondary:
        "bg-foreground text-background border border-transparent hover:bg-foreground/90 hover:-translate-y-0.5 active:translate-y-0",
      outline:
        "bg-transparent dark:bg-background/50 border border-foreground/20 dark:border-white/20 text-foreground hover:bg-foreground/5 dark:hover:bg-white/5 hover:border-foreground/30 dark:hover:border-white/40 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
      ghost:
        "bg-transparent text-foreground hover:bg-foreground/5 dark:hover:bg-white/5",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg font-medium",
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center gap-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-background",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {leftIcon && <span className="flex items-center justify-center -ml-1">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="flex items-center justify-center -mr-1">{rightIcon}</span>}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
