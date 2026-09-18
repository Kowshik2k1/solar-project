"use client";

import Link from "next/link";

import { ScrollReveal } from "@/components/common/ScrollReveal";
import type { Project } from "@/types/project";

import { ProjectGridStyles } from "./style";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <ProjectGridStyles>
      <div className="container">
        <div className="grid">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <article className="card">
                <div className="image-wrapper">
                  <img src={project.coverImage} alt={project.title} />

                  <span className="status">{project.status}</span>
                </div>

                <div className="content">
                  <span className="category">{project.category}</span>

                  <h2>{project.title}</h2>

                  <p>{project.description}</p>

                  <div className="details">
                    <div className="detail">
                      <span className="detail-label">Location</span>
                      <span className="detail-value">{project.location}</span>
                    </div>

                    <div className="detail">
                      <span className="detail-label">Year</span>
                      <span className="detail-value">{project.year}</span>
                    </div>
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="view-project"
                  >
                    View Project
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </ProjectGridStyles>
  );
}
