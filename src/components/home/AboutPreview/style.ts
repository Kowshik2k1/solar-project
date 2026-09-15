import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Section = styled.section`
  padding: 120px 0;

  background: ${theme.colors.backgroundAlt};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 80px;
  align-items: center;

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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const Content = styled.div`
  max-width: 620px;
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  margin-bottom: 20px;

  color: ${theme.colors.primary};

  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;

  &::before {
    content: "";

    width: 24px;
    height: 2px;

    background: ${theme.colors.accent};
  }
`;

export const Title = styled.h2`
  margin: 0;

  font-size: clamp(36px, 4.5vw, 60px);
  line-height: 1.05;
  letter-spacing: -0.05em;
  font-weight: 800;
`;

export const Description = styled.p`
  margin: 24px 0 0;

  color: ${theme.colors.textMuted};

  font-size: 17px;
  line-height: 1.75;
`;

export const SecondaryDescription = styled.p`
  margin: 16px 0 0;

  color: ${theme.colors.textMuted};

  font-size: 15px;
  line-height: 1.75;
`;

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 50px;
  margin-top: 32px;
  padding: 0 24px;

  border-radius: ${theme.radius.pill};

  background: ${theme.colors.primary};
  color: ${theme.colors.white};

  font-size: 14px;
  font-weight: 700;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: ${theme.colors.primaryDark};
    transform: translateY(-2px);
  }
`;
