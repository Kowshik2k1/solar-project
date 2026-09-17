import styled from "styled-components";
import { theme } from "@/styles/theme";

export const HeroSection = styled.section`
  padding: 96px 0;
  background: ${theme.colors.primaryDark};
  color: ${theme.colors.white};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 72px 0;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 56px 0;
  }
`;

export const HeroContainer = styled.div`
  width: min(
    calc(100% - ${theme.container.padding} * 2),
    ${theme.container.maxWidth}
  );
  margin: 0 auto;
`;

export const Eyebrow = styled.span`
  display: block;
  margin-bottom: ${theme.spacing.sm};

  color: ${theme.colors.accent};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  max-width: 760px;
  margin: 0 0 ${theme.spacing.md};

  color: ${theme.colors.white};
  font-size: clamp(40px, 5vw, 68px);
  line-height: 1.08;
  font-weight: 700;
  letter-spacing: -0.03em;
`;

export const Description = styled.p`
  max-width: 640px;
  margin: 0;

  color: rgba(255, 255, 255, 0.75);
  font-size: 17px;
  line-height: 1.8;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 15px;
  }
`;