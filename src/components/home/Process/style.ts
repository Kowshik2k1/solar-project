import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Section = styled.section`
  padding: 120px 0;
  background: ${theme.colors.backgroundAlt};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 80px 0;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 64px 0;
  }
`;

export const Container = styled.div`
  width: min(
    calc(100% - 64px),
    ${theme.container.maxWidth}
  );

  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: calc(100% - 32px);
  }
`;

export const Header = styled.div`
  max-width: 700px;
  margin-bottom: 64px;
`;

export const Eyebrow = styled.p`
  margin: 0 0 16px;

  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;

  color: ${theme.colors.primary};
`;

export const Title = styled.h2`
  margin: 0;

  font-size: clamp(34px, 4vw, 52px);
  line-height: 1.1;
  letter-spacing: -0.035em;

  color: ${theme.colors.primaryDark};
`;

export const Description = styled.p`
  max-width: 620px;

  margin: 24px 0 0;

  font-size: 17px;
  line-height: 1.7;

  color: ${theme.colors.textMuted};
`;

export const ProcessList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  border-top: 1px solid ${theme.colors.border};
  border-left: 1px solid ${theme.colors.border};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ProcessItem = styled.article`
  min-height: 240px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 32px;

  border-right: 1px solid ${theme.colors.border};
  border-bottom: 1px solid ${theme.colors.border};

  background: ${theme.colors.white};

  transition:
    background 0.25s ease,
    transform 0.25s ease;

  &:hover {
    background: ${theme.colors.background};

    transform: translateY(-2px);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    min-height: 210px;
    padding: 24px;
  }
`;

export const Number = styled.span`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;

  color: ${theme.colors.primary};
`;

export const Content = styled.div`
  margin-top: 48px;
`;

export const ItemTitle = styled.h3`
  margin: 0 0 10px;

  font-size: 22px;
  line-height: 1.25;

  color: ${theme.colors.text};
`;

export const ItemDescription = styled.p`
  max-width: 440px;

  margin: 0;

  font-size: 14px;
  line-height: 1.7;

  color: ${theme.colors.textMuted};
`;