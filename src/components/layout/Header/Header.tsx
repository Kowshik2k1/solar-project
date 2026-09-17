"use client";

import { useState } from "react";
import Link from "next/link";

import navigation from "@/data/navigation.json";
import site from "@/data/site.json";

import {
  HeaderWrapper,
  HeaderContainer,
  Logo,
  LogoName,
  LogoTagline,
  DesktopNavigation,
  NavLink,
  HeaderActions,
  QuoteButton,
  MobileMenuButton,
  MenuLine,
  MobileNavigation,
  MobileNavLink,
  MobileQuoteButton,
} from "./style";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        {/* Logo */}
        <Logo href="/" aria-label={`${site.name} home`}>
          <LogoName>{site.shortName}</LogoName>
          <LogoTagline>{site.tagline}</LogoTagline>
        </Logo>

        {/* Desktop Navigation */}
        <DesktopNavigation aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </DesktopNavigation>

        {/* Desktop CTA */}
        <HeaderActions>
          <QuoteButton href="/contact">
            Get a Quote
            <span aria-hidden="true">→</span>
          </QuoteButton>
        </HeaderActions>

        {/* Mobile Menu Button */}
        <MobileMenuButton
          type="button"
          $isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <MenuLine $isOpen={isMenuOpen} />
          <MenuLine $isOpen={isMenuOpen} />
          <MenuLine $isOpen={isMenuOpen} />
        </MobileMenuButton>
      </HeaderContainer>

      {/* Mobile Navigation */}
      <MobileNavigation
        id="mobile-navigation"
        $isOpen={isMenuOpen}
        aria-hidden={!isMenuOpen}
      >
        {navigation.map((item) => (
          <MobileNavLink
            key={item.href}
            href={item.href}
            tabIndex={isMenuOpen ? 0 : -1}
            onClick={handleMobileLinkClick}
          >
            {item.label}
          </MobileNavLink>
        ))}

        <MobileQuoteButton
          href="/contact"
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={handleMobileLinkClick}
        >
          Get a Quote
          <span aria-hidden="true">→</span>
        </MobileQuoteButton>
      </MobileNavigation>
    </HeaderWrapper>
  );
}