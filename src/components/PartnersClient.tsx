"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SYPD_PARTNERS_LIST } from "@/data/sypdData";
import {
  Handshake,
  ShieldCheck,
  Building2,
  FileCheck2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lock,
  DollarSign,
} from "lucide-react";

export function PartnersClient() {
  const [partnerFilter, setPartnerFilter] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(SYPD_PARTNERS_LIST.map((p) => p.category))),
  ];

  const filteredPartners = SYPD_PARTNERS_LIST.filter((p) => {
    if (partnerFilter === "All") return true;
    return p.category === partnerFilter;
  });

  const budgetAllocation = [
    { pillar: "Climate Resilience, Water & Ecosystems", target: "$3,500,000.00", pct: "24.2%", color: "bg-secondary" },
    { pillar: "Food Security & Agricultural Development", target: "$3,200,000.00", pct: "22.1%", color: "bg-action-orange" },
    { pillar: "Economic Empowerment & TVET", target: "$2,800,000.00", pct: "19.3%", color: "bg-primary" },
    { pillar: "Gender Equality, Social Inclusion & Protection", target: "$2,100,000.00", pct: "14.5%", color: "bg-rose-500" },
    { pillar: "Health and Nutrition Services", target: "$1,600,000.00", pct: "11.0%", color: "bg-teal-600" },
    { pillar: "Stabilization, Governance & Land Rights", target: "$1,286,084.00", pct: "8.9%", color: "bg-tertiary" },
  ];

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
                <span>Multilateral Trust & Institutional Fiduciary Integrity</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
                Partners in <br />
                <span className="text-secondary">Durable Peacebuilding</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light mb-8">
                For two decades, SYPD has served as a trusted implementing partner for the World Bank, United Nations specialized agencies, and leading international development consortia.
              </p>
              <div className="flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-white/80">
                <span className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl">
                  <Handshake className="w-4 h-4 text-secondary" /> 30+ Institutional Partners
                </span>
                <span className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl">
                  <ShieldCheck className="w-4 h-4 text-secondary-fixed" /> Unqualified Audit Records
                </span>
                <span className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl">
                  <DollarSign className="w-4 h-4 text-secondary" /> $14.48M 2024–2028 Target
                </span>
              </div>
            </div>

            {/* Right Upper Corner Thematic Placeholder Card */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-secondary/40 via-action-orange/30 to-white/20 rounded-3xl blur-lg opacity-70" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-white/25 shadow-2xl bg-slate-900/40 backdrop-blur-sm group">
                  <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden">
                    <Image
                      src="/images/youth-workshop.png"
                      alt="SYPD Multilateral & Institutional Partnerships"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      preload={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#021028]/90 via-[#021028]/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-white">
                    <div className="flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-wider mb-1">
                      <Handshake className="w-4 h-4" /> 26 Institutional Partners
                    </div>
                    <div className="text-xs text-white/90 font-medium">
                      World Bank • UN Agencies • Strategic INGOs • Multi-Donor Funds
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Partner Directory */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-action-orange font-bold text-xs uppercase tracking-wider mb-3">
              <Building2 className="w-4 h-4" /> Global Partner Network
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-primary tracking-tight">
              Verified Partners & Funding Agencies
            </h2>
            <p className="mt-4 text-peace-slate leading-relaxed">
              Every partnership reflects joint commitments to localization, community accountability, and strict fiduciary transparency.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={partnerFilter === cat}
                onClick={() => setPartnerFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  partnerFilter === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-surface-container text-peace-slate hover:bg-surface-container-high"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredPartners.map((partner, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800/90 p-5 rounded-2xl border border-border-subtle hover:border-action-orange/60 hover:shadow-lg transition-all flex flex-col items-center text-center justify-between group"
              >
                <div className="h-16 w-full flex items-center justify-center p-2 mb-3 bg-surface-container-low/60 dark:bg-slate-900/60 rounded-xl border border-border-subtle/50 group-hover:border-action-orange/30 transition-all">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={140}
                    height={56}
                    className="max-h-12 max-w-[120px] w-auto h-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-xs"
                  />
                </div>
                <h4 className="text-sm font-bold text-primary mb-1 line-clamp-2">
                  {partner.name}
                </h4>
                <div className="text-[11px] font-semibold text-peace-slate/80 mb-3">
                  {partner.category}
                </div>
                <div className="mt-auto pt-3 border-t border-border-subtle/60 w-full text-[10px] font-bold text-secondary uppercase tracking-wider flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-secondary" /> Verified Partner
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fiduciary & Compliance Safeguards */}
      <section className="py-16 sm:py-20 bg-surface-container-low border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-action-orange font-bold text-xs uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4" /> Integrity by Design
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-primary tracking-tight">
              Fiduciary Safeguards & Compliance Framework
            </h2>
            <p className="mt-4 text-peace-slate leading-relaxed">
              SYPD implements stringent internal controls across every financial transaction, procurement tender, and beneficiary disbursement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-border-subtle shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Independent Annual Audits
              </h3>
              <p className="text-xs sm:text-sm text-peace-slate leading-relaxed mb-4">
                SYPD undergoes statutory annual audits by internationally certified public accountancy firms. All audit reports have resulted in clean, unqualified opinions with zero questioned costs.
              </p>
              <div className="text-xs font-bold text-secondary flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Unqualified Audit Opinions
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-border-subtle shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Anti-Fraud & Zero Tolerance
              </h3>
              <p className="text-xs sm:text-sm text-peace-slate leading-relaxed mb-4">
                Strict whistleblowing, anti-corruption, and conflict-of-interest guidelines protect institutional resources. Dual-authorization protocols govern all bank transactions and mobile cash disbursements.
              </p>
              <div className="text-xs font-bold text-secondary flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Dual-Authorization Protocols
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-border-subtle shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-action-orange/10 flex items-center justify-center text-action-orange mb-6">
                <Handshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Community Accountability (AAP)
              </h3>
              <p className="text-xs sm:text-sm text-peace-slate leading-relaxed mb-4">
                Toll-free hotline desks (+252 61 5522100) and localized complaint boxes ensure beneficiaries can report grievances safely, confidentially, and with mandatory 48-hour response windows.
              </p>
              <div className="text-xs font-bold text-secondary flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> 48-Hour Response Commitment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Plan 2024–2028 Resource Mobilization Target */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 text-action-orange font-bold text-xs uppercase tracking-wider">
                <DollarSign className="w-4 h-4" /> Resource Mobilization
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-primary leading-tight">
                $14,486,084.00 Five-Year Investment Target
              </h2>
              <p className="text-sm text-peace-slate leading-relaxed">
                As detailed in the <em>SYPD Strategic Plan (2024–2028)</em>, our capital target directly underpins long-term infrastructure, irrigation networks, cash graduation, and peacebuilding councils across the 6 CHEFGS pillars.
              </p>
              <div className="p-4 rounded-2xl bg-surface-container border border-border-subtle text-xs text-peace-slate space-y-1">
                <div><strong>Approved by:</strong> Board of Directors & Governance Committee</div>
                <div><strong>Timeline:</strong> 1st January 2024 – 31st December 2028</div>
                <div><strong>Target States:</strong> Hirshabelle, South-West, Jubaland, Galmudug, Banadir</div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-surface-container-low p-6 sm:p-8 rounded-3xl border border-border-subtle">
              <h3 className="text-base font-bold text-primary mb-6 flex items-center justify-between">
                <span>Pillar Budget Allocation Framework</span>
                <span className="text-xs font-mono font-bold text-action-orange">Total: $14,486,084</span>
              </h3>

              <div className="space-y-4">
                {budgetAllocation.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-bold text-primary">
                      <span>{item.pillar}</span>
                      <span className="font-mono">{item.target} ({item.pct})</span>
                    </div>
                    <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color} rounded-full`}
                        style={{ width: item.pct }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Inquiry CTA */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black mb-2">
              Explore Institutional Grants & Consortia
            </h3>
            <p className="text-white/80 text-sm max-w-xl">
              Connect with the Executive Director and Program Secretariat to discuss joint proposals, bilateral funding, or cluster coordination.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-action-orange hover:bg-action-orange-hover text-white text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md"
            >
              <span>Contact Partnership Desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-bold px-6 py-3 rounded-xl transition-all border border-white/20"
            >
              <span>Review Past Projects</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
