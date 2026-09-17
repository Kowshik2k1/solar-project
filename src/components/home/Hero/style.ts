import styled from "styled-components";
import Link from "next/link";
import { theme } from "@/styles/theme";

interface HeroBackgroundProps {
  $backgroundImage: string;
}

export const HeroSection = styled.section`
  position: relative;

  min-height: calc(100vh - 82px);

  display: flex;
  align-items: center;

  overflow: hidden;

  background: ${theme.colors.primaryDark};

  @media (max-width: ${theme.breakpoints.mobile}) {
    min-height: calc(100vh - 72px);
  }
`;

export const HeroBackground = styled.div<HeroBackgroundProps>`
  position: absolute;
  inset: 0;

  background-image: url("${({ $backgroundImage }) => $backgroundImage}");
  background-position: center;
  background-size: cover;

  transform: scale(1.01);
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      90deg,
      rgba(11, 45, 77, 0.94) 0%,
      rgba(11, 45, 77, 0.82) 42%,
      rgba(11, 45, 77, 0.45) 75%,
      rgba(11, 45, 77, 0.25) 100%
    );
`;

export const HeroContainer = styled.div`
  position: relative;
  z-index: 1;

  width: min(
    calc(100% - 64px),
    ${theme.container.maxWidth}
  );

  min-height: inherit;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 100px 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: calc(100% - 32px);
    padding: 72px 0;
  }
`;

export const HeroContent = styled.div`
  width: 100%;
  max-width: 780px;
`;

export const Eyebrow = styled.p`
  display: flex;
  align-items: center;
  gap: 12px;

  margin: 0 0 24px;

  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;

  color: ${theme.colors.white};

  &::before {
    content: "";

    width: 32px;
    height: 2px;

    background: ${theme.colors.accent};
  }
`;

export const Title = styled.h1`
  max-width: 780px;

  margin: 0;

  font-size: clamp(44px, 6vw, 78px);
  line-height: 1.03;
  letter-spacing: -0.045em;
  font-weight: 800;

  color: ${theme.colors.white};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: clamp(40px, 12vw, 56px);
  }
`;

export const Description = styled.p`
  max-width: 620px;

  margin: 28px 0 0;

  font-size: 18px;
  line-height: 1.7;

  color: rgba(255, 255, 255, 0.82);

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-top: 22px;

    font-size: 16px;
    line-height: 1.65;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  margin-top: 36px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    align-items: stretch;
    flex-direction: column;

    max-width: 280px;
  }
`;

export const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  min-height: 50px;
  padding: 0 24px;

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
    background: ${theme.colors.secondary};
    transform: translateY(-2px);
  }

  &:hover span {
    transform: translateX(4px);
  }
`;

export const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 50px;
  padding: 0 24px;

  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: ${theme.radius.sm};

  background: rgba(255, 255, 255, 0.06);
  color: ${theme.colors.white};

  font-size: 14px;
  font-weight: 700;

  text-decoration: none;

  backdrop-filter: blur(4px);

  transition:
    background 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.7);
  }
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  right: 0;
  bottom: 42px;

  display: flex;
  align-items: center;
  gap: 12px;

  p {
    margin: 0;

    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;

    color: rgba(255, 255, 255, 0.65);
  }

  span {
    display: block;

    width: 28px;
    height: 1px;

    background: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;