import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(p) => p.theme.colors.primary};

  gap: 1rem;

  border-top: solid 1.4px gray;
  padding: ${(p) => p.theme.spacing.sm} ${(p) => p.theme.spacing.md};
  padding-bottom: 0px;
`;

export const MenuWrapper = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;

  gap: 4rem;
`;

export const ButtonWrapper = styled.div`
  position: relative;
`;

export const ButtonMenu = styled.button`
  background-color: transparent;
  border: none;
  align-items: center;
  display: flex;
  cursor: pointer;
  flex-direction: row;

  padding: ${(p) => p.theme.spacing.xs} ${(p) => p.theme.spacing.sm};

  gap: 1rem;

  &:hover {
    transform: scale(1.1);
  }
`;

const rotate45 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-180deg);
  }
`;

export const IconButtonMenuWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;

  &:hover {
    animation: ${rotate45} 0.4s;
  }
`;

export const OptionsWrapper = styled.div`
  background-color: ${(p) => p.theme.colors.gray};
  justify-content: center;
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 100%;

  -webkit-box-shadow: -0px 1px 10px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -0px 1px 10px 2px rgba(0, 0, 0, 0.75);
  box-shadow: -0px 1px 10px 2px rgba(0, 0, 0, 0.75);
`;

export const Option = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  justify-content: flex-start;
  display: flex;

  padding: ${(p) => p.theme.spacing.xs} ${(p) => p.theme.spacing.md};

  &:hover {
    background-color: ${(p) => p.theme.colors.grayMedium};
  }
`;
