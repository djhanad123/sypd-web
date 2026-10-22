"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Building, CheckCircle2, ShieldCheck } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section className="w-full py-20 lg:py-28 bg-primary text-white relative overflow-hidden">
      {/* Decorative ambient background lighting */}
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none ambient-glow" />
      <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-action-orange/15 blur-3xl pointer-events-none ambient-glow" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
        <span className="text-xs sm:text-sm font-bold text-secondary-fixed uppercase tracking-wider">
          Partner With SYPD
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
          Build a Just, Peaceful, and Thriving Tomorrow.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
          Partner with our frontline field teams across Somalia to advance community peacebuilding, climate-resilient water infrastructure, and sustainable livelihood ecosystems.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-action-orange hover:bg-action-orange-hover text-white text-sm sm:text-base font-bold px-8 py-4 rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5 cta-glow-hover cursor-pointer group"
          >
            <span>Contact Our Team</span>
            <ArrowRight className="w-5 h-5 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/programs"
            className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all transform hover:-translate-y-0.5 border border-white/15 group"
          >
            <span>Explore 6 Strategic Pillars</span>
            <Building className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Guarantees Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-slate-300 text-xs sm:text-sm border-t border-white/10 w-full max-w-2xl text-center">
          <span className="flex items-center justify-center gap-1.5 hover:text-white transition-colors">
            <ShieldCheck className="w-4 h-4 text-secondary-fixed shrink-0" />
            <span>Registered National NGO</span>
          </span>
          <span className="flex items-center justify-center gap-1.5 hover:text-white transition-colors">
            <CheckCircle2 className="w-4 h-4 text-secondary-fixed shrink-0" />
            <span>22+ Years Field Impact</span>
          </span>
          <span className="flex items-center justify-center gap-1.5 hover:text-white transition-colors">
            <CheckCircle2 className="w-4 h-4 text-secondary-fixed shrink-0" />
            <span>Annual Impact Audits</span>
          </span>
        </div>
      </div>
    </section>
  );
};

