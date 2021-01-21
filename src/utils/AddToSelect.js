const addToSelect = ({ selected, setSelected, itemToAdd }) => {
    const newItems = [...selected];
    const matchedItem = newItems.find((item) => {
      return item.flavour === itemToAdd
    });
  
    if (matchedItem) {
      matchedItem.isActive = !matchedItem.isActive;
      setSelected(newItems);
      console.log(selected)
    } else {
      setSelected([...selected, {
        flavour: itemToAdd,
        isActive: true,
      }])
      console.log(selected)
    }
  }

  export default addToSelect;