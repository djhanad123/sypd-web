"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SYPD_CONTACT, SYPD_AREA_OFFICES } from "@/data/sypdData";
import {
  MapPin,
  Phone,
  Mail,
  Building2,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Globe,
  MessageSquare,
  AlertCircle,
  ExternalLink,
  Loader2,
} from "lucide-react";

export function ContactClient() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    category: "Institutional Grants & Donor Partnerships",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setReferenceId(data.referenceId || `SYPD-${Date.now().toString(36).toUpperCase()}`);
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.error || "Submission could not be completed. Please use direct email below.");
      }
    } catch {
      setErrorMessage("Network connection issue. Please use the direct email link below.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoUrl = `mailto:info@sypd.org?subject=${encodeURIComponent(
    `[${formData.category}] Inquiry from ${formData.fullName || "Partner"}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone || "N/A"}\nOrganization: ${formData.organization || "N/A"}\n\nMessage:\n${formData.message}`
  )}`;

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
                <span>National Operations & Accountability Desk</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
                Contact SYPD <br />
                <span className="text-secondary">Headquarters & Field Hubs</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light mb-8">
                Reach our Executive Secretariat in Mogadishu, regional liaison team in Nairobi, or any of our 9 operational field desks across Somalia.
              </p>
              <div className="flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-white/80">
                <span className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl">
                  <Building2 className="w-4 h-4 text-secondary" /> National HQ (Waberi, Mogadishu)
                </span>
                <span className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl">
                  <ShieldCheck className="w-4 h-4 text-secondary-fixed" /> AAP Accountability Desk
                </span>
              </div>
            </div>

            {/* Right Thematic Illustration Card */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-secondary/40 via-action-orange/30 to-white/20 rounded-3xl blur-lg opacity-70" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-white/25 shadow-2xl bg-slate-900/40 backdrop-blur-sm group">
                  <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden">
                    <Image
                      src="/images/slide-youth.png"
                      alt="SYPD National Field Coordination & Community Helpdesk"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      preload={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#021028]/90 via-[#021028]/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-white">
                    <div className="flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-wider mb-1">
                      <MessageSquare className="w-4 h-4" /> Direct Community Channels
                    </div>
                    <div className="text-xs text-white/90 font-medium">
                      Accountability to Affected Populations (AAP) • 48h Response SLA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">Contact Details and Direct Communication Desk</h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Information Column */}
            <div className="lg:col-span-5 space-y-8">
              {/* National HQ Card */}
              <div className="bg-surface-container-low p-8 rounded-3xl border border-border-subtle shadow-xs">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider mb-4">
                  <Building2 className="w-3.5 h-3.5" /> National Headquarters
                </div>
                <h3 className="text-xl font-black text-primary mb-3">
                  {SYPD_CONTACT.hq.title}
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-peace-slate">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-action-orange shrink-0 mt-1" />
                    <div>
                      <strong className="text-primary block">Official Address:</strong>
                      <span>{SYPD_CONTACT.hq.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-secondary shrink-0 mt-1" />
                    <div>
                      <strong className="text-primary block">Telephones:</strong>
                      <div className="flex flex-col gap-0.5">
                        {SYPD_CONTACT.hq.telephones.map((tel, idx) => (
                          <a
                            key={idx}
                            href={`tel:${tel.replace(/\s+/g, "")}`}
                            className="text-action-orange font-semibold hover:underline"
                          >
                            {tel}
                          </a>
                        ))}
                        <span>Landline: {SYPD_CONTACT.hq.officeLine}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <div>
                      <strong className="text-primary block">Official Email Accounts:</strong>
                      <div className="flex flex-col gap-0.5 font-mono text-xs">
                        <a href="mailto:info@sypd.org" className="hover:text-action-orange">
                          info@sypd.org
                        </a>
                        <a href="mailto:Hassan.ali@sypdsomalia.org" className="hover:text-action-orange">
                          Hassan.ali@sypdsomalia.org (Executive Director)
                        </a>
                        <a href="mailto:chairperson@sypdsomalia.org" className="hover:text-action-orange">
                          chairperson@sypdsomalia.org (Board Chair)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nairobi Liaison & Regional Desk */}
              <div className="bg-surface-container-low p-6 rounded-3xl border border-border-subtle shadow-xs">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-secondary-dark text-xs font-bold uppercase tracking-wider mb-3">
                  <Globe className="w-3.5 h-3.5" /> Regional Liaison
                </div>
                <h3 className="text-base font-bold text-primary mb-2">
                  {SYPD_CONTACT.liaison.title}
                </h3>
                <div className="text-xs text-peace-slate space-y-1">
                  <div><strong>Location:</strong> {SYPD_CONTACT.liaison.location}</div>
                  <div>
                    <strong>Liaison Email: </strong>
                    <a href={`mailto:${SYPD_CONTACT.liaison.email}`} className="text-action-orange font-mono">
                      {SYPD_CONTACT.liaison.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Accountability & Safeguarding Hotline Guarantee */}
              <div className="p-6 rounded-3xl bg-secondary/5 border border-secondary/20">
                <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4" /> AAP Beneficiary Hotline Guarantee
                </div>
                <p className="text-xs text-peace-slate leading-relaxed mb-3">
                  SYPD maintains strict Accountability to Affected Populations (AAP). All community feedback, safeguarding matters, or whistleblowing reports received through this desk are handled confidentially within 48 hours.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <a
                    href="mailto:safeguarding@sypd.org"
                    className="inline-flex items-center gap-1.5 text-secondary font-bold hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" /> safeguarding@sypd.org
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Contact & Inquiry Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-border-subtle shadow-lg">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 text-action-orange font-bold text-xs uppercase tracking-wider mb-2">
                  <MessageSquare className="w-4 h-4" /> Direct Communication Desk
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-primary">
                  Contact Our Operations Desk
                </h3>
                <p className="text-xs sm:text-sm text-peace-slate mt-1">
                  Inquiries are routed directly to the appropriate team (Programs, Fiduciary Operations, or Executive Office).
                </p>
              </div>

              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0 text-red-600" />
                  <div>
                    <p className="font-semibold">{errorMessage}</p>
                    <p className="mt-1">
                      You can write to us directly at{" "}
                      <a href="mailto:info@sypd.org" className="underline font-bold">
                        info@sypd.org
                      </a>
                    </p>
                  </div>
                </div>
              )}

              {isSubmitted ? (
                <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-secondary text-white mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-primary">
                    Inquiry Successfully Logged
                  </h4>
                  <div className="inline-block px-3 py-1 bg-surface-container rounded-full text-xs font-mono font-bold text-peace-slate">
                    Ref ID: {referenceId}
                  </div>
                  <p className="text-xs sm:text-sm text-peace-slate max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.fullName}. Your submission regarding <strong>{formData.category}</strong> has been logged with our Mogadishu Executive Secretariat. Our coordination team will review and respond within 48 business hours.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-border-subtle text-primary hover:bg-surface-container text-xs font-bold transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open Copy in Mail Client</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: "",
                          email: "",
                          phone: "",
                          organization: "",
                          category: "Institutional Grants & Donor Partnerships",
                          message: "",
                        });
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-bold cursor-pointer hover:bg-primary-container transition-colors"
                    >
                      <span>Send Another Inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-primary mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Dr. Amina Shire"
                        className="w-full px-3.5 py-2.5 bg-surface-container rounded-xl text-xs sm:text-sm text-primary border border-border-subtle focus:outline-none focus:border-action-orange focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-primary mb-1.5">
                        Work / Official Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@organization.org"
                        className="w-full px-3.5 py-2.5 bg-surface-container rounded-xl text-xs sm:text-sm text-primary border border-border-subtle focus:outline-none focus:border-action-orange focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-primary mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+252 61 XXX XXXX"
                        className="w-full px-3.5 py-2.5 bg-surface-container rounded-xl text-xs sm:text-sm text-primary border border-border-subtle focus:outline-none focus:border-action-orange focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="organization" className="block text-xs font-bold uppercase tracking-wider text-primary mb-1.5">
                        Organization / Entity
                      </label>
                      <input
                        id="organization"
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="UN Agency, INGO, Ministry, Donor"
                        className="w-full px-3.5 py-2.5 bg-surface-container rounded-xl text-xs sm:text-sm text-primary border border-border-subtle focus:outline-none focus:border-action-orange focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-xs font-bold uppercase tracking-wider text-primary mb-1.5">
                      Inquiry Category *
                    </label>
                    <select
                      id="category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-surface-container rounded-xl text-xs sm:text-sm text-primary border border-border-subtle focus:outline-none focus:border-action-orange focus:bg-white transition-all"
                    >
                      <option value="Institutional Grants & Donor Partnerships">
                        Institutional Grants & Donor Partnerships
                      </option>
                      <option value="UN Cluster & Consortia Coordination">
                        UN Cluster & Consortia Coordination
                      </option>
                      <option value="Media, Press & Academic Research">
                        Media, Press & Academic Research
                      </option>
                      <option value="Community Accountability (AAP) / Hotline">
                        Community Accountability (AAP) / Hotline
                      </option>
                      <option value="Procurement & Tenders">
                        Procurement & Tenders
                      </option>
                      <option value="General Inquiries & Careers">
                        General Inquiries & Careers
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-primary mb-1.5">
                      Message / Inquiry Details *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline the nature of your inquiry, proposed scope, or community report..."
                      className="w-full px-3.5 py-2.5 bg-surface-container rounded-xl text-xs sm:text-sm text-primary border border-border-subtle focus:outline-none focus:border-action-orange focus:bg-white transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-action-orange hover:bg-action-orange-hover text-white text-sm font-bold py-3.5 px-6 rounded-xl shadow-md transition-all cursor-pointer hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Logging Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Area Offices Network Strip */}
      <section className="py-16 bg-surface-container-low border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
            <div>
              <h2 className="text-2xl font-black text-primary">
                Network of 9 Area Offices
              </h2>
              <p className="text-xs sm:text-sm text-peace-slate mt-1">
                Explore interactive coordinates, operating corridors, and field teams across Somalia.
              </p>
            </div>
            <Link
              href="/where-we-work"
              className="inline-flex items-center gap-2 bg-primary text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-primary-container transition-all"
            >
              <span>Explore Interactive Somalia Map</span>
              <Globe className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs">
            {SYPD_AREA_OFFICES.map((office) => (
              <div
                key={office.id}
                className="bg-white p-4 rounded-xl border border-border-subtle"
              >
                <div className="font-bold text-primary">{office.name.replace(" Area Office", "")}</div>
                <div className="text-[11px] text-action-orange font-semibold">{office.region}</div>
                <div className="text-[10px] text-peace-slate mt-1">{office.state}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
