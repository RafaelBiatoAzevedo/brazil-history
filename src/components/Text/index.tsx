import { ColorScheme } from "styled-components";

import { StyledText } from "./styles";
import { FCWithChildren } from "~/types/FCWithChildren";

export type TText = {
  weight?: string;
  color?: ColorScheme;
  size?: string;
  align?: string;
  alignSelf?: string;
  paddingY?: string;
  paddingX?: string;
  whiteSpace?: string;

  children?: any;
};

export const Text: FCWithChildren<TText> = ({
  children,
  weight = "400",
  color = "black",
  size = "14px",
  align = "left",
  paddingY = "0px",
  paddingX = "0px",
  alignSelf = "auto",
  whiteSpace = "nowrap",
}): JSX.Element => {
  return (
    <StyledText
      align={align}
      size={size}
      color={color}
      weight={weight}
      paddingY={paddingY}
      paddingX={paddingX}
      alignSelf={alignSelf}
      whiteSpace={whiteSpace}
    >
      {children}
    </StyledText>
  );
};
