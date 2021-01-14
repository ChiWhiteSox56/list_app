import './App.css';
import { getFlavors } from './data/flavors';
import { ButtonBase, Grid } from '@material-ui/core';


const flavors = getFlavors()

function FlavorCard({flavor}) {
  return (
    <>
    <Grid container className="myGrid" justify="center">
      <Grid item className="griddyImageColumn" >
        <ButtonBase className="myGridButton">
            <img aria-label={flavor.flavor} src={flavor.image} />
          </ButtonBase>
          </Grid>
      <Grid item className="myGridTextColumn" xs={12} sm container>
      <h2>{flavor.flavor}</h2>
      {/* </Grid>
      <Grid item className="griddyFlavorImage"> */}
      {/* <img
        aria-label={flavor.flavor}
        src={flavor.image} */}
        {/* //alt={`An image of ${flavor.flavor} ice`}
        /> */}
      </Grid>
    </Grid>
    </>
  );
};

// function FlavorCard({flavor}) {
//   return (
//     <Card border="info">
//       <Card.Body>
//         <Card.Text><h2>{flavor.flavor}</h2></Card.Text>
//         <Card.Img
//           className="img"
//           variant="right"
//           aria-label={flavor.flavor}
//           src={flavor.image}
//           alt={`An image of ${flavor.flavor} ice`}
//           />
//         </Card.Body>
//     </Card>
//   );
// };

function App() {

  return (
    <div className="list">{flavors.map((item) => <FlavorCard flavor={item} key={item.flavor}/> )}</div>
  );
}

export default App;
