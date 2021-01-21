import Card from './Card'
import FlavorLabel from './FlavorLabel'

function FlavorCard({flavor, addToSelected}) {
    // onClick event on Card to call setSelected in the App state
    // pass the flavour to the state
  
    return (
      <Card alignItems="center" pb="20px" border="3px solid #0039e6" borderRadius="24px" bg="#fff" onClick={() => addToSelected(flavor.flavor)}>
          <FlavorLabel>{flavor.flavor}</FlavorLabel>
          <img
            variant="right"
            aria-label={flavor.flavor}
            src={flavor.image}
            alt={`${flavor.flavor} ice`}
            />
      </Card>
    );
  };

  export default FlavorCard;