import process from "@/data/process.json";
import { ScrollReveal } from "@/components/common/ScrollReveal";

import {
  Section,
  Container,
  Header,
  Eyebrow,
  Title,
  Description,
  ProcessList,
  ProcessItem,
  Number,
  Content,
  ItemTitle,
  ItemDescription,
} from "./style";

export default function Process() {
  return (
    <Section>
      <Container>
        <ScrollReveal>
          <Header>
            <Eyebrow>OUR APPROACH</Eyebrow>

            <Title>
              Building with a long-term perspective.
            </Title>

            <Description>
              Our approach is built around thoughtful planning,
              responsible execution and a commitment to creating
              lasting value.
            </Description>
          </Header>
        </ScrollReveal>

        <ProcessList>
          {process.map((item, index) => (
            <ScrollReveal
              key={item.number}
              direction="up"
              delay={index * 80}
            >
              <ProcessItem>
                <Number>{item.number}</Number>

                <Content>
                  <ItemTitle>{item.title}</ItemTitle>

                  <ItemDescription>
                    {item.description}
                  </ItemDescription>
                </Content>
              </ProcessItem>
            </ScrollReveal>
          ))}
        </ProcessList>
      </Container>
    </Section>
  );
}