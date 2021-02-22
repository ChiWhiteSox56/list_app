import { FC } from 'react'
import styled from "styled-components";
import { border, color } from "styled-system";
import Text from "./Text";

interface ButtonProps {
  color: string,
  border: string,
  backgroundColor: string,
  onClick: () => void,
}

const ButtonContainer = styled.button`
  display: inline-block;
  font-size: 16px;
  margin: 10px;
  padding: 10px 20px;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  text-decoration: none;
  ${border}
  ${color}
`;

const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <ButtonContainer {...props}>
    <Text>{children}</Text>
  </ButtonContainer>
);

export default Button;
