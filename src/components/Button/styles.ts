import styled, { css } from "styled-components";

type TWrapper = {
  flex?: number;
  mRight?: string;
  mLeft?: string;
  mBottom?: string;
  mTop?: string;
  backgroundColor: string;
  withBorder?: boolean;
  borderColor?: string;
  flexDirection?: string;
  width: string;
  paddingY: string;
  paddingX: string;
  isHover: boolean;
  isChangeOrder: boolean;
  isEffectFade: boolean;
  justifyContent: string;
  borderRadius: string;
  boxShadow?: string;
};

export const Wrapper = styled.button<TWrapper>`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: ${(p) => p.flexDirection};
  box-shadow: ${(p) => p.boxShadow};
  background-color: ${(p) => p.backgroundColor};
  border-radius: ${(p) => p.borderRadius};
  justify-content: ${(p) => p.justifyContent};
  padding: ${(p) => p.paddingY} ${(p) => p.paddingX};
  gap: 1rem;
  width: ${(p) => (p.isEffectFade ? "50px" : p.width)};

  ${(p) =>
    p.withBorder &&
    css`
      border-style: solid;
      border-width: 2px;
      border-color: ${() => p.borderColor};
    `}

  ${(p) =>
    !p.withBorder &&
    css`
      border: none;
    `}
  ${(p) =>
    p.mRight &&
    css`
      margin-right: ${p.mRight};
    `}
  ${(p) =>
    p.mLeft &&
    css`
      margin-left: ${p.mLeft};
    `}
  ${(p) =>
    p.mBottom &&
    css`
      margin-bottom: ${p.mBottom};
    `}
  ${(p) =>
    p.mTop &&
    css`
      margin-top: ${p.mTop};
    `}
  ${(p) =>
    p.flex &&
    css`
      flex: ${p.flex};
    `};

  &:hover {
    ${(p) =>
      p.isHover &&
      css`
        border: solid 2px ${() => p.theme.colors.primary};
      `};
  }

  &:hover {
    ${({ isEffectFade, width }) =>
      isEffectFade &&
      width &&
      css`
        width: 200px;

        transition: width 2s;
      `};
  }
`;

export const WrapperIcons = styled.div`
  display: flex;
`;

export const WrapperRotate = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  animation-name: spin;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
