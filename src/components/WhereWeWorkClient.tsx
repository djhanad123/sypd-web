"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SomaliaMap } from "@/components/SomaliaMap";
import { SYPD_AREA_OFFICES } from "@/data/sypdData";
import {
  MapPin,
  Building2,
  Navigation,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Globe2,
  PhoneCall,
  Flame,
} from "lucide-react";

export function WhereWeWorkClient() {
  const [selectedOfficeId, setSelectedOfficeId] = useState<string>("mogadishu");

  const stateSummaries = [
    {
      state: "Hirshabelle State",
      regions: "Hiraan & Middle Shabelle",
      officesCount: 7,
      offices: "Beledweyne, Buulo-Burte, Jalalaqsi, Matabaan, Mahaas, Jowhar, Bal'ad",
      focus: "Shabelle riverine irrigation, flood protection dikes, Emwatkit water purifiers at El-Jaale, canal rehabilitation, and goat restocking.",
      color: "border-secondary/50",
    },
    {
      state: "South-West State",
      regions: "Bay & Bakool",
      officesCount: 1,
      offices: "Baidoa Area Office (serving Bay, Bakool, and IDP settlements)",
      focus: "Multipurpose cash transfers, communal VIP latrine networks, shallow well rehabilitation, nutrition screening, and women TVET centers.",
      color: "border-primary/50",
    },
    {
      state: "Jubaland State",
      regions: "Gedo, Lower Juba & Middle Juba",
      officesCount: 1,
      offices: "Balad-Hawo Area Office (borderland hub)",
      focus: "Cross-border peace conciliation, drought mitigation, pastoralist livestock assets, and social cohesion forums.",
      color: "border-teal-500/50",
    },
    {
      state: "Galmudug State",
      regions: "Galgaduud & Mudug",
      officesCount: 1,
      offices: "Field Response Corridor (coordinated via Matabaan/Mahaas)",
      focus: "Inter-clan mediation under acacia trees, communal water point governance, and emergency response.",
      color: "border-tertiary/50",
    },
    {
      state: "Banadir Region",
      regions: "Mogadishu Metropolitan",
      officesCount: 1,
      offices: "Mogadishu National Headquarters (Waberi District)",
      focus: "National strategic governance, CGI transitional shelter (e.g. Rajo Camp), Youth Movement for Democracy clubs, and urban cash aid.",
      color: "border-action-orange",
    },
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
                <span>National Field Operations & Geographic Reach</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
                Operating Across 5 States, <br />
                <span className="text-secondary">9 Area Offices & 71+ Districts</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light mb-8">
                From riverine farming communities along the Shabelle to IDP settlements in Baidoa and pastoral borderlands in Gedo, SYPD maintains an unyielding local presence on the frontlines.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="bg-white/10 p-3.5 rounded-2xl backdrop-blur-xs">
                  <div className="text-2xl sm:text-3xl font-black text-secondary-fixed">9</div>
                  <div className="text-[11px] text-white/80 font-medium mt-1">Area Field Offices</div>
                </div>
                <div className="bg-white/10 p-3.5 rounded-2xl backdrop-blur-xs">
                  <div className="text-2xl sm:text-3xl font-black text-secondary-fixed">5 + 1</div>
                  <div className="text-[11px] text-white/80 font-medium mt-1">States + Banadir</div>
                </div>
                <div className="bg-white/10 p-3.5 rounded-2xl backdrop-blur-xs">
                  <div className="text-2xl sm:text-3xl font-black text-secondary-fixed">71+</div>
                  <div className="text-[11px] text-white/80 font-medium mt-1">Districts Covered</div>
                </div>
                <div className="bg-white/10 p-3.5 rounded-2xl backdrop-blur-xs">
                  <div className="text-2xl sm:text-3xl font-black text-secondary-fixed">4.3M+</div>
                  <div className="text-[11px] text-white/80 font-medium mt-1">Lives Impacted</div>
                </div>
              </div>
            </div>

            {/* Right Thematic Illustration Card */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-secondary/40 via-action-orange/30 to-white/20 rounded-3xl blur-lg opacity-70" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-white/25 shadow-2xl bg-slate-900/40 backdrop-blur-sm group">
                  <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden">
                    <Image
                      src="/images/hero-poster.webp"
                      alt="SYPD Field Operations and Community Outreach"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      preload={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#021028]/90 via-[#021028]/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-white">
                    <div className="flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-wider mb-1">
                      <Globe2 className="w-4 h-4" /> 9 Strategic Field Hubs
                    </div>
                    <div className="text-xs text-white/90 font-medium">
                      Beledweyne • Baidoa • Jowhar • Buulo-Burte • Jalalaqsi • Matabaan • Mahaas • Bal&apos;ad • Balad-Hawo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Somalia Vector Map */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-action-orange font-bold text-xs uppercase tracking-wider mb-3">
              <Navigation className="w-4 h-4" /> Live Operational Map
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-primary tracking-tight">
              Interactive Map of SYPD Operating Areas
            </h2>
            <p className="mt-3 text-peace-slate text-sm sm:text-base leading-relaxed">
              Click any pin on the map or select an office below to inspect field teams, regional focus areas, and key programmatic infrastructure.
            </p>
          </div>

          <SomaliaMap
            selectedOfficeId={selectedOfficeId}
            onSelectOffice={(off) => setSelectedOfficeId(off.id)}
          />
        </div>
      </section>

      {/* State-by-State Operational Breakdown */}
      <section className="py-16 sm:py-20 bg-surface-container-low border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-action-orange font-bold text-xs uppercase tracking-wider mb-3">
              <Globe2 className="w-4 h-4" /> Regional Decentralization
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-primary tracking-tight">
              State-by-State Strategic Footprint
            </h2>
            <p className="mt-3 text-peace-slate text-sm leading-relaxed">
              SYPD does not operate by remote management from external capitals. We maintain permanent, fully staffed field offices embedded directly with the beneficiary communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stateSummaries.map((st, idx) => (
              <div
                key={idx}
                className={`bg-white p-7 rounded-3xl border-2 shadow-xs flex flex-col justify-between ${st.color} hover:shadow-md transition-all`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-action-orange">
                      {st.regions}
                    </span>
                    <span className="text-xs font-black px-2.5 py-1 rounded-full bg-surface-container text-primary">
                      {st.officesCount} {st.officesCount === 1 ? "Office" : "Offices"}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-primary mb-2">
                    {st.state}
                  </h3>
                  <div className="text-xs font-semibold text-peace-slate/80 mb-4">
                    Key Nodes: {st.offices}
                  </div>
                  <p className="text-xs text-peace-slate leading-relaxed">
                    {st.focus}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-bold text-primary">
                  <span className="flex items-center gap-1 text-secondary">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Active Operations
                  </span>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-1 text-action-orange hover:underline"
                  >
                    <span>View Projects</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directory of All 9 Area Offices + HQ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-action-orange font-bold text-xs uppercase tracking-wider mb-3">
              <Building2 className="w-4 h-4" /> Comprehensive Network
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-primary tracking-tight">
              Directory of Area Offices & Field Bases
            </h2>
            <p className="mt-3 text-peace-slate text-sm leading-relaxed">
              Official operating bases registered under the Federal Ministry of Interior and Federal Member State authorities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SYPD_AREA_OFFICES.map((office) => (
              <div
                key={office.id}
                className="bg-surface-container-low p-6 rounded-2xl border border-border-subtle hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-action-orange uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5" />
                      {office.type}
                    </span>
                    <span className="text-[11px] font-semibold text-peace-slate bg-white px-2 py-0.5 rounded-md border border-border-subtle">
                      {office.region}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-1">
                    {office.name}
                  </h3>
                  <div className="text-xs font-semibold text-secondary mb-3">
                    {office.state}
                  </div>
                  <p className="text-xs text-peace-slate leading-relaxed mb-4">
                    {office.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border-subtle/80 text-[11px] text-peace-slate space-y-1">
                  <div>
                    <span className="font-bold text-primary">Interventions: </span>
                    <span>{office.keyInterventions}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Response Spotlight */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-action-orange text-white text-xs font-bold uppercase tracking-wider mb-3">
              <Flame className="w-3.5 h-3.5" />
              <span>Rapid Emergency Response Capacity</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black mb-2">
              Ready to Deploy Within 24–48 Hours
            </h3>
            <p className="text-white/80 text-sm max-w-xl">
              With pre-positioned emergency water treatment units (Emwatkit in Beledweyne), standby cash transfer platforms, and community emergency rosters, SYPD responds rapidly to sudden onset flood and drought shocks.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-action-orange hover:bg-action-orange-hover text-white text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact Field Response</span>
            </Link>
            <Link
              href="/stories"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-bold px-6 py-3 rounded-xl transition-all border border-white/20"
            >
              <span>Field Stories</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
