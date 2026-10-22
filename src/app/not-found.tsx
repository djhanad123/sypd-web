import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, Home, PhoneCall, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface-container-lowest pt-28 pb-20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-border-subtle shadow-xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container/60 text-secondary-dark text-xs font-bold uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5" />
          <span>404 · Geographic Coordinate Not Found</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-6xl sm:text-7xl font-black text-primary tracking-tight">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-black text-primary">
            This Field Route Does Not Exist
          </h2>
          <p className="text-sm sm:text-base text-peace-slate max-w-md mx-auto leading-relaxed">
            The page you are looking for may have been relocated or archived. You can navigate back to our main operations portal or inspect our active programs below.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-action-orange hover:bg-action-orange-hover text-white text-xs sm:text-sm font-bold py-3 px-6 rounded-xl shadow-md transition-all hover:-translate-y-0.5"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-surface-container hover:bg-surface-container-high text-primary text-xs sm:text-sm font-semibold py-3 px-6 rounded-xl transition-all"
          >
            <PhoneCall className="w-4 h-4 text-secondary" />
            <span>Field Helpdesk</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-border-subtle grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-peace-slate">
          <Link href="/about" className="p-2 rounded-lg hover:bg-surface-container hover:text-primary transition-colors font-semibold">
            About Us
          </Link>
          <Link href="/programs" className="p-2 rounded-lg hover:bg-surface-container hover:text-primary transition-colors font-semibold">
            6 Pillars
          </Link>
          <Link href="/where-we-work" className="p-2 rounded-lg hover:bg-surface-container hover:text-primary transition-colors font-semibold">
            9 Field Desks
          </Link>
          <Link href="/projects" className="p-2 rounded-lg hover:bg-surface-container hover:text-primary transition-colors font-semibold">
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
