import styled from "styled-components"
import Text from "./Text";

const Label = styled.h2`
  padding-top: 20px;
  color: black;

  @media (min-width: 600px) {
    color: blue;
  }

  @media (min-width: 700px) {
    color: red;
  }
`;

const FlavorLabel = ({ children }) => (
  <Label>
    <Text>
      {children}
    </Text>
  </Label>
)
 
export default FlavorLabel;