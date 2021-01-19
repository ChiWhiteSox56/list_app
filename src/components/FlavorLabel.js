import styled from "styled-components"

const FlavorLabel = styled.h2`
  color: black;

  @media (min-width: 600px) {
    color: blue;
  }

  @media (min-width: 700px) {
    color: red;
  }
`;

export default FlavorLabel;