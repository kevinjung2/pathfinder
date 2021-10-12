import './stylesheets/App.css';
import { useState } from 'react';

import OptionsBar from './containers/OptionsBar'
import Grid from './containers/Grid'

function App() {
  const [gridSize, changeGridSize] = useState("small")
  const [algorithm, changeAlgorithm] = useState("dykstras")
  const [wall, toggleWall] = useState(false)

  return (
    <div className="App">
      <OptionsBar changeGridSize={changeGridSize} changeAlgorithm={changeAlgorithm} toggleWall={toggleWall} />
      <Grid gridSize={gridSize} />
    </div>
  );
}

export default App;
