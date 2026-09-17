import Link from "next/link";

import hero from "@/data/hero.json";

import {
  HeroSection,
  HeroBackground,
  HeroOverlay,
  HeroContainer,
  HeroContent,
  Eyebrow,
  Title,
  Description,
  Actions,
  PrimaryButton,
  SecondaryButton,
  ScrollIndicator,
} from "./style";

export default function Hero() {
  return (
    <HeroSection>
      <HeroBackground
        $backgroundImage={hero.backgroundImage}
        aria-hidden="true"
      />

      <HeroOverlay aria-hidden="true" />

      <HeroContainer>
        <HeroContent>
          <Eyebrow>{hero.eyebrow}</Eyebrow>

          <Title>{hero.title}</Title>

          <Description>{hero.description}</Description>

          <Actions>
            <PrimaryButton href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <span aria-hidden="true">→</span>
            </PrimaryButton>

            <SecondaryButton href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </SecondaryButton>
          </Actions>
        </HeroContent>

        <ScrollIndicator aria-hidden="true">
          <span />
          <p>Scroll to explore</p>
        </ScrollIndicator>
      </HeroContainer>
    </HeroSection>
  );
}