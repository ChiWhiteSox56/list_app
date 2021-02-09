import { FC } from "react";
import styled from "styled-components";
import { typography } from "styled-system";

const Text: FC = styled.p`
  font-family: "Oswald", Arial, Helvetica, sans-serif;

  ${typography}
`;

export default Text;
