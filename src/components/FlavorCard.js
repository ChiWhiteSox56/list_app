import Card from "./Card";
import FlavorLabel from "./FlavorLabel";

function FlavorCard({ flavor, addToSelected, selected }) {
  // onClick event on Card to call setSelected in the App state
  // pass the flavour to the state
  const background = selected ? "#0039e6" : "#fff";

  return (
    <Card
      alignItems="center"
      pb="20px"
      border="3px solid #00008b"
      borderRadius="24px"
      bg={background}
      onClick={() => addToSelected(flavor.flavor)}
    >
      <FlavorLabel isSelected={selected}>{flavor.flavor}</FlavorLabel>
      <img
        variant="right"
        aria-label={flavor.flavor}
        src={flavor.image}
        alt={`${flavor.flavor} ice`}
      />
    </Card>
  );
}

export default FlavorCard;
