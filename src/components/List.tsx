import { FC } from "react";
import styled from "styled-components";
import Flex from "./Flex";

const List: FC = styled(Flex).attrs(() => ({
  flexWrap: "wrap",
  justifyContent: "center",
}))``;

export default List;
