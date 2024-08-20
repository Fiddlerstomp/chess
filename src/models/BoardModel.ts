import { Cell } from "./CellModel";
import { Colors } from "./Colors";

export class Board {
    cells: Cell[][] = [];

    public initCells() {
        for(let x = 0; x < 8; x++) {
            const row: Cell[] = [];
            for(let y = 0; y < 8; y++) {
                const color: Colors = (x + y) % 2 === 0 ? Colors.WHITE : Colors.BLACK;
                row.push(new Cell(this, x, y, color, null));
            }
            this.cells.push(row);
        }
    }
}