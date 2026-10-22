import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { OrganogramChart } from "@/components/OrganogramChart";
import {
  SYPD_KEY_STATS,
  SYPD_CORE_VALUES,
  SYPD_BOARD_MEMBERS,
  SYPD_MANAGEMENT_TEAM,
} from "@/data/sypdData";
import {
  ShieldCheck,
  Target,
  Compass,
  Users,
  Award,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Calendar,
  Building2,
  HeartHandshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us · 22 Years of Grassroots Peacebuilding & Development",
  description: "Learn about SYPD's founding history, governance organogram, core values, and strategic roadmap across Somalia since August 2004.",
  alternates: {
    canonical: "https://sypd.org/about",
  },
};

export default function AboutPage() {
  const sdgs = [
    { number: 1, name: "No Poverty", desc: "Cash transfers & livelihood graduation" },
    { number: 2, name: "Zero Hunger", desc: "Sustainable agriculture & irrigation canals" },
    { number: 3, name: "Good Health & Well-being", desc: "Nutrition & rural healthcare facilities" },
    { number: 5, name: "Gender Equality", desc: "Women's TVET, leadership & GBV prevention" },
    { number: 6, name: "Clean Water & Sanitation", desc: "Solar boreholes & Emwatkit filtration" },
    { number: 8, name: "Decent Work & Economic Growth", desc: "Youth enterprise & technical vocations" },
    { number: 13, name: "Climate Action", desc: "Tree planting, flood dikes & eco-restoration" },
    { number: 16, name: "Peace, Justice & Strong Institutions", desc: "Clan conciliation & HLP land rights" },
  ];

  return (
    <div className="min-h-screen bg-surface-container-lowest pt-20">
      {/* Hero / Header Section */}
      <section className="relative bg-gradient-to-b from-primary via-primary-container to-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-secondary-fixed text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Celebrating 20 Years of Community Resilience (2004 – 2024+)</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
                Rooted in Somali Soil. <br />
                <span className="text-secondary">Built for Enduring Peace.</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light mb-8">
                Founded on 24th August 2004 by local Somali professionals, SYPD is an indigenous, non-governmental, non-profit organization dedicated to grassroots peacebuilding and sustainable development across the Horn of Africa.
              </p>
              <div className="flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-white/80">
                <span className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl">
                  <Calendar className="w-4 h-4 text-secondary" /> Founded: 24th August 2004
                </span>
                <span className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl">
                  <Users className="w-4 h-4 text-secondary" /> 4.3M+ Beneficiaries Reached
                </span>
                <span className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl">
                  <Building2 className="w-4 h-4 text-secondary" /> 9 Area Offices Across 5 States
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
                      alt="SYPD Community Leadership & Peacebuilding"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      preload={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#021028]/90 via-[#021028]/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-white">
                    <div className="flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-wider mb-1">
                      <ShieldCheck className="w-4 h-4" /> 22 Years of Localization
                    </div>
                    <div className="text-xs text-white/90 font-medium">
                      Grassroots Somali Ownership & Community-Led Peace Councils
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 20-Year Evolution & Slogan */}
      <section className="py-16 sm:py-20 border-b border-border-subtle bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-action-orange font-bold text-xs uppercase tracking-wider">
                <Compass className="w-4 h-4" /> Our Institutional Story
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-primary leading-tight">
                Two Decades of Working With, Not For, Somali Communities
              </h2>
              <p className="text-peace-slate leading-relaxed">
                SYPD was conceived during one of the most volatile humanitarian epochs in Somalia&apos;s history. While foreign humanitarian assistance was often centralized and transient, our founders recognized that durable stability could only emerge through <strong>unconditional local ownership</strong>, genuine communal consensus, and long-term socio-economic foundations.
              </p>
              <p className="text-peace-slate leading-relaxed">
                Over the past 20 years, SYPD has grown from an emergency relief response team in Hiraan into a formidable national development and peacebuilding actor managing over <strong>$30 Million</strong> across <strong>150+ multi-sectoral projects</strong> in more than <strong>71 districts</strong> across Hirshabelle, South-West, Jubaland, Galmudug, and Banadir.
              </p>
              <div className="p-6 rounded-2xl bg-surface-container border border-border-subtle">
                <p className="text-sm italic font-medium text-primary leading-relaxed">
                  &ldquo;Community-led. Locally rooted. Built to last. SYPD does not impose external solutions. We sit beneath the acacia trees with elders, women, and youth to co-design peace and cultivate long-term self-reliance.&rdquo;
                </p>
                <div className="mt-3 text-xs font-bold text-action-orange uppercase tracking-wider">
                  — SYPD Institutional Charter & Strategic Plan (2024–2028)
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-surface-container p-6 rounded-2xl border border-border-subtle flex flex-col justify-between">
                <div className="text-3xl font-black text-primary mb-2">2004</div>
                <div className="text-xs font-semibold text-peace-slate">
                  Established by local Somali professionals in Mogadishu & Hiraan
                </div>
              </div>
              <div className="bg-surface-container p-6 rounded-2xl border border-border-subtle flex flex-col justify-between">
                <div className="text-3xl font-black text-action-orange mb-2">4.3M+</div>
                <div className="text-xs font-semibold text-peace-slate">
                  Lives directly impacted through relief, water, cash, and education
                </div>
              </div>
              <div className="bg-surface-container p-6 rounded-2xl border border-border-subtle flex flex-col justify-between">
                <div className="text-3xl font-black text-secondary mb-2">150+</div>
                <div className="text-xs font-semibold text-peace-slate">
                  Verified projects implemented with UN, World Bank, and INGO partners
                </div>
              </div>
              <div className="bg-surface-container p-6 rounded-2xl border border-border-subtle flex flex-col justify-between">
                <div className="text-3xl font-black text-tertiary mb-2">Zero</div>
                <div className="text-xs font-semibold text-peace-slate">
                  Fiduciary defaults or donor audit discrepancies in 20 years of operations
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-border-subtle shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-action-orange transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-primary mb-4">Our Vision</h3>
                <p className="text-base text-peace-slate leading-relaxed">
                  A peaceful, prosperous, and resilient Somalia where communities actively steer their own sustainable development, live in harmony, and thrive in ecological balance.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-border-subtle flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-action-orange" />
                Durable Peace & Self-Reliance
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-border-subtle shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-secondary transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-primary mb-4">Our Mission</h3>
                <p className="text-base text-peace-slate leading-relaxed">
                  To empower vulnerable Somali communities by fostering grassroots reconciliation, implementing climate-resilient water and agricultural infrastructure, championing gender equality, and driving inclusive economic livelihoods through principled, community-led initiatives.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-border-subtle flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                Principled Grassroots Action
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INCISD Core Values */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-action-orange font-bold text-xs uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4" /> The INCISD Framework
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-primary tracking-tight">
              Our Core Guiding Values
            </h2>
            <p className="mt-4 text-peace-slate leading-relaxed">
              Every staff member, field engineer, and community mobilizer at SYPD operates under the non-negotiable INCISD ethical code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SYPD_CORE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="bg-surface-container p-6 rounded-2xl border border-border-subtle hover:border-primary/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white font-black text-lg flex items-center justify-center group-hover:bg-action-orange transition-colors">
                    {val.letter}
                  </div>
                  <span className="text-xs font-bold text-peace-slate dark:text-slate-400 uppercase tracking-widest">
                    Value 0{idx + 1}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-primary mb-2 group-hover:text-action-orange transition-colors">
                  {val.title}
                </h4>
                <p className="text-sm text-peace-slate leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Leadership Structure (Hierarchical Organogram) */}
      <section className="py-16 sm:py-20 bg-surface-container-low border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-action-orange font-bold text-xs uppercase tracking-wider mb-3">
              <Users className="w-4 h-4" /> Rigorous Governance & Management
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-primary tracking-tight">
              Official Organizational Structure
            </h2>
            <p className="mt-4 text-peace-slate leading-relaxed">
              SYPD operates under strict fiduciary, operational, and ethical firewalls separating board governance oversight from executive program delivery, structured directly in accordance with the <em>SYPD Strategic Plan (2024–2028)</em> and <em>Organization Profile</em>.
            </p>
          </div>

          {/* Dedicated Interactive Organogram Tree Chart */}
          <OrganogramChart />
        </div>
      </section>

      {/* Theory of Change & UN SDGs */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-action-orange font-bold text-xs uppercase tracking-wider mb-3">
              <Target className="w-4 h-4" /> Global Alignment
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-primary tracking-tight">
              Aligned with UN Sustainable Development Goals
            </h2>
            <p className="mt-4 text-peace-slate leading-relaxed">
              SYPD&apos;s 2024–2028 Strategic Plan harmonizes grassroots Somali priorities directly with international 2030 Agenda targets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdgs.map((sdg) => (
              <div
                key={sdg.number}
                className="bg-surface-container-low p-6 rounded-2xl border border-border-subtle flex flex-col justify-between hover:border-action-orange/50 transition-all"
              >
                <div>
                  <div className="text-2xl font-black text-primary mb-2">
                    SDG #{sdg.number}
                  </div>
                  <h4 className="text-sm font-bold text-primary mb-2">
                    {sdg.name}
                  </h4>
                  <p className="text-xs text-peace-slate leading-relaxed">
                    {sdg.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border-subtle text-[11px] font-semibold text-secondary flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Direct Field Intervention
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black mb-2">
              Explore Our Strategic Pillars
            </h3>
            <p className="text-white/80 text-sm max-w-xl">
              Discover how our CHEFGS roadmap drives measurable impact across climate, nutrition, economy, agriculture, protection, and governance.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 bg-action-orange hover:bg-action-orange-hover text-white text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md"
            >
              <span>View 6 CHEFGS Pillars</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-bold px-6 py-3 rounded-xl transition-all border border-white/20"
            >
              <span>Field Desk</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
