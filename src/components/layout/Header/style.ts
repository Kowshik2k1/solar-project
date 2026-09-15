import styled from "styled-components";
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

export const MobileMenuButton = styled.button`
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

export const MenuLine = styled.span`
  display: block;

  width: 22px;
  height: 2px;

  border-radius: 2px;
  background: ${theme.colors.text};
`;

export const MobileNavigation = styled.nav`
  display: none;

  @media (max-width: ${theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: column;

    padding: 8px ${theme.container.padding} 24px;

    border-top: 1px solid ${theme.colors.border};
    background: ${theme.colors.white};
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