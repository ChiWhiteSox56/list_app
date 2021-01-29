// function _suggestRandomFlavord({flavors, selected}) {
//     const unselectedFlavors = flavors.filter((flavor) => {
//         const isSelected = selected.find(selectedFlavor => 
//             selectedFlavor.isActive
//         )
//         return isSelected
//     })
//     console.log({unselectedFlavors})
// }

// if item is in selected, we do not want it in unselectedFlavors
function _suggestRandomFlavor({flavors, selected}) {
    const _difference = new Set(flavors)
    for (let f of selected) {
        if (_difference.has(f.flavor)) {
            // get index of this element in _difference

            _difference.splice(indexToStartAt, 1) // can't use delete; will leave empty element
        }
        // } else {
        //     _difference.add(f)
        // }
    }    
    console.log(_difference)

}
//flavor.flavor (allFlavors) = f.flavor (selected)

export default _suggestRandomFlavor;

// make list of unselected ListItemSecondaryAction
// use math function to randomize selection of unselected items
// in filter, is active and selectedFlavor.flavor === flavor.flavor