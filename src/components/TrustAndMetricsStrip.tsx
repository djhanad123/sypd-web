"use client";

import React, { useState, useEffect, useRef } from "react";
import { Users, MessageSquare, Droplets, PieChart, ShieldCheck } from "lucide-react";

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

const RollingCounter: React.FC<CounterProps> = ({ target, suffix = "", duration = 1600 }) => {
  const [count, setCount] = useState(target);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Reset to 0 on client mount to enable smooth scroll-in rolling animation
    setCount(0);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, target, duration]);

  return (
    <span ref={ref} className="font-extrabold tracking-tight">
      {count}
      {suffix}
    </span>
  );
};

export const TrustAndMetricsStrip: React.FC = () => {
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);

  return (
    <section id="trust-strip" className="w-full bg-surface-card py-12 lg:py-16 shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Highlight Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Stat 1: Beneficiaries */}
          <div className="p-5 sm:p-6 bg-surface-container-low rounded-2xl flex flex-col justify-between hover-lift-card border border-border-subtle/50 transition-all">
            <div className="flex items-center justify-between text-secondary">
              <Users className="w-7 h-7 text-secondary" />
              <span className="text-xs bg-secondary-container/60 text-secondary-dark px-2.5 py-0.5 rounded-full font-bold">
                100% Indigenous
              </span>
            </div>
            <div className="mt-4">
              <div className="text-3xl sm:text-4xl text-primary font-extrabold">
                4.3M+
              </div>
              <p className="text-xs sm:text-sm text-peace-slate uppercase tracking-wide mt-1 font-semibold">
                Beneficiaries Reached
              </p>
            </div>
          </div>

          {/* Stat 2: Projects */}
          <div className="p-5 sm:p-6 bg-surface-container-low rounded-2xl flex flex-col justify-between hover-lift-card border border-border-subtle/50 transition-all">
            <div className="flex items-center justify-between text-primary">
              <MessageSquare className="w-7 h-7 text-tertiary" />
              <span className="text-xs bg-primary-fixed text-primary px-2.5 py-0.5 rounded-full font-bold">
                Est. Aug 24, 2004
              </span>
            </div>
            <div className="mt-4">
              <div className="text-3xl sm:text-4xl text-primary font-extrabold">
                <RollingCounter target={150} suffix="+" />
              </div>
              <p className="text-xs sm:text-sm text-peace-slate uppercase tracking-wide mt-1 font-semibold">
                Projects Implemented
              </p>
            </div>
          </div>

          {/* Stat 3: Districts */}
          <div className="p-5 sm:p-6 bg-surface-container-low rounded-2xl flex flex-col justify-between hover-lift-card border border-border-subtle/50 transition-all">
            <div className="flex items-center justify-between text-action-orange">
              <Droplets className="w-7 h-7 text-action-orange" />
              <span className="text-xs bg-surface-container text-action-orange px-2.5 py-0.5 rounded-full font-bold">
                5 States + Banadir
              </span>
            </div>
            <div className="mt-4">
              <div className="text-3xl sm:text-4xl text-primary font-extrabold">
                <RollingCounter target={71} suffix="+" />
              </div>
              <p className="text-xs sm:text-sm text-peace-slate uppercase tracking-wide mt-1 font-semibold">
                Districts Covered
              </p>
            </div>
          </div>

          {/* Stat 4: Funds Managed */}
          <div className="p-5 sm:p-6 bg-surface-container-low rounded-2xl flex flex-col justify-between hover-lift-card border border-border-subtle/50 transition-all">
            <div className="flex items-center justify-between text-secondary">
              <PieChart className="w-7 h-7 text-secondary" />
              <span className="text-xs bg-secondary-fixed/60 text-secondary-dark px-2.5 py-0.5 rounded-full font-bold">
                Zero Default
              </span>
            </div>
            <div className="mt-4">
              <div className="text-3xl sm:text-4xl text-primary font-extrabold">
                $30M+
              </div>
              <p className="text-xs sm:text-sm text-peace-slate uppercase tracking-wide mt-1 font-semibold">
                Portfolio Managed
              </p>
            </div>
          </div>
        </div>

        {/* Financial Transparency Micro-Dashboard Bar */}
        <div className="mt-6 p-5 sm:p-6 bg-surface-container rounded-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 hover-lift-card border border-border-subtle/70">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg text-primary font-bold">
                Transparent Operations & Certified External Audits
              </h3>
              <p className="text-xs sm:text-sm text-peace-slate">
                All donor grant allocations and project accounts are audited annually by certified independent external auditors.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-2.5">
            {/* Stacked Bar Visual */}
            <div className="w-full h-4 rounded-full bg-surface-container-high overflow-hidden flex shadow-inner">
              <div
                className="bg-secondary h-full transition-all duration-300 cursor-pointer hover:opacity-90"
                style={{ width: "88%" }}
                onMouseEnter={() => setHoveredSegment("field")}
                onMouseLeave={() => setHoveredSegment(null)}
                title="88% Direct Field Delivery"
              />
              <div
                className="bg-primary h-full transition-all duration-300 cursor-pointer hover:opacity-90"
                style={{ width: "7%" }}
                onMouseEnter={() => setHoveredSegment("ops")}
                onMouseLeave={() => setHoveredSegment(null)}
                title="7% Organizational Operations"
              />
              <div
                className="bg-action-orange h-full transition-all duration-300 cursor-pointer hover:opacity-90"
                style={{ width: "5%" }}
                onMouseEnter={() => setHoveredSegment("fund")}
                onMouseLeave={() => setHoveredSegment(null)}
                title="5% Resource Development"
              />
            </div>

            {/* Legend & Tooltip Status */}
            <div className="flex flex-wrap items-center justify-between text-xs text-peace-slate font-medium">
              <span
                className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                  hoveredSegment === "field" ? "text-primary font-bold" : ""
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-secondary" /> 88% Field Delivery
              </span>
              <span
                className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                  hoveredSegment === "ops" ? "text-primary font-bold" : ""
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-primary" /> 7% Operations
              </span>
              <span
                className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                  hoveredSegment === "fund" ? "text-primary font-bold" : ""
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-action-orange" /> 5% Resource Development
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
