"use client";

import {ScrollReveal} from "@/components/common/ScrollReveal";

import { ProjectIntroStyles } from "./style";

export default function ProjectIntro() {
  return (
    <ProjectIntroStyles>
      <div className="container">
        <ScrollReveal>
          <div className="content">
            <span className="eyebrow">COMPLETED WORK</span>

            <h2>Building our foundation through meaningful projects.</h2>

            <p>
              Our completed work represents the beginning of our journey in
              infrastructure development. Each project contributes to the
              experience and foundation we are building for the future.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </ProjectIntroStyles>
  );
}