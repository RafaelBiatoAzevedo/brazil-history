import styled from "styled-components";

import backgroundHeader from "~/assets/images/backgroundHeader.jpg";

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  height: 11rem;
  justify-content: space-between;
  //background: linear-gradient(#f7d800, #f7d800, #f7b400);
  background-image: url(${backgroundHeader});
  background-repeat: no-repeat;
  background-size: 100% 11rem;
`;
