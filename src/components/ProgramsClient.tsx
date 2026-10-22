"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CHEFGS_PILLARS } from "@/data/sypdData";
import {
  Droplets,
  Activity,
  TrendingUp,
  Wheat,
  ShieldCheck,
  Scale,
  CheckCircle2,
  ArrowRight,
  Layers,
  Sparkles,
  BarChart3,
  Target,
  Users,
} from "lucide-react";

export function ProgramsClient() {
  const [activePillarId, setActivePillarId] = useState(CHEFGS_PILLARS[0].id);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && CHEFGS_PILLARS.some((p) => p.id === hash)) {
        setActivePillarId(hash);
        setTimeout(() => {
          const el = document.getElementById("pillar-content");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handlePillarSelect = (id: string) => {
    setActivePillarId(id);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  const getPillarIcon = (letter: string) => {
    switch (letter) {
      case "C":
        return <Droplets className="w-5 h-5 text-secondary" />;
      case "H":
        return <Activity className="w-5 h-5 text-action-orange" />;
      case "E":
        return <TrendingUp className="w-5 h-5 text-primary" />;
      case "F":
        return <Wheat className="w-5 h-5 text-secondary" />;
      case "G":
        return <ShieldCheck className="w-5 h-5 text-action-orange" />;
      case "S":
        return <Scale className="w-5 h-5 text-tertiary" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  const activePillar = CHEFGS_PILLARS.find((p) => p.id === activePillarId) || CHEFGS_PILLARS[0];

  return (
    <div className="min-h-screen bg-surface-container-lowest pt-20">
      {/* Header Banner */}
      <section className="relative bg-gradient-to-b from-primary via-primary-container to-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-secondary-fixed text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Strategic Plan 2024 – 2028 Framework</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
                The CHEFGS <br />
                <span className="text-secondary">Strategic Pillars</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light mb-8">
                Guided by our 2024–2028 Strategic Roadmap, SYPD concentrates programmatic interventions into six interconnected pillars designed to build long-term resilience and peace across Somalia.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {CHEFGS_PILLARS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => handlePillarSelect(p.id)}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activePillarId === p.id
                        ? "bg-secondary text-[#021028] shadow-lg shadow-secondary/20"
                        : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center font-black">
                      {p.letter}
                    </span>
                    <span>{p.title.split(",")[0].split("and")[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Thematic Illustration Card */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-secondary/40 via-action-orange/30 to-white/20 rounded-3xl blur-lg opacity-70" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-white/25 shadow-2xl bg-slate-900/40 backdrop-blur-sm group">
                  <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden">
                    <Image
                      src="/images/irrigation-hub.png"
                      alt="SYPD CHEFGS Strategic Pillars & Field Infrastructure"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      preload={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#021028]/90 via-[#021028]/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-white">
                    <div className="flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-wider mb-1">
                      <Target className="w-4 h-4" /> 6 CHEFGS Strategic Pillars
                    </div>
                    <div className="text-xs text-white/90 font-medium">
                      2024–2028 Strategic Framework • $14.48M Resource Target
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Pillar Explorer */}
      <section id="pillar-content" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pillar Navigation Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12" role="tablist" aria-label="CHEFGS Pillars">
            {CHEFGS_PILLARS.map((pillar) => {
              const isSelected = pillar.id === activePillarId;
              return (
                <button
                  key={pillar.id}
                  id={`tab-${pillar.id}`}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  aria-controls="pillar-details"
                  onClick={() => handlePillarSelect(pillar.id)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "border-action-orange bg-surface-container shadow-md"
                      : "border-border-subtle bg-surface-container-low hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm ${
                        isSelected
                          ? "bg-action-orange text-white"
                          : "bg-primary text-white"
                      }`}
                    >
                      {pillar.letter}
                    </span>
                    {getPillarIcon(pillar.letter)}
                  </div>
                  <div className="text-xs font-bold text-primary line-clamp-2">
                    {pillar.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Detail Card */}
          <div id="pillar-details" role="tabpanel" aria-labelledby={`tab-${activePillar.id}`} className="bg-surface-container-low rounded-3xl border border-border-subtle p-6 sm:p-10">
            {/* Header */}
            <div className="max-w-4xl mb-10">
              <div className="inline-flex items-center gap-2 text-action-orange font-bold text-xs uppercase tracking-wider mb-3">
                <Target className="w-4 h-4" /> Strategic Pillar &ldquo;{activePillar.letter}&rdquo;
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary leading-tight mb-4">
                {activePillar.title}
              </h2>
              <div className="p-5 rounded-2xl bg-white border border-border-subtle">
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                  Pillar Objective (2024–2028):
                </div>
                <p className="text-sm text-peace-slate leading-relaxed">
                  {activePillar.objective}
                </p>
              </div>
            </div>

            {/* Strategies & Action Framework */}
            <div className="space-y-8">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                <Layers className="w-5 h-5 text-action-orange" />
                Strategic Lines of Action & Operational Indicators
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {activePillar.strategies.map((strat, sIdx) => (
                  <div
                    key={sIdx}
                    className="bg-white p-6 sm:p-8 rounded-2xl border border-border-subtle shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-action-orange uppercase tracking-wider mb-2">
                        <span>Strategy 0{sIdx + 1}</span>
                      </div>
                      <h4 className="text-base font-bold text-primary mb-4 leading-snug">
                        {strat.strategy}
                      </h4>

                      {/* Activities */}
                      <div className="mb-4">
                        <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                          Key Field Activities:
                        </div>
                        <ul className="space-y-2">
                          {strat.activities.map((act, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-2 text-xs text-peace-slate">
                              <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Outputs, Indicators, Assumptions */}
                    <div className="pt-4 border-t border-border-subtle/80 space-y-2.5 text-xs">
                      <div>
                        <span className="font-bold text-primary">Expected Output: </span>
                        <span className="text-peace-slate">{strat.outputs}</span>
                      </div>
                      <div>
                        <span className="font-bold text-secondary">Indicator: </span>
                        <span className="text-peace-slate">{strat.indicators}</span>
                      </div>
                      <div className="bg-surface-container-low p-2.5 rounded-lg text-[11px] text-peace-slate/90">
                        <span className="font-semibold text-primary">Assumption: </span>
                        {strat.assumptions}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Cutting Strategies */}
      <section className="py-16 sm:py-20 bg-surface-container-low border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-action-orange font-bold text-xs uppercase tracking-wider mb-3">
              <Layers className="w-4 h-4" /> Comprehensive Integration
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-primary tracking-tight">
              Cross-Cutting Operational Principles
            </h2>
            <p className="mt-4 text-peace-slate leading-relaxed">
              Every project under the 6 CHEFGS pillars integrates these three cross-cutting strategies into its execution life cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-border-subtle">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                1. Localization & Community Leadership
              </h3>
              <p className="text-sm text-peace-slate leading-relaxed">
                Prioritizing local solutions, utilizing indigenous clan conciliation frameworks, and placing community leadership committees at the center of project planning and resource stewardship.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-border-subtle">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                2. Evidence Generation, Data & MEL
              </h3>
              <p className="text-sm text-peace-slate leading-relaxed">
                Employing rigorous baseline surveys, digital beneficiary feedback loops (AAP), remote field monitoring, and real-time data to guarantee fidelity to proposed indicators.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-border-subtle">
              <div className="w-12 h-12 rounded-2xl bg-action-orange/10 flex items-center justify-center text-action-orange mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                3. Multi-Stakeholder Partnerships
              </h3>
              <p className="text-sm text-peace-slate leading-relaxed">
                Aligning closely with Federal Government priorities, State line ministries (MoH, MoECHE, MoA, MoW), UN clusters, and community associations to avert duplication and scale impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Mobilization Strip */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="text-xs font-bold text-secondary-fixed uppercase tracking-wider mb-2">
              Strategic Plan 2024–2028 Resource Mobilization
            </div>
            <h3 className="text-2xl sm:text-3xl font-black mb-2">
              $14,486,084.00 Five-Year Target
            </h3>
            <p className="text-white/80 text-sm max-w-xl">
              Targeted funding to implement durable infrastructure, peace initiatives, and livelihood graduation programs across all 6 CHEFGS pillars.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-action-orange hover:bg-action-orange-hover text-white text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md"
            >
              <span>Explore Projects Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/where-we-work"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-bold px-6 py-3 rounded-xl transition-all border border-white/20"
            >
              <span>Operating Areas Map</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
