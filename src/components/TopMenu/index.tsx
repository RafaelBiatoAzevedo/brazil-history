import { useTheme } from "styled-components";
import { FCWithChildren } from "../../types/FCWithChildren";
import { Button } from "../Button";
import { Text } from "../Text";
import { MenuWrapper, Wrapper } from "./styles";

interface ITopMenuProps {
  title: string;
}

export const TopMenu: FCWithChildren<ITopMenuProps> = ({
  title,
}): JSX.Element => {
  const { colors } = useTheme();
  return (
    <Wrapper>
      <Text size="1.6rem" color="onSecondary" weight="medium">
        {title}
      </Text>
      <MenuWrapper>
        {["Menu 1", "Menu 2", "Menu 3", "Menu 4", "Menu 5", "Menu 6"].map(
          (title, index) => (
            <Button
              width="10%"
              backgroundColor={"transparent"}
              borderRadius="0px"
              withBorder={index === 0}
              borderColor={"transparent"}
              fontColor={"onSecondary"}
              fontSize="1.3rem"
              fontWeight="bold"
              paddingX="2rem"
              paddingY="1rem"
              title={title}
              type="submit"
            />
          )
        )}
      </MenuWrapper>
    </Wrapper>
  );
};
