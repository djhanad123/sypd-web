import type { Metadata } from "next";
import { PartnersClient } from "@/components/PartnersClient";

export const metadata: Metadata = {
  title: "Institutional Partners · Multilateral Donors & UN Implementing Partners",
  description: "Review SYPD's 30+ institutional donors and partners, including the World Bank, UN Agencies (UNICEF, UNHCR, FAO, OCHA), and European INGO consortia.",
  alternates: {
    canonical: "https://sypd.org/partners",
  },
};

export default function PartnersPage() {
  return <PartnersClient />;
}
