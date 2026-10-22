"use client";

import React from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DockedThemeToggle } from "@/components/ThemeToggle";

export const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-surface text-on-surface selection:bg-action-orange/20 selection:text-action-orange transition-colors duration-300">
        {/* Sticky Glassmorphic Header with Transparent SYPD Logo & Nav */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className="flex-1 w-full">{children}</main>

        {/* Global Footer */}
        <Footer />

        {/* Global Theme Docked Switcher on the Right Edge (Desktop only) */}
        <DockedThemeToggle />
      </div>
    </ThemeProvider>
  );
};
