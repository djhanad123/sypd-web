"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
  size?: "sm" | "md";
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = "",
  size = "md",
}) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const iconClass = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";
  const btnClass = size === "sm" ? "p-1.5" : "p-2";

  return (
    <div
      className={`flex items-center rounded-xl p-1 border transition-colors ${
        isDark
          ? "bg-slate-900 border-slate-700 shadow-inner"
          : "bg-surface-container border-border-subtle"
      } ${className}`}
      role="group"
      aria-label="Global theme switcher"
    >
      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-label="Switch to Dark Theme"
        title="Dark Theme"
        className={`${btnClass} rounded-lg transition-all cursor-pointer ${
          theme === "dark"
            ? "bg-action-orange text-white shadow-xs"
            : isDark
            ? "text-slate-400 hover:text-white"
            : "text-peace-slate hover:text-primary"
        }`}
      >
        <Moon className={iconClass} />
      </button>

      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-label="Switch to Light Theme"
        title="Light Theme"
        className={`${btnClass} rounded-lg transition-all cursor-pointer ${
          theme === "light"
            ? "bg-action-orange text-white shadow-xs"
            : isDark
            ? "text-slate-400 hover:text-white"
            : "text-peace-slate hover:text-primary"
        }`}
      >
        <Sun className={iconClass} />
      </button>
    </div>
  );
};

/**
 * DockedThemeToggle: Docked permanently on the right edge of the screen
 * Frees up the navigation bar while providing 1-click global theme switching anywhere on the site.
 */
export const DockedThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <aside
      id="globalThemeDock"
      aria-label="Global theme dock"
      className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 flex-col items-center bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-1.5 rounded-l-2xl border border-r-0 border-border-subtle dark:border-slate-700 shadow-2xl transition-all duration-300 group hover:pr-1.5 hover:shadow-action-orange/15"
    >
      <div
        className="flex flex-col items-center gap-1.5 rounded-xl p-1 bg-surface-container/70 dark:bg-slate-800/80 border border-border-subtle/60 dark:border-slate-700/60"
        role="group"
        aria-label="Global theme switcher"
      >
        <button
          type="button"
          onClick={() => setTheme("light")}
          aria-label="Switch to Light Theme"
          title="Light Theme"
          className={`p-2 rounded-lg transition-all cursor-pointer ${
            theme === "light"
              ? "bg-action-orange text-white shadow-md scale-105"
              : isDark
              ? "text-slate-400 hover:text-white"
              : "text-peace-slate hover:text-primary"
          }`}
        >
          <Sun className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => setTheme("dark")}
          aria-label="Switch to Dark Theme"
          title="Dark Theme"
          className={`p-2 rounded-lg transition-all cursor-pointer ${
            theme === "dark"
              ? "bg-action-orange text-white shadow-md scale-105"
              : isDark
              ? "text-slate-400 hover:text-white"
              : "text-peace-slate hover:text-primary"
          }`}
        >
          <Moon className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
