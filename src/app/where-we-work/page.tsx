import type { Metadata } from "next";
import { WhereWeWorkClient } from "@/components/WhereWeWorkClient";

export const metadata: Metadata = {
  title: "Where We Work · Nationwide Field Presence Across 4 States & Banadir",
  description: "Explore SYPD's operational footprint across Banadir, Hirshabelle, South-West, Jubaland, and Galmudug with 11 area offices and grassroots humanitarian corridors.",
  alternates: {
    canonical: "https://sypd.org/where-we-work",
  },
};

export default function WhereWeWorkPage() {
  return <WhereWeWorkClient />;
}
