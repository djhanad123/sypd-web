import type { Metadata } from "next";
import { ProgramsClient } from "@/components/ProgramsClient";

export const metadata: Metadata = {
  title: "Strategic Pillars · CHEFGS Programmatic Framework (2024–2028)",
  description: "Explore SYPD's six interconnected strategic pillars: Climate & Water, Health, Economic Inclusion, Food Security, Governance, and Social Cohesion across Somalia.",
  alternates: {
    canonical: "https://sypd.org/programs",
  },
};

export default function ProgramsPage() {
  return <ProgramsClient />;
}
