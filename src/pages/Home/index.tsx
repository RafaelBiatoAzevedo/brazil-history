import { useCallback, useState } from "react";
import { FCWithChildren } from "../../types/FCWithChildren";

import { TopMenu } from "~/components/TopMenu";
import { Text } from "~/components/Text";
import { Header } from "~/components/Header";

import { MdArrowForward } from "react-icons/md";

import {
  MainWrapper,
  TopicTitleWrapper,
  TopicWrapper,
  Wrapper,
} from "./styles";
import { useTheme } from "styled-components";

const HISTORY_THEME = {
  title: "Autoridades policiais do Brasil Império",
  topics: [
    {
      titleTopic: "História da polícia",
      options: ["Estudo sobre a história da polícia"],
    },
    {
      titleTopic: "Biografias",
      options: ["Autoridades de São Paulo - SP", "Autoridades Pernambuco - PE"],
    },
  ],
};

export const Home: FCWithChildren = (): JSX.Element => {
  const { colors } = useTheme();
  const [topicSelected, setTopicSelected] = useState(
    HISTORY_THEME.topics[0].titleTopic
  );
  const [subtopicSelected, setSubtopicSelected] = useState(
    HISTORY_THEME.topics[0].options[0]
  );

  const hadleChangeTopicSelected = useCallback((newTopic: string) => {}, []);

  return (
    <Wrapper>
      <Header />
      <TopMenu
        title={HISTORY_THEME.title}
        topics={HISTORY_THEME.topics}
      ></TopMenu>
      <MainWrapper>
        <TopicTitleWrapper>
          <Text color="primary" weight="bold" size="1.5rem">
            {topicSelected}
          </Text>
          <MdArrowForward color={colors.primary} size={"1.5rem"} />
          <Text color="onBackground" size="1.5rem">
            {subtopicSelected}
          </Text>
        </TopicTitleWrapper>
        <TopicWrapper>
          <Text color="primary" size="3rem" weight="bold">
            Dados a serem exibidos
          </Text>
        </TopicWrapper>
      </MainWrapper>
    </Wrapper>
  );
};
