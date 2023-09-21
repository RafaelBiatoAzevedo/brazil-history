import styled from "styled-components";
import { ColorScheme } from "styled-components";

type TStyledText = {
  weight: string;
  color: ColorScheme;
  size: string;
  align: string;
  paddingY: string;
  paddingX: string;
  alignSelf: string;
  whiteSpace: string;
};

export const StyledText = styled.p<TStyledText>`
  align-self: ${(p) => p.alignSelf};
  color: ${(p) => p.theme.colors[p.color]};
  font-size: ${(p) => p.size};
  font-weight: ${(p) => p.weight};
  text-align: ${(p) => p.align};
  padding: ${(p) => p.paddingY} ${(p) => p.paddingX};
  white-space: ${(p) => p.whiteSpace};
`;
