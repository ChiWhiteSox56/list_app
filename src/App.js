import './App.css';
import { getFlavors } from './data/flavors';
import { Container, Image, Row } from "react-bootstrap"

const flavors = getFlavors()

function ListItem({flavor}) {
  return (
    <Container>
    <Row >
      <h2>{flavor.flavor}</h2>
      <Image 
       aria-label={flavor.flavor}
       src={flavor.image}
       alt={`An image of ${flavor.flavor} ice`}
      />
      </Row>
    </Container>
  );
};

function App() {

  return (
    <div className="list">{flavors.map((item) => <ListItem flavor={item} key={item.flavor}/> )}</div>
  );
}

export default App;
