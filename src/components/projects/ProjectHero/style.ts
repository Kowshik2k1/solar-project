import styled from "styled-components";
import { theme } from "@/styles/theme";

export const ProjectHeroStyles = styled.section`
  padding: ${theme.spacing.xxl} 0;
  background: ${theme.colors.primaryDark};
  color: ${theme.colors.white};

  .container {
    width: min(
      calc(100% - ${theme.container.padding} * 2),
      ${theme.container.maxWidth}
    );
    margin: 0 auto;
  }

  .eyebrow {
    display: block;
    margin-bottom: ${theme.spacing.sm};

    color: ${theme.colors.accent};
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h1 {
    max-width: 800px;
    margin: 0 0 ${theme.spacing.md};

    color: ${theme.colors.white};
    font-size: clamp(40px, 5vw, 68px);
    line-height: 1.08;
    letter-spacing: -0.03em;
  }

  .description {
    max-width: 680px;
    margin: 0;

    color: rgba(255, 255, 255, 0.75);
    font-size: 17px;
    line-height: 1.8;
  }

  .project-count {
    display: inline-flex;
    margin-top: ${theme.spacing.lg};
    padding: 8px 14px;

    color: ${theme.colors.white};
    background: rgba(255, 255, 255, 0.08);

    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: ${theme.radius.pill};

    font-size: 13px;
    font-weight: 600;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xl} 0;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 56px 0;

    h1 {
      font-size: 40px;
    }

    .description {
      font-size: 15px;
    }
  }
`;