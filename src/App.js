import logo from './logo.svg';
import './App.css';

function App() {
  const [gridSize, changeGridSize] = useState(100)
  const [algorithm, changeAlgorithm] = useState("dykstras")
  const [wall, toggleWall] = useState(false)

  return (
    <div className="App">

    </div>
  );
}

export default App;
