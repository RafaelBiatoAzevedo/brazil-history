import { Fragment, Ref } from "react";
import { ImSpinner2 } from "react-icons/im";

import { ColorScheme } from "styled-components";

import { Wrapper, WrapperIcons, WrapperRotate } from "./styles";
import { FCWithChildren } from "~/types/FCWithChildren";
import { Text } from "../Text";

type TButton = {
  title?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  isLoading?: boolean;
  isEffectFade?: boolean;
  justifyContent?: string;
  fontColor?: ColorScheme;
  fontSize?: string;
  fontWeight?: string;
  iconBefore?: JSX.Element;
  iconAfter?: JSX.Element;
  icons?: JSX.Element[];
  isRotate?: boolean;
  isChangeOrder?: boolean;
  flex?: number;
  backgroundColor?: string;
  isHover?: boolean;
  withBorder?: boolean;
  borderColor?: string;
  borderRadius?: string;
  flexDirection?: string;
  ref?: Ref<HTMLButtonElement>;
  disabled?: boolean;
  boxShadow?: string;

  width?: string;

  mLeft?: string;
  mRight?: string;
  mBottom?: string;
  mTop?: string;
  mY?: string;
  mX?: string;
  m?: string;

  paddingX?: string;
  paddingY?: string;

  style?: any;
};

export const Button: FCWithChildren<TButton> = ({
  title,
  type = "button",
  justifyContent = "center",
  fontColor,
  fontSize,
  fontWeight = "400",
  mRight,
  mLeft,
  backgroundColor = "transparent",
  withBorder,
  borderColor,
  borderRadius = "0.4rem",
  flexDirection = "row",
  paddingY = "opx",
  paddingX = "0px",
  onClick,
  iconBefore,
  iconAfter,
  icons,
  ref,
  width = "auto",
  boxShadow,
  disabled = false,
  isChangeOrder = false,
  isLoading = false,
  isHover = false,
  isEffectFade = false,
  style,
}): JSX.Element => {
  return (
    <Wrapper
      style={style}
      onClick={onClick}
      type={type}
      justifyContent={justifyContent}
      backgroundColor={backgroundColor}
      paddingX={paddingX}
      paddingY={paddingY}
      mRight={mRight}
      mLeft={mLeft}
      flexDirection={flexDirection}
      withBorder={withBorder}
      borderColor={borderColor}
      isHover={isHover}
      borderRadius={borderRadius}
      ref={ref}
      disabled={disabled}
      boxShadow={boxShadow}
      isChangeOrder={isChangeOrder}
      isEffectFade={isEffectFade}
      width={width}
    >
      {isLoading ? (
        <WrapperRotate>
          <ImSpinner2 color="white" size={fontSize} />
        </WrapperRotate>
      ) : (
        <Fragment>
          {iconBefore}
          {icons && <WrapperIcons>{icons}</WrapperIcons>}
          {title && (
            <Text weight={fontWeight} size={fontSize} color={fontColor}>
              {title}
            </Text>
          )}
          {iconAfter}
        </Fragment>
      )}
    </Wrapper>
  );
};
