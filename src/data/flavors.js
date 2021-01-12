const flavors = [
    {flavor: "Spumoni", id: "ice_spumoni"},
    {flavor: "Root Beer", id: "ice_root_beer"},
    {flavor: "Lemon Lime", id: "ice_lemon_lime"},
    {flavor: "Oreo", id: "ice_oreo"},
    {flavor: "Cool Blue", id: "ice_cool_blue"},
    {flavor: "Lemon", id: "ice_lemon"},
    {flavor: "Lime", id: "ice_lime"},
    {flavor: "Mint Chip", id: "ice_mint_chip"},
    {flavor: "Cotton Candy", id: "ice_cotton_candy"},
    {flavor: "Pineapple", id: "ice_pineapple"},
    {flavor: "Raspberry", id: "ice_raspberry"},
    {flavor: "Rainbow", id: "ice_rainbow"},
    {flavor: "Strawberry Banana", id: "ice_strawberry_banana"},
    {flavor: "Cherry", id: "ice_cherry"},
    {flavor: "Mango", id: "ice_mango"},
    {flavor: "Licorice", id: "ice_licorice"},
    {flavor: "Apple", id: "ice_apple"},
    {flavor: "Bubble Gum", id: "ice_bubble_gum"},
    {flavor: "Strawberry", id: "ice_strawberry"},
    {flavor: "Blueberry", id: "ice_blueberry"},
    {flavor: "Pistachio", id: "ice_pistachio"},
    {flavor: "Pina Colada", id: "ice_pina_colada"},
    {flavor: "Rum Raisin", id: "ice_rum_raisin"},
    {flavor: "Orange", id: "ice_orange"},
    {flavor: "Tangerine", id: "ice_tangerine"},
    {flavor: "Vanilla", id: "ice_vanilla"},
    {flavor: "Sour Apple", id: "ice_sour_apple"},
    {flavor: "Grape", id: "ice_grape"},
    {flavor: "Banana", id: "ice_banana"},
    {flavor: "Coconut", id: "ice_coconut"},
    {flavor: "Peach", id: "ice_peach"},
    {flavor: "Cantaloupe", id: "ice_cantaloupe"},
    {flavor: "Mint", id: "ice_mint"},
    {flavor: "Fruit Cocktail", id: "ice_fruit_cocktail"},
    {flavor: "Vanilla Chip", id: "ice_vanilla_chip"},
    {flavor: "Chocolate", id: "ice_chocolate"},
    {flavor: "Watermelon", id: "ice_watermelon"},
    {flavor: "Almond", id: "ice_almond"},
    {flavor: "Orange-Vanilla", id: "ice_orange_vanilla"},
    {flavor: "Cherry-Vanilla", id: "ice_cherry_vanilla"},
    {flavor: "Peanut Butter", id: "ice_peanut_butter"},
    {flavor: "Coffee", id: "ice_coffee"}
]

export function getFlavors() {
    return flavors.map((item) => ({
        ...item, 
        image: require(`../images/${item.id}.png`).default
    }))
}
