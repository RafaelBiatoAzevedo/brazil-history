import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(p) => p.theme.colors.secondary};

  gap: 1rem;

  padding: ${(p) => p.theme.spacing.sm} ${(p) => p.theme.spacing.md};
  padding-bottom: 0px;
`;

export const MenuWrapper = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;

  gap: 4rem;
`;
