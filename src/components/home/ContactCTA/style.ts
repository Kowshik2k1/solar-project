import styled from "styled-components";
import Link from "next/link";

import { theme } from "@/styles/theme";

export const Section = styled.section`
  padding: 100px 0;

  background: ${theme.colors.primary};

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

export const Content = styled.div`
  max-width: 800px;
`;

export const Eyebrow = styled.p`
  display: flex;
  align-items: center;
  gap: 12px;

  margin: 0 0 20px;

  font-size: 13px;
  font-weight: 700;

  letter-spacing: 0.14em;
  text-transform: uppercase;

  color: ${theme.colors.white};

  &::before {
    content: "";

    width: 28px;
    height: 2px;

    background: ${theme.colors.accent};
  }
`;

export const Title = styled.h2`
  margin: 0;

  font-size: clamp(38px, 5vw, 64px);
  line-height: 1.08;

  letter-spacing: -0.04em;

  color: ${theme.colors.white};
`;

export const Description = styled.p`
  max-width: 600px;

  margin: 24px 0 0;

  font-size: 17px;
  line-height: 1.7;

  color: rgba(255, 255, 255, 0.78);
`;

export const ContactLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  margin-top: 32px;

  min-height: 50px;

  padding: 0 24px;

  border-radius: ${theme.radius.sm};

  background: ${theme.colors.white};

  color: ${theme.colors.primaryDark};

  font-size: 14px;
  font-weight: 700;

  text-decoration: none;

  transition:
    transform 0.2s ease,
    background 0.2s ease;

  span {
    transition: transform 0.2s ease;
  }

  &:hover {
    background: ${theme.colors.background};
    transform: translateY(-2px);
  }

  &:hover span {
    transform: translateX(4px);
  }
`;