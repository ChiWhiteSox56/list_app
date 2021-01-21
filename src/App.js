import { getFlavors } from './data/flavors';
import addToSelect from './utils/AddToSelect';
import Button from './components/Button'
import Container from './components/Container'
import FlavorCard from './components/FlavorCard'
import Header from './components/Header'
import List from './components/List'
import PageTitle from './components/PageTitle'
import { GlobalCSS } from './components/GlobalCSS'
import React, { useState } from "react"

const flavors = getFlavors()

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
