import contact from "@/data/contact.json";

import {
  HeroSection,
  HeroContainer,
  Eyebrow,
  Title,
  Description,
} from "./style";

export default function ContactHero() {
  return (
    <HeroSection>
      <HeroContainer>
        <Eyebrow>{contact.hero.eyebrow}</Eyebrow>

        <Title>{contact.hero.title}</Title>

        <Description>{contact.hero.description}</Description>
      </HeroContainer>
    </HeroSection>
  );
}