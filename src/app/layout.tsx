import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "@/styles/GlobalStyles";
import { theme } from "@/styles/theme";
import { Header } from "@/components/layout/Header";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Solar Energy Solutions",
  description:
    "Professional solar panel installation solutions for residential, commercial and industrial projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.variable}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}