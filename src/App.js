import './App.css';
import { getFlavors } from './data/flavors';
import { Card, Image, Row, Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

const flavors = getFlavors()

function ListItem({flavor}) {
  return (
    <Card border="info">
      <Card.Body>
        <Card.Text><h2>{flavor.flavor}</h2></Card.Text>
        <Card.Img
          className="img"
          variant="right"
          aria-label={flavor.flavor}
          src={flavor.image}
          alt={`An image of ${flavor.flavor} ice`}
          />
        </Card.Body>
    </Card>
  );
};

function App() {

  return (
    <div className="list">{flavors.map((item) => <ListItem flavor={item} key={item.flavor}/> )}</div>
  );
}

export default App;
