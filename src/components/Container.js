import styled from "styled-components"
import Flex from './Flex'

const Container = styled(Flex).attrs(() => ({
    alignContent: "center",
    paddingTop: "24px",
    paddingLeft: "1rem",
    }))`
    background-color: #add8e6;
`;

export default Container;