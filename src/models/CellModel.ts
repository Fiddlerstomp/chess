import { Board } from "./BoardModel";
import { Colors } from "./Colors";
import { Piece } from "./pieces/Piece";

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    piece: Piece | null;
    board: Board;
    available: boolean;
    id: string;

    constructor(board: Board, x: number, y: number, color: Colors, piece: Piece | null) {
        this.board = board;
        this.x = x;
        this.y = y;
        this.color = color;
        this.piece = piece;
        this.available = false;
        this.id = `${x}${y}`;
    }
}