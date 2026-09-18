import projects from "@/data/projects.json";

import { ProjectHeroStyles } from "./style";

const ProjectHero = () => {
  const completedCount = projects.filter(
    (project) => project.status === "Completed",
  ).length;

  return (
    <ProjectHeroStyles>
      <div className="container">
        <span className="eyebrow">OUR PROJECTS</span>

        <h1>A look at our work.</h1>

        <p className="description">
          Explore the projects we have completed as we continue building a
          strong foundation for future infrastructure development.
        </p>

        <span className="project-count">
          {completedCount} Completed Project
          {completedCount !== 1 ? "s" : ""}
        </span>
      </div>
    </ProjectHeroStyles>
  );
};

export default ProjectHero;
