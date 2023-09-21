import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(#f7d800, #f7d800, #f7b400);

  padding: ${(p) => p.theme.spacing.xs};
  padding-right: ${(p) => p.theme.spacing.sm};
`;

export const LogoWrapper = styled.div`
  align-items: center;
  display: flex;

  gap: 1rem;
`;

export const MenuWrapper = styled.div`
  display: flex;

  gap: 2rem;
`;

export const Image = styled.img`
  width: 8rem;
  height: 8rem;

  object-fit: contain;
`;
