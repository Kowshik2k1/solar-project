import { ContactCTA } from "@/components/home/ContactCTA";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectIntro from "@/components/projects/ProjectIntro";
import ProjectGrid from "@/components/projects/ProjectGrid";

import { getProjects } from "@/lib/projects";

export const metadata = {
  title: "Projects",
  description:
    "Explore our completed projects and the foundation we are building for future infrastructure development.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main>
      <ProjectHero />
      <ProjectIntro />
      <ProjectGrid projects={projects} />
      <ContactCTA />
    </main>
  );
}
