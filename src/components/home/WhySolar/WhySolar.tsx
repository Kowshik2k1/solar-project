import whySolar from "@/data/why-solar.json";

import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";

import {
  Card,
  CardDescription,
  CardTitle,
  Description,
  Eyebrow,
  Grid,
  Header,
  Number,
  Section,
  Title,
} from "./style";

export default function WhySolar() {
  return (
    <Section>
      <Container>
        <ScrollReveal>
          <Header>
            <Eyebrow>Why Solar?</Eyebrow>

            <Title>
              Make your energy work for you.
            </Title>

            <Description>
              Solar energy isn&apoas;t just about generating electricity. It&apoas;s
              about gaining greater control over your energy costs while
              investing in a cleaner future.
            </Description>
          </Header>
        </ScrollReveal>

        <Grid>
          {whySolar.map((item, index) => (
            <ScrollReveal key={item.number} delay={index * 100}>
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