import styled from "styled-components";
import Link from "next/link";
import { theme } from "@/styles/theme";

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;

  width: 100%;

  background: ${theme.colors.white};
  border-bottom: 1px solid ${theme.colors.border};
`;

export const HeaderContainer = styled.div`
  width: min(
    calc(100% - 64px),
    ${theme.container.maxWidth}
  );

  min-height: 82px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: calc(100% - 32px);
    min-height: 72px;
  }
`;

/* --------------------------------
   Logo
-------------------------------- */

export const Logo = styled(Link)`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;

  flex-shrink: 0;

  text-decoration: none;
  line-height: 1;
`;

export const LogoName = styled.span`
  font-size: 23px;
  font-weight: 800;
  letter-spacing: -0.045em;

  color: ${theme.colors.primaryDark};
`;

export const LogoTagline = styled.span`
  margin-top: 5px;

  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;

  color: ${theme.colors.primary};
`;

/* --------------------------------
   Desktop Navigation
-------------------------------- */

export const DesktopNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  margin-left: auto;

  @media (max-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const NavLink = styled(Link)<{ $isActive: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 8px 0;

  color: ${({ $isActive }) =>
    $isActive ? theme.colors.primary : theme.colors.text};
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;

  transition:
    color 0.25s ease,
    opacity 0.25s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;

    width: ${({ $isActive }) => ($isActive ? "100%" : "0")};
    height: 2px;

    background: ${theme.colors.primary};
    border-radius: 999px;

    transition: width 0.25s ease;
  }

  &:hover {
    color: ${theme.colors.primary};
  }

  &:hover::after {
    width: 100%;
  }
`;
/* --------------------------------
   Desktop CTA
-------------------------------- */

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;

  flex-shrink: 0;

  @media (max-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const QuoteButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  min-height: 44px;
  padding: 0 20px;

  border-radius: ${theme.radius.sm};

  background: ${theme.colors.primary};
  color: ${theme.colors.white};

  font-size: 13px;
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
    transform: translateY(-1px);
  }

  &:hover span {
    transform: translateX(3px);
  }
`;

/* --------------------------------
   Mobile Menu Button
-------------------------------- */

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

  cursor: pointer;

  @media (max-width: ${theme.breakpoints.desktop}) {
    display: flex;
  }
`;

export const MenuLine = styled.span<{ $isOpen: boolean }>`
  display: block;

  width: 22px;
  height: 2px;

  border-radius: 2px;

  background: ${theme.colors.primaryDark};

  transition:
    transform 0.3s ease,
    opacity 0.2s ease;

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

/* --------------------------------
   Mobile Navigation
-------------------------------- */

export const MobileNavigation = styled.nav<{ $isOpen: boolean }>`
  display: none;

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

    flex-direction: column;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const MobileNavLink = styled(Link)<{ $isActive: boolean }>`
  display: flex;
  align-items: center;

  min-height: 48px;

  padding: 0 8px;

  border-bottom: 1px solid ${theme.colors.border};

  font-size: 15px;
  font-weight: 600;

  text-decoration: none;

  color: ${({ $isActive }) =>
    $isActive ? theme.colors.primary : theme.colors.text};

  &:hover {
    color: ${theme.colors.primary};
  }
`;

export const MobileQuoteButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  min-height: 46px;

  margin-top: 20px;
  padding: 0 20px;

  border-radius: ${theme.radius.sm};

  background: ${theme.colors.primary};
  color: ${theme.colors.white};

  font-size: 14px;
  font-weight: 700;

  text-decoration: none;

  span {
    transition: transform 0.2s ease;
  }

  &:hover {
    background: ${theme.colors.primaryDark};
  }

  &:hover span {
    transform: translateX(3px);
  }
`;