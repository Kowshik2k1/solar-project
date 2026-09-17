import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Section = styled.section`
  padding: ${theme.spacing.xxl} 0;
  background: ${theme.colors.white};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

export const Container = styled.div`
  width: min(
    calc(100% - ${theme.container.padding} * 2),
    ${theme.container.maxWidth}
  );
  margin: 0 auto;
`;

export const Content = styled.div`
  max-width: 760px;
`;

export const Eyebrow = styled.span`
  display: block;
  margin-bottom: ${theme.spacing.sm};

  color: ${theme.colors.primary};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const Title = styled.h2`
  margin: 0 0 ${theme.spacing.md};

  color: ${theme.colors.primaryDark};
  font-size: clamp(32px, 4vw, 48px);
  line-height: 1.15;
  letter-spacing: -0.025em;
`;

export const Description = styled.p`
  max-width: 680px;
  margin: 0;

  color: ${theme.colors.textMuted};
  font-size: 16px;
  line-height: 1.8;
`;

export const InfoList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.lg};

  margin-top: ${theme.spacing.xl};
  padding-top: ${theme.spacing.lg};

  border-top: 1px solid ${theme.colors.border};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.md};
  }
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InfoLabel = styled.span`
  color: ${theme.colors.textMuted};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const InfoValue = styled.a`
  color: ${theme.colors.primaryDark};
  font-size: 15px;
  font-weight: 600;
  line-height: 1.5;
  text-decoration: none;

  transition: color 0.25s ease;

  &:hover {
    color: ${theme.colors.primary};
  }
`;