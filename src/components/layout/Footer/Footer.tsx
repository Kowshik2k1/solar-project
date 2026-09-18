import site from "@/data/site.json";
import navigation from "@/data/navigation.json";

import {
  FooterWrapper,
  Container,
  FooterTop,
  Brand,
  Logo,
  LogoName,
  LogoTagline,
  BrandDescription,
  NavigationColumns,
  NavigationColumn,
  ColumnTitle,
  FooterLink,
  FooterBottom,
  Copyright,
  LegalLinks,
} from "./style";

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <FooterTop>
          <Brand>
            <Logo href="/" aria-label={`${site.name} home`}>
              <LogoName>{site.shortName}</LogoName>
            </Logo>

            <BrandDescription>
              {site.description}
            </BrandDescription>
          </Brand>

          <NavigationColumns>
            <NavigationColumn>
              <ColumnTitle>ASP Infrastructure Projects</ColumnTitle>

              {navigation
                .filter((item) =>
                  ["Home", "About", "Gallery"].includes(item.label),
                )
                .map((item) => (
                  <FooterLink key={item.href} href={item.href}>
                    {item.label}
                  </FooterLink>
                ))}
            </NavigationColumn>

            <NavigationColumn>
              <ColumnTitle>Projects</ColumnTitle>

              <FooterLink href="/projects">
                All Projects
              </FooterLink>

              <FooterLink href="/projects/solar-energy-project">
                Solar Project
              </FooterLink>
            </NavigationColumn>

            <NavigationColumn>
              <ColumnTitle>Connect</ColumnTitle>

              <FooterLink href="/contact">
                Get in Touch
              </FooterLink>

              <FooterLink href="/contact">
                Contact Us
              </FooterLink>
            </NavigationColumn>
          </NavigationColumns>
        </FooterTop>

        <FooterBottom>
          <Copyright>
            © {new Date().getFullYear()} {site.name}. All rights
            reserved.
          </Copyright>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
}