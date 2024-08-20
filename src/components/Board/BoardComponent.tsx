import React from "react";
import { Board } from "../../models/BoardModel";
import CellComponent from "../Cell/CellComponent";

type BoardProps = {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent = (props: BoardProps) => {
  return (
    <div className="board">
      {props.board.cells.map((row, index) =>
        <React.Fragment key={index}>
          {row.map(cell =>
            <CellComponent cell={cell} />
          )}
        </React.Fragment>
      )}
    </div>
  )
}

export default BoardComponent;