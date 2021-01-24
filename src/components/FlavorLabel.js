import styled from "styled-components"
import Text from "./Text";

const Label = styled.h2`
  padding-top: 20px;
    color: black;
`;

const FlavorLabel = ({ children }) => (
  <Label>
    <Text>
      {children}
    </Text>
  </Label>
)
 
export default FlavorLabel;