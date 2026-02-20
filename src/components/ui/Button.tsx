"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const [position, setPosition] = React.useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = e.currentTarget.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX * 0.2, y: middleY * 0.2 }); // 0.2 represents the magnetic pull strength
    };

    const reset = () => {
      setPosition({ x: 0, y: 0 });
    };

    const variants = {
      primary: "bg-accent text-white shadow-[0_0_15px_rgba(0,242,255,0.3)] dark:shadow-[0_0_15px_rgba(0,242,255,0.3)] border border-transparent hover:shadow-[0_0_25px_rgba(0,242,255,0.6)]",
      secondary: "bg-foreground text-background border border-transparent",
      outline: "bg-transparent border border-foreground/20 text-foreground hover:bg-foreground/5 dark:border-white/20 dark:hover:bg-white/5",
      ghost: "bg-transparent text-foreground hover:bg-foreground/5 dark:hover:bg-white/5",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-5 py-2.5 text-base",
      lg: "px-8 py-4 text-lg font-medium",
    };

    return (
      <motion.button
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "inline-flex items-center justify-center rounded-full transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-background",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
