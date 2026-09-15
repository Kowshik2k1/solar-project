import stats from "@/data/stats.json";

import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";

import {
  ImpactGrid,
  ImpactItem,
  ImpactSection,
  Label,
  Value,
} from "./style";

export default function Impact() {
  return (
    <ImpactSection>
      <Container>
        <ImpactGrid>
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 80}>
              <ImpactItem>
                <Value>{stat.value}</Value>
                <Label>{stat.label}</Label>
              </ImpactItem>
            </ScrollReveal>
          ))}
        </ImpactGrid>
      </Container>
    </ImpactSection>
  );
}