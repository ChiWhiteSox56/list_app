import styled from "styled-components"
import { color } from "styled-system"
import Text from "./Text";

const Label = styled.h2`
  padding-top: 20px;
  ${color}
  `;

function FlavorLabel ({ children, isSelected }) {

  const flavorLabel = isSelected ? "#fff" : "#000"

  return (
    <Label color={flavorLabel}>
    <Text>
      {children}
    </Text>
  </Label>
  )
}
 
export default FlavorLabel;