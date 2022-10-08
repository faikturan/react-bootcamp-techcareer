import './App.css';
import Pokegame from './components/Pokegame';

import data from "./data/pokedexCards"


function App() {
  return (
    <div className="App">
     <h1 className="App__title">Pokegame</h1>
     <Pokegame data={data} />
    </div>
  );
}

export default App;
