import './App.css';
import { flavors } from './data/flavors';
import { Card } from "react-bootstrap"
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    renderListItem(flavors)
  }, []);

  const renderListItem = (flavors, index) => {
      return (
        <Card key={index} >
          <Card.Title>{flavors.flavor}</Card.Title>
        </Card>
      );
  };

  return (
    <div classname="list">{flavors.map(renderListItem)}</div>
  );
}

export default App;
