import type { Metadata } from "next";
import { ContactClient } from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact Headquarters & Field Hubs · Operational Desks Across Somalia",
  description: "Connect with SYPD Mogadishu National Headquarters, Nairobi Liaison Office, and 9 regional operations desks. Direct channels for institutional grants and community accountability.",
  alternates: {
    canonical: "https://sypd.org/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
