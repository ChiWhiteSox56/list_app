import { FC } from "react";
import styled from "styled-components";
import { border, color } from "styled-system";
import Flex from "./Flex";

const Card: FC = styled(Flex).attrs(() => ({
  margin: "6px",
  maxWidth: "256px",
  paddingTop: "24px",
  width: ["50%", "33.333%", "20%"],
  flexDirection: "column-reverse",
}))`
  ${border}
  ${color}
`;

export default Card;
