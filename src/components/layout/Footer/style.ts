import styled from "styled-components";
import Link from "next/link";

import { theme } from "@/styles/theme";

export const FooterWrapper = styled.footer`
  background: ${theme.colors.primaryDark};
  color: ${theme.colors.white};
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

export const FooterTop = styled.div`
  display: grid;

  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);

  gap: 80px;

  padding: 80px 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;

    gap: 56px;

    padding: 64px 0;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 56px 0;
  }
`;

export const Brand = styled.div`
  max-width: 380px;
`;

export const Logo = styled(Link)`
  display: inline-flex;

  flex-direction: column;

  text-decoration: none;

  line-height: 1;
`;

export const LogoName = styled.span`
  font-size: 24px;
  font-weight: 800;

  letter-spacing: -0.045em;

  color: ${theme.colors.white};
`;

export const LogoTagline = styled.span`
  margin-top: 5px;

  font-size: 9px;
  font-weight: 700;

  letter-spacing: 0.22em;
  text-transform: uppercase;

  color: ${theme.colors.accent};
`;

export const BrandDescription = styled.p`
  max-width: 340px;

  margin: 24px 0 0;

  font-size: 14px;
  line-height: 1.7;

  color: rgba(255, 255, 255, 0.65);
`;

export const NavigationColumns = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 32px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);

    gap: 40px 24px;
  }
`;

export const NavigationColumn = styled.div`
  display: flex;

  flex-direction: column;

  align-items: flex-start;

  gap: 12px;
`;

export const ColumnTitle = styled.h3`
  margin: 0 0 8px;

  font-size: 12px;
  font-weight: 700;

  letter-spacing: 0.12em;
  text-transform: uppercase;

  color: ${theme.colors.white};
`;

export const FooterLink = styled(Link)`
  font-size: 14px;
  line-height: 1.5;

  text-decoration: none;

  color: rgba(255, 255, 255, 0.62);

  transition: color 0.2s ease;

  &:hover {
    color: ${theme.colors.white};
  }
`;

export const FooterBottom = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 24px;

  padding: 24px 0;

  border-top: 1px solid rgba(255, 255, 255, 0.12);

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;

    align-items: flex-start;

    padding: 20px 0;
  }
`;

export const Copyright = styled.p`
  margin: 0;

  font-size: 12px;

  color: rgba(255, 255, 255, 0.5);
`;

export const LegalLinks = styled.div`
  display: flex;

  align-items: center;

  gap: 24px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 16px;
  }
`;