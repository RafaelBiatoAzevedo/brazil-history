import { useTheme } from "styled-components";
import { FCWithChildren } from "../../types/FCWithChildren";
import { Button } from "../Button";
import { Text } from "../Text";
import {
  ButtonMenu,
  ButtonWrapper,
  IconButtonMenuWrapper,
  MenuWrapper,
  Option,
  OptionsWrapper,
  OverlayWrapper,
  Wrapper,
} from "./styles";

//import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { useCallback, useState } from "react";
import { ITopic } from "~/interfaces/Itopic";

interface ITopMenuProps {
  title: string;
  topics: ITopic[];
  changeSelectSubtopic: (newTopic: ITopic, newSubtopic?: number) => void;
}

export const TopMenu: FCWithChildren<ITopMenuProps> = ({
  title,
  topics,
  changeSelectSubtopic,
}): JSX.Element => {
  const { colors } = useTheme();
  const [topicIsHover, setTopicIsHover] = useState<undefined | string>(
    undefined
  );

  const handleTopicHover = useCallback((topicName?: string) => {
    if (topicName) {
      setTopicIsHover(topicName);
    } else {
      setTopicIsHover(undefined);
    }
  }, []);

  const handleChangeSubtopic = useCallback(
    (newTopic: ITopic, newSubtopic?: number) => {
      changeSelectSubtopic(newTopic, newSubtopic);
    },
    [changeSelectSubtopic]
  );

  return (
    <Wrapper>
      <Text align="center" size="1.8rem" color="onPrimary" weight="bold">
        {title}
      </Text>
      <MenuWrapper>
        {(topics || []).map((topic) => (
          <ButtonWrapper>
            <ButtonMenu
              key={topic.titleTopic}
              onMouseOver={() => handleTopicHover(topic.titleTopic)}
              onClick={() => handleChangeSubtopic(topic, undefined)}
            >
              <Text size="1.4rem" color="onPrimary" weight="medium">
                {topic.titleTopic}
              </Text>
              {/* <IconButtonMenuWrapper>
              <MdArrowDropDown size={"2.5rem"} color={colors.onPrimary} />
            </IconButtonMenuWrapper> */}
            </ButtonMenu>
            {topicIsHover === topic.titleTopic && topic.options.length > 1 && (
              <OptionsWrapper
                onMouseOver={() => handleTopicHover(topic.titleTopic)}
                onMouseOut={() => handleTopicHover()}
              >
                {topic.options.map((opition, index) => (
                  <Option
                    key={opition}
                    onClick={() => handleChangeSubtopic(topic, index)}
                  >
                    <Text>{opition}</Text>
                  </Option>
                ))}
              </OptionsWrapper>
            )}
          </ButtonWrapper>
        ))}
      </MenuWrapper>
    </Wrapper>
  );
};
