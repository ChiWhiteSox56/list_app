import { getFlavors } from "./data/flavors";
import updateSelectedItems from "./utils/UpdateSelectedItems";
import _suggestRandomFlavor from "./utils/SuggestRandomFlavor";
import Button from "./components/Button";
import Container from "./components/Container";
import FlavorCard from "./components/FlavorCard";
import Header from "./components/Header";
import List from "./components/List";
import PageTitle from "./components/PageTitle";
import { GlobalCSS } from "./components/GlobalCSS";
import React, { useState } from "react";
import { Modal } from "./components/Modal";
import ModalTitle from "./components/modal/ModalTitle";
import ModalImage from "./components/modal/ModalImage";
import "./styles.css";

const flavors = getFlavors();

function App() {
  // next time: move this to a custom hook
  // setup a useState hook, that will control what has been selected
  const [selected, setSelected] = useState([]); // [] is default
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [randomFlavor, setRandomFlavor] = useState(null);
  const [unselectedFlavors, setUnselectedFlavors] = useState(flavors);

  const updateSelected = (itemToAddOrDelete) => {
    updateSelectedItems({ selected, setSelected, unselectedFlavors, setUnselectedFlavors, itemToAddOrDelete });
    getAllUnselectedFlavors();
  };

  const toggleModal = () => {

    let randomNum = Math.floor(Math.random() * unselectedFlavors.length)
    setRandomFlavor(unselectedFlavors[randomNum]);
    setIsModalOpen(!isModalOpen);
  };

  const getAllUnselectedFlavors = () => {

    return flavors.forEach((item) => {

      const itemIsInSelectedArray = selected.find((selectedItem) => {
        console.log("selectedItem: " + {selectedItem})
        //console.log("flavor: " + selectedItem.flavor + " => " + (selectedItem.flavor === item.flavor && selectedItem.isActive))
        return selectedItem.flavor === item.flavor && selectedItem.isActive
      })

      console.log("itemIsInSelectedArray: " + itemIsInSelectedArray)
      if (!Boolean(itemIsInSelectedArray)) {
        setUnselectedFlavors([...unselectedFlavors, item])
      }
    });
  };

  return (
    <>
      <GlobalCSS />
      <Header>
        <PageTitle>THE LEMON ICE KING OF CORONA</PageTitle>
        <Modal isOpen={isModalOpen} onClose={toggleModal} unselectedFlavors={unselectedFlavors} setRandomFlavor={setRandomFlavor}>
          <ModalImage>
            <img src={randomFlavor?.image} alt={randomFlavor?.flavor} />
          </ModalImage>
          <ModalTitle>{randomFlavor?.flavor}</ModalTitle>
        </Modal>
        <div>
          <Button
            color="#00008b"
            backgroundColor="#fff"
            border="1px solid #00008b"
            onClick={toggleModal}
          >
            Flavor suggestion generator
          </Button>
          <Button
            color="#00008b"
            backgroundColor="#fff"
            border="1px solid #00008b"
            as="a"
            href="https://maps.google.com?q=+40.7434277064778+-73.85510556627074"
          >
            Take me there!
          </Button>
        </div>
      </Header>
      <Container>
        <List>
          {flavors.map((item) => {
            const matchedItem = selected.find((selectedItem) => {
              return selectedItem.flavor === item.flavor;
            });
            //
            // set a selected property here based on a find on the selected state

            return (
              <FlavorCard
                flavor={item}
                key={item.flavor}
                updateSelected={updateSelected}
                selected={matchedItem?.isActive}
              />
            );
          })}
        </List>
      </Container>
    </>
  );
}

export default App;
