import { Header } from "~/components/Header";
import { FCWithChildren } from "../../types/FCWithChildren";
import { MainWrapper, Wrapper } from "./styles";
import { TopMenu } from "~/components/TopMenu";
import { Text } from "~/components/Text";

export const Home: FCWithChildren = (): JSX.Element => {
  return (
    <Wrapper>
      <Header></Header>
      <TopMenu title={"Autoridades policiais do Brasil Império"}></TopMenu>
      <MainWrapper>
        <Text color="secondary" size="3rem" weight="bold">
          Dados a serem exibidos
        </Text>
      </MainWrapper>
    </Wrapper>
  );
};
