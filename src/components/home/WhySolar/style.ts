import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Section = styled.section`
  padding: 120px 0;

  background: ${theme.colors.background};
`;

export const Header = styled.div`
  max-width: 680px;
  margin-bottom: 64px;
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  margin-bottom: 18px;

  color: ${theme.colors.primary};

  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;

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
  max-width: 580px;

  margin: 20px 0 0;

  color: ${theme.colors.textMuted};

  font-size: 17px;
  line-height: 1.7;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  border-top: 1px solid ${theme.colors.border};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article`
  padding: 32px 28px 32px 0;

  border-right: 1px solid ${theme.colors.border};

  &:not(:first-child) {
    padding-left: 28px;
  }

  &:last-child {
    border-right: 0;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    &:nth-child(2) {
      border-right: 0;
    }

    &:nth-child(3),
    &:nth-child(4) {
      border-top: 1px solid ${theme.colors.border};
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 28px 0 !important;

    border-right: 0;

    &:not(:first-child) {
      border-top: 1px solid ${theme.colors.border};
    }
  }
`;

export const Number = styled.span`
  display: block;

  margin-bottom: 48px;

  color: ${theme.colors.accent};

  font-size: 13px;
  font-weight: 800;
`;

export const CardTitle = styled.h3`
  margin: 0;

  font-size: 21px;
  line-height: 1.25;
  font-weight: 700;
`;

export const CardDescription = styled.p`
  margin: 14px 0 0;

  color: ${theme.colors.textMuted};

  font-size: 14px;
  line-height: 1.7;
`;