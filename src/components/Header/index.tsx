import { FCWithChildren } from "../../types/FCWithChildren";
import { Button } from "../Button";
import { Text } from "../Text";
import { Image, LogoWrapper, MenuWrapper, Wrapper } from "./styles";

import logo from "~/assets/images/coatOfArms.png";

export const Header: FCWithChildren = (): JSX.Element => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Image src={logo}></Image>
        <Text size="2rem" color="onPrimary" weight="bold">
          BRASIL IMPÉRIO
        </Text>
      </LogoWrapper>
      <MenuWrapper>
        {["SOBRE", "BLOG", "PT"].map((title) => (
          <Button
            width={"100%"}
            backgroundColor={"transparent"}
            borderRadius="100px"
            fontColor="onPrimary"
            fontSize="1.3rem"
            fontWeight="bold"
            paddingX="2rem"
            paddingY="1rem"
            title={title}
            type="submit"
            isHover
          />
        ))}
      </MenuWrapper>
    </Wrapper>
  );
};
