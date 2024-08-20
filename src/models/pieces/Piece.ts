import { Cell } from "../CellModel";
import { Colors } from "../Colors";

export enum PiecesNames {
    PIECE = "",
    PAWN = "pawn",
    ROOK = "rook",
    KNIGHT = "knight",
    BISHOP = "bishop",
    QUEEN = "queen",
    KING = "king"
} 

export class Piece {
    color: Colors;
    logo: string | null;
    cell: Cell;
    name: PiecesNames;
    id: number;

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.logo = null;
        this.name = PiecesNames.PIECE;
        this.cell.piece = this;
        this.id = Math.random();
    }

    canMove(cell: Cell): boolean {
        return true;
    }

    move(cell: Cell) {

    }
}