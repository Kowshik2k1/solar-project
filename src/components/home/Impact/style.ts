import styled from "styled-components";
import { theme } from "@/styles/theme";

export const ImpactSection = styled.section`
  padding: 48px 0;

  background: ${theme.colors.primary};
  color: ${theme.colors.white};
`;

export const ImpactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 36px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr 1fr;
    gap: 28px 20px;
  }
`;

export const ImpactItem = styled.div`
  padding: 0 32px;

  border-left: 1px solid rgba(255, 255, 255, 0.2);

  &:first-child {
    border-left: 0;
    padding-left: 0;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    &:nth-child(3) {
      border-left: 0;
      padding-left: 0;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 16px;

    &:nth-child(2),
    &:nth-child(4) {
      border-left: 1px solid rgba(255, 255, 255, 0.2);
    }
  }
`;

export const Value = styled.p`
  margin: 0;

  font-size: clamp(28px, 3vw, 42px);
  line-height: 1;
  font-weight: 800;
  letter-spacing: -0.04em;
`;

export const Label = styled.p`
  margin: 10px 0 0;

  font-size: 13px;
  line-height: 1.5;

  color: rgba(255, 255, 255, 0.65);
`;