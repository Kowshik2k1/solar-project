import contact from "@/data/contact.json";

import {
  Section,
  Container,
  Content,
  Eyebrow,
  Title,
  Description,
  InfoList,
  InfoItem,
  InfoLabel,
  InfoValue,
} from "./style";

export default function ContactInfo() {
  return (
    <Section>
      <Container>
        <Content>
          <Eyebrow>{contact.info.eyebrow}</Eyebrow>

          <Title>{contact.info.title}</Title>

          <Description>{contact.info.description}</Description>

          <InfoList>
            {contact.info.items.map((item) => (
              <InfoItem key={item.label}>
                <InfoLabel>{item.label}</InfoLabel>

                {item.href ? (
                  <InfoValue href={item.href}>
                    {item.value}
                  </InfoValue>
                ) : (
                  <InfoValue as="span">{item.value}</InfoValue>
                )}
              </InfoItem>
            ))}
          </InfoList>
        </Content>
      </Container>
    </Section>
  );
}