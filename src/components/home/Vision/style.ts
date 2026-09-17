import styled from "styled-components";
import Link from "next/link";

import { theme } from "@/styles/theme";

export const Section = styled.section`
  padding: 120px 0;

  background: ${theme.colors.background};

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

  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);

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

export const Content = styled.div`
  max-width: 580px;
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

  color: ${theme.colors.textMuted};
`;

export const VisionLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 9px;

  margin-top: 32px;

  font-size: 14px;
  font-weight: 700;

  text-decoration: none;

  color: ${theme.colors.primary};

  span {
    transition: transform 0.2s ease;
  }

  &:hover {
    color: ${theme.colors.primaryDark};
  }

  &:hover span {
    transform: translateX(4px);
  }
`;

export const ImageWrapper = styled.div`
  aspect-ratio: 16 / 11;

  overflow: hidden;

  border-radius: ${theme.radius.lg};

  background: ${theme.colors.backgroundAlt};
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