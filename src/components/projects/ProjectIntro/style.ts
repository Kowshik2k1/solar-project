import styled from "styled-components";
import { theme } from "@/styles/theme";

export const ProjectIntroStyles = styled.section`
  padding: ${theme.spacing.xxl} 0;
  background: ${theme.colors.white};

  .container {
    width: min(
      calc(100% - ${theme.container.padding} * 2),
      ${theme.container.maxWidth}
    );
    margin: 0 auto;
  }

  .content {
    max-width: 820px;
  }

  .eyebrow {
    display: block;
    margin-bottom: ${theme.spacing.sm};

    color: ${theme.colors.primary};
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h2 {
    margin: 0 0 ${theme.spacing.md};

    color: ${theme.colors.primaryDark};
    font-size: clamp(32px, 4vw, 50px);
    line-height: 1.15;
    letter-spacing: -0.025em;
  }

  p {
    max-width: 700px;
    margin: 0;

    color: ${theme.colors.textMuted};
    font-size: 16px;
    line-height: 1.8;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xl} 0;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 56px 0;

    h2 {
      font-size: 32px;
    }

    p {
      font-size: 15px;
    }
  }
`;