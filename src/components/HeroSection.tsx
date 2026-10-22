"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, BarChart3, Users, Sparkles, Play, Pause } from "lucide-react";

export const HeroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#021028] text-white min-h-[700px] lg:min-h-[780px] flex items-center pt-28 pb-16">
      {/* Cinematic Background Video without Sound & WebP */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-poster.webp"
          className="w-full h-full object-cover object-center opacity-65 scale-105 transition-transform duration-1000"
        >
          <source src="/videos/hero-video.webm" type="video/webm" />
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Deep Navy Scrim: High contrast, crystal clear text legibility, never washed out */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#021028]/95 via-[#021028]/75 to-transparent backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021028] via-transparent to-[#021028]/40" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20 w-full">
        {/* Mission & Narrative Column */}
        <div className="max-w-3xl flex flex-col gap-6 text-left">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full w-fit border border-white/15 animate-hero-fade-1">
            <Sparkles className="w-3.5 h-3.5 text-secondary-fixed shrink-0" />
            <span className="text-xs tracking-wider text-white uppercase font-bold">
              22 Years of Community Resilience · Est. Aug 24, 2004
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl text-white font-extrabold tracking-tight leading-[1.12] drop-shadow-md animate-hero-fade-2">
            Fostering Peace, Empowering Youth, Building Resilient Communities.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed animate-hero-fade-3 max-w-2xl">
            Founded by local Somali professionals, SYPD is an indigenous, non-profit organization dedicated to grassroots peacebuilding, climate-resilient water infrastructure, sustainable agriculture, and economic inclusion across Southern and Central Somalia.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2 animate-hero-fade-4">
            <Link
              href="/about"
              className="inline-flex items-center justify-center bg-action-orange hover:bg-action-orange-hover text-white text-sm sm:text-base font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 cta-glow-hover cursor-pointer group"
            >
              <span>About Our 22-Year Journey</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/programs"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-semibold px-7 py-3.5 rounded-xl backdrop-blur-sm transition-all transform hover:-translate-y-0.5 border border-white/15 group"
            >
              <span>Explore Strategic Programs</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Trust Mini Badges (Non-truncating on 375px mobile) */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-6 pt-4 text-white/80 text-xs sm:text-sm animate-hero-fade-5 border-t border-white/10 max-w-2xl">
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <ShieldCheck className="w-4 h-4 text-secondary-fixed shrink-0" />
              <span>Registered National NGO</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <BarChart3 className="w-4 h-4 text-secondary-fixed shrink-0" />
              <span>Independently Audited</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Users className="w-4 h-4 text-secondary-fixed shrink-0" />
              <span>100% Local Delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Accessible Video Play/Pause Control (WCAG 2.2.2 Pause, Stop, Hide) */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause background video" : "Play background video"}
        className="absolute bottom-5 right-5 z-20 p-2.5 rounded-full bg-black/50 hover:bg-black/70 text-white/80 hover:text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </button>
    </section>
  );
};
