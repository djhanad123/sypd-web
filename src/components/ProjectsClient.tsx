"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { SYPD_PROJECTS_CATALOG } from "@/data/sypdData";
import {
  FolderKanban,
  Search,
  Filter,
  Calendar,
  MapPin,
  Building2,
  DollarSign,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export function ProjectsClient() {
  const [selectedSector, setSelectedSector] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const sectors = [
    "All",
    "Food Security & Livelihoods",
    "Education & TVET",
    "WASH",
    "Protection & GBV",
    "Peacebuilding",
    "Emergency & Shelter",
  ];

  const filteredProjects = useMemo(() => {
    return SYPD_PROJECTS_CATALOG.filter((proj) => {
      const matchesSector =
        selectedSector === "All" || proj.sector === selectedSector;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        proj.title.toLowerCase().includes(q) ||
        proj.activities.toLowerCase().includes(q) ||
        proj.targetArea.toLowerCase().includes(q) ||
        proj.fundingAgency.toLowerCase().includes(q);
      return matchesSector && matchesSearch;
    });
  }, [selectedSector, searchQuery]);

  const getSectorBadgeColor = (sector: string) => {
    switch (sector) {
      case "WASH":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Food Security & Livelihoods":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Education & TVET":
        return "bg-cyan-50 text-cyan-700 border-cyan-200";
      case "Protection & GBV":
        return "bg-rose-50 text-rose-700 border-rose-200";
      case "Peacebuilding":
        return "bg-indigo-50 text-indigo-700 border-indigo-200";
      case "Emergency & Shelter":
        return "bg-purple-50 text-purple-700 border-purple-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

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
                <span>Verified 150+ Project Track Record (2004–2026)</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
                Proven Delivery, <br />
                <span className="text-secondary">Verifiable Impact</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light mb-8">
                Explore SYPD&apos;s documented history of 150+ completed and active projects funded by the World Bank, United Nations agencies, and major international humanitarian partners.
              </p>
              <div className="flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-white/80">
                <span className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl">
                  <FolderKanban className="w-4 h-4 text-secondary" /> 150+ Implemented Projects
                </span>
                <span className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl">
                  <DollarSign className="w-4 h-4 text-secondary-fixed" /> $30M+ Portfolio Managed
                </span>
                <span className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl">
                  <Building2 className="w-4 h-4 text-secondary" /> Zero Fiduciary Discrepancies
                </span>
              </div>
            </div>

            {/* Right Upper Corner Thematic Placeholder Card */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-secondary/40 via-primary/30 to-white/20 rounded-3xl blur-lg opacity-70" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-white/25 shadow-2xl bg-slate-900/40 backdrop-blur-sm group">
                  <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden">
                    <Image
                      src="/images/slide-farmer.png"
                      alt="SYPD Food Security & Livelihood Project Delivery"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      preload={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#021028]/90 via-[#021028]/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-white">
                    <div className="flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-wider mb-1">
                      <ShieldCheck className="w-4 h-4" /> 150+ Verified Projects
                    </div>
                    <div className="text-xs text-white/90 font-medium">
                      Multi-Sectoral Implementation Across 71+ Districts
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-white border-b border-border-subtle sticky top-16 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80 shrink-0">
              <Search className="w-4 h-4 text-peace-slate absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, donors, districts..."
                aria-label="Search projects by keyword, donor, or district"
                className="w-full pl-10 pr-4 py-2.5 bg-surface-container rounded-xl text-xs sm:text-sm text-primary placeholder:text-outline border border-border-subtle focus:outline-none focus:border-action-orange focus-visible:ring-2 focus-visible:ring-action-orange/40 focus:bg-white transition-all"
              />
            </div>

            {/* Sector Filters */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              <span className="text-xs font-bold text-peace-slate flex items-center gap-1 pl-1 mr-1 shrink-0">
                <Filter className="w-3.5 h-3.5" /> Sector:
              </span>
              {sectors.map((sec) => (
                <button
                  key={sec}
                  type="button"
                  aria-pressed={selectedSector === sec}
                  onClick={() => setSelectedSector(sec)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedSector === sec
                      ? "bg-primary text-white shadow-sm"
                      : "bg-surface-container text-peace-slate hover:bg-surface-container-high"
                  }`}
                >
                  {sec}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-black text-primary">
                Showing {filteredProjects.length} Selected Interventions
              </h2>
              <p className="text-xs sm:text-sm text-peace-slate mt-1">
                Representative selection from over 150 completed and active projects documented across Somalia since 2004.
              </p>
            </div>
            {(selectedSector !== "All" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedSector("All");
                  setSearchQuery("");
                }}
                className="text-xs font-bold text-action-orange hover:underline cursor-pointer"
              >
                Reset Filters
              </button>
            )}
          </div>

          {filteredProjects.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-border-subtle">
              <p className="text-base font-bold text-primary mb-2">No projects matched your search.</p>
              <p className="text-xs text-peace-slate mb-4">Try searching for a different keyword or resetting the sector filter.</p>
              <button
                onClick={() => {
                  setSelectedSector("All");
                  setSearchQuery("");
                }}
                className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-xl"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-3xl border border-border-subtle p-6 shadow-xs hover:shadow-md hover:border-action-orange/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Top Metadata */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-black font-mono text-peace-slate">
                        PROJECT #{project.id}
                      </span>
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${getSectorBadgeColor(
                          project.sector
                        )}`}
                      >
                        {project.sector}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-primary mb-3 leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-peace-slate leading-relaxed mb-5">
                      {project.activities}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border-subtle/80 space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-peace-slate">
                      <MapPin className="w-3.5 h-3.5 text-action-orange shrink-0" />
                      <span className="font-semibold text-primary">{project.targetArea}</span>
                    </div>
                    <div className="flex items-center gap-2 text-peace-slate">
                      <Calendar className="w-3.5 h-3.5 text-secondary shrink-0" />
                      <span>{project.dates}</span>
                    </div>
                    <div className="flex items-center gap-2 text-peace-slate">
                      <Building2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="truncate">Donor: <strong className="text-primary">{project.fundingAgency}</strong></span>
                    </div>
                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-[11px] text-peace-slate uppercase font-bold tracking-wider">
                        Budget:
                      </span>
                      <span className="text-xs font-black text-primary bg-surface-container px-2 py-0.5 rounded-md">
                        {project.value}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Institutional Track Record CTA */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black mb-2">
              Explore Our Institutional Partnerships
            </h3>
            <p className="text-white/80 text-sm max-w-xl">
              From the World Bank and United Nations clusters to European consortium partners, review our partner ecosystem and fiduciary mechanisms.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 bg-action-orange hover:bg-action-orange-hover text-white text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md"
            >
              <span>View All 30+ Partners</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/stories"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-bold px-6 py-3 rounded-xl transition-all border border-white/20"
            >
              <span>Field Impact Stories</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
