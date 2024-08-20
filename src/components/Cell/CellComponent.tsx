import { Cell } from "../../models/CellModel";

type CellProps = {
  cell: Cell;
}

const CellComponent = (props: CellProps) => {
  return (
    <div className={`cell ${props.cell.color}`}>

    </div>
  )
}

export default CellComponent;