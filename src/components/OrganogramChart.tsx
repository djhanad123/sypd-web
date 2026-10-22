"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SYPD_ORGANOGRAM_DATA, OrganogramMember } from "@/data/sypdData";
import {
  Users,
  Building2,
  Mail,
  CheckCircle2,
  X,
  Layers,
  Sparkles,
  UserCheck,
  UserX,
  Info,
} from "lucide-react";

export const OrganogramChart: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<OrganogramMember | null>(null);
  const [activeTierFilter, setActiveTierFilter] = useState<string>("all");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedMember(null);
      }
    };
    if (selectedMember) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMember]);

  const boardMembers = SYPD_ORGANOGRAM_DATA.filter((m) => m.level === "board");
  const execMembers = SYPD_ORGANOGRAM_DATA.filter((m) => m.level === "executive");
  const managerMembers = SYPD_ORGANOGRAM_DATA.filter((m) => m.level === "management");
  const officerMembers = SYPD_ORGANOGRAM_DATA.filter((m) => m.level === "officers");

  const chairPerson = boardMembers.find((m) => m.id === "chairperson") || boardMembers[0];
  const boardSecretary = boardMembers.find((m) => m.id === "board-secretary") || boardMembers[1];
  const boardTreasurer = boardMembers.find((m) => m.id === "board-treasurer") || boardMembers[2];

  const execDirector = execMembers.find((m) => m.id === "exec-director") || execMembers[0];
  const cfo = execMembers.find((m) => m.id === "cfo") || execMembers[1];
  const directorOps = execMembers.find((m) => m.id === "director-ops") || execMembers[2];

  // Helper to render individual organogram card
  const renderOrganogramCard = (member: OrganogramMember, isElevated: boolean = false) => {
    const isSelected = selectedMember?.id === member.id;
    const isVacant = member.vacant;

    return (
      <div
        key={member.id}
        role="button"
        tabIndex={0}
        aria-label={`View profile for ${member.name}, ${member.role}`}
        onClick={() => setSelectedMember(member)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setSelectedMember(member);
          }
        }}
        className={`w-[145px] sm:w-[155px] lg:w-[165px] rounded-2xl border-2 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col items-center text-center select-none group relative bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-orange ${
          isSelected
            ? "border-primary ring-4 ring-action-orange/30 shadow-2xl scale-105 z-30"
            : isElevated
            ? "border-action-orange shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-action-orange-hover"
            : "border-action-orange shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-action-orange-hover"
        }`}
      >
        {/* Photo Container */}
        <div className="relative w-full aspect-4/3 overflow-hidden bg-surface-container flex items-center justify-center">
          {isVacant ? (
            <div className="w-full h-full bg-surface-container flex flex-col items-center justify-center text-peace-slate/60">
              <UserX className="w-10 h-10 text-outline mb-1" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Position Open</span>
            </div>
          ) : member.photo ? (
            <Image
              src={member.photo}
              alt={member.name}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              sizes="200px"
            />
          ) : (
            <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary font-black text-xl">
              {member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </div>
          )}

          {/* Quick Info Hover Badge */}
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary/80 backdrop-blur-xs text-white p-1 rounded-full">
            <Info className="w-3 h-3" />
          </div>
        </div>

        {/* Brand Blue Role Ribbon Banner (Official SYPD Logo Blue) */}
        <div className="w-full bg-action-orange py-1.5 px-2 text-white font-bold text-[10px] sm:text-[11px] uppercase tracking-wider text-center leading-tight flex items-center justify-center min-h-[30px]">
          <span className="line-clamp-2">{member.role}</span>
        </div>

        {/* Name & Subtitle Card Bottom */}
        <div className="w-full py-2.5 px-2 bg-white flex flex-col justify-center min-h-[46px]">
          <span className="text-xs sm:text-sm font-black text-primary leading-snug group-hover:text-action-orange transition-colors">
            {isVacant ? "VACANT" : member.name}
          </span>
          <span className="text-[10px] text-peace-slate font-medium truncate mt-0.5">
            {member.department}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col gap-8">
      {/* Control Bar: Tier View Filter & Interaction Guide */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-2 border-b border-border-subtle">
        <div className="flex items-center gap-2 text-xs text-peace-slate">
          <Sparkles className="w-4 h-4 text-action-orange" />
          <span className="font-semibold text-primary">Interactive Organogram:</span>
          <span>Click any official to inspect mandate & direct responsibilities</span>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
          <button
            onClick={() => setActiveTierFilter("all")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTierFilter === "all"
                ? "bg-primary text-white shadow-sm"
                : "bg-surface-container text-peace-slate hover:bg-surface-container-high"
            }`}
          >
            Full Hierarchy
          </button>
          <button
            onClick={() => setActiveTierFilter("board")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTierFilter === "board"
                ? "bg-primary text-white shadow-sm"
                : "bg-surface-container text-peace-slate hover:bg-surface-container-high"
            }`}
          >
            Board of Directors
          </button>
          <button
            onClick={() => setActiveTierFilter("executive")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTierFilter === "executive"
                ? "bg-primary text-white shadow-sm"
                : "bg-surface-container text-peace-slate hover:bg-surface-container-high"
            }`}
          >
            Executive Office
          </button>
          <button
            onClick={() => setActiveTierFilter("officers")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTierFilter === "officers"
                ? "bg-primary text-white shadow-sm"
                : "bg-surface-container text-peace-slate hover:bg-surface-container-high"
            }`}
          >
            CHEFGS Officers
          </button>
        </div>
      </div>

      {/* Main Organogram Tree View Stage */}
      <div className="w-full overflow-x-auto pb-12 pt-6 bg-surface-container-lowest/60 rounded-3xl border border-border-subtle p-4 sm:p-8 shadow-inner">
        <div className="min-w-[980px] max-w-6xl mx-auto flex flex-col items-center relative">
          
          {/* ============================================================ */}
          {/* TIER 1: BOARD OF DIRECTORS (Top Level) */}
          {/* ============================================================ */}
          {(activeTierFilter === "all" || activeTierFilter === "board") && (
            <div className="flex flex-col items-center w-full relative z-10 mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-wider mb-4">
                <Building2 className="w-3.5 h-3.5 text-action-orange" />
                <span>Tier 1 · Board of Directors (Highest Governance Authority)</span>
              </div>

              {/* Three Cards Layout matching user reference */}
              <div className="flex items-center justify-center gap-6 sm:gap-10 relative">
                {/* Board Secretary (Left) */}
                {renderOrganogramCard(boardSecretary)}

                {/* Board Chairperson (Center - Elevated) */}
                <div className="relative -mt-3">
                  {renderOrganogramCard(chairPerson, true)}
                </div>

                {/* Board Treasurer (Right) */}
                {renderOrganogramCard(boardTreasurer)}
              </div>

              {/* Connector line down to Executive Director */}
              <div className="w-0.5 h-10 bg-action-orange relative">
                <div className="w-2 h-2 rounded-full bg-action-orange absolute -bottom-1 -left-[3px]" />
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* TIER 2: EXECUTIVE SECRETARIAT (ED & Key Deputies) */}
          {/* ============================================================ */}
          {(activeTierFilter === "all" || activeTierFilter === "executive") && (
            <div className="flex flex-col items-center w-full relative z-10 mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-action-orange/10 text-action-orange text-[11px] font-bold uppercase tracking-wider mb-4">
                <Users className="w-3.5 h-3.5 text-action-orange" />
                <span>Tier 2 · Executive Secretariat & Strategic Operations</span>
              </div>

              {/* ED Centered with Flanking Deputies */}
              <div className="flex items-center justify-center gap-6 sm:gap-10 relative">
                {/* Finance & Admin Manager (Left) */}
                <div className="relative">
                  {renderOrganogramCard(cfo)}
                  {/* Horizontal connector to ED */}
                  <div className="hidden sm:block absolute top-1/2 -right-10 w-10 h-0.5 bg-action-orange" />
                </div>

                {/* Executive Director (Center) */}
                <div className="relative">
                  {renderOrganogramCard(execDirector, true)}
                </div>

                {/* Director of Field Operations (Right) */}
                <div className="relative">
                  {/* Horizontal connector from ED */}
                  <div className="hidden sm:block absolute top-1/2 -left-10 w-10 h-0.5 bg-action-orange" />
                  {renderOrganogramCard(directorOps)}
                </div>
              </div>

              {/* Central Trunk Line down to Tier 3 */}
              <div className="w-0.5 h-10 bg-action-orange relative">
                <div className="w-2 h-2 rounded-full bg-action-orange absolute -bottom-1 -left-[3px]" />
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* TIER 3: SENIOR MANAGEMENT DIRECTORS (5 Columns) */}
          {/* ============================================================ */}
          {(activeTierFilter === "all" || activeTierFilter === "executive") && (
            <div className="flex flex-col items-center w-full relative z-10 mb-10">
              {/* Wide Horizontal Distribution Bus Bar */}
              <div className="w-[84%] max-w-[880px] h-0.5 bg-action-orange relative mb-6">
                {/* 5 Vertical drop connectors */}
                <div className="absolute top-0 left-[8%] w-0.5 h-6 bg-action-orange" />
                <div className="absolute top-0 left-[29%] w-0.5 h-6 bg-action-orange" />
                <div className="absolute top-0 left-[50%] w-0.5 h-6 bg-action-orange" />
                <div className="absolute top-0 left-[71%] w-0.5 h-6 bg-action-orange" />
                <div className="absolute top-0 left-[92%] w-0.5 h-6 bg-action-orange" />
              </div>

              {/* 5 Core Department Managers Grid */}
              <div className="grid grid-cols-5 gap-4 sm:gap-6 w-full max-w-[960px] justify-items-center">
                {managerMembers.map((manager) => renderOrganogramCard(manager))}
              </div>

              {/* Central drop line down to Pillar Officers */}
              <div className="w-0.5 h-10 bg-action-orange relative mt-6">
                <div className="w-2 h-2 rounded-full bg-action-orange absolute -bottom-1 -left-[3px]" />
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* TIER 4: CHEFGS STRATEGIC PROGRAM OFFICERS (6 Pillars) */}
          {/* ============================================================ */}
          {(activeTierFilter === "all" || activeTierFilter === "officers") && (
            <div className="flex flex-col items-center w-full relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary-dark text-[11px] font-bold uppercase tracking-wider mb-4">
                <Layers className="w-3.5 h-3.5 text-secondary" />
                <span>Tier 4 · Strategic Pillar Leads (CHEFGS Field Execution)</span>
              </div>

              {/* Wide Horizontal Distribution Bus Bar for 6 Pillars */}
              <div className="w-[90%] max-w-[920px] h-0.5 bg-action-orange relative mb-6">
                {/* 6 Vertical drop connectors */}
                <div className="absolute top-0 left-[7%] w-0.5 h-6 bg-action-orange" />
                <div className="absolute top-0 left-[24%] w-0.5 h-6 bg-action-orange" />
                <div className="absolute top-0 left-[41%] w-0.5 h-6 bg-action-orange" />
                <div className="absolute top-0 left-[59%] w-0.5 h-6 bg-action-orange" />
                <div className="absolute top-0 left-[76%] w-0.5 h-6 bg-action-orange" />
                <div className="absolute top-0 left-[93%] w-0.5 h-6 bg-action-orange" />
              </div>

              {/* 6 CHEFGS Officers Grid */}
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5 w-full max-w-[1100px] justify-items-center">
                {officerMembers.map((officer) => renderOrganogramCard(officer))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ============================================================ */}
      {/* Slide-Over Detail Drawer Modal for Selected Leader */}
      {/* ============================================================ */}
      {selectedMember && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="member-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-border-subtle overflow-hidden relative animate-in zoom-in-95 duration-200">
            {/* Header with Photo & Close Button */}
            <div className="relative bg-gradient-to-r from-primary to-primary-container p-6 sm:p-8 text-white flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-action-orange shrink-0 bg-surface-container">
                  {selectedMember.vacant ? (
                    <div className="w-full h-full flex items-center justify-center bg-surface-container">
                      <UserX className="w-8 h-8 text-outline" />
                    </div>
                  ) : selectedMember.photo ? (
                    <Image
                      src={selectedMember.photo}
                      alt={selectedMember.name}
                      fill
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-bold text-lg text-primary">
                      {selectedMember.name[0]}
                    </div>
                  )}
                </div>

                <div>
                  <span className="inline-block bg-action-orange text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-1">
                    {selectedMember.department}
                  </span>
                  <h3 id="member-modal-title" className="text-xl sm:text-2xl font-black">{selectedMember.name}</h3>
                  <p className="text-xs sm:text-sm text-secondary-fixed font-semibold">
                    {selectedMember.role}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body Information */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-action-orange mb-2 flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4" />
                  Mandate & Strategic Responsibilities:
                </h4>
                <ul className="space-y-2.5">
                  {selectedMember.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-peace-slate">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedMember.email && (
                <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-xs">
                  <span className="font-bold text-primary">Official Channel:</span>
                  <a
                    href={`mailto:${selectedMember.email}`}
                    className="inline-flex items-center gap-1.5 text-action-orange font-mono font-semibold hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{selectedMember.email}</span>
                  </a>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 bg-surface-container-low border-t border-border-subtle flex justify-end">
              <button
                onClick={() => setSelectedMember(null)}
                className="px-5 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-container transition-colors cursor-pointer"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
