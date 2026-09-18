import styled from "styled-components";
import { theme } from "@/styles/theme";

export const ProjectGridStyles = styled.section`
  padding: 0 0 ${theme.spacing.xxl};
  background: ${theme.colors.white};

  .container {
    width: min(
      calc(100% - ${theme.container.padding} * 2),
      ${theme.container.maxWidth}
    );
    margin: 0 auto;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.lg};
  }

  .card {
    overflow: hidden;

    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.radius.lg};

    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 40px rgba(11, 45, 77, 0.1);
    }
  }

  .image-wrapper {
    position: relative;
    height: 420px;
    overflow: hidden;
    background: ${theme.colors.backgroundAlt};

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;

      transition: transform 0.5s ease;
    }

    &:hover img {
      transform: scale(1.03);
    }
  }

  .status {
    position: absolute;
    top: ${theme.spacing.md};
    left: ${theme.spacing.md};

    padding: 7px 12px;

    color: ${theme.colors.white};
    background: ${theme.colors.primary};

    border-radius: ${theme.radius.pill};

    font-size: 12px;
    font-weight: 700;
  }

  .content {
    padding: ${theme.spacing.lg};
  }

  .category {
    display: block;
    margin-bottom: 8px;

    color: ${theme.colors.primary};

    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h2 {
    margin: 0 0 ${theme.spacing.sm};

    color: ${theme.colors.primaryDark};

    font-size: clamp(24px, 3vw, 32px);
    line-height: 1.2;
  }

  p {
    margin: 0;

    color: ${theme.colors.textMuted};

    font-size: 14px;
    line-height: 1.75;
  }

  .details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.md};

    margin-top: ${theme.spacing.lg};
    padding-top: ${theme.spacing.md};

    border-top: 1px solid ${theme.colors.border};
  }

  .detail {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .detail-label {
    color: ${theme.colors.textMuted};

    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .detail-value {
    color: ${theme.colors.primaryDark};

    font-size: 14px;
    font-weight: 600;
  }

  .view-project {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    margin-top: ${theme.spacing.lg};

    color: ${theme.colors.primary};

    font-size: 14px;
    font-weight: 700;
    text-decoration: none;

    transition:
      color 0.25s ease,
      gap 0.25s ease;

    &:hover {
      color: ${theme.colors.primaryDark};
      gap: 12px;
    }

    span {
      font-size: 18px;
      line-height: 1;
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding-bottom: ${theme.spacing.xl};

    .grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    .image-wrapper {
      height: 280px;
    }

    .content {
      padding: ${theme.spacing.md};
    }
  }
`;