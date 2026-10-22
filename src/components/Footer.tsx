"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setIsSubscribed(true);
        setEmail("");
        setTimeout(() => setIsSubscribed(false), 5000);
      }
    } catch {
      // Graceful fallback
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="w-full bg-surface-card border-t border-border-subtle/70 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12">
          {/* Brand Column: SYPD-Logo-original as Title (Transparent) */}
          <div className="lg:col-span-2 flex flex-col gap-5 pr-0 lg:pr-8">
            <Link
              href="/"
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-action-orange rounded-xl transition-transform duration-300 hover:scale-102"
              aria-label="SYPD Home"
            >
              <Image
                src="/images/SYPD-Logo-original.png"
                alt="SYPD - Sustainable Development & Peace Building Initiatives"
                width={260}
                height={128}
                className="h-12 sm:h-14 w-auto object-contain object-left dark:brightness-0 dark:invert transition-all"
              />
            </Link>

            <p className="text-sm text-peace-slate leading-relaxed max-w-sm">
              Empowering communities through grassroots peacebuilding, conflict resolution, and ecologically sustainable development initiatives across vulnerable regional corridors.
            </p>

            {/* Social & Channel Badges */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.facebook.com/SYPDORGANIZATION"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SYPD on Facebook"
                className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-primary hover:text-white hover:bg-[#1877F2] transition-all hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://x.com/sypdorg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SYPD on X (Twitter)"
                className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-primary hover:text-white hover:bg-black transition-all hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/sypdorg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SYPD on Instagram"
                className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-primary hover:text-white hover:bg-[#E4405F] transition-all hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/sypdsomalia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SYPD on LinkedIn"
                className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-primary hover:text-white hover:bg-[#0A66C2] transition-all hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Strategic Pillars */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-wider font-bold text-primary">
              Strategic Pillars
            </h3>
            <nav className="flex flex-col space-y-2 text-sm text-peace-slate">
              <Link href="/programs#climate-resilience" className="hover:text-primary transition-colors">
                Climate & Water Infrastructure
              </Link>
              <Link href="/programs#health-nutrition" className="hover:text-primary transition-colors">
                Health & Nutrition Services
              </Link>
              <Link href="/programs#economic-empowerment" className="hover:text-primary transition-colors">
                Economic TVET & Livelihoods
              </Link>
              <Link href="/programs#food-security" className="hover:text-primary transition-colors">
                Food Security & Agriculture
              </Link>
              <Link href="/programs#gender-inclusion" className="hover:text-primary transition-colors">
                Gender Equality & Inclusion
              </Link>
              <Link href="/programs#stabilization-governance" className="hover:text-primary transition-colors">
                Stabilization & Land Rights
              </Link>
            </nav>
          </div>

          {/* Column 3: Organization & Operations */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-wider font-bold text-primary">
              Organization
            </h3>
            <nav className="flex flex-col space-y-2 text-sm text-peace-slate">
              <Link href="/about" className="hover:text-primary transition-colors">
                About SYPD & History
              </Link>
              <Link href="/where-we-work" className="hover:text-primary transition-colors">
                Where We Work (9 Offices)
              </Link>
              <Link href="/projects" className="hover:text-primary transition-colors">
                Projects Portfolio (150+)
              </Link>
              <Link href="/stories" className="hover:text-primary transition-colors">
                Field Dispatches & Stories
              </Link>
              <Link href="/partners" className="hover:text-primary transition-colors">
                Partners & Donors
              </Link>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Contact & Accountability Desk
              </Link>
            </nav>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-wider font-bold text-primary">
              Stay Informed
            </h3>
            <p className="text-xs text-peace-slate leading-relaxed">
              Mogadishu HQ: Afisiyoni St, Waberi District. Tel: +252 61 5522100.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 pt-1">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  aria-label="Email address for quarterly newsletter"
                  required
                  className="w-full bg-surface-container-low border border-border-subtle px-3.5 py-2.5 rounded-xl text-xs text-primary placeholder:text-outline focus:outline-none focus:border-action-orange focus-visible:ring-2 focus-visible:ring-action-orange/40 focus:bg-white transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center bg-primary hover:bg-primary-container text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition-all cursor-pointer shadow-sm hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-action-orange focus-visible:ring-offset-2"
              >
                {isSubscribed ? (
                  <span className="flex items-center gap-1.5 text-secondary-fixed">
                    <CheckCircle className="w-3.5 h-3.5" /> Subscribed
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" /> Newsletter
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border-subtle/50 text-xs text-peace-slate">
          <p>
            © {new Date().getFullYear()} Sustainable Development & Peace Building Initiatives (SYPD). Founded August 24, 2004.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-primary transition-colors">
              INCISD Core Values
            </Link>
            <Link href="/partners" className="hover:text-primary transition-colors">
              Fiduciary Compliance
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Accountability (AAP)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
