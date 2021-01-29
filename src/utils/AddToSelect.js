const addToSelect = ({ selected, setSelected, itemToAdd }) => {
    const newItems = [...selected];
    const matchedItem = newItems.find((item) => {
      return item.flavor === itemToAdd
    });
    
    if (matchedItem) {
      matchedItem.isActive = !matchedItem.isActive;
      setSelected(newItems);
      // item is only marked false if it has been marked true
    } else {
      setSelected([...selected, {
        flavor: itemToAdd,
        isActive: true,
      }])
      console.log(selected)
    }
  }

  export default addToSelect;