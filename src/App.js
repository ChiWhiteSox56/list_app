import './App.css';
import { getFlavors } from './data/flavors';
import styled from "styled-components"
import { flexbox, space, layout, border } from "styled-system";

const flavors = getFlavors()

// flex-direction: row | row-reverse | column | column-reverse;

const Flex = styled.div`
  display: flex;
  ${flexbox}
  ${space}
  ${layout}
`;

const Card = styled(Flex).attrs(() => ({
  width: ["50%", "33.333%", "20%"],
  flexDirection: "column-reverse",
}))`
  ${border}
`;

const Title = styled.h2`
  color: black;

  @media (min-width: 600px) {
    color: blue;
  }

  @media (min-width: 700px) {
    color: red;
  }
`;

// flex-wrap: nowrap | wrap | wrap-reverse;

const List = styled(Flex).attrs(() => ({
  flexWrap: "wrap",
}))``;

function FlavorCard({flavor}) {
  return (
    <Card alignItems="center" pb="20px" border="1px solid blue">
        <Title>{flavor.flavor}</Title>
        <img
          className="img"
          variant="right"
          aria-label={flavor.flavor}
          src={flavor.image}
          alt={`${flavor.flavor} ice`}
          />
    </Card>
  );
};

function App() {

  return (
    <List>{flavors.map((item) => <FlavorCard flavor={item} key={item.flavor}/> )}</List>
  );
}

export default App;
