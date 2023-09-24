import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${(p) => p.theme.colors.background};
  padding: ${(p) => p.theme.spacing.sm};
`;

export const TopicTitleWrapper = styled.div`
  align-items: center;
  display: flex;

  background-color: ${(p) => p.theme.colors.background};

  gap: 0.5rem;
`;

export const TopicWrapper = styled.div`
  display: flex;
  flex: 1;
  padding: ${(p) => p.theme.spacing.md} ${(p) => p.theme.spacing.lg};

  overflow-y: auto;
  scroll-behavior: smooth;
`;
