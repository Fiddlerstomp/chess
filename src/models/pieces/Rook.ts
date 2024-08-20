import { Cell } from "../CellModel";
import { Colors } from "../Colors";
import { Piece, PiecesNames } from "./Piece";
import blackPieces from "../../assets/blackPieces.svg";
import whitePieces from "../../assets/whitePieces.svg";

export class Rook extends Piece {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.name = PiecesNames.ROOK;
        this.logo = `${this.color === "white" ? whitePieces : blackPieces}#${PiecesNames.ROOK}`;
    }
}