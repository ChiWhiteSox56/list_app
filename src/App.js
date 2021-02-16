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
  const [unselectedFlavors, setUnselectedFlavors] = useState([]);

  const updateSelected = (itemToAddOrDelete) => {
    updateSelectedItems({ selected, setSelected, itemToAddOrDelete });
  };

  const toggleModal = () => {
    // console.log(selected);
    setRandomFlavor(flavors[Math.floor(Math.random() * 41)]);
    setIsModalOpen(!isModalOpen);
    getAllUnselectedFlavors();
    // console.log(unselectedFlavors);
  };

  const getAllUnselectedFlavors = () => {
    const d = [];

    flavors.map((item) => {
      if (!selected.includes(item.flavor)) {
        d.push(item);
      }
    });

    setUnselectedFlavors(d);
    console.log(flavors);
    console.log(selected);
  };

  return (
    <>
      <GlobalCSS />
      <Header>
        <PageTitle>THE LEMON ICE KING OF CORONA</PageTitle>
        <Modal isOpen={isModalOpen} onClose={toggleModal}>
          <ModalImage>
            <img src={randomFlavor?.image} alt={randomFlavor?.flavor} />
          </ModalImage>
          <ModalTitle>{randomFlavor?.flavor}</ModalTitle>
        </Modal>
        <div>
          <Button
            color="#00008b"
            backgroundColor="#fff"
            borderColor="#00008b"
            onClick={toggleModal}
          >
            Flavor suggestion generator
          </Button>
          <Button
            color="#00008b"
            backgroundColor="#fff"
            borderColor="#00008b"
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
