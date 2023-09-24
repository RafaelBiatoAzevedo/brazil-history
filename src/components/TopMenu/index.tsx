import { useTheme } from "styled-components";
import { FCWithChildren } from "../../types/FCWithChildren";
import { Button } from "../Button";
import { Text } from "../Text";
import {
  ButtonMenu,
  IconButtonMenuWrapper,
  MenuWrapper,
  Option,
  OptionsWrapper,
  Wrapper,
} from "./styles";

//import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { useState } from "react";
import { ITopic } from "~/interfaces/Itopic";

interface ITopMenuProps {
  title: string;
  topics: ITopic[];
}

export const TopMenu: FCWithChildren<ITopMenuProps> = ({
  title,
  topics,
}): JSX.Element => {
  const { colors } = useTheme();
  const [isShowOptions, setIsShowOptions] = useState(false);
  return (
    <Wrapper>
      <Text align="center" size="1.8rem" color="onPrimary" weight="bold">
        {title}
      </Text>
      <MenuWrapper>
        {(topics || []).map((topic) => (
          <ButtonMenu
            key={topic.titleTopic}
            onMouseOver={() => setIsShowOptions(true)}
            onMouseOut={() => setIsShowOptions(false)}
          >
            {isShowOptions && topic.options.length > 1 && (
              <OptionsWrapper>
                {topic.options.map((opition) => (
                  <Option>
                    <Text>{opition}</Text>
                  </Option>
                ))}
              </OptionsWrapper>
            )}
            <Text size="1.4rem" color="onPrimary" weight="medium">
              {topic.titleTopic}
            </Text>
            {/* <IconButtonMenuWrapper>
              <MdArrowDropDown size={"2.5rem"} color={colors.onPrimary} />
            </IconButtonMenuWrapper> */}
          </ButtonMenu>
        ))}
      </MenuWrapper>
    </Wrapper>
  );
};
