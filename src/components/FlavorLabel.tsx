import { FC } from 'react'
import styled from "styled-components"
import { color } from "styled-system"
import Text from "./Text";

interface FlavorLabelProps {
  isSelected: boolean
}

const Label = styled.h2`
  padding-top: 20px;
  ${color}
  `;

const FlavorLabel: FC<FlavorLabelProps> = ({ children, isSelected }) => {

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