import about from "@/data/about.json";
import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import Image from "next/image";
const Sample = "/sample.jpeg";

import {
  Button,
  Content,
  Description,
  Eyebrow,
  Grid,
  ImageWrapper,
  Section,
  SecondaryDescription,
  Title,
} from "./style";

export default function AboutPreview() {
  return (
    <Section>
      <Container>
        <Grid>
          <ScrollReveal direction="right">
            <ImageWrapper>
                <Image
                  src={Sample}
                  width="500"
                  height="500"
                  alt="Solar panel installation"
                  loading="lazy"
                />
            </ImageWrapper>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <Content>
              <Eyebrow>{about.eyebrow}</Eyebrow>

              <Title>{about.title}</Title>

              <Description>{about.description}</Description>

              <SecondaryDescription>
                {about.secondaryDescription}
              </SecondaryDescription>

              <Button href={about.buttonHref}>{about.buttonText}</Button>
            </Content>
          </ScrollReveal>
        </Grid>
      </Container>
    </Section>
  );
}
