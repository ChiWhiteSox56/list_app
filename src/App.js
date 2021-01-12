import './App.css';
import { flavors } from './data/flavors';
import { Container, Image, Row } from "react-bootstrap"
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    renderListItem(flavors)
  }, []);

  const renderListItem = (flavors, index) => {
      return (
        <Container>
        <Row key={index} >
          <h2>{flavors.flavor}</h2>
          <Image 
           src={'./images/' + flavors.image + '.png'}
           alt={flavors.image}
          />
          </Row>
        </Container>
      );
  };

  return (
    <div classname="list">{flavors.map(renderListItem)}</div>
  );
}

export default App;
