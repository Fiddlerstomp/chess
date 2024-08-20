import "./App.css";
import BoardComponent from "./components/Board/BoardComponent";
import { useEffect, useState } from "react";
import { Board } from "./models/BoardModel";

function App() {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart();
  }, []);

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addPieces();
    setBoard(newBoard);
  }

  return (
    <div className="App">
      <BoardComponent board={board} setBoard={setBoard}/>
    </div>
  )
}

export default App
