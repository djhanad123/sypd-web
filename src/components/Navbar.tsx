"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, Shield, PhoneCall } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Strategic Pillars", href: "/programs" },
    { name: "Where We Work", href: "/where-we-work" },
    { name: "Projects", href: "/projects" },
    { name: "Field Stories", href: "/stories" },
    { name: "Partners", href: "/partners" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      id="mainHeader"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-border-subtle dark:border-slate-800 shadow-md py-2.5"
          : "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-border-subtle/80 dark:border-slate-800/80 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand: SYPD-Logo-original with transparent background, seamlessly placed */}
        <Link
          href="/"
          className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-action-orange rounded-xl transition-transform duration-300 hover:scale-102 shrink-0"
          aria-label="SYPD - Sustainable Development & Peace Building Initiatives"
        >
          <Image
            src="/images/SYPD-Logo-original.png"
            alt="SYPD - Sustainable Development & Peace Building Initiatives"
            width={240}
            height={118}
            className="h-10 sm:h-12 w-auto object-contain dark:brightness-0 dark:invert transition-all"
            preload
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs sm:text-sm font-semibold transition-colors py-1 px-1.5 border-b-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-action-orange ${
                  isActive
                    ? "text-action-orange border-action-orange dark:text-secondary dark:border-secondary"
                    : "text-peace-slate hover:text-primary dark:text-slate-300 dark:hover:text-white border-transparent"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Header Group (Uncluttered, with ample breathing room) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 text-xs font-semibold text-peace-slate hover:text-primary transition-colors py-1.5 px-3 rounded-full bg-surface-container hover:bg-surface-container-high focus:outline-none focus-visible:ring-2 focus-visible:ring-action-orange"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <PhoneCall className="w-3.5 h-3.5 text-secondary" />
            <span>Field Desk</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-primary hover:bg-surface-container transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-action-orange"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="xl:hidden bg-white border-b border-border-subtle px-6 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200 shadow-xl max-h-[80vh] overflow-y-auto"
        >
          <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
            <span className="text-xs font-bold text-peace-slate uppercase tracking-wider">
              Theme Mode
            </span>
            <ThemeToggle size="sm" />
          </div>

          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors py-1.5 px-2 rounded-lg ${
                    isActive
                      ? "text-action-orange dark:text-secondary bg-surface-container font-bold"
                      : "text-peace-slate hover:text-primary hover:bg-surface-container-low"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-xs text-peace-slate">
            <span className="flex items-center gap-1.5 font-medium">
              <Shield className="w-4 h-4 text-secondary" />
              Est. Aug 24, 2004 • Somalia
            </span>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-action-orange font-bold hover:underline"
            >
              +252 61 5522100
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
