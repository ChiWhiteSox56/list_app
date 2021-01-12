import logo from './logo.svg';
import './App.css';

function App() {
  const flavors = [
    "lemon",
    "lime",
    "cherry",
    "rum raisin",
    "vanilla",
    "banana",
    "cotton candy",
    "tangerine",
    "pistachio",
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

  const renderListItem = (flavors, index) => {
      return(
        <div className="ListItem"> {
          flavors.map(index) => {
            <ListItem flavorName={flavors[index]} key={index} />
          }
          </div>
        }
      )
  };

  function ListItem({flavorName}) { // props are flavorName, (flavorImage, hasOrdered will add later)
    <>
    <div>
      <h1>{flavorName}</h1>
    </div>
    </>
  }
}

export default App;
