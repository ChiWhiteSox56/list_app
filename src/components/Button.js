import styled from "styled-components"
import Text from "./Text";

const Container = styled.button`
  display: inline-block;
  font-size: 16px;
  margin: 10px;
  padding: 10px 20px;
  border-radius: 3px;
  background-color: #fff;
  border-width: 1px;
  border-color: #00008b;
  border-style: solid;
  color: #00008b;
  cursor: pointer;
  text-decoration: none;
`; 

const Button = ({ children, ...props }) => (
  <Container {...props}>
    <Text>
      {children}
    </Text>
  </Container>
)

export default Button;