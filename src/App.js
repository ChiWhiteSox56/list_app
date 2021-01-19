import './App.css';
import { getFlavors } from './data/flavors';
import Button from './components/Button'
import Card from './components/Card'
import Container from './components/Container'
import FlavorLabel from './components/FlavorLabel'
import Header from './components/Header'
import List from './components/List'
import PageTitle from './components/PageTitle'

const flavors = getFlavors()

function FlavorCard({flavor}) {

  return (
    <Card alignItems="center" pb="20px" border="3px solid #0039e6" borderRadius="24px" bg="#fff">
        <FlavorLabel>{flavor.flavor}</FlavorLabel>
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
    <>
    <Header>
      <PageTitle>THE LEMON ICE KING OF CORONA</PageTitle>
        <div>
          <Button>Flavor suggestion generator</Button>
          <Button>Take me there!</Button>
        </div>
      </Header>
      <Container>
    <List>{flavors.map((item) => <FlavorCard flavor={item} key={item.flavor}/> )}</List>
    </Container>
    </>
  );
}

export default App;
