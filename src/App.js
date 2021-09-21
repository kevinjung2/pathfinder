import logo from './logo.svg';
import './App.css';

import OptionsBar from './containers/OptionsBar'

function App() {
  const [gridSize, changeGridSize] = useState(100)
  const [algorithm, changeAlgorithm] = useState("dykstras")
  const [wall, toggleWall] = useState(false)

  return (
    <div className="App">
      <OptionsBar changeGridSize={changeGridSize} changeAlgorithm={changeAlgorithm} toggleWall={toggleWall} />
    </div>
  );
}

export default App;
