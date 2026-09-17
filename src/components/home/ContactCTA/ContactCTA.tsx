import contactCta from "@/data/contact-cta.json";
import { ScrollReveal } from "@/components/common/ScrollReveal";

import {
  Section,
  Container,
  Content,
  Eyebrow,
  Title,
  Description,
  ContactLink,
} from "./style";

export default function ContactCTA() {
  return (
    <Section>
      <Container>
        <ScrollReveal>
          <Content>
            <Eyebrow>{contactCta.eyebrow}</Eyebrow>

            <Title>{contactCta.title}</Title>

            <Description>
              {contactCta.description}
            </Description>

            <ContactLink href={contactCta.cta.href}>
              {contactCta.cta.label}
              <span aria-hidden="true">→</span>
            </ContactLink>
          </Content>
        </ScrollReveal>
      </Container>
    </Section>
  );
}