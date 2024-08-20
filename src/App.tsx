import whitePices from "./assets/whitepices.svg";
import "./App.css";
import Board from "./components/Board/Board";

function App() {
  return (
    <div className="App">
      {/* <svg>
        <use xlinkHref={`${whitePices}#${"queen"}`} />
      </svg> */}
      <Board />
    </div>
  )
}

export default App
