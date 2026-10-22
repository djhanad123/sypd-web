"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  GalleryProject,
  SYPD_FIELD_GALLERY,
} from "@/data/galleryData";
import { SqueezeCarousel, SqueezeSlide } from "@/components/ui/carousel-squeeze";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  MapPin,
  Handshake,
  Camera,
  Search,
  CheckCircle2,
  Layers,
  RotateCw,
} from "lucide-react";

export default function FieldGalleryShowcase() {
  const [selectedSector, setSelectedSector] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(6);

  // Lightbox state for high-resolution single-photo inspection
  const [lightboxProject, setLightboxProject] = useState<GalleryProject | null>(null);
  const [lightboxPhotoIndex, setLightboxPhotoIndex] = useState<number>(0);

  // Reset pagination when filter criteria changes
  useEffect(() => {
    setVisibleCount(6);
  }, [selectedSector, searchQuery]);

  // Sector list with counts
  const sectors = [
    { label: "All Dispatches", value: "All" },
    { label: "Food Security & Agriculture", value: "Food Security & Agriculture" },
    { label: "Emergency & Floods", value: "Emergency & Floods" },
    { label: "Clean Water & Sanitation (WASH)", value: "Clean Water & Sanitation (WASH)" },
    { label: "Livelihoods & Education", value: "Livelihoods & Education" },
  ];

  const filteredProjects = useMemo(() => {
    return SYPD_FIELD_GALLERY.filter((item) => {
      const matchesSector =
        selectedSector === "All" || item.sector === selectedSector;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.partner.toLowerCase().includes(q) ||
        item.context.toLowerCase().includes(q) ||
        item.id.toLowerCase().includes(q);
      return matchesSector && matchesQuery;
    });
  }, [selectedSector, searchQuery]);

  const displayedProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  const openLightbox = (project: GalleryProject, initialIndex: number = 0) => {
    setLightboxProject(project);
    setLightboxPhotoIndex(initialIndex);
  };

  const closeLightbox = useCallback(() => {
    setLightboxProject(null);
  }, []);

  const nextLightboxPhoto = useCallback(() => {
    setLightboxProject((curr) => {
      if (!curr) return null;
      setLightboxPhotoIndex((prev) => (prev + 1) % curr.photos.length);
      return curr;
    });
  }, []);

  const prevLightboxPhoto = useCallback(() => {
    setLightboxProject((curr) => {
      if (!curr) return null;
      setLightboxPhotoIndex(
        (prev) => (prev - 1 + curr.photos.length) % curr.photos.length
      );
      return curr;
    });
  }, []);

  useEffect(() => {
    if (!lightboxProject) return;

    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        nextLightboxPhoto();
      } else if (e.key === "ArrowLeft") {
        prevLightboxPhoto();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxProject, closeLightbox, nextLightboxPhoto, prevLightboxPhoto]);

  // Convert project photos into SqueezeSlide[] format for SqueezeCarousel
  const getProjectSqueezeSlides = (project: GalleryProject): SqueezeSlide[] => {
    return project.photos.map((url, idx) => ({
      id: `${project.id}-photo-${idx + 1}`,
      title: `${project.location} Verification`,
      description: `Photo ${String(idx + 1).padStart(2, "0")} of ${project.photos.length} · Verified Field Dispatch in partnership with ${project.partner}.`,
      image: url,
      imageAlt: `${project.title} - Photo ${idx + 1}`,
      overlay: (
        <span className="text-xs font-bold tracking-wider text-white uppercase bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
          {project.id} &bull; Photo {String(idx + 1).padStart(2, "0")}
        </span>
      ),
      action: "Inspect Photo",
      onAction: () => openLightbox(project, idx),
    }));
  };

  const getSectorBadgeClasses = (sector: string) => {
    switch (sector) {
      case "Food Security & Agriculture":
        return "bg-emerald-50 text-emerald-800 border-emerald-200/80";
      case "Emergency & Floods":
        return "bg-rose-50 text-rose-800 border-rose-200/80";
      case "Clean Water & Sanitation (WASH)":
        return "bg-sky-50 text-sky-800 border-sky-200/80";
      case "Livelihoods & Education":
        return "bg-teal-50 text-teal-800 border-teal-200/80";
      default:
        return "bg-slate-50 text-slate-800 border-slate-200/80";
    }
  };

  return (
    <section className="py-20 bg-surface-container-low border-t border-border-subtle" id="field-gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/5 border border-primary/15 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5 text-secondary" />
            <span>Field Photographic Evidence & Verification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary tracking-tight">
            25 Field Interventions in Pictures
          </h2>
          <p className="mt-4 text-base sm:text-lg text-peace-slate leading-relaxed">
            Every humanitarian intervention is verified and documented on the ground across Beledweyne, Baidoa, Balcad, and rural riverine villages. Explore all 25 field project groups in interactive accordion photo showcases—hover or click any slat to expand, and inspect full-resolution verification photos.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-border-subtle shadow-xs mb-10 space-y-4">
          {/* Sector Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {sectors.map((sec) => {
              const count =
                sec.value === "All"
                  ? SYPD_FIELD_GALLERY.length
                  : SYPD_FIELD_GALLERY.filter((p) => p.sector === sec.value).length;
              const isSelected = selectedSector === sec.value;

              return (
                <button
                  key={sec.value}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedSector(sec.value)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-primary text-white shadow-md shadow-primary/20 scale-[1.02]"
                      : "bg-surface-container-lowest text-peace-slate hover:bg-surface-container border border-border-subtle"
                  }`}
                >
                  <span>{sec.label}</span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-black ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-surface-container text-peace-slate"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input & Live Count */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-border-subtle">
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-peace-slate absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by district, village, partner (WHH, DKH, Norad)..."
                aria-label="Search dispatches by district, village, or partner"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-surface-container-lowest border border-border-subtle focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary transition-all text-primary placeholder:text-peace-slate/60"
              />
              {searchQuery && (
                <button
                  type="button"
                  aria-label="Clear search query"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-peace-slate hover:text-primary text-xs cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="text-xs font-semibold text-peace-slate self-start sm:self-auto flex items-center gap-2">
              <span>Showing <strong className="text-primary font-bold">{Math.min(visibleCount, filteredProjects.length)}</strong> of {filteredProjects.length} dispatches</span>
              <span className="text-peace-slate/40">&bull;</span>
              <span className="text-secondary font-bold">10 verified field photos per group</span>
            </div>
          </div>
        </div>

        {/* Gallery Cards List (Groups G1 through G25 - Paginated) */}
        <div className="space-y-12 sm:space-y-16">
          {displayedProjects.map((project) => {
            const squeezeSlides = getProjectSqueezeSlides(project);

            return (
              <div
                key={project.id}
                className="bg-white rounded-3xl border border-border-subtle shadow-xs hover:shadow-md transition-all overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                {/* Left Column: Squeeze Accordion Slider Box (7 cols) */}
                <div className="lg:col-span-7 relative w-full h-[460px] sm:h-[500px] lg:h-[530px] overflow-hidden bg-gradient-to-b from-[#020d20] via-[#051c3d] to-[#020d20] select-none flex flex-col justify-between p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-border-subtle">
                  {/* Subtle Atmospheric Spotlight */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,163,224,0.12)_0%,rgba(7,67,140,0.06)_45%,transparent_75%)] pointer-events-none" />

                  {/* Top Bar inside Left Slider Box */}
                  <div className="relative flex items-center justify-between gap-2 z-20 mb-2">
                    <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] sm:text-xs font-semibold border border-white/15 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-pulse" />
                      <span className="text-white/90">Hover slat to widen &bull; Squeeze Accordion</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-white/80 text-[11px] sm:text-xs font-medium border border-white/15 shadow-md">
                      <Camera className="w-3.5 h-3.5 text-[#00A3E0]" />
                      <span>10 Photos</span>
                    </div>
                  </div>

                  {/* Squeeze Carousel Accordion Component */}
                  <div className="relative w-full flex-1 flex flex-col justify-center overflow-hidden z-10 my-auto">
                    <SqueezeCarousel
                      slides={squeezeSlides}
                      height="clamp(240px, 38cqi, 320px)"
                      heroWidth="clamp(240px, 58cqi, 400px)"
                      gap={12}
                      slatGap={6}
                      slatWidth={10}
                      radius={10}
                      duration={600}
                      hoverGrow={true}
                      autoplay={true}
                      interval={2000}
                      controls={true}
                      accent="#07438C"
                      accentForeground="#ffffff"
                      showPanel={false}
                      label={`${project.title} photographic evidence`}
                    />
                  </div>

                  {/* Bottom Bar Hint */}
                  <div className="relative text-center z-20 mt-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] text-white/80 font-medium shadow-md">
                      <RotateCw className="w-3 h-3 text-secondary animate-spin" style={{ animationDuration: "8s" }} />
                      <span>Click slats to navigate · Use &ldquo;Inspect Photo&rdquo; or Lightbox to expand</span>
                    </span>
                  </div>
                </div>

                {/* Right Column: Context Text & Project Information (5 cols) */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white">
                  <div className="space-y-4">
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary font-black text-xs tracking-wider uppercase">
                        {project.id}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold border ${getSectorBadgeClasses(
                          project.sector
                        )}`}
                      >
                        {project.sector}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-black text-primary leading-tight">
                      {project.title}
                    </h3>

                    {/* Metadata: Location, Partner, Stats */}
                    <div className="space-y-2 pt-2 border-t border-border-subtle/80">
                      <div className="flex items-center gap-2 text-xs text-peace-slate">
                        <MapPin className="w-4 h-4 text-secondary shrink-0" />
                        <span className="font-semibold text-primary">{project.location}</span>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-peace-slate">
                        <Handshake className="w-4 h-4 text-secondary shrink-0" />
                        <span>Partner: <strong className="text-primary">{project.partner}</strong></span>
                      </div>

                      {project.stats && (
                        <div className="flex items-center gap-2 text-xs text-peace-slate">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Impact: <strong className="text-emerald-700 font-bold">{project.stats}</strong></span>
                        </div>
                      )}
                    </div>

                    {/* Verified Field Context Narrative */}
                    <div className="pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-peace-slate/70 mb-1.5 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-primary" />
                        <span>Field Context & Verification</span>
                      </div>
                      <p className="text-xs sm:text-sm text-peace-slate leading-relaxed bg-surface-container-lowest p-4 rounded-2xl border border-border-subtle">
                        {project.context}
                      </p>
                    </div>
                  </div>

                  {/* Right Column Action Footer */}
                  <div className="pt-4 border-t border-border-subtle flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => openLightbox(project, 0)}
                      aria-label="Open High-Resolution Lightbox"
                      className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-primary/80 transition-colors cursor-pointer"
                    >
                      <Maximize2 className="w-4 h-4 text-secondary" />
                      <span>High-Res Lightbox</span>
                    </button>

                    <span className="text-xs text-peace-slate font-medium">
                      10 Field Photos
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search State */}
        {filteredProjects.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-border-subtle max-w-lg mx-auto">
            <Search className="w-10 h-10 text-peace-slate/40 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-primary mb-1">No field dispatches match your query</h4>
            <p className="text-xs text-peace-slate mb-6">
              Try searching for a different keyword like &ldquo;Beledweyne&rdquo;, &ldquo;WHH&rdquo;, &ldquo;DKH&rdquo;, or reset the sector filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedSector("All");
                setSearchQuery("");
              }}
              className="px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Load More Pagination Bar */}
        {visibleCount < filteredProjects.length && (
          <div className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => Math.min(prev + 6, filteredProjects.length))}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm font-bold shadow-md transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Load More Field Dispatches ({filteredProjects.length - visibleCount} remaining)</span>
            </button>
            <button
              type="button"
              onClick={() => setVisibleCount(filteredProjects.length)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary text-xs sm:text-sm font-semibold transition-all cursor-pointer"
            >
              <span>Show All {filteredProjects.length}</span>
            </button>
          </div>
        )}
      </div>

      {/* =================================================================== */}
      {/* FULLSCREEN LIGHTBOX MODAL (High-Res 1:1 Image Viewer)               */}
      {/* =================================================================== */}
      {lightboxProject && (
        <div
          className="fixed inset-0 z-50 bg-[#020d20]/98 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-project-title"
        >
          {/* Lightbox Top Bar */}
          <div className="flex items-center justify-between gap-4 text-white z-10 max-w-7xl mx-auto w-full">
            <div>
              <div className="text-xs font-bold text-secondary uppercase tracking-wider">
                {lightboxProject.id} &bull; {lightboxProject.sector}
              </div>
              <h4 id="lightbox-project-title" className="text-sm sm:text-base font-black truncate max-w-xs sm:max-w-xl">
                {lightboxProject.title}
              </h4>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-white/70">
                Photo {lightboxPhotoIndex + 1} of {lightboxProject.photos.length}
              </span>
              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close fullscreen modal"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Center Image & Arrows */}
          <div className="relative flex-1 flex items-center justify-center max-w-6xl mx-auto w-full my-4">
            <div className="relative w-full h-full max-h-[75vh]">
              <Image
                src={lightboxProject.photos[lightboxPhotoIndex]}
                alt={`${lightboxProject.title} - ${lightboxPhotoIndex + 1}`}
                fill
                unoptimized
                className="object-contain"
                sizes="100vw"
                preload={true}
              />
            </div>

            {/* Left / Right Nav Arrows */}
            <button
              type="button"
              onClick={prevLightboxPhoto}
              aria-label="Previous photo in modal"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={nextLightboxPhoto}
              aria-label="Next photo in modal"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Bottom Strip: Thumbnails & Context Note */}
          <div className="max-w-7xl mx-auto w-full z-10">
            <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
              {lightboxProject.photos.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setLightboxPhotoIndex(idx)}
                  className={`relative shrink-0 rounded-lg overflow-hidden transition-all cursor-pointer ${
                    lightboxPhotoIndex === idx
                      ? "ring-2 ring-secondary scale-105 opacity-100"
                      : "opacity-40 hover:opacity-80"
                  }`}
                  style={{ width: "56px", height: "38px" }}
                >
                  <Image
                    src={p}
                    alt={`${lightboxProject.title} thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="60px"
                  />
                </button>
              ))}
            </div>

            <p className="text-center text-xs text-white/70 max-w-3xl mx-auto truncate pt-1">
              <strong className="text-white">{lightboxProject.location}</strong> &bull; {lightboxProject.partner}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
