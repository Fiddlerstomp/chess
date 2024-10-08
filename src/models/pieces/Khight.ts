import { Cell } from "../CellModel";
import { Colors } from "../Colors";
import { Piece, PiecesNames } from "./Piece";
import blackPieces from "../../assets/blackPieces.svg";
import whitePieces from "../../assets/whitePieces.svg";

export class Knight extends Piece {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.name = PiecesNames.KNIGHT;
        this.logo = `${this.color === "white" ? whitePieces : blackPieces}#${PiecesNames.KNIGHT}`;
    }
}