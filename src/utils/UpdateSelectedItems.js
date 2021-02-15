const updateSelectedItems = ({ selected, setSelected, itemToAddOrDelete }) => {
  const newSelectedItems = [...selected];
  const matchedItem = newSelectedItems.find((item) => {
    // see if an item (item.flavor) exists in the array that matches itemToAddOrDelete (flavor.flavor)
    return item.flavor === itemToAddOrDelete;
  });

  if (matchedItem) {
    // if item exists in selected
    matchedItem.isActive = !matchedItem.isActive;
    setSelected(newSelectedItems.filter((item) => item.isActive));
  } else {
    setSelected([
      ...selected,
      {
        flavor: itemToAddOrDelete,
        isActive: true,
      },
    ]);
  }
};

export default updateSelectedItems;
