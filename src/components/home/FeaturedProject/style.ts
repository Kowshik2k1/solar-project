import styled from "styled-components";
import Link from "next/link";

import { theme } from "@/styles/theme";

export const Section = styled.section`
  padding: 120px 0;

  background: ${theme.colors.primaryDark};

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
  max-width: 680px;

  margin-bottom: 56px;
`;

export const Eyebrow = styled.p`
  margin: 0 0 16px;

  font-size: 13px;
  font-weight: 700;

  letter-spacing: 0.14em;
  text-transform: uppercase;

  color: ${theme.colors.accent};
`;

export const Title = styled.h2`
  margin: 0;

  font-size: clamp(34px, 4vw, 52px);
  line-height: 1.1;

  letter-spacing: -0.035em;

  color: ${theme.colors.white};
`;

export const ProjectWrapper = styled.div`
  display: grid;

  grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.75fr);

  min-height: 560px;

  background: ${theme.colors.white};

  border-radius: ${theme.radius.lg};

  overflow: hidden;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ImageWrapper = styled.div`
  min-height: 560px;

  overflow: hidden;

  background: ${theme.colors.backgroundAlt};

  @media (max-width: ${theme.breakpoints.tablet}) {
    min-height: 400px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    min-height: 280px;
  }
`;

export const ProjectImage = styled.img`
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;

  transition: transform 0.6s ease;

  ${ImageWrapper}:hover & {
    transform: scale(1.03);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    ${ImageWrapper}:hover & {
      transform: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 56px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 48px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 32px 24px;
  }
`;

export const Status = styled.span`
  display: inline-flex;
  align-self: flex-start;

  padding: 7px 12px;

  border-radius: ${theme.radius.pill};

  background: ${theme.colors.backgroundAlt};

  font-size: 11px;
  font-weight: 700;

  letter-spacing: 0.08em;
  text-transform: uppercase;

  color: ${theme.colors.primary};
`;

export const ProjectTitle = styled.h3`
  margin: 24px 0 0;

  font-size: clamp(30px, 3vw, 42px);
  line-height: 1.12;

  letter-spacing: -0.03em;

  color: ${theme.colors.primaryDark};
`;

export const Description = styled.p`
  margin: 20px 0 0;

  font-size: 16px;
  line-height: 1.7;

  color: ${theme.colors.textMuted};
`;

export const Details = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 16px;

  margin-top: 36px;

  padding-top: 28px;

  border-top: 1px solid ${theme.colors.border};

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;

  gap: 6px;
`;

export const DetailLabel = styled.span`
  font-size: 11px;
  font-weight: 700;

  letter-spacing: 0.08em;
  text-transform: uppercase;

  color: ${theme.colors.textMuted};
`;

export const DetailValue = styled.span`
  font-size: 14px;
  font-weight: 700;

  color: ${theme.colors.text};
`;

export const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  align-self: flex-start;

  margin-top: 36px;

  min-height: 48px;

  padding: 0 22px;

  border-radius: ${theme.radius.sm};

  background: ${theme.colors.primary};

  color: ${theme.colors.white};

  font-size: 14px;
  font-weight: 700;

  text-decoration: none;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  span {
    transition: transform 0.2s ease;
  }

  &:hover {
    background: ${theme.colors.primaryDark};
    transform: translateY(-2px);
  }

  &:hover span {
    transform: translateX(4px);
  }
`;