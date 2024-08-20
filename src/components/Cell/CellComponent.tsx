import { Cell } from "../../models/CellModel";

type CellProps = {
  cell: Cell;
}

const CellComponent = (props: CellProps) => {
  return (
    <div className={`cell ${props.cell.color}`}>
      {props.cell.piece?.logo && 
      <svg>
        <use xlinkHref={props.cell.piece.logo} />
      </svg>
      }
    </div>
  )
}

export default CellComponent;