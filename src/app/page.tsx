import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";
import { TrustAndMetricsStrip } from "@/components/TrustAndMetricsStrip";
import { FinalCTA } from "@/components/FinalCTA";
import { SYPD_PARTNERS_LIST } from "@/data/sypdData";
import {
  Compass,
  Layers,
  MapPin,
  FolderKanban,
  Heart,
  Handshake,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SYPD · Sustainable Development & Peace Building Initiatives Somalia",
  description: "Fostering Peace, Empowering Youth, Building Resilient Communities across Somalia since 2004. 150+ verifiable projects across 71+ districts.",
  alternates: {
    canonical: "https://sypd.org",
  },
};

export default function HomePage() {
  const gatewayPortals = [
    {
      title: "22-Year Evolution & Leadership",
      category: "About Us",
      badge: "Institutional Profile",
      description: "Founded on 24th August 2004. Explore our 22-year history of localization, INCISD core values, and our 4-tier governance organogram.",
      href: "/about",
      actionText: "Explore About Us & Organogram",
      image: "/images/youth-workshop.png",
      icon: Compass,
      tag: "Governance & Charter",
    },
    {
      title: "6 CHEFGS Strategic Pillars",
      category: "Strategic Programs",
      badge: "2024–2028 Framework",
      description: "Interventions across Climate Resilience, Health & Nutrition, TVET, Food Security, Gender & Protection, and Stabilization.",
      href: "/programs",
      actionText: "Explore 6 CHEFGS Pillars",
      image: "/images/irrigation-hub.png",
      icon: Layers,
      tag: "Resource Target: $14.48M",
    },
    {
      title: "Somalia Operational Footprint",
      category: "Where We Work",
      badge: "9 Area Offices",
      description: "Operating across 4 Federal Member States & Banadir Regional Administration with 9 strategic area field desks from Beledweyne to Baidoa.",
      href: "/where-we-work",
      actionText: "Launch Interactive Map & Hubs",
      image: "/images/hero-poster.webp",
      icon: MapPin,
      tag: "4 States + Banadir",
    },
    {
      title: "150+ Verified Project Deliveries",
      category: "Project Portfolio",
      badge: "$30M+ Managed",
      description: "Representative portfolio of selected interventions from over 150 humanitarian and development projects implemented with zero unqualified audit discrepancies across 71+ districts.",
      href: "/projects",
      actionText: "Browse Project Portfolio",
      image: "/images/story-hassan.webp",
      icon: FolderKanban,
      tag: "71+ Districts Covered",
    },
    {
      title: "Voices from the Frontlines",
      category: "Field Stories",
      badge: "4.3M+ Reached",
      description: "Authentic beneficiary case studies and photo dispatches from Amina in Baidoa, Hassan in Beledweyne, and riverine agripreneurs.",
      href: "/stories",
      actionText: "Read Field Stories & Testimonials",
      image: "/images/story-amina.webp",
      icon: Heart,
      tag: "Humanitarian Impact",
    },
    {
      title: "30+ Institutional Donors & Audits",
      category: "Partners & Donors",
      badge: "Clean Audits",
      description: "Trusted by the World Bank, United Nations specialized agencies, and leading INGO consortia with strict fiduciary transparency.",
      href: "/partners",
      actionText: "View 30+ Partners & Audits",
      image: "/images/youth-workshop.png",
      icon: Handshake,
      tag: "Verified Accountability",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Gateway with 20-Year Milestone & Background Video */}
      <HeroSection />

      {/* 2. Key Verified Metrics Strip */}
      <TrustAndMetricsStrip />

      {/* 3. Executive Portal Gateway (Navigation Hub) */}
      <section className="py-16 sm:py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/5 dark:bg-white/10 text-action-orange text-xs font-bold uppercase tracking-wider mb-4 border border-action-orange/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore The Platform</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary tracking-tight">
              A Complete Portal Into <br />
              <span className="text-action-orange">SYPD&apos;s National Operations</span>
            </h2>
            <p className="mt-4 text-peace-slate text-base sm:text-lg leading-relaxed">
              Navigate into our dedicated sections for comprehensive documentation, operational data, live interactive maps, and audited project records.
            </p>
          </div>

          {/* 6 Gateway Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {gatewayPortals.map((portal, idx) => {
              const IconComp = portal.icon;
              return (
                <Link
                  key={idx}
                  href={portal.href}
                  className="group bg-white dark:bg-slate-800/90 rounded-3xl border border-border-subtle hover:border-action-orange/60 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden text-left"
                >
                  {/* Thumbnail Image Header */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={portal.image}
                      alt={portal.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#021028]/90 via-[#021028]/30 to-transparent" />

                    {/* Top Tag & Badge */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-[11px] font-bold uppercase tracking-wider">
                        <IconComp className="w-3.5 h-3.5 text-secondary" />
                        {portal.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-action-orange text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        {portal.badge}
                      </span>
                    </div>

                    {/* Bottom Metadata Tag */}
                    <div className="absolute bottom-3 left-4 text-xs font-semibold text-secondary-fixed flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{portal.tag}</span>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-primary group-hover:text-action-orange transition-colors">
                        {portal.title}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm text-peace-slate leading-relaxed">
                        {portal.description}
                      </p>
                    </div>

                    {/* Action Link Footer */}
                    <div className="mt-6 pt-4 border-t border-border-subtle/60 flex items-center justify-between text-xs font-bold text-primary group-hover:text-action-orange transition-colors">
                      <span>{portal.actionText}</span>
                      <div className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-action-orange group-hover:text-white transition-all">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Infinite Rolling Institutional Partner Marquee (Right to Left) */}
      <section className="w-full py-12 bg-white dark:bg-slate-900 border-y border-border-subtle/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-action-orange font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Institutional Trust & Audited Delivery</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-primary mt-1">
                Verified Implementing & Funding Partners
              </h2>
            </div>
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-action-orange transition-colors shrink-0 bg-surface-container-low dark:bg-slate-800 px-4 py-2 rounded-xl border border-border-subtle hover:border-action-orange"
            >
              <span>Explore All 26 Partners & Audits</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Marquee Track with Left & Right Gradient Fade Masks */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Gradient Masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10" />

          {/* Rolling Track (Right to Left via animate-marquee) */}
          <div className="animate-marquee flex gap-4 items-center pl-4">
            {SYPD_PARTNERS_LIST.map((p, idx) => (
              <Link
                key={`p-primary-${idx}`}
                href="/partners"
                title={`${p.name} (${p.category})`}
                className="h-20 w-44 sm:w-48 shrink-0 bg-surface-container-low/60 dark:bg-slate-800/80 px-4 py-2.5 rounded-2xl border border-border-subtle hover:border-action-orange hover:shadow-md transition-all flex flex-col items-center justify-center gap-1.5 group cursor-pointer"
              >
                <div className="h-9 w-full flex items-center justify-center">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={110}
                    height={38}
                    className="max-h-8 max-w-[105px] w-auto h-auto object-contain transition-transform group-hover:scale-110 filter drop-shadow-xs"
                  />
                </div>
                <span className="text-[10px] font-bold text-primary truncate max-w-full text-center">
                  {p.name}
                </span>
              </Link>
            ))}
            {/* Duplicate track for seamless infinite scroll - hidden from screen reader and keyboard tab navigation */}
            {SYPD_PARTNERS_LIST.map((p, idx) => (
              <Link
                key={`p-dup-${idx}`}
                href="/partners"
                tabIndex={-1}
                aria-hidden="true"
                title={`${p.name} (${p.category})`}
                className="h-20 w-44 sm:w-48 shrink-0 bg-surface-container-low/60 dark:bg-slate-800/80 px-4 py-2.5 rounded-2xl border border-border-subtle hover:border-action-orange hover:shadow-md transition-all flex flex-col items-center justify-center gap-1.5 group cursor-pointer"
              >
                <div className="h-9 w-full flex items-center justify-center">
                  <Image
                    src={p.logo}
                    alt=""
                    width={110}
                    height={38}
                    className="max-h-8 max-w-[105px] w-auto h-auto object-contain transition-transform group-hover:scale-110 filter drop-shadow-xs"
                  />
                </div>
                <span className="text-[10px] font-bold text-primary truncate max-w-full text-center">
                  {p.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final Liaison & Accountability Desk Call to Action */}
      <FinalCTA />
    </div>
  );
}
