import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Container = styled.div`
  width: 100%;
  max-width: ${theme.container.maxWidth};
  margin: 0 auto;
  padding-left: ${theme.container.padding};
  padding-right: ${theme.container.padding};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;