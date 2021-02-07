function _suggestRandomFlavor({flavors, selected}) {
    const unselectedFlavors = flavors.filter((flavor) => {
        const isSelected = selected.find(selectedFlavor => 
            selectedFlavor.isActive
        )
        return isSelected
    })
    // console.log({unselectedFlavors})
}

export default _suggestRandomFlavor;

// make list of unselected ListItemSecondaryAction
// use math function to randomize selection of unselected items
// in filter, is active and selectedFlavor.flavor === flavor.flavor