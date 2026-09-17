import vision from "@/data/vision.json";
import { ScrollReveal } from "@/components/common/ScrollReveal";

import {
  Section,
  Container,
  Grid,
  Content,
  Eyebrow,
  Title,
  Description,
  VisionLink,
  ImageWrapper,
  Image,
} from "./style";

export default function Vision() {
  return (
    <Section>
      <Container>
        <Grid>
          <ScrollReveal direction="right">
            <Content>
              <Eyebrow>{vision.eyebrow}</Eyebrow>

              <Title>{vision.title}</Title>

              <Description>
                {vision.description}
              </Description>

              <VisionLink href={vision.cta.href}>
                {vision.cta.label}
                <span aria-hidden="true">→</span>
              </VisionLink>
            </Content>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <ImageWrapper>
              <Image
                src={vision.image}
                alt="Infrastructure development"
              />
            </ImageWrapper>
          </ScrollReveal>
        </Grid>
      </Container>
    </Section>
  );
}