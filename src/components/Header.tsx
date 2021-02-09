import { FC } from "react";
import styled from "styled-components";
import Flex from "./Flex";

const Header: FC = styled(Flex).attrs(() => ({
  height: "75px",
  display: "flex",
  px: "24px",
  justifyContent: "space-between",
  alignItems: "center",
}))`
  background-color: #0039e6;
`;

export default Header;
