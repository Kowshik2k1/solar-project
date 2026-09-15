import styled from "styled-components";
import { theme } from "@/styles/theme";

export const HeroSection = styled.section`
  position: relative;
  min-height: calc(100vh - 80px);
  overflow: hidden;

  display: flex;
  align-items: center;

  color: ${theme.colors.white};
`;

export const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  background-image:
    linear-gradient(
      90deg,
      rgba(8, 29, 20, 0.92) 0%,
      rgba(8, 29, 20, 0.76) 42%,
      rgba(8, 29, 20, 0.25) 75%,
      rgba(8, 29, 20, 0.08) 100%
    ),
    url("https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2200&q=85");

  background-size: cover;
  background-position: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    background-position: 60% center;

    background-image:
      linear-gradient(
        90deg,
        rgba(8, 29, 20, 0.9) 0%,
        rgba(8, 29, 20, 0.65) 100%
      ),
      url("https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80");
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;

  width: 100%;
  max-width: 760px;

  padding: 96px 0;
`;

export const Eyebrow = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  margin: 0 0 24px;

  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  color: ${theme.colors.accent};

  &::before {
    content: "";
    width: 28px;
    height: 2px;
    background: currentColor;
  }
`;

export const Heading = styled.h1`
  max-width: 760px;

  margin: 0;

  font-size: clamp(44px, 6vw, 82px);
  line-height: 0.98;
  letter-spacing: -0.055em;
  font-weight: 800;

  text-wrap: balance;
`;

export const Description = styled.p`
  max-width: 600px;

  margin: 28px 0 0;

  font-size: clamp(16px, 1.5vw, 19px);
  line-height: 1.7;

  color: rgba(255, 255, 255, 0.82);
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  margin-top: 36px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 52px;
  padding: 0 26px;

  border-radius: ${theme.radius.pill};

  background: ${theme.colors.accent};
  color: ${theme.colors.black};

  font-size: 14px;
  font-weight: 800;

  transition:
    transform 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: #ffd45f;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 52px;
  padding: 0 26px;

  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: ${theme.radius.pill};

  background: rgba(255, 255, 255, 0.08);
  color: ${theme.colors.white};

  backdrop-filter: blur(8px);

  font-size: 14px;
  font-weight: 700;

  transition:
    background 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.6);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 0;

  margin-top: 72px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-top: 56px;
  }
`;

export const Stat = styled.div`
  padding: 0 28px;

  border-left: 1px solid rgba(255, 255, 255, 0.25);

  &:first-child {
    padding-left: 0;
    border-left: 0;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0;
    border-left: 0;
  }
`;

export const StatValue = styled.strong`
  display: block;

  font-size: 24px;
  line-height: 1.1;
  font-weight: 800;
`;

export const StatLabel = styled.span`
  display: block;

  margin-top: 6px;

  font-size: 12px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.65);
`;