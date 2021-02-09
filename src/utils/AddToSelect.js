const addToSelect = ({ selected, setSelected, itemToAdd }) => {
  const newItems = [...selected];
  const matchedItem = newItems.find((item) => {
    return item.flavor === itemToAdd;
  });

  if (matchedItem) {
    matchedItem.isActive = !matchedItem.isActive;
    setSelected(newItems);
  } else {
    setSelected([
      ...selected,
      {
        flavor: itemToAdd,
        isActive: true,
      },
    ]);
  }
};

export default addToSelect;
