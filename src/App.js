import { getFlavors } from './data/flavors';
import Button from './components/Button'
import Card from './components/Card'
import Container from './components/Container'
import FlavorLabel from './components/FlavorLabel'
import Header from './components/Header'
import List from './components/List'
import PageTitle from './components/PageTitle'
import { GlobalCSS } from './components/GlobalCSS'
import React, { useState } from "react"

const flavors = getFlavors()

// Move to a component file
function FlavorCard({flavor, addToSelected}) {
  // onClick event on Card to call setSelected in the App state
  // pass the flavour to the state

  return (
    <Card alignItems="center" pb="20px" border="3px solid #0039e6" borderRadius="24px" bg="#fff" onClick={() => addToSelected(flavor.flavor)}>
        <FlavorLabel>{flavor.flavor}</FlavorLabel>
        <img
          variant="right"
          aria-label={flavor.flavor}
          src={flavor.image}
          alt={`${flavor.flavor} ice`}
          />
    </Card>
  );
};

// Move to a utility
const addToSelect = ({ selected, setSelected, itemToAdd }) => {
  const newItems = [...selected];
  const matchedItem = newItems.find((item) => {
    return item.flavour === itemToAdd
  });

  if (matchedItem) {
    matchedItem.isActive = !matchedItem.isActive;
    setSelected(newItems);
  } else {
    setSelected([...selected, {
      flavour: itemToAdd,
      isActive: true,
    }])
  }
}

function App() {
  // next time: move this to a custom hook
  // setup a useState hook, that will control what has been selected
  const [selected, setSelected] = useState([]) // [] is default state

  const addToSelected = (itemToAdd) => {
    addToSelect({ selected, setSelected, itemToAdd });
  }

  return (
    <>
      <GlobalCSS />
      <Header>
        <PageTitle>THE LEMON ICE KING OF CORONA</PageTitle>
        <div>
          <Button>Flavor suggestion generator</Button>
          <Button as="a" href="https://maps.google.com?q=+40.7434277064778+-73.85510556627074">Take me there!</Button>
        </div>
      </Header>
      <Container>
        <List>{flavors.map((item) => {
        
          // const matchedItem = newItems.find((item) => {
          //    return item.flavour === itemToAdd
          // });
          // 
          // set a selected property here based on a find on the selected state

          return <FlavorCard flavor={item} key={item.flavor} addToSelected={addToSelected} />
 }       )}</List>
      </Container>
    </>
  );
}

export default App;
