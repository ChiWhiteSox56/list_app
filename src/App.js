import { getFlavors } from './data/flavors';
import addToSelect from './utils/AddToSelect';
import _suggestRandomFlavor from './utils/SuggestRandomFlavor';
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

  const suggestRandomFlavor = () => {
    _suggestRandomFlavor({flavors, selected})
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
        
          const matchedItem = selected.find((selectedItem) => {
            console.log(selectedItem.flavor)
            console.log(item.flavor)
            return selectedItem.flavor === item.flavor
          });
          // 
          // set a selected property here based on a find on the selected state

          return <FlavorCard flavor={item} key={item.flavor} addToSelected={addToSelected} selected={matchedItem?.isActive} />
 }       )}</List>
      </Container>
    </>
  );
}

export default App;
