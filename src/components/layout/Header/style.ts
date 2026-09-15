import styled from "styled-components";
import { theme } from "@/styles/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof theme.colors;
    container: typeof theme.container;
    breakpoints: typeof theme.breakpoints;
    radius: typeof theme.radius;
  }
}

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  background: ${theme.colors.white};
  border-bottom: 1px solid ${theme.colors.border};
`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: ${theme.container.maxWidth};
  height: 80px;
  margin: 0 auto;
  padding: 0 ${theme.container.padding};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.a`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;

  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: ${theme.colors.primary};
`;

export const DesktopNavigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const NavLink = styled.a`
  position: relative;

  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.text};

  transition: color 0.2s ease;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const QuoteButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 44px;
  padding: 0 20px;

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
    transform: translateY(-1px);
  }
`;

export const MobileMenuButton = styled.button<{ $isOpen: boolean }>`
  display: none;

  width: 44px;
  height: 44px;

  padding: 0;
  border: 0;
  border-radius: ${theme.radius.sm};

  background: transparent;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;

  @media (max-width: ${theme.breakpoints.desktop}) {
    display: flex;
  }
`;

export const MenuLine = styled.span<{ $isOpen: boolean }>`
  display: block;

  width: 22px;
  height: 2px;

  border-radius: 2px;
  background: ${theme.colors.text};

  transition:
    transform 0.3s ease,
    opacity 0.2s ease,
    width 0.3s ease;

  &:nth-child(1) {
    transform: ${({ $isOpen }) =>
      $isOpen
        ? "translateY(7px) rotate(45deg)"
        : "translateY(0) rotate(0)"};
  }

  &:nth-child(2) {
    opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
    transform: ${({ $isOpen }) =>
      $isOpen ? "scaleX(0)" : "scaleX(1)"};
  }

  &:nth-child(3) {
    transform: ${({ $isOpen }) =>
      $isOpen
        ? "translateY(-7px) rotate(-45deg)"
        : "translateY(0) rotate(0)"};
  }
`;

export const MobileNavigation = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;

  max-height: ${({ $isOpen }) => ($isOpen ? "500px" : "0")};
  overflow: hidden;

  padding: ${({ $isOpen }) =>
    $isOpen ? "8px 24px 24px" : "0 24px"};

  border-top: ${({ $isOpen }) =>
    $isOpen ? `1px solid ${theme.colors.border}` : "0"};

  background: ${theme.colors.white};

  transition:
    max-height 0.35s ease,
    padding 0.35s ease,
    border-color 0.25s ease;

  @media (max-width: ${theme.breakpoints.desktop}) {
    display: flex;
  }
`;

export const MobileNavLink = styled.a`
  padding: 14px 0;

  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.text};

  border-bottom: 1px solid ${theme.colors.border};

  &:last-of-type {
    border-bottom: 0;
  }
`;

export const MobileQuoteButton = styled(QuoteButton)`
  margin-top: 16px;
  width: 100%;
`;