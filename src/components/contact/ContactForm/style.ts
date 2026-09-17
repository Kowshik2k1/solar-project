import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Section = styled.section`
  padding: ${theme.spacing.xxl} 0;
  background: ${theme.colors.backgroundAlt};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xl} 0;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 48px 0;
  }
`;

export const Container = styled.div`
  width: min(
    calc(100% - ${theme.container.padding} * 2),
    ${theme.container.maxWidth}
  );
  margin: 0 auto;
`;

export const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: ${theme.spacing.xxl};

  padding: ${theme.spacing.xl};

  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.lg};

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.md};
    border-radius: ${theme.radius.md};
  }
`;

export const FormHeader = styled.div`
  align-self: start;
`;

export const Eyebrow = styled.span`
  display: block;
  margin-bottom: ${theme.spacing.sm};

  color: ${theme.colors.primary};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const Title = styled.h2`
  margin: 0 0 ${theme.spacing.md};

  color: ${theme.colors.primaryDark};
  font-size: clamp(32px, 4vw, 48px);
  line-height: 1.15;
  letter-spacing: -0.025em;
`;

export const Description = styled.p`
  margin: 0;

  color: ${theme.colors.textMuted};
  font-size: 15px;
  line-height: 1.8;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

export const FieldGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  color: ${theme.colors.primaryDark};
  font-size: 13px;
  font-weight: 600;

  span {
    color: ${theme.colors.primary};
  }
`;

const InputBase = `
  width: 100%;
  padding: 13px 14px;

  color: ${theme.colors.text};
  background: ${theme.colors.white};

  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.sm};

  font-family: inherit;
  font-size: 14px;

  outline: none;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: ${theme.colors.textMuted};
    opacity: 0.7;
  }

  &:focus {
    border-color: ${theme.colors.primary};

    box-shadow: 0 0 0 3px rgba(21, 87, 166, 0.1);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const Input = styled.input`
  ${InputBase}
`;

export const Select = styled.select`
  ${InputBase}

  cursor: pointer;
`;

export const Textarea = styled.textarea`
  ${InputBase}

  resize: vertical;
  min-height: 140px;
`;

export const ErrorMessage = styled.span`
  color: #c62828;
  font-size: 12px;
`;

export const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  align-self: flex-start;

  min-width: 170px;
  padding: 14px 22px;

  color: ${theme.colors.white};
  background: ${theme.colors.primary};

  border: none;
  border-radius: ${theme.radius.sm};

  font-family: inherit;
  font-size: 14px;
  font-weight: 700;

  cursor: pointer;

  transition:
    background 0.25s ease,
    transform 0.25s ease;

  &:hover:not(:disabled) {
    background: ${theme.colors.primaryDark};
    transform: translateY(-2px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.65;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const SubmitArrow = styled.span`
  font-size: 18px;
  line-height: 1;
`;