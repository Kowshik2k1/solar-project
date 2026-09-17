import styled from "styled-components";
import Link from "next/link";

import { theme } from "@/styles/theme";

export const Section = styled.section`
  padding: 120px 0;
  background: ${theme.colors.white};

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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);

  gap: 80px;

  align-items: center;

  @media (max-width: ${theme.breakpoints.desktop}) {
    gap: 48px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;

  aspect-ratio: 4 / 5;

  overflow: hidden;

  border-radius: ${theme.radius.lg};

  background: ${theme.colors.backgroundAlt};

  @media (max-width: ${theme.breakpoints.tablet}) {
    aspect-ratio: 16 / 10;
  }
`;

export const Image = styled.img`
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
  max-width: 620px;
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
  margin: 24px 0 0;

  font-size: 17px;
  line-height: 1.7;

  color: ${theme.colors.text};
`;

export const SecondaryDescription = styled.p`
  margin: 16px 0 0;

  font-size: 15px;
  line-height: 1.7;

  color: ${theme.colors.textMuted};
`;

export const Highlights = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 24px;

  margin-top: 40px;

  padding-top: 28px;

  border-top: 1px solid ${theme.colors.border};

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const Highlight = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 16px;
`;

export const HighlightNumber = styled.span`
  flex-shrink: 0;

  font-size: 13px;
  font-weight: 700;

  color: ${theme.colors.primary};
`;

export const HighlightTitle = styled.h3`
  margin: 0 0 6px;

  font-size: 16px;
  font-weight: 700;

  color: ${theme.colors.text};
`;

export const HighlightDescription = styled.p`
  margin: 0;

  font-size: 14px;
  line-height: 1.6;

  color: ${theme.colors.textMuted};
`;

export const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 9px;

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