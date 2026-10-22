import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SYPD_REAL_STORIES } from "@/data/sypdData";
import FieldGalleryShowcase from "@/components/FieldGalleryShowcase";
import {
  Quote,
  MapPin,
  Heart,
  Sparkles,
  ArrowRight,
  Handshake,
  CheckCircle2,
  Camera,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Field Stories & Community Voices · Direct Humanitarian Dispatches",
  description: "Authentic beneficiary testimonials and photo dispatches from Baidoa, Beledweyne, and riverine farming communities across Somalia.",
  alternates: {
    canonical: "https://sypd.org/stories",
  },
};

export default function StoriesPage() {
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
                <span>Voices from the Frontlines</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
                Stories of Hope, <br />
                <span className="text-secondary">Resilience & Renewal</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light mb-8">
                Behind every project metric are real Somali families reclaiming their dignity, rebuilding livelihoods after climate disasters, and cultivating peaceful communities.
              </p>
              <div className="flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-white/80">
                <span className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl">
                  <Heart className="w-4 h-4 text-secondary" /> Direct Community Testimonials
                </span>
                <span className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl">
                  <Sparkles className="w-4 h-4 text-secondary-fixed" /> Verified Case Studies
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
                      src="/images/story-amina.webp"
                      alt="Amina Adan Hassan - Story of Resilience"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      preload={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#021028]/90 via-[#021028]/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-white">
                    <div className="flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-wider mb-1">
                      <Heart className="w-4 h-4" /> Voices of Resilience
                    </div>
                    <div className="text-xs text-white/90 font-medium">
                      Grassroots Testimonials from Baidoa, Beledweyne & Beyond
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-action-orange font-bold text-xs uppercase tracking-wider mb-3">
              <Heart className="w-4 h-4" /> Field Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-primary tracking-tight">
              Direct Beneficiary Testimonials
            </h2>
            <p className="mt-4 text-peace-slate leading-relaxed">
              Authentic field dispatches documented in cooperation with humanitarian partners Diakonie Katastrophenhilfe (DKH) and Welthungerhilfe (WHH).
            </p>
          </div>

          <div className="space-y-16">
            {SYPD_REAL_STORIES.map((story, idx) => (
              <div
                key={story.id}
                className={`bg-surface-container-low rounded-3xl border border-border-subtle p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image & Location Badge */}
                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-lg border border-border-subtle/80 bg-surface-container">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-lg font-black">{story.name}, {story.age}</div>
                      <div className="text-xs text-white/90 flex items-center gap-1.5 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-action-orange" />
                        <span>{story.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Story Content */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-xs font-bold text-secondary">
                    <Handshake className="w-3.5 h-3.5" />
                    <span>Partner: {story.partner}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-primary leading-tight">
                    {story.title}
                  </h3>

                  <p className="text-sm font-semibold text-action-orange">
                    {story.summary}
                  </p>

                  <p className="text-sm text-peace-slate leading-relaxed">
                    {story.story}
                  </p>

                  <div className="p-5 rounded-2xl bg-white border border-border-subtle relative mt-4">
                    <Quote className="w-6 h-6 text-action-orange/40 mb-2" />
                    <p className="text-sm font-medium italic text-primary leading-relaxed">
                      &ldquo;{story.quote}&rdquo;
                    </p>
                    <div className="mt-2 text-xs font-bold text-peace-slate text-right">
                      — {story.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive 25-Group Field Dispatch Photo Showcase */}
      <FieldGalleryShowcase />

      {/* CTA Strip */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black mb-2">
              Be Part of Somalia&apos;s Lasting Transformation
            </h3>
            <p className="text-white/80 text-sm max-w-xl">
              Support grassroots families with cash transfers, clean water, and agricultural self-reliance.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-action-orange hover:bg-action-orange-hover text-white text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-bold px-6 py-3 rounded-xl transition-all border border-white/20"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
