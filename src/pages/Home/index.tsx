import { useCallback, useEffect, useState } from "react";
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

export interface ITopic {
  titleTopic: string;
  options: string[];
}

interface IHistoryTheme {
  title: string;
  topics: ITopic[];
}

const HISTORY_THEME: IHistoryTheme = {
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
  const [topicSelected, setTopicSelected] = useState(HISTORY_THEME.topics[0]);
  const [subtopicSelected, setSubtopicNumber] = useState<number | undefined>(0);

  const changeSubtopicSelected = useCallback(
    (newTopic: ITopic, newSubtopicNumber?: number) => {
      setTopicSelected(newTopic);
      setSubtopicNumber(newSubtopicNumber);
    },
    []
  );

  useEffect(() => {
    if (topicSelected?.options && topicSelected?.options?.length === 1) {
      setSubtopicNumber(0);
    }
  }, [topicSelected, subtopicSelected]);

  return (
    <Wrapper>
      <Header />
      <TopMenu
        title={HISTORY_THEME.title}
        topics={HISTORY_THEME.topics}
        changeSelectSubtopic={changeSubtopicSelected}
      ></TopMenu>
      <MainWrapper>
        <TopicTitleWrapper>
          <Text color="primary" weight="bold" size="1.5rem">
            {topicSelected.titleTopic}
          </Text>
          {subtopicSelected !== undefined && (
            <MdArrowForward color={colors.primary} size={"1.5rem"} />
          )}
          {subtopicSelected !== undefined && (
            <Text color="onBackground" size="1.5rem" weight="medium">
              {topicSelected.options[subtopicSelected]}
            </Text>
          )}
        </TopicTitleWrapper>
        <TopicWrapper>
          {topicSelected && subtopicSelected === undefined && (
            <ul>
              {topicSelected.options.map((topic) => (
                <li>{topic}</li>
              ))}
            </ul>
          )}
        </TopicWrapper>
      </MainWrapper>
    </Wrapper>
  );
};
