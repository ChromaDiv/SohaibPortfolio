"use client";

import dynamic from "next/dynamic";

// Dynamically import Three.js background, disabling SSR to drastically improve initial render speed
// This wrapper is required because `ssr: false` cannot be used directly in Server Components (like layout.tsx)
export const DynamicBackground = dynamic(
  () => import("@/components/ui/BackgroundScene").then((mod) => mod.BackgroundScene),
  { ssr: false }
);
