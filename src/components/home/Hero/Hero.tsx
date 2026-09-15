import { Container } from "@/components/common/Container";

import {
  Actions,
  Description,
  Eyebrow,
  HeroBackground,
  HeroContent,
  HeroSection,
  Heading,
  PrimaryButton,
  SecondaryButton,
  Stat,
  StatLabel,
  StatValue,
  Stats,
} from "./style";

const stats = [
  {
    value: "10+ MW",
    label: "Solar Capacity Installed",
  },
  {
    value: "500+",
    label: "Successful Installations",
  },
  {
    value: "25 Yrs",
    label: "Performance Warranty",
  },
];

export default function Hero() {
  return (
    <HeroSection>
      <HeroBackground />

      <Container>
        <HeroContent>
          <Eyebrow>Clean Energy. Smarter Future.</Eyebrow>

          <Heading>
            Power your future with solar energy.
          </Heading>

          <Description>
            Reliable solar solutions for homes, businesses and industries —
            designed to reduce energy costs and move you toward a cleaner,
            more sustainable future.
          </Description>

          <Actions>
            <PrimaryButton href="/contact">
              Get a Free Quote
            </PrimaryButton>

            <SecondaryButton href="/projects">
              Explore Our Projects
            </SecondaryButton>
          </Actions>

          <Stats>
            {stats.map((stat) => (
              <Stat key={stat.label}>
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </Stat>
            ))}
          </Stats>
        </HeroContent>
      </Container>
    </HeroSection>
  );
}