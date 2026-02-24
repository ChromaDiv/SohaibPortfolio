import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DynamicBackground } from "@/components/ui/DynamicBackground";
import { AIAssistantClient } from "@/components/AIAssistantClient";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Sohaib Latif | Portfolio",
  description: "Full Stack Developer & Supply Chain Analyst",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased text-foreground bg-background transition-colors duration-300`}>
        <div className="noise-overlay" />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="fixed inset-0 -z-50 pointer-events-none bg-background">
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(37,99,235,0.08)_0,rgba(37,99,235,0)_50%,rgba(37,99,235,0)_100%)] dark:bg-[radial-gradient(100%_50%_at_50%_0%,rgba(56,189,248,0.13)_0,rgba(56,189,248,0)_50%,rgba(56,189,248,0)_100%)]"></div>
          </div>
          <DynamicBackground />
          <Navbar />
          {children}
          <Footer />
          <AIAssistantClient />
        </ThemeProvider>
      </body>
    </html>
  );
}
