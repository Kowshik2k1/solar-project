import styled, { css } from "styled-components";

type Direction = "up" | "down" | "left" | "right";

interface RevealProps {
  $isVisible: boolean;
  $direction: Direction;
  $delay: number;
}

const getInitialTransform = ($direction: Direction) => {
  switch ($direction) {
    case "down":
      return "translateY(-24px)";
    case "left":
      return "translateX(24px)";
    case "right":
      return "translateX(-24px)";
    case "up":
    default:
      return "translateY(24px)";
  }
};

export const RevealWrapper = styled.div<RevealProps>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};

  transform: ${({ $isVisible, $direction }) =>
    $isVisible ? "translate3d(0, 0, 0)" : getInitialTransform($direction)};

  transition:
    opacity 0.65s ease,
    transform 0.65s ease;

  ${({ $delay }) =>
    $delay > 0 &&
    css`
      transition-delay: ${$delay}ms;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;