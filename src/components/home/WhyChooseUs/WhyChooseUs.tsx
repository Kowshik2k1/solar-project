import { ScrollReveal } from "@/components/common/ScrollReveal";
import whyChooseUs from "@/data/why-choose-us.json";

import {
  Section,
  Container,
  Header,
  Eyebrow,
  Title,
  Description,
  Grid,
  Card,
  Number,
  CardTitle,
  CardDescription,
} from "./style";

export default function WhyChooseUs() {
  return (
    <Section>
      <Container>
        <ScrollReveal>
          <Header>
            <Eyebrow>WHY CHOOSE US</Eyebrow>

            <Title>
              A foundation built around quality and vision.
            </Title>

            <Description>
              We are committed to building our company on principles
              that support responsible development and long-term
              project value.
            </Description>
          </Header>
        </ScrollReveal>

        <Grid>
          {whyChooseUs.map((item, index) => (
            <ScrollReveal
              key={item.number}
              delay={index * 80}
            >
              <Card>
                <Number>{item.number}</Number>

                <CardTitle>{item.title}</CardTitle>

                <CardDescription>
                  {item.description}
                </CardDescription>
              </Card>
            </ScrollReveal>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}