import Link from "next/link";

import about from "@/data/about.json";
import { ScrollReveal } from "@/components/common/ScrollReveal";

import {
  Section,
  Container,
  Grid,
  ImageWrapper,
  Image,
  Content,
  Eyebrow,
  Title,
  Description,
  SecondaryDescription,
  Highlights,
  Highlight,
  HighlightNumber,
  HighlightTitle,
  HighlightDescription,
  Button,
} from "./style";

export default function About() {
  return (
    <Section>
      <Container>
        <Grid>
          <ScrollReveal direction="right">
            <ImageWrapper>
              <Image
                src={about.image}
                alt="Infrastructure development"
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

              <Highlights>
                {about.highlights.map((item) => (
                  <Highlight key={item.number}>
                    <HighlightNumber>
                      {item.number}
                    </HighlightNumber>

                    <div>
                      <HighlightTitle>
                        {item.title}
                      </HighlightTitle>

                      <HighlightDescription>
                        {item.description}
                      </HighlightDescription>
                    </div>
                  </Highlight>
                ))}
              </Highlights>

              <Button href={about.buttonHref}>
                {about.buttonText}
                <span aria-hidden="true">→</span>
              </Button>
            </Content>
          </ScrollReveal>
        </Grid>
      </Container>
    </Section>
  );
}