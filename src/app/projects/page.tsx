import type { Metadata } from "next";
import { ProjectsClient } from "@/components/ProjectsClient";

export const metadata: Metadata = {
  title: "Project Portfolio · 150+ Verified Humanitarian Interventions Across Somalia",
  description: "Browse SYPD's complete catalogue of 150+ donor-funded projects across WASH, Food Security, Education, TVET, Protection, and Peacebuilding since 2004.",
  alternates: {
    canonical: "https://sypd.org/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
