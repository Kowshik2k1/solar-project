import projects from "@/data/projects.json";
import { ScrollReveal } from "@/components/common/ScrollReveal";

import {
  Section,
  Container,
  Header,
  Eyebrow,
  Title,
  ProjectWrapper,
  ImageWrapper,
  ProjectImage,
  Content,
  Status,
  ProjectTitle,
  Description,
  Details,
  Detail,
  DetailLabel,
  DetailValue,
  Button,
} from "./style";

export default function FeaturedProject() {
  const project = projects.find((item) => item.featured);

  if (!project) {
    return null;
  }

  return (
    <Section>
      <Container>
        <ScrollReveal>
          <Header>
            <Eyebrow>COMPLETED PROJECT</Eyebrow>

            <Title>Turning vision into meaningful projects.</Title>
          </Header>
        </ScrollReveal>

        <ProjectWrapper>
          <ScrollReveal direction="right">
            <ImageWrapper>
              <ProjectImage
                src={project.coverImage}
                alt={project.title}
              />
            </ImageWrapper>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <Content>
              <Status>{project.status}</Status>

              <ProjectTitle>{project.title}</ProjectTitle>

              <Description>
                {project.description}
              </Description>

              <Details>
                <Detail>
                  <DetailLabel>Category</DetailLabel>
                  <DetailValue>{project.category}</DetailValue>
                </Detail>

                <Detail>
                  <DetailLabel>Location</DetailLabel>
                  <DetailValue>{project.location}</DetailValue>
                </Detail>

                <Detail>
                  <DetailLabel>Year</DetailLabel>
                  <DetailValue>{project.year}</DetailValue>
                </Detail>
              </Details>

              <Button href={`/projects/${project.slug}`}>
                View Project
                <span aria-hidden="true">→</span>
              </Button>
            </Content>
          </ScrollReveal>
        </ProjectWrapper>
      </Container>
    </Section>
  );
}