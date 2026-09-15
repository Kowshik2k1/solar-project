"use client";

import { useState } from "react";

import {
  DesktopNavigation,
  HeaderActions,
  HeaderContainer,
  HeaderWrapper,
  Logo,
  MenuLine,
  MobileMenuButton,
  MobileNavigation,
  MobileNavLink,
  MobileQuoteButton,
  NavLink,
  QuoteButton,
} from "./style";

const navigationItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Solutions",
    href: "/services",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo href="/" aria-label="Solar Energy Solutions home">
          SOLAR<span>.</span>
        </Logo>

        <DesktopNavigation aria-label="Main navigation">
          {navigationItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </DesktopNavigation>

        <HeaderActions>
          <QuoteButton href="/contact">Get a Quote</QuoteButton>
        </HeaderActions>

        <MobileMenuButton
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <MenuLine />
          <MenuLine />
          <MenuLine />
        </MobileMenuButton>
      </HeaderContainer>

      {isMenuOpen && (
        <MobileNavigation aria-label="Mobile navigation">
          {navigationItems.map((item) => (
            <MobileNavLink
              key={item.href}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </MobileNavLink>
          ))}

          <MobileQuoteButton href="/contact" onClick={closeMenu}>
            Get a Quote
          </MobileQuoteButton>
        </MobileNavigation>
      )}
    </HeaderWrapper>
  );
}